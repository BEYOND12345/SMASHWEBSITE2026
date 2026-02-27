/*
  # Create Beta Signups Table

  1. New Tables
    - `beta_signups`
      - `id` (uuid, primary key) - Unique identifier for each signup
      - `email` (text, unique, required) - User's email address
      - `name` (text) - User's full name
      - `phone` (text) - User's phone number
      - `message` (text) - Additional feedback or comments from user
      - `created_at` (timestamptz) - Timestamp when signup was created
  
  2. Security
    - Enable RLS on `beta_signups` table
    - Add policy for anonymous users to insert their signup data
    - Add policy for authenticated users to view all signups (for admin purposes)
  
  3. Important Notes
    - Email is unique to prevent duplicate signups
    - Anonymous users can only insert, not read data
    - This allows public signup without authentication
*/

CREATE TABLE IF NOT EXISTS beta_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  phone text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE beta_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to sign up (insert only)
CREATE POLICY "Anyone can sign up for beta"
  ON beta_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to view all signups (for admin access)
CREATE POLICY "Authenticated users can view all signups"
  ON beta_signups
  FOR SELECT
  TO authenticated
  USING (true);