import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Eye, Zap, Star } from 'lucide-react';
import { SEO } from '../components/seo';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { StructuredData, createBreadcrumbSchema, createFAQSchema } from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { AnimateIn } from '../components/animate-in';
import { hreflangAlternates } from '../data/country-data';

const APP_STORE_URL = "https://apps.apple.com/app/id6759475079";

type CurrencyCode = 'AUD' | 'NZD' | 'GBP' | 'USD' | 'CAD';

interface Currency {
  code: CurrencyCode;
  symbol: string;
  label: string;
  flag: string;
  live: boolean;
  waitlistPath?: string;
  taxLabel: string;
}

const currencies: Currency[] = [
  { code: 'AUD', symbol: '$',  label: 'AUD (Australia)',      flag: '🇦🇺', live: true,                              taxLabel: 'GST' },
  { code: 'NZD', symbol: '$',  label: 'NZD (New Zealand)',    flag: '🇳🇿', live: false, waitlistPath: '/nz',        taxLabel: 'GST' },
  { code: 'GBP', symbol: '£',  label: 'GBP (United Kingdom)', flag: '🇬🇧', live: false, waitlistPath: '/uk',        taxLabel: 'VAT' },
  { code: 'USD', symbol: '$',  label: 'USD (United States)',  flag: '🇺🇸', live: false, waitlistPath: '/us',        taxLabel: 'Sales tax' },
  { code: 'CAD', symbol: '$',  label: 'CAD (Canada)',         flag: '🇨🇦', live: false, waitlistPath: '/ca',        taxLabel: 'GST/HST/PST' },
];

// Indicative international launch pricing. AUD values are the live
// figures today; the rest are currency-equivalent targets for the
// upcoming multi-market launch (subject to final review before billing
// goes live in each market).
type TierName = 'Free' | 'Starter' | 'Pro' | 'Unlimited';
const tierPricing: Record<TierName, Record<CurrencyCode, string>> = {
  Free:      { AUD: '0',      NZD: '0',      GBP: '0',      USD: '0',      CAD: '0'      },
  Starter:   { AUD: '14.99',  NZD: '16.99',  GBP: '7.99',   USD: '9.99',   CAD: '13.99'  },
  Pro:       { AUD: '24.99',  NZD: '27.99',  GBP: '13.99',  USD: '16.99',  CAD: '22.99'  },
  Unlimited: { AUD: '39.99',  NZD: '44.99',  GBP: '21.99',  USD: '27.99',  CAD: '36.99'  },
};

interface Tier {
  name: TierName;
  volume: string;
  description: string;
  highlight: boolean;
  badge?: string;
}

const tiers: Tier[] = [
  { name: 'Free',      volume: '2 quotes / month',   description: 'Try it risk-free. No card needed.',             highlight: false                         },
  { name: 'Starter',   volume: '15 quotes / month',  description: 'For sole traders picking up the pace.',         highlight: false                         },
  { name: 'Pro',       volume: '50 quotes / month',  description: 'The plan most tradies land on.',                highlight: true,  badge: 'Most Popular'  },
  { name: 'Unlimited', volume: 'Unlimited quotes',   description: 'For high-volume operators and crews.',          highlight: false                         },
];

const features = [
  'Voice-to-invoice in under 60 seconds',
  'Tax-compliant invoices and quotes',
  'See the second your customer opens the invoice',
  'Send via SMS, email, or WhatsApp',
  'Customer payment tracking',
  'Localised tax format (GST / VAT / Sales tax)',
  'PDF download and share',
  'Job history and customer records',
  'Xero and QuickBooks export (coming soon)',
];

const faqs = [
  {
    question: 'Is the free plan really free forever?',
    answer: 'Yes. No credit card, no time limit. You get 2 quotes per month to try SMASH risk-free. When you\'re ready to do more, upgrading takes 30 seconds in the app.',
  },
  {
    question: 'What\'s the difference between plans?',
    answer: 'Volume only. Every plan gets the full SMASH feature set — voice-to-invoice, tax handling, open receipts, payment tracking, everything. The only limit is how many quotes you send per month.',
  },
  {
    question: 'Can I switch plans at any time?',
    answer: 'Yes. Upgrade, downgrade, or cancel whenever you like. No lock-in contracts. If you downgrade, you keep your current plan until the end of the billing period.',
  },
  {
    question: 'Do I need a credit card to start?',
    answer: 'No. Download the app, create an account, and start quoting — no card required. You only need payment details when you choose to upgrade.',
  },
  {
    question: 'What does "see the second your customer opens the invoice" mean?',
    answer: 'SMASH sends you a real-time notification the moment your customer opens the invoice or quote. So you know exactly when to follow up — no more chasing blindly.',
  },
  {
    question: 'Which currencies will SMASH support?',
    answer: 'SMASH bills in Australian Dollars (AUD) today. New Zealand Dollars (NZD), British Pounds (GBP), US Dollars (USD), and Canadian Dollars (CAD) are the next launch currencies. Each market launches with local tax handling — GST in AU/NZ, VAT in the UK, state sales tax in the US, GST/HST/PST in Canada.',
  },
  {
    question: 'When will SMASH be available in my country?',
    answer: 'Live in Australia today. New Zealand, the United Kingdom, the United States and Canada are the next wave — join the waitlist at /nz, /uk, /us or /ca and we will email you the moment the app is live in your App Store.',
  },
];

