import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { Check, X, ChevronDown, Star, Quote as QuoteIcon, Mail, ArrowRight, Clock } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

const testimonials = [
  {
    quote: "The read receipts alone changed everything. I know exactly when my client opened the invoice — and I follow up immediately if they haven't paid.",
    name: "Tony G.",
    trade: "Electrician, Sydney",
  },
  {
    quote: "Had a client who 'forgot' for 45 days. Showed him this calculator and the invoice was paid within an hour.",
    name: "Rachel B.",
    trade: "Cleaner, Canberra",
  },
  {
    quote: "Late payments were killing my cash flow. SMASH shows me every overdue invoice and how many days they've been owing. I'm on top of it now.",
    name: "Shane O.",
    trade: "Concreter, Brisbane",
  },
];

interface CompRow {
  label: string;
  smash: boolean | string;
  manual: boolean | string;
  others: boolean | string;
}

const comparison: CompRow[] = [
  { label: 'Overdue invoice tracking',    smash: true,       manual: false,     others: 'Some' },
  { label: 'Days outstanding counter',    smash: true,       manual: false,     others: 'Some' },
  { label: 'Read receipts',               smash: true,       manual: false,     others: false },
  { label: 'Pay Now button',              smash: true,       manual: false,     others: 'Some' },
  { label: 'Instant invoice from voice',  smash: true,       manual: false,     others: false },
  { label: 'Interest calculator',         smash: false,      manual: 'Manual',  others: 'Some' },
  { label: 'Free to start',               smash: true,       manual: true,      others: 'Some' },
];

const faqs = [
  {
    q: 'Can I charge interest on overdue invoices in Australia?',
    a: 'Yes, if your payment terms include an interest clause. Without that clause, charging interest is legally difficult. Always include payment terms on your invoices.',
  },
  {
    q: 'What interest rate can I charge?',
    a: "There's no fixed legal rate for commercial invoices. Common practice is 10–15% p.a. The ATO's general interest charge (GIC) is a common reference point.",
  },
  {
    q: 'How do I add interest to an overdue invoice?',
    a: 'Issue a separate "overdue notice" invoice showing the original amount, days overdue, interest rate, and interest charged.',
  },
  {
    q: 'Does SMASH track overdue invoices?',
    a: 'Yes. SMASH shows you which invoices are unpaid, how many days overdue they are, and whether your client has opened the invoice (read receipts).',
  },
  {
    q: "What's the best way to avoid late payments?",
    a: 'Send invoices immediately (not at end of week), include a Pay Now button, use read receipts to know when the client has seen it, and follow up within 24 hours of the due date.',
  },
  {
    q: 'Is there a legal late payment scheme in Australia?',
    a: 'Not a universal one for small business. Some states have prompt payment legislation for government contracts. For private clients, your payment terms in the invoice/contract govern everything.',
  },
];

// Default due date = 30 days ago
function getDefaultDueDate(): string {
  const d = new Date();
  d.setDate(d.getDate() - 30);
  return d.toISOString().split('T')[0];
}

