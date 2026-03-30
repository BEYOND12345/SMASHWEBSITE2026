import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";
import { supabase } from '../lib/supabase';
import { SEO } from '../components/seo';
import { StructuredData } from '../components/structured-data';
import { Footer } from '../components/footer';
import { Calendar, Clock, ArrowRight, Star } from 'lucide-react';
import { AnimateIn } from '../components/animate-in';
import { Nav } from '../components/nav';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  featured_image_alt: string;
  author: string;
  published_at: string;
  reading_time: number;
}

export function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, featured_image, featured_image_alt, author, published_at, reading_time')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <>
      <SEO
        title="Voice to Invoice Blog | SMASH - Invoicing Tips for Service Businesses"
        description="Tips and insights on voice to invoice technology, getting paid faster, and invoicing for service businesses in Australia."
        keywords="voice to invoice, voice to quote, invoice generation tips, quick invoicing software, service business invoice tips, fast quote generation"
        ogTitle="SMASH Blog — Voice to Invoice Tips"
        ogDescription="Tips and insights on voice to invoice technology, getting paid faster, and invoicing for service businesses."
        ogImage="https://smashinvoices.com/hero_image.png"
        ogUrl="https://smashinvoices.com/blog"
        twitterTitle="SMASH Blog — Voice to Invoice Tips"
        twitterDescription="Tips on voice to invoice technology, getting paid faster, and invoicing for service businesses."
        canonical="https://smashinvoices.com/blog"
      />

      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "SMASH Blog — Voice to Invoice Tips",
        "description": "Tips and insights on voice to invoice technology, getting paid faster, and invoicing for service businesses.",
        "url": "https://smashinvoices.com/blog",
        "inLanguage": "en-AU",
        "publisher": {
          "@type": "Organization",
          "name": "SMASH Invoices",
          "url": "https://smashinvoices.com"
        }
      }} />

      <div className="min-h-screen bg-[#0A0A0A]">
        <Nav />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <AnimateIn direction="up">
            <header className="mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.88]">
                Blog
              </h1>
              <p className="font-body text-xl text-white/70 max-w-3xl leading-[1.5]">
                Insights, tips, and stories about mobile invoicing, billing on the go, and productivity
                for contractors and small businesses.
              </p>
            </header>
          </AnimateIn>

          {loading ? (
            <div className="text-center text-white/60 py-20">
              <p>Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center text-white/60 py-20">
              <p className="text-xl mb-4">No posts yet.</p>
              <p>Check back soon for insights on mobile invoicing and productivity!</p>
            </div>
          ) : (
            <AnimateIn direction="up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-accent/50"
                >
                  {post.featured_image && (
                    <div className="aspect-[16/9] overflow-hidden bg-white/5">
                      <img
                        src={post.featured_image}
                        alt={post.featured_image_alt || post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-white/50 text-sm mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <time dateTime={post.published_at}>
                          {new Date(post.published_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        <span>{post.reading_time} min</span>
                      </div>
                    </div>

                    <h2 className="text-2xl font-black text-white mb-3 leading-[0.88] group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="font-body text-white/70 leading-[1.5] mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}

                    <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            </AnimateIn>
          )}
        </div>

        {/* CTA BANNER */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
          <div className="bg-accent rounded-[32px] px-8 md:px-12 py-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-brand font-black text-xs uppercase tracking-widest mb-2">Done reading?</p>
              <h2 className="text-2xl sm:text-3xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-1">
                See it in action.
              </h2>
              <p className="font-body text-brand/65 font-medium text-sm">Talk for 30 seconds. See your first invoice.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[32px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Start Free
              </a>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-brand/50 fill-brand/50" />
                  ))}
                </div>
                <span className="font-body text-xs font-semibold text-brand/55">4.9 App Store</span>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
