import { useState, type ReactNode } from 'react';
import { Chrome, ChevronDown, Mail, ShieldCheck, FileText, Star } from 'lucide-react';
import { BrandLogos } from '../brand-logos';
import { HeroGif, HeroVideo } from '../gmail-sidebar-mockups';
import {
  HERO_GIF_B2B,
  HERO_VIDEO_B2B_EMAIL_QUOTE,
  HERO_VIDEO_B2B_PDF_SKU,
  CHROME_STORE_RATING,
} from '../../data/download-urls';
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

const WORKFLOW_VIDEOS: Record<string, string> = {
  'email-to-sku-quote': HERO_VIDEO_B2B_EMAIL_QUOTE,
  'pdf-to-sku-quote': HERO_VIDEO_B2B_PDF_SKU,
};

function SectionEyebrow({
  children,
  light = false,
  className = '',
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`font-display font-black text-[11px] uppercase tracking-[0.2em] mb-4 ${
        light ? 'text-accent' : 'text-brand/40'
      } ${className}`}
    >
      {children}
    </p>
  );
}

function ProductShowcaseRow({
  reverse = false,
  text,
  media,
}: {
  reverse?: boolean;
  text: ReactNode;
  media: ReactNode;
}) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
        reverse ? 'lg:[direction:rtl]' : ''
      }`}
    >
      <div className="lg:[direction:ltr]">{text}</div>
      <div className="lg:[direction:ltr]">{media}</div>
    </div>
  );
}

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  const supportEmail = c.contactSupport.email;
  const emailIndex = a.indexOf(supportEmail);

  return (
    <div className="border-b border-border last:border-0">
      <button type="button" onClick={onClick} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="text-base font-black text-brand uppercase tracking-tighter leading-[0.88]">{q}</span>
        <ChevronDown size={18} className={`shrink-0 text-brand/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <p className="font-body text-sm text-brand/70 font-medium leading-[1.5] pb-5">
          {emailIndex === -1 ? (
            a
          ) : (
            <>
              {a.slice(0, emailIndex)}
              <a href={`mailto:${supportEmail}`} className="text-accent font-semibold hover:underline">
                {supportEmail}
              </a>
              {a.slice(emailIndex + supportEmail.length)}
            </>
          )}
        </p>
      )}
    </div>
  );
}

function InstallFreeButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={c.chromeStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all animate-pulse-glow whitespace-nowrap ${className}`}
    >
      <Chrome size={17} strokeWidth={2.5} />
      Install Free
    </a>
  );
}

function parseRealCostStat(line: string, index: number) {
  if (index === 2) {
    const parts = line.split('10 hours');
    if (parts.length === 2) {
      return {
        prefix: parts[0].trim(),
        hero: '10 hours',
        labels: parts[1]
          .trim()
          .split('. ')
          .filter(Boolean)
          .map((chunk) => (chunk.endsWith('.') ? chunk : `${chunk}.`)),
        accentHero: true,
      };
    }
  }

  const match = line.match(/^(\d+)\s+(.+)$/);
  if (match) {
    return {
      hero: match[1],
      labels: match[2]
        .trim()
        .split('. ')
        .filter(Boolean)
        .map((chunk) => (chunk.endsWith('.') ? chunk : `${chunk}.`)),
      accentHero: false,
    };
  }

  return { hero: line, labels: [] as string[], accentHero: false };
}

/** Stacked, center-aligned stat cards — parses copy without altering source strings. */
function RealCostStat({ line, index }: { line: string; index: number }) {
  const isHighlight = index === 2;
  const { prefix, hero, labels, accentHero } = parseRealCostStat(line, index);

  return (
    <div className="relative flex h-full w-full min-h-[220px] flex-col items-center justify-center px-6 py-10 text-center sm:min-h-[240px]">
      {isHighlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-accent/20 via-transparent to-transparent"
        />
      )}

      <div className="relative z-10 flex flex-col items-center justify-center gap-3">
        {prefix && (
          <span className="font-display text-[11px] font-black uppercase tracking-[0.2em] text-white/45">
            {prefix}
          </span>
        )}

        <span
          className={`max-w-full font-sans font-black uppercase leading-none tracking-tighter ${
            accentHero
              ? 'text-4xl text-accent sm:text-5xl md:text-6xl'
              : 'text-5xl text-brand sm:text-6xl md:text-7xl'
          }`}
        >
          {hero}
        </span>

        {labels.length > 0 && (
          <div className="flex flex-col items-center gap-1">
            {labels.map((label) => (
              <span
                key={label}
                className={`max-w-[11rem] font-body text-sm font-semibold uppercase leading-snug tracking-[0.12em] sm:text-[15px] ${
                  isHighlight ? 'text-white/65' : 'text-brand/50'
                }`}
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
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

  const formatTags = c.whatItReads.formats.split('. ').filter(Boolean);

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

      <Nav ctaUrl={c.chromeStoreUrl} ctaLabel="Install Free" />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-brand pt-16 pb-0 md:pt-24 overflow-hidden relative">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none hidden lg:block" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateIn direction="left" className="lg:col-span-5">
              <div className="pb-16 md:pb-24">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] mb-4">
                  <Mail size={13} className="text-accent" strokeWidth={2.5} />
                  <span className="text-accent font-black text-[11px] uppercase tracking-[0.2em]">RFQ to quote in Gmail</span>
                </div>

                <h1 className="font-sans font-black uppercase tracking-tighter leading-[0.88] text-[52px] sm:text-[64px] md:text-[80px] mb-8">
                  <span className="block text-white">{c.hero.h1Lead}</span>
                  <span className="block text-accent">{c.hero.h1Accent}</span>
                </h1>

                <div className="space-y-5 mb-10 max-w-lg">
                  <p className="font-body text-base sm:text-lg text-white/75 font-semibold leading-[1.55]">
                    {c.hero.solution}
                  </p>
                  <p className="font-sans font-black uppercase tracking-tight text-accent text-xl sm:text-2xl leading-[1.1]">
                    {c.hero.payoff}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <InstallFreeButton />
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-brand transition-all"
                  >
                    {c.hero.secondaryCta}
                  </a>
                </div>

                <div className="pt-6 mt-8 border-t border-white/10 flex flex-col items-start sm:flex-row sm:items-center gap-5 sm:gap-8">
                  <span className="font-body font-black text-xs sm:text-sm uppercase tracking-[0.2em] text-white/30 shrink-0">
                    Works with
                  </span>
                  <BrandLogos className="opacity-100" />
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" className="lg:col-span-7 flex items-center justify-center">
              <div className="md:pb-24 w-full">
                <div className="rounded-[16px] overflow-hidden shadow-[0_0_80px_rgba(200,255,0,0.15)] border border-white/10 relative">
                  <HeroGif fill src={HERO_GIF_B2B} title="SMASH Gmail quoting — animated demo" />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── STRAPLINE ────────────────────────────────────────────── */}
      <section className="bg-brand border-t border-white/10 py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="font-display font-black text-lg sm:text-xl md:text-2xl uppercase tracking-wide text-white leading-[1.2]">
            <span className="text-accent">{c.heroStrapline.split('.')[0]}.</span>
            {c.heroStrapline.slice(c.heroStrapline.indexOf('.') + 1)}
          </p>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-surface py-20 md:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="text-center mb-14 md:mb-16 max-w-3xl mx-auto">
              <SectionEyebrow className="text-center mb-3">{c.howItWorks.eyebrow}</SectionEyebrow>
              <h2 className="font-sans font-black uppercase tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand leading-[0.88]">
                {c.howItWorks.closing}
              </h2>
            </div>

            <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              <div
                aria-hidden
                className="pointer-events-none absolute top-[1.75rem] left-[12%] right-[12%] hidden h-px bg-border lg:block"
              />
              {c.howItWorks.steps.map((step, i) => (
                <li
                  key={step}
                  className="relative list-none bg-white border-2 border-border rounded-3xl p-7 sm:p-8 h-full hover:border-accent/50 transition-colors"
                >
                  <span className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand text-accent font-black text-lg mb-5 ring-4 ring-surface">
                    {i + 1}
                  </span>
                  <p className="font-body text-base sm:text-[17px] text-brand/70 font-medium leading-[1.55]">{step}</p>
                </li>
              ))}
            </ol>
          </AnimateIn>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="bg-[#0D1117] py-16 md:py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-white/30 mb-8 text-center">
              {c.testimonials.eyebrow}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {c.testimonials.items.map(({ quote, name, role, city }) => (
                <figure
                  key={name}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3 h-full"
                >
                  <div className="flex gap-0.5" aria-hidden>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <blockquote className="font-body text-sm text-white/75 font-medium leading-[1.55] italic flex-1">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <figcaption className="font-display text-xs uppercase tracking-wider text-white/40">
                    {name} · {role} · {city}
                  </figcaption>
                </figure>
              ))}
            </div>

            <p className="mt-10 text-center">
              <a
                href={c.chromeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 font-body text-sm font-semibold text-white/50 hover:text-white/70 transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="flex gap-0.5" aria-hidden>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-accent fill-accent" />
                    ))}
                  </span>
                  <span>
                    {CHROME_STORE_RATING.ratingValue} average · {CHROME_STORE_RATING.reviewCount} Chrome Web Store
                    reviews
                  </span>
                </span>
              </a>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── WORKFLOW DEMOS ───────────────────────────────────────── */}
      <section id="workflows" className="bg-brand border-t border-white/10 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-28">
          <AnimateIn direction="up">
            <SectionEyebrow light className="text-center">{c.workflowIntro.eyebrow}</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-4 text-center max-w-3xl mx-auto">
              {c.workflowIntro.title}
            </h2>
            <p className="font-body text-base sm:text-lg text-white/55 font-medium leading-[1.55] text-center max-w-2xl mx-auto">
              {c.workflowIntro.body}
            </p>
          </AnimateIn>
        </div>

        {c.workflowShowcases.map((workflow, i) => {
          const reverse = i % 2 === 1;
          return (
            <section
              key={workflow.id}
              id={workflow.anchor}
              className={`py-16 md:py-28 scroll-mt-20 border-t border-white/10 overflow-hidden ${
                i % 2 === 0 ? 'bg-brand' : 'bg-[#0D1117]'
              }`}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
                <AnimateIn direction={reverse ? 'right' : 'left'}>
                  <ProductShowcaseRow
                    reverse={reverse}
                    text={
                      <>
                        <SectionEyebrow light>{workflow.eyebrow}</SectionEyebrow>
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
                          {workflow.title}
                        </h3>
                        <p className="font-body text-lg text-white/65 font-medium leading-[1.6] max-w-lg">
                          {workflow.body}
                        </p>
                      </>
                    }
                    media={
                      <div className="rounded-[16px] overflow-hidden shadow-[0_0_80px_rgba(200,255,0,0.15)] border border-white/10">
                        <HeroVideo
                          variant="workflow"
                          src={WORKFLOW_VIDEOS[workflow.id] ?? workflow.videoSrc}
                          title={workflow.videoTitle}
                        />
                      </div>
                    }
                  />
                </AnimateIn>
              </div>
            </section>
          );
        })}
      </section>

      {/* ─── THE REAL COST ────────────────────────────────────────── */}
      <section id="real-cost" className="bg-surface py-20 md:py-28 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <SectionEyebrow className="text-center">{c.realCost.eyebrow}</SectionEyebrow>

            <div className="mx-auto mb-12 max-w-xl text-center">
              {c.realCost.lead
                .split('. ')
                .filter(Boolean)
                .map((sentence, i, arr) => {
                  const line = sentence.endsWith('.') ? sentence : `${sentence}.`;
                  const isPunchline = i === arr.length - 1;

                  return (
                    <p
                      key={line}
                      className={
                        isPunchline
                          ? 'mt-5 font-body text-base sm:text-lg font-medium leading-[1.65] text-brand/55'
                          : 'font-sans text-2xl font-black uppercase leading-[0.92] tracking-tighter text-brand sm:text-3xl'
                      }
                    >
                      {line}
                    </p>
                  );
                })}
            </div>

            <div className="mb-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-3">
              {c.realCost.lines.map((line, i) => (
                <div
                  key={line}
                  className={`isolate overflow-hidden rounded-3xl border-2 shadow-[0_24px_64px_rgba(15,38,58,0.08)] ${
                    i === 2 ? 'border-brand bg-brand text-white' : 'border-border bg-white'
                  }`}
                >
                  <RealCostStat line={line} index={i} />
                </div>
              ))}
            </div>
            <p className="font-sans font-black uppercase tracking-tighter text-2xl sm:text-3xl md:text-4xl text-brand leading-[0.92] text-center mb-6">
              {c.realCost.body}
            </p>
            <p className="font-body text-base sm:text-lg text-brand/55 font-medium leading-[1.6] text-center max-w-xl mx-auto">
              {c.realCost.assurance}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── WHAT IT READS ────────────────────────────────────────── */}
      <section className="bg-brand py-20 md:py-28 border-t border-white/10 relative overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[760px] h-[420px] bg-accent/[0.06] rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <AnimateIn direction="up">
            <SectionEyebrow light className="text-center">{c.whatItReads.eyebrow}</SectionEyebrow>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {formatTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-bold uppercase tracking-wide text-white/70"
                >
                  <FileText size={11} className="text-accent shrink-0" strokeWidth={2.5} />
                  {tag}
                </span>
              ))}
            </div>

            <p className="font-body text-base sm:text-lg text-white/50 font-medium text-center leading-[1.6] mb-8">
              {c.whatItReads.messy}
            </p>

            <div className="bg-white/[0.05] border-2 border-white/10 rounded-3xl p-8 md:p-10 text-center mb-6">
              <p className="font-sans font-black uppercase tracking-tighter text-3xl sm:text-4xl text-white leading-[0.88] mb-6">
                {c.whatItReads.promise}
              </p>
              <p className="font-body text-base text-white/60 font-medium leading-[1.6] mb-4">{c.whatItReads.flagged}</p>
              <p className="font-sans font-black uppercase tracking-tight text-accent text-sm sm:text-base">
                {c.whatItReads.assurance}
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── WORKS WITH ───────────────────────────────────────────── */}
      <section className="bg-surface py-14 md:py-20 border-t border-border/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="flex flex-col items-center text-center gap-5 md:gap-7">
              <BrandLogos className="!h-[4.5rem] sm:!h-20 md:!h-[5.5rem] w-auto max-w-[min(100%,360px)] object-contain" />
              <div className="max-w-xl space-y-4">
                <h2 className="font-sans font-black uppercase tracking-tighter text-2xl sm:text-3xl md:text-4xl text-brand leading-[0.92]">
                  {c.worksWith.headline}
                </h2>
                <p className="font-body text-base sm:text-lg text-brand/55 font-medium leading-[1.65]">
                  {c.worksWith.body}
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── YOUTUBE ──────────────────────────────────────────────── */}
      <section id="workflow-demo" className="bg-[#0D1117] py-20 md:py-28 scroll-mt-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <SectionEyebrow light className="text-center">Full walkthrough</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-4 text-center">
              {c.demoVideo.headline}
            </h2>
            <p className="font-body text-base sm:text-lg text-white/55 font-medium text-center leading-[1.6] mb-10 max-w-2xl mx-auto">
              {c.demoVideo.subheadline}
            </p>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)] border border-white/10">
              <div className="aspect-video w-full bg-[#0D1117]">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${c.demoVideo.id}`}
                  title={c.demoVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
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

            <div className="mt-8 rounded-3xl border-2 border-brand/10 bg-brand px-6 py-8 sm:px-10 sm:py-10 text-center">
              <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-accent mb-3">
                {c.contactSupport.eyebrow}
              </p>
              <h3 className="font-sans text-2xl sm:text-3xl font-black uppercase tracking-tighter leading-[0.92] text-white mb-4">
                {c.contactSupport.headline}
              </h3>
              <p className="font-body text-base text-white/60 font-medium leading-[1.65] max-w-xl mx-auto mb-3">
                {c.contactSupport.body}
              </p>
              <p className="font-body text-sm text-white/45 font-medium leading-[1.6] max-w-lg mx-auto mb-7">
                {c.contactSupport.footnote}
              </p>
              <a
                href={`mailto:${c.contactSupport.email}?subject=${encodeURIComponent('B2B Gmail quoting — setup help')}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all"
              >
                <Mail size={16} strokeWidth={2.5} />
                {c.contactSupport.email}
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── INSTALL FREE ─────────────────────────────────────────── */}
      <section className="bg-brand py-16 md:py-24 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] mb-6">
              <ShieldCheck size={13} className="text-accent" strokeWidth={2.5} />
              <span className="text-accent font-black text-[11px] uppercase tracking-[0.2em]">{c.installCta.eyebrow}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-8">
              Ready from the first quote
            </h2>
            <InstallFreeButton className="text-base px-10 py-4" />
            <p className="font-body text-base text-white/45 font-medium mt-6">{c.installCta.subtext}</p>
            <p className="font-body text-xs font-semibold text-white/35 mt-4">
              {CHROME_STORE_RATING.ratingValue}★ average · {CHROME_STORE_RATING.reviewCount} Chrome Web Store reviews
            </p>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
