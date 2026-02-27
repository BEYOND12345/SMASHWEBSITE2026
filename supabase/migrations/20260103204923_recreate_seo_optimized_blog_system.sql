/*
  # Recreate SEO-Optimized Blog System

  ## Overview
  Drops the old blog_posts table and creates a new one with comprehensive SEO metadata support.

  ## Changes
  1. Drop existing blog_posts table and policies
  2. Create new blog_posts table with SEO fields
  3. Set up RLS policies for public reading and authenticated editing
  4. Add indexes for performance

  ## New Schema
  - Full SEO metadata (primary keyword, secondary keywords, meta description)
  - Featured image with alt text
  - Reading time estimation
  - View counter
  - Published status and timestamp
  
  ## Security
  - Public can read published posts
  - Authenticated users can manage all posts
*/

DROP POLICY IF EXISTS "Anyone can view published blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can insert blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can delete blog posts" ON blog_posts;

DROP TABLE IF EXISTS blog_posts CASCADE;

CREATE TABLE blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text DEFAULT '',
  featured_image text DEFAULT '',
  featured_image_alt text DEFAULT '',
  primary_keyword text DEFAULT '',
  secondary_keywords text[] DEFAULT '{}',
  meta_description text DEFAULT '',
  author text DEFAULT 'SMASH Team',
  published boolean DEFAULT false,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  view_count integer DEFAULT 0,
  reading_time integer DEFAULT 5
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX idx_blog_posts_primary_keyword ON blog_posts(primary_keyword);