import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { StructuredData, createFAQSchema, createBreadcrumbSchema, createHowToSchema, createCalculatorSchema } from '../components/structured-data';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { Check, X, ChevronDown, Star, Quote as QuoteIcon, Mail, ArrowRight, FileText, CreditCard, Eye, Bell } from 'lucide-react';
import { RelatedPosts } from '../components/related-posts';
import { RelatedTools } from '../components/related-tools';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

const testimonials = [
  {
    quote: "I used a Word template for 3 years. Formatting was always off and GST was wrong half the time. SMASH fixed all of that.",
    name: "James H.",
    trade: "Painter, Gold Coast",
  },
  {
    quote: "The PDF that comes out of SMASH looks more professional than anything I could have made in Word.",
    name: "Lisa M.",
    trade: "Dog Groomer, Melbourne",
  },
  {
    quote: "My clients actually comment on how professional my invoices look now. One asked if I had a proper business system.",
    name: "Aaron V.",
    trade: "Gardener, Adelaide",
  },
];

interface CompRow {
  label: string;
  smash: boolean | string;
  word: boolean | string;
  others: boolean | string;
}

const comparison: CompRow[] = [
  { label: 'ATO-compliant format',     smash: true,       word: 'Manual',  others: true },
  { label: 'ABN & GST included',       smash: true,       word: 'Manual',  others: 'Partial' },
  { label: 'Professional PDF layout',  smash: true,       word: 'Varies',  others: true },
  { label: 'Sequential invoice #s',    smash: true,       word: false,     others: 'Some' },
  { label: 'Stripe payment link',      smash: true,       word: false,     others: 'Some' },
  { label: 'Read receipts',            smash: true,       word: false,     others: false },
  { label: 'Overdue tracking',         smash: true,       word: false,     others: 'Some' },
  { label: 'Free to start',            smash: true,       word: true,      others: 'Some' },
];

const templateFeatures = [
  { icon: Check, label: 'ATO-compliant format' },
  { icon: Check, label: 'ABN & GST included' },
  { icon: Check, label: 'Professional PDF layout' },
  { icon: Check, label: 'Sequential invoice numbers' },
  { icon: CreditCard, label: 'Stripe payment link' },
  { icon: Eye, label: 'Read receipts' },
  { icon: Bell, label: 'Overdue tracking' },
  { icon: Check, label: 'Free to start' },
];

const faqs = [
  {
    q: 'What must a tax invoice include in Australia?',
    a: "An ATO-compliant tax invoice must include: your business name and ABN, the word 'Tax Invoice', the date, a unique invoice number, a description of goods or services supplied, the price of each item, and the GST amount (or a statement that GST is included). These requirements apply to invoices over $82.50 — below that, a simpler invoice is acceptable.",
  },
  {
    q: 'Can I use a Word or Excel invoice template?',
    a: 'Yes, but manually maintaining formatting, GST calculations, and sequential invoice numbering is error-prone and slow. You have to update dates, client details, and totals manually every time. Voice-generated invoices via SMASH are faster, more accurate, and automatically ATO-compliant — no template management required.',
  },
  {
    q: 'Is this template ATO-compliant?',
    a: 'Yes. The template format shown here includes all fields required by the ATO for a valid tax invoice in Australia: business name, ABN, invoice number, date, description of services, subtotal, GST amount, and total. If you\'re using SMASH, every invoice is automatically formatted to these requirements.',
  },
  {
    q: 'Can I add my logo?',
    a: 'Custom branding including logo and colour scheme is on the SMASH roadmap and coming soon. Currently, your business name, ABN, and contact details appear on every invoice automatically. You can see the current layout in the template preview above.',
  },
  {
    q: 'What file format is the invoice?',
    a: 'SMASH generates invoices as PDF files, emailed directly to your client with your business details and all required ATO fields. Clients also receive a web link to the invoice with a Pay Now button powered by Stripe — so they can pay in seconds without logging into internet banking.',
  },
  {
    q: 'Is the template free?',
    a: "Yes, the template is free to download. SMASH also has a free plan that gives you 2 invoices per month with no credit card required. If you're invoicing more than twice a month, the Pro plan ($22.99/month) gives you unlimited invoices, read receipts, and overdue tracking.",
  },
];

