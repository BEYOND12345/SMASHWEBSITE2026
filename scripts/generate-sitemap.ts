import { createClient } from '@supabase/supabase-js';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

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

const today = new Date().toISOString().split('T')[0];

// Resolve the most recent git commit date touching any of the given files.
// Returns YYYY-MM-DD. Falls back to today when git isn't available (CI cache,
// shallow clone, or an untracked new file).
const gitDateCache = new Map<string, string>();
function lastGitDate(files: string[]): string {
  const cacheKey = files.join('|');
  const cached = gitDateCache.get(cacheKey);
  if (cached) return cached;

  let newest = '';
  for (const file of files) {
    try {
      const out = execSync(
        `git log -1 --format=%cs -- "${file}"`,
        { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'ignore'] }
      ).trim();
      if (out && (!newest || out > newest)) newest = out;
    } catch {
      // ignore — file might be untracked
    }
  }
  const result = newest || today;
  gitDateCache.set(cacheKey, result);
  return result;
}

type PageEntry = {
  loc: string;
  srcFiles?: string[]; // paths used to derive lastmod (falls back to today)
  lastmodOverride?: string;
  changefreq: string;
  priority: string;
};

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
  const latestBlogDate = posts?.[0]?.updated_at?.split('T')[0] ?? today;

  // Shared data files that affect many pages — changes here should bump
  // lastmod across all pages that consume them.
  const sharedNav = ['src/components/nav.tsx', 'src/components/footer.tsx'];
  const segmentData = ['src/data/segment-data.ts'];
  const comparisonData = ['src/data/comparison-data.ts'];
  const integrationData = ['src/data/integrations-data.ts'];
  const toolsShell = ['src/components/calculator-lead-form.tsx'];

  const staticPages: PageEntry[] = [
    // Core
    { loc: '/',             srcFiles: ['src/pages/landing-page.tsx', ...sharedNav], changefreq: 'weekly',  priority: '1.0' },
    { loc: '/blog',         srcFiles: ['src/pages/blog-list.tsx'], lastmodOverride: latestBlogDate, changefreq: 'daily', priority: '0.9' },
    { loc: '/how-it-works', srcFiles: ['src/pages/how-it-works.tsx'], changefreq: 'monthly', priority: '0.8' },
    { loc: '/faq',          srcFiles: ['src/pages/faq-page.tsx'], changefreq: 'monthly', priority: '0.8' },
    { loc: '/pricing',      srcFiles: ['src/pages/pricing.tsx'], changefreq: 'monthly', priority: '0.9' },
    { loc: '/features',     srcFiles: ['src/pages/features.tsx'], changefreq: 'monthly', priority: '0.9' },
    { loc: '/founder',      srcFiles: ['src/pages/founder.tsx'], changefreq: 'monthly', priority: '0.7' },
    { loc: '/contact',      srcFiles: ['src/pages/contact.tsx'], changefreq: 'yearly',  priority: '0.5' },
    { loc: '/privacy',      srcFiles: ['src/pages/privacy.tsx'], changefreq: 'yearly',  priority: '0.3' },
    { loc: '/terms',        srcFiles: ['src/pages/terms.tsx'],   changefreq: 'yearly',  priority: '0.3' },
    { loc: '/roadmap',      srcFiles: ['src/pages/roadmap.tsx'], changefreq: 'monthly', priority: '0.7' },
    { loc: '/changelog',    srcFiles: ['src/pages/changelog.tsx'], changefreq: 'monthly', priority: '0.7' },

    // Tool pages
    { loc: '/tools',                    srcFiles: ['src/pages/tools.tsx'], changefreq: 'weekly',  priority: '0.9' },
    { loc: '/quote-generator',          srcFiles: ['src/pages/quote-generator.tsx', ...toolsShell], changefreq: 'monthly', priority: '0.9' },
    { loc: '/invoice-generator',        srcFiles: ['src/pages/invoice-generator.tsx', ...toolsShell], changefreq: 'monthly', priority: '0.9' },
    { loc: '/gst-calculator',           srcFiles: ['src/pages/gst-calculator.tsx', ...toolsShell], changefreq: 'monthly', priority: '0.9' },
    { loc: '/invoice-template',         srcFiles: ['src/pages/invoice-template.tsx'], changefreq: 'monthly', priority: '0.9' },
    { loc: '/hourly-rate-calculator',   srcFiles: ['src/pages/hourly-rate-calculator.tsx', ...toolsShell], changefreq: 'monthly', priority: '0.8' },
    { loc: '/late-payment-calculator',  srcFiles: ['src/pages/late-payment-calculator.tsx', ...toolsShell], changefreq: 'monthly', priority: '0.8' },
    { loc: '/profit-calculator',        srcFiles: ['src/pages/profit-calculator.tsx', ...toolsShell], changefreq: 'monthly', priority: '0.9' },

    // Feature / product pages
    { loc: '/voice-invoicing',         srcFiles: ['src/pages/voice-invoicing.tsx'], changefreq: 'monthly', priority: '0.9' },
    { loc: '/ai-invoicing',            srcFiles: ['src/pages/ai-invoicing.tsx'], changefreq: 'monthly', priority: '0.9' },
    { loc: '/gst-compliant-invoicing', srcFiles: ['src/pages/gst-compliant-invoicing.tsx'], changefreq: 'monthly', priority: '0.8' },
    { loc: '/invoice-on-mobile',       srcFiles: ['src/pages/invoice-on-mobile.tsx'], changefreq: 'monthly', priority: '0.8' },
    { loc: '/chrome-extension',        srcFiles: ['src/pages/chrome-extension.tsx'], changefreq: 'monthly', priority: '0.9' },

    // Comparison pages — share comparison-data so any price update bumps them all
    { loc: '/smash-vs-xero',        srcFiles: ['src/pages/smash-vs-xero.tsx', ...comparisonData], changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-myob',        srcFiles: ['src/pages/smash-vs-myob.tsx', ...comparisonData], changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-servicem8',   srcFiles: ['src/pages/smash-vs-servicem8.tsx', ...comparisonData], changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-quickbooks',  srcFiles: ['src/pages/smash-vs-quickbooks.tsx', ...comparisonData], changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-fergus',      srcFiles: ['src/pages/smash-vs-fergus.tsx', ...comparisonData], changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-tradify',     srcFiles: ['src/pages/smash-vs-tradify.tsx', ...comparisonData], changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-invoice2go',  srcFiles: ['src/pages/smash-vs-invoice2go.tsx', ...comparisonData], changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-joist',       srcFiles: ['src/pages/smash-vs-joist.tsx', ...comparisonData], changefreq: 'monthly', priority: '0.9' },
    { loc: '/smash-vs-rounded',     srcFiles: ['src/pages/smash-vs-rounded.tsx', ...comparisonData], changefreq: 'monthly', priority: '0.9' },

    // Segment / trade pages — all driven by segment-data
    { loc: '/for-cleaners',            srcFiles: ['src/pages/for-cleaners.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-plumbers',            srcFiles: ['src/pages/for-plumbers.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-electricians',        srcFiles: ['src/pages/for-electricians.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-handymen',            srcFiles: ['src/pages/for-handymen.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-painters',            srcFiles: ['src/pages/for-painters.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-gardeners',           srcFiles: ['src/pages/for-gardeners.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-mobile-mechanics',    srcFiles: ['src/pages/for-mobile-mechanics.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-hvac',                srcFiles: ['src/pages/for-hvac.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-pest-control',        srcFiles: ['src/pages/for-pest-control.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-concreters',          srcFiles: ['src/pages/for-concreters.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-tilers',              srcFiles: ['src/pages/for-tilers.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-locksmiths',          srcFiles: ['src/pages/for-locksmiths.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-car-detailers',       srcFiles: ['src/pages/for-car-detailers.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-dog-groomers',        srcFiles: ['src/pages/for-dog-groomers.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-arborists',           srcFiles: ['src/pages/for-arborists.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-pool-maintenance',    srcFiles: ['src/pages/for-pool-maintenance.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-solar-installers',    srcFiles: ['src/pages/for-solar-installers.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-rubbish-removal',     srcFiles: ['src/pages/for-rubbish-removal.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-it-repair',           srcFiles: ['src/pages/for-it-repair.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-appliance-repair',    srcFiles: ['src/pages/for-appliance-repair.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-security-installers', srcFiles: ['src/pages/for-security-installers.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/for-fencers',             srcFiles: ['src/pages/for-fencers.tsx', ...segmentData], changefreq: 'monthly', priority: '0.8' },

    // International landing pages — live downloads, not waitlists
    { loc: '/nz', srcFiles: ['src/pages/country-nz.tsx', 'src/data/country-data.ts'], changefreq: 'weekly', priority: '0.8' },
    { loc: '/uk', srcFiles: ['src/pages/country-uk.tsx', 'src/data/country-data.ts'], changefreq: 'weekly', priority: '0.8' },
    { loc: '/us', srcFiles: ['src/pages/country-us.tsx', 'src/data/country-data.ts'], changefreq: 'weekly', priority: '0.8' },
    { loc: '/ca', srcFiles: ['src/pages/country-ca.tsx', 'src/data/country-data.ts'], changefreq: 'weekly', priority: '0.8' },

    // Integrations
    { loc: '/integrations',            srcFiles: ['src/pages/integrations.tsx', ...integrationData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/integrations/xero',       srcFiles: ['src/pages/integrations-xero.tsx', ...integrationData], changefreq: 'monthly', priority: '0.8' },
    { loc: '/integrations/quickbooks', srcFiles: ['src/pages/integrations-quickbooks.tsx', ...integrationData], changefreq: 'monthly', priority: '0.8' },

    // Content pillars — evergreen SEO + AI citation bait
    { loc: '/tradie-hourly-rates', srcFiles: ['src/pages/tradie-hourly-rates.tsx'], changefreq: 'monthly', priority: '0.85' },
    { loc: '/materials-pricing',   srcFiles: ['src/pages/materials-pricing.tsx'],   changefreq: 'monthly', priority: '0.85' },
    { loc: '/customer-approval',   srcFiles: ['src/pages/customer-approval.tsx'],   changefreq: 'monthly', priority: '0.85' },

    // Human-readable sitemap (for discovery + AI crawlers)
    { loc: '/sitemap', srcFiles: ['src/pages/sitemap-page.tsx'], changefreq: 'weekly', priority: '0.5' },
  ];

  const resolvedStatic = staticPages.map((p) => ({
    loc: p.loc,
    lastmod: p.lastmodOverride ?? (p.srcFiles ? lastGitDate(p.srcFiles) : today),
    changefreq: p.changefreq,
    priority: p.priority,
  }));

  const blogPages = posts?.map(post => ({
    loc: `/blog/${post.slug}`,
    lastmod: post.updated_at.split('T')[0],
    changefreq: 'monthly',
    priority: '0.8',
  })) || [];

  const allPages = [...resolvedStatic, ...blogPages];

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
  console.log(`  Static pages: ${resolvedStatic.length}`);

  // Spot-check lastmod distribution so stale-date regressions are obvious.
  const dateCounts = new Map<string, number>();
  for (const p of allPages) {
    dateCounts.set(p.lastmod, (dateCounts.get(p.lastmod) ?? 0) + 1);
  }
  const sorted = [...dateCounts.entries()].sort((a, b) => (a[0] < b[0] ? 1 : -1));
  console.log('  lastmod distribution (top 5 most recent):');
  for (const [date, count] of sorted.slice(0, 5)) {
    console.log(`    ${date} → ${count} URL${count === 1 ? '' : 's'}`);
  }

  try {
    writeFileSync(distPath, sitemap);
    console.log(`✓ Sitemap also updated at ${distPath}`);
  } catch {
    console.log('  (dist folder will be updated on next build)');
  }
}

generateSitemap();
