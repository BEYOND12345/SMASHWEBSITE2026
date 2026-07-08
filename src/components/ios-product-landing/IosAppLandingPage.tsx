import { useEffect, useState } from 'react';
import { Mic, ChevronDown } from 'lucide-react';
import { trackIosRemarketingPageView } from '../../lib/analytics';
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
import { IosFinalCta, IosDesktopTeaser, IosHeroCta, IosMediaSlot } from './IosCtaBlocks';
import { iosLanding, iosHeroCopyCellClass, iosHeroDesktopCtaClass, iosHeroGridClass, iosHeroMediaCellClass, iosHeroMobileCtaCellClass, iosHeroMobileCtaWrapClass, iosHeroMobileSublineClass, iosStoryCopyCellClass, iosStoryMediaCellClass } from './ios-landing-tokens';
import { HeroPhotoBackdrop } from '../marketing/HeroPhotoBackdrop';
import { BrandPhotoBand, BrandSolidBand } from '../marketing/BrandPhotoBand';
import { VALUE_TESTIMONIALS, FEATURED_VALUE_TESTIMONIAL } from '../../data/product-testimonials';
import { APP_STORE_URL } from '../../data/download-urls';
import { TestimonialGridSection } from '../chrome-landing/chrome-landing-ui';
import { IosWorksWithStrap } from './IosWorksWithStrap';

const IOS_HERO_PHOTO = {
  src: '/product/ios/photos/voice.jpg',
  srcMobile: '/product/ios/photos/voice-mobile.jpg',
  alt: 'Pool technician speaking a job into SMASH by voice beside the pool',
  focus: '62% 42%',
  focusMobile: '50% 18%',
  tint: 52,
};

const IOS_TESTIMONIALS_PHOTO = {
  src: '/product/home/cleaner-testimonial.jpg',
  alt: 'Cleaner sending an invoice on her phone between jobs',
  focus: '58% 42%',
  tint: 40,
};

const IOS_FEATURED_PHOTO = {
  src: '/product/ios/photos/send.jpg',
  srcMobile: '/product/ios/photos/send-mobile.jpg',
  alt: 'Tradie sending a quote by voice from the driver’s seat',
  focus: '68% 38%',
  tint: 52,
};

const IOS_FINAL_PHOTO = IOS_HERO_PHOTO;

