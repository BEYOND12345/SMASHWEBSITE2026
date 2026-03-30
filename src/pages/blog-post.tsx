import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { SEO } from '../components/seo';
import { StructuredData, createArticleSchema, createBreadcrumbSchema, createFAQSchema } from '../components/structured-data';
import { RelatedPosts } from '../components/related-posts';
import { Footer } from '../components/footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Calendar, Clock, ArrowLeft, RefreshCw, Star } from 'lucide-react';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";
import { AnimateIn } from '../components/animate-in';
import { Nav } from '../components/nav';

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
  author_bio?: string;
  published_at: string;
  updated_at?: string;
  last_reviewed?: string;
  reading_time: number;
  view_count: number;
  key_takeaways?: string[];
  faq_data?: Array<{ question: string; answer: string }>;
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;

      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) {
        console.error('Error fetching post:', error);
      } else if (data) {
        setPost(data);
        await supabase
          .from('blog_posts')
          .update({ view_count: (data.view_count || 0) + 1 })
          .eq('id', data.id);
      }
      setLoading(false);
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-brand flex items-center justify-center">
        <div className="text-white/60">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-brand flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-accent hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  const articleUrl = `https://smashinvoices.com/blog/${post.slug}`;

  return (
    <>
      <SEO
        title={post.meta_title || `${post.title} | SMASH Blog`}
        description={post.meta_description || post.excerpt}
        keywords={[post.primary_keyword, ...post.secondary_keywords].join(', ')}
        ogTitle={post.meta_title || post.title}
        ogDescription={post.meta_description || post.excerpt}
        ogImage={post.featured_image || "https://smashinvoices.com/hero_image.png"}
        ogUrl={articleUrl}
        ogType="article"
        twitterTitle={post.meta_title || post.title}
        twitterDescription={post.meta_description || post.excerpt}
        twitterImage={post.featured_image || "https://smashinvoices.com/hero_image.png"}
        canonical={articleUrl}
      />

      <StructuredData
        data={createArticleSchema({
          headline: post.title,
          description: post.excerpt,
          datePublished: post.published_at,
          dateModified: post.updated_at || post.last_reviewed || post.published_at,
          author: post.author,
          image: post.featured_image,
          url: articleUrl,
          wordCount: post.content ? post.content.split(/\s+/).length : undefined,
          keywords: [post.primary_keyword, ...post.secondary_keywords].join(', ')
        })}
      />

      <StructuredData
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://smashinvoices.com' },
          { name: 'Blog', url: 'https://smashinvoices.com/blog' },
          { name: post.title, url: articleUrl }
        ])}
      />

      {post.faq_data && post.faq_data.length > 0 && (
        <StructuredData data={createFAQSchema(post.faq_data)} />
      )}

      <div className="min-h-screen bg-brand">
        <Nav />

        <article className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
          <AnimateIn direction="up">
          <header className="mb-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-[0.88]">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm font-medium mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <time dateTime={post.published_at}>
                  {new Date(post.published_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              {post.last_reviewed && post.last_reviewed !== post.published_at && (
                <div className="flex items-center gap-2">
                  <RefreshCw size={16} />
                  <span>Updated {new Date(post.last_reviewed).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.reading_time} min read</span>
              </div>
              <div>By {post.author}</div>
            </div>

            {post.featured_image && (
              <div className="rounded-2xl overflow-hidden bg-white/5">
                <img
                  src={post.featured_image}
                  alt={post.featured_image_alt || post.title}
                  className="w-full h-auto"
                />
              </div>
            )}
          </header>
          </AnimateIn>

          {post.key_takeaways && post.key_takeaways.length > 0 && (
            <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-2 border-accent/30 rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <span className="text-brand font-black text-xl">✓</span>
                </div>
                <h2 className="text-2xl font-black text-white">TL;DR - Key Takeaways</h2>
              </div>
              <div className="grid gap-3">
                {post.key_takeaways.map((takeaway, index) => (
                  <div key={index} className="flex items-start gap-4 bg-[#0A0A0A]/40 rounded-xl p-4 border border-accent/20">
                    <span className="text-accent font-black text-lg mt-0.5 shrink-0">{index + 1}.</span>
                    <span className="font-body text-white/90 leading-[1.5] font-medium">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-black text-white mt-12 mb-6 tracking-tighter">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <div>
                    <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent my-12"></div>
                    <h2 className="text-3xl font-black text-white mt-8 mb-5 tracking-tighter">
                      {children}
                    </h2>
                  </div>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-bold text-white mt-8 mb-4 tracking-tighter">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="font-body text-lg text-white/80 leading-[1.6] mb-6">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-3 text-white/80 mb-6 ml-1">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 text-white/80 mb-6">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-lg leading-[1.15] flex items-start gap-3">
                    <span className="text-accent font-bold mt-1 shrink-0">•</span>
                    <span className="flex-1">{children}</span>
                  </li>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-accent hover:text-accent/80 font-semibold underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-accent bg-accent/10 rounded-r-xl pl-6 pr-6 py-4 my-8 text-white/90 font-medium">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-accent/20 border border-accent/30 px-2 py-1 rounded text-accent font-mono text-sm font-bold">
                    {children}
                  </code>
                ),
                strong: ({ children }) => {
                  const text = String(children);
                  if (text.startsWith('Result:') || text.includes('$') || text.startsWith('ROI:') || text.startsWith('Total')) {
                    return <strong className="font-black text-accent">{children}</strong>;
                  }
                  return <strong className="font-bold text-white">{children}</strong>;
                },
                em: ({ children }) => (
                  <em className="italic text-white/70">{children}</em>
                ),
                pre: ({ children }) => (
                  <pre className="bg-white/5 p-4 rounded-xl overflow-x-auto mb-6">
                    {children}
                  </pre>
                ),
                table: ({ children }) => (
                  <div className="overflow-x-auto my-8 rounded-xl border border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
                    <table className="w-full border-collapse">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-accent/20 border-b-2 border-accent">{children}</thead>
                ),
                tbody: ({ children }) => (
                  <tbody className="divide-y divide-white/10">{children}</tbody>
                ),
                tr: ({ children }) => (
                  <tr className="hover:bg-white/5 transition-colors">{children}</tr>
                ),
                th: ({ children }) => (
                  <th className="px-6 py-4 text-left text-sm font-black text-white uppercase tracking-wider">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-6 py-4 text-white/90 font-medium">{children}</td>
                ),
                img: ({ src, alt }) => (
                  <div className="my-8 rounded-xl overflow-hidden bg-white/5">
                    <img src={src} alt={alt} className="w-full h-auto" />
                    {alt && (
                      <p className="text-sm text-white/50 text-center py-3 italic">
                        {alt}
                      </p>
                    )}
                  </div>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {post.key_takeaways && post.key_takeaways.length > 0 && (
            <div className="mt-16 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-2 border-accent/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <span className="text-brand font-black text-xl">✓</span>
                </div>
                <h2 className="text-2xl font-black text-white">Key Takeaways</h2>
              </div>
              <div className="grid gap-4">
                {post.key_takeaways.map((takeaway, index) => (
                  <div key={index} className="flex items-start gap-4 bg-[#0A0A0A]/40 rounded-xl p-4 border border-accent/20">
                    <span className="text-accent font-black text-lg mt-0.5 shrink-0">{index + 1}.</span>
                    <span className="font-body text-white/90 leading-[1.5] font-medium">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {post.author_bio && (
            <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-lg font-black text-white mb-3">About the Author</h3>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-black text-accent">{post.author[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">{post.author}</p>
                  <p className="font-body text-white/70 text-sm leading-[1.5]">{post.author_bio}</p>
                </div>
              </div>
            </div>
          )}

          <RelatedPosts
            currentPostId={post.id}
            primaryKeyword={post.primary_keyword}
            secondaryKeywords={post.secondary_keywords}
            limit={3}
          />

          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 md:p-12 border border-accent/20">
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-accent fill-accent" />
                ))}
                <span className="font-body text-xs font-semibold text-white/50 ml-2">4.9 App Store</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tighter leading-[0.88]">
                Ready to invoice in under 60 seconds?
              </h3>
              <p className="font-body text-white/75 text-base sm:text-lg mb-6 leading-[1.5] max-w-lg">
                Stop fighting your software and start getting paid. Talk for 30 seconds — SMASH builds the invoice. Free to start.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all"
                >
                  Start Free
                </a>
                <span className="font-body text-xs font-medium text-white/35">No credit card · Cancel anytime</span>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
