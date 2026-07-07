import { useState } from 'react';
import { Mic, ChevronDown } from 'lucide-react';
import { SEO } from '../seo';
import { Nav } from '../nav';
import { Footer } from '../footer';
import { AnimateIn } from '../animate-in';
import {
  StructuredData,
  createBreadcrumbSchema,
  createFAQSchema,
  createHowToSchema,
} from '../structured-data';
import { SchemaMarkup } from '../SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../../data/schema-data';
import { hreflangAlternates } from '../../data/country-data';
import {
  IOS_DESKTOP_BAND,
  IOS_FEATURE_TILES,
  IOS_FEATURES_SECTION,
  IOS_FINAL_CTA,
  IOS_HERO,
  IOS_LAUNCH_FEATURES_ENABLED,
  IOS_PROBLEM,
  IOS_STORY_SEGMENTS,
} from '../../data/ios-landing-spec';
import { mainPages } from '../../data/main-pages-seo';
import { IosSpecHeadline } from './IosCalloutCard';
import { IosSubline } from './IosSubline';
import { IosHeroPhoneShowcase } from './IosPhoneShowcase';
import {
  IosAccentStrip,
  IosIntegrationStrap,
  IosStorySection,
} from './IosStorySection';
import { IosFinalCta, IosDesktopLink, IosDesktopTeaser, IosHeroCta, IosMediaSlot } from './IosCtaBlocks';
import { iosLanding, iosHeroCopyCellClass, iosHeroDesktopCtaClass, iosHeroGridClass, iosHeroMediaCellClass, iosHeroMobileCtaCellClass, iosHeroMobileCtaWrapClass, iosHeroMobileSublineClass, iosStoryCopyCellClass, iosStoryMediaCellClass } from './ios-landing-tokens';
import { APP_STORE_URL } from '../../data/download-urls';
import {
  TestimonialGridSection,
  FeaturedTestimonialSection,
} from '../chrome-landing/chrome-landing-ui';
import { BrandLogos } from '../brand-logos';

const voicePage = mainPages.voiceInvoicing;

