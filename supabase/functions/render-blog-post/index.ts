import { createClient } from 'jsr:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

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

function generateBlogPostHTML(post: BlogPost): string {
  const articleUrl = `https://smashinvoices.com/blog/${post.slug}`;
  const publishedDate = new Date(post.published_at).toISOString();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${post.meta_title || post.title + ' | SMASH Blog'}</title>
  <meta name="description" content="${post.meta_description || post.excerpt}">
  <meta name="keywords" content="${[post.primary_keyword, ...post.secondary_keywords].join(', ')}">
  <link rel="canonical" href="${articleUrl}">

  <meta property="og:type" content="article">
  <meta property="og:title" content="${post.meta_title || post.title}">
  <meta property="og:description" content="${post.meta_description || post.excerpt}">
  <meta property="og:url" content="${articleUrl}">
  <meta property="og:image" content="${post.featured_image}">
  <meta property="article:published_time" content="${publishedDate}">
  <meta property="article:author" content="${post.author}">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${post.meta_title || post.title}">
  <meta name="twitter:description" content="${post.meta_description || post.excerpt}">
  <meta name="twitter:image" content="${post.featured_image}">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${post.title}",
    "description": "${post.excerpt}",
    "image": "${post.featured_image}",
    "datePublished": "${publishedDate}",
    "author": {
      "@type": "Person",
      "name": "${post.author}"
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
</head>
<body>
  <article>
    <header>
      <h1>${post.title}</h1>
      <div class="meta">
        <span>By ${post.author}</span> •
        <time datetime="${publishedDate}">${new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time> •
        <span>${post.reading_time} min read</span>
      </div>
      ${post.featured_image ? `<img src="${post.featured_image}" alt="${post.featured_image_alt || post.title}">` : ''}
    </header>
    <div class="content">
      ${post.content.split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('')}
    </div>
  </article>

  <script>
    // Redirect browsers to the React app after rendering for crawlers
    if (!/bot|crawler|spider|crawling/i.test(navigator.userAgent)) {
      window.location.href = '${articleUrl}';
    }
  </script>
</body>
</html>`;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get('slug');

    if (!slug) {
      return new Response(JSON.stringify({ error: 'Slug parameter is required' }), {
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { data: post, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle();

    if (error) {
      console.error('Database error:', error);
      return new Response(JSON.stringify({ error: 'Database error' }), {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });
    }

    if (!post) {
      return new Response(JSON.stringify({ error: 'Post not found' }), {
        status: 404,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      });
    }

    const html = generateBlogPostHTML(post as BlogPost);

    return new Response(html, {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Function error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  }
});
