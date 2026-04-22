/*
  # Signup + Lead Capture Setup

  Sets up RLS policies so the public (anon) role on the website can:
    - insert into beta_signups (main signup form)
    - insert into leads (7 calculator/tool lead capture forms)
  Only authenticated users (dashboard) can read the data back.

  Ran manually in mwshohajbmfmuphloqzd via the SQL editor on 2026-04-22.
  This file is a reproducible record for anyone re-provisioning the project.

  1. New table: beta_signups
     - Captures marketing signups with per-page source attribution.
  2. Existing table: leads
     - Previously created, now has RLS + the correct anon insert policy.
  3. Security
     - RLS enabled on both tables.
     - anon: INSERT only (no reads, prevents scraping of submissions).
     - authenticated: SELECT only (dashboard visibility).
*/

CREATE TABLE IF NOT EXISTS beta_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  phone text,
  trade_type text,
  quotes_per_week text,
  message text,
  source text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "beta_signups_anon_insert" ON beta_signups;
CREATE POLICY "beta_signups_anon_insert"
  ON beta_signups FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "beta_signups_auth_select" ON beta_signups;
CREATE POLICY "beta_signups_auth_select"
  ON beta_signups FOR SELECT TO authenticated USING (true);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow anon inserts" ON leads;
DROP POLICY IF EXISTS "leads_anon_insert" ON leads;
CREATE POLICY "leads_anon_insert"
  ON leads FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "leads_auth_select" ON leads;
CREATE POLICY "leads_auth_select"
  ON leads FOR SELECT TO authenticated USING (true);

NOTIFY pgrst, 'reload schema';