export function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currencyCode, setCurrencyCode] = useState<CurrencyCode>('AUD');
  const currency = currencies.find(c => c.code === currencyCode)!;

  return (
    <>
      <SEO
        title="Pricing | SMASH Invoices — Voice Invoicing for Tradies"
        description="Simple volume-based pricing for SMASH Invoices. Free plan, plus Starter / Pro / Unlimited tiers. AUD live today; NZD, GBP, USD and CAD at launch in each market. Every plan includes the full feature set — just more quotes as you grow."
        keywords="SMASH Invoices pricing, voice invoicing app pricing, invoice app Australia price, invoice app UK pricing, invoice app USA pricing, invoice app Canada pricing, invoice app NZ pricing"
        ogUrl="https://smashinvoices.com/pricing"
        canonical="https://smashinvoices.com/pricing"
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com/' },
        { name: 'Pricing', url: 'https://smashinvoices.com/pricing' },
      ])} />
      <StructuredData data={createFAQSchema(faqs)} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav />

      {/* HERO */}
      <section className="bg-brand pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-white/40 mb-4">
              Pricing — {currency.flag} {currency.code}
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-[112px] uppercase tracking-tighter leading-[0.88] text-white mb-6">
              Pay for<br />
              <span className="text-accent">what you use.</span>
            </h1>
            <p className="font-body text-xl text-white/60 max-w-xl mx-auto leading-relaxed mb-8">
              Every plan includes the full feature set. The only difference is volume. Start free — no card needed.
            </p>

            {/* Currency switcher */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10">
              {currencies.map(c => {
                const active = c.code === currencyCode;
                return (
                  <button
                    key={c.code}
                    onClick={() => setCurrencyCode(c.code)}
                    className={`px-4 py-2 rounded-full text-xs font-display uppercase tracking-widest transition-all ${
                      active ? 'bg-accent text-brand' : 'text-white/60 hover:text-white'
                    }`}
                    aria-pressed={active}
                  >
                    <span className="mr-1.5">{c.flag}</span>
                    {c.code}
                  </button>
                );
              })}
            </div>

            {!currency.live && (
              <p className="mt-5 font-body text-sm text-accent">
                Indicative {currency.code} launch pricing.{' '}
                <Link to={currency.waitlistPath!} className="underline hover:text-white">
                  Join the waitlist →
                </Link>
              </p>
            )}
          </AnimateIn>
        </div>
      </section>

      {/* OPEN RECEIPT CALLOUT */}
      <section className="bg-accent py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center gap-3">
          <Eye size={20} className="text-brand shrink-0" strokeWidth={2.5} />
          <p className="font-display text-sm uppercase tracking-widest text-brand">
            See the second your customer opens the invoice — on every plan.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {tiers.map((tier) => {
              const price = tierPricing[tier.name][currencyCode];
              const isFree = price === '0';
              return (
                <AnimateIn key={tier.name} direction="up">
                  <div className={`rounded-4xl p-8 flex flex-col h-full ${
                    tier.highlight
                      ? 'bg-accent border-2 border-brand'
                      : 'bg-white border border-slate-100 hover:border-accent transition-all'
                  }`}>
                    {tier.badge && (
                      <p className="font-display text-[10px] uppercase tracking-[0.2em] text-brand mb-3">
                        {tier.badge}
                      </p>
                    )}
                    {!tier.badge && (
                      <p className="font-display text-[10px] uppercase tracking-[0.2em] text-transparent mb-3 select-none">
                        &nbsp;
                      </p>
                    )}

                    <h2 className="font-display text-2xl uppercase tracking-tight mb-1 text-brand">
                      {tier.name}
                    </h2>

                    <div className="flex items-end gap-1 mb-2">
                      <span className="font-display text-5xl tracking-tighter leading-none text-brand">
                        {isFree ? 'Free' : `${currency.symbol}${price}`}
                      </span>
                    </div>
                    <p className={`font-body text-sm mb-1 ${
                      tier.highlight ? 'text-brand/70' : 'text-slate-400'
                    }`}>
                      {!isFree && `/ month ${currency.code}`}
                      {isFree && 'no card required'}
                    </p>

                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 w-fit ${
                      tier.highlight ? 'bg-brand/10' : 'bg-slate-50'
                    }`}>
                      <Zap size={13} className={tier.highlight ? 'text-brand' : 'text-slate-400'} strokeWidth={2.5} />
                      <span className={`font-display text-[11px] uppercase tracking-wider ${
                        tier.highlight ? 'text-brand' : 'text-slate-500'
                      }`}>
                        {tier.volume}
                      </span>
                    </div>

                    <p className={`font-body text-sm leading-relaxed mb-6 ${
                      tier.highlight ? 'text-brand/70' : 'text-slate-500'
                    }`}>
                      {tier.description}
                    </p>

                    <div className="mt-auto">
                      {currency.live ? (
                        <a
                          href={APP_STORE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-4 rounded-2xl font-display text-sm uppercase tracking-widest transition-all bg-brand text-white hover:brightness-110"
                        >
                          {isFree ? 'Start Free' : 'Get Started'}
                        </a>
                      ) : (
                        <Link
                          to={currency.waitlistPath!}
                          className="w-full block text-center py-4 rounded-2xl font-display text-sm uppercase tracking-widest transition-all bg-brand text-white hover:brightness-110"
                        >
                          Join {currency.code} waitlist
                        </Link>
                      )}
                      <p className={`text-center font-body text-xs mt-3 ${
                        tier.highlight ? 'text-brand/50' : 'text-slate-400'
                      }`}>
                        {currency.live
                          ? (isFree ? 'No account needed to try' : 'Cancel anytime · No lock-in')
                          : `Priced in ${currency.code} at launch · ${currency.taxLabel} included`}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

          <p className="mt-10 text-center font-body text-xs text-slate-400 max-w-2xl mx-auto">
            {currency.live
              ? 'All prices in AUD and include GST. Payments processed securely through Stripe.'
              : `Indicative ${currency.code} pricing shown for comparison. Final ${currency.code} pricing is locked in before the app launches in ${currency.label.split('(')[1]?.replace(')', '') ?? currency.code}. Until then, join the waitlist.`}
          </p>
        </div>
      </section>

      {/* ALL FEATURES INCLUDED */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="text-center mb-12">
              <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-4">
                Every plan
              </p>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] text-brand">
                Everything included.<br />No feature-gating.
              </h2>
              <p className="font-body text-xl text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
                We don't hide features behind higher tiers. Every SMASH subscriber gets the full toolkit from day one.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature) => (
              <AnimateIn key={feature} direction="up">
                <div className={`flex items-start gap-3 bg-white rounded-4xl p-5 border ${
                  feature === 'See the second your customer opens the invoice'
                    ? 'border-accent'
                    : 'border-slate-100'
                }`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    feature === 'See the second your customer opens the invoice'
                      ? 'bg-accent'
                      : 'bg-slate-50'
                  }`}>
                    <Check size={13} className="text-brand" strokeWidth={3} />
                  </div>
                  <span className={`font-body text-sm leading-snug ${
                    feature === 'See the second your customer opens the invoice'
                      ? 'text-brand font-semibold'
                      : 'text-slate-600'
                  }`}>
                    {feature}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-brand py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-accent fill-accent" />
            ))}
          </div>
          <AnimateIn direction="up">
            <blockquote className="text-center max-w-2xl mx-auto">
              <p className="font-display text-2xl md:text-4xl uppercase tracking-tighter leading-[0.9] text-white mb-6">
                "Paid for itself on the first week."
              </p>
              <p className="font-body text-white/50 text-sm">
                Luke H. — Plumber, Perth · Pro plan
              </p>
            </blockquote>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="mb-12">
              <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-4">FAQ</p>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] text-brand">
                Common questions.
              </h2>
            </div>
          </AnimateIn>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <AnimateIn key={i} direction="up">
                <div className="border border-slate-100 rounded-4xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-display text-sm uppercase tracking-tight text-brand">{faq.question}</span>
                    <span className={`text-slate-400 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}>
                      ▾
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="font-body text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-black py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <AnimateIn direction="up">
            <div>
              <p className="font-display text-[11px] uppercase tracking-[0.2em] text-white/30 mb-4">
                Free to start
              </p>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.88] text-white max-w-xl">
                Stop typing.<br />
                <span className="text-accent">Start talking.</span>
              </h2>
            </div>
          </AnimateIn>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-display text-sm uppercase tracking-widest text-brand px-10 py-5 rounded-2xl text-base hover:brightness-95 transition-all"
            style={{ backgroundColor: '#DFFF00' }}
          >
            Download Free
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
