import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Footer } from '../components/footer';
import { PhoneMockup } from '../components/phone-mockup';
import { Check, ChevronDown, Star } from 'lucide-react';
import { useState } from 'react';
import { ListeningScreen } from '../components/listening-screen';
import { GeneratingScreen } from '../components/generating-screen';
import { ScannerScreen } from '../components/scanner-screen';
import { AnalyzerScreen } from '../components/analyzer-screen';
import type { SegmentData } from '../data/segment-data';
import { Nav } from '../components/nav';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

// ── FAQ accordion ─────────────────────────────────────────────────────────────
function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button onClick={onClick} className="w-full flex items-center justify-between py-5 text-left gap-6">
        <span className="text-base font-black text-brand uppercase tracking-tighter leading-[0.95]">{q}</span>
        <ChevronDown size={18} className={`shrink-0 text-brand/40 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="font-body text-base text-brand/60 font-medium leading-[1.5] pb-6">{a}</p>}
    </div>
  );
}

// ── Main SegmentPage component ────────────────────────────────────────────────
export function SegmentPage({ data }: { data: SegmentData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <>
      <SEO
        title={data.seo.title}
        description={data.seo.description}
        keywords={data.seo.keywords}
        ogTitle={data.seo.ogTitle}
        ogDescription={data.seo.ogDescription}
        canonical={`https://smashinvoices.com/for-${data.slug}`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── NAV ────────────────────────────────────────────────────────────── */}
      <Nav />

      {/* ── HERO — text left, dual phones right ────────────────────────────── */}
      <section className="relative bg-brand overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/hero_image.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/98 via-gray-900/90 to-gray-900/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center min-h-[80vh] py-20 lg:py-0">

            {/* Left — copy */}
            <div className="py-4 lg:py-24">
              <p className="text-accent font-black text-xs uppercase tracking-widest mb-5">{data.tradeLabel}</p>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
                {data.heroH1.map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </h1>
              <p className="font-body text-lg text-white/75 font-medium leading-[1.5] mb-10 max-w-md">
                {data.heroSub}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-[32px] bg-accent text-brand font-black text-base uppercase tracking-widest hover:brightness-95 transition-all shadow-glow"
                >
                  Start Free
                </a>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-[32px] border-2 border-white/20 text-white font-bold text-base uppercase tracking-wide hover:bg-white/10 transition-all"
                >
                  See How It Works
                </Link>
              </div>
              {/* Trust row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 w-fit">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <span className="font-body text-xs font-semibold text-white/60">4.9 App Store</span>
                </div>
                <p className="font-body text-sm text-white/35 font-medium">No card needed · Cancel anytime</p>
              </div>
            </div>

            {/* Right — phones */}
            <div className="flex items-end justify-center lg:justify-end overflow-visible pb-0 lg:pb-0 pt-0 lg:pt-16">
              <div className="relative flex items-end justify-center scale-[0.6] sm:scale-[0.75] lg:scale-[0.85] xl:scale-100 origin-bottom">
                <div className="relative z-0 -rotate-6 -mr-8">
                  <PhoneMockup>
                    <GeneratingScreen />
                  </PhoneMockup>
                </div>
                <div className="relative z-10 -ml-8">
                  <PhoneMockup>
                    <ListeningScreen />
                  </PhoneMockup>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SPEED BAR ──────────────────────────────────────────────────────── */}
      <section className="bg-accent py-10 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand leading-[0.88] uppercase tracking-tighter">
            4X faster than typing.
          </h2>
          <p className="font-body text-lg text-brand/70 font-semibold mt-4 max-w-xl mx-auto leading-[1.5]">
            Stop losing 20–30 minutes to every invoice. Speak for 30 seconds. Done.
          </p>
        </div>
      </section>

      {/* ── AI ANSWER ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="border-l-4 border-accent pl-8 py-2">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-4">{data.answerQuestion}</p>
            <p className="font-body text-xl md:text-2xl font-bold text-brand leading-[1.5]">{data.answerText}</p>
          </div>
        </div>
      </section>

      {/* ── PROBLEMS ───────────────────────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4 text-center">
            {data.problemTitle}
          </h2>
          <p className="text-brand/50 font-medium text-center mb-14 text-base">
            Sound familiar? You're not alone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {data.problems.map((item, i) => (
              <div key={i} className="bg-white rounded-[24px] border-2 border-border p-7">
                <p className="text-brand font-black text-base uppercase tracking-tighter leading-[0.88] mb-3">{item.problem}</p>
                <p className="font-body text-brand/55 font-medium text-sm leading-[1.5]">{item.reality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT SHOTS — text left, animated phones right ───────────────── */}
      <section className="bg-brand py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left — copy */}
            <div>
              <p className="text-accent font-black text-xs uppercase tracking-widest mb-5">How it works</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
                Talk. SMASH<br />does the rest.
              </h2>
              <p className="font-body text-white/65 font-medium text-base leading-[1.5] mb-8 max-w-sm">
                Speak the job. SMASH transcribes, extracts the details, matches your pricing catalog, and sends a GST-compliant invoice — all in under 60 seconds.
              </p>
              <div className="space-y-4">
                {[
                  'Voice → invoice in under 60 seconds',
                  'Matches your pricing catalog automatically',
                  'Calculates GST and line items',
                  'Sends a professional PDF instantly',
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Check size={11} className="text-accent" strokeWidth={3.5} />
                    </div>
                    <p className="text-white font-semibold text-sm">{s}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — phones */}
            <div className="flex items-center justify-center lg:justify-end overflow-visible py-10 lg:py-0">
              <div className="relative flex items-end justify-center scale-[0.6] sm:scale-[0.75] lg:scale-[0.85] xl:scale-100 origin-bottom">
                <div className="relative z-0 -rotate-6 -mr-8">
                  <PhoneMockup>
                    <ScannerScreen />
                  </PhoneMockup>
                </div>
                <div className="relative z-10 -ml-8">
                  <PhoneMockup>
                    <AnalyzerScreen />
                  </PhoneMockup>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── VOICE EXAMPLES ─────────────────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-accent font-black text-xs uppercase tracking-widest mb-5 text-center">In practice</p>
          <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4 text-center">
            Just describe the job
          </h2>
          <p className="font-body text-brand/50 font-medium text-center leading-[1.5] mb-14 max-w-xl mx-auto">
            SMASH turns your voice into a complete, priced invoice. Here's what that looks like for {data.name.toLowerCase()}.
          </p>
          <div className="space-y-4">
            {data.voiceExamples.map((ex, i) => (
              <div key={i} className="bg-white rounded-[24px] border-2 border-border overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-7 md:p-8">
                    <p className="text-xs font-black uppercase tracking-widest text-brand/35 mb-4">You say</p>
                    <p className="text-brand/80 font-medium text-base leading-[1.55] italic">"{ex.voice}"</p>
                  </div>
                  <div className="bg-surface md:bg-white border-t-2 md:border-t-0 md:border-l-2 border-border p-7 md:p-8">
                    <p className="text-xs font-black uppercase tracking-widest text-accent mb-4">SMASH invoices</p>
                    <p className="text-brand font-black text-base leading-[1.45]">{ex.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-accent font-black text-xs uppercase tracking-widest mb-5 text-center">Built for the trade</p>
          <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-16 text-center">
            Built for how {data.name.toLowerCase()} run
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data.features.map((f) => (
              <div key={f.title} className="bg-surface border-2 border-border rounded-[24px] p-8">
                <h3 className="text-lg font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">{f.title}</h3>
                <p className="font-body text-brand/55 font-medium text-sm leading-[1.55]">{f.body}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link to="/features" className="text-sm font-black text-brand/40 uppercase tracking-widest hover:text-accent transition-colors">
              See all features →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-accent font-black text-xs uppercase tracking-widest mb-5 text-center">Real results</p>
          <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-16 text-center">
            What people are saying
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                quote: "I used to spend Sunday nights catching up on invoices. Now I send them from the job site before I've packed up. Game changer.",
                name: "Marcus T.",
                trade: "Plumber, Brisbane",
              },
              {
                quote: "My accountant asked why I was getting paid so much faster. I just told her I got a better invoicing app. She's still confused.",
                name: "Sarah K.",
                trade: "Cleaning Business, Sydney",
              },
              {
                quote: "Tried five other apps. None of them let me talk and get an invoice in under a minute. This one does. That's it, that's the review.",
                name: "Dave L.",
                trade: "Electrician, Melbourne",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-[24px] border-2 border-border p-8 flex flex-col gap-5">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="font-body text-brand/75 font-medium text-base leading-[1.55] flex-1">"{t.quote}"</p>
                <div>
                  <p className="text-brand font-black text-sm uppercase tracking-tight leading-[0.88]">{t.name}</p>
                  <p className="text-brand/40 font-medium text-xs mt-1">{t.trade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FROM THE BLOG ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88]">From the blog</h2>
            <Link to="/blog" className="text-sm font-black text-brand/40 uppercase tracking-widest hover:text-accent transition-colors">
              All posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {data.blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-surface rounded-[24px] border-2 border-border p-7 hover:border-accent transition-colors group"
              >
                <h3 className="text-base font-black text-brand uppercase tracking-tighter leading-[0.95] mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="font-body text-sm text-brand/50 font-medium leading-[1.5]">{post.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-14 text-center">
            {data.name} invoicing questions
          </h2>
          <div className="bg-white rounded-[32px] border-2 border-border px-6 sm:px-10 py-2">
            {data.faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SEGMENTS ───────────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-xs font-black uppercase tracking-widest text-brand/35 mb-8 text-center">Also works for</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {data.relatedSlugs.map((slug) => (
              <Link
                key={slug}
                to={`/for-${slug}`}
                className="px-5 py-2.5 rounded-[32px] border-2 border-border bg-surface text-brand font-black text-sm uppercase tracking-wide hover:border-accent hover:text-accent transition-all capitalize"
              >
                {slug.replace(/-/g, ' ')}
              </Link>
            ))}
            <Link
              to="/blog"
              className="px-5 py-2.5 rounded-[32px] border-2 border-border bg-surface text-brand/40 font-black text-sm uppercase tracking-wide hover:border-accent hover:text-accent transition-all"
            >
              Read the blog →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="bg-brand py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
            {data.ctaH1.map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h2>
          <p className="font-body text-lg text-white/65 font-medium leading-[1.5] mb-10 max-w-xl mx-auto">
            {data.ctaSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[32px] bg-accent text-brand font-black text-base uppercase tracking-widest hover:brightness-95 transition-all shadow-glow"
            >
              Start Free
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[32px] border-2 border-white/20 text-white font-bold text-base uppercase tracking-wide hover:bg-white/10 transition-all"
            >
              See Pricing
            </Link>
          </div>
          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-6">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-accent fill-accent" />
                ))}
              </div>
              <span className="font-body text-xs font-semibold text-white/50">4.9 App Store</span>
            </div>
            <span className="text-white/20 hidden sm:block">·</span>
            <span className="font-body text-xs font-medium text-white/40">No credit card required</span>
            <span className="text-white/20 hidden sm:block">·</span>
            <span className="font-body text-xs font-medium text-white/40">Cancel anytime</span>
          </div>
          <p className="text-sm text-white/30 font-medium">
            <Link to="/voice-invoicing" className="hover:text-white/60 transition-colors">Voice invoicing</Link>
            {' · '}
            <Link to="/features" className="hover:text-white/60 transition-colors">All features</Link>
            {' · '}
            <Link to="/gst-compliant-invoicing" className="hover:text-white/60 transition-colors">GST invoicing</Link>
            {' · '}
            <Link to="/blog" className="hover:text-white/60 transition-colors">Blog</Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
