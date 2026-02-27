/*
  # Fix Broken Blog Post Image

  1. Updates
    - Fix the featured_image path for "The Paperwork Tax" blog post
    - Changes from non-existent /screenshot_2026-01-05_at_7.28.23_am.png
    - To existing /screenshot_2026-01-05_at_7.09.10_am.png

  2. Notes
    - This is a data migration to fix a broken image reference
    - The original image file doesn't exist in the public folder
*/

UPDATE blog_posts
SET featured_image = '/screenshot_2026-01-05_at_7.09.10_am.png',
    updated_at = now()
WHERE slug = 'the-paperwork-tax-stop-losing-money'
  AND featured_image = '/screenshot_2026-01-05_at_7.28.23_am.png';
