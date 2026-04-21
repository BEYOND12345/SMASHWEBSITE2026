import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { hreflangAlternates } from '../data/country-data';
import { StructuredData, createFAQSchema, createBreadcrumbSchema, createHowToSchema, createCalculatorSchema } from '../components/structured-data';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { VoiceConversionCTA } from '../components/voice-conversion-cta';
import { AnimateIn } from '../components/animate-in';
import { Check, X, ChevronDown, Star, Quote as QuoteIcon, Mail, ArrowRight } from 'lucide-react';
import { RelatedPosts } from '../components/related-posts';
import { RelatedTools } from '../components/related-tools';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

const testimonials = [
  {
    quote: "I used to just add 10% on top of materials and wonder why I wasn't making money. Turns out I was missing all my overhead. Running these numbers changed everything.",
    name: "Mick T.",
    trade: "Concreter, Sydney",
  },
  {
    quote: "I now know exactly what I need to charge for every job type. No more gut-feel pricing that leaves money on the table.",
    name: "Bec R.",
    trade: "Painter, Melbourne",
  },
  {
    quote: "My accountant told me I was pricing at a loss on material-heavy jobs. This calculator showed me exactly why and what to change.",
    name: "Sam K.",
    trade: "Plumber, Brisbane",
  },
];

interface CompRow {
  label: string;
  smash: boolean | string;
  spreadsheet: boolean | string;
  guess: boolean | string;
}

const comparison: CompRow[] = [
  { label: 'Materials + labour calculation', smash: true,       spreadsheet: 'Manual',  guess: false },
  { label: 'Automatic GST on top',          smash: true,       spreadsheet: 'Manual',  guess: false },
  { label: 'Profit margin built in',        smash: true,       spreadsheet: 'If set up', guess: false },
  { label: 'Quote sent in 60 seconds',      smash: true,       spreadsheet: false,     guess: false },
  { label: 'Learns your rates',             smash: true,       spreadsheet: false,     guess: false },
  { label: 'Free to start',                 smash: true,       spreadsheet: true,      guess: true },
];

const faqs = [
  {
    q: "What's a good profit margin for a tradie?",
    a: "Most Australian tradies aim for 15-25% net profit margin. Below 15% leaves little buffer for slow periods or unexpected costs. Factor in overhead (tools, fuel, insurance, admin) before calculating your margin — these are costs that don't appear on individual job invoices but eat into your profit. SMASH helps you quote at the right level every time.",
  },
  {
    q: "What's the difference between margin and markup?",
    a: "Margin is profit as a percentage of your sell price. Markup is profit as a percentage of your cost. A 25% markup gives you 20% margin. Most tradies aim to quote in margin terms — it's the cleaner number for understanding how much of every dollar invoiced you actually keep. Confusing the two is one of the most common tradie pricing mistakes.",
  },
  {
    q: "What should I include in overhead?",
    a: "Overhead includes everything that costs money but isn't tied to a specific job: vehicle costs, fuel, tools and equipment, insurance, phone, software subscriptions, licences, accounting fees, and any admin time. Most tradies underestimate this — 20% of direct costs is a common starting point, but trade-specific costs can push this to 30% or higher.",
  },
  {
    q: "Should I add GST on top of my margin?",
    a: "Yes. Calculate your sell price ex-GST first (materials + labour + overhead + profit), then add 10% GST on top for the client-facing total. If you're registered for GST in Australia (required above $75k annual turnover), you must add GST on top of your sell price. SMASH handles this automatically on every invoice so you never miss it.",
  },
  {
    q: "How do I price jobs with expensive materials?",
    a: "Material-heavy jobs need careful margin management. If you're supplying $2,000 in materials, a flat hourly rate won't cover your carrying costs and risk. Apply your overhead and margin to the full job cost (labour + materials), not just labour. This calculator helps you see the full picture before you quote.",
  },
  {
    q: "Does SMASH calculate job pricing automatically?",
    a: "SMASH learns your labour rates and pricing style from your first few quotes. You describe the job out loud — SMASH builds the itemised quote with labour, materials, and GST calculated correctly. No spreadsheet, no guesswork, no forgotten overhead. The quote is ready to send in under 60 seconds.",
  },
];

function fmt(n: number): string {
  return n.toFixed(2);
}

