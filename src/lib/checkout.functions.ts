import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const PRICE_CENTS = 24900;
const PRODUCT_NAME = "Kingdom Marketing — 7-Module Course";

/**
 * Creates a Stripe Checkout session for the signed-in user.
 * Returns { configured: false } until a Stripe secret key is available,
 * so the UI can show a clear message instead of failing.
 */
export const createCheckoutSession = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ origin: z.string().url().max(300) }).parse(input))
  .handler(async ({ data, context }) => {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      return { configured: false as const, url: null };
    }

    const body = new URLSearchParams({
      mode: "payment",
      "line_items[0][quantity]": "1",
      "line_items[0][price_data][currency]": "usd",
      "line_items[0][price_data][unit_amount]": String(PRICE_CENTS),
      "line_items[0][price_data][product_data][name]": PRODUCT_NAME,
      allow_promotion_codes: "true",
      success_url: `${data.origin}/purchase-complete?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${data.origin}/enroll`,
      client_reference_id: context.userId,
      "metadata[user_id]": context.userId,
    });

    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    if (!res.ok) {
      console.error("Stripe checkout creation failed", res.status, await res.text());
      throw new Error("Could not start checkout. Please try again.");
    }

    const session = (await res.json()) as { id: string; url: string };
    return { configured: true as const, url: session.url };
  });

/** Verifies a completed Stripe Checkout session and records the purchase. */
export const confirmCheckoutSession = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ sessionId: z.string().min(5).max(200) }).parse(input),
  )
  .handler(async ({ data, context }) => {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) return { granted: false as const };

    const res = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(data.sessionId)}`,
      { headers: { Authorization: `Bearer ${key}` } },
    );
    if (!res.ok) return { granted: false as const };

    const session = (await res.json()) as {
      payment_status?: string;
      amount_total?: number;
      currency?: string;
      metadata?: { user_id?: string };
      client_reference_id?: string;
    };

    const owner = session.metadata?.user_id ?? session.client_reference_id;
    if (session.payment_status !== "paid" || owner !== context.userId) {
      return { granted: false as const };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("purchases").upsert(
      {
        user_id: context.userId,
        stripe_session_id: data.sessionId,
        amount_cents: session.amount_total ?? PRICE_CENTS,
        currency: session.currency ?? "usd",
        status: "paid",
      },
      { onConflict: "stripe_session_id" },
    );
    if (error) throw new Error(error.message);

    return { granted: true as const };
  });
