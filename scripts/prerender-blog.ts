import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Prerenders every published blog post into a standalone, fully-static HTML
 * file that Google and other crawlers can index without executing JavaScript.
 *
 * Why standalone (no hydration / no bundle reference)?
 * -----------------------------------------------------
 * We commit the prerendered output to `public/blog/<slug>/index.html` so Bolt's
 * `vite build` copies it straight into `dist/` without having to run the
 * prerender step (Bolt does not have Supabase credentials). If these files
 * referenced a hashed JS bundle, the references would go stale on the next
 * Vite build and the pages would break. Keeping them fully static sidesteps
 * that entirely and gives us clean, crawlable SEO pages that match the
 * SMASH design language.
 */

function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
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

const SITE_URL = 'https://smashinvoices.com';
const APP_STORE_URL = 'https://apps.apple.com/au/app/smash-invoices/id6759475079';

interface FAQItem { question: string; answer: string }

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string | null;
  featured_image_alt: string | null;
  primary_keyword: string;
  secondary_keywords: string[];
  meta_title: string | null;
  meta_description: string;
  author: string;
  author_bio: string | null;
  published_at: string;
  updated_at: string | null;
  last_reviewed: string | null;
  reading_time: number;
  key_takeaways: string[] | null;
  faq_data: FAQItem[] | null;
}

marked.setOptions({ gfm: true, breaks: false });

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

function absoluteImage(src: string | null | undefined): string {
  if (!src) return `${SITE_URL}/hero_image.png`;
  if (src.startsWith('http')) return src;
  return `${SITE_URL}${src.startsWith('/') ? '' : '/'}${src}`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function renderJsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function buildArticleSchema(post: BlogPost, url: string): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description || post.excerpt,
    image: absoluteImage(post.featured_image),
    datePublished: new Date(post.published_at).toISOString(),
    dateModified: new Date(
      post.updated_at || post.last_reviewed || post.published_at,
    ).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SMASH Invoices',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: [post.primary_keyword, ...(post.secondary_keywords || [])].join(', '),
    wordCount: post.content ? post.content.split(/\s+/).length : undefined,
    articleSection: 'Blog',
    inLanguage: 'en-AU',
  };
}

function buildBreadcrumbSchema(post: BlogPost, url: string): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };
}

