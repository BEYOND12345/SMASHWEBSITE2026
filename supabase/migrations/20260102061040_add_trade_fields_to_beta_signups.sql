/*
  # Add Trade Type and Quote Volume Fields to Beta Signups

  1. Changes to Tables
    - `beta_signups` table modifications:
      - Add `trade_type` (text) - Type of trade the user is in (electrician, plumber, etc.)
      - Add `quotes_per_week` (text) - Volume range of quotes they send per week
  
  2. Security
    - No security changes needed - existing RLS policies remain in place
  
  3. Important Notes
    - These fields are optional to allow for flexible data collection
    - Trade type helps segment beta testers by industry
    - Quotes per week helps prioritize high-volume users
    - Fields are added using IF NOT EXISTS pattern for safety
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'beta_signups' AND column_name = 'trade_type'
  ) THEN
    ALTER TABLE beta_signups ADD COLUMN trade_type text;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'beta_signups' AND column_name = 'quotes_per_week'
  ) THEN
    ALTER TABLE beta_signups ADD COLUMN quotes_per_week text;
  END IF;
END $$;
