/*
  # Create blog images storage bucket

  1. New Storage
    - Create 'blog-images' storage bucket for all blog-related images
    - Organized with folders: featured-images/, inline-images/
    - Public access for reading (images displayed on blog)
    - Restricted write access (only authenticated users can upload)

  2. Storage Policies
    - Public read access to all blog images
    - Authenticated users can upload images
    - Authenticated users can update/delete their uploads

  3. File Organization
    - featured-images/ - Main blog post images (1200x630px)
    - inline-images/ - Content images within posts
    - All images publicly accessible via URL

  4. Notes
    - Images are optimized before upload (see BLOG_IMAGE_STANDARDS.md)
    - File naming follows convention: [post-slug]-[descriptor].jpg
    - Maximum file size handled at application level
*/

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'blog-images',
  'blog-images',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public read access for blog images"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can upload blog images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can update their blog images"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can delete their blog images"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'blog-images');
