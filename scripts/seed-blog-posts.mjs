/**
 * SMASH Invoices — Blog Post Seed Script
 *
 * Upserts all 21 blog posts to Supabase blog_posts table.
 *
 * Usage:
 *   SUPABASE_SERVICE_KEY=your_service_key node scripts/seed-blog-posts.mjs
 *
 * Or with .env file:
 *   node --env-file=.env scripts/seed-blog-posts.mjs
 *
 * Requirements:
 *   - SUPABASE_SERVICE_KEY env var (service role key, not anon key)
 *   - VITE_SUPABASE_URL env var (same as in .env)
 *   - blog post .md files in scripts/blog-posts/
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ─── Config ────────────────────────────────────────────────────────────────

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('Missing environment variables.');
  console.error('Required: VITE_SUPABASE_URL and SUPABASE_SERVICE_KEY');
  console.error('');
  console.error('Get the service role key from:');
  console.error('  Supabase Dashboard → Project Settings → API → service_role key');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// ─── Frontmatter Parser ─────────────────────────────────────────────────────

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: content };

  const rawMeta = match[1];
  const body = match[2].trim();
  const meta = {};

  // Parse simple key: value pairs
  const lines = rawMeta.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Array values
    const arrayMatch = line.match(/^(\w+):\s*$/);
    if (arrayMatch && lines[i + 1]?.startsWith('  -')) {
      const key = arrayMatch[1];
      const items = [];
      i++;
      while (i < lines.length && lines[i].startsWith('  -')) {
        // Check if next lines are sub-properties (faq_data objects)
        const itemLine = lines[i];
        if (itemLine.match(/^\s+- question:/)) {
          // faq_data style
          const obj = {};
          const questionMatch = itemLine.match(/question:\s*"?(.+?)"?\s*$/);
          if (questionMatch) obj.question = questionMatch[1].replace(/^"|"$/g, '');
          i++;
          if (lines[i]?.match(/^\s+answer:/)) {
            const answerMatch = lines[i].match(/answer:\s*"?(.+?)"?\s*$/);
            if (answerMatch) obj.answer = answerMatch[1].replace(/^"|"$/g, '');
          }
          items.push(obj);
        } else {
          const val = itemLine.replace(/^\s+-\s*"?/, '').replace(/"?\s*$/, '');
          items.push(val);
        }
        i++;
      }
      meta[key] = items;
      continue;
    }

    // Simple key: "value" or key: value
    const simpleMatch = line.match(/^(\w+):\s*"?(.+?)"?\s*$/);
    if (simpleMatch) {
      const key = simpleMatch[1];
      const val = simpleMatch[2].replace(/^"|"$/, '');
      // Try to parse numbers
      if (!isNaN(val) && val !== '') {
        meta[key] = Number(val);
      } else {
        meta[key] = val;
      }
    }
    i++;
  }

  return { meta, body };
}

// ─── Post Metadata ──────────────────────────────────────────────────────────
// Full faq_data and metadata for each post (since YAML multi-line is complex to parse)

const POST_OVERRIDES = {
  'how-much-losing-uncharged-materials': {
    faq_data: [
      { question: "Do I have to charge GST on materials when invoicing in Australia?", answer: "If your annual turnover exceeds $75,000 and you are registered for GST, you must charge 10% GST on materials included in your invoice. GST-registered businesses can also claim back the GST paid on materials purchased. If you are below the $75,000 threshold, GST registration is optional." },
      { question: "How should I itemise materials on an invoice?", answer: "Each material should be listed as a separate line item with a description, quantity, unit price, and line total. Grouping all materials under a single 'materials' charge reduces customer transparency and reduces your ability to claim accurate business expenses at tax time." },
      { question: "Is there a legal minimum for how much a sole trader must charge for materials?", answer: "No minimum exists. You can charge at cost, at cost-plus-markup, or at a flat rate. Most trades add a 15–25% markup on materials to cover sourcing time, delivery, and carrying cost. This is standard industry practice and customers generally expect it." },
      { question: "What's the easiest way to track materials used on-site?", answer: "The most reliable method is to invoice on-site immediately after completing the job, while the materials are still visible. Voice-to-invoice tools allow you to describe what you used in natural speech and generate an itemised invoice automatically, eliminating the need for manual tracking or end-of-day data entry." },
      { question: "Is there an invoicing app that automatically prices Australian materials?", answer: "SMASH Invoices includes a catalog of 2,250+ Australian trade materials priced from Bunnings supplier data. When you describe a job by voice — 'replaced flexi hose and two tap washers' — the app identifies the materials and prices them automatically. No manual lookup required." }
    ],
    key_takeaways: [
      "The average sole trader loses $5,200 per year on materials they forget to charge for.",
      "Painters lose the most — up to $9,360 annually on uncharged consumables.",
      "The fix is invoicing at the job, not at home — while the materials are still visible.",
      "SMASH Invoices prices materials automatically from a 2,250-item Australian catalog."
    ]
  },
  'sunday-night-invoicing-real-cost': {
    faq_data: [
      { question: "How long should it take to invoice a completed job?", answer: "A single job invoice should take under 5 minutes using any software tool. With a personal pricing catalog set up, it should take under 60 seconds. Voice-based invoicing tools can generate and send a complete, priced invoice in 20–30 seconds for repeat jobs." },
      { question: "Does invoicing the same day improve payment speed?", answer: "Yes. Research on payment behaviour consistently shows that invoices sent within 24 hours of job completion are paid 14–18 days faster than invoices sent at week's end. Same-day invoicing also reduces customer disputes, because the job details are fresh for both parties." },
      { question: "Can I invoice on my phone without a laptop?", answer: "Yes. Most modern invoicing apps are mobile-first and designed for on-site use. SMASH Invoices is iOS-based and designed specifically for on-site invoicing via voice, so no laptop, typing, or office time is required." },
      { question: "How much does Sunday night invoicing actually cost in pricing errors?", answer: "Research consistently shows invoices created from memory hours or days after a job contain errors averaging $50 per invoice. At 25 invoices per month, that's $1,250 in undercharging every month — $15,000 per year — from tired, inaccurate recall of labour rates and materials." },
      { question: "Is there a tool that removes Sunday night invoicing completely?", answer: "SMASH Invoices is designed to make on-site invoicing under 60 seconds — removing the need for any batch invoicing session. Users describe a job by voice immediately after completion. The app builds a priced, GST-compliant invoice and sends it via a customer link before the user leaves the job site." }
    ],
    key_takeaways: [
      "Tired invoicing errors average $50 per invoice — $15,000 per year at 25 invoices/month.",
      "One hour per week of Sunday invoicing costs $4,160 per year in opportunity time.",
      "The total annual cost of Sunday night invoicing exceeds $19,000 for a typical sole trader.",
      "The fix is invoicing at the job — before you drive away."
    ]
  }
};

// ─── Read Blog Post Files ───────────────────────────────────────────────────

const POSTS_DIR = join(__dirname, 'blog-posts');

function readAllPosts() {
  const files = readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.md'))
    .sort();

  return files.map(filename => {
    const content = readFileSync(join(POSTS_DIR, filename), 'utf8');
    const { meta, body } = parseFrontmatter(content);

    // Extract excerpt: first non-heading, non-author-line paragraph after frontmatter
    const lines = body.split('\n');
    let excerpt = '';
    let foundH1 = false;
    for (const line of lines) {
      if (line.startsWith('# ')) { foundH1 = true; continue; }
      if (!foundH1) continue;
      if (line.startsWith('**By Dan')) continue;
      if (line.startsWith('[About Dan')) continue;
      if (line.startsWith('>')) continue;
      if (line.trim() === '' || line.startsWith('#') || line.startsWith('---')) continue;
      // First real paragraph
      excerpt = line.trim().replace(/\*\*/g, '').slice(0, 250);
      break;
    }

    // Use override faq_data if available (more reliable than YAML parsing)
    const override = POST_OVERRIDES[meta.slug] || {};

    return {
      filename,
      slug: meta.slug,
      title: meta.title,
      content: body,
      excerpt: meta.meta_description || excerpt,
      meta_description: meta.meta_description || '',
      meta_title: meta.title,
      primary_keyword: meta.primary_keyword || '',
      secondary_keywords: override.secondary_keywords || [],
      author: 'Dan Reeve',
      author_bio: 'Working handyman and founder of SMASH Invoices. Dan has been a sole trader for over a decade and built SMASH after losing $1,200 in uninvoiced jobs in a single year.',
      published_at: '2026-04-07T00:00:00+10:00',
      updated_at: '2026-04-07T00:00:00+10:00',
      reading_time: typeof meta.reading_time === 'number' ? meta.reading_time : 5,
      view_count: 0,
      published: true,
      featured_image: '',
      featured_image_alt: '',
      key_takeaways: override.key_takeaways || [],
      faq_data: override.faq_data || []
    };
  });
}

// ─── Seed ───────────────────────────────────────────────────────────────────

async function seed() {
  console.log('Reading blog post files...');
  const posts = readAllPosts();
  console.log(`Found ${posts.length} posts to upsert.\n`);

  let success = 0;
  let failed = 0;

  for (const post of posts) {
    const { filename, ...record } = post;

    const { error } = await supabase
      .from('blog_posts')
      .upsert(record, { onConflict: 'slug', ignoreDuplicates: false });

    if (error) {
      console.error(`❌ FAILED: ${post.slug}`);
      console.error(`   Error: ${error.message}`);
      failed++;
    } else {
      console.log(`✅ OK: ${post.slug}`);
      success++;
    }
  }

  console.log(`\n──────────────────────────────`);
  console.log(`Done. ${success} succeeded, ${failed} failed.`);

  if (failed > 0) {
    process.exit(1);
  }
}

seed().catch(err => {
  console.error('Unexpected error:', err);
  process.exit(1);
});
