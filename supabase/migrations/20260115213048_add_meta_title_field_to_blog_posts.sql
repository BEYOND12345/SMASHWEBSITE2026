/*
  # Add meta_title field to blog_posts table

  1. Changes
    - Add meta_title column to blog_posts table
    - This allows separate SEO-optimized titles vs display titles
    - Meta titles can be shorter and more keyword-focused

  2. Notes
    - Meta title is optional and falls back to regular title if not set
    - Existing posts will have NULL meta_title until updated
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'meta_title'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN meta_title text;
  END IF;
END $$;
