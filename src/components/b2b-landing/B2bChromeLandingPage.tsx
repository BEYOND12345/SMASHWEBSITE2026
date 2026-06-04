import { useState } from 'react';
import {
  Chrome,
  Mail,
  ShieldCheck,
  Search,
  UserCheck,
  Cloud,
  ChevronDown,
} from 'lucide-react';
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

const FEATURE_ICONS = [Search, UserCheck, Cloud] as const;

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateIn direction="left" className="lg:col-span-5">
              <div className="pb-16 md:pb-24">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] mb-4">
                  <Mail size={13} className="text-accent" strokeWidth={2.5} />
                  <span className="text-accent font-black text-[11px] uppercase tracking-[0.2em]">{c.hero.eyebrow}</span>
                </div>

                <p className="font-body font-black text-xl sm:text-2xl uppercase tracking-[0.12em] text-white/60 mb-3 leading-tight">
                  {c.hero.preHeadline}
                </p>

                <h1 className="font-sans font-black uppercase tracking-tighter leading-[0.88] text-[52px] sm:text-[64px] md:text-[80px] mb-8">
                  <span className="block text-white">{c.hero.h1White}</span>
                  <span className="block text-accent">{c.hero.h1Accent}</span>
                </h1>

                <p className="font-body text-base sm:text-lg text-white/70 font-medium leading-[1.55] mb-8 max-w-lg">
                  {c.hero.subheadline}
                </p>

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

            <AnimateIn direction="right" className="lg:col-span-7 lg:scale-110 lg:translate-x-8">
              <div className="md:pb-24">
                <div className="rounded-[16px] overflow-hidden shadow-[0_0_80px_rgba(223,255,0,0.15)] border border-white/10 relative bg-[#0D1117]">
                  <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${c.hero.videoId}?autoplay=1&mute=1&loop=1&playlist=${c.hero.videoId}&controls=0&modestbranding=1&rel=0&playsinline=1`}
                      title={`${c.productName} — workflow demo`}
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ECONOMIC HOOK + COMPARISON */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-brand/40 mb-3 text-center">The economics</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10 text-center max-w-3xl mx-auto">
              {c.economicHook.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border-2 border-border mb-10">
              {c.economicHook.stats.map((stat) => (
                <div key={stat.label} className="bg-white px-5 py-7 text-center">
                  <p className="font-sans font-black text-brand uppercase tracking-tighter leading-[0.9] text-3xl sm:text-4xl tabular-nums mb-2">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-brand/55 font-semibold leading-[1.4]">{stat.label}</p>
                </div>
              ))}
            </div>

            <blockquote className="max-w-3xl mx-auto border-l-4 border-accent bg-white rounded-r-2xl px-6 py-5 mb-12 shadow-sm">
              <p className="font-body text-base sm:text-lg text-brand/75 font-medium leading-[1.6] m-0">
                <strong className="text-brand">The Operational Overhead Drain:</strong> {c.economicHook.body}
              </p>
            </blockquote>

            <div className="overflow-x-auto rounded-2xl border-2 border-border bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-brand text-white">
                    {c.comparison.headers.map((h) => (
                      <th key={h} className="px-4 py-4 font-black uppercase tracking-wide text-xs sm:text-sm">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.comparison.rows.map(([stage, manual, smash], i) => (
                    <tr key={stage} className="border-t border-border even:bg-surface/80">
                      <td className="px-4 py-4 align-top w-[24%]">
                        <span className="flex items-start gap-2.5">
                          <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-brand text-accent font-black text-[10px] flex items-center justify-center tabular-nums">
                            {i + 1}
                          </span>
                          <span className="font-black text-brand uppercase tracking-tight leading-[1.05]">{stage}</span>
                        </span>
                      </td>
                      <td className="px-4 py-4 text-brand/60 font-medium align-top">{manual}</td>
                      <td className="px-4 py-4 text-brand font-bold align-top">{smash}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3 text-center">Verified capabilities</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-12 text-center max-w-2xl mx-auto">
              Less typing. More verifying.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {c.features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i] ?? Search;
              return (
                <AnimateIn key={feature.title} direction="up" delay={i * 60}>
                  <div className="bg-white/5 border-2 border-white/10 rounded-3xl p-7 h-full hover:border-accent/40 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-5">
                      <Icon size={18} className="text-accent" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tighter leading-[0.95] mb-3">{feature.title}</h3>
                    <p className="font-body text-sm text-white/60 font-medium leading-[1.6] m-0">{feature.body}</p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ANSWER STRIP — AR not AP positioning */}
      <section className="bg-accent py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-xs font-black uppercase tracking-widest text-brand/50 mb-3">{c.answerStrip.question}</p>
          <p className="text-lg md:text-2xl font-bold text-brand leading-[1.3]">{c.answerStrip.answer}</p>
        </div>
      </section>

      {/* 90-SEC DEMO */}
      <section id="workflow-demo" className="bg-[#0D1117] py-20 md:py-28 scroll-mt-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-accent text-center mb-3">90-second workflow</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-4 text-center">
              {c.demoVideo.headline}
            </h2>
            <p className="font-body text-base text-white/55 font-medium text-center leading-[1.6] mb-10 max-w-2xl mx-auto">
              {c.demoVideo.subheadline}
            </p>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)] border border-white/10 aspect-video">
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
