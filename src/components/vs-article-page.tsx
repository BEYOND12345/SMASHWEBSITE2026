import { Link } from 'react-router-dom';
import { SEO } from './seo';
import { Nav } from './nav';
import { Footer } from './footer';
import { StructuredData, createBreadcrumbSchema, createFAQSchema } from './structured-data';
import { AnimateIn } from './animate-in';
import { DualProductCtas } from './marketing/DualProductCtas';
import { hreflangAlternates } from '../data/country-data';
import type { VsPageData } from '../data/vs-page-data';
import { vsPagePath } from '../data/vs-page-data';
import { allComparisons } from '../data/comparison-data';

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

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

function competitorKeyFromSlug(slug: string): string {
  return slug.replace(/^smash-vs-/, '');
}

export function VsArticlePage({ data }: { data: VsPageData }) {
  const canonical = `https://smashinvoices.com/${data.slug}`;

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

  const otherComparisons = allComparisons.filter(
    (c) => competitorKeyFromSlug(c.slug) !== data.slug.replace(/^vs-/, ''),
  );

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

      <Nav />

      <article className="bg-white">
        {/* Hero */}
        <header className="bg-black py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <AnimateIn direction="up">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                Comparison · Pricing checked {data.pricingChecked}
              </p>
              <h1 className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-white mb-6 leading-tight">
                {data.h1}
              </h1>
              <p className="font-body text-lg text-white/70 leading-relaxed">{data.intro}</p>
            </AnimateIn>
          </div>
          <div className="max-w-4xl mx-auto px-6 lg:px-12 mt-10">
            <AnimateIn direction="up" delay={80}>
              <figure>
                <img
                  src={data.images.hero.src}
                  alt={data.images.hero.alt}
                  width={1200}
                  height={630}
                  loading={data.images.hero.priority ? 'eager' : 'lazy'}
                  className="w-full rounded-2xl border border-white/10"
                />
              </figure>
            </AnimateIn>
          </div>
        </header>

        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-14 md:py-20">
          {/* Quick comparison table */}
          <AnimateIn direction="up">
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter text-brand mb-2">
              SMASH vs {data.competitorShort}: quick comparison
            </h2>
            <p className="font-body text-sm text-slate-400 mb-6">Pricing checked {data.pricingChecked}</p>
            <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 mb-16">
              <table className={`w-full border-collapse font-body text-sm ${data.tableColumns?.themAlt ? 'min-w-[680px]' : 'min-w-[520px]'}`}>
                <thead>
                  <tr className="border-b-2 border-brand">
                    <th className="py-3 pr-4 text-left font-semibold text-slate-400" scope="col" style={{ width: data.tableColumns?.themAlt ? '28%' : '34%' }} />
                    <th className="py-3 px-3 text-left font-display uppercase tracking-tight text-brand" scope="col">
                      SMASH
                    </th>
                    <th className="py-3 px-3 text-left font-display uppercase tracking-tight text-slate-500" scope="col">
                      {data.tableColumns?.them ?? data.competitorShort}
                    </th>
                    {data.tableColumns?.themAlt && (
                      <th className="py-3 pl-3 text-left font-display uppercase tracking-tight text-slate-500" scope="col">
                        {data.tableColumns.themAlt}
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {data.tableRows.map((row) => (
                    <tr key={row.label} className="border-b border-slate-100">
                      <th className="py-3.5 pr-4 text-left font-medium text-slate-700 align-top" scope="row">
                        {row.label}
                      </th>
                      <td className="py-3.5 px-3 text-slate-600 align-top">{row.smash}</td>
                      <td className="py-3.5 px-3 text-slate-500 align-top">{row.them}</td>
                      {data.tableColumns?.themAlt && (
                        <td className="py-3.5 pl-3 text-slate-500 align-top">{row.themAlt ?? '—'}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
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
              <p className="font-body text-lg text-slate-600 leading-relaxed">{data.whoSmashFor}</p>
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

          {/* FAQ */}
          <AnimateIn direction="up">
            <section className="mb-16">
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter text-brand mb-8">FAQ</h2>
              <dl className="space-y-8">
                {data.faqs.map((faq) => (
                  <div key={faq.q}>
                    <dt className="font-display text-base uppercase tracking-tight text-brand mb-2">{faq.q}</dt>
                    <dd className="font-body text-lg text-slate-600 leading-relaxed">{faq.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </AnimateIn>

          {/* CTA */}
          <AnimateIn direction="up">
            <section className="rounded-2xl bg-brand text-white p-10 text-center mb-16">
              <p className="font-display text-xl md:text-2xl uppercase tracking-tight mb-6">
                {data.ctaPreamble}
                {data.ctaLine ? ` ${data.ctaLine}` : ''}
              </p>
              <DualProductCtas />
            </section>
          </AnimateIn>

          {/* More comparisons */}
          <AnimateIn direction="up">
            <section>
              <h2 className="font-display text-xl uppercase tracking-tighter text-brand mb-6">More comparisons</h2>
              <ul className="grid gap-3 sm:grid-cols-2 font-body text-sm">
                {otherComparisons.map((c) => {
                  const key = competitorKeyFromSlug(c.slug);
                  return (
                    <li key={c.slug}>
                      <Link
                        to={vsPagePath(key)}
                        className="text-brand underline underline-offset-2 hover:text-accent hover:no-underline"
                      >
                        SMASH vs {c.competitorShort}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          </AnimateIn>
        </div>
      </article>

      <Footer />
    </>
  );
}
