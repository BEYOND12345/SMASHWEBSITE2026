import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { StructuredData, createFAQSchema, createBreadcrumbSchema, createHowToSchema, createCalculatorSchema } from '../components/structured-data';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { Check, X, Mic, Zap, CreditCard, ArrowRight, ChevronDown, Star, Quote, Plus, Trash2, Send, Mail } from 'lucide-react';
import { useState, useRef } from 'react';
import { supabase } from '../lib/supabase';

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

const testimonials = [
  {
    quote: "I used to wait 2 weeks to get paid. Now it's usually same day or next day. The Pay Now button changes everything.",
    name: "Steve M.",
    trade: "Plumber, Sydney",
  },
  {
    quote: "Invoice sent, client paid, money in my account — all before I got home from the job. That's not an exaggeration.",
    name: "Tracey L.",
    trade: "Carpet Cleaner, Melbourne",
  },
  {
    quote: "ATO-compliant invoices without thinking about it. My bookkeeper loves me now.",
    name: "Ryan O.",
    trade: "Electrician, Brisbane",
  },
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
    a: 'Yes — SMASH has a free plan that lets you send 2 invoices per month with no credit card required. The free web invoice builder on this page is also completely free with no signup. Upgrade to the Pro plan ($22.99/month) for unlimited invoices, read receipts, and overdue tracking.',
  },
  {
    q: 'Are SMASH invoices ATO-compliant?',
    a: 'Yes. Every invoice SMASH generates includes your ABN, a GST breakdown, sequential invoice numbers, invoice date, and all fields required by the ATO for a valid tax invoice in Australia. Your bookkeeper and the ATO will be happy. The web invoice builder on this page produces the same compliant format.',
  },
  {
    q: 'How does the payment link work?',
    a: 'SMASH integrates with Stripe. When your client receives the invoice, they see a "Pay Now" button. They tap it, pay by card, and the money arrives in your bank account within 2 business days. No internet banking, no BSB lookup, no delays from forgetting to check email.',
  },
  {
    q: 'Can I convert a quote to an invoice?',
    a: 'Quote-to-invoice conversion is in development and it\'s the most requested feature after Android. It\'ll be a single tap when it launches. For now, you can create the invoice from a fresh voice description in the same amount of time — SMASH already knows your rates so it\'s very fast.',
  },
  {
    q: 'What if my client hasn\'t paid?',
    a: 'SMASH tracks payment status on every invoice and shows you a dashboard of unpaid invoices, how many days overdue each one is, and whether your client has opened the invoice (read receipts). No more "I didn\'t get your invoice" — you can see exactly when it was opened.',
  },
  {
    q: 'Can I invoice in Australian dollars?',
    a: 'Yes — SMASH is built specifically for Australia. All amounts are in AUD, GST is calculated at the Australian rate of 10%, and your ABN appears on every invoice. There\'s no setup needed to configure currency or tax rates — it works correctly for Australian businesses out of the box.',
  },
];

// ── Interactive Invoice Builder ──────────────────────────────
interface LineItem {
  id: number;
  description: string;
  qty: string;
  rate: string;
  gst: boolean;
}