function buildFaqSchema(faq: FAQItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

function inlineStyles(): string {
  return `
    :root {
      --bg: #0A0A0A;
      --bg-soft: #111;
      --surface: rgba(255,255,255,0.04);
      --surface-strong: rgba(255,255,255,0.08);
      --border: rgba(255,255,255,0.1);
      --text: #F5F5F5;
      --text-muted: rgba(255,255,255,0.65);
      --text-dim: rgba(255,255,255,0.45);
      --accent: #D9F99D;
      --accent-ink: #0A0A0A;
    }
    *, *::before, *::after { box-sizing: border-box; }
    html { -webkit-text-size-adjust: 100%; }
    body {
      margin: 0;
      background: var(--bg);
      color: var(--text);
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
      font-size: 17px;
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }
    img { max-width: 100%; height: auto; display: block; }
    .container { max-width: 760px; margin: 0 auto; padding: 0 24px; }
    .nav {
      position: sticky; top: 0; z-index: 10;
      background: rgba(10,10,10,0.85);
      backdrop-filter: saturate(140%) blur(10px);
      -webkit-backdrop-filter: saturate(140%) blur(10px);
      border-bottom: 1px solid var(--border);
    }
    .nav-inner {
      max-width: 1200px; margin: 0 auto;
      display: flex; align-items: center; justify-content: space-between;
      padding: 14px 24px;
    }
    .nav-brand {
      font-family: 'Barlow Condensed', system-ui, sans-serif;
      font-weight: 800; letter-spacing: 0.02em;
      color: #fff; font-size: 22px; text-transform: uppercase;
    }
    .nav-links { display: none; gap: 28px; }
    .nav-links a { color: var(--text-muted); font-size: 14px; font-weight: 500; }
    .nav-links a:hover { color: #fff; text-decoration: none; }
    .nav-cta {
      background: var(--accent); color: var(--accent-ink);
      padding: 9px 16px; border-radius: 999px;
      font-size: 13px; font-weight: 700; letter-spacing: 0.01em;
    }
    .nav-cta:hover { filter: brightness(0.95); text-decoration: none; }
    @media (min-width: 860px) { .nav-links { display: flex; } }
    main { padding: 48px 0 64px; }
    .back-link {
      display: inline-flex; align-items: center; gap: 6px;
      color: var(--accent); font-size: 14px; font-weight: 600;
      margin-bottom: 28px;
    }
    h1.post-title {
      font-family: 'Barlow Condensed', system-ui, sans-serif;
      font-weight: 900;
      font-size: clamp(36px, 6vw, 60px);
      line-height: 1.02;
      letter-spacing: -0.015em;
      margin: 0 0 20px;
      color: #fff;
    }
    .post-meta {
      display: flex; flex-wrap: wrap; gap: 14px 22px;
      color: var(--text-muted); font-size: 14px; font-weight: 500;
      margin-bottom: 28px;
    }
    .post-meta span { display: inline-flex; align-items: center; gap: 6px; }
    .featured-img {
      border-radius: 16px; overflow: hidden;
      background: var(--surface);
      margin: 0 0 40px;
      border: 1px solid var(--border);
    }
    .takeaways {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 24px 28px;
      margin: 0 0 40px;
    }
    .takeaways h2 {
      font-family: 'Barlow Condensed', system-ui, sans-serif;
      font-size: 20px; text-transform: uppercase; letter-spacing: 0.06em;
      margin: 0 0 12px; color: var(--accent);
    }
    .takeaways ul { margin: 0; padding-left: 20px; }
    .takeaways li { margin: 6px 0; color: var(--text); }
    .prose h2 {
      font-family: 'Barlow Condensed', system-ui, sans-serif;
      font-weight: 800;
      font-size: clamp(26px, 3.6vw, 34px);
      line-height: 1.15;
      letter-spacing: -0.01em;
      margin: 48px 0 16px;
      color: #fff;
    }
    .prose h3 {
      font-family: 'Barlow Condensed', system-ui, sans-serif;
      font-weight: 700;
      font-size: 22px;
      margin: 32px 0 12px;
      color: #fff;
    }
    .prose p { margin: 0 0 18px; color: rgba(255,255,255,0.85); }
    .prose ul, .prose ol { margin: 0 0 18px; padding-left: 22px; }
    .prose li { margin: 8px 0; color: rgba(255,255,255,0.85); }
    .prose strong { color: #fff; }
    .prose blockquote {
      margin: 24px 0;
      padding: 12px 20px;
      border-left: 3px solid var(--accent);
      background: var(--surface);
      color: rgba(255,255,255,0.85);
      border-radius: 0 10px 10px 0;
    }
    .prose img { border-radius: 12px; margin: 24px 0; }
    .prose code {
      background: var(--surface-strong);
      padding: 2px 6px; border-radius: 6px;
      font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 0.92em;
    }
    .prose pre {
      background: var(--bg-soft);
      border: 1px solid var(--border);
      padding: 16px; border-radius: 12px;
      overflow-x: auto;
    }
    .prose a { border-bottom: 1px solid rgba(217,249,157,0.4); }
    .prose a:hover { text-decoration: none; border-bottom-color: var(--accent); }
    .faq { margin: 56px 0 0; }
    .faq h2 {
      font-family: 'Barlow Condensed', system-ui, sans-serif;
      font-weight: 800; font-size: clamp(28px, 4vw, 36px);
      margin: 0 0 20px; color: #fff;
    }
    .faq details {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 14px 20px;
      margin-bottom: 10px;
    }
    .faq summary {
      cursor: pointer; font-weight: 600; color: #fff; font-size: 16px;
      list-style: none;
    }
    .faq summary::-webkit-details-marker { display: none; }
    .faq summary::after { content: '+'; float: right; color: var(--accent); font-weight: 700; }
    .faq details[open] summary::after { content: '−'; }
    .faq details[open] summary { margin-bottom: 8px; }
    .faq p { color: var(--text-muted); margin: 8px 0 0; }
    .cta-card {
      margin: 56px 0 0;
      background: linear-gradient(135deg, rgba(217,249,157,0.12), rgba(217,249,157,0.04));
      border: 1px solid rgba(217,249,157,0.25);
      border-radius: 20px;
      padding: 32px;
      text-align: center;
    }
    .cta-card h3 {
      font-family: 'Barlow Condensed', system-ui, sans-serif;
      font-size: 28px; font-weight: 800; margin: 0 0 10px; color: #fff;
    }
    .cta-card p { color: var(--text-muted); margin: 0 0 20px; }
    .cta-btn {
      display: inline-block;
      background: var(--accent); color: var(--accent-ink);
      padding: 12px 24px; border-radius: 999px;
      font-weight: 700; font-size: 15px;
    }
    .cta-btn:hover { filter: brightness(0.95); text-decoration: none; }
    .author-card {
      margin: 48px 0 0;
      padding: 20px;
      border-top: 1px solid var(--border);
      color: var(--text-muted);
      font-size: 15px;
    }
    .author-card strong { color: #fff; }
    footer {
      margin-top: 80px;
      padding: 40px 24px;
      border-top: 1px solid var(--border);
      color: var(--text-dim);
      font-size: 14px;
      text-align: center;
    }
    footer a { color: var(--text-muted); margin: 0 10px; }
    footer a:hover { color: #fff; text-decoration: none; }
  `.replace(/\n\s+/g, '\n  ');
}

function renderPost(post: BlogPost): string {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const title = post.meta_title || `${post.title} | SMASH Invoices Blog`;
  const description = post.meta_description || post.excerpt;
  const ogImage = absoluteImage(post.featured_image);
  const keywords = [post.primary_keyword, ...(post.secondary_keywords || [])]
    .filter(Boolean)
    .join(', ');
  const publishedIso = new Date(post.published_at).toISOString();
  const modifiedIso = new Date(
    post.updated_at || post.last_reviewed || post.published_at,
  ).toISOString();

  // Strip a leading H1 (markdown `# Heading`) that duplicates the page title,
  // then render. If any stray `<h1>`s remain in the body we demote them to
  // `<h2>` — the page title is the sole `<h1>`.
  const contentMd = (post.content || '').replace(/^\s*#\s+.+?\n+/, '');
  const contentHtml = (marked.parse(contentMd) as string)
    .replace(/<h1>/g, '<h2>')
    .replace(/<\/h1>/g, '</h2>');

  const takeaways = (post.key_takeaways && post.key_takeaways.length > 0)
    ? `<aside class="takeaways"><h2>Key Takeaways</h2><ul>${post.key_takeaways
        .map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ul></aside>`
    : '';

  const faqBlock = (post.faq_data && post.faq_data.length > 0)
    ? `<section class="faq"><h2>Frequently Asked Questions</h2>${post.faq_data
        .map(f => `<details><summary>${escapeHtml(f.question)}</summary><p>${escapeHtml(f.answer)}</p></details>`)
        .join('')}</section>`
    : '';

  const authorBlock = post.author_bio
    ? `<div class="author-card"><strong>About ${escapeHtml(post.author)}</strong><br>${escapeHtml(post.author_bio)}</div>`
    : '';

  const schemas: object[] = [
    buildArticleSchema(post, url),
    buildBreadcrumbSchema(post, url),
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'SMASH Invoices',
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.svg`,
      description:
        'Voice-to-invoice software for tradies, contractors and service businesses. Live in Australia; launching next in New Zealand, the UK, the US and Canada.',
      areaServed: ['AU', 'NZ', 'GB', 'US', 'CA'],
      sameAs: [APP_STORE_URL],
    },
  ];
  if (post.faq_data && post.faq_data.length > 0) {
    schemas.push(buildFaqSchema(post.faq_data));
  }

  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="keywords" content="${escapeHtml(keywords)}">
  <meta name="author" content="${escapeHtml(post.author)}">
  <link rel="canonical" href="${url}">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">

  <!-- Same-URL hreflang alternates: content is globally-relevant; per-country
       product pages live at /nz /uk /us /ca. -->
  <link rel="alternate" hreflang="x-default" href="${url}">
  <link rel="alternate" hreflang="en-AU"     href="${url}">
  <link rel="alternate" hreflang="en-NZ"     href="${url}">
  <link rel="alternate" hreflang="en-GB"     href="${url}">
  <link rel="alternate" hreflang="en-US"     href="${url}">
  <link rel="alternate" hreflang="en-CA"     href="${url}">

  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

  <meta property="og:site_name" content="SMASH Invoices">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(post.meta_title || post.title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:locale" content="en_AU">
  <meta property="article:published_time" content="${publishedIso}">
  <meta property="article:modified_time" content="${modifiedIso}">
  <meta property="article:author" content="${escapeHtml(post.author)}">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(post.meta_title || post.title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${ogImage}">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">

  <style>${inlineStyles()}</style>

${schemas
  .map(s => `  <script type="application/ld+json">${renderJsonLd(s)}</script>`)
  .join('\n')}
</head>
<body>
  <nav class="nav">
    <div class="nav-inner">
      <a href="/" class="nav-brand">SMASH</a>
      <div class="nav-links">
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/how-it-works">How it works</a>
        <a href="/blog">Blog</a>
      </div>
      <a href="${APP_STORE_URL}" class="nav-cta" rel="nofollow">Get the app</a>
    </div>
  </nav>

  <main>
    <article class="container">
      <a href="/blog" class="back-link">← Back to Blog</a>
      <header>
        <h1 class="post-title">${escapeHtml(post.title)}</h1>
        <div class="post-meta">
          <span>By ${escapeHtml(post.author)}</span>
          <span><time datetime="${publishedIso}">${formatDate(post.published_at)}</time></span>
          ${post.last_reviewed && post.last_reviewed !== post.published_at
            ? `<span>Updated ${formatDate(post.last_reviewed)}</span>` : ''}
          <span>${post.reading_time} min read</span>
        </div>
        ${post.featured_image
          ? `<figure class="featured-img"><img src="${absoluteImage(post.featured_image)}" alt="${escapeHtml(post.featured_image_alt || post.title)}" loading="eager" fetchpriority="high"></figure>`
          : ''}
      </header>

      ${takeaways}

      <div class="prose">${contentHtml}</div>

      ${faqBlock}

      <aside class="cta-card">
        <h3>Ready to stop typing invoices?</h3>
        <p>SMASH turns your voice into professional invoices and quotes in under 60 seconds. Built for tradies.</p>
        <a href="${APP_STORE_URL}" class="cta-btn" rel="nofollow">Download SMASH Invoices</a>
      </aside>

      ${authorBlock}
    </article>
  </main>

  <footer>
    <div>
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      <a href="/pricing">Pricing</a>
      <a href="/features">Features</a>
      <a href="/voice-invoicing">Voice invoicing</a>
      <a href="/tradie-hourly-rates">Hourly rates</a>
      <a href="/materials-pricing">Materials pricing</a>
      <a href="/customer-approval">Customer approval</a>
      <a href="/tools">Free tools</a>
      <a href="/integrations">Integrations</a>
      <a href="/faq">FAQ</a>
      <a href="/sitemap">Sitemap</a>
      <a href="/privacy">Privacy</a>
      <a href="/terms">Terms</a>
    </div>
    <div style="margin-top:14px;">
      Live in Australia · Waitlists open for
      <a href="/nz">NZ</a>,
      <a href="/uk">UK</a>,
      <a href="/us">US</a> and
      <a href="/ca">Canada</a>
    </div>
    <div style="margin-top:14px;">© ${new Date().getFullYear()} SMASH Invoices · smashinvoices.com</div>
  </footer>
</body>
</html>`;
}

async function prerenderBlogPosts() {
  console.log('Fetching blog posts from Supabase...');

  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true);

  if (error) {
    console.error('Error fetching posts:', error);
    process.exit(1);
  }

  if (!posts || posts.length === 0) {
    console.log('No published posts found.');
    return;
  }

  console.log(`Found ${posts.length} published posts.`);

  const publicPath = path.join(process.cwd(), 'public');
  const blogPath = path.join(publicPath, 'blog');
  fs.mkdirSync(blogPath, { recursive: true });

  const distPath = path.join(process.cwd(), 'dist');
  const distBlogPath = path.join(distPath, 'blog');
  const writeDist = fs.existsSync(distPath);
  if (writeDist) fs.mkdirSync(distBlogPath, { recursive: true });

  for (const post of posts) {
    const html = renderPost(post as BlogPost);
    const postDir = path.join(blogPath, post.slug);
    fs.mkdirSync(postDir, { recursive: true });
    fs.writeFileSync(path.join(postDir, 'index.html'), html);

    if (writeDist) {
      const distPostDir = path.join(distBlogPath, post.slug);
      fs.mkdirSync(distPostDir, { recursive: true });
      fs.writeFileSync(path.join(distPostDir, 'index.html'), html);
    }
    console.log(`✓ Generated: /blog/${post.slug}/index.html`);
  }

  console.log('');
  console.log(`✅ Pre-rendered ${posts.length} blog posts to public/blog/`);
  if (writeDist) console.log('   Also copied to dist/blog/ for local preview.');
}

prerenderBlogPosts();