const voicePage = mainPages.voiceInvoicing;

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button type="button" onClick={onClick} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="font-display-italic font-black text-white uppercase tracking-tighter leading-[0.88] text-base">{q}</span>
        <ChevronDown size={18} className={`shrink-0 text-white/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="font-body text-sm text-white/70 font-medium leading-[1.5] pb-5">{a}</p>}
    </div>
  );
}

export function IosAppLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const visibleTiles = IOS_FEATURE_TILES.filter((t) => !t.launchOnly || IOS_LAUNCH_FEATURES_ENABLED);

  useEffect(() => {
    trackIosRemarketingPageView();
  }, []);

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

        {/* HERO — photo band (matches homepage rhythm) */}
        <section className="relative bg-brand pt-12 pb-0 md:pt-24 overflow-hidden">
          <HeroPhotoBackdrop photo={IOS_HERO_PHOTO} tint={IOS_HERO_PHOTO.tint} />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none hidden lg:block" />

          <div className={`${iosLanding.container} relative z-10`}>
            <div className={iosHeroGridClass}>
              <AnimateIn direction="left" className={`${iosHeroCopyCellClass} lg:col-span-5`}>
                <div className="pb-2 lg:pb-24">
                  <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] mb-5">
                    <Mic size={13} className="text-accent" strokeWidth={2.5} />
                    <span className="text-accent font-black text-[11px] uppercase tracking-[0.2em]">SMASH for iPhone</span>
                  </div>

                  <h1 className={`${iosLanding.heroHeadline} mb-3 sm:mb-5 text-[clamp(1.875rem,7vw,5rem)] sm:text-[clamp(2.5rem,6.5vw,5rem)]`}>
                    <span className="block text-white">{IOS_HERO.headlineWhite}</span>
                    <span className="block text-accent">{IOS_HERO.headlineLime}</span>
                  </h1>

                  <IosSubline className={`${iosLanding.subline} mb-0 lg:mb-8 max-w-md ${iosHeroMobileSublineClass}`}>
                    {IOS_HERO.byline}
                  </IosSubline>

                  <div className={`${iosHeroDesktopCtaClass} ${iosHeroMobileCtaWrapClass} mt-8 mb-0 sm:mb-8`}>
                    <IosHeroCta />
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

        <IosWorksWithStrap />

        <IosIntegrationStrap />

        <BrandPhotoBand photo={IOS_TESTIMONIALS_PHOTO} scrim="vertical" className="py-14 md:py-20">
          <TestimonialGridSection
            eyebrow="From people on the tools"
            items={VALUE_TESTIMONIALS}
            className="!border-0 py-0 md:py-0 bg-transparent"
          />
        </BrandPhotoBand>

        <IosAccentStrip eyebrow={IOS_PROBLEM.eyebrow}>
          <span className="font-display-italic font-black uppercase tracking-tighter block mb-3 text-[clamp(1.35rem,5vw,2.25rem)] leading-[0.95]">
            <span className="block">{IOS_PROBLEM.headlineWhite}</span>
            <span className="block text-accent">{IOS_PROBLEM.headlineLime}</span>
          </span>
          <IosSubline
            as="span"
            className="block font-body text-sm sm:text-base font-medium leading-[1.5] text-white/75 max-w-[22rem] sm:max-w-md mx-auto"
          >
            {IOS_PROBLEM.subline}
          </IosSubline>
        </IosAccentStrip>

        {IOS_STORY_SEGMENTS.map((segment, index) => (
          <div key={segment.id} id={index === 0 ? 'how-it-works' : undefined}>
            <IosStorySection
              segment={segment}
              imageFirst={segment.imageFirst}
              photoBgEnabled={index % 2 === 0}
            />
          </div>
        ))}

        <IosMediaSlot type="story-demo" />

        <BrandSolidBand>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-20">
            <AnimateIn direction="left" className={iosStoryCopyCellClass}>
              <IosSpecHeadline
                eyebrow={IOS_DESKTOP_BAND.eyebrow}
                headlineWhite={IOS_DESKTOP_BAND.headlineWhite}
                headlineLime={IOS_DESKTOP_BAND.headlineLime}
              />
              <IosSubline className={`${iosLanding.body} mt-6`}>{IOS_DESKTOP_BAND.body}</IosSubline>
            </AnimateIn>
            <AnimateIn direction="right" className={iosStoryMediaCellClass}>
              <IosDesktopTeaser />
            </AnimateIn>
          </div>
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
        </BrandSolidBand>

        <BrandPhotoBand photo={IOS_FEATURED_PHOTO} scrim="vertical">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateIn direction="up">
              <blockquote>
                <p className="font-display-italic font-black italic text-white text-[clamp(1.35rem,4vw,2.5rem)] leading-[1.15] tracking-tight mb-5">
                  &ldquo;{FEATURED_VALUE_TESTIMONIAL.quote}&rdquo;
                </p>
                <footer className="font-body text-white/70 text-sm font-semibold">
                  {FEATURED_VALUE_TESTIMONIAL.name} · {FEATURED_VALUE_TESTIMONIAL.trade} ·{' '}
                  {FEATURED_VALUE_TESTIMONIAL.city}
                </footer>
              </blockquote>
            </AnimateIn>
          </div>
        </BrandPhotoBand>

        <BrandSolidBand>
          <div className="max-w-3xl mx-auto">
            <AnimateIn direction="up">
              <IosSpecHeadline
                eyebrow="Questions"
                headlineWhite="COMMON "
                headlineLime="QUESTIONS."
                dark
                className="mb-10 text-center lg:text-left"
              />
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-4 sm:px-8 py-2">
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
        </BrandSolidBand>

        <BrandPhotoBand photo={IOS_FINAL_PHOTO} scrim="vertical" className="py-16 md:py-24">
          <div className={`${iosLanding.container} text-center`}>
            <AnimateIn direction="up">
              <IosFinalCta
                headlineWhite={IOS_FINAL_CTA.headlineWhite}
                headlineLime={IOS_FINAL_CTA.headlineLime}
                subline={IOS_FINAL_CTA.subline}
                microcopy={IOS_FINAL_CTA.microcopy}
              />
            </AnimateIn>
          </div>
        </BrandPhotoBand>

        <Footer />
      </div>
    </>
  );
}
