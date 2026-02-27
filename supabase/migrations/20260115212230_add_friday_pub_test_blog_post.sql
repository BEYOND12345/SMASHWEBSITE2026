/*
  # Add "Friday Pub Test" Blog Post

  1. New Content
    - Blog post #9 about batch invoicing workflow
    - Addresses the "Sunday admin" problem
    - Introduces the "Driveway Workflow" concept
    - Focuses on batch processing invoices at the pub

  2. SEO Optimization
    - Primary keyword: "Batch invoicing for tradies"
    - Secondary keywords: how to send multiple invoices, tradie admin tips, best app for tradies Australia
    - Meta description optimized for search visibility
    - URL slug: friday-pub-test-batch-invoicing-tradies

  3. Notes
    - Post 9 in the series
    - Uses existing /messy_dashboard.png image
    - Published and ready for public viewing
    - Reading time: 5 minutes
*/

INSERT INTO blog_posts (
  title,
  slug,
  content,
  excerpt,
  featured_image,
  featured_image_alt,
  primary_keyword,
  secondary_keywords,
  meta_description,
  author,
  published,
  published_at,
  reading_time,
  view_count
) VALUES (
  'The Friday Pub Test: How I Send 20 Invoices Before My First Sip',
  'friday-pub-test-batch-invoicing-tradies',
  'You know the feeling. It''s 3:30 PM on a Friday. The tools are down, the van is packed, and the boys are heading to the pub.

But you? You''ve got a knot in your stomach.

You''re thinking about the three jobs you finished on Tuesday but didn''t write down. You''re thinking about Mrs. Higgins'' fence that needs a final bill. You''re thinking about the pile of receipts on your dashboard that are currently being bleached by the sun.

You could go to the pub. But you know that means waking up on Sunday morning with a hangover and 20 invoices to type up. The dreaded "Sunday Night Slog."

I lived that life for five years. I hated it. So, I built a new rule for my business. It''s called The Friday Pub Test.

The rule is simple: I cannot take my first sip of beer until every single invoice for the week is sent.

Sounds impossible? Last Friday, I sent 22 invoices in the time it took the bartender to pour a schooner. Here is how I did it, and how you can too.

## The "One-at-a-Time" Trap

The reason most tradies hate invoicing is that they treat it like a ceremony. You get home, you shower, you open the laptop, you wait for software to load, you find the client''s email, and you type.

If you''ve done 15 small jobs this week, that''s 75 minutes of unpaid data entry. Who wants to do an hour of unpaid work on a Friday afternoon? Nobody. So you push it to Sunday. And then Sunday becomes Monday morning. And suddenly, your cash flow is looking scary.

## The "Batch Mode" Breakthrough: My 30-Second Workflow

When I was building Smash Invoices in the back of my van, I realized that typing was the enemy. I needed a way to stack up my jobs and fire them off all at once.

**1. Voice-Log the Job (The "Driveway" Phase)**

This is the prep work. When I finish a job, I don''t drive away until I''ve spent 10 seconds talking to my phone.

"Smash, charge Rob $250 for the mixer tap replacement plus $40 for the part."

Done. I don''t send it yet. It sits in my "Pending" queue.

**2. The Friday Flush (The "Pub" Phase)**

Fast forward to Friday at the pub. I open the app. I see a list of 20 pending jobs from the week. I hit "Select All" and then "Batch Send."

Smash Invoices knows who Rob is. It knows his email. It even knows that polite little message: "Hey Rob, thanks for the work on Tuesday, here is the bill."

By the time the barman puts the coaster down, my phone vibrates. **20 Emails Sent.**

## Why This Beats "Sunday Admin"

Beyond the fact that beer tastes better when you aren''t stressed, there is a serious business case for the Pub Test.

**You Get Paid Faster:** If a client gets an invoice at 4:00 PM on a Friday, they often pay it immediately to clear their own admin. If you send it Sunday night, it gets buried in their Monday morning email avalanche.

**You Don''t Forget the "Little Things":** When you batch-process from voice notes made on-site, you capture the extra tube of silicone or the disposal fee you''d normally forget by Sunday.

**Your Family Will Like You More:** Kill the admin at the pub, and your weekend actually belongs to your family again.

## The Challenge

This Friday, I want you to try it. Don''t go home to invoice. Go to the pub, open your phone, and if you can''t clear your entire week''s billing in under 5 minutes, your system is broken.

If you''re still wrestling with Word templates or fighting with a slow desktop app, maybe it''s time to look at a tool built for the way we actually work.

Cheers. 🍻',
  'Stop doing admin on Sundays. Learn the ''Driveway Workflow'' to send 20+ invoices in seconds so you can enjoy your Friday without the paperwork stress.',
  '/messy_dashboard.png',
  'Cluttered workspace representing the stress of traditional invoicing workflows',
  'Batch invoicing for tradies',
  ARRAY['how to send multiple invoices', 'tradie admin tips', 'best app for tradies Australia'],
  'Stop doing admin on Sundays. Learn the ''Driveway Workflow'' to send 20+ invoices in seconds so you can enjoy your Friday without the paperwork stress.',
  'SMASH Team',
  true,
  now(),
  5,
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  content = EXCLUDED.content,
  excerpt = EXCLUDED.excerpt,
  featured_image = EXCLUDED.featured_image,
  featured_image_alt = EXCLUDED.featured_image_alt,
  primary_keyword = EXCLUDED.primary_keyword,
  secondary_keywords = EXCLUDED.secondary_keywords,
  meta_description = EXCLUDED.meta_description,
  reading_time = EXCLUDED.reading_time,
  updated_at = now();
