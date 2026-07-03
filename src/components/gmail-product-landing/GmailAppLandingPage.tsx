import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../seo';
import { Nav } from '../nav';
import { Footer } from '../footer';
import { AnimateIn } from '../animate-in';
import { StructuredData, createBreadcrumbSchema, createFAQSchema } from '../structured-data';
import { SchemaMarkup } from '../SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../../data/schema-data';
import { hreflangAlternates } from '../../data/country-data';
import {
  GMAIL_ALSO_DOES,
  GMAIL_CONTRAST,
  GMAIL_DEMO,
  GMAIL_FAQS,
  GMAIL_FINAL_CTA,
  GMAIL_HERO,
  GMAIL_LANDING_SEO,
  GMAIL_SECTION_PHOTO_BG,
  GMAIL_SUPPLIER_STORY,
  GMAIL_TESTIMONIALS,
  GMAIL_WHO,
} from '../../data/gmail-landing-spec';
import { iosLanding } from '../ios-product-landing/ios-landing-tokens';
import { IosSpecHeadline } from '../ios-product-landing/IosCalloutCard';
import { IosSubline } from '../ios-product-landing/IosSubline';
import { TestimonialGridSection } from '../chrome-landing/chrome-landing-ui';
import { CHROME_STORE_URL, GMAIL_LANDING_CTA, HERO_GIF_B2B } from '../../data/download-urls';
import { GmailFinalInstallCtas, GmailHeroInstallCtas } from './GmailInstallCtas';
import { GmailSectionPhotoBg } from './GmailPhotoSection';
import { GmailWorksWithStrap } from './GmailWorksWithStrap';
import {
  GmailBothSidesStrap,
  GmailContrastStrip,
  GmailStoryFlow,
} from './GmailStorySection';
import { HeroGif } from '../gmail-sidebar-mockups';

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

