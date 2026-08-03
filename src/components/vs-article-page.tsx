import { Link } from 'react-router-dom';
import { SEO } from './seo';
import { Nav } from './nav';
import { Footer } from './footer';
import { StructuredData, createBreadcrumbSchema, createFAQSchema } from './structured-data';
import { AnimateIn } from './animate-in';
import { DualProductCtas } from './marketing/DualProductCtas';
import { YoutubeFacade } from './marketing/YoutubeFacade';
import { hreflangAlternates } from '../data/country-data';
import type { VsPageData, VsTableRow } from '../data/vs-page-data';
import {
  allVsPages,
  DEFAULT_PROCESS_ROWS,
  VS_DEMO_YOUTUBE_ID,
  vsPageBySlug,
} from '../data/vs-page-data';

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

const LEGACY_MORE = [
  { path: '/smash-vs-quickbooks', label: 'QuickBooks' },
  { path: '/smash-vs-fergus', label: 'Fergus' },
];

function InlineLinks({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    nodes.push(
      <Link key={key++} to={match[2]} className="text-accent underline underline-offset-2 hover:no-underline">
        {match[1]}
      </Link>,
    );
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  return <>{nodes}</>;
}

function RichParagraphs({ body }: { body: string }) {
  return (
    <>
      {body.split(/\n\n+/).map((para, i) => (
        <p key={i} className="font-body text-lg text-slate-600 leading-relaxed mb-5 last:mb-0">
          <InlineLinks text={para} />
        </p>
      ))}
    </>
  );
}

function ComparisonTable({
  rows,
  themLabel,
  themAlt,
}: {
  rows: VsTableRow[];
  themLabel: string;
  themAlt?: string;
}) {
  return (
    <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
      <table className={`w-full border-collapse font-body text-sm ${themAlt ? 'min-w-[680px]' : 'min-w-[520px]'}`}>
        <thead>
          <tr className="border-b-2 border-brand">
            <th
              className="py-3 pr-4 text-left font-semibold text-slate-400"
              scope="col"
              style={{ width: themAlt ? '28%' : '34%' }}
            />
            <th className="py-3 px-3 text-left font-display uppercase tracking-tight text-brand" scope="col">
              SMASH
            </th>
            <th className="py-3 px-3 text-left font-display uppercase tracking-tight text-slate-500" scope="col">
              {themLabel}
            </th>
            {themAlt && (
              <th className="py-3 pl-3 text-left font-display uppercase tracking-tight text-slate-500" scope="col">
                {themAlt}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-slate-100">
              <th className="py-3.5 pr-4 text-left font-medium text-slate-700 align-top" scope="row">
                {row.label}
              </th>
              <td className="py-3.5 px-3 text-slate-600 align-top">{row.smash}</td>
              <td className="py-3.5 px-3 text-slate-500 align-top">{row.them}</td>
              {themAlt && (
                <td className="py-3.5 pl-3 text-slate-500 align-top">{row.themAlt ?? '—'}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function VsArticlePage({ data }: { data: VsPageData }) {
  const canonical = `https://smashinvoices.com/${data.slug}`;
  const processRows = data.processRows ?? DEFAULT_PROCESS_ROWS;
  const themLabel = data.tableColumns?.them ?? data.competitorShort;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.articleHeadline,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: { '@type': 'Organization', name: 'SMASH Invoices' },
    publisher: {
      '@type': 'Organization',
      name: 'SMASH Invoices',
      url: 'https://smashinvoices.com',
    },
  };

  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'SMASH Invoices — send a quote or invoice before you leave the job',
    description:
      'Demo: talk for about 30 seconds, verify catalog prices, send a tax-ready quote or invoice. Customer approves and pays on one link.',
    thumbnailUrl: `https://img.youtube.com/vi/${VS_DEMO_YOUTUBE_ID}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${VS_DEMO_YOUTUBE_ID}`,
    uploadDate: '2026-01-15',
  };

  const relatedCluster = (data.relatedSlugs ?? [])
    .map((slug) => vsPageBySlug[slug])
    .filter(Boolean);

  const otherComparisons = allVsPages.filter((p) => p.slug !== data.slug);

  return (
    <>
      <SEO
        title={data.metaTitle}
        description={data.metaDescription}
        ogTitle={data.metaTitle}
        ogDescription={data.ogDescription}
        ogImage={data.ogImage}
        ogType="article"
        ogUrl={canonical}
        twitterCard="summary_large_image"
        canonical={canonical}
        hreflangs={hreflangAlternates}
        articlePublishedTime={data.datePublished}
        articleModifiedTime={data.dateModified}
      />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://smashinvoices.com' },
          { name: 'Comparisons', url: 'https://smashinvoices.com/alternatives' },
          { name: `SMASH vs ${data.competitorShort}`, url: canonical },
        ])}
      />
      <StructuredData data={createFAQSchema(data.faqs.map((f) => ({ question: f.q, answer: f.a })))} />
      <StructuredData data={articleSchema} />
      <StructuredData data={videoSchema} />

      <Nav />

      <article className="bg-white">
        {/* Hero */}
        <header className="bg-black py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <AnimateIn direction="up">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                {data.eyebrow ?? `Comparison · Pricing checked ${data.pricingChecked}`}
              </p>
              <h1 className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-white mb-4 leading-tight">
                {data.h1}
              </h1>
              {data.brandLine && (
                <p className="font-body text-base text-white/50 mb-4">{data.brandLine}</p>
              )}
              <p className="font-body text-lg text-white/70 leading-relaxed">
                <InlineLinks text={data.intro} />
              </p>
            </AnimateIn>
          </div>
        </header>

        {/* Demo — same hero video as /voice-invoicing */}
        <section className="bg-black pb-16 md:pb-24 border-b border-white/10">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <AnimateIn direction="up">
              <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-4 text-center">
                60-second demo — see the full loop
              </p>
              <YoutubeFacade
                videoId={VS_DEMO_YOUTUBE_ID}
                title="SMASH demo — quote and invoice before you leave the job"
              />
              <p className="font-body text-sm text-slate-500 text-center mt-4">
                Talk → verify your rates → send → they approve and pay.{' '}
                <Link to="/voice-invoicing" className="text-accent underline hover:no-underline">
                  How voice to invoice works
                </Link>
              </p>
            </AnimateIn>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-14 md:py-20">
          {/* Process scorecard — the real fight */}
          <AnimateIn direction="up">
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter text-brand mb-2">
                The full process — not just an invoice PDF
              </h2>
              <p className="font-body text-slate-500 mb-6">
                Most “invoice apps” stop at send. Handymen, cleaners, and mobile trades need quote → approve →
                invoice → paid — on site, with dirty hands.
              </p>
              <ComparisonTable rows={processRows} themLabel={themLabel} themAlt={data.tableColumns?.themAlt} />
            </section>
          </AnimateIn>

          {/* Feature snapshot table */}
          <AnimateIn direction="up">
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter text-brand mb-2">
              SMASH vs {data.competitorShort}: quick comparison
            </h2>
            <p className="font-body text-sm text-slate-400 mb-6">Pricing checked {data.pricingChecked}</p>
            <div className="mb-16">
              <ComparisonTable
                rows={data.tableRows}
                themLabel={themLabel}
                themAlt={data.tableColumns?.themAlt}
              />
            </div>
          </AnimateIn>

          {/* Content sections */}
          {data.contentSections.map((section) => (
            <AnimateIn direction="up" key={section.heading}>
              <section className="mb-16">
                <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter text-brand mb-6">
                  {section.heading}
                </h2>
                <RichParagraphs body={section.body} />
              </section>
            </AnimateIn>
          ))}

          {/* Pricing */}
          <AnimateIn direction="up">
            <section className="mb-10">
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter text-brand mb-6">
                {data.pricingHeading}
              </h2>
              <RichParagraphs body={data.pricingBody} />
            </section>
            <figure className="mb-16">
              <img
                src={data.images.pricing.src}
                alt={data.images.pricing.alt}
                width={1200}
                height={630}
                loading="lazy"
                className="w-full rounded-2xl border border-slate-200"
              />
            </figure>
          </AnimateIn>

          {/* Who SMASH is for */}
          <AnimateIn direction="up">
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter text-brand mb-4">
                Who SMASH is right for
              </h2>
              <p className="font-body text-lg text-slate-600 leading-relaxed">
                <InlineLinks text={data.whoSmashFor} />
              </p>
            </section>
          </AnimateIn>

          {/* When to choose them */}
          <AnimateIn direction="up">
            <section className="mb-16 rounded-2xl bg-slate-50 border border-slate-200 p-8">
              <h2 className="font-display text-2xl uppercase tracking-tighter text-brand mb-4">
                {data.whenThemHeading}
              </h2>
              {data.whenThemIntro && (
                <p className="font-body text-slate-600 mb-4">{data.whenThemIntro}</p>
              )}
              <ul className="list-disc pl-5 space-y-2 font-body text-slate-600 mb-6">
                {data.whenThemBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              {data.whenThemClosing && (
                <p className="font-body text-slate-600 leading-relaxed">{data.whenThemClosing}</p>
              )}
            </section>
          </AnimateIn>

          {/* Feature detail */}
          <AnimateIn direction="up">
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter text-brand mb-8">
                Feature detail
              </h2>
              <div className="space-y-8">
                {data.featureSections.map((sec) => (
                  <div key={sec.title}>
                    <h3 className="font-display text-lg uppercase tracking-tight text-brand mb-2">{sec.title}</h3>
                    <p className="font-body text-lg text-slate-600 leading-relaxed">
                      <InlineLinks text={sec.body} />
                    </p>
                    {sec.title === 'Getting paid' && (
                      <figure className="mt-6">
                        <img
                          src={data.images.portal.src}
                          alt={data.images.portal.alt}
                          width={800}
                          height={600}
                          loading="lazy"
                          className="w-full max-w-sm rounded-2xl border border-slate-200"
                        />
                      </figure>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </AnimateIn>

          {/* ICP cluster — deeper interlinks */}
          {relatedCluster.length > 0 && (
            <AnimateIn direction="up">
              <section className="mb-16 rounded-2xl border border-slate-200 p-8">
                <h2 className="font-display text-xl uppercase tracking-tighter text-brand mb-3">
                  Comparing other basic apps?
                </h2>
                <p className="font-body text-slate-500 mb-6">
                  Same ICP fight — tools built for typing, not for people on the tools. Pick the one you already
                  use:
                </p>
                <ul className="space-y-4">
                  {relatedCluster.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to={`/${p.slug}`}
                        className="font-display text-base uppercase tracking-tight text-brand hover:text-accent"
                      >
                        {p.h1}
                      </Link>
                      <p className="font-body text-sm text-slate-500 mt-1 line-clamp-2">{p.metaDescription}</p>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-sm text-slate-500 mt-6">
                  <Link to="/for-handymen" className="text-accent underline hover:no-underline">
                    Handyman invoicing
                  </Link>
                  {' · '}
                  <Link to="/voice-invoicing" className="text-accent underline hover:no-underline">
                    Voice to invoice
                  </Link>
                  {' · '}
                  <Link to="/alternatives" className="text-accent underline hover:no-underline">
                    All alternatives
                  </Link>
                </p>
              </section>
            </AnimateIn>
          )}

          {/* FAQ */}
          <AnimateIn direction="up">
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter text-brand mb-8">FAQ</h2>
              <dl className="space-y-8">
                {data.faqs.map((faq) => (
                  <div key={faq.q}>
                    <dt className="font-display text-base uppercase tracking-tight text-brand mb-2">{faq.q}</dt>
                    <dd className="font-body text-lg text-slate-600 leading-relaxed">
                      <InlineLinks text={faq.a} />
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </AnimateIn>

          {/* CTA */}
          <AnimateIn direction="up">
            <section className="rounded-2xl bg-brand text-white p-10 text-center mb-16">
              <p className="font-display text-xl md:text-2xl uppercase tracking-tight mb-2">
                {data.ctaPreamble}
              </p>
              {data.ctaLine && (
                <p className="font-body text-white/70 mb-6">{data.ctaLine}</p>
              )}
              <DualProductCtas />
            </section>
          </AnimateIn>

          {/* More comparisons */}
          <AnimateIn direction="up">
            <section>
              <h2 className="font-display text-xl uppercase tracking-tighter text-brand mb-6">More comparisons</h2>
              <ul className="grid gap-3 sm:grid-cols-2 font-body text-sm">
                {otherComparisons.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/${p.slug}`}
                      className="text-brand underline underline-offset-2 hover:text-accent hover:no-underline"
                    >
                      SMASH vs {p.competitorShort}
                    </Link>
                  </li>
                ))}
                {LEGACY_MORE.map((c) => (
                  <li key={c.path}>
                    <Link
                      to={c.path}
                      className="text-brand underline underline-offset-2 hover:text-accent hover:no-underline"
                    >
                      SMASH vs {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </AnimateIn>
        </div>
      </article>

      <Footer />
    </>
  );
}
