import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Apple, Chrome, Check, ChevronDown, FileText, RotateCcw, ShieldCheck, Smartphone, Mail } from 'lucide-react';
import { SEO } from '../components/seo';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { StructuredData, createBreadcrumbSchema, createFAQSchema, createHowToSchema } from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { hreflangAlternates } from '../data/country-data';

const APP_STORE_URL = 'https://apps.apple.com/au/app/smash-invoices/id6759475079';
const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';

const faqs = [
  {
    q: 'What is an NDIS participant number on an invoice?',
    a: 'An NDIS participant number is the 9-digit identifier for the participant receiving support. When a provider invoices for NDIS-funded services, that number helps connect the invoice to the correct participant record. SMASH stores it on the customer profile and prints it automatically on every invoice and quote for that client.',
  },
  {
    q: 'Can SMASH add NDIS participant numbers automatically?',
    a: 'Yes. Save the optional 9-digit participant number once on the customer profile. SMASH then shows it on the public invoice or quote portal and prints it in the Bill To block on every PDF as NDIS: 430 123 456.',
  },
  {
    q: 'Can I repeat weekly NDIS support invoices?',
    a: 'Yes. Sent, approved and paid invoice or quote cards can be repeated into a new draft with the same client, line items and job title, dated today. It is built for weekly support shifts, cleaning, transport and recurring care work.',
  },
  {
    q: 'Does SMASH replace my accounting software?',
    a: 'No. SMASH is for getting the invoice out from the job, shift or inbox. Xero and QuickBooks are still there for your accountant. Paid plans include accounting sync and CSV export.',
  },
  {
    q: 'Can the client or plan manager open the invoice link?',
    a: 'Yes. SMASH creates a public portal link for each quote or invoice. The recipient can open it from email, SMS or Gmail, review the invoice details, see the NDIS number when saved, and pay from their phone.',
  },
];

const workflow = [
  {
    title: 'Save the participant number once.',
    body: 'Add the optional 9-digit NDIS participant number to the customer profile. SMASH stores it with that client.',
    Icon: ShieldCheck,
  },
  {
    title: 'Describe the shift or repeat the last invoice.',
    body: 'Speak the support work, transport, cleaning or care details. For weekly work, repeat the previous invoice and adjust only what changed.',
    Icon: RotateCcw,
  },
  {
    title: 'Send a compliant-looking invoice link.',
    body: 'The portal and PDF include the customer details, line items, total, GST setting and NDIS number when saved.',
    Icon: FileText,
  },
];

