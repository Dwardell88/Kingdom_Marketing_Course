import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { modules } from "@/data/course";

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum — 7 Modules of Kingdom Marketing" },
      {
        name: "description",
        content:
          "All 7 modules: Biblical marketing foundations, honest claims, FTC compliance, and real-world application — each with a self-paced study and a 30-minute group-teaching guide.",
      },
      { property: "og:title", content: "Curriculum — 7 Modules of Kingdom Marketing" },
      {
        property: "og:description",
        content:
          "Biblical marketing foundations, FTC compliance, and real-world application across 7 modules.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CurriculumPage,
});

function CurriculumPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-parchment">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Full curriculum
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Seven modules. One coherent standard.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Every module pairs a principle with a practice — scripture, teaching, a quiz, and a
              written action step. Each one also includes a 30-minute group-teaching guide, so you
              can walk your team or a small group through it live.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-16">
          <div className="space-y-10">
            {modules.map((m) => (
              <article
                key={m.id}
                className="rounded-xl border border-border bg-card p-7 shadow-soft"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-display text-sm font-semibold text-primary-foreground">
                    {m.id}
                  </span>
                  <span className="text-xl">{m.emoji}</span>
                </div>

                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                  {m.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-gold">{m.sub}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{m.teaching[0]}</p>

                <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span>{m.scriptures.length} scripture passages</span>
                  <span>{m.quiz.length}-question quiz</span>
                  <span>30-min group session guide</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-xl gradient-ink p-9 text-center shadow-lifted">
            <h2 className="font-display text-2xl font-semibold text-ink-foreground">
              Ready to work through it?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-ink-foreground/75">
              Lifetime access to all seven modules, worksheets, and every future update.
            </p>
            <Button asChild variant="hero" size="lg" className="mt-6">
              <Link to="/enroll">Enroll now</Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
