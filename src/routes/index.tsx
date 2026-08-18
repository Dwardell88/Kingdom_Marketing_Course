import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Check, Scale, ShieldCheck, Target } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { COURSE_PRICE_LABEL, modules, totalLessons } from "@/data/course";
import heroImage from "@/assets/hero-desk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kingdom Marketing — Faithful, Lawful Marketing Training" },
      {
        name: "description",
        content:
          "A 7-module course for Christian businesses: Biblical marketing principles, FTC legal compliance, and real-world application. Lifetime access for $249.",
      },
      { property: "og:title", content: "Kingdom Marketing — Faithful, Lawful Marketing Training" },
      {
        property: "og:description",
        content:
          "7 modules on Biblical marketing principles, FTC compliance, and practical application for Christian businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const pillars = [
  {
    icon: BookOpen,
    title: "Biblical principles",
    body: "Stewardship, honest weights, and truthful speech applied to headlines, offers, and funnels — not as decoration, but as operating rules.",
  },
  {
    icon: Scale,
    title: "FTC compliance",
    body: "Section 5, substantiation, endorsement disclosure, pricing, and negative-option rules explained for owners who must comply without a legal department.",
  },
  {
    icon: Target,
    title: "Real application",
    body: "Every lesson ends with something you write, change, or remove from your marketing this week. Positioning, copy, channels, and measurement included.",
  },
];

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden gradient-ink">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                <ShieldCheck className="h-3.5 w-3.5" />
                7 modules · {totalLessons} lessons · lifetime access
              </span>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-foreground text-balance sm:text-5xl lg:text-6xl">
                Market your business <span className="gradient-gold-text">without</span> selling
                your conscience.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-foreground/75">
                Kingdom Marketing trains Christian business owners to promote their work with
                claims that are true, methods that are lawful, and results that hold up. Biblical
                principle and FTC compliance in one coherent system.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to="/enroll">Get the course — {COURSE_PRICE_LABEL}</Link>
                </Button>
                <Button asChild variant="outlineInk" size="xl">
                  <Link to="/curriculum">See the curriculum</Link>
                </Button>
              </div>
              <p className="mt-5 text-sm text-ink-foreground/60">
                One-time payment. No subscription. Total price shown before checkout.
              </p>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="An open Bible beside a laptop on a wooden desk in morning light"
                width={1920}
                height={1080}
                className="rounded-xl border border-gold/20 shadow-lifted"
              />
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Most marketing advice asks you to choose.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Either you adopt tactics you'd be embarrassed to explain in your church lobby, or you
              stay invisible and call it integrity. Both are failures. Honest, specific, legally
              sound marketing is the version that compounds — and this course teaches it as a
              craft.
            </p>
          </div>
        </section>

        {/* Pillars */}
        <section className="bg-parchment">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-border bg-card p-7 shadow-soft"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="border-y border-border bg-background">
          <div className="mx-auto max-w-5xl px-5 py-20">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                The path
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Seven modules, built in order
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Principle first, then law, then practice. Each module assumes the one before it.
              </p>
            </div>

            <ol className="mt-12 space-y-px overflow-hidden rounded-xl border border-border">
              {modules.map((m) => (
                <li
                  key={m.id}
                  className="flex flex-col gap-1 bg-card p-6 sm:flex-row sm:items-center sm:gap-6"
                >
                  <span className="font-display text-2xl font-semibold tabular-nums text-gold sm:w-12">
                    {String(m.id).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {m.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{m.tagline}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {m.lessons.length} lessons
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-8 text-center">
              <Link
                to="/curriculum"
                className="text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Read every lesson title and summary →
              </Link>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-parchment">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight">
                Who this is for
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "Owners of Christian-run service businesses and trades",
                  "Founders selling courses, coaching, or digital products",
                  "Nonprofit and ministry teams raising support",
                  "Marketers who need FTC literacy without a legal department",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-success" />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-8 shadow-soft">
              <h2 className="font-display text-xl font-semibold">What you walk away with</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>• A written marketing standard your team can be held to</li>
                <li>• A claims file with evidence attached to every objective statement</li>
                <li>• A pre-publication review checkpoint that survives deadlines</li>
                <li>• Positioning built on a difference competitors can't copy in 90 days</li>
                <li>• A correction protocol written before you need it</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-ink">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-foreground text-balance sm:text-4xl">
              Faithful marketing is a skill. It can be taught.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-foreground/75">
              Lifetime access to all seven modules and every future update, for one payment of{" "}
              {COURSE_PRICE_LABEL}.
            </p>
            <Button asChild variant="hero" size="xl" className="mt-9">
              <Link to="/enroll">Enroll in Kingdom Marketing</Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
