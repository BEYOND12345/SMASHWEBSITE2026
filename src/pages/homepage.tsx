import { useState } from 'react';
import { Monitor } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { SEO } from '../components/seo';
import { FAQ } from '../components/faq';
import { AnimateIn } from '../components/animate-in';
import { GmailStoryFrame } from '../components/gmail-product-landing/GmailStoryFrame';
import { GmailSectionPhotoBg } from '../components/gmail-product-landing/GmailPhotoSection';
import { IosStoryPhotoCover } from '../components/ios-product-landing/IosStoryPhotoCover';
import { MockupFrame } from '../components/phone-showcase';
import { IosSubline } from '../components/ios-product-landing/IosSubline';
import { IosSpecHeadline } from '../components/ios-product-landing/IosCalloutCard';
import { IosPhoneShowcase } from '../components/ios-product-landing/IosPhoneShowcase';
import { IosHeroVerticalVideo } from '../components/ios-product-landing/IosHeroVerticalVideo';
import { IosStorySection } from '../components/ios-product-landing/IosStorySection';
import { IosHeroTrustLogos } from '../components/ios-product-landing/IosHeroTrustLogos';
import { TestimonialSliderSection } from '../components/ios-product-landing/TestimonialSliderSection';
import { EmailCapturePopup } from '../components/EmailCapturePopup';
import { useEmailCapturePopup } from '../hooks/useEmailCapturePopup';
import { TryItNowButton, VoiceQuoteDemo } from '../components/voice-quote-demo/VoiceQuoteDemo';
import { isVoiceQuoteDemoPublic } from '../lib/feature-flags';
import {
  brandPhotoScrim,
  storyStackedScrimCopyTop,
} from '../components/ios-product-landing/photo-scrim';
import {
  StructuredData,
  organizationSchema,
  webApplicationSchema,
  websiteSchema,
} from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import {
  organizationSchema as aiOrgSchema,
  websiteSchema as aiWebsiteSchema,
  softwareApplicationSchema,
} from '../data/schema-data';
import { hreflangAlternates } from '../data/country-data';
import {
  iosLanding,
  iosHeroCopyCellClass,
  iosHeroDesktopCtaClass,
  iosHeroGridClass,
  iosHeroMediaCellClass,
  iosHeroMobileCtaCellClass,
  iosHeroMobileCtaWrapClass,
  iosStoryCopyCellClass,
  iosStoryGridClass,
  iosStoryMediaCellClass,
} from '../components/ios-product-landing/ios-landing-tokens';
import {
  IOS_STORY_SEGMENTS,
  IOS_FEATURE_TILES,
  IOS_FEATURES_SECTION,
  IOS_LAUNCH_FEATURES_ENABLED,
  IOS_AD_STORY_PHOTO_BG,
  IOS_HERO,
  type IosStorySegment,
  type StoryPhotoBg,
} from '../data/ios-landing-spec';
import { CHROME_STORE_URL } from '../data/download-urls';
import { mainPages } from '../data/main-pages-seo';
import { GMAIL_DEMO } from '../data/gmail-landing-spec';
import { VALUE_TESTIMONIALS } from '../data/product-testimonials';
import {
  DualProductCtas,
  IphoneInstallCta,
  ProductLearnMoreCta,
} from '../components/marketing/DualProductCtas';
import { HeroPhotoBackdrop } from '../components/marketing/HeroPhotoBackdrop';
import { BrandPhotoBand, BrandSolidBand } from '../components/marketing/BrandPhotoBand';

/**
 * Homepage — dual-product entry (iPhone + Gmail).
 * Mobile composition mirrors the iOS ad landing: short scroll, readable type over navy,
 * photography in phone/media bands, one conversion path per section.
 */

