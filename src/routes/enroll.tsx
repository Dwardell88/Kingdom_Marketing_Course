import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Check, Lock } from "lucide-react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { createCheckoutSession } from "@/lib/checkout.functions";
import { getEnrollment } from "@/lib/course.functions";
import { COURSE_PRICE_LABEL, modules, totalLessons } from "@/data/course";

export const Route = createFileRoute("/enroll")({
  head: () => ({
    meta: [
      { title: "Enroll — Kingdom Marketing Course" },
      {
        name: "description",
        content:
          "Get lifetime access to all 7 modules of Kingdom Marketing: Biblical principles, FTC compliance, and practical application for Christian businesses.",
      },
      { property: "og:title", content: "Enroll — Kingdom Marketing Course" },
      {
        property: "og:description",
        content: "Lifetime access to 7 modules on faithful, lawful, effective marketing.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EnrollPage,
});

const included = [
  `All 7 modules and ${totalLessons} lessons`,
  "Written marketing standard template",
  "FTC claims-file and substantiation worksheet",
  "Pre-publication review checklist",
  "Endorser and testimonial disclosure guide",
  "Lifetime access, including future updates",
];

function EnrollPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const checkout = useServerFn(createCheckoutSession);
  const fetchEnrollment = useServerFn(getEnrollment);
  const [busy, setBusy] = useState(false);

  const { data: enrollment } = useQuery({
    queryKey: ["enrollment"],
    queryFn: () => fetchEnrollment(),
    enabled: Boolean(user),
  });

  async function buy() {
    if (!user) {
      navigate({ to: "/auth" });
      return;
    }
    setBusy(true);
    try {
      const res = await checkout({ data: { origin: window.location.origin } });
      if (!res.configured || !res.url) {
        toast.error("Checkout isn't connected yet. Enable payments to accept orders.");
        return;
      }
      window.location.href = res.url;
    } catch {
      toast.error("Could not start checkout. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  const owned = enrollment?.hasAccess;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-parchment">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Enrollment
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              One purchase. The whole course.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              No subscription, no upsell ladder, no expiring access. The price you see is the total
              price you pay.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-xl border border-border bg-card p-8 shadow-lifted">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-semibold tracking-tight">
                  {COURSE_PRICE_LABEL}
                </span>
                <span className="text-muted-foreground">one time, USD</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Total price. Applicable tax, if any, is shown before payment.
              </p>

              <ul className="mt-7 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {owned ? (
                  <Button asChild variant="gold" size="lg" className="w-full">
                    <Link to="/course">Go to your course</Link>
                  </Button>
                ) : (
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={buy}
                    disabled={busy || loading}
                  >
                    {busy ? "Opening checkout…" : `Enroll for ${COURSE_PRICE_LABEL}`}
                  </Button>
                )}
                <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                  <Lock className="h-3.5 w-3.5" />
                  Secure checkout by Stripe
                </p>
                {!user && !loading ? (
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    You'll sign in first so your access is saved to your account.
                  </p>
                ) : null}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background p-8">
              <h2 className="font-display text-xl font-semibold">What you'll cover</h2>
              <ol className="mt-5 space-y-3.5">
                {modules.map((m) => (
                  <li key={m.id} className="flex gap-3 text-sm">
                    <span className="font-display font-semibold tabular-nums text-gold">
                      {String(m.id).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-medium leading-snug">{m.title}</p>
                      <p className="text-muted-foreground">{m.tagline}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link
                to="/curriculum"
                className="mt-6 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                See every lesson →
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-border bg-background p-6">
            <h2 className="font-display text-lg font-semibold">This may not be for you if…</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <li>
                • You want tactics that increase conversion regardless of accuracy. This course
                argues against several of them.
              </li>
              <li>
                • You need jurisdiction-specific legal advice. This is education; it does not
                replace counsel.
              </li>
              <li>
                • You want a done-for-you service. This is training that assumes you will do the
                work.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
