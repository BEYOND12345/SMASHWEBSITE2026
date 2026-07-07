import { useState } from 'react';
import { Monitor, Quote } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { SEO } from '../components/seo';
import { FAQ } from '../components/faq';
import { AnimateIn } from '../components/animate-in';
import { GmailStoryFrame } from '../components/gmail-product-landing/GmailStoryFrame';
import { GmailWorksWithStrap } from '../components/gmail-product-landing/GmailWorksWithStrap';
import { GmailSectionPhotoBg } from '../components/gmail-product-landing/GmailPhotoSection';
import { IosStoryPhotoCover } from '../components/ios-product-landing/IosStoryPhotoCover';
import { MockupFrame } from '../components/phone-showcase';
import { IosSubline } from '../components/ios-product-landing/IosSubline';
import { IosSpecHeadline } from '../components/ios-product-landing/IosCalloutCard';
import { IosHeroPhoneShowcase, IosPhoneShowcase } from '../components/ios-product-landing/IosPhoneShowcase';
import {
  IosAccentStrip,
  IosStorySection,
} from '../components/ios-product-landing/IosStorySection';
import { TestimonialGridSection } from '../components/chrome-landing/chrome-landing-ui';
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
import { iosLanding, iosHeroCopyCellClass, iosHeroDesktopCtaClass, iosHeroGridClass, iosHeroMediaCellClass, iosHeroMobileCtaCellClass, iosHeroMobileCtaWrapClass, iosHeroMobileSublineClass, iosStoryCopyCellClass, iosStoryGridClass, iosStoryMediaCellClass } from '../components/ios-product-landing/ios-landing-tokens';
import {
  IOS_STORY_SEGMENTS,
  IOS_FEATURE_TILES,
  IOS_FEATURES_SECTION,
  IOS_LAUNCH_FEATURES_ENABLED,
  type IosStorySegment,
} from '../data/ios-landing-spec';
import { CHROME_STORE_URL } from '../data/download-urls';
import { mainPages } from '../data/main-pages-seo';
import { GMAIL_DEMO, GMAIL_TESTIMONIALS } from '../data/gmail-landing-spec';
import {
  DualProductCtas,
  IphoneInstallCta,
  ProductLearnMoreCta,
} from '../components/marketing/DualProductCtas';
import { HeroPhotoBackdrop } from '../components/marketing/HeroPhotoBackdrop';

/**
 * Homepage — unified entry for iPhone + Gmail/Chrome/Edge.
 * Composes story rows from the iOS and Chrome product pages with shared CTAs.
 * Photo backdrops in /public/product/home/ are placeholders — swap when new assets land.
 */

