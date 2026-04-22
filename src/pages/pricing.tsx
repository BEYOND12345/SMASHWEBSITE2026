import { useState } from 'react';
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

// Single global pricing in AUD — same plan worldwide. Invoices you send
// to your customers default to your local currency (AUD / NZD / GBP /
// USD / CAD); the subscription itself is billed in AUD on the same
// plan in every market.
type TierName = 'Free' | 'Starter' | 'Pro' | 'Unlimited';
const tierPricing: Record<TierName, string> = {
  Free:      '0',
  Starter:   '12',
  Pro:       '29',
  Unlimited: '49',
};

interface Tier {
  name: TierName;
  volume: string;
  description: string;
  highlight: boolean;
  badge?: string;
}

const tiers: Tier[] = [
  { name: 'Free',      volume: '2 quotes / month',   description: 'Test SMASH on real jobs. No card needed.',      highlight: false                         },
  { name: 'Starter',   volume: '20 quotes / month',  description: 'Built for the side-hustle and weekenders.',     highlight: false                         },
  { name: 'Pro',       volume: '35 quotes / month',  description: 'For service pros quoting every day.',           highlight: true,  badge: 'Most Popular'  },
  { name: 'Unlimited', volume: 'Unlimited quotes',   description: 'For lead-rich businesses and crews.',           highlight: false                         },
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
    question: 'Which currencies does SMASH support?',
    answer: 'Invoices you send your customers default to your local currency — AUD in Australia, NZD in New Zealand, GBP in the UK, USD in the US, CAD in Canada. Each market also gets local tax handling: GST in AU/NZ, VAT in the UK, state sales tax in the US, GST/HST/PST in Canada. The subscription itself is billed in AUD on the same plan everywhere.',
  },
  {
    question: 'Is SMASH available in my country?',
    answer: 'Yes — SMASH is live in Australia, New Zealand, the United Kingdom, the United States and Canada. Download from your country\'s App Store, or use the Chrome extension on any laptop. Free to start, no credit card required.',
  },
  {
    question: 'Why is the subscription priced in AUD?',
    answer: 'SMASH is built in Australia and we keep one global plan so the price never moves on you when exchange rates shift. Same plan, same features, same price — wherever you work. Stripe handles the currency conversion at checkout.',
  },
];

export function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Pricing | SMASH Invoices — Voice Invoicing for Tradies"
        description="Simple volume-based pricing for SMASH Invoices. Free, Starter $12, Pro $29 and Unlimited $49 — every plan includes the full feature set. Billed in AUD; invoices send in your local currency (AUD, NZD, GBP, USD, CAD)."
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
              Pricing — One global plan
            </p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-[112px] uppercase tracking-tighter leading-[0.88] text-white mb-6">
              Pay for<br />
              <span className="text-accent">what you use.</span>
            </h1>
            <p className="font-body text-xl text-white/60 max-w-xl mx-auto leading-relaxed mb-8">
              Every plan includes the full feature set. The only difference is volume. Start free — no card needed.
            </p>

            {/* Global availability badge */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="font-display text-[11px] uppercase tracking-widest text-white/60">Live in</span>
              <span className="text-base">🇦🇺 🇳🇿 🇬🇧 🇺🇸 🇨🇦</span>
              <span className="font-display text-[11px] uppercase tracking-widest text-white/40">on iOS &amp; Chrome</span>
            </div>

            <p className="mt-5 font-body text-sm text-white/50 max-w-md mx-auto">
              Subscription billed in AUD worldwide. Invoices to your customers send in your local currency with the right tax format.
            </p>
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
              const price = tierPricing[tier.name];
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
                        {isFree ? 'Free' : `$${price}`}
                      </span>
                    </div>
                    <p className={`font-body text-sm mb-1 ${
                      tier.highlight ? 'text-brand/70' : 'text-slate-400'
                    }`}>
                      {!isFree && '/ month AUD'}
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
                      <a
                        href={APP_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block text-center py-4 rounded-2xl font-display text-sm uppercase tracking-widest transition-all bg-brand text-white hover:brightness-110"
                      >
                        {isFree ? 'Start Free' : 'Get Started'}
                      </a>
                      <p className={`text-center font-body text-xs mt-3 ${
                        tier.highlight ? 'text-brand/50' : 'text-slate-400'
                      }`}>
                        {isFree ? 'No account needed to try' : 'Cancel anytime · No lock-in'}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

          <p className="mt-10 text-center font-body text-xs text-slate-400 max-w-2xl mx-auto">
            All prices in AUD and include GST. Same plan worldwide — Stripe converts at checkout to your local card currency. Customer-facing invoices send in your local currency (AUD, NZD, GBP, USD, CAD).
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
