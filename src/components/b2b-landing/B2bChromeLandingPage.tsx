import { useState } from 'react';
import {
  Chrome,
  Mail,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Check,
  Boxes,
  Plug,
  ScanLine,
  Wallet,
  Eye,
  CreditCard,
  RefreshCw,
  FileText,
  Search,
  Mic,
  UserCheck,
  Download,
  FileCheck,
  Globe,
} from 'lucide-react';
import { HeroVideo } from '../gmail-sidebar-mockups';
import { SEO } from '../seo';
import { Nav } from '../nav';
import { Footer } from '../footer';
import { AnimateIn } from '../animate-in';
import {
  StructuredData,
  createBreadcrumbSchema,
  createFAQSchema,
  createVideoSchema,
} from '../structured-data';
import { SchemaMarkup } from '../SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../../data/schema-data';
import { hreflangAlternates } from '../../data/country-data';
import { B2B_CHROME_LANDING } from '../../data/b2b-chrome-landing';

const OG_IMAGE = 'https://smashinvoices.com/hero_image.png';
const c = B2B_CHROME_LANDING;

const DUAL_MODE_ICONS = [Boxes, Plug] as const;
const PAIN_ICONS = [ScanLine, Wallet, Eye, CreditCard, RefreshCw] as const;
const MATRIX_ICONS = [
  FileText,
  Search,
  Mail,
  Mic,
  Boxes,
  UserCheck,
  CreditCard,
  Eye,
  RefreshCw,
  Download,
  FileCheck,
  Globe,
] as const;

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button type="button" onClick={onClick} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="text-base font-black text-brand uppercase tracking-tighter leading-[0.88]">{q}</span>
        <ChevronDown size={18} className={`shrink-0 text-brand/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="font-body text-sm text-brand/70 font-medium leading-[1.5] pb-5">{a}</p>}
    </div>
  );
}

export function B2bChromeLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const chromeAppSchema = {
    ...softwareApplicationSchema,
    name: c.productName,
    operatingSystem: 'Chrome',
    applicationCategory: 'BusinessApplication',
    downloadUrl: c.chromeStoreUrl,
    description: c.seo.description,
    screenshot: OG_IMAGE,
  };

  return (
    <>
      <SEO
        title={c.seo.title}
        description={c.seo.description}
        keywords={c.seo.keywords}
        ogTitle={c.seo.ogTitle}
        ogDescription={c.seo.ogDescription}
        ogUrl={c.canonical}
        ogImage={OG_IMAGE}
        ogType="website"
        twitterTitle={c.seo.ogTitle}
        twitterDescription={c.seo.ogDescription}
        twitterImage={OG_IMAGE}
        canonical={c.canonical}
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([...c.breadcrumbs])} />
      <StructuredData data={createFAQSchema(c.faqs.map((f) => ({ question: f.q, answer: f.a })))} />
      <StructuredData
        data={createVideoSchema({
          name: c.demoVideo.title,
          description: c.demoVideo.subheadline,
          thumbnailUrl: `https://i.ytimg.com/vi/${c.demoVideo.id}/maxresdefault.jpg`,
          embedUrl: `https://www.youtube.com/embed/${c.demoVideo.id}`,
          uploadDate: c.demoVideo.uploadDate,
        })}
      />
      <SchemaMarkup schemas={[aiOrgSchema, chromeAppSchema]} />

      <Nav ctaUrl={c.chromeStoreUrl} ctaLabel="Add to Chrome" />

      {/* HERO */}
      <section className="bg-brand pt-16 pb-0 md:pt-24 overflow-hidden relative">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none hidden lg:block" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10 items-center">
            <AnimateIn direction="left" className="lg:col-span-5">
              <div className="pb-12 md:pb-24">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] mb-5">
                  <Mail size={13} className="text-accent" strokeWidth={2.5} />
                  <span className="text-accent font-black text-[11px] uppercase tracking-[0.2em]">{c.hero.eyebrow}</span>
                </div>

                <h1 className="font-sans font-black uppercase tracking-tighter leading-[0.92] text-[38px] sm:text-[48px] md:text-[54px] mb-8">
                  <span className="block text-white">{c.hero.h1Lead}</span>
                  <span className="block text-accent">{c.hero.h1Accent}</span>
                </h1>

                <div className="flex flex-col gap-2.5 mb-8">
                  {c.hero.valueBullets.map((bullet) => (
                    <div key={bullet.from} className="flex items-center gap-2.5 text-sm sm:text-base">
                      <span className="font-body font-semibold text-white/55">{bullet.from}</span>
                      <ArrowRight size={15} className="text-accent shrink-0" strokeWidth={2.5} />
                      <span className="font-sans font-black uppercase tracking-tight text-accent">{bullet.to}</span>
                    </div>
                  ))}
                  <p className="font-body text-sm font-bold text-white/40 italic mt-1">{c.hero.valueBulletsTail}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={c.chromeStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all animate-pulse-glow whitespace-nowrap"
                  >
                    <Chrome size={17} strokeWidth={2.5} />
                    {c.hero.primaryCta}
                  </a>
                  <a
                    href="#workflow-demo"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-brand transition-all"
                  >
                    {c.hero.secondaryCta}
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-5 mb-8">
                  {c.trustBadges.map((badge) => (
                    <span key={badge} className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-white/45">
                      <ShieldCheck size={12} className="text-accent" strokeWidth={2.5} />
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                  <span className="font-body font-black text-xs sm:text-sm uppercase tracking-[0.2em] text-white/30">Works with</span>
                  <img src="/brand-logos.png" alt="Works with Xero, QuickBooks and Gmail" className="h-14 sm:h-16 w-auto" />
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" className="lg:col-span-7">
              <div className="md:pb-24 lg:translate-x-3">
                <div className="rounded-[16px] overflow-hidden shadow-[0_0_90px_rgba(200,255,0,0.18)] border border-white/10 relative [&>div]:max-w-none">
                  <HeroVideo />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* WHY / STATEMENT */}
      <section className="bg-brand border-t border-white/10 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[760px] h-[420px] bg-accent/[0.06] rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimateIn direction="up">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-accent mb-7 text-center">{c.statement.eyebrow}</p>
            <p className="font-body font-semibold text-xl sm:text-2xl md:text-[30px] leading-[1.35] text-center max-w-3xl mx-auto mb-6">
              <span className="text-white/85">{c.statement.lead} </span>
              <span className="text-accent">{c.statement.leadAccent}</span>
            </p>
            <p className="font-body text-base sm:text-lg text-white/55 font-medium leading-[1.6] text-center max-w-2xl mx-auto mb-14">
              {c.statement.body}
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border-2 border-white/10">
            {c.statement.stats.map((stat, i) => (
              <AnimateIn key={stat.label} direction="up" delay={i * 70} className="h-full">
                <div className="bg-brand h-full px-6 py-9 text-center">
                  <p className="font-sans font-black uppercase tracking-tighter leading-[0.9] text-4xl sm:text-5xl text-accent tabular-nums mb-2.5">{stat.value}</p>
                  <p className="font-body text-sm text-white/55 font-semibold leading-[1.4]">{stat.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* DUAL-MODE ARCHITECTURE */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-brand/40 mb-3 text-center">{c.dualMode.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4 text-center max-w-2xl mx-auto">
              {c.dualMode.title}
            </h2>
            <p className="font-body text-base sm:text-lg text-brand/60 font-medium leading-[1.55] mb-12 text-center max-w-2xl mx-auto">
              {c.dualMode.intro}
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {c.dualMode.columns.map((col, i) => {
              const Icon = DUAL_MODE_ICONS[i] ?? Boxes;
              return (
                <AnimateIn key={col.tag} direction="up" delay={i * 80}>
                  <div className="bg-white border-2 border-border rounded-3xl p-8 h-full hover:border-accent transition-colors">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-full bg-brand flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-accent" strokeWidth={2.25} />
                      </div>
                      <span className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-brand/40">{col.tag}</span>
                    </div>
                    <h3 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.95] mb-4">{col.title}</h3>
                    <p className="font-body text-base text-brand/65 font-medium leading-[1.6] m-0">{col.body}</p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE PAIN RESOLUTION */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-accent mb-3 text-center">{c.painResolution.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-12 text-center max-w-2xl mx-auto">
              {c.painResolution.title}
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {c.painResolution.items.map((item, i) => {
              const Icon = PAIN_ICONS[i] ?? ScanLine;
              const isLastOdd = c.painResolution.items.length % 2 === 1 && i === c.painResolution.items.length - 1;
              return (
                <AnimateIn key={item.title} direction="up" delay={i * 50} className={isLastOdd ? 'md:col-span-2' : ''}>
                  <div className="bg-white/5 border-2 border-white/10 rounded-3xl p-7 h-full hover:border-accent/40 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <Icon size={19} className="text-accent" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-white uppercase tracking-tighter leading-[1.05] mb-2.5">{item.title}</h3>
                        <p className="font-body text-sm text-white/60 font-medium leading-[1.6] m-0">{item.body}</p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* 90-SEC DEMO */}
      <section id="workflow-demo" className="bg-surface py-20 md:py-28 scroll-mt-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-brand/40 text-center mb-3">See it in action</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4 text-center">
              {c.demoVideo.headline}
            </h2>
            <p className="font-body text-base text-brand/55 font-medium text-center leading-[1.6] mb-10 max-w-2xl mx-auto">
              {c.demoVideo.subheadline}
            </p>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.25)] border-2 border-border aspect-video bg-[#0D1117]">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${c.demoVideo.id}`}
                title={c.demoVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center mt-10">
              <a
                href={c.chromeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all"
              >
                <Chrome size={18} strokeWidth={2.5} />
                {c.hero.primaryCta}
              </a>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* DE-RISKING BANNER */}
      <section className="bg-accent py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.9] mb-4">
              {c.deRisking.title}
            </h2>
            <p className="font-body text-base sm:text-lg text-brand/75 font-semibold leading-[1.5] max-w-3xl mx-auto m-0">
              {c.deRisking.body}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* TECHNICAL FEATURE MATRIX */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3 text-center">{c.featureMatrix.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-12 text-center max-w-2xl mx-auto">
              {c.featureMatrix.title}
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border-2 border-white/10">
            {c.featureMatrix.items.map((item, i) => {
              const Icon = MATRIX_ICONS[i] ?? Check;
              return (
                <div key={item.title} className="bg-brand p-6 hover:bg-white/[0.03] transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center mb-4">
                    <Icon size={17} className="text-accent" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-sm font-black text-white uppercase tracking-tight leading-[1.1] mb-2">{item.title}</h3>
                  <p className="font-body text-[13px] text-white/55 font-medium leading-[1.55] m-0">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-brand/40 mb-3 text-center">{c.pricing.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12 text-center">
              {c.pricing.title}
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch max-w-3xl mx-auto">
            {c.pricing.plans.map((plan, i) => {
              const featured = 'featured' in plan && plan.featured;
              return (
                <AnimateIn key={plan.name} direction="up" delay={i * 70} className="h-full">
                  <div
                    className={`relative rounded-3xl p-8 h-full flex flex-col ${
                      featured
                        ? 'bg-brand border-2 border-accent shadow-[0_0_50px_rgba(223,255,0,0.15)]'
                        : 'bg-white border-2 border-border'
                    }`}
                  >
                    {featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-brand font-black text-[10px] uppercase tracking-widest">
                        Most popular
                      </span>
                    )}
                    <h3 className={`text-base font-black uppercase tracking-tight mb-4 ${featured ? 'text-accent' : 'text-brand'}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className={`font-sans font-black uppercase tracking-tighter leading-none text-4xl ${featured ? 'text-white' : 'text-brand'}`}>
                        {plan.price}
                      </span>
                    </div>
                    <p className={`font-body text-xs font-semibold uppercase tracking-wide mb-5 ${featured ? 'text-white/45' : 'text-brand/45'}`}>
                      {plan.priceNote}
                    </p>
                    <p className={`font-body text-sm font-medium leading-[1.6] mb-7 ${featured ? 'text-white/65' : 'text-brand/60'}`}>
                      {plan.body}
                    </p>
                    <a
                      href={c.chromeStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-black text-sm uppercase tracking-widest transition-all ${
                        featured
                          ? 'bg-accent text-brand hover:brightness-95'
                          : 'bg-brand text-white hover:bg-brand/90'
                      }`}
                    >
                      <Chrome size={16} strokeWidth={2.5} />
                      {c.hero.primaryCta}
                    </a>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10 md:mb-14 text-center">
              Frequently asked
              <br />
              questions
            </h2>
            <div className="bg-surface rounded-3xl border-2 border-border px-4 sm:px-8 py-2 sm:py-4">
              {c.faqs.map((faq, i) => (
                <FAQItem
                  key={faq.q}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-4">
              {c.footerCta.headline}
            </h2>
            <p className="font-body text-lg text-white/65 font-medium leading-[1.5] mb-8 max-w-xl mx-auto">{c.footerCta.subheadline}</p>
            <a
              href={c.chromeStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-black text-base uppercase tracking-widest hover:brightness-95 transition-all animate-pulse-glow"
            >
              <Chrome size={18} strokeWidth={2.5} />
              {c.footerCta.primaryCta}
            </a>
            <p className="font-body text-sm text-white/35 font-medium mt-5">{c.footerCta.subtext}</p>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
