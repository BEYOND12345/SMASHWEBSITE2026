import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';
import { join } from 'path';

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;

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

  const baseUrl = 'https://www.quickquip.co';
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { loc: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { loc: '/blog', lastmod: today, changefreq: 'daily', priority: '0.9' },
    { loc: '/founder', lastmod: today, changefreq: 'monthly', priority: '0.7' },
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
  } catch (e) {
    console.log('  (dist folder will be updated on next build)');
  }
}

generateSitemap();