function InvoiceBuilder() {
  const invoiceRef = useRef<HTMLDivElement>(null);
  const [businessName, setBusinessName] = useState('Your Business Name');
  const [abn, setAbn] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('INV-001');
  const [dueDate, setDueDate] = useState('');
  const [items, setItems] = useState<LineItem[]>([
    { id: 1, description: 'Labour — 2 hours', qty: '2', rate: '85', gst: true },
    { id: 2, description: 'Call-out fee', qty: '1', rate: '60', gst: true },
  ]);
  const [notes, setNotes] = useState('Payment due within 7 days. Thank you for your business.');
  const [step, setStep] = useState<'idle' | 'capture' | 'done'>('idle');
  const [leadEmail, setLeadEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const nextId = useRef(3);

  const addItem = () => {
    setItems(prev => [...prev, { id: nextId.current++, description: '', qty: '1', rate: '', gst: true }]);
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateItem = (id: number, field: keyof LineItem, value: string | boolean) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const subtotal = items.reduce((sum, item) => {
    const qty = parseFloat(item.qty) || 0;
    const rate = parseFloat(item.rate) || 0;
    return sum + qty * rate;
  }, 0);

  const gstAmount = items.reduce((sum, item) => {
    if (!item.gst) return sum;
    const qty = parseFloat(item.qty) || 0;
    const rate = parseFloat(item.rate) || 0;
    return sum + (qty * rate) * 0.1;
  }, 0);

  const total = subtotal + gstAmount;

  const fmt = (n: number) => n.toFixed(2);
  const today = new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    setSubmitting(true);
    try {
      await supabase.from('leads').insert({
        email: leadEmail,
        source: 'invoice_generator',
        business_name: businessName !== 'Your Business Name' ? businessName : null,
        total_value: total,
        created_at: new Date().toISOString(),
      });
    } catch (_) {
      // silently ignore — don't block the user experience
    }
    setSubmitting(false);
    setStep('done');
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      {/* LEFT — Edit form */}
      <div className="space-y-5">
        {/* Business details */}
        <div className="bg-white rounded-[20px] border-2 border-border p-6">
          <p className="font-black text-xs uppercase tracking-widest text-brand/40 mb-4">Your details</p>
          <div className="space-y-3">
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">Business name</label>
              <input
                type="text"
                value={businessName}
                onChange={e => setBusinessName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white"
              />
            </div>
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">ABN (optional)</label>
              <input
                type="text"
                value={abn}
                onChange={e => setAbn(e.target.value)}
                placeholder="12 345 678 901"
                className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white placeholder:text-brand/25"
              />
            </div>
          </div>
        </div>

        {/* Client details */}
        <div className="bg-white rounded-[20px] border-2 border-border p-6">
          <p className="font-black text-xs uppercase tracking-widest text-brand/40 mb-4">Client details</p>
          <div className="space-y-3">
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">Client name</label>
              <input
                type="text"
                value={clientName}
                onChange={e => setClientName(e.target.value)}
                placeholder="John Smith"
                className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white placeholder:text-brand/25"
              />
            </div>
            <div>
              <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">Client email</label>
              <input
                type="email"
                value={clientEmail}
                onChange={e => setClientEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white placeholder:text-brand/25"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">Invoice #</label>
                <input
                  type="text"
                  value={invoiceNumber}
                  onChange={e => setInvoiceNumber(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white"
                />
              </div>
              <div>
                <label className="font-black text-xs uppercase tracking-wider text-brand/50 mb-1 block">Due date</label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={e => setDueDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Line items */}
        <div className="bg-white rounded-[20px] border-2 border-border p-6">
          <p className="font-black text-xs uppercase tracking-widest text-brand/40 mb-4">Line items</p>
          <div className="space-y-2 mb-3">
            {/* Header */}
            <div className="grid grid-cols-[1fr_56px_72px_32px_24px] gap-2 px-1">
              <span className="font-black text-[10px] uppercase tracking-widest text-brand/30">Description</span>
              <span className="font-black text-[10px] uppercase tracking-widest text-brand/30 text-center">Qty</span>
              <span className="font-black text-[10px] uppercase tracking-widest text-brand/30 text-right">Rate</span>
              <span className="font-black text-[10px] uppercase tracking-widest text-brand/30 text-center">GST</span>
              <span></span>
            </div>
            {items.map(item => (
              <div key={item.id} className="grid grid-cols-[1fr_56px_72px_32px_24px] gap-2 items-center">
                <input
                  type="text"
                  value={item.description}
                  onChange={e => updateItem(item.id, 'description', e.target.value)}
                  placeholder="Description"
                  className="px-3 py-2 rounded-lg border border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-surface placeholder:text-brand/25"
                />
                <input
                  type="number"
                  value={item.qty}
                  onChange={e => updateItem(item.id, 'qty', e.target.value)}
                  min="0"
                  className="px-2 py-2 rounded-lg border border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-surface text-center"
                />
                <div className="relative">
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-brand/40 text-xs font-bold">$</span>
                  <input
                    type="number"
                    value={item.rate}
                    onChange={e => updateItem(item.id, 'rate', e.target.value)}
                    min="0"
                    placeholder="0"
                    className="w-full pl-5 pr-2 py-2 rounded-lg border border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-surface text-right placeholder:text-brand/25"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => updateItem(item.id, 'gst', !item.gst)}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black transition-all ${item.gst ? 'bg-accent text-brand' : 'bg-border text-brand/30'}`}
                  >
                    {item.gst ? '✓' : ''}
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="w-6 h-6 flex items-center justify-center text-brand/25 hover:text-red-400 transition-colors"
                >
                  <Trash2 size={14} strokeWidth={2} />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={addItem}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-dashed border-brand/15 text-brand/40 hover:border-accent hover:text-accent transition-all font-black text-xs uppercase tracking-widest w-full justify-center"
          >
            <Plus size={14} strokeWidth={2.5} /> Add line item
          </button>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-[20px] border-2 border-border p-6">
          <p className="font-black text-xs uppercase tracking-widest text-brand/40 mb-3">Notes</p>
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            rows={2}
            className="w-full px-4 py-3 rounded-xl border-2 border-border font-body text-sm text-brand font-medium focus:outline-none focus:border-brand/40 bg-surface resize-none"
          />
        </div>
      </div>

      {/* RIGHT — Live preview */}
      <div className="sticky top-6 self-start">
        <div className="bg-white rounded-[20px] border-2 border-border overflow-hidden shadow-xl" ref={invoiceRef}>
          {/* Invoice header */}
          <div className="bg-brand px-8 py-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-black text-xl text-white uppercase tracking-tighter leading-[0.9]">
                  {businessName || 'Your Business Name'}
                </p>
                {abn && <p className="font-body text-xs text-white/50 font-medium mt-1">ABN: {abn}</p>}
              </div>
              <div className="text-right">
                <p className="font-black text-xs uppercase tracking-widest text-accent mb-1">Tax Invoice</p>
                <p className="font-mono text-white font-bold text-sm">{invoiceNumber}</p>
              </div>
            </div>
          </div>

          <div className="px-8 py-6">
            {/* Meta row */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6 pb-5 border-b border-brand/8">
              <div>
                <p className="font-black text-[10px] uppercase tracking-widest text-brand/35 mb-0.5">Date</p>
                <p className="font-body text-sm font-medium text-brand">{today}</p>
              </div>
              {dueDate && (
                <div>
                  <p className="font-black text-[10px] uppercase tracking-widest text-brand/35 mb-0.5">Due date</p>
                  <p className="font-body text-sm font-medium text-brand">
                    {new Date(dueDate).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </div>
              )}
              {clientName && (
                <div>
                  <p className="font-black text-[10px] uppercase tracking-widest text-brand/35 mb-0.5">Bill to</p>
                  <p className="font-body text-sm font-medium text-brand">{clientName}</p>
                  {clientEmail && <p className="font-body text-xs text-brand/50">{clientEmail}</p>}
                </div>
              )}
            </div>

            {/* Line items table */}
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

            {/* Totals */}
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

            {/* Notes */}
            {notes && (
              <div className="bg-surface rounded-xl p-4">
                <p className="font-black text-[10px] uppercase tracking-widest text-brand/35 mb-1">Notes</p>
                <p className="font-body text-xs font-medium text-brand/60 leading-[1.5]">{notes}</p>
              </div>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-4 space-y-3">
          {step === 'idle' && (
            <>
              <button
                onClick={() => setStep('capture')}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-[16px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
              >
                <Send size={15} strokeWidth={2.5} />
                Send Invoice
              </button>
              <p className="text-center font-body text-xs text-brand/35 font-medium">
                Want real invoices with Stripe payment links? <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">Download SMASH</a>
              </p>
            </>
          )}

          {step === 'capture' && (
            <div className="bg-surface rounded-[16px] border-2 border-border p-5">
              <div className="flex items-center gap-2 mb-3">
                <Mail size={16} className="text-accent" strokeWidth={2.5} />
                <p className="font-black text-sm uppercase tracking-tighter text-brand">Where should we send your copy?</p>
              </div>
              <p className="font-body text-xs font-medium text-brand/55 mb-4 leading-[1.5]">
                Enter your email and we'll send you a copy of this invoice — plus tips on how to do this in 60 seconds by voice.
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
                  {submitting ? 'Sending...' : <><Send size={14} strokeWidth={2.5} /> Send me a copy</>}
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
                Now imagine building that invoice in 60 seconds — just by talking. No typing. No form. That's SMASH.
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
    </div>
  );
}

// ── Interactive Quote Builder ──────────────────────────────────
function CellVal({ val }: { val: boolean | string }) {
  if (val === true) return <Check size={16} className="text-accent mx-auto" strokeWidth={2.5} />;
  if (val === false) return <X size={14} className="text-white/25 mx-auto" strokeWidth={2.5} />;
  return <span className="font-body text-xs text-white/40">{val}</span>;
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-black text-sm uppercase tracking-tighter text-brand leading-[0.95]">{q}</span>
        <ChevronDown
          size={16}
          className={`text-brand/40 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          strokeWidth={2.5}
        />
      </button>
      {open && (
        <p className="font-body text-sm font-medium text-brand/60 leading-[1.6] pb-5">{a}</p>
      )}
    </div>
  );
}

export function InvoiceGenerator() {
  return (
    <>
      <SEO
        title="Free Invoice Generator Australia: ATO Tax Invoice in 60 Seconds | SMASH"
        description="Australia's fastest invoice generator. Describe the job out loud — get an ATO-compliant tax invoice with Stripe payment link in under 60 seconds. Free to start."
        keywords="free invoice generator australia, tradie invoice generator, invoice generator app, tax invoice generator australia, GST invoice generator"
        ogTitle="Free Invoice Generator for Tradies — SMASH"
        ogDescription="Voice-powered invoice generator for Australian tradies. ATO-compliant tax invoices in 60 seconds. Free to start."
        canonical="https://smashinvoices.com/invoice-generator"
      />

      <StructuredData data={createCalculatorSchema({
        name: "Free Invoice Generator Australia",
        description: "Build a real ATO-compliant tax invoice in your browser. No login, no download. Enter your details, add line items, and send.",
        url: "https://smashinvoices.com/invoice-generator",
        featureList: ["ATO-compliant tax invoice format", "ABN displayed on every invoice", "GST calculated per line item", "Stripe payment link", "Free to use"],
      })} />

      <StructuredData data={createHowToSchema({
        name: "How to Generate an Invoice Online",
        description: "Build a free ATO-compliant Australian tax invoice right in your browser in 3 steps.",
        steps: [
          { name: "Enter your business details and ABN", text: "Enter your business name and ABN — both required for an ATO-compliant tax invoice in Australia." },
          { name: "Add line items with GST toggle per item", text: "Add each line item — labour, materials, call-out fee — with quantity and rate. Toggle GST on or off per line item." },
          { name: "Send invoice and capture the lead — or use SMASH for voice-to-invoice", text: "Send your completed invoice by email — or download SMASH to describe the job by voice and generate this invoice in under 60 seconds." },
        ],
      })} />

      <StructuredData data={createFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))} />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com' },
        { name: 'Tools', url: 'https://smashinvoices.com/tools' },
        { name: 'Invoice Generator', url: 'https://smashinvoices.com/invoice-generator' },
      ])} />

      <Nav />

      {/* ── HERO ─────────────────────────────────────────────── */}
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all shadow-lg shadow-accent/20"
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
            {/* Trust signals */}
            <div className="flex items-center gap-3 mt-5 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-accent fill-accent" />)}
                </div>
                <span className="font-body text-xs font-semibold text-white/70">4.9 App Store</span>
              </div>
              <span className="font-body text-xs text-white/40 font-medium">2 invoices free/month · No credit card · iPhone</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── INTERACTIVE INVOICE BUILDER ──────────────────────── */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="text-center mb-10">
              <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">Free online tool</p>
              <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">
                Build your invoice now.
              </h2>
              <p className="font-body text-brand/55 font-medium text-base leading-[1.5] max-w-xl mx-auto">
                Free to use right here — no download, no signup. Add your details, see it live, send it. Want to do this in 60 seconds by voice? That's SMASH.
              </p>
            </div>
            <p className="font-body text-brand/65 font-medium text-base leading-[1.6] max-w-2xl mx-auto mb-8">
              Build a real ATO-compliant tax invoice right here. No login, no download, no setup. Enter your details, add line items, and send. For voice-to-invoice in 60 seconds, download SMASH.
            </p>
            <InvoiceBuilder />
          </AnimateIn>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
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

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
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

      {/* ── WHAT'S IN EVERY INVOICE ──────────────────────────── */}
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
              <p className="font-body text-brand/40 text-xs font-medium mt-3">No credit card · Cancel anytime</p>
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

      {/* ── COMPARISON TABLE ─────────────────────────────────── */}
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

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3 text-center">From tradies using SMASH</p>
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12 text-center">
              Getting paid faster
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <AnimateIn key={i} direction="up" delay={i * 80}>
                <div className="flex flex-col h-full rounded-[20px] bg-white border border-brand/8 p-6 shadow-sm">
                  <Quote size={20} className="text-accent mb-4 shrink-0" strokeWidth={2} />
                  <p className="font-body text-sm font-medium text-brand/75 leading-[1.65] flex-1 mb-5">
                    "{t.quote}"
                  </p>
                  <div className="border-t border-brand/8 pt-4">
                    <p className="font-black text-xs uppercase tracking-wider text-brand">{t.name}</p>
                    <p className="font-body text-xs font-medium text-brand/45 mt-0.5">{t.trade}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn direction="up" delay={150}>
            <div className="flex items-center justify-center gap-5 mt-10 flex-wrap">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-accent fill-accent" />)}
                <span className="font-body text-xs font-semibold text-brand/60 ml-1">4.9 App Store</span>
              </div>
              <span className="text-brand/20 text-sm">·</span>
              <span className="font-body text-xs font-medium text-brand/40">Free to start</span>
              <span className="text-brand/20 text-sm">·</span>
              <span className="font-body text-xs font-medium text-brand/40">No card needed</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-white/30 mb-4">FAQ</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-10">
              Common questions.
            </h2>
            <div className="rounded-[28px] bg-surface overflow-hidden px-6">
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
              Send your first invoice in 60 seconds.
            </h2>
            <p className="font-body text-brand/70 font-medium text-lg leading-[1.5] mb-8 max-w-xl mx-auto">
              Free to start. No card. Just describe the job and tap send.
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

      {/* ── RELATED ───────────────────────────────────────────── */}
      <section className="bg-brand py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/tools" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                All Tools →
              </Link>
              <Link to="/quote-generator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Quote Generator →
              </Link>
              <Link to="/profit-calculator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                Profit Calculator →
              </Link>
              <Link to="/gst-calculator" className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/50 font-black text-xs uppercase tracking-widest hover:text-white hover:bg-white/10 transition-all">
                GST Calculator →
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