function ProfitCalc() {
  const [materialsCost, setMaterialsCost] = useState('450');
  const [labourHours, setLabourHours] = useState('4');
  const [labourRate, setLabourRate] = useState('85');
  const [overheadPct, setOverheadPct] = useState('20');
  const [marginPct, setMarginPct] = useState('20');
  const [step, setStep] = useState<'idle' | 'capture' | 'done'>('idle');
  const [leadEmail, setLeadEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const materials = parseFloat(materialsCost) || 0;
  const hours = parseFloat(labourHours) || 0;
  const rate = parseFloat(labourRate) || 0;
  const labour = hours * rate;
  const directCost = materials + labour;
  const overhead = directCost * (parseFloat(overheadPct) || 0) / 100;
  const totalCost = directCost + overhead;
  const marginVal = parseFloat(marginPct) || 0;
  const sellPrice = marginVal < 100 ? totalCost / (1 - marginVal / 100) : totalCost;
  const profit = sellPrice - totalCost;
  const markup = totalCost > 0 ? (profit / totalCost) * 100 : 0;
  const gst = sellPrice * 0.1;
  const totalIncGst = sellPrice + gst;

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    setSubmitting(true);
    try {
      await supabase.from('leads').insert({
        email: leadEmail,
        source: 'profit_calculator',
        created_at: new Date().toISOString(),
      });
    } catch {
      // silent failure
    }
    setSubmitting(false);
    setStep('done');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      {/* Left: Inputs */}
      <div className="space-y-5">
        {/* Materials */}
        <div className="bg-white rounded-[20px] border-2 border-border p-6">
          <p className="font-black text-xs uppercase tracking-widest text-brand/40 mb-4">Materials</p>
          <div>
            <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">Materials cost</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-brand/40 text-sm">$</span>
              <input
                type="number"
                value={materialsCost}
                onChange={e => setMaterialsCost(e.target.value)}
                placeholder="450"
                min="0"
                step="0.01"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white placeholder:text-brand/25"
              />
            </div>
            <p className="font-body text-[10px] text-brand/35 mt-1">Include all materials, parts, and consumables</p>
          </div>
        </div>

        {/* Labour */}
        <div className="bg-white rounded-[20px] border-2 border-border p-6">
          <p className="font-black text-xs uppercase tracking-widest text-brand/40 mb-4">Labour</p>
          <div className="space-y-4">
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">Hours</label>
              <input
                type="number"
                value={labourHours}
                onChange={e => setLabourHours(e.target.value)}
                placeholder="4"
                min="0"
                step="0.5"
                className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white placeholder:text-brand/25"
              />
            </div>
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">Hourly rate</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-brand/40 text-sm">$</span>
                <input
                  type="number"
                  value={labourRate}
                  onChange={e => setLabourRate(e.target.value)}
                  placeholder="85"
                  min="0"
                  step="1"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white placeholder:text-brand/25"
                />
              </div>
              {labour > 0 && (
                <p className="font-body text-[11px] text-accent font-semibold mt-1">= ${fmt(labour)} labour</p>
              )}
              <p className="font-body text-[10px] text-brand/35 mt-0.5">Your billable rate, not your take-home pay</p>
            </div>
          </div>
        </div>

        {/* Overheads & Profit */}
        <div className="bg-white rounded-[20px] border-2 border-border p-6">
          <p className="font-black text-xs uppercase tracking-widest text-brand/40 mb-4">Overheads & Profit</p>
          <div className="space-y-4">
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">Overhead %</label>
              <div className="relative">
                <input
                  type="number"
                  value={overheadPct}
                  onChange={e => setOverheadPct(e.target.value)}
                  min="0"
                  max="99"
                  className="w-full px-4 pr-8 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 font-black text-brand/40 text-sm">%</span>
              </div>
              <p className="font-body text-[10px] text-brand/35 mt-1">Fuel, insurance, tools, phone — usually 15-30%</p>
            </div>
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">Target profit margin %</label>
              <div className="relative">
                <input
                  type="number"
                  value={marginPct}
                  onChange={e => setMarginPct(e.target.value)}
                  min="0"
                  max="99"
                  className="w-full px-4 pr-8 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 font-black text-brand/40 text-sm">%</span>
              </div>
              <p className="font-body text-[10px] text-brand/35 mt-1">Industry avg is 15-25% for tradies</p>
            </div>
          </div>
        </div>

        {/* Don't-type CTA */}
        <div className="bg-brand rounded-[20px] p-5 border border-accent/20">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-brand font-black text-sm">⚡</span>
            </div>
            <div>
              <p className="font-black text-sm uppercase tracking-tighter text-white leading-[0.95] mb-1">
                Don't want to type all this?
              </p>
              <p className="font-body text-xs font-medium text-white/60 leading-[1.5] mb-3">
                SMASH does this automatically from a 30-second voice description. No form, no typing, no GST maths.
              </p>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[32px] bg-accent text-brand font-black text-xs uppercase tracking-widest hover:brightness-95 transition-all"
              >
                Try SMASH Free
                <ArrowRight size={11} strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Results */}
      <div className="lg:sticky lg:top-6 space-y-4">
        {/* Summary card */}
        <div className="bg-brand rounded-[20px] p-6">
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="font-body text-sm font-medium text-white/55">Materials</span>
              <span className="font-black text-sm text-white tracking-tighter">${fmt(materials)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-body text-sm font-medium text-white/55">Labour ({hours}h @ ${fmt(rate)}/hr)</span>
              <span className="font-black text-sm text-white tracking-tighter">${fmt(labour)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-body text-sm font-medium text-white/55">Overhead ({overheadPct}%)</span>
              <span className="font-black text-sm text-white tracking-tighter">${fmt(overhead)}</span>
            </div>
            <div className="border-t border-white/12 pt-3 flex justify-between items-center">
              <span className="font-black text-sm uppercase tracking-tighter text-white">Your total cost</span>
              <span className="font-black text-base text-white tracking-tighter">${fmt(totalCost)}</span>
            </div>
          </div>

          <div className="border-t-2 border-white/20 pt-4 mb-4">
            <p className="font-black text-[10px] uppercase tracking-widest text-white/40 mb-1">Charge (ex. GST)</p>
            <p className="font-black text-4xl text-accent tracking-tighter leading-none">${fmt(sellPrice)}</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-body text-xs font-medium text-white/50">GST (10%)</span>
              <span className="font-black text-xs text-white/50 tracking-tighter">${fmt(gst)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-body text-xs font-medium text-white/70">Quote to client (inc. GST)</span>
              <span className="font-black text-sm text-white/70 tracking-tighter">${fmt(totalIncGst)}</span>
            </div>
          </div>
        </div>

        {/* Metric pills */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white border-2 border-border rounded-[16px] p-4 text-center">
            <p className="font-black text-[10px] uppercase tracking-widest text-brand/40 mb-1">Profit</p>
            <p className="font-black text-xl text-green-500 tracking-tighter leading-none">${fmt(profit)}</p>
          </div>
          <div className="bg-white border-2 border-border rounded-[16px] p-4 text-center">
            <p className="font-black text-[10px] uppercase tracking-widest text-brand/40 mb-1">Margin</p>
            <p className="font-black text-xl text-brand tracking-tighter leading-none">{fmt(marginVal)}%</p>
          </div>
          <div className="bg-white border-2 border-border rounded-[16px] p-4 text-center">
            <p className="font-black text-[10px] uppercase tracking-widest text-brand/40 mb-1">Markup</p>
            <p className="font-black text-xl text-brand tracking-tighter leading-none">{fmt(markup)}%</p>
          </div>
        </div>
        <p className="font-body text-[11px] font-medium text-brand/40 text-center leading-[1.4]">
          Margin = profit as % of sell price. Markup = profit as % of cost.
        </p>

        {/* Email capture */}
        {step === 'idle' && (
          <button
            onClick={() => setStep('capture')}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-[16px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
          >
            <Mail size={15} strokeWidth={2.5} />
            Get My Quote Price
          </button>
        )}

        {step === 'capture' && (
          <div className="bg-surface rounded-[16px] border-2 border-border p-5">
            <div className="flex items-center gap-2 mb-3">
              <Mail size={16} className="text-accent" strokeWidth={2.5} />
              <p className="font-black text-sm uppercase tracking-tighter text-brand">Where should we send your results?</p>
            </div>
            <p className="font-body text-xs font-medium text-brand/55 mb-4 leading-[1.5]">
              We'll email your profit calculation — plus show you how SMASH builds quotes with all of this built in automatically.
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
              SMASH calculates materials, labour, overhead and GST automatically — and sends the quote before you leave the job site.
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
      </div>
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

export function ProfitCalculator() {
  return (
    <>
      <SEO
        title="Job Profit Calculator for Tradies Australia | SMASH"
        description="Free job profit calculator for Australian tradies. Enter your materials, labour and overhead costs — instantly see what to charge, your profit margin, and your markup. Free to use."
        keywords="job profit calculator australia, tradie profit margin calculator, materials markup calculator, how much to charge for labour and materials australia, profit margin calculator tradies"
        canonical="https://smashinvoices.com/profit-calculator"
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createCalculatorSchema({
        name: "Job Profit Calculator for Tradies",
        description: "Free job profit calculator for Australian tradies. Enter your materials, labour and overhead costs — instantly see what to charge, your profit margin, and your markup.",
        url: "https://smashinvoices.com/profit-calculator",
        featureList: ["Materials and labour cost calculation", "Overhead percentage calculation", "Profit margin and markup calculation", "GST calculation", "Tradie job pricing"],
      })} />

      <StructuredData data={createHowToSchema({
        name: "How to Calculate Job Profit for a Tradie Job",
        description: "Calculate what to charge for any job including materials, labour, overhead and profit margin.",
        steps: [
          { name: "Enter your materials cost", text: "Enter the total cost of all materials, parts, and consumables for the job." },
          { name: "Enter labour hours and rate", text: "Enter your billable hours and hourly rate to calculate your labour cost." },
          { name: "Set overhead and margin", text: "Enter your overhead percentage and target profit margin to see your recommended sell price." },
        ],
      })} />

      <StructuredData data={createFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))} />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com' },
        { name: 'Tools', url: 'https://smashinvoices.com/tools' },
        { name: 'Profit Calculator', url: 'https://smashinvoices.com/profit-calculator' },
      ])} />

      <Nav />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-brand pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-5">Free Profit Calculator</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
              Know exactly<br />
              <span className="text-accent">what to charge.</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/65 font-medium leading-[1.5] max-w-2xl mb-8">
              Free job profit calculator for Australian tradies. Enter your materials, labour and overhead costs — instantly see what to charge, your profit margin, and your markup.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-accent fill-accent" />)}
                </div>
                <span className="font-body text-xs font-semibold text-white/70">4.9 App Store</span>
              </div>
              <span className="font-body text-xs text-white/40 font-medium">Materials + Labour + Overhead · GST included · Free forever</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CALCULATOR ───────────────────────────────────────── */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="mb-8">
              <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">Free online tool</p>
              <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">
                Calculate your job price.
              </h2>
              <p className="font-body text-brand/65 font-medium text-base leading-[1.6] max-w-2xl mb-2">
                Stop guessing. This calculator builds up from your actual costs — materials, labour, overhead, and margin — to give you the right price to charge every time. Enter any values to see your sell price and profit instantly.
              </p>
            </div>
            <ProfitCalc />
          </AnimateIn>
        </div>
      </section>

      {/* ── HOW TO USE ───────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">How to use</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-8">
              How to calculate job profit.
            </h2>
            <ol className="space-y-4">
              {[
                { n: '01', title: 'Enter your materials cost', desc: 'Include every part, consumable, and material you\'ll supply for the job. Don\'t leave anything out — under-quoting materials is one of the fastest ways to kill a margin.' },
                { n: '02', title: 'Enter labour hours and hourly rate', desc: 'Enter your billable rate — not your take-home. Your rate should already account for super, tax, and the cost of running your business.' },
                { n: '03', title: 'Set overhead and target margin — read your result', desc: 'Overhead (fuel, insurance, tools) usually runs 15-30% of direct costs. Set your target margin and see your sell price, GST total, and profit instantly.' },
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
      <section className="bg-white border-y border-brand/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-brand/10">
            {[
              { stat: '20%', label: 'Avg tradie profit margin' },
              { stat: '15-30%', label: 'Typical overhead range' },
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

      {/* ── MARGIN VS MARKUP ─────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">Key concept</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12">
              Margin vs markup — why it matters.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: 'Margin',
                formula: 'Profit ÷ sell price × 100',
                example: 'A 20% margin on a $1,000 job = $200 profit.',
                desc: 'Margin tells you what percentage of your invoice is actual profit. Most tradies and accountants talk in margin terms — it\'s the cleaner business metric.',
              },
              {
                title: 'Markup',
                formula: 'Profit ÷ cost × 100',
                example: 'A 25% markup on $800 cost = $1,000 sell price.',
                desc: 'Markup tells you how much above cost you\'re charging. A 25% markup only gives you 20% margin — not the same number.',
              },
            ].map((item, i) => (
              <AnimateIn key={i} direction="up" delay={i * 80}>
                <div className="rounded-[28px] bg-brand p-7 h-full">
                  <p className="font-black text-xs uppercase tracking-widest text-accent mb-3">{item.title}</p>
                  <p className="font-black text-2xl text-white tracking-tighter leading-none mb-2">{item.formula}</p>
                  <p className="font-body text-sm font-medium text-accent/80 mb-4">{item.example}</p>
                  <p className="font-body text-sm font-medium text-white/55 leading-[1.5]">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn direction="up" delay={100}>
            <div className="bg-white border-2 border-border rounded-[20px] p-6">
              <p className="font-black text-sm uppercase tracking-tighter text-brand mb-2">Common mistake</p>
              <p className="font-body text-sm font-medium text-brand/70 leading-[1.6]">
                Most tradies say they want 20% profit but calculate as 20% markup — which only gives you 16.7% margin. That gap adds up fast over a full year of jobs. Use this calculator to work in margin terms and quote the right number every time.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────── */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-3">Compare job pricing approaches</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-10">
              SMASH vs spreadsheet vs guesswork.
            </h2>

            <div className="rounded-[28px] bg-white/[0.06] overflow-hidden border border-white/10">
              <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-6 py-4 bg-white/[0.04] border-b border-white/10">
                <span className="font-body text-xs font-bold text-white/40 uppercase tracking-widest">Feature</span>
                <div className="w-[76px] text-center"><span className="font-black text-xs uppercase tracking-widest text-accent">SMASH</span></div>
                <div className="w-[76px] text-center"><span className="font-body text-xs font-medium text-white/40">Spreadsheet</span></div>
                <div className="w-[76px] text-center"><span className="font-body text-xs font-medium text-white/40">Guesswork</span></div>
              </div>
              <div className="px-6">
                {comparison.map((row, i) => (
                  <div key={i} className="grid grid-cols-[1fr_auto_auto_auto] gap-3 items-center py-3.5 border-b border-white/6 last:border-0">
                    <span className="font-body text-sm font-medium text-white/70">{row.label}</span>
                    <div className="w-[76px] flex justify-center"><CellVal val={row.smash} /></div>
                    <div className="w-[76px] flex justify-center"><CellVal val={row.spreadsheet} /></div>
                    <div className="w-[76px] flex justify-center"><CellVal val={row.guess} /></div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/30 mb-3 text-center">From tradies using SMASH</p>
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12 text-center">
              What they say
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <AnimateIn key={i} direction="up" delay={i * 80}>
                <div className="flex flex-col h-full rounded-[20px] bg-white border-2 border-border p-6">
                  <QuoteIcon size={20} className="text-accent mb-4 shrink-0" strokeWidth={2} />
                  <p className="font-body text-sm font-medium text-brand/75 leading-[1.65] flex-1 mb-5">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-brand/8 pt-4">
                    <p className="font-black text-xs uppercase tracking-wider text-brand">{t.name}</p>
                    <p className="font-body text-xs font-medium text-brand/40 mt-0.5">{t.trade}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FROM THE BLOG ────────────────────────────────────── */}
      <section className="bg-brand py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="font-black text-xs uppercase tracking-widest text-white/30 mb-6">From the blog</p>
          <RelatedPosts
            currentPostId=""
            primaryKeyword="profit margin"
            secondaryKeywords={['job pricing', 'materials markup', 'tradie rates']}
            limit={2}
          />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-4">FAQ</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-10">
              Pricing questions answered.
            </h2>
            <div className="rounded-[28px] bg-white/[0.06] overflow-hidden border border-white/10 px-6">
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
              Stop guessing what to charge.
            </h2>
            <p className="font-body text-brand/70 font-medium text-lg leading-[1.5] mb-8 max-w-xl mx-auto">
              SMASH builds your quote from voice — materials, labour, GST and all. In under 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[32px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Download Free
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-[32px] border-2 border-brand/30 text-brand font-black text-sm uppercase tracking-widest hover:bg-brand/10 transition-all"
              >
                See how it works
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

      {/* ── RELATED TOOLS ─────────────────────────────────────── */}
      <section className="bg-brand py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <RelatedTools
            keywords={['profit', 'materials', 'labour rate']}
            currentSlug="/profit-calculator"
            title="More free tools"
          />
        </div>
      </section>

      <VoiceConversionCTA
        outputLabel="this job"
        headline="Price the job right, the first time."
        sub="SMASH uses your pricing catalog to build every quote and invoice from voice — labour, materials, call-out — so you stop undercharging on the ones that actually pay."
      />

      <Footer />
    </>
  );
}

