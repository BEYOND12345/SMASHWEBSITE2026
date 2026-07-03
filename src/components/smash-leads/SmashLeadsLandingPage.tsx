import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Chrome,
  ChevronDown,
  Sparkles,
  Kanban,
  Eye,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { SEO } from '../seo';
import { Nav } from '../nav';
import { Footer } from '../footer';
import { AnimateIn } from '../animate-in';
import { StructuredData, createBreadcrumbSchema, createFAQSchema } from '../structured-data';
import { SchemaMarkup } from '../SchemaMarkup';
import { organizationSchema as aiOrgSchema } from '../../data/schema-data';
import { hreflangAlternates } from '../../data/country-data';
import type { SmashLeadsPageConfig } from '../../data/smash-leads-pages';
import { smashLeadsCanonical } from '../../data/smash-leads-pages';
import { smashLeadsChromeUrl, SMASH_LEADS_HUB_PATH } from '../../data/smash-leads-constants';
import { smashLeadsHubGallery, smashLeadsMedia } from '../../data/smash-leads-media';
import type { SmashLeadsPageId } from '../../data/smash-leads-pages';

const OG_IMAGE = 'https://smashinvoices.com/smash-leads/placeholders/gmail-crm-pipeline-board.svg';

function PlaceholderBadge() {
  return (
    <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/70 border border-white/20 text-[10px] font-black uppercase tracking-wider text-white/80">
      Placeholder asset
    </span>
  );
}

function ProductScreenshot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0D1117] shadow-[0_0_60px_rgba(200,255,0,0.08)]">
      <PlaceholderBadge />
      <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" decoding="async" />
      {caption && (
        <figcaption className="px-4 py-3 text-xs font-medium text-white/50 border-t border-white/10">{caption}</figcaption>
      )}
    </figure>
  );
}

const FEATURE_ICONS = [Sparkles, Kanban, Eye] as const;

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

const HERO_IMAGE_BY_PAGE: Partial<Record<SmashLeadsPageId, { src: string; alt: string }>> = {
  hub: {
    src: smashLeadsMedia.pipelineBoard.src,
    alt: 'Smash Leads AI CRM kanban board overlay inside Gmail inbox tab',
  },
  'streak-alternative': {
    src: smashLeadsMedia.pipelineBoard.src,
    alt: 'Smash Leads Gmail CRM pipeline compared to Streak CRM alternative',
  },
  free: {
    src: smashLeadsMedia.aiLeadExtraction.src,
    alt: 'Free Gmail CRM with Smash Leads lead capture in Chrome',
  },
  outreach: {
    src: smashLeadsMedia.emailOpenTracking.src,
    alt: 'Cold email outreach open tracking inside Gmail with Smash Leads',
  },
};