export function GmailAppLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title={GMAIL_LANDING_SEO.title}
        description={GMAIL_LANDING_SEO.description}
        ogTitle={GMAIL_LANDING_SEO.ogTitle}
        ogDescription={GMAIL_LANDING_SEO.ogDescription}
        ogUrl="https://smashinvoices.com/chrome-extension"
        canonical="https://smashinvoices.com/chrome-extension"
        hreflangs={hreflangAlternates}
      />

      <StructuredData
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://smashinvoices.com/' },
          { name: 'SMASH for Gmail & Edge', url: 'https://smashinvoices.com/chrome-extension' },
        ])}
      />
      <StructuredData data={createFAQSchema(GMAIL_FAQS.map((f) => ({ question: f.q, answer: f.a })))} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <div className={iosLanding.page}>
        <Nav ctaUrl={CHROME_STORE_URL} ctaLabel={GMAIL_LANDING_CTA} />

        {/* Hero — navy + photo only here */}
        <section className="bg-brand pt-16 pb-0 md:pt-24 overflow-hidden relative">
          {GMAIL_SECTION_PHOTO_BG.hero && <GmailSectionPhotoBg photo={GMAIL_SECTION_PHOTO_BG.hero} />}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none hidden lg:block z-[1]" />

          <div className={`${iosLanding.container} relative z-10`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <AnimateIn direction="left" className="lg:col-span-5">
                <div className="pb-16 md:pb-24">
                  <h1 className={`${iosLanding.heroHeadline} mb-5`}>
                    <span className="block text-white">{GMAIL_HERO.headlineWhite}</span>
                    <span className="block text-accent">{GMAIL_HERO.headlineLime}</span>
                  </h1>

                  <IosSubline className={`${iosLanding.subline} mb-0 max-w-lg`}>{GMAIL_HERO.subline}</IosSubline>

                  <GmailHeroInstallCtas demoAnchorId={GMAIL_DEMO.id} className="mt-8" />
                </div>
              </AnimateIn>

              <AnimateIn direction="right" className="lg:col-span-7 flex items-center justify-center">
                <div className="pb-16 md:pb-24 w-full">
                  <HeroGif fill src={HERO_GIF_B2B} title="SMASH for Gmail — quote from your inbox" />
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        <GmailWorksWithStrap />

        {/* Story A — staggered text + cropped Gmail UI */}
        <GmailStoryFlow section={GMAIL_DEMO} />

        <GmailContrastStrip
          eyebrow={GMAIL_CONTRAST.eyebrow}
          headlineWhite={GMAIL_CONTRAST.headlineWhite}
          headlineLime={GMAIL_CONTRAST.headlineLime}
          proof={GMAIL_CONTRAST.proof}
        />

        <GmailBothSidesStrap />

        {/* Story B — supplier side, alternating layout */}
        <GmailStoryFlow section={GMAIL_SUPPLIER_STORY} />

        <TestimonialGridSection eyebrow="From people at their desk" items={[...GMAIL_TESTIMONIALS]} />

        {/* Also does — white, compact (no navy tiles) */}
        <section className="bg-white py-14 md:py-20 border-t border-border">
          <div className={iosLanding.container}>
            <AnimateIn direction="up">
              <IosSpecHeadline
                centered
                dark={false}
                className="mb-10"
                eyebrow={GMAIL_ALSO_DOES.eyebrow}
                headlineWhite={GMAIL_ALSO_DOES.headlineWhite}
                headlineLime={GMAIL_ALSO_DOES.headlineLime}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
                {GMAIL_ALSO_DOES.tiles.map((tile) => (
                  <div key={tile.title} className="rounded-2xl border border-border bg-[#F8FAFC] p-5">
                    <h3 className="font-display-italic font-black uppercase text-brand text-sm tracking-tight mb-2">{tile.title}</h3>
                    <p className="font-body text-sm text-brand/65 font-medium leading-[1.5]">{tile.outcome}</p>
                  </div>
                ))}
              </div>
              <p className="font-body text-sm text-brand/50 font-medium text-center max-w-2xl mx-auto leading-[1.55]">
                {GMAIL_ALSO_DOES.iosMention}{' '}
                <Link to="/voice-invoicing" className="text-accent font-semibold hover:underline">
                  See SMASH for iOS →
                </Link>
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* Who it's for — navy + photo, breaks the white run before FAQ */}
        <section className="relative bg-brand py-20 md:py-28 border-t border-white/10 overflow-hidden">
          {GMAIL_SECTION_PHOTO_BG.workflow && (
            <GmailSectionPhotoBg photo={GMAIL_SECTION_PHOTO_BG.workflow} tintDirection="right" />
          )}
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <AnimateIn direction="up">
              <IosSpecHeadline
                centered
                dark
                eyebrow={GMAIL_WHO.eyebrow}
                headlineWhite={GMAIL_WHO.headlineWhite}
                headlineLime={GMAIL_WHO.headlineLime}
                subline={GMAIL_WHO.body}
              />
            </AnimateIn>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24 border-t border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
            <AnimateIn direction="up">
              <IosSpecHeadline
                eyebrow="Questions"
                headlineWhite="COMMON"
                headlineLime="QUESTIONS."
                dark={false}
                className="mb-10"
              />
              <div className="rounded-3xl border border-border bg-white px-4 sm:px-8 py-2">
                {GMAIL_FAQS.map((faq, i) => (
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

        <section className="bg-brand py-20 md:py-28 relative overflow-hidden border-t border-white/10">
          {GMAIL_SECTION_PHOTO_BG.contrast && (
            <GmailSectionPhotoBg photo={GMAIL_SECTION_PHOTO_BG.contrast} tintDirection="left" />
          )}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none hidden lg:block z-[1]" />
          {/* fade the photo into solid navy at the base so it meets the lime footer cleanly */}
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-brand pointer-events-none z-[2]" />
          <div className={`${iosLanding.container} relative z-10 text-center`}>
            <AnimateIn direction="up">
              <h2 className={`${iosLanding.heroHeadline} mb-5`}>
                <span className="block text-white">{GMAIL_FINAL_CTA.headlineWhite}</span>
                <span className="block text-accent">{GMAIL_FINAL_CTA.headlineLime}</span>
              </h2>
              <IosSubline className={`${iosLanding.subline} mx-auto mb-8 max-w-lg`}>{GMAIL_FINAL_CTA.subline}</IosSubline>
              <GmailFinalInstallCtas />
              <p className={`${iosLanding.caption} mt-6`}>{GMAIL_FINAL_CTA.microcopy}</p>
            </AnimateIn>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