/** Expanded for review homepage — covers both surfaces and Chrome + Edge. */
const HOME_PAGE_FAQS = [
  {
    question: 'What is SMASH Invoices?',
    answer:
      'SMASH is two tools for how you work: talk on iPhone on site, or quote from Gmail in Chrome or Edge at your desk. Either way you get a priced, tax-ready quote in under 60 seconds — built from your own catalog, not guessed.',
  },
  {
    question: 'iPhone app or browser extension — which do I need?',
    answer:
      'On site, use the iPhone app — voice is the fastest way to capture a job before you leave. At your desk, install the browser extension in Chrome or Edge — it reads the Gmail thread and builds the quote in your sidebar. Same account, everything synced.',
  },
  {
    question: 'Does it work in Chrome and Edge?',
    answer:
      'Yes. Install from the Chrome Web Store or Microsoft Edge Add-ons — same extension, same Gmail sidebar. Works with Xero and QuickBooks either way.',
  },
  {
    question: 'Is SMASH free to use?',
    answer:
      'Yes. Your first 5 quotes or invoices each month are free on both iPhone and the browser extension — no credit card needed. Paid plans unlock unlimited volume, Xero and QuickBooks, and CSV export.',
  },
  {
    question: 'How fast can I send a quote?',
    answer:
      'Under 60 seconds. Talk for twenty seconds on iPhone, or open the customer email in Gmail — verify line items against your catalog and send. Your client gets a professional PDF with approval and payment options.',
  },
  {
    question: 'Can I send a hands-free invoice after a job?',
    answer:
      'Yes on iPhone. Describe the job out loud, verify priced lines from your catalog, and send before you leave — no typing on site. See our voice to invoice guide for the full workflow.',
  },
  {
    question: 'Does SMASH work for GST and VAT invoices?',
    answer:
      'Yes. Every document is tax-ready with your business number, tax breakdown, and sequential numbers. GST, VAT, and sales tax are calculated per line item for your region.',
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
];

/** Hero backdrop — pool service worker on site with phone. */
const HOME_HERO_PHOTO = {
  src: '/product/home/hero-pool-maintenance.png',
  alt: 'Pool service worker invoicing by voice on his phone beside the pool',
  focus: '58% 42%',
  focusMobile: '50% 18%',
  tint: 58,
  coverScaleFactor: 1.1,
};

const seg = (id: string): IosStorySegment =>
  IOS_STORY_SEGMENTS.find((s) => s.id === id)!;

/** Voice story backdrop — painter on site (placeholder). */
const HOME_VOICE_STORY_PHOTO = {
  src: '/product/home/voice-story-painter.jpg',
  alt: 'Painter sending an invoice on his phone between coats',
  focus: '42% 48%',
  tint: 52,
};

/** Featured testimonial backdrop — cleaner between jobs (placeholder). */
const HOME_TESTIMONIAL_PHOTO = {
  src: '/product/home/cleaner-testimonial.jpg',
  alt: 'Cleaner sending an invoice on her phone between jobs',
  focus: '58% 42%',
  /** Lighter than story rows — keep the phone visible through the tint. */
  tint: 40,
};

/** Chrome inbox row — woman quoting from Gmail at home. */
const HOME_GMAIL_INBOX_PHOTO = {
  src: '/product/home/gmail-inbox-row.png',
  alt: 'Service worker quoting from Gmail on a laptop at home',
  focus: '38% 48%',
  tint: 52,
};

const ctaLime =
  'inline-flex items-center justify-center gap-2 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest px-8 py-4 hover:brightness-95 transition-all whitespace-nowrap';

export function Homepage() {
  const visibleTiles = IOS_FEATURE_TILES.filter((t) => !t.launchOnly || IOS_LAUNCH_FEATURES_ENABLED);

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

      {/* ── HERO — product shot + placeholder field photo ───────────────── */}
      <HomeHeroSection />

      <GmailWorksWithStrap />

      <TestimonialGridSection eyebrow="From people who'd rather be doing the work" items={[...GMAIL_TESTIMONIALS]} />

      {/* Problem — short answer strip, AI-citation friendly */}
      <IosAccentStrip eyebrow="The real reason jobs slip">
        <span className="font-display-italic font-black uppercase tracking-tighter block mb-2 text-[clamp(1.5rem,4vw,2.25rem)] leading-[0.9]">
          The first answer back{' '}
          <span className="text-brand">wins the job.</span>
        </span>
        <IosSubline as="span" className="block font-body text-base sm:text-lg font-medium leading-[1.55]">
          Most jobs aren't lost on price — they're lost to whoever replied first. SMASH gets your
          number back before you've packed up.
        </IosSubline>
      </IosAccentStrip>

      {/* ── Story rows — one idea each, alternating, same as the iOS page ──── */}
      <div id="how-it-works">
        <HomeVoiceStoryRow />
      </div>
      <IosStorySection segment={seg('quote')} dark imageFirst />

      {/* Chrome extension — quoting from the inbox (mirrors story-row layout) */}
      <ChromeInboxRow />

      <IosStorySection segment={seg('pay')} dark imageFirst />

      {/* Capability grid — the rest, handled (same pattern as iOS page) */}
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

      <HomePlumberTestimonial />

      <FAQ
        items={HOME_PAGE_FAQS}
        subheading="Two tools for how you work — voice on iPhone on site, Gmail in Chrome or Edge at your desk."
      />

      {/* Final CTA — both front doors */}
      <section className="bg-brand py-16 md:py-24 relative overflow-hidden border-t border-white/10">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none hidden lg:block" />
        <div className={`${iosLanding.container} relative z-10 text-center`}>
          <AnimateIn direction="up">
            <h2 className={`${iosLanding.heroHeadline} max-w-3xl mx-auto mb-5`}>
              <span className="block text-white">You do the work.</span>
              <span className="block text-accent">SMASH does the rest.</span>
            </h2>
            <IosSubline className={`${iosLanding.subline} mx-auto mb-8 max-w-md`}>
              Quote sent before you leave the driveway, or before you close the email.
            </IosSubline>
            <DualProductCtas className="flex flex-col items-center [&_p]:text-center" />
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/** Hero — centered mobile stack: promise → product UI → CTA. */
function HomeHeroSection() {
  const photoBg = HOME_HERO_PHOTO;

  return (
    <section className="relative bg-brand pt-12 pb-0 md:pt-24 overflow-hidden">
      <HeroPhotoBackdrop photo={photoBg} tint={photoBg.tint} />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none hidden lg:block" />

      <div className={`${iosLanding.container} relative z-10`}>
        <div className={`${iosHeroGridClass} lg:grid-cols-12`}>
          <AnimateIn direction="left" className={`${iosHeroCopyCellClass} lg:col-span-5`}>
            <div className="pb-2 lg:pb-24">
              <p className={`${iosLanding.eyebrow} mb-3 lg:hidden`}>
                Quote sent in under 60 seconds
              </p>

              <h1 className={`${iosLanding.heroHeadline} mb-3 sm:mb-5 text-[clamp(1.875rem,7vw,5rem)] sm:text-[clamp(2.5rem,6.5vw,5rem)]`}>
                <span className="block text-white">Never type</span>
                <span className="block text-accent">an invoice again.</span>
              </h1>

              <IosSubline className={`${iosLanding.subline} mb-0 lg:mb-8 ${iosHeroMobileSublineClass}`}>
                Invoicing for people who hate typing.
              </IosSubline>

              <div className={`${iosHeroDesktopCtaClass} ${iosHeroMobileCtaWrapClass} mt-8`}>
                <DualProductCtas mobileSecondaryAsLink />
              </div>
            </div>
          </AnimateIn>

          <AnimateIn direction="right" className={`${iosHeroMediaCellClass} lg:col-span-7`}>
            <div className="pb-2 sm:pb-16 md:pb-24 w-full">
              <IosHeroPhoneShowcase size="hero" />
            </div>
          </AnimateIn>

          <AnimateIn direction="up" className={iosHeroMobileCtaCellClass}>
            <div className={iosHeroMobileCtaWrapClass}>
              <DualProductCtas mobileSecondaryAsLink />
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

/** Voice story — three-line headline + animated talk timer. */
function HomeVoiceStoryRow() {
  const segment = seg('voice');
  const photoBg = HOME_VOICE_STORY_PHOTO;
  const tint = photoBg.tint ?? 52;

  const copy = (
    <div className="text-left">
      <p className={iosLanding.eyebrow}>{segment.eyebrow}</p>
      <h2 className={iosLanding.sectionHeadline}>
        <span className="block text-white">JUST TALK.</span>
        <span className="block text-white">THAT&apos;S THE</span>
        <span className={`block ${iosLanding.lime}`}>WHOLE JOB.</span>
      </h2>
      <VoiceTalkTimer />
      <div className="mt-8 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <IphoneInstallCta />
        <ProductLearnMoreCta to="/voice-invoicing" label="Find out more" />
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
    <section className="relative bg-brand py-16 md:py-28 overflow-hidden">
      <IosStoryPhotoCover photo={photoBg} variant="fullBleed" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, rgba(15,23,42,${Math.min(tint + 28, 92) / 100}) 0%, rgba(15,23,42,${tint / 100}) 45%, rgba(15,23,42,${Math.max(tint - 28, 12) / 100}) 100%)`,
        }}
      />
      <div className={`${iosLanding.container} relative z-10`}>
        <div className={iosStoryGridClass}>
          <AnimateIn direction="left" className={`${iosStoryCopyCellClass} order-1`}>
            {copy}
          </AnimateIn>
          <AnimateIn direction="right" className={`${iosStoryMediaCellClass} order-2`}>
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

/** Animated 0:00 → 0:20 timer — mirrors the listening callout on the phone mockup. */
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
          style={{ fontSize: 'clamp(2.75rem, 9vw, 4.25rem)' }}
        >
          {display}
        </span>
        <span className="font-display font-black uppercase text-accent text-sm tracking-[0.2em]">REC</span>
      </div>
      <IosSubline className={`${iosLanding.subline} !max-w-sm mt-3`}>of talking. No typing, ever.</IosSubline>
    </motion.div>
  );
}

/** Chrome extension row — extension page step 3 copy + UI over field photo. */
function ChromeInboxRow() {
  const step = GMAIL_DEMO.steps[2];
  const photo = HOME_GMAIL_INBOX_PHOTO;

  return (
    <section className="relative bg-brand py-16 md:py-28 overflow-hidden">
      <GmailSectionPhotoBg photo={photo} tintDirection="left" />
      <div className={`${iosLanding.container} relative z-10`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16">
          <AnimateIn direction="left" className={`${iosStoryCopyCellClass} lg:col-span-5`}>
            <IosSpecHeadline
              eyebrow={step.eyebrow}
              headlineWhite={step.headlineWhite}
              headlineLime={step.headlineLime}
              subline={step.subline}
              dark
              sublineClassName="!max-w-md"
            />
            <div className="mt-8 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaLime}
              >
                <Monitor size={18} strokeWidth={2.5} />
                Add to your browser
              </a>
              <ProductLearnMoreCta to="/chrome-extension" label="Find out more" />
            </div>
          </AnimateIn>

          <AnimateIn direction="right" className={`${iosStoryMediaCellClass} lg:col-span-7`}>
            <div className="relative mx-auto w-full">
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

/** Field photo + featured testimonial — cleaner on site. */
function HomePlumberTestimonial() {
  const tint = HOME_TESTIMONIAL_PHOTO.tint ?? 40;

  return (
    <section className="relative bg-brand py-16 md:py-24 overflow-hidden border-t border-white/10">
      <IosStoryPhotoCover photo={HOME_TESTIMONIAL_PHOTO} variant="fullBleed" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, rgba(15,23,42,${Math.min(tint + 22, 72) / 100}) 0%, rgba(15,23,42,${tint / 100}) 50%, rgba(15,23,42,${Math.max(tint - 24, 8) / 100}) 100%)`,
        }}
      />
      <div className={`${iosLanding.container} relative z-10 max-w-3xl mx-auto text-center`}>
        <AnimateIn direction="up">
          <Quote size={28} className="text-white/30 mx-auto mb-4" strokeWidth={2} aria-hidden />
          <blockquote>
            <p className="font-display-italic font-black italic text-white text-[clamp(1.35rem,4vw,2.5rem)] leading-[1.15] tracking-tight mb-5">
              &ldquo;Too easy to use. I just talk, and it&apos;s done.&rdquo;
            </p>
            <footer className="font-body text-white/70 text-sm font-semibold">
              Priya K. · Cleaner · Melbourne
            </footer>
          </blockquote>
        </AnimateIn>
      </div>
    </section>
  );
}
