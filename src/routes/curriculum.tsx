import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Scale, Target } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { modules, totalLessons } from "@/data/course";

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum — 7 Modules of Kingdom Marketing" },
      {
        name: "description",
        content:
          "All 7 modules and 22 lessons: Biblical marketing foundations, honest claims, FTC compliance, systems, positioning, channels, and measurement.",
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

const themeMeta = {
  biblical: { icon: BookOpen, label: "Biblical principle" },
  legal: { icon: Scale, label: "Legal compliance" },
  practice: { icon: Target, label: "Application" },
} as const;

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
              Seven modules. {totalLessons} lessons. One coherent standard.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Every module pairs a principle with a practice. You finish each one with something
              written, changed, or removed from your marketing — not just something understood.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-16">
          <div className="space-y-10">
            {modules.map((m) => {
              const Icon = themeMeta[m.theme].icon;
              return (
                <article
                  key={m.id}
                  className="rounded-xl border border-border bg-card p-7 shadow-soft"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-display text-sm font-semibold text-primary-foreground">
                      {m.id}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                      <Icon className="h-3.5 w-3.5" />
                      {themeMeta[m.theme].label}
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                    {m.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{m.description}</p>

                  <ul className="mt-5 divide-y divide-border border-t border-border">
                    {m.lessons.map((l) => (
                      <li key={l.id} className="flex gap-4 py-3.5">
                        <span className="mt-1 text-xs font-medium tabular-nums text-muted-foreground">
                          {l.id}
                        </span>
                        <div className="min-w-0">
                          <p className="font-medium">{l.title}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                            {l.summary}
                          </p>
                        </div>
                        <span className="ml-auto shrink-0 text-xs text-muted-foreground">
                          {l.duration}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
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
