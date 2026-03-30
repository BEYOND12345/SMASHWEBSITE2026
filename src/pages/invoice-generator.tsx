import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { Check, X, Mic, Zap, CreditCard, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

const steps = [
  {
    num: '01',
    icon: Mic,
    title: 'Describe the job',
    desc: 'Tap record and talk. "Replace hot water system, 3 hours labour, call-out fee, plus GST." That\'s all it takes.',
  },
  {
    num: '02',
    icon: Zap,
    title: 'SMASH builds your invoice',
    desc: 'AI extracts every line item, calculates GST, formats it to ATO standards. Done in seconds.',
  },
  {
    num: '03',
    icon: CreditCard,
    title: 'Send and get paid',
    desc: 'Your client receives a PDF with a Pay Now button. Money hits your account in 2 business days.',
  },
];

const invoiceFeatures = [
  'ATO-compliant tax invoice format',
  'ABN displayed on every invoice',
  'GST calculated automatically (inclusive or exclusive)',
  'Line items — labour, materials, call-out',
  'Invoice number auto-generated',
  'Stripe payment link built in',
  'Read receipts — see when client opens it',
  'Overdue tracking with days-outstanding counter',
];

interface CompRow {
  label: string;
  smash: boolean | string;
  word: boolean | string;
  others: boolean | string;
}

const comparison: CompRow[] = [
  { label: 'Voice-to-invoice',        smash: true,       word: false,     others: false },
  { label: 'Invoice in under 60s',    smash: true,       word: false,     others: false },
  { label: 'ATO-compliant format',    smash: true,       word: 'Manual',  others: true },
  { label: 'Built-in payment link',   smash: true,       word: false,     others: 'Some' },
  { label: 'Read receipts',           smash: true,       word: false,     others: false },
  { label: 'Overdue tracking',        smash: true,       word: false,     others: 'Some' },
  { label: 'Free plan',               smash: true,       word: true,      others: 'Some' },
  { label: 'iPhone-first',            smash: true,       word: false,     others: 'Partial' },
];

const faqs = [
  {
    q: 'Is the invoice generator free?',
    a: 'Yes — SMASH has a free plan that lets you send 2 invoices per month with no credit card required. Upgrade to Pro ($22.99/month) for unlimited invoices and all features.',
  },
  {
    q: 'Are SMASH invoices ATO-compliant?',
    a: 'Yes. Every invoice includes your ABN, GST breakdown, sequential invoice numbers, and all fields required by the ATO for a valid tax invoice.',
  },
  {
    q: 'How does the payment link work?',
    a: 'SMASH integrates with Stripe. Your client taps "Pay Now" on the invoice link, pays by card, and you receive the money in your bank account within 2 business days.',
  },
  {
    q: 'Can I convert a quote to an invoice?',
    a: 'Quote-to-invoice conversion is in development — it\'s the most requested feature after Android. It\'ll be a single tap when it launches. For now, you can create the invoice from voice in the same amount of time.',
  },
  {
    q: 'What if my client hasn\'t paid?',
    a: 'SMASH tracks payment status on every invoice and shows you which are overdue and by how many days. You can also see if your client opened the invoice (read receipts).',
  },
  {
    q: 'Can I invoice in Australian dollars?',
    a: 'Yes — SMASH is built for Australia. AUD, GST, ABN. Everything is Australian by default.',
  },
];

function CellVal({ val }: { val: boolean | string }) {
  if (val === true) return <Check size={16} className="text-accent mx-auto" strokeWidth={2.5} />;
  if (val === false) return <X size={14} className="text-white/25 mx-auto" strokeWidth={2.5} />;
  return <span className="font-body text-xs text-white/40">{val}</span>;
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-black text-sm uppercase tracking-tighter text-white leading-[0.95]">{q}</span>
        <ChevronDown
          size={16}
          className={`text-white/40 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          strokeWidth={2.5}
        />
      </button>
      {open && (
        <p className="font-body text-sm font-medium text-white/60 leading-[1.6] pb-5">{a}</p>
      )}
    </div>
  );
}

export function InvoiceGenerator() {
  return (
    <>
      <SEO
        title="Free Invoice Generator for Australian Tradies | SMASH"
        description="Australia's fastest invoice generator. Describe the job out loud — get an ATO-compliant tax invoice with Stripe payment link in under 60 seconds. Free to start."
        keywords="free invoice generator australia, tradie invoice generator, invoice generator app, tax invoice generator australia, GST invoice generator"
        ogTitle="Free Invoice Generator for Tradies — SMASH"
        ogDescription="Voice-powered invoice generator for Australian tradies. ATO-compliant tax invoices in 60 seconds. Free to start."
        canonical="https://smashinvoices.com/invoice-generator"
      />

      <Nav />

      {/* HERO */}
      <section className="bg-brand pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-5">Free invoice generator</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
              Stop emailing<br />
              Word docs.<br />
              <span className="text-accent">Invoice in 60s.</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/65 font-medium leading-[1.5] max-w-2xl mb-8">
              SMASH turns a voice description into a professional, ATO-compliant tax invoice —
              with a Pay Now button — before you've packed up your tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all shadow-glow"
              >
                Download Free
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
              <Link
                to="/features"
                className="inline-flex items-center justify-center px-8 py-4 rounded-[32px] border border-white/20 text-white font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                See all features
              </Link>
            </div>
            <p className="font-body text-white/35 text-sm font-medium mt-4">
              2 invoices free per month · No credit card · iPhone
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white/[0.03] border-y border-white/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-white/8">
            {[
              { stat: '60s', label: 'From job to invoice sent' },
              { stat: '2 days', label: 'To your bank via Stripe' },
              { stat: '$0', label: 'To get started' },
            ].map((item, i) => (
              <div key={i} className="py-8 px-6 text-center">
                <p className="text-3xl sm:text-4xl font-black text-accent tracking-tighter leading-none mb-1">{item.stat}</p>
                <p className="font-body text-xs font-medium text-white/40 uppercase tracking-widest leading-[1.4]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-3">How it works</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-12">
              Talk. Invoice.<br />Get paid.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimateIn key={i} direction="up" delay={i * 80}>
                  <div className="rounded-[28px] bg-white/[0.04] border border-white/10 p-7 h-full">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center">
                        <Icon size={20} className="text-accent" strokeWidth={2.5} />
                      </div>
                      <span className="font-mono text-4xl font-bold text-white/6 leading-none">{step.num}</span>
                    </div>
                    <h3 className="font-black text-base uppercase tracking-tighter text-white leading-[0.95] mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm font-medium text-white/55 leading-[1.5]">{step.desc}</p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT'S IN EVERY INVOICE */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn direction="left">
              <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-4">Every invoice includes</p>
              <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-6">
                ATO-compliant.<br />Stripe-ready.<br />Tracked.
              </h2>
              <p className="font-body text-brand/60 font-medium text-base leading-[1.5] mb-8">
                Every SMASH invoice is a valid ATO tax invoice with GST breakdown — and a Stripe payment
                link so clients can pay right from their phone.
              </p>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[32px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Try it free
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
            </AnimateIn>
            <AnimateIn direction="right">
              <div className="rounded-[28px] bg-brand border border-white/10 overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10 bg-accent/5">
                  <p className="font-black text-xs uppercase tracking-widest text-accent">Invoice features</p>
                </div>
                <ul className="divide-y divide-white/6">
                  {invoiceFeatures.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 px-6 py-3.5">
                      <Check size={14} className="text-accent shrink-0" strokeWidth={2.5} />
                      <span className="font-body text-sm font-medium text-white/70 leading-[1.4]">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-3">Compare</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-10">
              SMASH vs everything else.
            </h2>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] overflow-hidden">
              <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-6 py-4 bg-white/[0.04] border-b border-white/10">
                <span className="font-body text-xs font-bold text-white/40 uppercase tracking-widest">Feature</span>
                <div className="w-[76px] text-center"><span className="font-black text-xs uppercase tracking-widest text-accent">SMASH</span></div>
                <div className="w-[76px] text-center"><span className="font-body text-xs font-medium text-white/40">Word/Excel</span></div>
                <div className="w-[76px] text-center"><span className="font-body text-xs font-medium text-white/40">Other apps</span></div>
              </div>
              <div className="px-6">
                {comparison.map((row, i) => (
                  <div key={i} className="grid grid-cols-[1fr_auto_auto_auto] gap-3 items-center py-3.5 border-b border-white/6 last:border-0">
                    <span className="font-body text-sm font-medium text-white/70">{row.label}</span>
                    <div className="w-[76px] flex justify-center"><CellVal val={row.smash} /></div>
                    <div className="w-[76px] flex justify-center"><CellVal val={row.word} /></div>
                    <div className="w-[76px] flex justify-center"><CellVal val={row.others} /></div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-4">FAQ</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10">
              Common questions.
            </h2>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-brand/10">
                  <FAQ key={i} q={faq.q} a={faq.a} />
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">
              Send your first invoice in 60 seconds.
            </h2>
            <p className="font-body text-brand/70 font-medium text-lg leading-[1.5] mb-8 max-w-xl mx-auto">
              Free to start. No card. Just describe the job and tap send.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[32px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Download on App Store
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-[32px] border-2 border-brand/30 text-brand font-black text-sm uppercase tracking-widest hover:bg-brand/10 transition-all"
              >
                See pricing
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-brand py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/quote-generator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Quote Generator →
              </Link>
              <Link to="/ai-invoicing" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                AI Invoicing →
              </Link>
              <Link to="/gst-compliant-invoicing" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                GST Invoicing →
              </Link>
              <Link to="/smash-vs-xero" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                SMASH vs Xero →
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
