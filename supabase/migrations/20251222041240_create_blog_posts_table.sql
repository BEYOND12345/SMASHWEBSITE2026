/*
  # Create blog posts table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `slug` (text, unique, not null) - URL-friendly version of title
      - `excerpt` (text) - Short summary for SEO and list views
      - `content` (text, not null) - Full blog post content
      - `author` (text, not null) - Author name
      - `published_at` (timestamptz) - Publication date
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp
      - `meta_title` (text) - SEO meta title
      - `meta_description` (text) - SEO meta description
      - `featured_image_url` (text) - Optional featured image
      - `is_published` (boolean, default false) - Draft/published status

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public read access to published posts
    - Posts are managed server-side (no public write access)
    
  3. Indexes
    - Index on slug for fast lookups
    - Index on published_at for sorting
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text NOT NULL,
  author text NOT NULL,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  meta_title text,
  meta_description text,
  featured_image_url text,
  is_published boolean DEFAULT false
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (is_published = true);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);