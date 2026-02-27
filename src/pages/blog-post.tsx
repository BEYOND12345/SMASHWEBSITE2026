import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { SEO } from '../components/seo';
import { StructuredData, createArticleSchema, createBreadcrumbSchema, createFAQSchema } from '../components/structured-data';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Calendar, Clock, ArrowLeft, RefreshCw } from 'lucide-react';

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
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-white/60">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center">
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
        ogImage={post.featured_image}
        ogUrl={articleUrl}
        ogType="article"
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
          url: articleUrl
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

      <div className="min-h-screen bg-[#0A0A0A]">
        <nav className="bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link to="/" className="text-xl font-black tracking-tight text-white">
              SMASH<span className="text-accent text-3xl leading-none align-baseline">.</span>
            </Link>
            <Link
              to="/blog"
              className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              All Posts
            </Link>
          </div>
        </nav>

        <article className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
          <header className="mb-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
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

          {post.key_takeaways && post.key_takeaways.length > 0 && (
            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 mb-12">
              <h2 className="text-xl font-black text-white mb-4">Key Takeaways</h2>
              <ul className="space-y-2">
                {post.key_takeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-black text-white mt-12 mb-6 tracking-tight">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-black text-white mt-10 mb-5 tracking-tight">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-bold text-white mt-8 mb-4 tracking-tight">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-lg text-white/80 leading-relaxed mb-6">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside space-y-2 text-white/80 mb-6">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside space-y-2 text-white/80 mb-6">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-lg leading-relaxed">{children}</li>
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
                  <blockquote className="border-l-4 border-accent pl-6 py-2 my-6 italic text-white/70">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-white/10 px-2 py-1 rounded text-accent font-mono text-sm">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-white/5 p-4 rounded-xl overflow-x-auto mb-6">
                    {children}
                  </pre>
                ),
                table: ({ children }) => (
                  <div className="overflow-x-auto my-8">
                    <table className="w-full border-collapse">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-white/10">{children}</thead>
                ),
                tbody: ({ children }) => (
                  <tbody className="divide-y divide-white/10">{children}</tbody>
                ),
                tr: ({ children }) => (
                  <tr className="border-b border-white/10">{children}</tr>
                ),
                th: ({ children }) => (
                  <th className="px-6 py-4 text-left text-sm font-black text-white uppercase tracking-wider">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-6 py-4 text-white/80">{children}</td>
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

          {post.author_bio && (
            <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-lg font-black text-white mb-3">About the Author</h3>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-black text-accent">{post.author[0]}</span>
                </div>
                <div>
                  <p className="font-bold text-white mb-1">{post.author}</p>
                  <p className="text-white/70 text-sm leading-relaxed">{post.author_bio}</p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-black text-white mb-4">
                Ready to Transform Your Invoicing?
              </h3>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                Stop fighting your software and start getting paid. Join the waitlist for SMASH
                and experience invoicing built for how you actually work.
              </p>
              <Link
                to="/#signup-form"
                className="inline-block px-8 py-4 rounded-full bg-accent text-accentText font-black text-base uppercase tracking-wide hover:brightness-95 transition-all"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </article>

        <footer className="bg-[#0D0D0D] border-t border-white/10 mt-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
            <div className="text-center">
              <Link to="/" className="inline-block text-2xl font-black tracking-tight text-white mb-4">
                SMASH<span className="text-accent text-4xl leading-none align-baseline">.</span>
              </Link>
              <p className="text-white/50 text-sm">
                © 2024 SMASH. Made for high volume work.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
