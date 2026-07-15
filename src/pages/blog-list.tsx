import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { SEO } from '../components/seo';
import { StructuredData, createBreadcrumbSchema } from '../components/structured-data';
import { Footer } from '../components/footer';
import { Calendar, Clock, ArrowRight, Star } from 'lucide-react';
import { AnimateIn } from '../components/animate-in';
import { Nav } from '../components/nav';
import { hreflangAlternates } from '../data/country-data';
import { MarketingPhotoHero } from '../components/marketing/MarketingPhotoHero';
import { DualProductCtas } from '../components/marketing/DualProductCtas';
import { iosLanding } from '../components/ios-product-landing/ios-landing-tokens';
import {
  absoluteBlogImageUrl,
  BLOG_DEFAULT_OG_URL,
  resolveBlogFeaturedImageAlt,
  resolveBlogFeaturedImagePath,
} from '../data/blog-seo-assets';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

const VOICE_CLUSTER = [
  { slug: 'first-quote-wins-instant-quote-on-site', label: 'First quote wins — instant quote on site' },
  { slug: 'what-is-voice-to-invoice', label: 'What is voice to invoice?' },
  { slug: 'the-60-second-invoice-voice-to-invoice', label: 'Voice to invoice workflow' },
  { slug: 'fastest-way-to-send-invoice-2026', label: 'Fastest way to send an invoice (demo)' },
  { slug: 'how-long-to-send-invoice-after-job-australia', label: 'How long to wait after a job' },
  { slug: 'invoice-without-typing', label: 'Invoice without typing' },
  { slug: 'gmail-email-to-invoice-20-seconds', label: 'Gmail email to invoice in 20 seconds' },
];

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
        title="Send Invoices Faster — Blog | SMASH"
        description="How to send an invoice before you leave the job — voice, Gmail, and speed. Problem-first guides for anyone who quotes and invoices on the go."
        keywords="send invoice after job, voice to invoice, fastest way to invoice, invoice without typing, email to invoice, gmail invoice"
        ogTitle="Send Invoices Faster — SMASH Blog"
        ogDescription="How to send an invoice before you leave the job. Voice, Gmail, speed — problem-first guides."
        ogImage={BLOG_DEFAULT_OG_URL}
        ogUrl="https://smashinvoices.com/blog"
        twitterTitle="Send Invoices Faster — SMASH Blog"
        twitterDescription="Send the invoice before you leave the job — guides for voice and Gmail."
        canonical="https://smashinvoices.com/blog"
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com' },
        { name: 'Blog', url: 'https://smashinvoices.com/blog' },
      ])} />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "SMASH Blog — Send invoices faster",
        "description": "Problem-first guides on sending invoices fast — voice and Gmail.",
        "url": "https://smashinvoices.com/blog",
        "inLanguage": "en-AU",
        "publisher": {
          "@type": "Organization",
          "name": "SMASH Invoices",
          "url": "https://smashinvoices.com"
        }
      }} />

      <div className="min-h-screen bg-brand">
        <Nav />

        <MarketingPhotoHero tintDirection="center" contentClassName="py-14 md:py-20">
          <AnimateIn direction="up">
            <p className={`${iosLanding.eyebrow} mb-4`}>SMASH Blog</p>
            <h1 className={`${iosLanding.heroHeadline} mb-5 max-w-3xl`}>
              <span className="block text-white">Send invoices</span>
              <span className="block text-accent">faster.</span>
            </h1>
            <p className={`${iosLanding.subline} mb-8 !max-w-2xl`}>
              Problem → solution guides: send the invoice before you leave the job. Voice on iPhone, email in Gmail.
            </p>
            <DualProductCtas />
          </AnimateIn>
        </MarketingPhotoHero>

        <section className="border-b border-white/10 bg-white/[0.03]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-3">Start here</p>
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-white mb-4">Send the invoice before you leave the job</h2>
            <p className="text-slate-400 max-w-2xl mb-6">Voice on iPhone, email in Gmail — same verify-and-send flow.</p>
            <div className="flex flex-wrap gap-3 mb-4">
              <Link to="/voice-invoicing" className="inline-flex items-center gap-2 rounded-full bg-accent text-brand px-5 py-2.5 text-sm font-bold">Voice invoicing →</Link>
              <Link to="/chrome-extension" className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-5 py-2.5 text-sm font-semibold hover:border-accent">Gmail extension →</Link>
              <a href="https://www.youtube.com/@smashinvoices" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-5 py-2.5 text-sm font-semibold hover:border-accent">YouTube demos</a>
            </div>
            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {VOICE_CLUSTER.map((item) => (
                <li key={item.slug}>
                  <Link to={`/blog/${item.slug}`} className="text-accent text-sm font-semibold underline hover:no-underline">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <AnimateIn direction="up">
            <header className="mb-12">
              <h2 className={`${iosLanding.sectionHeadline} mb-4`} style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
                <span className="block text-white">Latest posts</span>
              </h2>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <AnimateIn key={post.id} direction="up" delay={Math.min(index * 60, 300)}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-accent/50 block h-full"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-white/5">
                    <img
                      src={absoluteBlogImageUrl(resolveBlogFeaturedImagePath(post.featured_image))}
                      alt={resolveBlogFeaturedImageAlt(post.featured_image_alt, {
                        title: post.title,
                        primaryKeyword: null,
                      })}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

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
                </AnimateIn>
              ))}
            </div>
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
                Start Free on iPhone
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