const useCases = [
  {
    title: 'Weekly support shifts',
    body: 'Same participant, same shift type, same support notes. Repeat the invoice and update hours or travel.',
  },
  {
    title: 'Cleaning and home help',
    body: 'Regular domestic support work gets invoiced from your phone before the weekly admin pile starts.',
  },
  {
    title: 'Transport and appointments',
    body: 'Add travel, waiting time, parking or appointment support as clear line items.',
  },
  {
    title: 'Plan manager emails',
    body: 'Use SMASH for Gmail to turn an email request into a quote or invoice without switching tabs.',
  },
];

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button onClick={onClick} className="w-full flex items-center justify-between gap-5 py-5 text-left">
        <span className="text-base font-black text-brand uppercase tracking-tighter leading-[0.95]">{q}</span>
        <ChevronDown size={18} className={`shrink-0 text-brand/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="font-body text-base text-brand/60 font-medium leading-[1.55] pb-6">{a}</p>}
    </div>
  );
}

export function NdisInvoicing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="NDIS Invoice App for Support Workers | SMASH Invoices"
        description="Invoice weekly NDIS support work in under 60 seconds. Save participant numbers per client, repeat invoices, send portal links and PDFs from iOS or Gmail."
        keywords="NDIS invoice app, NDIS invoicing app, NDIS participant number invoice, invoice app for NDIS support workers, repeat NDIS invoices, NDIS invoice template"
        ogTitle="NDIS Invoice App for Support Workers | SMASH"
        ogDescription="Save participant numbers once. Repeat weekly support invoices. Send portal links and PDFs in under 60 seconds."
        ogUrl="https://smashinvoices.com/for-ndis-support-workers"
        canonical="https://smashinvoices.com/for-ndis-support-workers"
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com/' },
        { name: 'NDIS Invoicing', url: 'https://smashinvoices.com/for-ndis-support-workers' },
      ])} />
      <StructuredData data={createFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))} />
      <StructuredData data={createHowToSchema({
        name: 'How to create an NDIS invoice with a participant number',
        description: 'Save a participant number once, create or repeat the invoice, then send a portal link and PDF from SMASH.',
        steps: [
          { name: 'Save the participant number', text: 'Add the participant number to the customer profile once.' },
          { name: 'Create or repeat the invoice', text: 'Speak the job details or repeat the previous weekly invoice as a new draft.' },
          { name: 'Review the Bill To block', text: 'Confirm the NDIS number appears on the portal and PDF for that client.' },
          { name: 'Send the invoice link', text: 'Send the invoice by SMS, email, WhatsApp or Gmail so the recipient can open it on their phone.' },
        ],
      })} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav />

      <section className="bg-brand py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="left">
              <p className="text-accent font-black text-xs uppercase tracking-widest mb-5">For NDIS support workers</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
                NDIS invoice.<br />
                Participant<br />
                number included.
              </h1>
              <p className="font-body text-lg text-white/75 font-medium leading-[1.5] mb-8 max-w-lg">
                Save the NDIS participant number once. Repeat weekly support invoices in one tap. Send the portal link and PDF before the admin pile starts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all">
                  <Apple size={17} strokeWidth={2.5} />
                  Join Beta — iOS
                </a>
                <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[32px] border-2 border-white/20 text-white font-bold text-sm uppercase tracking-wide hover:bg-white/10 transition-all">
                  <Chrome size={17} strokeWidth={2.5} />
                  Add to Chrome
                </a>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="bg-white/[0.06] border border-white/10 rounded-[32px] p-6 md:p-8">
                <p className="text-xs font-black uppercase tracking-widest text-white/35 mb-5">Bill To</p>
                <div className="bg-white rounded-3xl p-6 space-y-4">
                  <div>
                    <p className="text-brand font-black text-xl uppercase tracking-tighter leading-[0.9]">Sarah Mitchell</p>
                    <p className="font-body text-brand/45 text-sm font-medium mt-1">Supported independent living</p>
                  </div>
                  <div className="rounded-2xl bg-accent/20 border border-accent/40 p-4">
                    <p className="text-brand/50 text-[11px] font-black uppercase tracking-widest mb-1">Participant number</p>
                    <p className="font-mono text-brand font-black text-lg">NDIS: 430 123 456</p>
                  </div>
                  <div className="space-y-2 text-sm font-body text-brand/65">
                    <div className="flex justify-between gap-4"><span>Weekly support shift</span><strong className="text-brand">$240.00</strong></div>
                    <div className="flex justify-between gap-4"><span>Transport support</span><strong className="text-brand">$38.00</strong></div>
                    <div className="border-t border-border pt-2 flex justify-between gap-4"><span>Total</span><strong className="text-brand">$278.00</strong></div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="bg-accent py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-xs font-black uppercase tracking-widest text-brand/50 mb-3">Short answer</p>
          <p className="text-lg md:text-xl font-bold text-brand leading-[1.35]">
            SMASH is an NDIS invoice app for self-employed support workers and service providers who need participant numbers on invoices. Save the 9-digit participant number once, create or repeat the invoice, and SMASH adds it to the portal link and PDF automatically.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-4 text-center">How it works</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12 text-center">
              Built for repeat<br />support work.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {workflow.map(({ title, body, Icon }) => (
              <AnimateIn key={title} direction="up">
                <div className="rounded-[28px] border-2 border-border bg-surface p-7 h-full">
                  <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center mb-5">
                    <Icon size={19} className="text-brand" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-black text-brand uppercase tracking-tighter leading-[0.95] mb-3">{title}</h3>
                  <p className="font-body text-brand/60 font-medium text-sm leading-[1.55]">{body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimateIn direction="left">
              <p className="text-accent font-black text-xs uppercase tracking-widest mb-4">Where it fits</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-6">
                Weekly jobs should not mean weekly admin.
              </h2>
              <p className="font-body text-brand/65 font-medium leading-[1.6] mb-8">
                NDIS support work is full of recurring patterns: same participant, same shift, same service, different date. SMASH keeps the client details, participant number and common line items ready so the invoice does not have to be rebuilt from scratch.
              </p>
              <div className="space-y-3">
                {[
                  ['Repeat invoice', 'Turn the last sent, approved or paid invoice into a new draft dated today.'],
                  ['Customer profile', 'Store address, contact details, payment history and NDIS participant number together.'],
                  ['Gmail workflow', 'Build invoices from plan-manager or client emails without leaving the inbox.'],
                  ['Accounting sync', 'Starter and above include Xero, QuickBooks and CSV export for cleaner bookkeeping.'],
                ].map(([title, body]) => (
                  <div key={title} className="flex gap-3">
                    <Check size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={3} />
                    <p className="font-body text-sm text-brand/65 font-medium leading-[1.5]"><strong className="text-brand">{title}:</strong> {body}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {useCases.map((item) => (
                  <div key={item.title} className="bg-white border-2 border-border rounded-[24px] p-6">
                    <h3 className="text-base font-black text-brand uppercase tracking-tighter leading-[0.95] mb-3">{item.title}</h3>
                    <p className="font-body text-sm text-brand/60 font-medium leading-[1.55]">{item.body}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-5 text-center">Connect the workflow</p>
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10 text-center">
              NDIS invoices, linked to the rest of SMASH.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { to: '/pricing', title: 'Pricing', body: 'Free gives you 5 invoices. Starter unlocks unlimited invoices and accounting sync.' },
              { to: '/customer-approval', title: 'Customer portal', body: 'Send a portal link with read receipts, approval and payment.' },
              { to: '/invoice-generator', title: 'Invoice generator', body: 'Build a manual invoice, then see how SMASH does it by voice.' },
              { to: '/chrome-extension', title: 'SMASH for Gmail', body: 'Generate invoices from email enquiries and plan-manager threads.' },
              { to: '/voice-invoicing', title: 'Voice invoicing', body: 'Describe the support work out loud and review the invoice before sending.' },
              { to: '/for-cleaners', title: 'Cleaning invoices', body: 'For providers who also deliver recurring cleaning and home-help work.' },
            ].map((item) => (
              <Link key={item.to} to={item.to} className="rounded-[24px] bg-surface border-2 border-border p-6 hover:border-accent transition-colors group">
                <h3 className="text-base font-black text-brand uppercase tracking-tighter leading-[0.95] mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="font-body text-sm text-brand/55 font-medium leading-[1.5]">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10 text-center">
            NDIS invoicing questions
          </h2>
          <div className="bg-white rounded-[32px] border-2 border-border px-6 sm:px-10 py-2">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-4">Start free</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
              Same participant.<br />New invoice.
            </h2>
            <p className="font-body text-lg text-white/65 font-medium leading-[1.5] mb-8">
              Save the number once. Repeat the invoice when the next support shift is done.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all">
                <Smartphone size={17} strokeWidth={2.5} />
                Join Beta — iOS
              </a>
              <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[32px] border-2 border-white/20 text-white font-bold text-sm uppercase tracking-wide hover:bg-white/10 transition-all">
                <Mail size={17} strokeWidth={2.5} />
                Add to Chrome
              </a>
            </div>
            <p className="mt-5 text-xs text-white/35 font-medium">
              Payments, read receipts, NDIS participant numbers and accounting sync available in the SMASH workflow.
            </p>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
