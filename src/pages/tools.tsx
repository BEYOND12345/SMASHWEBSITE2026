import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { hreflangAlternates } from '../data/country-data';
import { StructuredData, createBreadcrumbSchema } from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { VoiceConversionCTA } from '../components/voice-conversion-cta';
import { AnimateIn } from '../components/animate-in';
import { Star, ArrowRight, Calculator, FileText, ClipboardList, TrendingUp, Download, DollarSign, AlertCircle } from 'lucide-react';
import { RelatedPosts } from '../components/related-posts';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

const tools = [
  {
    icon: Calculator,
    name: 'GST Calculator',
    desc: 'Add or remove 10% GST instantly. Enter any price, get ex-GST, GST amount, and inc-GST total.',
    href: '/gst-calculator',
  },
  {
    icon: FileText,
    name: 'Invoice Generator',
    desc: 'Build a real ATO-compliant tax invoice in your browser. No login, no download.',
    href: '/invoice-generator',
  },
  {
    icon: ClipboardList,
    name: 'Quote Generator',
    desc: 'Build a professional GST quote right now. Add line items, see live preview, send it.',
    href: '/quote-generator',
  },
  {
    icon: TrendingUp,
    name: 'Profit Calculator',
    desc: 'See exactly what to charge for any job. Materials + labour + overhead + margin, calculated instantly.',
    href: '/profit-calculator',
  },
  {
    icon: Download,
    name: 'Invoice Template',
    desc: 'Download a free ATO-compliant invoice template. Works in Word, Excel, or PDF.',
    href: '/invoice-template',
  },
  {
    icon: DollarSign,
    name: 'Hourly Rate Calculator',
    desc: 'Work out your minimum and recommended hourly rate based on your actual income goal and costs.',
    href: '/hourly-rate-calculator',
  },
  {
    icon: AlertCircle,
    name: 'Late Payment Calculator',
    desc: 'Calculate exactly how many days overdue and how much interest has accrued on an unpaid invoice.',
    href: '/late-payment-calculator',
  },
];

export function Tools() {
  return (
    <>
      <SEO
        title="Free Tradie Tools & Calculators Australia | SMASH"
        description="Free tools and calculators for Australian tradies. GST calculator, invoice generator, quote builder, hourly rate calculator, profit calculator and more. No signup required."
        keywords="tradie tools australia, free business calculators tradies, gst calculator, invoice generator australia, hourly rate calculator tradies"
        canonical="https://smashinvoices.com/tools"
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com' },
        { name: 'Tools', url: 'https://smashinvoices.com/tools' },
      ])} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-brand pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-5">Free tools</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
              Every calculator<br />
              <span className="text-accent">a tradie needs.</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/65 font-medium leading-[1.5] max-w-2xl mb-8">
              No signup. No app download. Free to use right here. Built for Australian tradies, contractors, and small businesses.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-accent fill-accent" />)}
                </div>
                <span className="font-body text-xs font-semibold text-white/70">4.9 App Store</span>
              </div>
              <span className="font-body text-xs text-white/40 font-medium">7 tools · Free to use · No account required</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── TOOLS GRID ───────────────────────────────────────── */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <AnimateIn key={i} direction="up" delay={i * 60}>
                    <Link
                      to={tool.href}
                      className="flex flex-col h-full bg-white rounded-[20px] border-2 border-border p-6 hover:border-accent/50 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-[12px] bg-surface flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                        <Icon size={20} className="text-brand/60 group-hover:text-brand transition-colors" strokeWidth={2} />
                      </div>
                      <h2 className="font-black text-base uppercase tracking-tighter text-brand leading-[0.95] mb-2">{tool.name}</h2>
                      <p className="font-body text-sm font-medium text-brand/60 leading-[1.5] flex-1 mb-4">{tool.desc}</p>
                      <span className="font-black text-xs uppercase tracking-widest text-accent group-hover:text-brand transition-colors">
                        Open Calculator →
                      </span>
                    </Link>
                  </AnimateIn>
                );
              })}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="bg-surface pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="bg-brand rounded-[32px] p-10 md:p-14 text-center">
              <p className="font-black text-xs uppercase tracking-widest text-white/30 mb-4">SMASH Invoices</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-4">
                All of this — in 60 seconds by voice.
              </h2>
              <p className="font-body text-white/65 font-medium text-lg leading-[1.5] mb-8 max-w-2xl mx-auto">
                SMASH calculates GST, applies your rates, and sends a professional invoice before you leave the job site. Free to start.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-105 transition-all"
                >
                  Download Free
                  <ArrowRight size={15} strokeWidth={2.5} />
                </a>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-[32px] border-2 border-white/20 text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  See how it works
                </Link>
              </div>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={11} className="text-accent fill-accent" />)}
                  <span className="font-body text-xs font-semibold text-white/50 ml-1">4.9 App Store</span>
                </div>
                <span className="text-white/20 text-sm">·</span>
                <span className="font-body text-xs font-medium text-white/35">No credit card required</span>
                <span className="text-white/20 text-sm">·</span>
                <span className="font-body text-xs font-medium text-white/35">Cancel anytime</span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── RELATED READING ──────────────────────────────────── */}
      <section className="bg-brand py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="font-black text-xs uppercase tracking-widest text-white/30 mb-6">Related reading</p>
          <RelatedPosts
            currentPostId=""
            primaryKeyword="invoice"
            secondaryKeywords={['tradie tools', 'gst', 'quote', 'get paid']}
            limit={3}
          />
        </div>
      </section>

      <VoiceConversionCTA
        outputLabel="all of this"
        headline="Every tool, automated. From one voice note."
        sub="Use the free tools as long as you like. When you are ready, SMASH bundles invoices, quotes, tax and payment into a single voice-powered workflow."
      />

      <Footer />
    </>
  );
}
