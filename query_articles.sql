SELECT slug, title, 
       (SELECT COUNT(*) FROM json_array_length(content) * 3.5)::int as estimated_words,
       primary_keyword, 
       array_length(secondary_keywords, 1) as secondary_count,
       meta_title, 
       meta_description,
       key_takeaways,
       reading_time
FROM blog_posts 
WHERE slug IN (
  'stop-bringing-laptops-to-job-sites',
  'the-car-office-reality-check',
  'the-paperwork-tax-stop-losing-money',
  'why-invoicing-apps-fail-mobile-test'
)
ORDER BY published_at DESC;
