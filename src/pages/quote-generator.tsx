import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { Check, X, Mic, FileText, Send, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

const steps = [
  {
    num: '01',
    icon: Mic,
    title: 'Open the app and tap record',
    desc: 'Takes five seconds. No login, no setup, no form to fill in.',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Describe the job out loud',
    desc: 'Labour, materials, call-out fee — say it how you'd say it to a mate. SMASH figures out the rest.',
  },
  {
    num: '03',
    icon: Send,
    title: 'Review and send',
    desc: 'Your professional, GST-compliant quote is ready. Tap send. It lands in your client\'s inbox as a PDF.',
  },
];

const quoteFeatures = [
  'Your business name and ABN',
  'Itemised labour and materials with GST',
  'Professional PDF layout',
  'Client email delivery in one tap',
  'Optional Pay Now button (Stripe)',
  'Quote-to-invoice conversion when approved',
];

interface CompRow {
  label: string;
  smash: boolean | string;
  word: boolean | string;
  others: boolean | string;
}

const comparison: CompRow[] = [
  { label: 'Voice input',           smash: true,       word: false,     others: false },
  { label: 'Quote in under 60s',    smash: true,       word: false,     others: false },
  { label: 'Free plan',             smash: true,       word: true,      others: 'Some' },
  { label: 'GST-compliant PDF',     smash: true,       word: 'Manual',  others: true },
  { label: 'iPhone-first design',   smash: true,       word: false,     others: 'Partial' },
  { label: 'AI learns your rates',  smash: true,       word: false,     others: false },
  { label: 'Instant PDF email',     smash: true,       word: 'Manual',  others: true },
];

const faqs = [
  {
    q: 'Is SMASH really free?',
    a: 'Yes. The free plan gives you 2 quotes per month, forever. No credit card needed to start. Upgrade to Pro ($22.99/month) if you need unlimited quotes.',
  },
  {
    q: 'Does it work on Android?',
    a: 'Right now SMASH is iPhone only. Android is in development — it\'s the most-requested feature and it\'s coming. Jump on the free plan and you\'ll be notified when it launches.',
  },
  {
    q: 'Are quotes GST-compliant?',
    a: 'Yes. Every quote includes your ABN, GST line-item breakdown, and meets ATO requirements for tax invoices. You can toggle GST-inclusive or exclusive per line item.',
  },
  {
    q: 'Can I add my logo?',
    a: 'Custom branding (logo, colours) is on the roadmap and coming soon. Right now your business name, ABN, and contact details appear on every quote.',
  },
  {
    q: 'Does it work without internet?',
    a: 'An internet connection is needed to process your voice and generate the quote. The app works on 4G/5G so you can quote straight from the job site.',
  },
  {
    q: 'What if I need to edit the quote?',
    a: 'You can review and edit any line item before sending. Change prices, add or remove items, update the description — full control before it goes out.',
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

export function QuoteGenerator() {
  return (
    <>
      <SEO
        title="Free Quote Generator for Australian Tradies | SMASH"
        description="Australia's fastest quote generator. Describe the job out loud — get a professional, GST-compliant quote in 60 seconds. Free to start. iPhone app for tradies."
        keywords="free quote generator australia, tradie quote generator, quote generator app, invoice quote generator, GST quote generator australia"
        ogTitle="Free Quote Generator for Tradies — SMASH"
        ogDescription="Voice-powered quote generator for Australian tradies. Professional quotes in 60 seconds. Free to start."
        canonical="https://smashinvoices.com/quote-generator"
      />

      <Nav />

      {/* HERO */}
      <section className="bg-brand pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-5">Free quote generator</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
              Stop typing quotes.<br />
              <span className="text-accent">Just talk.</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/65 font-medium leading-[1.5] max-w-2xl mb-8">
              SMASH is the only quote generator built for Australian tradies. Describe the job out loud
              — get a professional, GST-compliant quote in under 60 seconds.
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
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-[32px] border border-white/20 text-white font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                See how it works
              </Link>
            </div>
            <p className="font-body text-white/35 text-sm font-medium mt-4">
              2 quotes free per month · No credit card · iPhone
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">How it works</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12">
              Three steps.<br />Under 60 seconds.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimateIn key={i} direction="up" delay={i * 80}>
                  <div className="rounded-[28px] bg-brand p-7 h-full">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center">
                        <Icon size={20} className="text-accent" strokeWidth={2.5} />
                      </div>
                      <span className="font-mono text-4xl font-bold text-white/8 leading-none">{step.num}</span>
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

      {/* WHAT'S IN EVERY QUOTE */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn direction="left">
              <p className="text-accent font-black text-xs uppercase tracking-widest mb-4">Every quote includes</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
                Professional.<br />GST-ready.<br />Instant.
              </h2>
              <p className="font-body text-white/60 font-medium text-base leading-[1.5] mb-8">
                Every quote SMASH generates meets ATO requirements out of the box. No formatting,
                no manual calculations, no chasing your template.
              </p>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all"
              >
                Try it free
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
            </AnimateIn>
            <AnimateIn direction="right">
              <div className="rounded-[28px] bg-white/[0.04] border border-white/10 overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10 bg-accent/5">
                  <p className="font-black text-xs uppercase tracking-widest text-accent">Quote features</p>
                </div>
                <ul className="divide-y divide-white/6">
                  {quoteFeatures.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 px-6 py-4">
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
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">Compare quote generators</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10">
              Why tradies choose SMASH.
            </h2>

            <div className="rounded-[28px] bg-brand overflow-hidden border border-white/10">
              {/* Header */}
              <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-6 py-4 bg-white/[0.04] border-b border-white/10">
                <span className="font-body text-xs font-bold text-white/40 uppercase tracking-widest">Feature</span>
                <div className="w-[76px] text-center"><span className="font-black text-xs uppercase tracking-widest text-accent">SMASH</span></div>
                <div className="w-[76px] text-center"><span className="font-body text-xs font-medium text-white/40">Word/Excel</span></div>
                <div className="w-[76px] text-center"><span className="font-body text-xs font-medium text-white/40">Other apps</span></div>
              </div>
              {/* Rows */}
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
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-10">
              Good questions.
            </h2>
            <div>
              {faqs.map((faq, i) => (
                <FAQ key={i} q={faq.q} a={faq.a} />
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
              Generate your first quote in 60 seconds.
            </h2>
            <p className="font-body text-brand/70 font-medium text-lg leading-[1.5] mb-8 max-w-xl mx-auto">
              Free to start. No card needed. Just talk and send.
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

      {/* RELATED LINKS */}
      <section className="bg-brand py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/invoice-generator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Invoice Generator →
              </Link>
              <Link to="/voice-invoicing" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Voice Invoicing →
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