export function SmashLeadsLandingPage({ config }: { config: SmashLeadsPageConfig }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const canonical = smashLeadsCanonical(config.id);
  const heroCta = smashLeadsChromeUrl(config.hero.ctaMedium);

  const chromeAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Smash Leads AI Gmail CRM',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Chrome',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free CRM install. AI automation from $10/month.',
    },
    url: canonical,
    downloadUrl: smashLeadsChromeUrl('schema'),
  };

  return (
    <>
      <SEO
        title={config.seo.title}
        description={config.seo.description}
        keywords={config.seo.keywords}
        ogTitle={config.seo.ogTitle}
        ogDescription={config.seo.ogDescription}
        ogUrl={canonical}
        ogImage={OG_IMAGE}
        ogType="website"
        twitterTitle={config.seo.ogTitle}
        twitterDescription={config.seo.ogDescription}
        twitterImage={OG_IMAGE}
        canonical={canonical}
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema(config.breadcrumbs)} />
      <StructuredData data={createFAQSchema(config.faqs.map((f) => ({ question: f.q, answer: f.a })))} />
      <SchemaMarkup schemas={[aiOrgSchema, chromeAppSchema]} />

      <Nav
        ctaUrl={heroCta}
        ctaLabel={config.hero.ctaLabel.includes('Free') ? 'Add to Gmail' : 'Get Smash Leads'}
      />

      {/* HERO */}
      <section className="bg-brand pt-16 pb-0 md:pt-24 overflow-hidden relative">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none hidden lg:block" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateIn direction="left" className="lg:col-span-5">
              <div className="pb-16 md:pb-24">
                {config.hero.eyebrow && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] mb-4">
                    <Zap size={13} className="text-accent" strokeWidth={2.5} />
                    <span className="text-accent font-black text-[11px] uppercase tracking-[0.2em]">{config.hero.eyebrow}</span>
                  </div>
                )}
                <h1 className="font-sans font-black uppercase tracking-tighter leading-[0.88] text-[44px] sm:text-[56px] md:text-[72px] mb-8">
                  <span className="block text-white">{config.hero.h1Line1}</span>
                  {config.hero.h1Accent && <span className="block text-accent">{config.hero.h1Accent}</span>}
                </h1>
                <p className="font-body text-base sm:text-lg text-white/70 font-medium leading-[1.55] mb-8 max-w-lg">{config.hero.subcopy}</p>
                <a
                  href={heroCta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all animate-pulse-glow whitespace-nowrap"
                >
                  <Chrome size={17} strokeWidth={2.5} />
                  {config.hero.ctaLabel}
                </a>
                <p className="font-body text-xs sm:text-sm text-white/45 mt-4 max-w-md">{config.hero.ctaMicrocopy}</p>
              </div>
            </AnimateIn>
            <AnimateIn direction="right" className="lg:col-span-7">
              <div className="md:pb-24">
                <ProductScreenshot
                  src={HERO_IMAGE_BY_PAGE[config.id]?.src ?? smashLeadsMedia.pipelineBoard.src}
                  alt={HERO_IMAGE_BY_PAGE[config.id]?.alt ?? 'Smash Leads AI CRM inside Gmail'}
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* PRODUCT GALLERY (hub) — replace placeholders in public/smash-leads/placeholders/ */}
      {config.id === 'hub' && (
        <section className="bg-[#0D1117] py-16 md:py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-accent text-center mb-3">
              Product screenshots
            </p>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter text-center mb-10">
              See Smash Leads in Gmail
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {smashLeadsHubGallery.map((item) => (
                <ProductScreenshot
                  key={item.key}
                  src={smashLeadsMedia[item.key].src}
                  alt={item.alt}
                  caption={item.caption}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FEATURE BLOCKS (hub) */}
      {config.featureBlocks && (
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <AnimateIn direction="up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12 text-center max-w-3xl mx-auto">
                {config.featureBlocks.sectionTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {config.featureBlocks.blocks.map((block, i) => {
                  const Icon = FEATURE_ICONS[i] ?? Sparkles;
                  return (
                    <div key={block.title} className="rounded-2xl border border-brand/10 bg-brand/[0.02] p-6">
                      <Icon className="text-accent mb-4" size={28} strokeWidth={2} />
                      <h3 className="font-display font-black text-xl uppercase tracking-tight text-brand mb-3">{block.title}</h3>
                      <p className="font-body text-sm text-brand/65 font-medium leading-[1.6]">{block.body}</p>
                    </div>
                  );
                })}
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* PRICING COMPARISON (hub) */}
      {config.pricingComparison && (
        <section className="bg-[#0D1117] py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <AnimateIn direction="up">
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-4 text-center">
                {config.pricingComparison.title}
              </h2>
              <p className="font-body text-center text-white/60 max-w-2xl mx-auto mb-12">{config.pricingComparison.body}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="font-black text-sm uppercase tracking-wider text-white/40 mb-3">{config.pricingComparison.expensiveLabel}</p>
                  <p className="font-body text-white/70">{config.pricingComparison.expensivePoints}</p>
                </div>
                <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6">
                  <p className="font-black text-sm uppercase tracking-wider text-accent mb-3">{config.pricingComparison.smashLabel}</p>
                  <p className="font-body text-white/85">{config.pricingComparison.smashPoints}</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* COMPARISON MATRIX (streak alternative) */}
      {config.comparisonMatrix && (
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <AnimateIn direction="up">
              <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10 text-center">
                {config.comparisonMatrix.title}
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-brand/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand/5">
                      <th className="text-left p-4 font-black uppercase tracking-wider text-brand/50">Feature</th>
                      <th className="text-left p-4 font-black uppercase tracking-wider text-brand/50">Legacy Gmail extensions</th>
                      <th className="text-left p-4 font-black uppercase tracking-wider text-accent">Smash Leads AI CRM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {config.comparisonMatrix.rows.map((row) => (
                      <tr key={row.feature} className="border-t border-brand/10">
                        <td className="p-4 font-semibold text-brand">{row.feature}</td>
                        <td className="p-4 text-brand/60">{row.legacy}</td>
                        <td className="p-4 font-semibold text-brand">{row.smash}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* NARRATIVE (streak) */}
      {config.narrativeBlock && (
        <section className="bg-brand py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <AnimateIn direction="up">
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
                {config.narrativeBlock.title}
              </h2>
              <p className="font-body text-lg text-white/70 font-medium leading-[1.6]">{config.narrativeBlock.body}</p>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* BULLETS (free) */}
      {config.bulletHighlights && (
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
            <AnimateIn direction="up">
              <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4 text-center">
                {config.bulletHighlights.title}
              </h2>
              <p className="font-body text-brand/65 text-center mb-10">{config.bulletHighlights.intro}</p>
              <ul className="space-y-4">
                {config.bulletHighlights.bullets.map((b) => (
                  <li key={b} className="flex gap-3 font-body text-brand/80 font-medium">
                    <span className="text-accent font-black">→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* USE CASES (outreach) */}
      {config.useCases && (
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <AnimateIn direction="up">
              <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12 text-center">
                {config.useCases.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {config.useCases.cases.map((c) => (
                  <div key={c.title} className="rounded-2xl border border-brand/10 p-8">
                    <h3 className="font-display font-black text-xl uppercase tracking-tight text-brand mb-4">{c.title}</h3>
                    <p className="font-body text-sm text-brand/65 font-medium leading-[1.6]">{c.body}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* SPIDERWEB inline link */}
      {config.spiderweb && (
        <section className="bg-[#0D1117] border-t border-white/10 py-10">
          <div className="max-w-3xl mx-auto px-4 text-center font-body text-white/60">
            {config.spiderweb.before}
            <Link to={SMASH_LEADS_HUB_PATH} className="text-accent font-semibold hover:underline">
              {config.spiderweb.linkText}
            </Link>
            {config.spiderweb.after}
          </div>
        </section>
      )}

      {/* HUB SPOKE BLOCK */}
      {config.hubSpokeBlock && (
        <section className="bg-white py-16 md:py-20 border-t border-brand/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-2xl sm:text-3xl font-black text-brand uppercase tracking-tighter mb-8 text-center">
              {config.hubSpokeBlock.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {config.hubSpokeBlock.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group rounded-2xl border border-brand/10 p-6 hover:border-accent/40 transition-colors"
                >
                  <p className="font-black text-brand uppercase tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {link.label}
                  </p>
                  <p className="font-body text-sm text-brand/60 mb-4">{link.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent">
                    Read more <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
            <p className="text-center mt-10 font-body text-sm text-brand/50">
              Looking to migrate? Read our breakdown on why we are the fastest growing{' '}
              <Link to="/smash-leads/alternatives/streak-crm" className="text-accent font-semibold hover:underline">
                Streak CRM alternative
              </Link>{' '}
              for small businesses.
            </p>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-black text-brand uppercase tracking-tighter mb-8 text-center">FAQ</h2>
          {config.faqs.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter mb-4">{config.finalCta.headline}</h2>
          <p className="font-body text-white/65 mb-8">{config.finalCta.subcopy}</p>
          <a
            href={smashLeadsChromeUrl(config.finalCta.ctaMedium)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest"
          >
            <Chrome size={17} />
            {config.finalCta.ctaLabel}
          </a>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-[#0D1117] py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-4">Related pages</p>
          <ul className="flex flex-wrap gap-4">
            {config.relatedPages.map((p) => (
              <li key={p.href}>
                <Link to={p.href} className="text-sm text-accent font-semibold hover:underline">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer showCTA={false} />
    </>
  );
}
