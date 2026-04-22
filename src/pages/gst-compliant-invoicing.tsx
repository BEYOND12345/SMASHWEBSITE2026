import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { StructuredData, createFAQSchema, createBreadcrumbSchema } from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { RelatedTools } from '../components/related-tools';
import { Footer } from '../components/footer';
import { PhoneMockup, AppScreen } from '../components/phone-mockup';
import { Check, ChevronDown, Star, Quote } from 'lucide-react';
import { useState } from 'react';
import { AnimateIn } from '../components/animate-in';
import { Nav } from '../components/nav';
import { hreflangAlternates } from '../data/country-data';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

const faqs = [
  {
    q: "What makes an invoice GST-compliant in Australia?",
    a: "A GST-compliant tax invoice must include: your business name and ABN, the words 'Tax Invoice', the date of issue, a description of goods or services, the total price including GST, and the GST amount shown separately. SMASH generates every invoice with all of these automatically."
  },
  {
    q: "Does SMASH handle GST, VAT, HST and sales tax for other countries?",
    a: "Yes. SMASH ships with AU GST (10%), NZ GST (15%), UK VAT (20%), Canadian GST/HST/PST and US state sales tax built in. Pick your country during onboarding and every invoice is formatted to local tax rules from the first job."
  },
  {
    q: "Does SMASH calculate GST automatically?",
    a: "Yes. Every invoice SMASH generates includes GST calculated at 10% on each line item, with the total GST amount broken out. You never need to calculate it manually or check if it's right."
  },
  {
    q: "Is my ABN included on every invoice?",
    a: "Yes. You enter your ABN once when you set up your account. It appears on every invoice automatically — you never have to type it again."
  },
  {
    q: "Do I need to be registered for GST to use SMASH?",
    a: "SMASH works whether you're GST-registered or not. If you're registered, invoices include GST. If your turnover is under $75,000 and you're not registered, you can still use SMASH to create professional invoices — just without the GST line."
  },
  {
    q: "Can my accountant or bookkeeper access my invoices?",
    a: "Yes. SMASH integrates with Xero and QuickBooks. Your invoices sync automatically so your accountant always has what they need at tax time — no manual exports, no spreadsheets."
  },
  {
    q: "What if I make a mistake on an invoice?",
    a: "You can edit any invoice before sending it. If you've already sent it and need to issue a credit note or correction, SMASH supports that too. Every change is logged."
  },
];

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button onClick={onClick} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="text-base font-black text-brand uppercase tracking-tighter leading-[0.88]">{q}</span>
        <ChevronDown size={18} className={`shrink-0 text-brand/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="font-body text-sm text-brand/70 font-medium leading-[1.5] pb-5">{a}</p>}
    </div>
  );
}

export function GstCompliantInvoicing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="GST Compliant Invoicing App | Tax Invoice Generator Australia | SMASH"
        description="Generate tax-compliant invoices instantly. ABN included, GST/VAT calculated, line items itemised. Every invoice is legally correct — automatically. Live in Australia, New Zealand, the UK, the US and Canada — tax handled per market."
        keywords="GST compliant invoice, tax invoice Australia, GST invoice generator, ATO invoice requirements, ABN invoice, GST invoice app, VAT invoice app, HST invoice app, sales tax invoice app"
        ogTitle="GST-Compliant Invoicing — SMASH"
        ogDescription="Tax-compliant invoices generated in under 60 seconds — GST in Australia and NZ, VAT in the UK, sales tax in the US, HST/PST in Canada. Live on iOS and Chrome."
        canonical="https://smashinvoices.com/gst-compliant-invoicing"
        hreflangs={hreflangAlternates}
      />
      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com' },
        { name: 'Features', url: 'https://smashinvoices.com/features' },
        { name: 'GST-Compliant Invoicing', url: 'https://smashinvoices.com/gst-compliant-invoicing' },
      ])} />
      <StructuredData data={createFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav />

      {/* HERO */}
      <section className="bg-brand pt-16 pb-0 md:pt-24 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <AnimateIn direction="left">
            <div className="pb-16 md:pb-24">
              <p className="text-accent font-black text-xs uppercase tracking-widest mb-4">GST Invoicing</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
                Tax invoices.<br />Zero effort.
              </h1>
              <p className="font-body text-lg text-white/80 font-medium leading-[1.5] mb-8 max-w-md">
                Every invoice SMASH generates is ATO-compliant. ABN included, GST calculated, line items itemised. You speak. We handle the rest.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-95 transition-all">
                  Start Free
                </a>
                <Link to="/how-it-works" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] border-2 border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-white/10 transition-all">
                  See How It Works
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 w-fit">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <span className="font-body text-xs font-semibold text-white/60">4.9 App Store</span>
                </div>
                <p className="font-body text-sm text-white/35 font-medium">No card needed · Cancel anytime</p>
              </div>
            </div>
            </AnimateIn>
            <AnimateIn direction="right">
            <div className="flex justify-center md:justify-end">
              <PhoneMockup>
                <AppScreen type="invoice" />
              </PhoneMockup>
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* AI ANSWER BLOCK */}
      <section className="bg-accent py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-xs font-black uppercase tracking-widest text-brand/50 mb-3">What is a GST-compliant tax invoice?</p>
          <p className="text-lg md:text-xl font-bold text-brand leading-[1.3]">
            In Australia, a tax invoice must include your ABN, the words "Tax Invoice", the date, a description of goods or services, the total price, and the GST amount shown separately. The ATO requires these for any transaction over $82.50 (inc. GST). SMASH generates every one of these fields automatically — from your voice description alone.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-6">
                Getting the GST right shouldn't be a second job
              </h2>
              <div className="space-y-4">
                {[
                  "Calculating 10% in your head — then second-guessing it",
                  "Forgetting to include your ABN and having to resend",
                  "Not knowing if your invoice meets ATO requirements",
                  "Clients rejecting invoices for missing details",
                  "Spending Sundays fixing invoices before BAS time",
                ].map((pain, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-brand/20 font-black text-sm mt-0.5">✕</span>
                    <p className="font-body text-brand/70 font-medium text-sm leading-[1.5]">{pain}</p>
                  </div>
                ))}
              </div>
            </div>
            </AnimateIn>
            <AnimateIn direction="right">
            <div className="bg-surface rounded-[32px] border-2 border-border p-8">
              <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-4">Every SMASH invoice includes</p>
              <div className="space-y-3">
                {[
                  "Your ABN — pre-filled from your account",
                  "\"Tax Invoice\" heading — required by ATO",
                  "Date of issue — auto-generated",
                  "Itemised description from your voice",
                  "GST calculated at 10% per line item",
                  "Total GST amount broken out separately",
                  "Your business name and contact details",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={16} className="text-accent shrink-0" strokeWidth={3} />
                    <p className="text-brand font-bold text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12 text-center">
              From job to compliant invoice in 3 steps
            </h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Describe the job", body: "Say what you did, what materials you used, and who it was for. Takes 20–30 seconds." },
              { step: "02", title: "SMASH builds the invoice", body: "Line items, prices, GST, ABN — all populated from your words and your pricing catalog." },
              { step: "03", title: "Review and send", body: "You see the invoice before it goes anywhere. One tap sends a professional PDF directly to your client." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-[32px] border-2 border-border p-8">
                <p className="text-accent font-black text-sm uppercase tracking-widest mb-3">{s.step}</p>
                <h3 className="text-xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">{s.title}</h3>
                <p className="font-body text-brand/70 font-medium text-sm leading-[1.5]">{s.body}</p>
              </div>
            ))}
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* ACCOUNTING INTEGRATION */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
                BAS time just got a lot less painful
              </h2>
              <p className="font-body text-white/70 font-medium leading-[1.5] mb-8">
                SMASH syncs with Xero and QuickBooks. Every invoice — with its correct GST figures — flows straight into your accounting software. Your bookkeeper gets clean data. Your BAS takes minutes, not a weekend.
              </p>
              <div className="space-y-4">
                {[
                  "Invoices sync automatically — no manual exports",
                  "GST figures are already calculated correctly",
                  "Client records match across SMASH and your accounts",
                  "No more re-entering data between apps",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={16} className="text-accent shrink-0" strokeWidth={3} />
                    <p className="text-white/80 font-medium text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            </AnimateIn>
            <AnimateIn direction="right">
            <div className="bg-white/5 border-2 border-white/10 rounded-[32px] p-8">
              <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-6">Invoice summary example</p>
              <div className="space-y-3">
                {[
                  { label: "Labour — 4 hrs @ $95/hr", amount: "$380.00" },
                  { label: "Materials — 20m conduit", amount: "$64.00" },
                  { label: "Call-out fee", amount: "$80.00" },
                ].map((line, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-white/70 text-sm font-medium">{line.label}</span>
                    <span className="text-white font-black text-sm">{line.amount}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-white/50 text-sm font-medium">GST (10%)</span>
                  <span className="text-white/70 font-black text-sm">$52.40</span>
                </div>
                <div className="flex items-center justify-between border-t-2 border-accent pt-3 mt-2">
                  <span className="text-white font-black text-base uppercase tracking-tight">Total inc. GST</span>
                  <span className="text-accent font-black text-xl">$576.40</span>
                </div>
              </div>
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10 text-center">
            How SMASH compares
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 pr-6 text-sm font-black text-brand/50 uppercase tracking-wide"></th>
                  <th className="text-center py-4 px-4 text-sm font-black text-accent uppercase tracking-wide">SMASH</th>
                  <th className="text-center py-4 px-4 text-sm font-black text-brand/40 uppercase tracking-wide">Spreadsheet</th>
                  <th className="text-center py-4 px-4 text-sm font-black text-brand/40 uppercase tracking-wide">Xero alone</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "GST calculated automatically", smash: true, sheet: false, xero: true },
                  { label: "ABN auto-included", smash: true, sheet: false, xero: true },
                  { label: "ATO-compliant format", smash: true, sheet: false, xero: true },
                  { label: "Generate from voice", smash: true, sheet: false, xero: false },
                  { label: "Works on phone, on site", smash: true, sheet: false, xero: false },
                  { label: "Under 60 seconds per invoice", smash: true, sheet: false, xero: false },
                  { label: "Sends PDF to client directly", smash: true, sheet: false, xero: true },
                  { label: "Price for solo operators", smash: "$12/mo", sheet: "Free", xero: "$78+/mo" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="py-4 pr-6 text-sm font-bold text-brand leading-[1.15]">{row.label}</td>
                    {[row.smash, row.sheet, row.xero].map((val, j) => (
                      <td key={j} className="text-center py-4 px-4">
                        {val === true ? (
                          <Check size={18} className={`mx-auto ${j === 0 ? 'text-accent' : 'text-brand/40'}`} strokeWidth={3} />
                        ) : val === false ? (
                          <span className="text-brand/20 text-sm font-bold">—</span>
                        ) : (
                          <span className={`text-sm font-bold ${j === 0 ? 'text-accent' : 'text-brand/50'}`}>{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FROM THE BLOG */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-brand uppercase tracking-tighter leading-[0.88]">From the blog</h2>
            <Link to="/blog" className="text-sm font-black text-brand/50 uppercase tracking-wide hover:text-brand transition-colors">All posts →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { slug: "is-xero-overkill-for-solo-tradies", title: "Is Xero Overkill?", desc: "Xero is built for accountants. Here's when a simpler invoice tool makes more sense for a solo operator." },
              { slug: "smash-xero-voice-invoicing-accounting", title: "SMASH + Xero", desc: "How voice invoicing and accounting software work together — and why you want both." },
              { slug: "the-cost-of-a-coffee-invoicing-roi", title: "The Cost of a Coffee", desc: "SMASH costs less than a coffee per week. Here's the ROI if you invoice 10 jobs a week." },
            ].map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="bg-white rounded-[24px] border-2 border-border p-6 hover:border-accent transition-colors group">
                <h3 className="text-base font-black text-brand uppercase tracking-tighter leading-[0.88] mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="text-sm text-brand/60 font-medium leading-[1.4]">{post.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-white/8 border border-white/12">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-accent fill-accent" />
                ))}
              </div>
              <span className="font-body text-xs font-semibold text-white/60">Tax time sorted</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-[0.88] text-white">
              Accountants love it. Tradies love it more.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                quote: "My accountant said all my invoices were perfectly formatted for BAS. I just told her I got a better app. She's been recommending it to her other clients.",
                name: "Luke T.",
                trade: "Electrician, Brisbane",
              },
              {
                quote: "I used to redo invoices every BAS time because I'd forgotten the ABN or the GST line. Never happened once since I switched to SMASH.",
                name: "Marcus H.",
                trade: "Plumber, Sydney",
              },
              {
                quote: "GST calculating itself is worth the price of the app alone. I didn't even realise I was getting it wrong on some invoices until SMASH started doing it for me.",
                name: "Pete W.",
                trade: "Carpenter, Melbourne",
              },
            ].map((t, i) => (
              <AnimateIn key={i} delay={i * 80} direction="up">
                <div className="rounded-[24px] bg-white/6 border border-white/10 p-6 md:p-7 flex flex-col h-full">
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <Quote size={20} className="text-accent/60 mb-3 shrink-0" />
                  <p className="font-body text-base font-medium text-white/85 leading-[1.6] mb-5 flex-1">
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="font-black text-sm text-white uppercase tracking-wide">{t.name}</p>
                    <p className="font-body text-xs text-white/45 font-medium mt-0.5">{t.trade}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10 md:mb-14 text-center">
              GST invoicing questions
            </h2>
            <div className="bg-surface rounded-[32px] border-2 border-border px-4 sm:px-8 py-2 sm:py-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* RELATED TOOLS */}
      <section className="bg-brand py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <RelatedTools
            keywords={['gst', 'tax invoice', 'ato']}
            title="Related free tools"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-[0.88]">
            Every invoice.<br />Legally right. First time.
          </h2>
          <p className="font-body text-lg text-white/80 font-medium leading-[1.5] mb-8 max-w-xl mx-auto">
            Free to download. No credit card. Start invoicing in under 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-95 transition-all">
              Start Free
            </a>
            <Link to="/pricing" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] border-2 border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-white/10 transition-all">
              See Pricing
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-2 mb-4">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-accent fill-accent" />
                ))}
              </div>
              <span className="font-body text-xs font-semibold text-white/50">4.9 App Store</span>
            </div>
            <span className="text-white/20 hidden sm:block">·</span>
            <span className="font-body text-xs font-medium text-white/40">No credit card required</span>
            <span className="text-white/20 hidden sm:block">·</span>
            <span className="font-body text-xs font-medium text-white/40">Cancel anytime</span>
          </div>
          <p className="text-sm text-white/40 font-medium">
            <Link to="/voice-invoicing" className="underline hover:text-white/70 transition-colors">Voice invoicing</Link> · <Link to="/features" className="underline hover:text-white/70 transition-colors">All features</Link> · <Link to="/faq" className="underline hover:text-white/70 transition-colors">FAQ</Link>
          </p>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
