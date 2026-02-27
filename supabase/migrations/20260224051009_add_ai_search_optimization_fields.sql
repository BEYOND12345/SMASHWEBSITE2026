/*
  # Add AI Search Optimization Fields to Blog Posts

  1. New Fields
    - `author_bio` (text) - Author biography for expertise signals
    - `faq_data` (jsonb) - Structured FAQ data for FAQPage schema
    - `key_takeaways` (text[]) - Bullet points for AI extraction
    - `last_reviewed` (timestamptz) - Content freshness signal
    
  2. Purpose
    - Enhance AI search engine visibility
    - Provide structured data for ChatGPT, Perplexity, Claude
    - Signal content expertise and freshness
    - Enable FAQPage schema implementation
*/

-- Add new fields to blog_posts table
DO $$
BEGIN
  -- Add author_bio field
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'author_bio'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN author_bio text;
  END IF;

  -- Add faq_data field for structured FAQ schema
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'faq_data'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN faq_data jsonb;
  END IF;

  -- Add key_takeaways field
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'key_takeaways'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN key_takeaways text[];
  END IF;

  -- Add last_reviewed field
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'blog_posts' AND column_name = 'last_reviewed'
  ) THEN
    ALTER TABLE blog_posts ADD COLUMN last_reviewed timestamptz DEFAULT now();
  END IF;
END $$;

-- Set default author bio for existing posts
UPDATE blog_posts 
SET author_bio = 'Dan is the founder of SMASH Invoices and has spent years working with tradies to solve their invoicing and quoting challenges. He built SMASH to eliminate the paperwork friction that costs service businesses thousands in lost time and delayed payments.'
WHERE author_bio IS NULL;

-- Set last_reviewed to updated_at for existing posts
UPDATE blog_posts 
SET last_reviewed = updated_at
WHERE last_reviewed IS NULL;
