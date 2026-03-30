import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { StructuredData, createFAQSchema, createBreadcrumbSchema, createHowToSchema, createCalculatorSchema } from '../components/structured-data';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { Check, X, ChevronDown, Star, Quote as QuoteIcon, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

const testimonials = [
  {
    quote: "I was always second-guessing my GST. SMASH just handles it automatically on every invoice.",
    name: "Mark T.",
    trade: "Electrician, Perth",
  },
  {
    quote: "ATO audit-ready invoices without thinking about GST at all. That's worth the subscription alone.",
    name: "Sandra K.",
    trade: "Bookkeeper, Brisbane",
  },
  {
    quote: "Before SMASH I'd Google GST every single job. Now the app calculates it and adds it to the invoice in one go.",
    name: "Pete R.",
    trade: "Plumber, Sydney",
  },
];

interface CompRow {
  label: string;
  smash: boolean | string;
  manual: boolean | string;
  others: boolean | string;
}

const comparison: CompRow[] = [
  { label: 'Instant GST calculation',    smash: true,       manual: false,     others: 'Some' },
  { label: 'Add & remove GST modes',     smash: true,       manual: false,     others: 'Partial' },
  { label: 'ATO-compliant invoices',     smash: true,       manual: 'Manual',  others: true },
  { label: 'ABN on every invoice',       smash: true,       manual: 'Manual',  others: 'Partial' },
  { label: 'GST auto-applied per item',  smash: true,       manual: false,     others: 'Some' },
  { label: 'Mix GST / GST-free items',   smash: true,       manual: false,     others: false },
  { label: 'Free to start',             smash: true,       manual: true,      others: 'Some' },
];

const faqs = [
  {
    q: 'What is GST in Australia?',
    a: 'GST (Goods and Services Tax) is a 10% tax applied to most goods and services sold in Australia. It is administered by the ATO and mandatory for businesses with annual turnover above $75,000. Registered businesses collect GST on behalf of the ATO and remit it quarterly or annually via a Business Activity Statement (BAS).',
  },
  {
    q: 'How do I add GST to a price?',
    a: 'Multiply the ex-GST price by 1.1 to get the total including GST. Example: $500 ex-GST × 1.1 = $550 inc-GST, where the $50 difference is the GST component you collect and remit to the ATO. SMASH adds GST automatically to every invoice.',
  },
  {
    q: 'How do I remove GST from a price?',
    a: 'Divide the inc-GST price by 1.1 to find the ex-GST amount. Example: $550 ÷ 1.1 = $500 ex-GST. To find just the GST component from an inc-GST price, divide by 11 — so $550 ÷ 11 = $50 GST. This calculator handles both directions instantly.',
  },
  {
    q: 'Do I have to charge GST?',
    a: 'GST registration is mandatory if your annual turnover is $75,000 or more ($150,000 for non-profits). Below that threshold, registration is voluntary — but many small tradies register anyway to claim GST credits on business purchases. SMASH shows your ABN on every invoice so clients can see your registration status.',
  },
  {
    q: 'Does SMASH handle GST automatically?',
    a: 'Yes. Every invoice SMASH generates includes the correct GST breakdown, ATO-compliant formatting, your ABN, and all required fields. You describe the job by voice and SMASH calculates GST per line item, showing both the ex-GST amount and the 10% GST component automatically. No manual calculation required.',
  },
  {
    q: 'Can I mix GST and no-GST items?',
    a: 'Yes. Some items are GST-free under Australian law — basic food, some medical services, and certain educational materials. SMASH lets you toggle GST on/off per line item, so you can mix GST-free and GST-applicable items in the same invoice and the totals will calculate correctly.',
  },
];

function roundToTwoDecimals(n: number): string {
  return n.toFixed(2);
}

function GSTCalculator() {
  const [amount, setAmount] = useState('');
  const [mode, setMode] = useState<'add' | 'remove'>('add');
  const [step, setStep] = useState<'idle' | 'capture' | 'done'>('idle');
  const [leadEmail, setLeadEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const parsed = parseFloat(amount.replace(/,/g, ''));
  const hasValue = !isNaN(parsed) && parsed > 0;

  // Add GST: ex-GST → inc-GST
  const exGst = hasValue && mode === 'add' ? parsed : 0;
  const gstOnAdd = hasValue && mode === 'add' ? parsed * 0.1 : 0;
  const totalIncGst = hasValue && mode === 'add' ? parsed * 1.1 : 0;

  // Remove GST: inc-GST → ex-GST
  const incGstAmount = hasValue && mode === 'remove' ? parsed : 0;
  const gstComponent = hasValue && mode === 'remove' ? parsed / 11 : 0;
  const exGstAmount = hasValue && mode === 'remove' ? parsed / 1.1 : 0;

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    setSubmitting(true);
    try {
      await supabase.from('leads').insert({
        email: leadEmail,
        source: 'gst_calculator',
        created_at: new Date().toISOString(),
      });
    } catch (_) {
      // silent failure
    }
    setSubmitting(false);
    setStep('done');
  };

  return (
    <div className="bg-white rounded-[28px] border-2 border-border p-6 sm:p-8 max-w-lg mx-auto">
      {/* Amount input */}
      <div className="mb-5">
        <label className="font-black text-xs uppercase tracking-widest text-brand/40 mb-2 block">Amount</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-brand/40 text-base">$</span>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="0.00"
            min="0"
            step="0.01"
            className="w-full pl-9 pr-4 py-3.5 rounded-xl border-2 border-border font-body text-lg text-brand font-medium focus:outline-none focus:border-brand/40 bg-white placeholder:text-brand/25"
          />
        </div>
      </div>

      {/* Mode toggle */}
      <div className="mb-6">
        <label className="font-black text-xs uppercase tracking-widest text-brand/40 mb-2 block">Calculation type</label>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setMode('add')}
            className={`py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
              mode === 'add'
                ? 'bg-accent text-brand shadow-sm'
                : 'bg-surface text-brand/50 hover:bg-surface hover:text-brand/70'
            }`}
          >
            Add GST
          </button>
          <button
            onClick={() => setMode('remove')}
            className={`py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${
              mode === 'remove'
                ? 'bg-accent text-brand shadow-sm'
                : 'bg-surface text-brand/50 hover:bg-surface hover:text-brand/70'
            }`}
          >
            Remove GST
          </button>
        </div>
      </div>

      {/* Results */}
      {hasValue && (
        <div className="bg-brand rounded-[20px] p-6 mb-5">
          {mode === 'add' ? (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm font-medium text-white/55">Ex-GST</span>
                <span className="font-black text-base text-white tracking-tighter">${roundToTwoDecimals(exGst)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body text-sm font-medium text-white/55">GST (10%)</span>
                <span className="font-black text-base text-white tracking-tighter">${roundToTwoDecimals(gstOnAdd)}</span>
              </div>
              <div className="border-t border-white/12 pt-3 flex justify-between items-center">
                <span className="font-black text-sm uppercase tracking-tighter text-white/70">Total inc. GST</span>
                <span className="font-black text-3xl text-accent tracking-tighter">${roundToTwoDecimals(totalIncGst)}</span>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm font-medium text-white/55">Inc-GST amount</span>
                <span className="font-black text-base text-white tracking-tighter">${roundToTwoDecimals(incGstAmount)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-body text-sm font-medium text-white/55">GST component</span>
                <span className="font-black text-base text-white tracking-tighter">${roundToTwoDecimals(gstComponent)}</span>
              </div>
              <div className="border-t border-white/12 pt-3 flex justify-between items-center">
                <span className="font-black text-sm uppercase tracking-tighter text-white/70">Ex-GST amount</span>
                <span className="font-black text-3xl text-accent tracking-tighter">${roundToTwoDecimals(exGstAmount)}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Email capture / CTA */}
      {hasValue && (
        <>
          {step === 'idle' && (
            <button
              onClick={() => setStep('capture')}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-[16px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
            >
              <Mail size={15} strokeWidth={2.5} />
              Email My Calculation
            </button>
          )}

          {step === 'capture' && (
            <div className="bg-surface rounded-[16px] border-2 border-border p-5">
              <div className="flex items-center gap-2 mb-3">
                <Mail size={16} className="text-accent" strokeWidth={2.5} />
                <p className="font-black text-sm uppercase tracking-tighter text-brand">Where should we send your results?</p>
              </div>
              <p className="font-body text-xs font-medium text-brand/55 mb-4 leading-[1.5]">
                We'll email your GST calculation — plus show you how SMASH handles this automatically on every invoice.
              </p>
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <input
                  type="email"
                  value={leadEmail}
                  onChange={e => setLeadEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white placeholder:text-brand/30"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-[32px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all disabled:opacity-60"
                >
                  {submitting ? 'Sending...' : 'Email me my results'}
                </button>
                <button
                  type="button"
                  onClick={() => setStep('idle')}
                  className="w-full text-center font-body text-xs font-medium text-brand/35 hover:text-brand/60 transition-colors py-1"
                >
                  Cancel
                </button>
              </form>
            </div>
          )}

          {step === 'done' && (
            <div className="bg-accent rounded-[16px] p-6 text-center">
              <p className="font-black text-base text-brand uppercase tracking-tighter mb-1">
                ✓ Sent to {leadEmail}
              </p>
              <p className="font-body text-sm text-brand/70 font-medium mb-4">
                SMASH calculates GST automatically on every invoice — no spreadsheet, no second-guessing.
              </p>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[32px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Download Free
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
              <p className="font-body text-xs font-medium text-brand/45 mt-3">No credit card · Free to start</p>
            </div>
          )}
        </>
      )}

      {!hasValue && (
        <p className="text-center font-body text-xs text-brand/35 font-medium mt-2">
          Enter an amount above to see your GST calculation
        </p>
      )}
    </div>
  );
}

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

export function GstCalculator() {
  return (
    <>
      <SEO
        title="GST Calculator Australia: Add or Remove 10% GST Instantly | SMASH"
        description="Free Australian GST calculator. Add or remove GST instantly. Find the GST amount, ex-GST price, and inc-GST total. Built for tradies and small businesses."
        keywords="gst calculator australia, add gst calculator, remove gst calculator, gst calculator online free"
        canonical="https://smashinvoices.com/gst-calculator"
      />

      <StructuredData data={createCalculatorSchema({
        name: "GST Calculator Australia",
        description: "Free Australian GST calculator. Add or remove 10% GST instantly. Find the GST amount, ex-GST price, and inc-GST total.",
        url: "https://smashinvoices.com/gst-calculator",
        featureList: ["Add GST to any price", "Remove GST from any price", "Calculate GST component", "ATO-compliant calculations"],
      })} />

      <StructuredData data={createHowToSchema({
        name: "How to Calculate GST in Australia",
        description: "Calculate GST in both directions — adding 10% to a price or removing GST from an inc-GST total.",
        steps: [
          { name: "Enter your amount", text: "Type the dollar amount you want to calculate GST on." },
          { name: "Choose Add or Remove GST", text: "Select whether you want to add 10% GST to a price, or remove GST from an inc-GST total." },
          { name: "Read your result — or email it to yourself", text: "See the ex-GST amount, GST component, and inc-GST total instantly. Email the result to yourself for your records." },
        ],
      })} />

      <StructuredData data={createFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))} />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com' },
        { name: 'Tools', url: 'https://smashinvoices.com/tools' },
        { name: 'GST Calculator', url: 'https://smashinvoices.com/gst-calculator' },
      ])} />

      <Nav />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-brand pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-5">Free GST Calculator</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
              Add or remove GST.<br />
              <span className="text-accent">Instantly.</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/65 font-medium leading-[1.5] max-w-2xl mb-8">
              Free Australian GST calculator. Enter a price, choose add or remove, and get the exact GST amount, ex-GST price, and inc-GST total. No signup needed.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-accent fill-accent" />)}
                </div>
                <span className="font-body text-xs font-semibold text-white/70">4.9 App Store</span>
              </div>
              <span className="font-body text-xs text-white/40 font-medium">10% GST · ATO compliant · Free forever</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CALCULATOR ───────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="text-center mb-10">
              <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">Free online tool</p>
              <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">
                Calculate GST now.
              </h2>
              <p className="font-body text-brand/55 font-medium text-base leading-[1.5] max-w-xl mx-auto">
                Works for adding 10% GST to a price, or stripping GST out of an inc-GST total. Both directions, instantly.
              </p>
            </div>
            <p className="font-body text-brand/65 font-medium text-base leading-[1.6] max-w-2xl mx-auto mb-8">
              Getting GST wrong costs Australian tradies time, ATO penalties, and client trust. This free calculator handles both directions instantly — enter any amount to see the ex-GST price, GST component, and inc-GST total.
            </p>
            <GSTCalculator />
          </AnimateIn>
        </div>
      </section>

      {/* ── HOW TO USE ───────────────────────────────────────── */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">How to use</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-8">
              How to calculate GST.
            </h2>
            <ol className="space-y-4">
              {[
                { n: '01', title: 'Enter your amount', desc: 'Type in the dollar amount you want to calculate GST on. Use any dollar value — the calculator works in both directions.' },
                { n: '02', title: 'Choose Add or Remove GST', desc: 'Select Add GST if you have an ex-GST price and want to know what to charge the client. Select Remove GST if you\'ve been given an inc-GST price and need to see the breakdown.' },
                { n: '03', title: 'Read your result — or email it to yourself', desc: 'Your ex-GST amount, GST component, and inc-GST total appear instantly. Tap Email to save the calculation for your records or share with your bookkeeper.' },
              ].map(s => (
                <li key={s.n} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent text-brand font-black text-sm flex items-center justify-center shrink-0">{s.n}</div>
                  <div>
                    <p className="font-black text-base uppercase tracking-tighter text-brand leading-[0.95] mb-1">{s.title}</p>
                    <p className="font-body text-sm font-medium text-brand/60 leading-[1.5]">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </AnimateIn>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <section className="bg-surface border-b border-brand/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-brand/10">
            {[
              { stat: '10%', label: 'Australian GST rate' },
              { stat: '$75k', label: 'GST registration threshold' },
              { stat: '4.9★', label: 'App Store rating' },
            ].map((item, i) => (
              <div key={i} className="py-7 px-4 text-center">
                <p className="text-3xl sm:text-4xl font-black text-brand tracking-tighter leading-none mb-1">{item.stat}</p>
                <p className="font-body text-xs font-medium text-brand/50 uppercase tracking-widest leading-[1.4]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW GST WORKS ────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">How it works</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12">
              GST in two formulas.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Adding GST to a price',
                formula: 'Price × 1.1',
                example: '$500 × 1.1 = $550',
                desc: 'Multiply your ex-GST price by 1.1 to get the total your customer pays. The $50 difference is the GST you collect and remit to the ATO.',
              },
              {
                title: 'Removing GST from a price',
                formula: 'Price ÷ 1.1',
                example: '$550 ÷ 1.1 = $500',
                desc: 'Divide an inc-GST price by 1.1 to find the ex-GST amount. To find just the GST component: price ÷ 11.',
              },
            ].map((item, i) => (
              <AnimateIn key={i} direction="up" delay={i * 80}>
                <div className="rounded-[28px] bg-brand p-7 h-full">
                  <h3 className="font-black text-lg uppercase tracking-tighter text-white mb-3">{item.title}</h3>
                  <p className="font-black text-3xl text-accent tracking-tighter leading-none mb-2">{item.formula}</p>
                  <p className="font-body text-sm font-medium text-accent/80 mb-4">{item.example}</p>
                  <p className="font-body text-sm font-medium text-white/55 leading-[1.5]">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">Compare invoicing options</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10">
              Why tradies choose SMASH.
            </h2>

            <div className="rounded-[28px] bg-brand overflow-hidden border border-white/10">
              <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-6 py-4 bg-white/[0.04] border-b border-white/10">
                <span className="font-body text-xs font-bold text-white/40 uppercase tracking-widest">Feature</span>
                <div className="w-[76px] text-center"><span className="font-black text-xs uppercase tracking-widest text-accent">SMASH</span></div>
                <div className="w-[76px] text-center"><span className="font-body text-xs font-medium text-white/40">Manual</span></div>
                <div className="w-[76px] text-center"><span className="font-body text-xs font-medium text-white/40">Other apps</span></div>
              </div>
              <div className="px-6">
                {comparison.map((row, i) => (
                  <div key={i} className="grid grid-cols-[1fr_auto_auto_auto] gap-3 items-center py-3.5 border-b border-white/6 last:border-0">
                    <span className="font-body text-sm font-medium text-white/70">{row.label}</span>
                    <div className="w-[76px] flex justify-center"><CellVal val={row.smash} /></div>
                    <div className="w-[76px] flex justify-center"><CellVal val={row.manual} /></div>
                    <div className="w-[76px] flex justify-center"><CellVal val={row.others} /></div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-3 text-center">From tradies using SMASH</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-12 text-center">
              What they say
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <AnimateIn key={i} direction="up" delay={i * 80}>
                <div className="flex flex-col h-full rounded-[20px] bg-white/[0.06] border border-white/12 p-6">
                  <QuoteIcon size={20} className="text-accent mb-4 shrink-0" strokeWidth={2} />
                  <p className="font-body text-sm font-medium text-white/75 leading-[1.65] flex-1 mb-5">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-black text-xs uppercase tracking-wider text-white">{t.name}</p>
                    <p className="font-body text-xs font-medium text-white/40 mt-0.5">{t.trade}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn direction="up" delay={150}>
            <div className="flex items-center justify-center gap-5 mt-10 flex-wrap">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-accent fill-accent" />)}
                <span className="font-body text-xs font-semibold text-white/50 ml-1">4.9 App Store</span>
              </div>
              <span className="text-white/20 text-sm">·</span>
              <span className="font-body text-xs font-medium text-white/35">Free to start — no card</span>
              <span className="text-white/20 text-sm">·</span>
              <span className="font-body text-xs font-medium text-white/35">Cancel anytime</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-4">FAQ</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10">
              GST questions answered.
            </h2>
            <div className="rounded-[28px] bg-brand overflow-hidden border border-white/10 px-6">
              {faqs.map((faq, i) => (
                <FAQ key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-accent py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">
              Stop calculating GST by hand.
            </h2>
            <p className="font-body text-brand/70 font-medium text-lg leading-[1.5] mb-8 max-w-xl mx-auto">
              SMASH adds GST to every invoice automatically — correct every time, ATO-compliant, your ABN on every page.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
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
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={11} className="text-brand fill-brand" />)}
                <span className="font-body text-xs font-semibold text-brand/60 ml-1">4.9 App Store</span>
              </div>
              <span className="text-brand/30 text-sm">·</span>
              <span className="font-body text-xs font-medium text-brand/55">No credit card required</span>
              <span className="text-brand/30 text-sm">·</span>
              <span className="font-body text-xs font-medium text-brand/55">Cancel anytime</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── RELATED LINKS ─────────────────────────────────────── */}
      <section className="bg-brand py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/tools" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                All Tools →
              </Link>
              <Link to="/invoice-generator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Invoice Generator →
              </Link>
              <Link to="/profit-calculator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Profit Calculator →
              </Link>
              <Link to="/hourly-rate-calculator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Hourly Rate Calculator →
              </Link>
              <Link to="/late-payment-calculator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Late Payment Calculator →
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