const HOME_PAGE_FAQS = [
  {
    question: 'Is SMASH free to use?',
    answer:
      'Yes. Your first 5 quotes or invoices each month are free on both iPhone and the browser extension — no credit card needed. Paid plans unlock unlimited volume, Xero and QuickBooks, and CSV export.',
  },
  {
    question: 'iPhone app or browser extension — which do I need?',
    answer:
      'On site, use the iPhone app — voice is the fastest way to capture a job before you leave. At your desk, install the browser extension in Chrome or Edge — it reads the Gmail thread and builds the quote in your sidebar. Same account, everything synced.',
  },
  {
    question: 'How fast can I send a quote?',
    answer:
      'Under 60 seconds. Talk for twenty seconds on iPhone, or open the customer email in Gmail — verify line items against your catalog and send. Your client gets a professional PDF with approval and payment options.',
  },
  {
    question: 'Does it work with Xero and QuickBooks?',
    answer:
      'Yes. When the quote or invoice is ready, push it to Xero or QuickBooks in one click. Your totals and tax region are handled automatically.',
  },
  {
    question: 'Do my customers need an app?',
    answer:
      'No. They get a professional link in your message or email reply. They view, approve, and pay from their phone browser.',
  },
  {
    question: 'Does SMASH work for GST and VAT invoices?',
    answer:
      'Yes. Every document is tax-ready with your business number, tax breakdown, and sequential numbers. GST, VAT, and sales tax are calculated per line item for your region.',
  },
];

const HOME_HERO_PHOTO: StoryPhotoBg = {
  src: '/product/home/hero-pool-maintenance.png',
  alt: 'Pool service worker invoicing by voice on his phone beside the pool',
  focus: '58% 42%',
  focusMobile: '50% 18%',
  tint: 58,
  coverScaleFactor: 1.1,
  coverScaleFactorMobile: 0.94,
};

const seg = (id: string): IosStorySegment =>
  IOS_STORY_SEGMENTS.find((s) => s.id === id)!;

const HOME_VOICE_STORY_PHOTO: StoryPhotoBg = {
  src: '/product/home/voice-story-painter.jpg',
  alt: 'Painter sending an invoice on his phone between coats',
  focus: '42% 48%',
  focusMobile: '48% 28%',
  coverScaleFactorMobile: 0.94,
  tint: 52,
};

const HOME_GMAIL_INBOX_PHOTO: StoryPhotoBg = {
  src: '/product/home/gmail-inbox-row.png',
  alt: 'Service worker quoting from Gmail on a laptop at home',
  focus: '38% 48%',
  focusMobile: '42% 30%',
  coverScaleFactorMobile: 0.94,
  tint: 52,
};

const HOME_FEATURES_PHOTO: StoryPhotoBg = {
  src: '/product/home/hero-tradie-car.jpg',
  alt: 'Tradie in work gear beside a van on site',
  focus: '55% 40%',
  focusMobile: '52% 32%',
  coverScaleFactorMobile: 0.9,
  tint: 54,
};

const HOME_FINAL_PHOTO = HOME_HERO_PHOTO;

const ctaLime =
  'inline-flex items-center justify-center gap-2 min-h-[48px] rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest px-8 py-4 hover:brightness-95 active:scale-[0.98] transition-all whitespace-nowrap touch-manipulation';

