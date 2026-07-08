import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
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
  IOS_FINAL_CTA,
  IOS_HERO,
  IOS_PRICING_FOOTNOTE,
  IOS_AD_LANDING_PHOTOS,
  IOS_AD_STORY_PHOTO_BG,
  iosAdLandingStories,
} from '../../data/ios-landing-spec';
import { mainPages } from '../../data/main-pages-seo';
import { IosHeroPhoneShowcase } from './IosPhoneShowcase';
import { IosStorySection } from './IosStorySection';
import { IosFinalCta, IosHeroCta, IosMediaSlot } from './IosCtaBlocks';
import { IosPricingFootnote } from './IosPricingFootnote';
import {
  iosLanding,
  iosHeroCopyCellClass,
  iosHeroDesktopCtaClass,
  iosHeroGridClass,
  iosHeroMediaCellClass,
  iosHeroMobileCtaCellClass,
  iosHeroMobileCtaWrapClass,
  iosHeroMobileSublineClass,
} from './ios-landing-tokens';
import { HeroPhotoBackdrop } from '../marketing/HeroPhotoBackdrop';
import { BrandPhotoBand, BrandSolidBand } from '../marketing/BrandPhotoBand';
import { VALUE_TESTIMONIALS } from '../../data/product-testimonials';
import { APP_STORE_URL } from '../../data/download-urls';
import { TestimonialGridSection } from '../chrome-landing/chrome-landing-ui';
import { IosSpecHeadline } from './IosCalloutCard';

const voicePage = mainPages.voiceInvoicing;
const adStories = iosAdLandingStories();

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between py-5 min-h-[56px] text-left gap-4 touch-manipulation"
      >
        <span className="font-display-italic font-black text-white uppercase tracking-tighter leading-[0.88] text-base pr-2">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-white/40 transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="font-body text-sm text-white/70 font-medium leading-[1.5] pb-5">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function IosAppLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
          steps: adStories.map((segment) => ({
            name: segment.eyebrow,
            text: segment.subline,
          })),
        })}
      />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <div className={iosLanding.page}>
        <Nav ctaUrl={APP_STORE_URL} ctaLabel="Start Free" />

        {/* 1. HERO — one promise, one CTA, trust inline */}
        <section className="relative bg-brand pt-12 pb-10 md:pt-24 md:pb-16 overflow-hidden">
          <HeroPhotoBackdrop photo={IOS_AD_LANDING_PHOTOS.hero} tint={IOS_AD_LANDING_PHOTOS.hero.tint} />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none hidden lg:block" />

          <div className={`${iosLanding.container} relative z-10`}>
            <div className={iosHeroGridClass}>
              <AnimateIn direction="left" directionMobile="up" className={`${iosHeroCopyCellClass} lg:col-span-5`}>
                <div className="pb-2 lg:pb-8">
                  <h1 className={`${iosLanding.heroHeadline} mb-4 sm:mb-5 text-[clamp(1.875rem,7vw,5rem)] sm:text-[clamp(2.5rem,6.5vw,5rem)]`}>
                    <span className="block text-white">{IOS_HERO.headlineWhite}</span>
                    <span className="block text-accent">{IOS_HERO.headlineLime}</span>
                  </h1>

                  <p
                    className={`font-body text-base sm:text-lg font-semibold text-white/90 mb-0 max-w-md leading-snug ${iosHeroMobileSublineClass}`}
                  >
                    {IOS_HERO.pricingOffer.prefix}
                    <span className="text-accent">{IOS_HERO.pricingOffer.highlight}</span>
                    {IOS_HERO.pricingOffer.suffix}
                  </p>

                  <div className={`${iosHeroDesktopCtaClass} ${iosHeroMobileCtaWrapClass} mt-8`}>
                    <IosHeroCta />
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn direction="right" directionMobile="up" className={`${iosHeroMediaCellClass} lg:col-span-7`}>
                <div className="w-full max-w-[min(100%,320px)] sm:max-w-[min(100%,385px)] lg:max-w-none mx-auto lg:mx-0">
                  <IosMediaSlot type="hero-video" />
                  <IosMediaSlot type="hero-gif" />
                  <IosHeroPhoneShowcase />
                </div>
              </AnimateIn>

              <div className={iosHeroMobileCtaCellClass}>
                <div className={iosHeroMobileCtaWrapClass}>
                  <IosHeroCta />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SOCIAL PROOF — before the product tour */}
        <BrandPhotoBand photo={IOS_AD_LANDING_PHOTOS.testimonials} scrim="vertical" className="py-14 md:py-20">
          <TestimonialGridSection
            eyebrow="From people on the tools"
            items={VALUE_TESTIMONIALS}
            className="!border-0 py-0 md:py-0 bg-transparent"
          />
        </BrandPhotoBand>

        {/* 3. HOW IT WORKS — four steps only */}
        {adStories.map((segment, index) => (
          <div
            key={segment.id}
            id={index === 0 ? 'how-it-works' : undefined}
            className={index === 0 ? 'scroll-mt-24' : undefined}
          >
            <IosStorySection
              segment={segment}
              imageFirst={segment.imageFirst}
              photoBgEnabled
              photoOverride={IOS_AD_STORY_PHOTO_BG[segment.screen]}
              priorityLoad={index < 2}
            />
          </div>
        ))}

        {/* 4. PRICING BRIDGE — free tier + link, no tier strap */}
        <IosPricingFootnote copy={IOS_PRICING_FOOTNOTE} />

        {/* 5. FAQ */}
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
              <p className="font-body text-sm text-white/45 text-center mt-6">
                Paid plans from $15/month AUD.{' '}
                <Link to="/pricing" className="text-accent font-semibold underline underline-offset-2 hover:text-white transition-colors">
                  Compare Starter, Pro &amp; Unlimited
                </Link>
              </p>
            </AnimateIn>
          </div>
        </BrandSolidBand>

        {/* 6. FINAL CTA */}
        <BrandPhotoBand photo={IOS_AD_LANDING_PHOTOS.final} scrim="vertical" className="py-16 md:py-24">
          <div className={`${iosLanding.container} text-center`}>
            <AnimateIn direction="up">
              <IosFinalCta
                headlineWhite={IOS_FINAL_CTA.headlineWhite}
                headlineLime={IOS_FINAL_CTA.headlineLime}
                subline={IOS_FINAL_CTA.subline}
                microcopy={IOS_FINAL_CTA.microcopy}
                showBrowserCta={false}
                compact
              />
            </AnimateIn>
          </div>
        </BrandPhotoBand>

        <Footer />
      </div>
    </>
  );
}
