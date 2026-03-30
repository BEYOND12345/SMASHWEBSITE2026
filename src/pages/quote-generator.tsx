import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { Check, X, Mic, FileText, Send, ArrowRight, ChevronDown, Star, Quote as QuoteIcon, Plus, Trash2 } from 'lucide-react';
import { useState, useRef } from 'react';

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
    desc: "Labour, materials, call-out fee — say it how you'd say it to a mate. SMASH figures out the rest.",
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

const testimonials = [
  {
    quote: "I send quotes in under a minute. My competitors take 24 hours to get back to customers. I win the job before they've replied.",
    name: "Dan W.",
    trade: "Handyman, Sydney",
  },
  {
    quote: "My quote acceptance rate went up. I think it's because customers get the quote while they're still excited about the job — not a day later.",
    name: "Amy R.",
    trade: "Gardener, Gold Coast",
  },
  {
    quote: "I was losing jobs because my quotes were slow. SMASH fixed that. I now quote faster than anyone else in my area.",
    name: "Chris B.",
    trade: "Tiler, Adelaide",
  },
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

// ── Interactive Quote Builder ─────────────────────────────────
interface QuoteLineItem {
  id: number;
  description: string;
  qty: string;
  rate: string;
  gst: boolean;
}

function QuoteBuilder() {
  const [businessName, setBusinessName] = useState('Your Business Name');
  const [abn, setAbn] = useState('');
  const [clientName, setClientName] = useState('');
  const [jobAddress, setJobAddress] = useState('');
  const [quoteNumber, setQuoteNumber] = useState('QUO-001');
  const [validUntil, setValidUntil] = useState('');
  const [items, setItems] = useState<QuoteLineItem[]>([
    { id: 1, description: 'Labour', qty: '3', rate: '85', gst: true },
    { id: 2, description: 'Materials', qty: '1', rate: '120', gst: true },
  ]);
  const [notes, setNotes] = useState('This quote is valid for 30 days. Prices include GST where indicated.');
  const [sent, setSent] = useState(false);
  const nextId = useRef(3);

  const addItem = () => {
    setItems(prev => [...prev, { id: nextId.current++, description: '', qty: '1', rate: '', gst: true }]);
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateItem = (id: number, field: keyof QuoteLineItem, value: string | boolean) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const subtotal = items.reduce((sum, item) => {
    return sum + (parseFloat(item.qty) || 0) * (parseFloat(item.rate) || 0);
  }, 0);

  const gstAmount = items.reduce((sum, item) => {
    if (!item.gst) return sum;
    return sum + (parseFloat(item.qty) || 0) * (parseFloat(item.rate) || 0) * 0.1;
  }, 0);

  const total = subtotal + gstAmount;
  const fmt = (n: number) => n.toFixed(2);
  const today = new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      {/* LEFT — Edit form */}
      <div className="space-y-5">
        <div className="bg-white rounded-[20px] border-2 border-border p-6">
          <p className="font-black text-xs uppercase tracking-widest text-brand/40 mb-4">Your details</p>
          <div className="space-y-3">
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">Business name</label>
              <input type="text" value={businessName} onChange={e => setBusinessName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white" />
            </div>
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">ABN (optional)</label>
              <input type="text" value={abn} onChange={e => setAbn(e.target.value)} placeholder="12 345 678 901"
                className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white placeholder:text-brand/25" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[20px] border-2 border-border p-6">
          <p className="font-black text-xs uppercase tracking-widest text-brand/40 mb-4">Job details</p>
          <div className="space-y-3">
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">Client name</label>
              <input type="text" value={clientName} onChange={e => setClientName(e.target.value)} placeholder="John Smith"
                className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white placeholder:text-brand/25" />
            </div>
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">Job address</label>
              <input type="text" value={jobAddress} onChange={e => setJobAddress(e.target.value)} placeholder="123 Main Street, Sydney NSW"
                className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white placeholder:text-brand/25" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">Quote #</label>
                <input type="text" value={quoteNumber} onChange={e => setQuoteNumber(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white" />
              </div>
              <div>
                <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">Valid until</label>
                <input type="date" value={validUntil} onChange={e => setValidUntil(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[20px] border-2 border-border p-6">
          <p className="font-black text-xs uppercase tracking-widest text-brand/40 mb-4">Line items</p>
          <div className="space-y-2 mb-3">
            <div className="grid grid-cols-[1fr_56px_72px_32px_24px] gap-2 px-1">
              <span className="font-black text-[10px] uppercase tracking-widest text-brand/30">Description</span>
              <span className="font-black text-[10px] uppercase tracking-widest text-brand/30 text-center">Qty</span>
              <span className="font-black text-[10px] uppercase tracking-widest text-brand/30 text-right">Rate</span>
              <span className="font-black text-[10px] uppercase tracking-widest text-brand/30 text-center">GST</span>
              <span></span>
            </div>
            {items.map(item => (
              <div key={item.id} className="grid grid-cols-[1fr_56px_72px_32px_24px] gap-2 items-center">
                <input type="text" value={item.description} onChange={e => updateItem(item.id, 'description', e.target.value)}
                  placeholder="Description"
                  className="px-3 py-2 rounded-lg border border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-surface placeholder:text-brand/25" />
                <input type="number" value={item.qty} onChange={e => updateItem(item.id, 'qty', e.target.value)} min="0"
                  className="px-2 py-2 rounded-lg border border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-surface text-center" />
                <div className="relative">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-brand/40 text-xs font-bold">$</span>
                  <input type="number" value={item.rate} onChange={e => updateItem(item.id, 'rate', e.target.value)}
                    min="0" placeholder="0"
                    className="w-full pl-5 pr-2 py-2 rounded-lg border border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-surface text-right placeholder:text-brand/25" />
                </div>
                <div className="flex justify-center">
                  <button onClick={() => updateItem(item.id, 'gst', !item.gst)}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black transition-all ${item.gst ? 'bg-accent text-brand' : 'bg-border text-brand/30'}`}>
                    {item.gst ? '✓' : ''}
                  </button>
                </div>
                <button onClick={() => removeItem(item.id)} className="w-6 h-6 flex items-center justify-center text-brand/25 hover:text-red-400 transition-colors">
                  <Trash2 size={14} strokeWidth={2} />
                </button>
              </div>
            ))}
          </div>
          <button onClick={addItem}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-dashed border-brand/15 text-brand/40 hover:border-accent hover:text-accent transition-all font-black text-xs uppercase tracking-widest w-full justify-center">
            <Plus size={14} strokeWidth={2.5} /> Add line item
          </button>
        </div>

        <div className="bg-white rounded-[20px] border-2 border-border p-6">
          <p className="font-black text-xs uppercase tracking-widest text-brand/40 mb-3">Notes</p>
          <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={2}
            className="w-full px-4 py-3 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-surface resize-none" />
        </div>
      </div>

      {/* RIGHT — Live preview */}
      <div className="sticky top-6 self-start">
        <div className="bg-white rounded-[20px] border-2 border-border overflow-hidden shadow-xl">
          <div className="bg-brand px-8 py-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-black text-xl text-white uppercase tracking-tighter leading-[0.9]">
                  {businessName || 'Your Business Name'}
                </p>
                {abn && <p className="font-body text-xs text-white/50 font-medium mt-1">ABN: {abn}</p>}
              </div>
              <div className="text-right">
                <p className="font-black text-xs uppercase tracking-widest text-accent mb-1">Quote</p>
                <p className="font-mono text-white font-bold text-sm">{quoteNumber}</p>
              </div>
            </div>
          </div>

          <div className="px-8 py-6">
            <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6 pb-5 border-b border-brand/8">
              <div>
                <p className="font-black text-[10px] uppercase tracking-widest text-brand/35 mb-0.5">Date</p>
                <p className="font-body text-sm font-medium text-brand">{today}</p>
              </div>
              {validUntil && (
                <div>
                  <p className="font-black text-[10px] uppercase tracking-widest text-brand/35 mb-0.5">Valid until</p>
                  <p className="font-body text-sm font-medium text-brand">
                    {new Date(validUntil).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
              )}
              {clientName && (
                <div>
                  <p className="font-black text-[10px] uppercase tracking-widest text-brand/35 mb-0.5">Prepared for</p>
                  <p className="font-body text-sm font-medium text-brand">{clientName}</p>
                  {jobAddress && <p className="font-body text-xs text-brand/50">{jobAddress}</p>}
                </div>
              )}
            </div>

            <table className="w-full mb-5">
              <thead>
                <tr className="border-b-2 border-brand/8">
                  <th className="font-black text-[10px] uppercase tracking-widest text-brand/35 text-left pb-2">Description</th>
                  <th className="font-black text-[10px] uppercase tracking-widest text-brand/35 text-center pb-2 w-12">Qty</th>
                  <th className="font-black text-[10px] uppercase tracking-widest text-brand/35 text-right pb-2 w-20">Rate</th>
                  <th className="font-black text-[10px] uppercase tracking-widest text-brand/35 text-right pb-2 w-20">Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => {
                  const qty = parseFloat(item.qty) || 0;
                  const rate = parseFloat(item.rate) || 0;
                  const amount = qty * rate;
                  return (
                    <tr key={item.id} className="border-b border-brand/5">
                      <td className="font-body text-sm font-medium text-brand py-2.5 pr-4">
                        {item.description || <span className="text-brand/25 italic">No description</span>}
                        {item.gst && <span className="ml-1 text-[10px] font-black text-accent uppercase tracking-wider">+GST</span>}
                      </td>
                      <td className="font-body text-sm font-medium text-brand/60 text-center py-2.5">{item.qty || '0'}</td>
                      <td className="font-body text-sm font-medium text-brand/60 text-right py-2.5">${fmt(rate)}</td>
                      <td className="font-body text-sm font-medium text-brand text-right py-2.5">${fmt(amount)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="space-y-1.5 mb-5 border-t-2 border-brand/8 pt-4">
              <div className="flex justify-between">
                <span className="font-body text-sm font-medium text-brand/50">Subtotal (ex. GST)</span>
                <span className="font-body text-sm font-medium text-brand">${fmt(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body text-sm font-medium text-brand/50">GST (10%)</span>
                <span className="font-body text-sm font-medium text-brand">${fmt(gstAmount)}</span>
              </div>
              <div className="flex justify-between border-t-2 border-brand pt-2 mt-2">
                <span className="font-black text-base uppercase tracking-tighter text-brand">Total (inc. GST)</span>
                <span className="font-black text-xl tracking-tighter text-brand">${fmt(total)}</span>
              </div>
            </div>

            {notes && (
              <div className="bg-surface rounded-xl p-4">
                <p className="font-black text-[10px] uppercase tracking-widest text-brand/35 mb-1">Notes</p>
                <p className="font-body text-xs font-medium text-brand/60 leading-[1.5]">{notes}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {sent ? (
            <div className="bg-accent rounded-[16px] p-5 text-center">
              <p className="font-black text-base text-brand uppercase tracking-tighter mb-1">Now imagine doing that in 60 seconds by voice.</p>
              <p className="font-body text-sm text-brand/70 font-medium mb-4">SMASH builds this from a voice description — no typing at all. Free to download.</p>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[32px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all">
                Download Free <ArrowRight size={14} strokeWidth={2.5} />
              </a>
            </div>
          ) : (
            <button onClick={() => setSent(true)}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-[16px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all">
              <Send size={15} strokeWidth={2.5} />
              Send Quote (Preview)
            </button>
          )}
          <p className="text-center font-body text-xs text-brand/35 font-medium">
            Want real quotes sent instantly from voice? <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">Download SMASH</a>
          </p>
        </div>
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

      {/* ── HERO ─────────────────────────────────────────────── */}
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all shadow-lg shadow-accent/20"
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
            {/* Trust signals */}
            <div className="flex items-center gap-3 mt-5 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-accent fill-accent" />)}
                </div>
                <span className="font-body text-xs font-semibold text-white/70">4.9 App Store</span>
              </div>
              <span className="font-body text-xs text-white/40 font-medium">2 free quotes/month · No credit card · iPhone</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── INTERACTIVE QUOTE BUILDER ────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="text-center mb-10">
              <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">Free online tool</p>
              <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">
                Build your quote now.
              </h2>
              <p className="font-body text-brand/55 font-medium text-base leading-[1.5] max-w-xl mx-auto">
                Free to use right here — no download, no signup. Build a quote, see it live, send it. Want to do this in 60 seconds by voice? That's SMASH.
              </p>
            </div>
            <QuoteBuilder />
          </AnimateIn>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <section className="bg-surface border-b border-brand/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-3 divide-x divide-brand/10">
            {[
              { stat: '60s', label: 'Job to quote sent' },
              { stat: '$0', label: 'Free to start' },
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

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
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

      {/* ── WHAT'S IN EVERY QUOTE ────────────────────────────── */}
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
              <p className="font-body text-white/35 text-xs font-medium mt-3">No credit card · Cancel anytime</p>
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

      {/* ── COMPARISON TABLE ─────────────────────────────────── */}
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
              Good questions.
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
              Generate your first quote in 60 seconds.
            </h2>
            <p className="font-body text-brand/70 font-medium text-lg leading-[1.5] mb-8 max-w-xl mx-auto">
              Free to start. No card needed. Just talk and send.
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
            {/* Risk reversal */}
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
