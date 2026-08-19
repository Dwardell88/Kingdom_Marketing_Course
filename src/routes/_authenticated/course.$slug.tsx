import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lock,
  Menu,
  Quote,
  Users,
  UserRound,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  getCourseProgress,
  completeModule,
  saveQuizAnswer,
  saveNotes,
} from "@/lib/course.functions";
import { findModule, modules, type Module, type ModuleScripture } from "@/data/course";

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
        { name: "description", content: mod?.sub ?? "Kingdom Marketing course module." },
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

const SELF_TABS = [
  { key: "shift", label: "The Shift" },
  { key: "scripture", label: "Scripture" },
  { key: "teaching", label: "Teaching" },
  { key: "application", label: "Application" },
  { key: "quiz", label: "Quiz" },
] as const;
type SelfTab = (typeof SELF_TABS)[number]["key"];

const GROUP_TABS = [
  { key: "guide", label: "Session Guide" },
  { key: "notes", label: "Teaching Notes" },
  { key: "discussion", label: "Discussion" },
  { key: "case", label: "Case Study" },
] as const;
type GroupTab = (typeof GROUP_TABS)[number]["key"];

function ModulePage() {
  const { slug } = Route.useParams();
  const mod = findModule(slug)!;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const fetchProgress = useServerFn(getCourseProgress);
  const markComplete = useServerFn(completeModule);
  const answerQuiz = useServerFn(saveQuizAnswer);
  const persistNotes = useServerFn(saveNotes);

  const [mode, setMode] = useState<"self" | "group">("self");
  const [selfTab, setSelfTab] = useState<SelfTab>("shift");
  const [groupTab, setGroupTab] = useState<GroupTab>("guide");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [quizPicks, setQuizPicks] = useState<Record<number, number>>({});
  const [notesDraft, setNotesDraft] = useState<string | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);

  const { data, isPending } = useQuery({
    queryKey: ["course-progress"],
    queryFn: () => fetchProgress(),
  });

  const completeMutation = useMutation({
    mutationFn: () => markComplete({ data: { moduleId: mod.id } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["course-progress"] }),
  });
  const quizMutation = useMutation({
    mutationFn: (vars: { questionIndex: number; selectedIndex: number }) =>
      answerQuiz({ data: { moduleId: mod.id, ...vars } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["course-progress"] }),
  });
  const notesMutation = useMutation({
    mutationFn: (notes: string) => persistNotes({ data: { moduleId: mod.id, notes } }),
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

  const idx = modules.findIndex((m) => m.id === mod.id);
  const prev = modules[idx - 1];
  const next = modules[idx + 1];
  const isLast = idx === modules.length - 1;

  const entry = data.progress[mod.id];
  const quizAnswers = entry?.quizAnswers ?? {};
  const notesValue = notesDraft ?? entry?.notes ?? "";
  const completedCount = modules.filter((m) => data.progress[m.id]?.completed).length;
  const progressPct = Math.round((completedCount / modules.length) * 100);
  const allQuizAnswered = mod.quiz.every((_, qi) => quizAnswers[String(qi)] !== undefined);

  function submitQuiz(qi: number) {
    const picked = quizPicks[qi];
    if (picked === undefined) return;
    quizMutation.mutate({ questionIndex: qi, selectedIndex: picked });
  }

  function saveNotesNow() {
    if (notesDraft !== null) notesMutation.mutate(notesDraft);
  }

  function handleComplete() {
    completeMutation.mutate(undefined, {
      onSuccess: () => {
        if (isLast) {
          setShowCertificate(true);
        } else if (next) {
          setSelfTab("shift");
          setGroupTab("guide");
          navigate({ to: "/course/$slug", params: { slug: next.slug } });
        }
      },
    });
  }

  if (showCertificate) {
    return <CourseCompleteScreen />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-parchment">
      <SiteHeader />

      {/* Module top bar */}
      <div className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-5 py-2.5">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Browse modules">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <div className="mt-8">
                <div className="border-b border-border pb-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                    Modules
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {completedCount} of {modules.length} complete
                  </p>
                </div>
                <nav className="mt-2 flex flex-col">
                  {modules.map((m, i) => {
                    const done = data.progress[m.id]?.completed;
                    return (
                      <Link
                        key={m.id}
                        to="/course/$slug"
                        params={{ slug: m.slug }}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-start gap-3 border-l-2 px-3 py-2.5 text-sm ${
                          i === idx
                            ? "border-gold bg-accent/60"
                            : "border-transparent hover:bg-accent/40"
                        }`}
                      >
                        <span className="mt-0.5 text-base">{done ? "✓" : m.emoji}</span>
                        <span>
                          <span className="block font-medium leading-snug">{m.title}</span>
                          <span className="block text-xs text-muted-foreground">{m.sub}</span>
                        </span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold uppercase tracking-wider text-gold">
              Module {idx + 1} of {modules.length}
            </p>
            <p className="truncate text-sm font-medium">{mod.title}</p>
          </div>

          <div className="flex items-center gap-1 rounded-lg border border-border bg-card p-1">
            <button
              onClick={() => setMode("self")}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                mode === "self" ? "bg-gold text-gold-foreground" : "text-muted-foreground"
              }`}
            >
              <UserRound className="h-3.5 w-3.5" /> Self-Paced
            </button>
            <button
              onClick={() => setMode("group")}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                mode === "group" ? "bg-ink text-ink-foreground" : "text-muted-foreground"
              }`}
            >
              <Users className="h-3.5 w-3.5" /> Group Session
            </button>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <Progress value={progressPct} className="h-1.5 w-16" />
            <span className="text-xs tabular-nums text-muted-foreground">{progressPct}%</span>
          </div>
        </div>
      </div>

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-10">
        <header className="mb-6">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{mod.emoji}</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Module {idx + 1}
              </p>
              <h1 className="font-display text-2xl font-semibold tracking-tight">{mod.title}</h1>
            </div>
          </div>
          <p className="mt-1.5 text-sm text-muted-foreground">{mod.sub}</p>
        </header>

        {mode === "self" ? (
          <SelfPacedView
            mod={mod}
            tab={selfTab}
            onTab={setSelfTab}
            quizAnswers={quizAnswers}
            quizPicks={quizPicks}
            onPick={(qi, oi) => setQuizPicks((p) => ({ ...p, [qi]: oi }))}
            onSubmitQuiz={submitQuiz}
            quizPending={quizMutation.isPending}
            allQuizAnswered={allQuizAnswered}
            notesValue={notesValue}
            onNotesChange={(v) => setNotesDraft(v)}
            onNotesBlur={saveNotesNow}
            onComplete={handleComplete}
            completePending={completeMutation.isPending}
            isLast={isLast}
          />
        ) : (
          <GroupSessionView
            mod={mod}
            tab={groupTab}
            onTab={setGroupTab}
            onComplete={handleComplete}
            completePending={completeMutation.isPending}
            isLast={isLast}
          />
        )}

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
              <Link to="/course">Back to overview</Link>
            </Button>
          )}
        </nav>
      </main>
    </div>
  );
}

function ScriptureBlock({ s }: { s: ModuleScripture }) {
  return (
    <blockquote className="mb-3 rounded-lg border-l-4 border-gold bg-accent/60 py-4 pl-5 pr-4">
      <Quote className="h-4 w-4 text-gold" />
      <p className="mt-2 font-display text-lg italic leading-relaxed">{s.text}</p>
      <cite className="mt-2 block text-sm not-italic font-medium text-muted-foreground">
        {s.ref}
      </cite>
    </blockquote>
  );
}

function SelfPacedView({
  mod,
  tab,
  onTab,
  quizAnswers,
  quizPicks,
  onPick,
  onSubmitQuiz,
  quizPending,
  allQuizAnswered,
  notesValue,
  onNotesChange,
  onNotesBlur,
  onComplete,
  completePending,
  isLast,
}: {
  mod: Module;
  tab: SelfTab;
  onTab: (t: SelfTab) => void;
  quizAnswers: Record<string, number>;
  quizPicks: Record<number, number>;
  onPick: (qi: number, oi: number) => void;
  onSubmitQuiz: (qi: number) => void;
  quizPending: boolean;
  allQuizAnswered: boolean;
  notesValue: string;
  onNotesChange: (v: string) => void;
  onNotesBlur: () => void;
  onComplete: () => void;
  completePending: boolean;
  isLast: boolean;
}) {
  return (
    <div>
      <TabBar tabs={SELF_TABS} active={tab} onChange={onTab} />

      {tab === "shift" && (
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              The question
            </p>
            <p className="mt-3 font-display text-xl font-semibold">"{mod.question}"</p>
            <div className="mt-4 rounded-lg bg-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Common answer
              </p>
              <p className="mt-1 text-sm italic text-muted-foreground">"{mod.worldlyAnswer}"</p>
            </div>
          </div>
          <div className="rounded-xl border border-gold/40 bg-gradient-to-br from-accent to-secondary p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              The Kingdom shift
            </p>
            <p className="mt-2 font-display text-lg font-semibold leading-snug">
              {mod.kingdomShift}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{mod.shiftNote}</p>
          </div>
          <div className="text-right">
            <Button variant="gold" onClick={() => onTab("scripture")}>
              See the scripture →
            </Button>
          </div>
        </div>
      )}

      {tab === "scripture" && (
        <div>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            These passages form the Biblical foundation for this module. Read them slowly and
            consider what each one means for how you run your business.
          </p>
          {mod.scriptures.map((s) => (
            <ScriptureBlock key={s.ref} s={s} />
          ))}
          <div className="mt-4 text-right">
            <Button variant="gold" onClick={() => onTab("teaching")}>
              Read the teaching →
            </Button>
          </div>
        </div>
      )}

      {tab === "teaching" && (
        <div>
          {mod.teaching.map((p, i) => (
            <p key={i} className="mb-4 leading-[1.8] text-foreground/90">
              {p}
            </p>
          ))}
          <div className="text-right">
            <Button variant="gold" onClick={() => onTab("application")}>
              Apply it →
            </Button>
          </div>
        </div>
      )}

      {tab === "application" && (
        <div>
          <div className="mb-5 rounded-xl border border-border bg-card p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Practical steps
            </p>
            {mod.steps.map((s, i) => (
              <div key={i} className="mb-3 flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-gold-foreground">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
          <div className="mb-5 rounded-xl border border-border bg-card p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Reflection questions
            </p>
            {mod.reflections.map((r, i) => (
              <div
                key={i}
                className="mb-2 rounded-lg border-l-2 border-gold/60 bg-muted px-4 py-2.5"
              >
                <p className="text-sm leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Your notes
          </label>
          <Textarea
            value={notesValue}
            onChange={(e) => onNotesChange(e.target.value)}
            onBlur={onNotesBlur}
            placeholder="Write your thoughts, action items, or insights here..."
            className="min-h-24"
          />
          <div className="mt-4 text-right">
            <Button variant="gold" onClick={() => onTab("quiz")}>
              Take the quiz →
            </Button>
          </div>
        </div>
      )}

      {tab === "quiz" && (
        <div>
          <p className="mb-4 text-sm text-muted-foreground">
            Answer both questions before marking this module complete.
          </p>
          {mod.quiz.map((q, qi) => {
            const submitted = quizAnswers[String(qi)];
            const done = submitted !== undefined;
            const picked = done ? submitted : quizPicks[qi];
            return (
              <div key={qi} className="mb-5 rounded-xl border border-border bg-card p-6">
                <p className="mb-4 text-sm font-semibold leading-relaxed">
                  {qi + 1}. {q.question}
                </p>
                <div className="mb-3 flex flex-col gap-2">
                  {q.options.map((o, oi) => {
                    let cls = "border-border bg-muted text-muted-foreground";
                    if (picked === oi && !done) cls = "border-gold bg-accent text-foreground";
                    if (done && oi === q.answerIndex)
                      cls = "border-success bg-success/10 text-success";
                    if (done && picked === oi && oi !== q.answerIndex)
                      cls = "border-destructive bg-destructive/10 text-destructive";
                    return (
                      <button
                        key={oi}
                        disabled={done}
                        onClick={() => onPick(qi, oi)}
                        className={`rounded-lg border px-3.5 py-2.5 text-left text-sm transition-colors ${cls} ${done ? "cursor-default" : "cursor-pointer"}`}
                      >
                        <span className="mr-1.5 font-bold">{["A", "B", "C", "D"][oi]}.</span>
                        {o}
                      </button>
                    );
                  })}
                </div>
                {!done && picked !== undefined ? (
                  <Button
                    size="sm"
                    variant="ink"
                    disabled={quizPending}
                    onClick={() => onSubmitQuiz(qi)}
                  >
                    Submit answer
                  </Button>
                ) : null}
                {done ? (
                  <p
                    className={`text-xs ${picked === q.answerIndex ? "text-success" : "text-destructive"}`}
                  >
                    {picked === q.answerIndex
                      ? "✓ Correct"
                      : `✗ Correct answer: ${q.options[q.answerIndex]}`}
                  </p>
                ) : null}
              </div>
            );
          })}
          {allQuizAnswered ? (
            <div className="text-center">
              <Button variant="hero" size="lg" disabled={completePending} onClick={onComplete}>
                {isLast ? "✓ Complete course" : "✓ Complete module — next →"}
              </Button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

function GroupSessionView({
  mod,
  tab,
  onTab,
  onComplete,
  completePending,
  isLast,
}: {
  mod: Module;
  tab: GroupTab;
  onTab: (t: GroupTab) => void;
  onComplete: () => void;
  completePending: boolean;
  isLast: boolean;
}) {
  return (
    <div>
      <div className="mb-5 flex items-center gap-3 rounded-lg border border-ink/20 bg-ink p-4">
        <Users className="h-5 w-5 shrink-0 text-gold" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gold">
            Facilitator mode — 30-minute group session
          </p>
          <p className="mt-0.5 text-xs text-ink-foreground/70">
            This view contains everything you need to teach this module to a live group.
          </p>
        </div>
      </div>

      <TabBar tabs={GROUP_TABS} active={tab} onChange={onTab} presenter />

      {tab === "guide" && (
        <div>
          <div className="mb-5 rounded-xl border border-border bg-card p-6">
            <p className="mb-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Session timing (30 minutes)
            </p>
            <div className="mb-3.5 flex h-3 gap-1 overflow-hidden rounded-full">
              {mod.group.timing.map((t, i) => (
                <div key={i} className="flex-1 opacity-80" style={{ background: t.color }} />
              ))}
            </div>
            {mod.group.timing.map((t, i) => (
              <div
                key={i}
                className="mb-2.5 flex gap-3 rounded-lg bg-muted p-3"
                style={{ borderLeft: `3px solid ${t.color}` }}
              >
                <span
                  className="min-w-[70px] shrink-0 text-xs font-bold"
                  style={{ color: t.color }}
                >
                  {t.minutes}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.label}</p>
                  <p className="text-xs text-muted-foreground">{t.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-5 rounded-xl border border-ink/20 bg-ink p-6">
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Opening hook — {mod.group.timing[0]?.minutes}
            </p>
            <p className="mb-3 font-display text-base font-semibold text-ink-foreground">
              {mod.group.opener.title}
            </p>
            <p className="mb-3.5 whitespace-pre-line text-sm leading-relaxed text-ink-foreground/85">
              {mod.group.opener.prompt}
            </p>
            <div className="rounded-lg border-l-2 border-gold bg-ink-foreground/5 p-3">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gold">
                Facilitator note
              </p>
              <p className="text-xs leading-relaxed text-ink-foreground/70">
                {mod.group.opener.note}
              </p>
            </div>
          </div>

          <div className="mb-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Session scriptures
            </p>
            {mod.scriptures.map((s) => (
              <ScriptureBlock key={s.ref} s={s} />
            ))}
          </div>

          <div className="mb-5 rounded-xl border border-ink/20 bg-ink p-6">
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Key takeaway — close strong
            </p>
            <p className="mb-4 font-display text-lg font-semibold leading-snug text-ink-foreground">
              "{mod.group.keyTakeaway}"
            </p>
            <div className="border-t border-ink-foreground/15 pt-3.5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Prayer prompt
              </p>
              <p className="text-sm leading-relaxed text-ink-foreground/80">
                {mod.group.prayerPrompt}
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" disabled={completePending} onClick={onComplete}>
              {isLast ? "✓ Mark complete — finish course" : "✓ Mark complete — next module →"}
            </Button>
          </div>
        </div>
      )}

      {tab === "notes" && (
        <div>
          <p className="mb-4 rounded-lg border border-ink/20 bg-ink p-3 text-xs text-ink-foreground/70">
            These are expanded talking points for the {mod.group.timing[1]?.minutes} teaching
            window. You don't need to cover every point — use them as a guide, not a script.
          </p>
          {mod.group.talkingPoints.map((p, i) => (
            <div key={i} className="mb-4 flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/30 bg-ink text-xs font-bold text-gold">
                {i + 1}
              </span>
              <p className="text-sm leading-[1.85]">{p}</p>
            </div>
          ))}
        </div>
      )}

      {tab === "discussion" && (
        <div>
          <p className="mb-4 rounded-lg border border-ink/20 bg-ink p-3 text-xs text-ink-foreground/70">
            Use these for the {mod.group.timing[2]?.minutes} discussion window. For large groups,
            assign one question per table. For smaller groups, work through two or three together.
          </p>
          {mod.group.groupDiscussion.map((q, i) => (
            <div key={i} className="mb-3.5 rounded-lg border-l-4 border-gold bg-card p-4">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
                Discussion {i + 1}
              </p>
              <p className="text-sm leading-relaxed">{q}</p>
            </div>
          ))}
        </div>
      )}

      {tab === "case" && (
        <div>
          <p className="mb-4 rounded-lg border border-ink/20 bg-ink p-3 text-xs text-ink-foreground/70">
            Use this for the {mod.group.timing[3]?.minutes} window. Read it aloud, or summarize it
            in your own words, then open the closing question to the group.
          </p>
          <div className="mb-5 rounded-xl border border-border bg-card p-6">
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Case study
            </p>
            <p className="mb-4 text-base font-semibold">{mod.group.caseStudy.title}</p>
            <p className="whitespace-pre-line text-sm leading-[1.85]">
              {mod.group.caseStudy.story}
            </p>
          </div>
          <div className="rounded-xl border border-ink/20 bg-ink p-6">
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Closing question — open to group
            </p>
            <p className="font-display text-base font-semibold leading-snug text-ink-foreground">
              {mod.group.caseStudy.question}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function TabBar<T extends string>({
  tabs,
  active,
  onChange,
  presenter,
}: {
  tabs: readonly { key: T; label: string }[];
  active: T;
  onChange: (t: T) => void;
  presenter?: boolean;
}) {
  return (
    <div className="mb-5 flex gap-1 overflow-x-auto border-b border-border pb-1">
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => onChange(t.key)}
          className={`shrink-0 rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
            active === t.key
              ? presenter
                ? "bg-ink text-gold"
                : "bg-gold text-gold-foreground"
              : "border border-border text-muted-foreground"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

function CourseCompleteScreen() {
  return (
    <div className="flex min-h-screen flex-col bg-parchment">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-5 py-16">
        <div className="w-full max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold">
            <CheckCircle2 className="h-8 w-8 text-gold-foreground" />
          </div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Course complete
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">
            Kingdom Marketing
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            All 7 modules complete. You are equipped to market with integrity, serve customers
            faithfully, and operate your business as a steward of what God has entrusted to you.
          </p>
          <div className="mt-7 rounded-xl border border-border bg-card p-7">
            <p className="font-display text-lg italic leading-relaxed">
              "Well done, good and faithful servant! You have been faithful with a few things; I
              will put you in charge of many things."
            </p>
            <p className="mt-2.5 text-sm text-muted-foreground">Matthew 25:23</p>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild variant="secondary">
              <Link to="/course/$slug" params={{ slug: modules[0].slug }}>
                ← Review course
              </Link>
            </Button>
            <Button asChild variant="gold">
              <Link to="/course">Back to overview</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
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