export function Homepage() {
  const visibleTiles = IOS_FEATURE_TILES.filter((t) => !t.launchOnly || IOS_LAUNCH_FEATURES_ENABLED).slice(0, 3);
  const { open: offerOpen, openPopup: openOfferPopup, closePopup: closeOfferPopup } =
    useEmailCapturePopup();
  const demoEnabled = isVoiceQuoteDemoPublic();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className={iosLanding.page}>
      <SEO
        title={mainPages.home.title}
        description={mainPages.home.description}
        ogTitle={mainPages.home.title}
        ogDescription={mainPages.home.description}
        ogUrl="https://smashinvoices.com/"
        twitterTitle={mainPages.home.title}
        twitterDescription={mainPages.home.description}
        ogImage="https://smashinvoices.com/hero_image.png"
        twitterImage="https://smashinvoices.com/hero_image.png"
        canonical="https://smashinvoices.com/"
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={organizationSchema} />
      <StructuredData data={webApplicationSchema} />
      <StructuredData data={websiteSchema} />
      <SchemaMarkup schemas={[aiOrgSchema, aiWebsiteSchema, softwareApplicationSchema]} />

      <Nav />

      <HomeHeroSection
        onOpenOffer={openOfferPopup}
        onTryIt={demoEnabled ? () => setDemoOpen(true) : undefined}
      />

      {demoEnabled && <VoiceQuoteDemo open={demoOpen} onOpenChange={setDemoOpen} showSection />}

      <BrandSolidBand compact className="!py-6 md:!py-8 border-t border-white/[0.06]">
        <TestimonialSliderSection
          eyebrow="From people who'd rather be doing the work"
          items={VALUE_TESTIMONIALS}
        />
      </BrandSolidBand>

      <div id="how-it-works" className="scroll-mt-24">
        <HomeVoiceStoryRow />
      </div>

      <IosStorySection
        segment={seg('quote')}
        imageFirst
        photoBgEnabled
        photoOverride={IOS_AD_STORY_PHOTO_BG.quote}
      />

      <ChromeInboxRow />

      <IosStorySection
        segment={seg('pay')}
        imageFirst
        photoBgEnabled
        photoOverride={IOS_AD_STORY_PHOTO_BG.pay}
      />

      <BrandPhotoBand photo={HOME_FEATURES_PHOTO} compact className="!py-12 md:!py-16">
        <AnimateIn direction="up">
          <IosSpecHeadline
            centered
            className="mb-8"
            eyebrow={IOS_FEATURES_SECTION.eyebrow}
            headlineWhite={IOS_FEATURES_SECTION.headlineWhite}
            headlineLime={IOS_FEATURES_SECTION.headlineLime}
            dark
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {visibleTiles.map((tile) => (
              <div key={tile.title} className="bg-white/[0.05] border border-white/10 rounded-2xl px-4 py-4">
                <h3 className="font-display-italic font-black uppercase text-white text-sm tracking-tight mb-1.5">
                  {tile.title}
                </h3>
                <p className="font-body text-sm text-white/60 font-medium leading-[1.45]">{tile.outcome}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </BrandPhotoBand>

      <FAQ
        items={HOME_PAGE_FAQS}
        variant="brand"
        defaultOpenIndex={0}
        subheading="Voice on iPhone on site. Gmail in Chrome or Edge at your desk."
      />

      <BrandPhotoBand photo={HOME_FINAL_PHOTO} scrim="vertical" className="py-14 md:py-20">
        <div className="text-center">
          <AnimateIn direction="up">
            <h2 className={`${iosLanding.heroHeadline} max-w-3xl mx-auto mb-3 sm:mb-4`}>
              <span className="block text-white">You do the work.</span>
              <span className="block text-accent">SMASH does the rest.</span>
            </h2>
            <IosSubline className={`${iosLanding.subline} mx-auto mb-6 max-w-md`}>
              Quote sent before you leave the driveway, or before you close the email.
            </IosSubline>
            <DualProductCtas
              className="flex flex-col items-center [&_p]:text-center"
              mobileSecondaryAsLink
              microcopy="Five free quotes · No card needed"
            />
          </AnimateIn>
        </div>
      </BrandPhotoBand>

      <Footer />

      <EmailCapturePopup
        open={offerOpen}
        onClose={closeOfferPopup}
        source="homepage_popup"
      />
    </div>
  );
}

function HomeHeroCtas({
  onTryIt,
  onOpenOffer,
  centered = false,
}: {
  onTryIt?: () => void;
  onOpenOffer: () => void;
  centered?: boolean;
}) {
  return (
    <>
      {onTryIt ? (
        <div className={`flex flex-col sm:flex-row gap-3 items-stretch sm:items-center${centered ? ' justify-center' : ''}`}>
          <IphoneInstallCta />
          <TryItNowButton onClick={onTryIt} />
        </div>
      ) : (
        <DualProductCtas
          mobileSecondaryAsLink
          secondary={{ kind: 'anchor', href: '#how-it-works', label: 'See how it works' }}
          showMicrocopy={false}
        />
      )}
      <p className={`font-body text-sm text-white/55 font-medium mt-3${centered ? ' text-center' : ''}`}>
        Five free quotes · No card needed
      </p>
      <IosHeroTrustLogos className={`mt-5${centered ? ' items-center' : ''}`} />
      <button
        type="button"
        onClick={onOpenOffer}
        className={`mt-3 inline-flex items-center min-h-[44px] text-sm font-semibold text-white/55 hover:text-accent transition-colors underline underline-offset-2 touch-manipulation${centered ? ' justify-center w-full' : ''}`}
      >
        Not ready? Get a free month instead
      </button>
    </>
  );
}

function HomeHeroSection({
  onOpenOffer,
  onTryIt,
}: {
  onOpenOffer: () => void;
  onTryIt?: () => void;
}) {
  const photoBg = HOME_HERO_PHOTO;

  return (
    <section className="relative bg-brand pt-12 pb-12 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 overflow-hidden">
      <HeroPhotoBackdrop photo={photoBg} tint={photoBg.tint} />

      <div className={`${iosLanding.container} relative z-10`}>
        <div className={iosHeroGridClass}>
          <AnimateIn direction="left" directionMobile="up" className={iosHeroCopyCellClass}>
            <div className="lg:max-w-[32rem]">
              <h1 className={`${iosLanding.heroHeadline} mb-0 text-[clamp(1.875rem,7vw,4.25rem)] sm:text-[clamp(2.5rem,5.5vw,4.5rem)]`}>
                {IOS_HERO.headlineLines.map((line) => (
                  <span key={line} className="block text-white">
                    {line}
                  </span>
                ))}
              </h1>

              <div className={`${iosHeroDesktopCtaClass} ${iosHeroMobileCtaWrapClass} mt-7 sm:mt-8`}>
                <HomeHeroCtas onTryIt={onTryIt} onOpenOffer={onOpenOffer} />
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" directionMobile="up" className={iosHeroMediaCellClass}>
            <IosHeroVerticalVideo caption="Never type an invoice again." />
          </AnimateIn>

          <div className={iosHeroMobileCtaCellClass}>
            <div className={iosHeroMobileCtaWrapClass}>
              <HomeHeroCtas onTryIt={onTryIt} onOpenOffer={onOpenOffer} centered />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeVoiceStoryRow() {
  const segment = seg('voice');
  const photoBg = HOME_VOICE_STORY_PHOTO;
  const tint = photoBg.tint ?? 52;

  const copy = (
    <div className="text-left">
      <p className={iosLanding.storyEyebrow}>{segment.eyebrow}</p>
      <h2 className={`${iosLanding.storyHeadline} mt-3`}>
        <span className="block text-white">JUST TALK.</span>
        <span className={`block ${iosLanding.lime}`}>THAT&apos;S THE WHOLE JOB.</span>
      </h2>
      <VoiceTalkTimer />
      <div className="mt-6">
        <ProductLearnMoreCta to="/voice-invoicing" label="See SMASH for iPhone" />
      </div>
    </div>
  );

  const media = (
    <MockupFrame>
      <div className="w-full max-w-[min(100%,385px)] mx-auto">
        <IosPhoneShowcase screen="voice" calloutId="voice" size="story" surface="dark" />
      </div>
    </MockupFrame>
  );

  return (
    <section className="relative bg-brand py-16 md:py-28 overflow-hidden [content-visibility:auto] [contain-intrinsic-size:auto_720px]">
      <div className="absolute inset-0 hidden lg:block overflow-hidden">
        <IosStoryPhotoCover photo={photoBg} variant="fullBleed" />
        <div aria-hidden className="absolute inset-0 z-[1]" style={brandPhotoScrim(tint, 'horizontal')} />
      </div>

      <div className="absolute inset-0 lg:hidden overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-[min(54vh,440px)]">
          <IosStoryPhotoCover photo={photoBg} variant="fullBleed" preferStackedFocus />
        </div>
        <div aria-hidden className="absolute inset-0 z-[1]" style={storyStackedScrimCopyTop(tint)} />
      </div>

      <div className={`${iosLanding.container} relative z-10`}>
        <div className={iosStoryGridClass}>
          <AnimateIn direction="left" directionMobile="up" className={`${iosStoryCopyCellClass} order-1`}>
            {copy}
          </AnimateIn>
          <AnimateIn direction="right" directionMobile="up" className={`${iosStoryMediaCellClass} order-2`}>
            {media}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

function useTalkTimerCountUp(targetSeconds: number, durationMs = 1800) {
  const [seconds, setSeconds] = useState(0);
  const reduce = useReducedMotion();

  const start = () => {
    if (reduce) {
      setSeconds(targetSeconds);
      return;
    }
    const startedAt = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - startedAt) / durationMs, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setSeconds(Math.round(targetSeconds * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return { seconds, start };
}

function VoiceTalkTimer() {
  const reduce = useReducedMotion();
  const { seconds, start } = useTalkTimerCountUp(20);
  const display = `0:${seconds.toString().padStart(2, '0')}`;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      onViewportEnter={() => start()}
      transition={{ duration: 0.35 }}
      className="mt-5 sm:mt-6"
    >
      <div className="flex items-baseline gap-3">
        <span
          className="font-display-italic font-black italic text-white leading-none tracking-tight tabular-nums"
          style={{ fontSize: 'clamp(2.25rem, 7vw, 3.5rem)' }}
        >
          {display}
        </span>
        <span className="font-display font-black uppercase text-accent text-sm tracking-[0.2em]">REC</span>
      </div>
      <IosSubline className={`${iosLanding.storySubline} mt-3`}>of talking. No typing, ever.</IosSubline>
    </motion.div>
  );
}

function ChromeInboxRow() {
  const step = GMAIL_DEMO.steps[2];
  const photo = HOME_GMAIL_INBOX_PHOTO;

  return (
    <section className="relative bg-brand py-16 md:py-28 overflow-hidden [content-visibility:auto] [contain-intrinsic-size:auto_720px]">
      <GmailSectionPhotoBg photo={photo} tintDirection="left" />
      <div className={`${iosLanding.container} relative z-10`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16">
          <AnimateIn direction="left" directionMobile="up" className={`${iosStoryCopyCellClass} lg:col-span-5`}>
            <IosSpecHeadline
              variant="story"
              eyebrow={step.eyebrow}
              headlineWhite={step.headlineWhite}
              headlineLime={step.headlineLime}
              subline={step.subline}
              dark
              sublineClassName="!max-w-md"
            />
            <div className="mt-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaLime}
              >
                <Monitor size={18} strokeWidth={2.5} />
                Add to your browser
              </a>
              <ProductLearnMoreCta to="/chrome-extension" label="See SMASH for Gmail" />
            </div>
          </AnimateIn>

          <AnimateIn direction="right" directionMobile="up" className={`${iosStoryMediaCellClass} lg:col-span-7`}>
            <div className="relative mx-auto w-full max-w-[min(100%,560px)] lg:max-w-none">
              <div className="relative rounded-[22px] overflow-hidden bg-white ring-1 ring-black/[0.06] shadow-[0_40px_110px_-30px_rgba(15,23,42,0.45)]">
                <GmailStoryFrame frame={step.frame} crop fill />
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
