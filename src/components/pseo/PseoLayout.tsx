import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Chrome, Monitor } from 'lucide-react';
import { SEO } from '../seo';
import { Nav } from '../nav';
import { Footer } from '../footer';
import { StructuredData, createBreadcrumbSchema, createFAQSchema } from '../structured-data';
import { SchemaMarkup } from '../SchemaMarkup';
import { organizationSchema as aiOrgSchema } from '../../data/schema-data';
import type { PseoHreflangAlternate } from '../../lib/pseo/hreflang';
import { MarketingPhotoHero } from '../marketing/MarketingPhotoHero';
import { MARKETING_DESK_PHOTO } from '../../data/marketing-photos';
import { iosLanding } from '../ios-product-landing/ios-landing-tokens';
import { IosSubline } from '../ios-product-landing/IosSubline';
import { ProductLearnMoreCta } from '../marketing/DualProductCtas';

const OG_IMAGE = 'https://smashinvoices.com/hero_image.png';

interface PseoLayoutProps {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  hreflangs: PseoHreflangAlternate[];
  breadcrumbs: { name: string; url: string }[];
  chromeUrl: string;
  chromeLabel?: string;
  headline: string;
  subheadline: string;
  children: ReactNode;
  faqs?: { q: string; a: string }[];
  currencyCode?: string;
}

function softwareApplicationSchema(currencyCode: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Smash Invoices',
    operatingSystem: 'Chrome OS, macOS, Windows, Linux',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: currencyCode,
    },
  };
}

export function PseoLayout({
  title,
  description,
  keywords,
  canonical,
  hreflangs,
  breadcrumbs,
  chromeUrl,
  chromeLabel = 'Add to Chrome — Free',
  headline,
  subheadline,
  children,
  faqs = [],
  currencyCode = 'USD',
}: PseoLayoutProps) {
  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        ogTitle={title}
        ogDescription={description}
        ogUrl={canonical}
        ogImage={OG_IMAGE}
        canonical={canonical}
        hreflangs={hreflangs}
      />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      {faqs.length > 0 && <StructuredData data={createFAQSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />}
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema(currencyCode)]} />

      <Nav ctaUrl={chromeUrl} ctaLabel="Add to Chrome" />

      <MarketingPhotoHero
        photo={MARKETING_DESK_PHOTO}
        tintDirection="center"
        contentClassName="py-16 md:py-24 text-center"
      >
        <h1 className={`${iosLanding.heroHeadline} mb-6 max-w-4xl mx-auto`}>
          <span className="block text-white">{headline}</span>
        </h1>
        <IosSubline className={`${iosLanding.subline} mx-auto mb-8 !max-w-2xl`}>{subheadline}</IosSubline>
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center">
          <a
            href={chromeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest px-8 py-4 hover:brightness-95 transition-all whitespace-nowrap"
          >
            <Chrome size={18} strokeWidth={2.5} />
            {chromeLabel}
          </a>
          <ProductLearnMoreCta to="/voice-invoicing" label="On site? SMASH for iPhone" />
        </div>
        <p className={`${iosLanding.caption} mt-3`}>Free to install · Chrome or Edge</p>
        <p className="text-xs text-white/45 font-medium mt-1.5">
          <Link to="/chrome-extension" className="hover:text-accent transition-colors inline-flex items-center gap-1">
            <Monitor size={12} strokeWidth={2.5} />
            See the full Gmail extension →
          </Link>
        </p>
      </MarketingPhotoHero>

      <main className="bg-white">{children}</main>

      <section className="bg-brand py-16 md:py-20 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none hidden lg:block" />
        <div className={`${iosLanding.container} relative z-10 text-center`}>
          <p className="text-sm text-white/50 mb-6 max-w-xl mx-auto">
            Browse all programmatic pages in the{' '}
            <Link to="/sitemap-directory" className="text-accent font-semibold hover:underline">
              pSEO sitemap directory
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center">
            <a
              href={chromeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest px-8 py-4 hover:brightness-95 transition-all whitespace-nowrap"
            >
              <Chrome size={18} strokeWidth={2.5} />
              {chromeLabel}
            </a>
            <ProductLearnMoreCta to="/voice-invoicing" label="SMASH for iPhone" />
          </div>
        </div>
      </section>

      <Footer showCTA={false} />
    </>
  );
}

export function PasBlock({ title, body, dark }: { title: string; body: string; dark?: boolean }) {
  return (
    <section className={`py-14 md:py-20 ${dark ? 'bg-brand text-white' : 'bg-white'}`}>
      <div className={`${iosLanding.container} max-w-3xl`}>
        <h2
          className={`${iosLanding.sectionHeadline} mb-4 ${dark ? 'text-white' : 'text-brand'}`}
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}
        >
          {title}
        </h2>
        <p className={`font-body text-base leading-relaxed ${dark ? 'text-white/70' : 'text-brand/65'}`}>{body}</p>
      </div>
    </section>
  );
}
