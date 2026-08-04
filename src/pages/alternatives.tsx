import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { StructuredData, createBreadcrumbSchema, createFAQSchema } from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { hreflangAlternates } from '../data/country-data';
import { allVsPages } from '../data/vs-page-data';
import { DualProductCtas } from '../components/marketing/DualProductCtas';
import { iosLanding } from '../components/ios-product-landing/ios-landing-tokens';

const CANONICAL = 'https://smashinvoices.com/alternatives';

/** Legacy comparison pages not yet migrated to /vs-* article template */
const LEGACY_COMPARISONS = [
  {
    path: '/smash-vs-quickbooks',
    name: 'QuickBooks',
    desc: 'Cloud accounting vs voice-speed quoting and invoicing for service businesses.',
  },
  {
    path: '/smash-vs-fergus',
    name: 'Fergus',
    desc: 'Trade job management suite vs the fastest path from job done to invoice sent.',
  },
];

const faqs = [
  {
    q: 'What is the fastest invoicing app for tradies?',
    a: 'SMASH sends a priced, tax-ready invoice in under 60 seconds — by voice on iPhone before you leave the job, or from Gmail in Chrome at your desk. It prices from your catalog, not generic guesses.',
  },
  {
    q: 'Is SMASH a Xero or QuickBooks replacement?',
    a: 'No. SMASH is the speed layer for quoting and invoicing on site or in Gmail. Xero and QuickBooks handle accounting. Starter plans sync invoices so you do not retype line items.',
  },
  {
    q: 'Does SMASH work outside Australia?',
    a: 'Yes. SMASH is live in Australia, New Zealand, the United Kingdom, the United States, and Canada — with local tax (GST, VAT, sales tax) and currency on every document.',
  },
  {
    q: 'How is SMASH different from Tradify or ServiceM8?',
    a: 'Field-service suites manage scheduling, jobs, and teams. SMASH does one thing extremely fast: turn a finished job into a sent invoice. Many businesses use both — SMASH for speed, the suite for operations.',
  },
];

