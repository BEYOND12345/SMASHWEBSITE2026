/*
  # Waitlist leads for email-capture popup promo codes

  Captures emails from landing page popups and stores issued promo codes.
  Anon can INSERT only (direct form fallback); code generation uses edge
  function with service role. Authenticated users can SELECT for dashboard.
*/

CREATE TABLE IF NOT EXISTS waitlist_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  source text DEFAULT 'landing_popup',
  promo_code text,
  code_issued boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE waitlist_leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "waitlist_leads_anon_insert" ON waitlist_leads;
CREATE POLICY "waitlist_leads_anon_insert"
  ON waitlist_leads FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "waitlist_leads_auth_select" ON waitlist_leads;
CREATE POLICY "waitlist_leads_auth_select"
  ON waitlist_leads FOR SELECT TO authenticated USING (true);

NOTIFY pgrst, 'reload schema';
