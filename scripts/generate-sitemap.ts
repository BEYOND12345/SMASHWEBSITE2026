import { createClient } from '@supabase/supabase-js';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function loadEnv() {
  const envPath = join(__dirname, '..', '.env');
  if (existsSync(envPath)) {
    const envContent = readFileSync(envPath, 'utf-8');
    envContent.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const value = match[2].trim().replace(/^["']|["']$/g, '');
        process.env[key] = value;
      }
    });
  }
}

loadEnv();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials. Please check your .env file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function generateSitemap() {
  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('slug, updated_at')
    .eq('published', true)
    .order('updated_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    process.exit(1);
  }

  const baseUrl = 'https://smashinvoices.com';
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    // Core
    { loc: '/',             lastmod: today, changefreq: 'weekly',  priority: '1.0' },
    { loc: '/blog',         lastmod: today, changefreq: 'daily',   priority: '0.9' },
    { loc: '/how-it-works', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/faq',          lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/pricing',      lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/features',     lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/founder',      lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: '/contact',      lastmod: today, changefreq: 'yearly',  priority: '0.5' },
    { loc: '/privacy',      lastmod: today, changefreq: 'yearly',  priority: '0.3' },
    { loc: '/terms',        lastmod: today, changefreq: 'yearly',  priority: '0.3' },
    { loc: '/roadmap',      lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: '/changelog',    lastmod: today, changefreq: 'monthly', priority: '0.7' },

    // Tool pages
    { loc: '/tools',                    lastmod: today, changefreq: 'weekly',  priority: '0.9' },
    { loc: '/quote-generator',          lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/invoice-generator',        lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/gst-calculator',           lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/invoice-template',         lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/hourly-rate-calculator',   lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/late-payment-calculator',  lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/profit-calculator',        lastmod: today, changefreq: 'monthly', priority: '0.9' },

    // Feature / product pages
    { loc: '/voice-invoicing',         lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/ai-invoicing',            lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/gst-compliant-invoicing', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/invoice-on-mobile',       lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/chrome-extension',        lastmod: today, changefreq: 'monthly', priority: '0.9' },

    // Comparison pages
    { loc: '/smash-vs-xero',        lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-myob',        lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-servicem8',   lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-quickbooks',  lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-fergus',      lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-tradify',     lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-invoice2go',  lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-joist',       lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-rounded',     lastmod: today, changefreq: 'monthly', priority: '0.9' },

    // Segment / trade pages
    { loc: '/for-cleaners',         lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-plumbers',         lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-electricians',     lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-handymen',         lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-painters',         lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-gardeners',        lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-mobile-mechanics', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-hvac',             lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-pest-control',     lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-concreters',       lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-tilers',           lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-locksmiths',       lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-car-detailers',    lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-dog-groomers',     lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-arborists',        lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-pool-maintenance', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-solar-installers', lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-rubbish-removal',  lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-it-repair',            lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-appliance-repair',     lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-security-installers',  lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-fencers',              lastmod: today, changefreq: 'monthly', priority: '0.8' },

    // International landing pages (waitlist — live country is root)
    { loc: '/nz', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: '/uk', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: '/us', lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: '/ca', lastmod: today, changefreq: 'weekly', priority: '0.8' },

    // Integrations
    { loc: '/integrations',            lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/integrations/xero',       lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: '/integrations/quickbooks', lastmod: today, changefreq: 'monthly', priority: '0.8' },

    // Content pillars — evergreen SEO + AI citation bait
    { loc: '/tradie-hourly-rates', lastmod: today, changefreq: 'monthly', priority: '0.85' },
    { loc: '/materials-pricing',   lastmod: today, changefreq: 'monthly', priority: '0.85' },
    { loc: '/customer-approval',   lastmod: today, changefreq: 'monthly', priority: '0.85' },

    // Human-readable sitemap (for discovery + AI crawlers)
    { loc: '/sitemap', lastmod: today, changefreq: 'weekly', priority: '0.5' },
  ];

  const blogPages = posts?.map(post => ({
    loc: `/blog/${post.slug}`,
    lastmod: post.updated_at.split('T')[0],
    changefreq: 'monthly',
    priority: '0.8',
  })) || [];

  const allPages = [...staticPages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

  const publicPath = join(process.cwd(), 'public', 'sitemap.xml');
  const distPath = join(process.cwd(), 'dist', 'sitemap.xml');

  writeFileSync(publicPath, sitemap);
  console.log(`✓ Sitemap generated at ${publicPath}`);
  console.log(`  Total URLs: ${allPages.length}`);
  console.log(`  Blog posts: ${blogPages.length}`);

  try {
    writeFileSync(distPath, sitemap);
    console.log(`✓ Sitemap also updated at ${distPath}`);
  } catch {
    console.log('  (dist folder will be updated on next build)');
  }
}

generateSitemap();
