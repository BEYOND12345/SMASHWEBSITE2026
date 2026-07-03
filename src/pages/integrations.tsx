import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { SEO } from '../components/seo';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import {
  StructuredData,
  createBreadcrumbSchema,
  createFAQSchema,
} from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { hreflangAlternates } from '../data/country-data';
import { integrations } from '../data/integrations-data';
import { DualProductCtas } from '../components/marketing/DualProductCtas';
import { MarketingPhotoHero } from '../components/marketing/MarketingPhotoHero';
import { iosLanding } from '../components/ios-product-landing/ios-landing-tokens';

const hubFaqs = [
  {
    q: 'Do SMASH integrations replace my accounting software?',
    a: 'No — they connect to it. SMASH is where invoices are created by voice on site. Xero and QuickBooks Online are where the full accounting, tax reporting and reconciliation live. The integrations keep both sides in sync.',
  },
  {
    q: 'Which accounting integrations are planned?',
    a: 'Xero and QuickBooks Online are live on paid SMASH plans from Starter. MYOB, Wave, FreshBooks and Sage remain on the roadmap.',
  },
  {
    q: 'Will the integrations work in every SMASH country?',
    a: 'Yes. Xero sync works across Australia, New Zealand, the UK, the US and Canada. QuickBooks Online sync supports the US, Canada, the UK and Australia.',
  },
  {
    q: 'Will there be Zapier / Make / API access?',
    a: 'Yes — a public API and Zapier app are on the roadmap, after the first-party Xero and QuickBooks integrations ship.',
  },
  {
    q: 'Does integration cost extra on top of my SMASH plan?',
    a: 'Xero and QuickBooks sync unlock on Starter and above. Starter is $15/month on web pricing and includes unlimited invoices plus CSV export. You continue to pay your accounting software subscription directly.',
  },
];

const url = 'https://smashinvoices.com/integrations';

