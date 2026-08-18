import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

/** Returns whether the signed-in user owns the course, plus their progress. */
export const getEnrollment = createServerFn({ method: "GET" })
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
      supabase.from("lesson_progress").select("module_id, lesson_id"),
    ]);

    return {
      hasAccess: Boolean(purchase),
      purchasedAt: purchase?.created_at ?? null,
      completed: (progress ?? []).map((p) => p.lesson_id),
    };
  });

const toggleSchema = z.object({
  moduleId: z.number().int().min(1).max(20),
  lessonId: z.string().min(1).max(32),
  completed: z.boolean(),
});

export const setLessonProgress = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => toggleSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { supabase, userId } = context;

    if (data.completed) {
      const { error } = await supabase
        .from("lesson_progress")
        .upsert(
          { user_id: userId, module_id: data.moduleId, lesson_id: data.lessonId },
          { onConflict: "user_id,module_id,lesson_id" },
        );
      if (error) throw new Error(error.message);
    } else {
      const { error } = await supabase
        .from("lesson_progress")
        .delete()
        .eq("user_id", userId)
        .eq("lesson_id", data.lessonId);
      if (error) throw new Error(error.message);
    }

    return { ok: true };
  });
