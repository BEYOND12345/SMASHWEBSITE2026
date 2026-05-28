import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Chrome } from 'lucide-react';
import { SEO } from '../seo';
import { Nav } from '../nav';
import { Footer } from '../footer';
import { StructuredData, createBreadcrumbSchema, createFAQSchema } from '../structured-data';
import { SchemaMarkup } from '../SchemaMarkup';
import { organizationSchema as aiOrgSchema } from '../../data/schema-data';
import type { PseoHreflangAlternate } from '../../lib/pseo/hreflang';

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

      <section className="bg-brand pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
            {headline}
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto mb-8">{subheadline}</p>
          <a
            href={chromeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest"
          >
            <Chrome size={17} />
            {chromeLabel}
          </a>
        </div>
      </section>

      <main className="bg-white">{children}</main>

      <section className="bg-brand py-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm text-white/50 mb-4">
            Browse all programmatic pages in the{' '}
            <Link to="/sitemap-directory" className="text-accent font-semibold hover:underline">
              pSEO sitemap directory
            </Link>
            .
          </p>
          <a
            href={chromeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest"
          >
            <Chrome size={17} />
            {chromeLabel}
          </a>
        </div>
      </section>

      <Footer showCTA={false} />
    </>
  );
}

export function PasBlock({ title, body, dark }: { title: string; body: string; dark?: boolean }) {
  return (
    <section className={`py-14 md:py-20 ${dark ? 'bg-brand text-white' : 'bg-white'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className={`text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-4 ${dark ? 'text-white' : 'text-brand'}`}>
          {title}
        </h2>
        <p className={`font-body text-base leading-relaxed ${dark ? 'text-white/70' : 'text-brand/65'}`}>{body}</p>
      </div>
    </section>
  );
}
