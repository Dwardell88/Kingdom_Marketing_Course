import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export interface ModuleProgressEntry {
  completed: boolean;
  quizAnswers: Record<string, number>;
  notes: string;
}

/** Returns whether the signed-in user owns the course, plus per-module progress. */
export const getCourseProgress = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;

    const [{ data: purchase }, { data: progress }] = await Promise.all([
      supabase
        .from("purchases")
        .select("id, status, created_at")
        .eq("user_id", userId)
        .eq("status", "paid")
        .maybeSingle(),
      supabase.from("module_progress").select("module_id, completed_at, quiz_answers, notes"),
    ]);

    const byModule: Record<number, ModuleProgressEntry> = {};
    for (const row of progress ?? []) {
      byModule[row.module_id] = {
        completed: row.completed_at != null,
        quizAnswers: (row.quiz_answers ?? {}) as Record<string, number>,
        notes: row.notes ?? "",
      };
    }

    return {
      hasAccess: Boolean(purchase),
      purchasedAt: purchase?.created_at ?? null,
      progress: byModule,
    };
  });

const moduleIdSchema = z.object({ moduleId: z.number().int().min(1).max(50) });

export const completeModule = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => moduleIdSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { error } = await supabase
      .from("module_progress")
      .upsert(
        { user_id: userId, module_id: data.moduleId, completed_at: new Date().toISOString() },
        { onConflict: "user_id,module_id" },
      );
    if (error) throw new Error(error.message);
    return { ok: true };
  });

const quizAnswerSchema = z.object({
  moduleId: z.number().int().min(1).max(50),
  questionIndex: z.number().int().min(0).max(50),
  selectedIndex: z.number().int().min(0).max(10),
});

export const saveQuizAnswer = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => quizAnswerSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    const { data: existing } = await supabase
      .from("module_progress")
      .select("quiz_answers")
      .eq("user_id", userId)
      .eq("module_id", data.moduleId)
      .maybeSingle();

    const merged = {
      ...((existing?.quiz_answers as Record<string, number>) ?? {}),
      [data.questionIndex]: data.selectedIndex,
    };

    const { error } = await supabase
      .from("module_progress")
      .upsert(
        { user_id: userId, module_id: data.moduleId, quiz_answers: merged },
        { onConflict: "user_id,module_id" },
      );
    if (error) throw new Error(error.message);
    return { ok: true };
  });

const notesSchema = z.object({
  moduleId: z.number().int().min(1).max(50),
  notes: z.string().max(10_000),
});

export const saveNotes = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => notesSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;
    const { error } = await supabase
      .from("module_progress")
      .upsert(
        { user_id: userId, module_id: data.moduleId, notes: data.notes },
        { onConflict: "user_id,module_id" },
      );
    if (error) throw new Error(error.message);
    return { ok: true };
  });