// Static invoice preview — today's date, due date 7 days from today
const today = new Date();
const dueDate = new Date(today);
dueDate.setDate(dueDate.getDate() + 7);

const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });

const lineItems = [
  { desc: 'Labour', detail: '2 hours @ $85/hr', amount: 170, gst: true },
  { desc: 'Call-out fee', detail: 'Standard call-out', amount: 60, gst: true },
  { desc: 'Materials (supplied)', detail: 'Parts and consumables', amount: 45, gst: true },
];

const subtotal = 275;
const gstAmount = 27.50;
const total = 302.50;

function InvoiceTemplatePreview() {
  const [step, setStep] = useState<'idle' | 'capture' | 'done'>('idle');
  const [leadEmail, setLeadEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    setSubmitting(true);
    try {
      await supabase.from('leads').insert({
        email: leadEmail,
        source: 'invoice_template',
        created_at: new Date().toISOString(),
      });
    } catch {
      // silent failure
    }
    setSubmitting(false);
    setStep('done');
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Invoice Preview */}
      <div className="bg-white rounded-[28px] border-2 border-border overflow-hidden shadow-xl mb-5">
        {/* Header */}
        <div className="bg-brand px-8 py-7">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-black text-xl text-white uppercase tracking-tighter leading-[0.9]">
                Your Business Name
              </p>
              <p className="font-body text-xs text-white/50 font-medium mt-1">ABN: 12 345 678 901</p>
            </div>
            <div className="text-right">
              <p className="font-black text-xs uppercase tracking-widest text-accent mb-1">Tax Invoice</p>
              <p className="font-mono text-white font-bold text-sm">INV-001</p>
            </div>
          </div>
        </div>

        <div className="px-8 py-6">
          {/* Meta row */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6 pb-5 border-b border-brand/8">
            <div>
              <p className="font-black text-[10px] uppercase tracking-widest text-brand/35 mb-0.5">Date</p>
              <p className="font-body text-sm font-medium text-brand">{fmtDate(today)}</p>
            </div>
            <div>
              <p className="font-black text-[10px] uppercase tracking-widest text-brand/35 mb-0.5">Due date</p>
              <p className="font-body text-sm font-medium text-brand">{fmtDate(dueDate)}</p>
            </div>
            <div>
              <p className="font-black text-[10px] uppercase tracking-widest text-brand/35 mb-0.5">Bill to</p>
              <p className="font-body text-sm font-medium text-brand">Client Name</p>
              <p className="font-body text-xs text-brand/50">client@email.com</p>
            </div>
          </div>

          {/* Line items */}
          <table className="w-full mb-5">
            <thead>
              <tr className="border-b-2 border-brand/8">
                <th className="font-black text-[10px] uppercase tracking-widest text-brand/35 text-left pb-2">Description</th>
                <th className="font-black text-[10px] uppercase tracking-widest text-brand/35 text-right pb-2 w-24">Amount</th>
              </tr>
            </thead>
            <tbody>
              {lineItems.map((item, i) => (
                <tr key={i} className="border-b border-brand/5">
                  <td className="font-body text-sm font-medium text-brand py-2.5 pr-4">
                    {item.desc}
                    <span className="text-brand/45 font-medium"> — {item.detail}</span>
                    {item.gst && <span className="ml-2 text-[10px] font-black text-accent uppercase tracking-wider">+GST</span>}
                  </td>
                  <td className="font-body text-sm font-medium text-brand text-right py-2.5">${item.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="space-y-1.5 mb-5 border-t-2 border-brand/8 pt-4">
            <div className="flex justify-between">
              <span className="font-body text-sm font-medium text-brand/50">Subtotal (ex. GST)</span>
              <span className="font-body text-sm font-medium text-brand">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-body text-sm font-medium text-brand/50">GST (10%)</span>
              <span className="font-body text-sm font-medium text-brand">${gstAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t-2 border-brand pt-2 mt-2">
              <span className="font-black text-base uppercase tracking-tighter text-brand">Total (inc. GST)</span>
              <span className="font-black text-xl tracking-tighter text-brand">${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Pay Now button (visual only) */}
          <div className="bg-accent rounded-[12px] py-3 px-6 text-center mb-5">
            <p className="font-black text-sm uppercase tracking-widest text-brand">Pay Now — ${total.toFixed(2)}</p>
          </div>

          {/* Notes */}
          <div className="bg-surface rounded-xl p-4">
            <p className="font-black text-[10px] uppercase tracking-widest text-brand/35 mb-1">Notes</p>
            <p className="font-body text-xs font-medium text-brand/60 leading-[1.5]">Payment due within 7 days. ABN: 12 345 678 901</p>
          </div>
        </div>
      </div>

      {/* Don't-type CTA */}
      <div className="mb-5 bg-brand rounded-[20px] p-5 border border-accent/20">
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

      {/* Download CTA */}
      {step === 'idle' && (
        <button
          onClick={() => setStep('capture')}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-[16px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
        >
          <FileText size={15} strokeWidth={2.5} />
          Download Free Template
        </button>
      )}

      {step === 'capture' && (
        <div className="bg-surface rounded-[16px] border-2 border-border p-5">
          <div className="flex items-center gap-2 mb-3">
            <Mail size={16} className="text-accent" strokeWidth={2.5} />
            <p className="font-black text-sm uppercase tracking-tighter text-brand">Where should we send the template?</p>
          </div>
          <p className="font-body text-xs font-medium text-brand/55 mb-4 leading-[1.5]">
            We'll email you the template — plus show you how SMASH generates this in 60 seconds from voice, automatically.
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
            SMASH generates an invoice exactly like this in under 60 seconds — just describe the job out loud. No template needed.
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

export function InvoiceTemplate() {
  return (
    <>
      <SEO
        title="Free Invoice Template Australia (ATO-Compliant, GST Ready) | SMASH"
        description="Free Australian invoice template. ATO-compliant tax invoice format with ABN, GST breakdown, and payment terms. Download free or generate by voice with SMASH."
        keywords="free invoice template australia, invoice template word australia, tax invoice template australia, gst invoice template"
        canonical="https://smashinvoices.com/invoice-template"
      />

      <StructuredData data={createCalculatorSchema({
        name: "Free Invoice Template Australia",
        description: "Free ATO-compliant Australian invoice template with ABN, GST breakdown, and payment terms. Download free or generate by voice with SMASH.",
        url: "https://smashinvoices.com/invoice-template",
        featureList: ["ATO-compliant format", "ABN and GST included", "Professional PDF layout", "Free to download"],
      })} />

      <StructuredData data={createHowToSchema({
        name: "How to Use the Free Invoice Template",
        description: "Download and customise Australia's most-used ATO-compliant invoice template.",
        steps: [
          { name: "Review the template below", text: "Preview the ATO-compliant invoice format with all required fields including ABN, GST breakdown, and payment terms." },
          { name: "Download free to your device", text: "Click Download to receive the template via email — ready to customise with your business details." },
          { name: "Customise with your business details — or use SMASH to auto-generate", text: "Fill in your business name, ABN, and client details. Or download SMASH to generate this invoice automatically from voice in under 60 seconds." },
        ],
      })} />

      <StructuredData data={createFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))} />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com' },
        { name: 'Tools', url: 'https://smashinvoices.com/tools' },
        { name: 'Invoice Template', url: 'https://smashinvoices.com/invoice-template' },
      ])} />

      <Nav />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-brand pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-5">Free Invoice Template</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
              ATO-compliant.<br />
              <span className="text-accent">Professional. Free.</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/65 font-medium leading-[1.5] max-w-2xl mb-8">
              Free Australian invoice template with ABN, GST breakdown, and payment terms built in. Download it — or generate one in 60 seconds with SMASH.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-accent fill-accent" />)}
                </div>
                <span className="font-body text-xs font-semibold text-white/70">4.9 App Store</span>
              </div>
              <span className="font-body text-xs text-white/40 font-medium">Free download · No account needed · ATO-compliant</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── TEMPLATE PREVIEW ─────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="text-center mb-10">
              <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">Live preview</p>
              <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">
                This is what you get.
              </h2>
              <p className="font-body text-brand/55 font-medium text-base leading-[1.5] max-w-xl mx-auto">
                A professional, ATO-compliant tax invoice with all required fields. Download the template or let SMASH generate it automatically.
              </p>
            </div>
            <p className="font-body text-brand/65 font-medium text-base leading-[1.6] max-w-2xl mx-auto mb-8">
              Preview Australia's most-used invoice format below. ATO-compliant, GST-ready, professional. Download the template free — or use SMASH to auto-generate this from voice in under 60 seconds.
            </p>
            <InvoiceTemplatePreview />
          </AnimateIn>
        </div>
      </section>

      {/* ── HOW TO USE ───────────────────────────────────────── */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">How to use</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-8">
              How to use this template.
            </h2>
            <ol className="space-y-4">
              {[
                { n: '01', title: 'Review the template below', desc: 'Scroll up to see the full ATO-compliant invoice layout with all required fields: ABN, GST breakdown, invoice number, payment terms, and Pay Now button.' },
                { n: '02', title: 'Download free to your device', desc: 'Click the download button to receive the template via email. No login required — just your email address to receive the file.' },
                { n: '03', title: 'Customise with your business details — or use SMASH to auto-generate', desc: 'Replace the placeholder text with your business name, ABN, and client details. Or download SMASH to skip the template entirely — just describe the job by voice and SMASH generates a professional invoice in 60 seconds.' },
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
              { stat: '60s', label: 'Invoice built from voice' },
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

      {/* ── FEATURES CHECKLIST ───────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-accent font-black text-xs uppercase tracking-widest mb-4">Every invoice includes</p>
                <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-6">
                  Everything the ATO requires. And more.
                </h2>
                <p className="font-body text-brand/55 font-medium text-base leading-[1.5] mb-8">
                  SMASH doesn't just fill in a template — it builds the invoice from your voice, applies the correct GST, assigns the next invoice number, and emails it to your client as a PDF with a Pay Now button.
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
                <p className="font-body text-brand/35 text-xs font-medium mt-3">No credit card · Cancel anytime</p>
              </div>
              <div className="rounded-[28px] bg-brand overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10 bg-accent/5">
                  <p className="font-black text-xs uppercase tracking-widest text-accent">Template features</p>
                </div>
                <ul className="divide-y divide-white/6">
                  {templateFeatures.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 px-6 py-4">
                      <Check size={14} className="text-accent shrink-0" strokeWidth={2.5} />
                      <span className="font-body text-sm font-medium text-white/70 leading-[1.4]">{feat.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">Compare invoice templates</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10">
              Template vs. SMASH.
            </h2>

            <div className="rounded-[28px] bg-brand overflow-hidden border border-white/10">
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

      {/* ── FROM THE BLOG ────────────────────────────────────── */}
      <section className="bg-brand py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="font-black text-xs uppercase tracking-widest text-white/30 mb-6">From the blog</p>
          <RelatedPosts
            currentPostId=""
            primaryKeyword="invoice template"
            secondaryKeywords={['word invoice', 'invoice format', 'ato invoice']}
            limit={2}
          />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-4">FAQ</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10">
              Template questions answered.
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
              Bin the template. Use your voice.
            </h2>
            <p className="font-body text-brand/70 font-medium text-lg leading-[1.5] mb-8 max-w-xl mx-auto">
              SMASH builds this invoice in 60 seconds. Just describe the job — it does the rest.
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

      {/* ── RELATED TOOLS ─────────────────────────────────────── */}
      <section className="bg-brand py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <RelatedTools
            keywords={['template', 'invoice', 'word']}
            currentSlug="/invoice-template"
            title="More free tools"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
