-- The course moved from a multi-lesson-per-module structure to one deep-dive
-- module per page (with a quiz and a facilitator/group mode). lesson_progress
-- no longer matches the content shape, so replace it with module-level
-- progress that also stores quiz answers and free-text notes.
DROP TABLE IF EXISTS public.lesson_progress;

CREATE TABLE public.module_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  module_id integer NOT NULL,
  completed_at timestamptz,
  quiz_answers jsonb NOT NULL DEFAULT '{}'::jsonb,
  notes text NOT NULL DEFAULT '',
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, module_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.module_progress TO authenticated;
GRANT ALL ON public.module_progress TO service_role;

ALTER TABLE public.module_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own module progress"
  ON public.module_progress FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own module progress"
  ON public.module_progress FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own module progress"
  ON public.module_progress FOR UPDATE TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own module progress"
  ON public.module_progress FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

CREATE TRIGGER module_progress_set_updated_at
  BEFORE UPDATE ON public.module_progress
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
