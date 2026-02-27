/*
  # Add category and tags to blog posts

  1. Changes
    - Add `category` column (text) - Single category for each post
    - Add `tags` column (text array) - Multiple tags per post
    - Add index on category for filtering
    - Add index on tags for searching

  2. Notes
    - Category is a single value (e.g., "Invoicing", "Workflow", "Mindset")
    - Tags is an array allowing multiple tags per post
    - Both columns are optional to maintain flexibility
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'category'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN category text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'tags'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN tags text[];
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_tags ON blog_posts USING GIN(tags);