import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { SEO } from '../components/seo';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

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
        title="Voice to Invoice Blog | SMASH - Quick Invoice Generation Tips"
        description="Learn how to generate invoices quickly with voice to invoice technology. Tips for tradies on voice to quote software, fast invoicing, and getting paid faster."
        keywords="voice to invoice, voice to quote, invoice generation tips, quick invoicing software, tradie invoice tips, voice powered billing, fast quote generation"
        ogUrl="https://smashinvoices.com/blog"
        canonical="https://smashinvoices.com/blog"
      />

      <div className="min-h-screen bg-[#0A0A0A]">
        <nav className="bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
            <Link to="/" className="text-xl font-black tracking-tight text-white">
              SMASH<span className="text-accent text-3xl leading-none align-baseline">.</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                to="/founder"
                className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
              >
                Founder
              </Link>
              <Link
                to="/#signup-form"
                className="px-6 py-2.5 rounded-full bg-accent text-accentText font-black text-sm uppercase tracking-wide hover:brightness-95 transition-all"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <header className="mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
              Insights, tips, and stories about mobile invoicing, billing on the go, and productivity
              for contractors and small businesses.
            </p>
          </header>

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

                    <h2 className="text-2xl font-black text-white mb-3 leading-tight group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-white/70 leading-relaxed mb-4 line-clamp-3">
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
          )}
        </div>

        <footer className="bg-[#0D0D0D] border-t border-white/10 mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
              <div className="md:col-span-2">
                <div className="text-2xl font-black tracking-tight mb-4">
                  SMASH<span className="text-accent text-4xl leading-none align-baseline">.</span>
                </div>
                <p className="text-white/50 text-base leading-relaxed max-w-md">
                  Voice powered invoice and quote software for high volume work.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-black uppercase tracking-wider mb-5 text-white/50">Company</h3>
                <ul className="space-y-3">
                  <li><Link to="/founder" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Meet the Founder</Link></li>
                  <li><Link to="/blog" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Blog</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-black uppercase tracking-wider mb-5 text-white/50">Legal</h3>
                <ul className="space-y-3">
                  <li><Link to="/privacy" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Privacy Policy</Link></li>
                  <li><a href="#" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Terms of Service</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-10 border-t border-white/10">
              <nav className="mb-6">
                <ul className="flex flex-wrap gap-6 justify-center md:justify-start">
                  <li><Link to="/" className="text-sm text-white/50 hover:text-white transition-colors font-semibold">Home</Link></li>
                  <li><Link to="/blog" className="text-sm text-white/50 hover:text-white transition-colors font-semibold">Blog</Link></li>
                  <li><Link to="/founder" className="text-sm text-white/50 hover:text-white transition-colors font-semibold">Meet the Founder</Link></li>
                  <li><Link to="/privacy" className="text-sm text-white/50 hover:text-white transition-colors font-semibold">Privacy</Link></li>
                  <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors font-semibold">Terms</a></li>
                </ul>
              </nav>

              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-3">
                <p className="text-sm text-white/40 font-medium">
                  © 2024 SMASH<span className="text-accent text-xl leading-none align-baseline">.</span> Made for high volume work.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