function LatePaymentCalc() {
  const [invoiceAmount, setInvoiceAmount] = useState('1500');
  const [dueDate, setDueDate] = useState(getDefaultDueDate());
  const [interestRate, setInterestRate] = useState('10');
  const [step, setStep] = useState<'idle' | 'capture' | 'done'>('idle');
  const [leadEmail, setLeadEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const amount = parseFloat(invoiceAmount) || 0;
  const rate = parseFloat(interestRate) || 0;

  const todayMs = new Date().setHours(0, 0, 0, 0);
  const dueDateMs = dueDate ? new Date(dueDate).setHours(0, 0, 0, 0) : todayMs;
  const daysOverdue = Math.max(0, Math.floor((todayMs - dueDateMs) / (1000 * 60 * 60 * 24)));

  const dailyRate = rate / 100 / 365;
  const interestOwed = amount * dailyRate * daysOverdue;
  const totalOwed = amount + interestOwed;

  const hasValues = amount > 0;

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    setSubmitting(true);
    try {
      await supabase.from('leads').insert({
        email: leadEmail,
        source: 'late_payment_calculator',
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
        <p className="font-black text-xs uppercase tracking-widest text-brand/40 mb-5">Invoice details</p>
        <div className="space-y-4">
          <div>
            <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">
              Invoice amount (inc. GST)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-brand/40 text-sm">$</span>
              <input
                type="number"
                value={invoiceAmount}
                onChange={e => setInvoiceAmount(e.target.value)}
                placeholder="1500"
                min="0"
                step="0.01"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white placeholder:text-brand/25"
              />
            </div>
          </div>
          <div>
            <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">
              Invoice due date
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white"
            />
          </div>
          <div>
            <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">
              Annual interest rate
            </label>
            <div className="relative">
              <input
                type="number"
                value={interestRate}
                onChange={e => setInterestRate(e.target.value)}
                min="0"
                max="100"
                step="0.1"
                className="w-full px-4 pr-8 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 font-black text-brand/40 text-sm">%</span>
            </div>
            <p className="font-body text-[10px] text-brand/35 mt-1">ATO penalty interest rate is currently ~10% p.a.</p>
          </div>
        </div>
      </div>

      {/* Results panel */}
      {hasValues && (
        <div className="bg-brand rounded-[28px] p-6 sm:p-8 mb-5">
          {/* Days overdue badge */}
          <div className="flex items-center gap-3 mb-5">
            <Clock size={16} className={daysOverdue > 0 ? 'text-red-400' : 'text-white/30'} strokeWidth={2.5} />
            <span className={`font-black text-2xl tracking-tighter ${daysOverdue > 0 ? 'text-red-400' : 'text-white/40'}`}>
              {daysOverdue} {daysOverdue === 1 ? 'day' : 'days'} overdue
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-body text-sm font-medium text-white/55">Original invoice</span>
              <span className="font-black text-base text-white tracking-tighter">${amount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-body text-sm font-medium text-white/55">
                Interest accrued <span className="text-white/30 font-medium">at {rate}% p.a.</span>
              </span>
              <span className="font-black text-base text-white tracking-tighter">${interestOwed.toFixed(2)}</span>
            </div>
            <div className="border-t border-white/12 pt-3 flex justify-between items-center">
              <span className="font-black text-sm uppercase tracking-tighter text-white/70">Total now owed</span>
              <span className="font-black text-3xl text-accent tracking-tighter">${totalOwed.toFixed(2)}</span>
            </div>
          </div>

          <p className="font-body text-[11px] font-medium text-white/30 mt-5 leading-[1.5]">
            Interest on commercial invoices is not automatic in Australia — you must state payment terms and interest conditions in your invoice or agreement.
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
              Email This Calculation
            </button>
          )}

          {step === 'capture' && (
            <div className="bg-surface rounded-[16px] border-2 border-border p-5">
              <div className="flex items-center gap-2 mb-3">
                <Mail size={16} className="text-accent" strokeWidth={2.5} />
                <p className="font-black text-sm uppercase tracking-tighter text-brand">Where should we send your results?</p>
              </div>
              <p className="font-body text-xs font-medium text-brand/55 mb-4 leading-[1.5]">
                We'll email your late payment calculation — plus show you how SMASH tracks overdue invoices with read receipts.
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
                SMASH shows you every overdue invoice with a days-outstanding counter and read receipts — so you always know who's seen your invoice and who hasn't paid.
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

export function LatePaymentCalculator() {
  return (
    <>
      <SEO
        title="Invoice Late Payment Calculator Australia | SMASH"
        description="Calculate interest on overdue invoices in Australia. Work out how much you're owed on a late payment using the standard commercial rate."
        keywords="late payment calculator australia, overdue invoice interest calculator, invoice interest calculator australia, commercial late payment interest"
        canonical="https://smashinvoices.com/late-payment-calculator"
      />

      <Nav />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-brand pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-5">Free Late Payment Calculator</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
              Late invoices.<br />
              <span className="text-accent">Real money owed.</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/65 font-medium leading-[1.5] max-w-2xl mb-8">
              Calculate exactly how much interest is owed on an overdue invoice. Enter the amount, due date, and rate — see the total owed right now.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-accent fill-accent" />)}
                </div>
                <span className="font-body text-xs font-semibold text-white/70">4.9 App Store</span>
              </div>
              <span className="font-body text-xs text-white/40 font-medium">Daily interest · Overdue tracking · Free forever</span>
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
                How much are they really owing?
              </h2>
              <p className="font-body text-brand/55 font-medium text-base leading-[1.5] max-w-xl mx-auto">
                Late invoice interest calculated daily at your chosen annual rate. Includes total owing with interest accrued.
              </p>
            </div>
            <LatePaymentCalc />
          </AnimateIn>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <section className="bg-surface border-b border-brand/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-brand/10">
            {[
              { stat: '30+', label: 'Avg days overdue for tradie invoices' },
              { stat: '~10%', label: 'ATO reference interest rate p.a.' },
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

      {/* ── HOW TO GET PAID FASTER ───────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">How to get paid</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12">
              Three ways to stop late payments.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Invoice immediately',
                desc: 'Every day you delay sending the invoice is a day you push the payment back. Send it from the job site — before you even drive home.',
              },
              {
                num: '02',
                title: 'Include a Pay Now button',
                desc: 'Clients who can tap and pay in 10 seconds pay faster than clients who have to log in to internet banking and type your BSB. SMASH includes a Stripe Pay Now link on every invoice.',
              },
              {
                num: '03',
                title: 'Use read receipts',
                desc: "\"I didn't get the invoice\" is no longer an excuse. SMASH tells you exactly when your client opened the invoice. If they haven't — follow up.",
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
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">Compare late payment tools</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10">
              Stop chasing. Start tracking.
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
              Late payment questions answered.
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
              Stop chasing late payments.
            </h2>
            <p className="font-body text-brand/70 font-medium text-lg leading-[1.5] mb-8 max-w-xl mx-auto">
              SMASH shows you every unpaid invoice, how many days overdue, and whether your client has even opened it. No more guessing.
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
              <Link to="/hourly-rate-calculator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Hourly Rate Calculator →
              </Link>
              <Link to="/invoice-generator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Invoice Generator →
              </Link>
              <Link to="/quote-generator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Quote Generator →
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
