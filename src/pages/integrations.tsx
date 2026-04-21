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

const hubFaqs = [
  {
    q: 'Do SMASH integrations replace my accounting software?',
    a: 'No — they connect to it. SMASH is where invoices are created by voice on site. Xero and QuickBooks Online are where the full accounting, tax reporting and reconciliation live. The integrations keep both sides in sync.',
  },
  {
    q: 'Which accounting integrations are planned?',
    a: 'Xero and QuickBooks Online are confirmed. MYOB, Wave, FreshBooks and Sage are on the roadmap. Join the relevant waitlist to be notified when each one goes live.',
  },
  {
    q: 'Will the integrations work in every SMASH country?',
    a: 'Yes. The Xero integration launches across Australia, New Zealand, the UK, the US and Canada. The QuickBooks Online integration launches across the US, Canada, the UK and Australia, aligned with the SMASH country rollout.',
  },
  {
    q: 'Will there be Zapier / Make / API access?',
    a: 'Yes — a public API and Zapier app are on the roadmap, after the first-party Xero and QuickBooks integrations ship.',
  },
  {
    q: 'Does integration cost extra on top of my SMASH plan?',
    a: 'No extra SMASH charge for the integration itself. You continue to pay your Xero or QuickBooks subscription directly.',
  },
];

const url = 'https://smashinvoices.com/integrations';

export function Integrations() {
  return (
    <>
      <SEO
        title="SMASH Invoices Integrations | Xero, QuickBooks and more"
        description="SMASH integrates with the accounting tools tradies already use. Xero and QuickBooks Online first, with MYOB, Zapier and an API on the roadmap. Voice invoicing on site, clean books in the office."
        keywords="SMASH integrations, SMASH Xero integration, SMASH QuickBooks integration, invoicing app Xero, invoicing app QuickBooks, tradie accounting integration"
        ogTitle="SMASH Invoices Integrations | Xero, QuickBooks and more"
        ogDescription="Voice invoicing on site, clean books in the office. SMASH integrates with Xero and QuickBooks Online, with MYOB, Zapier and an API on the roadmap."
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

      {/* HERO */}
      <section className="relative bg-brand overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero_image.png" alt="" aria-hidden="true" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/98 via-gray-900/92 to-gray-900/60" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-28">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-[0.2em] mb-5">
              Integrations
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
              Plug SMASH into the accounting tools you already trust.
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
              Voice invoicing on site. Xero or QuickBooks in the office. Every invoice, contact, tax code and payment kept in sync — no double-entry, no end-of-month mess.
            </p>
          </AnimateIn>
        </div>
      </section>

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