export function Integrations() {
  return (
    <>
      <SEO
        title="SMASH Invoices Integrations | Xero, QuickBooks and more"
        description="Invoice on site or in Gmail — books stay clean in Xero or QuickBooks. Sync unlocks on Starter from $15/month with unlimited invoices and CSV export."
        keywords="SMASH integrations, SMASH Xero integration, SMASH QuickBooks integration, gmail xero invoice, email to invoice xero, invoicing app QuickBooks"
        ogTitle="SMASH Integrations — Xero & QuickBooks Sync"
        ogDescription="Send from the field or Gmail. Push to Xero or QuickBooks when you are ready — no re-keying."
        ogUrl={url}
        canonical={url}
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home',         url: 'https://smashinvoices.com/' },
        { name: 'Integrations', url },
      ])} />
      <StructuredData data={createFAQSchema(hubFaqs.map(f => ({ question: f.q, answer: f.a })))} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav />

      <MarketingPhotoHero contentClassName="py-20 md:py-28">
        <AnimateIn direction="up">
          <p className={`${iosLanding.eyebrow} mb-5`}>Integrations</p>
          <h1 className={`${iosLanding.heroHeadline} mb-6 max-w-4xl`}>
            <span className="block text-white">Plug SMASH into the</span>
            <span className="block text-accent">tools you already trust.</span>
          </h1>
          <p className={`${iosLanding.subline} mb-10 !text-white/70 !max-w-2xl`}>
            Send from iPhone or Gmail. Xero or QuickBooks in the office. Every invoice, contact, tax code and payment kept in sync — no double-entry, no end-of-month mess.
          </p>
          <DualProductCtas />
        </AnimateIn>
      </MarketingPhotoHero>

      {/* ANSWER BLOCK */}
      <section className="bg-accent py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand/60 mb-3">
            What integrates with SMASH Invoices?
          </p>
          <p className="font-body text-xl md:text-2xl text-brand leading-snug max-w-3xl mx-auto">
            SMASH Invoices integrates with Xero and QuickBooks Online. Voice-generated invoices, contacts, tax codes and card payments sync automatically in both directions, so your accountant sees everything in real time. MYOB, Zapier and a public API are on the roadmap.
          </p>
        </div>
      </section>

      {/* INTEGRATION CARDS */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3 text-center">
              Available integrations
            </p>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] text-brand text-center mb-16 max-w-3xl mx-auto">
              Built to live next to your accounting stack.
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6">
            {integrations.map(i => {
              const href = `/integrations/${i.slug}`;
              return (
                <AnimateIn key={i.slug} direction="up">
                  <Link
                    to={href}
                    className="group block rounded-3xl border border-slate-200 hover:border-accent transition-all p-8 h-full"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        {i.status === 'live' ? 'Live' : 'Coming soon'}
                      </span>
                      <ArrowRight
                        size={18}
                        strokeWidth={2.5}
                        className="text-brand/30 group-hover:text-brand group-hover:translate-x-0.5 transition-all"
                      />
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-brand mb-3 leading-tight">
                      SMASH × {i.name}
                    </h3>
                    <p className="font-body text-slate-500 leading-relaxed mb-6">
                      {i.tagline}
                    </p>
                    <ul className="space-y-2">
                      {i.whatSyncs.slice(0, 4).map(s => (
                        <li key={s.label} className="flex items-start gap-2 font-body text-sm text-slate-600">
                          <Check size={16} className="text-accent shrink-0 mt-0.5" strokeWidth={3} />
                          <span>{s.label}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 font-display text-xs uppercase tracking-[0.15em] text-brand group-hover:text-accent transition-colors">
                      {i.status === 'live' ? 'See how it works →' : 'Join the waitlist →'}
                    </p>
                  </Link>
                </AnimateIn>
              );
            })}
          </div>

          <AnimateIn direction="up" className="mt-16">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3 text-center">
              Gmail Chrome extension
            </p>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tighter text-brand text-center mb-10">
              Quote from your inbox — then sync to your ledger.
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  href: '/gmail-invoice',
                  title: 'Gmail invoice extension',
                  body: 'Send invoices and quotes from Gmail in under 60 seconds.',
                },
                {
                  href: '/integrations/gmail-xero-quote-builder',
                  title: 'Gmail + Xero quotes',
                  body: 'Build Xero quotes inside your inbox without rekeying.',
                },
                {
                  href: '/integrations/gmail-quickbooks-estimate-generator',
                  title: 'Gmail + QuickBooks estimates',
                  body: 'Push QBO estimates from customer emails — no CSV import.',
                },
              ].map((card) => (
                <Link
                  key={card.href}
                  to={card.href}
                  className="group block rounded-2xl border-2 border-slate-200 hover:border-accent p-6 transition-all bg-slate-50 hover:bg-white"
                >
                  <h3 className="font-display text-xl uppercase tracking-tight text-brand mb-2 group-hover:text-accent transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm text-slate-600 leading-relaxed mb-4">{card.body}</p>
                  <span className="font-display text-xs uppercase tracking-wider text-brand">Learn more →</span>
                </Link>
              ))}
            </div>
            <p className="text-center mt-8">
              <Link to="/chrome-extension" className="font-bold text-brand hover:text-accent underline-offset-2 hover:underline">
                See all SMASH for Gmail features →
              </Link>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3 text-center">
              Integration roadmap
            </p>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] text-brand text-center mb-12 max-w-3xl mx-auto">
              What's next.
            </h2>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'MYOB',        note: 'Australia / New Zealand — after Xero ships' },
              { name: 'Zapier',      note: '3000+ apps — webhook-first release' },
              { name: 'Public API',  note: 'REST API for custom integrations' },
              { name: 'Sage',        note: 'UK + Ireland — under evaluation' },
              { name: 'Wave',        note: 'US + Canada — under evaluation' },
              { name: 'FreshBooks',  note: 'US + Canada — under evaluation' },
            ].map(i => (
              <div key={i.name} className="bg-white rounded-2xl p-6 border border-slate-100">
                <p className="font-display text-lg uppercase tracking-tight text-brand mb-2">
                  {i.name}
                </p>
                <p className="font-body text-sm text-slate-500 leading-relaxed">{i.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] text-brand mb-12 text-center">
              Integration FAQ
            </h2>
          </AnimateIn>
          <div className="border-t border-b border-slate-100">
            {hubFaqs.map((faq, i) => (
              <div key={i} className="border-b border-slate-100 last:border-b-0 py-6">
                <p className="font-display text-base uppercase tracking-tight text-brand leading-tight mb-2">
                  {faq.q}
                </p>
                <p className="font-body text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] text-white mb-4">
            Pick your accounting tool.
          </h2>
          <p className="font-body text-white/60 mb-8 text-lg">
            Join the waitlist for the integration you need — priority access the moment it goes live.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/integrations/xero"
              className="px-7 py-4 rounded-2xl bg-accent text-brand font-display text-sm uppercase tracking-widest hover:brightness-95 transition-all"
            >
              Xero waitlist
            </Link>
            <Link
              to="/integrations/quickbooks"
              className="px-7 py-4 rounded-2xl bg-white/10 text-white font-display text-sm uppercase tracking-widest hover:bg-white/20 transition-all border border-white/20"
            >
              QuickBooks waitlist
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
