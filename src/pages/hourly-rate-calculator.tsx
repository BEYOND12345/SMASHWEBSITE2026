import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { Check, X, ChevronDown, Star, Quote as QuoteIcon, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

const testimonials = [
  {
    quote: "I was charging $65/hour for 4 years. Ran this calculator and realised I needed $95 just to break even after expenses. Game changer.",
    name: "Brad S.",
    trade: "Handyman, Melbourne",
  },
  {
    quote: "Knowing my actual numbers gave me the confidence to put my rates up. Best thing I did for the business.",
    name: "Karen T.",
    trade: "Pool Technician, Perth",
  },
  {
    quote: "I always underquoted jobs with materials. This made me realise how much overhead I was absorbing myself.",
    name: "Dean M.",
    trade: "Tiler, Brisbane",
  },
];

interface CompRow {
  label: string;
  smash: boolean | string;
  guess: boolean | string;
  others: boolean | string;
}

const comparison: CompRow[] = [
  { label: 'Rate based on actual income goal',  smash: true,       guess: false,     others: 'Partial' },
  { label: 'Overhead factored in',             smash: true,       guess: false,     others: 'Partial' },
  { label: 'Profit margin included',           smash: true,       guess: false,     others: false },
  { label: 'Day rate calculated',              smash: true,       guess: false,     others: 'Some' },
  { label: 'Remembers your rates',             smash: true,       guess: false,     others: false },
  { label: 'Auto-applied to invoices',         smash: true,       guess: false,     others: false },
  { label: 'Free to use',                      smash: true,       guess: true,      others: 'Some' },
];

const faqs = [
  {
    q: "What's the average tradie hourly rate in Australia?",
    a: 'Varies by trade: electricians $80–$130/hr, plumbers $80–$120/hr, carpenters $70–$110/hr. But your rate depends on your costs, location, and target income.',
  },
  {
    q: 'Should my rate include GST?',
    a: 'Show your rate ex-GST, then add 10% for GST if you\'re registered. SMASH handles this automatically on every invoice.',
  },
  {
    q: 'What overhead should I include?',
    a: 'Tools and equipment, vehicle costs, insurance, phone/software, licences and registrations, accountant fees. Most tradies underestimate this by 30–50%.',
  },
  {
    q: 'How many billable hours should I assume per week?',
    a: 'Most tradies are 60–80% billable (driving, quoting, admin takes the rest). 32 hours/week is a realistic billable estimate for a 40-hour week.',
  },
  {
    q: 'Do I need to charge more as a sole trader?',
    a: 'Yes. No sick leave, no super contributions from an employer, no paid leave. Factor in at least 11.5% super and 4 weeks leave in your rate.',
  },
  {
    q: 'How does SMASH help with rates?',
    a: 'SMASH learns your labour rates from your first few quotes and applies them automatically. You set the rate once; it uses it every time.',
  },
];

function roundToHalf(n: number): number {
  return Math.round(n * 2) / 2;
}

function fmt(n: number): string {
  return n.toFixed(2);
}

function HourlyRateCalc() {
  const [annualIncome, setAnnualIncome] = useState('80000');
  const [weeksPerYear, setWeeksPerYear] = useState('48');
  const [hoursPerWeek, setHoursPerWeek] = useState('40');
  const [overheadPct, setOverheadPct] = useState('20');
  const [marginPct, setMarginPct] = useState('15');
  const [step, setStep] = useState<'idle' | 'capture' | 'done'>('idle');
  const [leadEmail, setLeadEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const income = parseFloat(annualIncome) || 0;
  const weeks = parseFloat(weeksPerYear) || 1;
  const hours = parseFloat(hoursPerWeek) || 1;
  const overhead = parseFloat(overheadPct) || 0;
  const margin = parseFloat(marginPct) || 0;

  const totalHours = weeks * hours;
  const baseRate = totalHours > 0 ? income / totalHours : 0;
  const withOverhead = overhead < 100 ? baseRate / (1 - overhead / 100) : baseRate;
  const recommendedRate = margin < 100 ? withOverhead / (1 - margin / 100) : withOverhead;
  const dayRate = recommendedRate * hours / 5;

  const baseRateR = roundToHalf(baseRate);
  const recommendedRateR = roundToHalf(recommendedRate);
  const dayRateR = roundToHalf(dayRate);

  const hasValues = income > 0;

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    setSubmitting(true);
    try {
      await supabase.from('leads').insert({
        email: leadEmail,
        source: 'hourly_rate_calculator',
        created_at: new Date().toISOString(),
      });
    } catch (_) {
      // silent failure
    }
    setSubmitting(false);
    setStep('done');
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Inputs */}
      <div className="bg-white rounded-[28px] border-2 border-border p-6 sm:p-8 mb-5">
        <p className="font-black text-xs uppercase tracking-widest text-brand/40 mb-5">Your details</p>
        <div className="space-y-4">
          <div>
            <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">
              Desired annual income (take-home)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-brand/40 text-sm">$</span>
              <input
                type="number"
                value={annualIncome}
                onChange={e => setAnnualIncome(e.target.value)}
                placeholder="80000"
                min="0"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white placeholder:text-brand/25"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">
                Weeks per year
              </label>
              <input
                type="number"
                value={weeksPerYear}
                onChange={e => setWeeksPerYear(e.target.value)}
                min="1"
                max="52"
                className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white"
              />
              <p className="font-body text-[10px] text-brand/35 mt-1">48 = allows 4 wks leave</p>
            </div>
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">
                Billable hours/week
              </label>
              <input
                type="number"
                value={hoursPerWeek}
                onChange={e => setHoursPerWeek(e.target.value)}
                min="1"
                max="80"
                className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white"
              />
              <p className="font-body text-[10px] text-brand/35 mt-1">Actual billable, not total hrs</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">
                Overhead %
              </label>
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
              <p className="font-body text-[10px] text-brand/35 mt-1">Tools, fuel, insurance, phone</p>
            </div>
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">
                Profit margin %
              </label>
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
              <p className="font-body text-[10px] text-brand/35 mt-1">Buffer above cost</p>
            </div>
          </div>
        </div>
      </div>

      {/* Results panel */}
      {hasValues && (
        <div className="bg-brand rounded-[28px] p-6 sm:p-8 mb-5">
          <p className="font-black text-xs uppercase tracking-widest text-white/40 mb-5">Your rate card</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/[0.05] rounded-[20px] p-5 border border-white/10">
              <p className="font-black text-[10px] uppercase tracking-widest text-red-400/80 mb-2">Minimum rate</p>
              <p className="font-black text-3xl text-red-400 tracking-tighter leading-none mb-1">
                ${fmt(baseRateR)}<span className="text-base text-red-400/60">/hr</span>
              </p>
              <p className="font-body text-[11px] font-medium text-white/35 leading-[1.4] mt-2">
                Just covers your income — no buffer
              </p>
            </div>
            <div className="bg-accent/10 rounded-[20px] p-5 border border-accent/25 sm:scale-105">
              <p className="font-black text-[10px] uppercase tracking-widest text-accent mb-2">Recommended rate</p>
              <p className="font-black text-3xl text-accent tracking-tighter leading-none mb-1">
                ${fmt(recommendedRateR)}<span className="text-base text-accent/60">/hr</span>
              </p>
              <p className="font-body text-[11px] font-medium text-white/35 leading-[1.4] mt-2">
                Covers income + overhead + profit margin
              </p>
            </div>
            <div className="bg-white/[0.05] rounded-[20px] p-5 border border-white/10">
              <p className="font-black text-[10px] uppercase tracking-widest text-white/50 mb-2">Day rate</p>
              <p className="font-black text-3xl text-white/70 tracking-tighter leading-none mb-1">
                ${fmt(dayRateR)}
              </p>
              <p className="font-body text-[11px] font-medium text-white/35 leading-[1.4] mt-2">
                Full day on-site ({hours} hrs)
              </p>
            </div>
          </div>
          <p className="font-body text-[11px] font-medium text-white/30 mt-4 text-center">
            All figures ex-GST. Add 10% GST on top if you're registered.
          </p>
        </div>
      )}

      {/* Email CTA */}
      {hasValues && (
        <>
          {step === 'idle' && (
            <button
              onClick={() => setStep('capture')}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-[16px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
            >
              <Mail size={15} strokeWidth={2.5} />
              Email My Rate Card
            </button>
          )}

          {step === 'capture' && (
            <div className="bg-surface rounded-[16px] border-2 border-border p-5">
              <div className="flex items-center gap-2 mb-3">
                <Mail size={16} className="text-accent" strokeWidth={2.5} />
                <p className="font-black text-sm uppercase tracking-tighter text-brand">Where should we send your results?</p>
              </div>
              <p className="font-body text-xs font-medium text-brand/55 mb-4 leading-[1.5]">
                We'll email your full rate card — plus show you how SMASH applies your rates automatically on every invoice.
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
                SMASH learns your rates from your first few quotes and applies them automatically — every job, every invoice.
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

export function HourlyRateCalculator() {
  return (
    <>
      <SEO
        title="Tradie Hourly Rate Calculator Australia | SMASH"
        description="Free hourly rate calculator for Australian tradies. Work out what you need to charge to hit your income goal — including overhead, super, tax, and profit margin."
        keywords="tradie hourly rate calculator, hourly rate calculator australia, what to charge per hour australia, trade hourly rate"
        canonical="https://smashinvoices.com/hourly-rate-calculator"
      />

      <Nav />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-brand pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-5">Free Rate Calculator</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
              Stop guessing.<br />
              <span className="text-accent">Know your rate.</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/65 font-medium leading-[1.5] max-w-2xl mb-8">
              Enter your income goal, weeks worked, and overhead — get your minimum rate, recommended rate, and day rate. Built for Australian tradies.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-accent fill-accent" />)}
                </div>
                <span className="font-body text-xs font-semibold text-white/70">4.9 App Store</span>
              </div>
              <span className="font-body text-xs text-white/40 font-medium">Includes overhead · Includes profit margin · Free forever</span>
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
                What should you charge?
              </h2>
              <p className="font-body text-brand/55 font-medium text-base leading-[1.5] max-w-xl mx-auto">
                Most tradies undercharge because they don't account for overhead and profit. This calculator shows you the real numbers.
              </p>
            </div>
            <HourlyRateCalc />
          </AnimateIn>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <section className="bg-surface border-b border-brand/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-brand/10">
            {[
              { stat: '30–50%', label: 'Overhead underestimated by most tradies' },
              { stat: '11.5%', label: 'Super you need to fund yourself' },
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

      {/* ── WHY RATES MATTER ─────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">Why it matters</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12">
              What most tradies get wrong.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'No overhead buffer',
                desc: 'Fuel, tools, insurance, phone, and accountant fees can easily add 20–30% on top of your base income. Most tradies forget to include these in their rate.',
              },
              {
                num: '02',
                title: 'Not billing all hours',
                desc: "Quoting, driving, admin, and chasing invoices aren't billable. If you're 70% billable, you're really only charging for 28 hours of a 40-hour week.",
              },
              {
                num: '03',
                title: 'No profit margin',
                desc: "Overhead covers costs. Profit margin is what you're building the business with — reinvestment, rainy day fund, and growth. It should be in your rate.",
              },
            ].map((item, i) => (
              <AnimateIn key={i} direction="up" delay={i * 80}>
                <div className="rounded-[28px] bg-brand p-7 h-full">
                  <div className="flex items-start justify-between mb-5">
                    <span className="font-mono text-4xl font-bold text-white/8 leading-none">{item.num}</span>
                  </div>
                  <h3 className="font-black text-base uppercase tracking-tighter text-white leading-[0.95] mb-3">
                    {item.title}
                  </h3>
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
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">Compare rate setting approaches</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10">
              Know your numbers.
            </h2>

            <div className="rounded-[28px] bg-brand overflow-hidden border border-white/10">
              <div className="grid grid-cols-[1fr_auto_auto_auto] gap-3 px-6 py-4 bg-white/[0.04] border-b border-white/10">
                <span className="font-body text-xs font-bold text-white/40 uppercase tracking-widest">Feature</span>
                <div className="w-[76px] text-center"><span className="font-black text-xs uppercase tracking-widest text-accent">SMASH</span></div>
                <div className="w-[76px] text-center"><span className="font-body text-xs font-medium text-white/40">Guessing</span></div>
                <div className="w-[76px] text-center"><span className="font-body text-xs font-medium text-white/40">Other apps</span></div>
              </div>
              <div className="px-6">
                {comparison.map((row, i) => (
                  <div key={i} className="grid grid-cols-[1fr_auto_auto_auto] gap-3 items-center py-3.5 border-b border-white/6 last:border-0">
                    <span className="font-body text-sm font-medium text-white/70">{row.label}</span>
                    <div className="w-[76px] flex justify-center"><CellVal val={row.smash} /></div>
                    <div className="w-[76px] flex justify-center"><CellVal val={row.guess} /></div>
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
              Rate questions answered.
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
              Know your rate. Charge it. Invoice fast.
            </h2>
            <p className="font-body text-brand/70 font-medium text-lg leading-[1.5] mb-8 max-w-xl mx-auto">
              SMASH applies your rates automatically. Set them once — every invoice is right from that point on.
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
              <Link to="/gst-calculator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                GST Calculator →
              </Link>
              <Link to="/invoice-template" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Invoice Template →
              </Link>
              <Link to="/late-payment-calculator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Late Payment Calculator →
              </Link>
              <Link to="/quote-generator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Quote Generator →
              </Link>
              <Link to="/invoice-generator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Invoice Generator →
              </Link>
              <Link to="/voice-invoicing" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Voice Invoicing →
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