const FIELD_TESTIMONIALS = [
  {
    quote: "I sent it before I'd even left the job.",
    name: 'Dave R.',
    trade: 'Plumber',
    city: 'Byron Bay',
  },
  {
    quote: 'Did the whole quote sitting in the van. Paid by the time I got home.',
    name: 'Tom H.',
    trade: 'Plumber',
    city: 'Perth',
  },
  {
    quote: "I just talk and it's done. Haven't typed a quote in weeks.",
    name: 'Marcus W.',
    trade: 'Electrician',
    city: 'Brisbane',
  },
  {
    quote: 'Customer approved and paid from the link while I was still on site.',
    name: 'Jake T.',
    trade: 'Handyman',
    city: 'Sydney',
  },
];

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button type="button" onClick={onClick} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="font-display-italic font-black text-brand uppercase tracking-tighter leading-[0.88] text-base">{q}</span>
        <ChevronDown size={18} className={`shrink-0 text-brand/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="font-body text-sm text-brand/70 font-medium leading-[1.5] pb-5">{a}</p>}
    </div>
  );
}

export function IosAppLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const visibleTiles = IOS_FEATURE_TILES.filter((t) => !t.launchOnly || IOS_LAUNCH_FEATURES_ENABLED);

  return (
    <>
      <SEO
        title={voicePage.title}
        description={voicePage.description}
        ogTitle={voicePage.title}
        ogDescription={voicePage.description}
        ogUrl="https://smashinvoices.com/voice-invoicing"
        canonical="https://smashinvoices.com/voice-invoicing"
        hreflangs={hreflangAlternates}
      />

      <StructuredData
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://smashinvoices.com' },
          { name: 'SMASH for iPhone', url: 'https://smashinvoices.com/voice-invoicing' },
        ])}
      />
      <StructuredData data={createFAQSchema(voicePage.faqs)} />
      <StructuredData
        data={createHowToSchema({
          name: 'How to send a quote by voice on iPhone',
          description: 'Talk the job, verify the draft, send before you leave the site.',
          steps: [
            { name: 'Describe the job', text: 'Open SMASH and tap Start Recording. Say materials, hours, and fees naturally.' },
            { name: 'Review line items', text: 'SMASH matches speech to your saved prices. Edit anything flagged before send.' },
            { name: 'Send the link', text: 'Customer gets a professional quote link by SMS or email.' },
            { name: 'They approve and pay', text: 'Read receipts show when they open it. Approve and pay from their phone.' },
          ],
        })}
      />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <div className={iosLanding.page}>
        <Nav ctaUrl={APP_STORE_URL} ctaLabel="Start Free" />

        {/* HERO — mobile: centered promise → product UI → CTA */}
        <section className="bg-brand pt-12 pb-0 md:pt-24 overflow-hidden relative">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none hidden lg:block" />

          <div className={`${iosLanding.container} relative z-10`}>
            <div className={iosHeroGridClass}>
              <AnimateIn direction="left" className={`${iosHeroCopyCellClass} lg:col-span-5`}>
                <div className="pb-2 lg:pb-24">
                  <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] mb-5">
                    <Mic size={13} className="text-accent" strokeWidth={2.5} />
                    <span className="text-accent font-black text-[11px] uppercase tracking-[0.2em]">SMASH for iPhone</span>
                  </div>

                  <p className={`${iosLanding.eyebrow} mb-3 sm:mb-4`}>{IOS_HERO.eyebrow}</p>

                  <h1 className={`${iosLanding.heroHeadline} mb-3 sm:mb-5 text-[clamp(1.875rem,7vw,5rem)] sm:text-[clamp(2.5rem,6.5vw,5rem)]`}>
                    <span className="block text-white">{IOS_HERO.headlineWhite}</span>
                    <span className="block text-accent">{IOS_HERO.headlineLime}</span>
                  </h1>

                  <IosSubline className={`${iosLanding.subline} mb-0 lg:mb-8 max-w-md ${iosHeroMobileSublineClass}`}>
                    {IOS_HERO.subline}
                  </IosSubline>

                  <div className={`${iosHeroDesktopCtaClass} ${iosHeroMobileCtaWrapClass} mt-8 mb-0 sm:mb-8`}>
                    <IosHeroCta />
                  </div>

                  <div className="hidden sm:flex pt-6 border-t border-white/10 flex-col items-start sm:flex-row sm:items-center gap-5 sm:gap-8">
                    <span className="font-body font-black text-xs uppercase tracking-[0.2em] text-white/30">Works with</span>
                    <BrandLogos className="opacity-100" />
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn direction="right" className={`${iosHeroMediaCellClass} lg:col-span-7`}>
                <div className="pb-2 sm:pb-16 md:pb-24 w-full max-w-[min(100%,320px)] sm:max-w-[min(100%,385px)] lg:max-w-none mx-auto lg:mx-0">
                  <IosMediaSlot type="hero-video" />
                  <IosMediaSlot type="hero-gif" />
                  <IosHeroPhoneShowcase />
                </div>
              </AnimateIn>

              <AnimateIn direction="up" className={iosHeroMobileCtaCellClass}>
                <div className={iosHeroMobileCtaWrapClass}>
                  <IosHeroCta />
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        <IosIntegrationStrap />

        <TestimonialGridSection eyebrow="From people on the tools" items={FIELD_TESTIMONIALS} />

        {/* Problem — accent answer strip (Chrome pattern) */}
        <IosAccentStrip eyebrow={IOS_PROBLEM.eyebrow}>
          <span className="font-display-italic font-black uppercase tracking-tighter block mb-2 text-[clamp(1.5rem,4vw,2.25rem)] leading-[0.9]">
            {IOS_PROBLEM.headlineWhite}{' '}
            <span className="text-brand">{IOS_PROBLEM.headlineLime}</span>
          </span>
          <IosSubline as="span" className="block font-body text-base sm:text-lg font-medium leading-[1.55]">
            {IOS_PROBLEM.subline}
          </IosSubline>
        </IosAccentStrip>

        {/* Story sections — alternating white / navy like Chrome */}
        {IOS_STORY_SEGMENTS.map((segment, index) => (
          <div key={segment.id} id={index === 0 ? 'how-it-works' : undefined}>
            <IosStorySection
              segment={segment}
              dark={segment.dark}
              imageFirst={segment.imageFirst}
              photoBgEnabled={index % 2 === 0}
            />
          </div>
        ))}

        <IosMediaSlot type="story-demo" />

        {/* Desktop band — 2-col like a story section */}
        <section className="bg-brand py-16 md:py-28 overflow-hidden border-t border-white/10">
          <div className={iosLanding.container}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <AnimateIn direction="left" className={iosStoryCopyCellClass}>
                <IosSpecHeadline
                  eyebrow={IOS_DESKTOP_BAND.eyebrow}
                  headlineWhite={IOS_DESKTOP_BAND.headlineWhite}
                  headlineLime={IOS_DESKTOP_BAND.headlineLime}
                />
                <IosSubline className={`${iosLanding.body} mt-6 mb-4`}>{IOS_DESKTOP_BAND.body}</IosSubline>
                <IosDesktopLink />
              </AnimateIn>
              <AnimateIn direction="right" className={iosStoryMediaCellClass}>
                <IosDesktopTeaser />
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Capability grid — Chrome pattern */}
        <section className="bg-brand py-16 md:py-24 border-t border-white/10">
          <div className={iosLanding.container}>
            <AnimateIn direction="up">
              <IosSpecHeadline
                centered
                className="mb-12"
                eyebrow={IOS_FEATURES_SECTION.eyebrow}
                headlineWhite={IOS_FEATURES_SECTION.headlineWhite}
                headlineLime={IOS_FEATURES_SECTION.headlineLime}
                dark
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {visibleTiles.map((tile) => (
                  <div key={tile.title} className="bg-white/[0.05] border border-white/10 rounded-2xl p-5">
                    <h3 className="font-display-italic font-black uppercase text-white text-sm tracking-tight mb-2">
                      {tile.title}
                    </h3>
                    <p className="font-body text-sm text-white/60 font-medium leading-[1.5]">{tile.outcome}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        <FeaturedTestimonialSection
          quote="I sent it before I'd even left the job."
          attribution="Dave R. · Plumber · Byron Bay"
        />

        {/* FAQ — white section like Chrome */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
            <AnimateIn direction="up">
              <IosSpecHeadline
                eyebrow="Questions"
                headlineWhite="COMMON "
                headlineLime="QUESTIONS."
                dark={false}
                className="mb-10"
              />
              <div className="rounded-3xl border border-border bg-white px-4 sm:px-8 py-2">
                {voicePage.faqs.map((faq, i) => (
                  <FAQItem
                    key={faq.question}
                    q={faq.question}
                    a={faq.answer}
                    isOpen={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                ))}
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* Final CTA — mirrors hero hierarchy */}
        <section className="bg-brand py-16 md:py-24 relative overflow-hidden border-t border-white/10">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none hidden lg:block" />
          <div className={`${iosLanding.container} relative z-10 text-center`}>
            <AnimateIn direction="up">
              <IosFinalCta
                headlineWhite={IOS_FINAL_CTA.headlineWhite}
                headlineLime={IOS_FINAL_CTA.headlineLime}
                subline={IOS_FINAL_CTA.subline}
                microcopy={IOS_FINAL_CTA.microcopy}
              />
            </AnimateIn>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
