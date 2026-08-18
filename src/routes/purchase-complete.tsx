import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { confirmCheckoutSession } from "@/lib/checkout.functions";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/purchase-complete")({
  validateSearch: z.object({ session_id: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Purchase complete — Kingdom Marketing" },
      {
        name: "description",
        content: "Your Kingdom Marketing enrollment is confirmed. Start module one.",
      },
      { property: "og:title", content: "Purchase complete — Kingdom Marketing" },
      { property: "og:description", content: "Your course enrollment is confirmed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PurchaseCompletePage,
});

function PurchaseCompletePage() {
  const { session_id } = Route.useSearch();
  const { user, loading } = useAuth();
  const confirm = useServerFn(confirmCheckoutSession);

  const { data, isPending } = useQuery({
    queryKey: ["confirm-checkout", session_id],
    queryFn: () => confirm({ data: { sessionId: session_id! } }),
    enabled: Boolean(session_id) && Boolean(user),
    retry: 2,
  });

  const working = Boolean(session_id) && (loading || isPending);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center bg-parchment px-5 py-20">
        <div className="w-full max-w-lg rounded-xl border border-border bg-card p-9 text-center shadow-lifted">
          {working ? (
            <>
              <Loader2 className="mx-auto h-10 w-10 animate-spin text-muted-foreground" />
              <h1 className="mt-5 font-display text-2xl font-semibold">Confirming your order…</h1>
              <p className="mt-2 text-muted-foreground">This takes just a moment.</p>
            </>
          ) : data?.granted ? (
            <>
              <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
              <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight">
                You're enrolled
              </h1>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Your access is permanent and tied to your account. Start with Module 1 —
                Foundations: Marketing as Stewardship.
              </p>
              <Button asChild variant="hero" size="lg" className="mt-7 w-full">
                <Link to="/course">Open the course</Link>
              </Button>
            </>
          ) : (
            <>
              <h1 className="font-display text-2xl font-semibold">We couldn't confirm that order</h1>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                If you were charged, your access will appear shortly. Check your course page, or
                contact us with your receipt and we'll sort it out immediately.
              </p>
              <div className="mt-7 flex flex-col gap-2">
                <Button asChild variant="default">
                  <Link to="/course">Check my course access</Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link to="/enroll">Back to enrollment</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
