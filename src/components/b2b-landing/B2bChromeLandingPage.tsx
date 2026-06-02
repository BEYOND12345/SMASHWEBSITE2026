import { useState } from 'react';
import {
  Chrome,
  Mail,
  Shield,
  Search,
  UserCheck,
  Cloud,
  Play,
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
import { HeroVideo } from '../gmail-sidebar-mockups';

const OG_IMAGE = 'https://smashinvoices.com/hero_image.png';
const c = B2B_CHROME_LANDING;

const FEATURE_ICONS = [Search, UserCheck, Cloud] as const;

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button type="button" onClick={onClick} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="text-base font-black text-brand uppercase tracking-tighter leading-[0.88]">{q}</span>
        <span className="text-accent font-bold text-xl shrink-0">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <p className="font-body text-sm text-brand/70 font-medium leading-[1.5] pb-5">{a}</p>}
    </div>
  );
}

export function B2bChromeLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const chromeAppSchema = {
    ...softwareApplicationSchema,
    name: 'SMASH Invoices for Gmail — B2B AR',
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
          description: c.demoVideo.description,
          thumbnailUrl: `https://i.ytimg.com/vi/${c.demoVideo.id}/maxresdefault.jpg`,
          embedUrl: `https://www.youtube.com/embed/${c.demoVideo.id}`,
          uploadDate: c.demoVideo.uploadDate,
        })}
      />
      <SchemaMarkup schemas={[aiOrgSchema, chromeAppSchema]} />

      <Nav ctaUrl={c.chromeStoreUrl} ctaLabel="Add to Chrome" />

      {/* HERO */}
      <section className="bg-[#f8f9fa] border-b border-slate-200 pt-16 pb-0 md:pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="left">
              <div className="pb-16 md:pb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-5">
                  <Mail size={14} className="text-[#1a73e8]" strokeWidth={2.5} />
                  <span className="text-slate-600 font-bold text-[11px] uppercase tracking-[0.14em]">{c.hero.eyebrow}</span>
                </div>
                <h1 className="font-sans font-black text-slate-900 leading-[1.05] text-[clamp(28px,4.5vw,44px)] tracking-tight mb-6">
                  {c.hero.h1}
                </h1>
                <p className="font-body text-base sm:text-lg text-slate-600 font-medium leading-[1.6] mb-8 max-w-xl">
                  {c.hero.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <a
                    href={c.chromeStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#1a73e8] text-white font-bold text-sm hover:bg-[#1557b0] transition-colors shadow-sm"
                  >
                    <Chrome size={18} strokeWidth={2.5} />
                    {c.hero.primaryCta}
                  </a>
                  <a
                    href="#workflow-demo"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-slate-300 bg-white text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
                  >
                    <Play size={16} />
                    {c.hero.secondaryCta}
                  </a>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2 pt-6 border-t border-slate-200">
                  {c.trustBadges.map((badge) => (
                    <span key={badge} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <Shield size={12} className="text-slate-400" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
            <AnimateIn direction="right">
              <div className="pb-16 md:pb-20 rounded-xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] bg-white">
                <HeroVideo />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ECONOMIC HOOK + COMPARISON */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-center mb-8">
              {c.economicHook.title}
            </h2>
            <blockquote className="border-l-4 border-[#1a73e8] bg-slate-50 rounded-r-xl px-6 py-5 mb-12">
              <p className="font-body text-base sm:text-lg text-slate-700 font-medium leading-[1.65] m-0">
                <strong className="text-slate-900">The Operational Overhead Drain:</strong> {c.economicHook.body}
              </p>
            </blockquote>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    {c.comparison.headers.map((h) => (
                      <th key={h} className="px-4 py-3.5 font-bold text-slate-900 text-xs uppercase tracking-wide">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.comparison.rows.map(([stage, manual, smash], i) => (
                    <tr key={stage} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/80'}>
                      <td className="px-4 py-4 font-semibold text-slate-900 align-top w-[22%]">{stage}</td>
                      <td className="px-4 py-4 text-slate-600 align-top">{manual}</td>
                      <td className="px-4 py-4 text-slate-800 align-top font-medium">{smash}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {c.features.map((feature, i) => {
                const Icon = FEATURE_ICONS[i] ?? Search;
                return (
                  <div key={feature.title} className="bg-white rounded-xl border border-slate-200 p-7 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-[#e8f0fe] flex items-center justify-center mb-5">
                      <Icon size={20} className="text-[#1a73e8]" strokeWidth={2.5} />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-3">{feature.title}</h3>
                    <p className="font-body text-sm text-slate-600 leading-[1.6] m-0">{feature.body}</p>
                  </div>
                );
              })}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 90-SEC DEMO */}
      <section id="workflow-demo" className="bg-white py-16 md:py-24 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1a73e8] text-center mb-3">90-second workflow</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight text-center mb-10">
              See the verification pass in Gmail.
            </h2>
            <div className="relative w-full rounded-xl overflow-hidden border border-slate-200 shadow-lg aspect-video bg-slate-900">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${c.demoVideo.id}`}
                title={c.demoVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center mt-8">
              <a
                href={c.chromeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#1a73e8] text-white font-bold text-sm hover:bg-[#1557b0] transition-colors"
              >
                <Chrome size={18} />
                {c.hero.primaryCta}
              </a>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 md:py-20 border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-2xl font-black text-slate-900 text-center mb-8 uppercase tracking-tight">FAQ</h2>
            <div className="bg-white rounded-xl border border-slate-200 px-6">
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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-4">
              {c.footerCta.headline}
            </h2>
            <p className="font-body text-base text-white/65 font-medium leading-[1.55] mb-8">{c.footerCta.subheadline}</p>
            <a
              href={c.chromeStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all"
            >
              <Chrome size={18} strokeWidth={2.5} />
              {c.footerCta.primaryCta}
            </a>
            <p className="font-body text-xs text-white/40 mt-5">{c.footerCta.subtext}</p>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