export function AlternativesPage() {
  return (
    <>
      <SEO
        title="SMASH Invoices Alternatives — Fastest Way to Send an Invoice"
        description="Compare SMASH to Invoice Simple, QuoteMate, Joist, Wave, FreshBooks, Square, Zoho Invoice, Xero, Tradify, ServiceM8, Invoice2go and more. Send a priced invoice in under 60 seconds — voice on iPhone or Gmail in Chrome."
        keywords="Invoice Simple alternative, QuoteMate alternative, Joist alternative, Wave alternative, FreshBooks alternative, voice to invoice, fastest invoicing app"
        ogTitle="SMASH Invoices — Alternatives & Comparisons"
        ogDescription="The fastest invoicing alternative for service businesses. Under 60 seconds. Voice on site or Gmail at your desk."
        canonical={CANONICAL}
        hreflangs={hreflangAlternates}
      />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://smashinvoices.com' },
          { name: 'Alternatives', url: CANONICAL },
        ])}
      />
      <StructuredData data={createFAQSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav />

      <section className="bg-black py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className={iosLanding.eyebrow + ' mb-5'}>Alternatives · speed & efficiency</p>
            <h1 className={iosLanding.heroHeadline + ' mb-6 max-w-4xl'}>
              The fastest alternative
              <span className="block text-accent">when typing is the bottleneck.</span>
            </h1>
            <p className={`${iosLanding.subline} mb-4 !text-white/65 !max-w-2xl`}>
              Most apps send invoice PDFs. SMASH runs the full loop for people who work with their hands:
              quote → customer approves → invoice → paid. Talk for 30 seconds on iPhone, or quote from Gmail
              in Chrome — under 60 seconds either way.
            </p>
            <p className="font-body text-base text-white/45 mb-10 max-w-2xl">
              Live in Australia, New Zealand, the United Kingdom, the United States, and Canada.
            </p>
            <DualProductCtas />
          </AnimateIn>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tighter text-brand mb-4">
              Compare SMASH to your current app
            </h2>
            <p className="font-body text-lg text-slate-500 mb-10 max-w-2xl">
              Each page is honest about trade-offs — when to keep your existing tool, and when SMASH wins on
              speed, hands-free input, and same-day sending.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {allVsPages.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/${p.slug}`}
                    className="block rounded-2xl border border-slate-200 p-6 hover:border-accent transition-colors group"
                  >
                    <p className="font-display text-lg uppercase tracking-tight text-brand group-hover:text-accent">
                      SMASH vs {p.competitorShort}
                    </p>
                    <p className="font-body text-sm text-slate-500 mt-2 line-clamp-2">{p.metaDescription}</p>
                    <p className="font-body text-xs font-semibold text-accent mt-3">Compare →</p>
                  </Link>
                </li>
              ))}
              {LEGACY_COMPARISONS.map((c) => (
                <li key={c.path}>
                  <Link
                    to={c.path}
                    className="block rounded-2xl border border-slate-200 p-6 hover:border-accent transition-colors group"
                  >
                    <p className="font-display text-lg uppercase tracking-tight text-brand group-hover:text-accent">
                      SMASH vs {c.name}
                    </p>
                    <p className="font-body text-sm text-slate-500 mt-2 line-clamp-2">{c.desc}</p>
                    <p className="font-body text-xs font-semibold text-accent mt-3">Compare →</p>
                  </Link>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter text-brand mb-4">
              Honest reviews (what works / what doesn’t)
            </h2>
            <p className="font-body text-slate-500 mb-8 max-w-2xl">
              Founder-style takes on the simple apps our ICP already uses — pain points people search for, not
              trash-talk.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2 font-body text-brand">
              <li>
                <Link to="/blog/invoice-simple-review-for-tradies" className="underline hover:no-underline">
                  Invoice Simple review for tradies
                </Link>
              </li>
              <li>
                <Link to="/blog/invoice2go-review-for-tradies" className="underline hover:no-underline">
                  Invoice2go review for tradies
                </Link>
              </li>
              <li>
                <Link to="/blog/invoice-home-review-for-tradies" className="underline hover:no-underline">
                  Invoice Home review for tradies
                </Link>
              </li>
              <li>
                <Link to="/blog/quotemate-review-for-tradies" className="underline hover:no-underline">
                  QuoteMate review for tradies
                </Link>
              </li>
              <li>
                <Link to="/blog/joist-review-for-tradies" className="underline hover:no-underline">
                  Joist review for sole traders
                </Link>
              </li>
              <li>
                <Link to="/blog/wave-invoicing-review-for-tradies" className="underline hover:no-underline">
                  Wave invoicing review
                </Link>
              </li>
            </ul>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="font-display text-2xl uppercase tracking-tighter text-brand mb-8">Speed guides</h2>
            <ul className="space-y-3 font-body text-brand">
              <li>
                <Link to="/voice-invoicing" className="underline hover:no-underline">
                  Voice to invoice on iPhone
                </Link>
              </li>
              <li>
                <Link to="/blog/fastest-way-to-send-invoice-2026" className="underline hover:no-underline">
                  Fastest way to send an invoice (60-second demo)
                </Link>
              </li>
              <li>
                <Link to="/blog/how-long-to-send-invoice-after-job-australia" className="underline hover:no-underline">
                  Send before you leave the job
                </Link>
              </li>
              <li>
                <Link to="/gmail-invoice" className="underline hover:no-underline">
                  Email to invoice in Gmail
                </Link>
              </li>
            </ul>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-2xl uppercase tracking-tighter text-brand mb-8">FAQ</h2>
          <dl className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-sm uppercase tracking-tight text-brand mb-2">{f.q}</dt>
                <dd className="font-body text-slate-600 leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Footer />
    </>
  );
}
