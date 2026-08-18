import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight, Check, Lock, Quote } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { getEnrollment, setLessonProgress } from "@/lib/course.functions";
import { findModule, modules } from "@/data/course";

export const Route = createFileRoute("/_authenticated/course/$slug")({
  loader: ({ params }) => {
    const mod = findModule(params.slug);
    if (!mod) throw notFound();
    return { moduleId: mod.id };
  },
  head: ({ params }) => {
    const mod = findModule(params.slug);
    return {
      meta: [
        { title: `${mod ? mod.title : "Module"} — Kingdom Marketing` },
        { name: "description", content: mod?.description ?? "Kingdom Marketing course module." },
      ],
    };
  },
  component: ModulePage,
  notFoundComponent: () => (
    <Shell>
      <h1 className="font-display text-2xl font-semibold">Module not found</h1>
      <Button asChild variant="secondary" className="mt-5">
        <Link to="/course">Back to course</Link>
      </Button>
    </Shell>
  ),
  errorComponent: () => (
    <Shell>
      <h1 className="font-display text-2xl font-semibold">This module didn't load</h1>
      <Button asChild variant="secondary" className="mt-5">
        <Link to="/course">Back to course</Link>
      </Button>
    </Shell>
  ),
});

function ModulePage() {
  const { slug } = Route.useParams();
  const mod = findModule(slug)!;
  const queryClient = useQueryClient();
  const fetchEnrollment = useServerFn(getEnrollment);
  const saveProgress = useServerFn(setLessonProgress);

  const { data, isPending } = useQuery({
    queryKey: ["enrollment"],
    queryFn: () => fetchEnrollment(),
  });

  const toggle = useMutation({
    mutationFn: (vars: { lessonId: string; completed: boolean }) =>
      saveProgress({ data: { moduleId: mod.id, ...vars } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["enrollment"] }),
  });

  if (isPending) {
    return (
      <Shell>
        <div className="h-64 animate-pulse rounded-xl bg-muted" />
      </Shell>
    );
  }

  if (!data?.hasAccess) {
    return (
      <Shell>
        <div className="mx-auto max-w-lg rounded-xl border border-border bg-card p-9 text-center">
          <Lock className="mx-auto h-10 w-10 text-muted-foreground" />
          <h1 className="mt-5 font-display text-2xl font-semibold">Enrollment required</h1>
          <Button asChild variant="hero" className="mt-6 w-full">
            <Link to="/enroll">Enroll now</Link>
          </Button>
        </div>
      </Shell>
    );
  }

  const done = new Set(data.completed);
  const idx = modules.findIndex((m) => m.id === mod.id);
  const prev = modules[idx - 1];
  const next = modules[idx + 1];
  const modDone = mod.lessons.filter((l) => done.has(l.id)).length;

  return (
    <Shell>
      <Link
        to="/course"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All modules
      </Link>

      <header className="mt-6 border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          Module {mod.id}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {mod.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {mod.description}
        </p>
        <div className="mt-6 flex max-w-sm items-center gap-3">
          <Progress value={Math.round((modDone / mod.lessons.length) * 100)} className="h-1.5" />
          <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
            {modDone}/{mod.lessons.length} done
          </span>
        </div>
      </header>

      <div className="mt-10 space-y-12">
        {mod.lessons.map((lesson, i) => {
          const complete = done.has(lesson.id);
          return (
            <article key={lesson.id} className="scroll-mt-24" id={lesson.id}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-sm font-semibold text-gold">
                  Lesson {i + 1}
                </span>
                <span className="text-xs text-muted-foreground">{lesson.duration}</span>
              </div>
              <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight">
                {lesson.title}
              </h2>

              {lesson.scripture ? (
                <blockquote className="mt-5 rounded-lg border-l-4 border-gold bg-accent/60 py-4 pl-5 pr-4">
                  <Quote className="h-4 w-4 text-gold" />
                  <p className="mt-2 font-display text-lg italic leading-relaxed">
                    {lesson.scripture.text}
                  </p>
                  <cite className="mt-2 block text-sm not-italic font-medium text-muted-foreground">
                    {lesson.scripture.ref}
                  </cite>
                </blockquote>
              ) : null}

              <div className="mt-5 space-y-4">
                {lesson.body.map((p, n) => (
                  <p key={n} className="leading-[1.75] text-foreground/90">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-6 rounded-lg border border-border bg-card p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Key points
                </h3>
                <ul className="mt-3 space-y-2">
                  {lesson.keyPoints.map((k) => (
                    <li key={k} className="flex gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
                {lesson.action ? (
                  <div className="mt-5 border-t border-border pt-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
                      Do this now
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed">{lesson.action}</p>
                  </div>
                ) : null}
              </div>

              <label className="mt-5 flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
                <Checkbox
                  checked={complete}
                  disabled={toggle.isPending}
                  onCheckedChange={(v) =>
                    toggle.mutate({ lessonId: lesson.id, completed: v === true })
                  }
                />
                <span className="text-sm font-medium">
                  {complete ? "Completed" : "Mark lesson complete"}
                </span>
              </label>
            </article>
          );
        })}
      </div>

      <nav className="mt-14 flex flex-wrap justify-between gap-3 border-t border-border pt-8">
        {prev ? (
          <Button asChild variant="secondary">
            <Link to="/course/$slug" params={{ slug: prev.slug }}>
              <ArrowLeft /> {prev.title}
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button asChild variant="gold">
            <Link to="/course/$slug" params={{ slug: next.slug }}>
              {next.title} <ArrowRight />
            </Link>
          </Button>
        ) : (
          <Button asChild variant="gold">
            <Link to="/course">Finish — back to overview</Link>
          </Button>
        )}
      </nav>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-parchment">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12">{children}</main>
    </div>
  );
}
