import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { StructuredData, createBreadcrumbSchema, createFAQSchema } from '../components/structured-data';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { Check, X, ChevronDown, Wrench, Zap, Users, Star, Quote } from 'lucide-react';
import { useState } from 'react';
import { Nav } from '../components/nav';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

const pricingTestimonials = [
  {
    quote: "Paid for itself on the first week. I used to lose track of small jobs. Now they're all invoiced before I've even driven off.",
    name: "Luke H.",
    trade: "Plumber, Perth",
    plan: "Pro",
  },
  {
    quote: "The free plan was enough to convince me. Two quotes in and I upgraded same day. Best $22 I spend every month.",
    name: "Marcus W.",
    trade: "Sparky, Gold Coast",
    plan: "Pro",
  },
  {
    quote: "I run three guys and we all use it. Way cheaper than the software my accountant wanted us on — and honestly faster.",
    name: "Dave R.",
    trade: "Plumbing contractor, Brisbane",
    plan: "Unlimited",
  },
];

const pricingFaqs = [
  {
    question: "Is the free plan really free forever?",
    answer: "Yes. No credit card, no time limit. You get 2 quotes per month to try SMASH risk-free. When you're ready to do more, upgrading takes 30 seconds."
  },
  {
    question: "Can I switch plans at any time?",
    answer: "Absolutely. Upgrade, downgrade, or cancel whenever you want. No lock-in contracts. If you downgrade, you keep your current plan until the billing period ends."
  },
  {
    question: "What payment methods do you accept?",
    answer: "All major credit and debit cards through Stripe. All prices are in Australian dollars (AUD). Your card details are handled securely by Stripe — we never see or store them."
  },
  {
    question: "Do I need a credit card to start?",
    answer: "No. Download the app, create an account, and start quoting — no card needed. You only need payment details when you upgrade to a paid plan."
  },
  {
    question: "What happens when I hit my quote limit?",
    answer: "You won't lose any data. You'll be prompted to upgrade to the next plan. All your existing quotes and invoices stay exactly where they are."
  },
  {
    question: "Does my 14-day free trial auto-charge?",
    answer: "Yes, at the end of the trial period if you haven't cancelled. You'll get a reminder before you're charged. Cancel any time in your account settings — no hassle."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between gap-4 py-6 text-left transition-colors hover:text-brand/70"
      >
        <span className="text-lg font-bold text-brand">{question}</span>
        <ChevronDown
          size={24}
          className={`shrink-0 transition-transform text-brand/40 ${isOpen ? 'rotate-180' : ''}`}
          strokeWidth={2.5}
        />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="font-body text-brand/70 font-medium leading-[1.6]">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function Pricing() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Pricing | Voice Invoicing Plans | SMASH Invoices"
        description="Free to start. Voice invoicing plans from $14.99 AUD/month. Built for tradies and service businesses across Australia. No credit card required."
        keywords="voice invoicing pricing, invoice app pricing, SMASH pricing, invoicing plans Australia, free invoicing app"
        ogTitle="Pricing — SMASH Invoices"
        ogDescription="Stop leaving money on the table. Voice invoicing from $14.99/month for Australian tradies."
        ogImage="https://smashinvoices.com/og-image.png"
        ogUrl="https://smashinvoices.com/pricing"
        twitterTitle="Pricing — SMASH Invoices"
        twitterDescription="Stop leaving money on the table. Voice invoicing from $14.99/month for Australian tradies."
        canonical="https://smashinvoices.com/pricing"
      />
      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com' },
        { name: 'Pricing', url: 'https://smashinvoices.com/pricing' },
      ])} />
      <StructuredData data={createFAQSchema(pricingFaqs)} />

      <Nav />

      {/* HERO */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero_image.png"
            alt="SMASH Invoices pricing plans"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/90 to-brand/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.88] uppercase tracking-tighter">
            Stop leaving money<br />on the table.
          </h1>
          <p className="font-body text-lg sm:text-xl md:text-2xl text-white/80 font-medium leading-[1.4] max-w-2xl mx-auto mb-4">
            The average tradie loses <span className="text-accent font-black">$8,684/year</span> in uninvoiced work.
            SMASH costs less than a slab.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="text-accent fill-accent" />
                ))}
              </div>
              <span className="font-body text-xs font-semibold text-white/70">4.9 App Store</span>
            </div>
            <p className="font-body text-sm text-white/50 font-medium">Free to start · No credit card required</p>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="bg-surface py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

            {/* FREE */}
            <div className="rounded-[32px] border-2 border-border bg-white p-6 sm:p-8 flex flex-col">
              <h3 className="text-xl font-black uppercase tracking-tighter text-brand mb-2">Free</h3>
              <p className="font-body text-brand/60 font-medium text-sm leading-[1.5] mb-6">
                Dip your toe in. No strings.
              </p>
              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-black text-brand leading-[0.88]">$0</span>
                <span className="text-brand/40 font-medium text-sm ml-1">/month</span>
              </div>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-3 sm:py-4 rounded-[32px] border-2 border-brand text-brand font-black text-sm uppercase tracking-widest hover:bg-brand hover:text-white transition-all mb-3"
              >
                Download Free
              </a>
              <p className="text-xs text-brand/40 font-medium text-center mb-8">No credit card required</p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">2 quotes per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Voice-to-quote</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Professional quote PDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Customer quote link</span>
                </li>
              </ul>
            </div>

            {/* STARTER */}
            <div className="rounded-[32px] border-2 border-border bg-white p-6 sm:p-8 flex flex-col">
              <h3 className="text-xl font-black uppercase tracking-tighter text-brand mb-2">Starter</h3>
              <p className="font-body text-brand/60 font-medium text-sm leading-[1.5] mb-6">
                For sole traders getting serious.
              </p>
              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-black text-brand leading-[0.88]">$14.99</span>
                <span className="text-brand/40 font-medium text-sm ml-1">AUD/mo</span>
              </div>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-3 sm:py-4 rounded-[32px] border-2 border-brand text-brand font-black text-sm uppercase tracking-widest hover:bg-brand hover:text-white transition-all mb-3"
              >
                Try Free 14 Days
              </a>
              <p className="text-xs text-brand/40 font-medium text-center mb-8">14-day free trial, cancel anytime</p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">20 quotes per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Unlimited invoices</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Quote-to-invoice conversion</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Payment collection via Stripe</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Read receipts</span>
                </li>
              </ul>
            </div>

            {/* PRO — HIGHLIGHTED */}
            <div className="rounded-[32px] border-2 border-accent bg-white p-6 sm:p-8 flex flex-col relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-accent text-brand font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter text-brand mb-2">Pro</h3>
              <p className="font-body text-brand/60 font-medium text-sm leading-[1.5] mb-6">
                For busy tradies who mean business.
              </p>
              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-black text-brand leading-[0.88]">$22.99</span>
                <span className="text-brand/40 font-medium text-sm ml-1">AUD/mo</span>
              </div>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all mb-3"
              >
                Try Free 14 Days
              </a>
              <p className="text-xs text-brand/40 font-medium text-center mb-8">14-day free trial, cancel anytime</p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">35 quotes per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Everything in Starter</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Custom branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Advanced reporting</span>
                </li>
              </ul>
            </div>

            {/* UNLIMITED */}
            <div className="rounded-[32px] border-2 border-border bg-white p-6 sm:p-8 flex flex-col">
              <h3 className="text-xl font-black uppercase tracking-tighter text-brand mb-2">Unlimited</h3>
              <p className="font-body text-brand/60 font-medium text-sm leading-[1.5] mb-6">
                For teams that never stop quoting.
              </p>
              <div className="mb-6">
                <span className="text-4xl sm:text-5xl font-black text-brand leading-[0.88]">$32.99</span>
                <span className="text-brand/40 font-medium text-sm ml-1">AUD/mo</span>
              </div>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-3 sm:py-4 rounded-[32px] border-2 border-brand text-brand font-black text-sm uppercase tracking-widest hover:bg-brand hover:text-white transition-all mb-3"
              >
                Try Free 14 Days
              </a>
              <p className="text-xs text-brand/40 font-medium text-center mb-8">14-day free trial, cancel anytime</p>
              <ul className="space-y-3 mt-auto">
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Unlimited quotes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Everything in Pro</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Multi-user access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Accounting integration (coming soon)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="shrink-0 mt-0.5 text-accent" strokeWidth={3} />
                  <span className="font-body text-sm font-medium text-brand/80 leading-[1.4]">Dedicated support</span>
                </li>
              </ul>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-[0.88] text-white mb-2">
              They were sceptical too.
            </h2>
            <p className="font-body text-white/55 font-medium">Here's what happened after they tried it.</p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {pricingTestimonials.map((t, i) => (
              <AnimateIn key={i} delay={i * 80} direction="up">
                <div className="rounded-[24px] bg-white/6 border border-white/10 p-6 md:p-7 flex flex-col h-full">
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <Quote size={20} className="text-accent/60 mb-3 shrink-0" />
                  <p className="font-body text-base font-medium text-white/85 leading-[1.6] mb-5 flex-1">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-black text-sm text-white uppercase tracking-wide">{t.name}</p>
                      <p className="font-body text-xs text-white/45 font-medium mt-0.5">{t.trade}</p>
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/25">
                      {t.plan}
                    </span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* IS SMASH RIGHT FOR ME? */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand mb-4 uppercase tracking-tighter leading-[0.88] text-center">
            Is SMASH right for me?
          </h2>
          <p className="font-body text-center text-brand/60 font-medium mb-12 md:mb-16 max-w-xl mx-auto leading-[1.5]">
            If you're quoting work on your phone, the answer is yes.
          </p>
          <AnimateIn direction="up" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-[32px] p-8 border-2 border-border">
              <Wrench size={28} className="text-accent mb-4" strokeWidth={2} />
              <h3 className="text-xl font-black uppercase tracking-tighter text-brand mb-3 leading-[0.88]">Just starting out</h3>
              <p className="font-body text-brand/70 font-medium text-sm leading-[1.5] mb-4">
                Use the Free plan. Two quotes a month to try SMASH and see if it sticks. No card, no commitment.
              </p>
              <span className="inline-block text-xs font-black uppercase tracking-widest bg-brand/10 text-brand px-3 py-1.5 rounded-full">
                Start with Free
              </span>
            </div>
            <div className="bg-surface rounded-[32px] p-8 border-2 border-accent">
              <Zap size={28} className="text-accent mb-4" strokeWidth={2} />
              <h3 className="text-xl font-black uppercase tracking-tighter text-brand mb-3 leading-[0.88]">Sole trader, always on the go</h3>
              <p className="font-body text-brand/70 font-medium text-sm leading-[1.5] mb-4">
                You're quoting multiple jobs a week. You need invoices paid fast. Starter or Pro will pay for itself after one job.
              </p>
              <span className="inline-block text-xs font-black uppercase tracking-widest bg-accent text-brand px-3 py-1.5 rounded-full">
                Best on Starter or Pro
              </span>
            </div>
            <div className="bg-surface rounded-[32px] p-8 border-2 border-border">
              <Users size={28} className="text-accent mb-4" strokeWidth={2} />
              <h3 className="text-xl font-black uppercase tracking-tighter text-brand mb-3 leading-[0.88]">Running a team</h3>
              <p className="font-body text-brand/70 font-medium text-sm leading-[1.5] mb-4">
                Multiple people quoting and invoicing. You need visibility, branding, and accounting integration. That's Unlimited.
              </p>
              <span className="inline-block text-xs font-black uppercase tracking-widest bg-brand/10 text-brand px-3 py-1.5 rounded-full">
                Best on Unlimited
              </span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* VALUE ANCHOR */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-[0.88] text-center">
            The real cost of not using SMASH
          </h2>
          <p className="font-body text-center text-white/60 font-medium mb-12 max-w-xl mx-auto leading-[1.5]">
            Every forgotten invoice is cash that never hits your account.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr className="border-b-2 border-white/20">
                  <th className="text-left py-4 pr-6 text-sm font-black uppercase tracking-wider text-white/50"></th>
                  <th className="text-center py-4 px-4 text-sm font-black uppercase tracking-wider text-white/50">Without SMASH</th>
                  <th className="text-center py-4 px-4 text-sm font-black uppercase tracking-wider text-accent">With SMASH Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Time to send a quote", without: "15–30 mins", with: "Under 60 seconds" },
                  { label: "Jobs that get invoiced", without: "~70%", with: "100%" },
                  { label: "Average uninvoiced per year", without: "$8,684", with: "$0" },
                  { label: "Cost of the tool", without: "$0", with: "$22.99/month" },
                  { label: "Annual ROI", without: "—", with: "Over 3,000%" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/10">
                    <td className="py-4 pr-6 text-sm font-bold text-white leading-[1.15]">{row.label}</td>
                    <td className="text-center py-4 px-4 text-sm font-medium text-white/50">{row.without}</td>
                    <td className="text-center py-4 px-4 text-sm font-black text-accent">{row.with}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* COMPETITOR COMPARISON */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand mb-4 uppercase tracking-tighter leading-[0.88] text-center">
            How SMASH stacks up
          </h2>
          <p className="font-body text-center text-brand/60 font-medium mb-12 max-w-xl mx-auto leading-[1.5]">
            Desktop invoicing tools weren't built for the job site. SMASH was.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b-2 border-brand">
                  <th className="text-left py-4 pr-6 text-sm font-black uppercase tracking-wider text-brand"></th>
                  <th className="text-center py-4 px-3 text-sm font-black uppercase tracking-wider text-accent">SMASH</th>
                  <th className="text-center py-4 px-3 text-sm font-black uppercase tracking-wider text-brand/50">Xero</th>
                  <th className="text-center py-4 px-3 text-sm font-black uppercase tracking-wider text-brand/50">MYOB</th>
                  <th className="text-center py-4 px-3 text-sm font-black uppercase tracking-wider text-brand/50">ServiceM8</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Built for tradies", smash: true, xero: false, myob: false, sm8: true },
                  { label: "Voice-to-quote", smash: true, xero: false, myob: false, sm8: false },
                  { label: "Quote in under 60 sec", smash: true, xero: false, myob: false, sm8: false },
                  { label: "iPhone-first", smash: true, xero: false, myob: false, sm8: false },
                  { label: "Under $25/month", smash: true, xero: false, myob: false, sm8: false },
                  { label: "No setup required", smash: true, xero: false, myob: false, sm8: false },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="py-4 pr-6 text-sm font-bold text-brand leading-[1.15]">{row.label}</td>
                    {[row.smash, row.xero, row.myob, row.sm8].map((val, j) => (
                      <td key={j} className="text-center py-4 px-3">
                        {val ? (
                          <Check size={18} className={`mx-auto ${j === 0 ? 'text-accent' : 'text-brand/40'}`} strokeWidth={3} />
                        ) : (
                          <X size={18} className="mx-auto text-brand/20" strokeWidth={2.5} />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OBJECTION KILLERS */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="space-y-10 md:space-y-12">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-2">
                "I'm not tech-savvy."
              </p>
              <p className="font-body text-lg text-brand/60 font-medium leading-[1.5]">
                You speak. SMASH types. That's it.
              </p>
            </div>
            <div className="border-t border-border pt-10 md:pt-12">
              <p className="text-2xl sm:text-3xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-2">
                "I already use spreadsheets."
              </p>
              <p className="font-body text-lg text-brand/60 font-medium leading-[1.5]">
                Your spreadsheet can't send itself.
              </p>
            </div>
            <div className="border-t border-border pt-10 md:pt-12">
              <p className="text-2xl sm:text-3xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-2">
                "I'll set it up next week."
              </p>
              <p className="font-body text-lg text-brand/60 font-medium leading-[1.5]">
                Every week you wait is another forgotten job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-[32px] border-2 border-border p-8 text-center">
              <p className="text-5xl font-black text-accent leading-[0.88] mb-2">60s</p>
              <p className="text-sm font-bold text-brand uppercase tracking-wide">Average time to quote</p>
            </div>
            <div className="bg-white rounded-[32px] border-2 border-border p-8 text-center">
              <p className="text-5xl font-black text-accent leading-[0.88] mb-2">100%</p>
              <p className="text-sm font-bold text-brand uppercase tracking-wide">Jobs invoiced on SMASH</p>
            </div>
            <div className="bg-white rounded-[32px] border-2 border-border p-8 text-center">
              <p className="text-5xl font-black text-accent leading-[0.88] mb-2">4.8★</p>
              <p className="text-sm font-bold text-brand uppercase tracking-wide">App Store rating</p>
            </div>
          </div>
          <div className="mt-8 bg-white rounded-[32px] border-2 border-border p-8 md:p-10 max-w-3xl mx-auto">
            <p className="font-body text-xl md:text-2xl font-black text-brand leading-[1.4] italic mb-4">
              "I used to forget at least two or three jobs a month. Now I quote on the spot and the invoice is already done. Paid faster, less stress."
            </p>
            <p className="text-sm font-bold text-brand/50 uppercase tracking-wide">— Dave, electrician, Brisbane</p>
          </div>
        </div>
      </section>

      {/* PRICING FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand mb-10 md:mb-14 uppercase tracking-tighter leading-[0.88] text-center">
            Pricing Questions
          </h2>
          <div className="bg-surface rounded-[32px] border-2 border-border px-4 sm:px-8 py-2 sm:py-4">
            {pricingFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter leading-[0.88]">
            Ready to get paid faster?
          </h2>
          <p className="font-body text-lg sm:text-xl text-white/80 font-medium leading-[1.5] mb-2 max-w-xl mx-auto">
            Free to start. Talk for 30 seconds. See your first quote appear.
          </p>
          <p className="font-body text-sm text-white/50 font-medium mb-8">
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-95 transition-all shadow-glow"
            >
              Start Free
            </a>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] border-2 border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-white/10 transition-all"
            >
              See How It Works
            </Link>
          </div>
          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 mb-6">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-accent fill-accent" />
                ))}
              </div>
              <span className="font-body text-xs font-semibold text-white/55">4.9 App Store</span>
            </div>
            <span className="text-white/20 hidden sm:block">·</span>
            <span className="font-body text-xs font-medium text-white/40">No credit card required</span>
            <span className="text-white/20 hidden sm:block">·</span>
            <span className="font-body text-xs font-medium text-white/40">Cancel anytime</span>
          </div>
          <p className="text-sm text-white/40 font-medium">
            Questions? <Link to="/faq" className="underline hover:text-white/70 transition-colors">See the FAQ</Link> or <Link to="/features" className="underline hover:text-white/70 transition-colors">explore all features</Link>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
