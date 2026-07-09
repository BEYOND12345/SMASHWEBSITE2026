/*
  Ensure waitlist_leads exists and is exposed to PostgREST.
  Fixes PGRST205: Could not find the table 'public.waitlist_leads' in the schema cache.
*/

CREATE TABLE IF NOT EXISTS public.waitlist_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  source text DEFAULT 'landing_popup',
  promo_code text,
  code_issued boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.waitlist_leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "waitlist_leads_anon_insert" ON public.waitlist_leads;
CREATE POLICY "waitlist_leads_anon_insert"
  ON public.waitlist_leads FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "waitlist_leads_auth_select" ON public.waitlist_leads;
CREATE POLICY "waitlist_leads_auth_select"
  ON public.waitlist_leads FOR SELECT TO authenticated USING (true);

GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON TABLE public.waitlist_leads TO anon;
GRANT SELECT ON TABLE public.waitlist_leads TO authenticated;

NOTIFY pgrst, 'reload schema';
