import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { BookOpen, Lock, Scale, Target } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getEnrollment } from "@/lib/course.functions";
import { modules, totalLessons, COURSE_PRICE_LABEL } from "@/data/course";

export const Route = createFileRoute("/_authenticated/course/")({
  head: () => ({
    meta: [
      { title: "Your course — Kingdom Marketing" },
      {
        name: "description",
        content: "Your Kingdom Marketing dashboard: module progress and next lesson.",
      },
    ],
  }),
  component: CourseHome,
});

const themeIcon = { biblical: BookOpen, legal: Scale, practice: Target } as const;

function CourseHome() {
  const fetchEnrollment = useServerFn(getEnrollment);
  const { data, isPending } = useQuery({
    queryKey: ["enrollment"],
    queryFn: () => fetchEnrollment(),
  });

  if (isPending) {
    return (
      <Shell>
        <div className="h-40 animate-pulse rounded-xl bg-muted" />
      </Shell>
    );
  }

  if (!data?.hasAccess) {
    return (
      <Shell>
        <div className="mx-auto max-w-lg rounded-xl border border-border bg-card p-9 text-center shadow-soft">
          <Lock className="mx-auto h-10 w-10 text-muted-foreground" />
          <h1 className="mt-5 font-display text-2xl font-semibold">You don't have access yet</h1>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Enrollment unlocks all seven modules permanently for {COURSE_PRICE_LABEL}.
          </p>
          <Button asChild variant="hero" size="lg" className="mt-7 w-full">
            <Link to="/enroll">Enroll now</Link>
          </Button>
        </div>
      </Shell>
    );
  }

  const done = new Set(data.completed);
  const completedCount = done.size;
  const pct = Math.round((completedCount / totalLessons) * 100);

  const nextModule =
    modules.find((m) => m.lessons.some((l) => !done.has(l.id))) ?? modules[modules.length - 1];

  return (
    <Shell>
      <div className="rounded-xl gradient-ink p-8 shadow-lifted">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/60">
          Your progress
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink-foreground">
          {completedCount === 0
            ? "Begin with Module 1"
            : completedCount === totalLessons
              ? "Course complete"
              : `${completedCount} of ${totalLessons} lessons complete`}
        </h1>
        <Progress value={pct} className="mt-5 h-2 bg-ink-foreground/15" />
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild variant="hero">
            <Link to="/course/$slug" params={{ slug: nextModule.slug }}>
              {completedCount === 0 ? "Start module 1" : "Continue"} →
            </Link>
          </Button>
          <span className="text-sm text-ink-foreground/70">{pct}% complete</span>
        </div>
      </div>

      <h2 className="mt-12 font-display text-xl font-semibold">All modules</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {modules.map((m) => {
          const Icon = themeIcon[m.theme];
          const mDone = m.lessons.filter((l) => done.has(l.id)).length;
          const mPct = Math.round((mDone / m.lessons.length) * 100);
          return (
            <Link
              key={m.id}
              to="/course/$slug"
              params={{ slug: m.slug }}
              className="group rounded-xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lifted"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-display text-sm font-semibold text-primary-foreground">
                  {m.id}
                </span>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight group-hover:text-primary">
                {m.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.tagline}</p>
              <div className="mt-4 flex items-center gap-3">
                <Progress value={mPct} className="h-1.5 flex-1" />
                <span className="text-xs tabular-nums text-muted-foreground">
                  {mDone}/{m.lessons.length}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-parchment">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-12">{children}</main>
    </div>
  );
}
