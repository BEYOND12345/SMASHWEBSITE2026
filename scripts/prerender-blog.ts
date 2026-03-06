import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  featured_image_alt: string;
  primary_keyword: string;
  secondary_keywords: string[];
  meta_title: string | null;
  meta_description: string;
  author: string;
  published_at: string;
  reading_time: number;
}

function generateBlogPostHTML(post: BlogPost, appScript: string, appCSS: string): string {
  const articleUrl = `https://smashinvoices.com/blog/${post.slug}`;
  const publishedDate = new Date(post.published_at).toISOString();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(post.meta_title || post.title + ' | SMASH Blog')}</title>
  <meta name="description" content="${escapeHtml(post.meta_description || post.excerpt)}">
  <meta name="keywords" content="${escapeHtml([post.primary_keyword, ...post.secondary_keywords].join(', '))}">
  <link rel="canonical" href="${articleUrl}">

  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(post.meta_title || post.title)}">
  <meta property="og:description" content="${escapeHtml(post.meta_description || post.excerpt)}">
  <meta property="og:url" content="${articleUrl}">
  <meta property="og:image" content="${post.featured_image}">
  <meta property="article:published_time" content="${publishedDate}">
  <meta property="article:author" content="${escapeHtml(post.author)}">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(post.meta_title || post.title)}">
  <meta name="twitter:description" content="${escapeHtml(post.meta_description || post.excerpt)}">
  <meta name="twitter:image" content="${post.featured_image}">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${escapeJson(post.title)}",
    "description": "${escapeJson(post.excerpt)}",
    "image": "${post.featured_image}",
    "datePublished": "${publishedDate}",
    "author": {
      "@type": "Person",
      "name": "${escapeJson(post.author)}"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SMASH",
      "logo": {
        "@type": "ImageObject",
        "url": "https://smashinvoices.com/favicon.svg"
      }
    }
  }
  </script>

  ${appCSS}

  <noscript>
    <style>
      body {
        font-family: system-ui, -apple-system, sans-serif;
        line-height: 1.6;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background: #0A0A0A;
        color: #fff;
      }
      h1 {
        font-size: 2.5rem;
        font-weight: 900;
        margin-bottom: 1rem;
        line-height: 1.2;
      }
      .meta {
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 2rem;
        font-size: 0.9rem;
      }
      img {
        max-width: 100%;
        height: auto;
        border-radius: 12px;
      }
      .content {
        font-size: 1.125rem;
        line-height: 1.75;
      }
      a {
        color: #D9F99D;
        text-decoration: underline;
      }
    </style>
  </noscript>
</head>
<body>
  <div id="root">
    <noscript>
      <article>
        <header>
          <h1>${escapeHtml(post.title)}</h1>
          <div class="meta">
            <span>By ${escapeHtml(post.author)}</span> •
            <time datetime="${publishedDate}">${new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time> •
            <span>${post.reading_time} min read</span>
          </div>
          ${post.featured_image ? `<img src="${post.featured_image}" alt="${escapeHtml(post.featured_image_alt || post.title)}">` : ''}
        </header>
        <div class="content">
          ${escapeHtml(post.content).split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('')}
        </div>
      </article>
    </noscript>
  </div>
  ${appScript}
</body>
</html>`;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function escapeJson(text: string): string {
  return text.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
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

  const distPath = path.join(process.cwd(), 'dist');
  const blogPath = path.join(distPath, 'blog');

  if (!fs.existsSync(blogPath)) {
    fs.mkdirSync(blogPath, { recursive: true });
  }

  const indexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

  const scriptMatch = indexHtml.match(/<script[^>]*src="([^"]+)"[^>]*><\/script>/);
  const cssMatch = indexHtml.match(/<link[^>]*href="([^"]+\.css)"[^>]*>/);

  const appScript = scriptMatch ? scriptMatch[0] : '';
  const appCSS = cssMatch ? cssMatch[0] : '';

  for (const post of posts) {
    const postPath = path.join(blogPath, post.slug);
    if (!fs.existsSync(postPath)) {
      fs.mkdirSync(postPath, { recursive: true });
    }

    const html = generateBlogPostHTML(post as BlogPost, appScript, appCSS);
    fs.writeFileSync(path.join(postPath, 'index.html'), html);
    console.log(`✓ Generated: /blog/${post.slug}/index.html`);
  }

  console.log('\n✅ Pre-rendering complete!');
}

prerenderBlogPosts();
