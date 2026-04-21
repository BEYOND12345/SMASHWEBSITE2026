import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { StructuredData, createFAQSchema, createBreadcrumbSchema, createHowToSchema } from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { hreflangAlternates } from '../data/country-data';
import { RelatedTools } from '../components/related-tools';
import { Footer } from '../components/footer';
import { Check, ChevronDown, Star, ArrowRight, Mic, FileText, Send, ThumbsUp, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { AnimateIn } from '../components/animate-in';
import { Nav } from '../components/nav';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

const faqs = [
  {
    q: "What is voice invoicing?",
    a: "Voice invoicing is the process of describing a completed job out loud and having software automatically build a structured, priced invoice from your speech. Instead of typing, you speak — the software transcribes and interprets what you said, then generates a tax-compliant invoice ready to send."
  },
  {
    q: "How accurate is voice invoicing?",
    a: "SMASH handles natural speech including trade terminology, accents, and background noise. It's designed for job sites, not offices. You get a full review screen before anything is sent, so you can catch and fix any misinterpretations before the customer sees it."
  },
  {
    q: "How long does voice invoicing take?",
    a: "Under 60 seconds end-to-end for a new job — speak, review, send. Under 30 seconds once your pricing catalog is set up. Voice processing takes approximately 7 seconds, quote generation under 10 seconds total."
  },
  {
    q: "What trades does voice invoicing work for?",
    a: "Any trade or service business that quotes jobs verbally: cleaners, plumbers, electricians, painters, handymen, gardeners, mobile mechanics, pest control, HVAC, concreters, tilers — if you can describe the work out loud, SMASH can build the invoice from it."
  },
  {
    q: "Does voice invoicing work in Australia?",
    a: "Yes. SMASH is live in Australia today — GST calculations, ABN display, ATO-compliant invoice format, and Australian trade materials pricing are all built in. Prices are in AUD."
  },
  {
    q: "Does voice invoicing work outside Australia?",
    a: "Yes — New Zealand, the United Kingdom, the United States, and Canada are next. Each launches with local tax rules (GST, VAT, sales tax, HST/PST), local currency, and local business-number fields. Join the waitlist at /nz, /uk, /us, or /ca for early access."
  },
  {
    q: "Is voice invoicing available on Android?",
    a: "SMASH is currently available on iOS (iPhone). Android support is coming. The web-based quote generator at smashinvoices.com works on any device in the meantime."
  }
];

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button onClick={onClick} className="w-full flex items-start justify-between gap-4 py-6 text-left">
        <span className="font-display text-sm uppercase tracking-tight text-brand">{q}</span>
        <ChevronDown size={20} className={`shrink-0 transition-transform text-slate-400 mt-0.5 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="font-body text-base text-slate-500 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export function VoiceInvoicing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Voice Invoicing — What It Is and How It Works | SMASH"
        description="Voice invoicing is the process of describing a job out loud and having software build an invoice automatically. Live for Australian tradies today; coming to the UK, US, Canada and NZ. Learn what it is, how it works, and why tradies use it."
        keywords="voice invoicing, what is voice invoicing, voice to invoice, voice invoicing app Australia, voice invoicing UK, voice invoicing USA, voice invoicing Canada, voice invoicing New Zealand, how voice invoicing works"
        ogTitle="Voice Invoicing — What It Is and How It Works | SMASH"
        ogDescription="Voice invoicing explained: describe the job out loud, invoice built automatically. The category defined."
        ogUrl="https://smashinvoices.com/voice-invoicing"
        canonical="https://smashinvoices.com/voice-invoicing"
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com' },
        { name: 'Voice Invoicing', url: 'https://smashinvoices.com/voice-invoicing' },
      ])} />
      <StructuredData data={createFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))} />
      <StructuredData data={createHowToSchema({
        name: 'How Voice Invoicing Works',
        description: 'The complete workflow from job done to invoice sent using voice invoicing software.',
        steps: [
          { name: 'Describe the job out loud', text: 'Speak naturally for 20–30 seconds — what you did, materials used, time taken. No script or format required.' },
          { name: 'Software builds the invoice', text: 'In under 10 seconds, a structured, priced, GST-compliant invoice is generated automatically from your speech.' },
          { name: 'Review and edit', text: 'Check the invoice on screen. Edit any line items, adjust prices, add notes. Nothing leaves without your approval.' },
          { name: 'Send to customer', text: 'Send the invoice as a link via SMS, email, or WhatsApp. Customer receives it instantly on their phone.' },
          { name: 'Customer approves and pays', text: 'Customer opens the link, approves with one tap, and pays. You receive a notification the moment they open it.' },
        ],
      })} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav />

      {/* ── HERO — CATEGORY DEFINITION ───────────────────────── */}
      <section className="bg-black py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-6">
              The category defined
            </p>
            <h1 className="font-display text-[64px] md:text-[96px] lg:text-[120px] uppercase tracking-tighter leading-[0.88] text-white mb-8 max-w-5xl">
              Voice<br />
              <span className="text-accent">Invoicing.</span>
            </h1>
            <p className="font-body text-xl lg:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-4">
              Describe a job out loud. Invoice built automatically. Sent before you leave the driveway.
            </p>
            <p className="font-body text-sm text-slate-500 max-w-2xl leading-relaxed mb-10">
              Live in Australia today. Coming to <Link to="/nz" className="underline decoration-accent/60 hover:text-white">New Zealand</Link>, <Link to="/uk" className="underline decoration-accent/60 hover:text-white">the UK</Link>, <Link to="/us" className="underline decoration-accent/60 hover:text-white">the US</Link> and <Link to="/ca" className="underline decoration-accent/60 hover:text-white">Canada</Link>.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-widest text-brand px-8 py-4 rounded-2xl hover:brightness-95 transition-all"
              style={{ backgroundColor: '#DFFF00' }}
            >
              Try It Free
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* ── DEFINITION — FEATURED SNIPPET TARGET ─────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-6">Definition</p>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] text-brand mb-8">
              What is voice invoicing?
            </h2>
            <p className="font-body text-xl text-slate-600 leading-relaxed mb-6">
              <strong className="text-brand">Voice invoicing</strong> is the process of describing a completed job out loud and having software automatically build a structured, priced invoice from your speech. Instead of opening an app and typing, you speak — the software transcribes and interprets what you said, then generates a tax-compliant invoice ready to send to your customer.
            </p>
            <p className="font-body text-lg text-slate-500 leading-relaxed mb-6">
              Voice invoicing eliminates the single biggest reason tradespeople and contractors fail to invoice on the day: the friction of typing. When you can describe a job the same way you'd explain it to a mate — and have the invoice ready in under a minute — invoicing on the day becomes the default, not the exception.
            </p>
            <p className="font-body text-lg text-slate-500 leading-relaxed">
              The term covers both <em>voice-to-invoice</em> (converting speech directly into an invoice) and <em>voice-to-quote</em> (building a quote or estimate from spoken job descriptions). In practice, the same technology handles both.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── WHY IT MATTERS ───────────────────────────────────── */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-4">Why it matters</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] text-brand mb-6 max-w-3xl">
              The invoicing problem no one solved.
            </h2>
            <p className="font-body text-xl text-slate-500 max-w-2xl leading-relaxed mb-16">
              Tradies and contractors have always known what needs to be invoiced. The problem was never the work — it was the paperwork.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: '$8,684',
                label: 'Average uninvoiced work per tradie per year',
                body: 'Not because the jobs weren\'t done. Because invoicing felt like too much effort after a full day on site.',
              },
              {
                stat: '4×',
                label: 'Faster than typing an invoice manually',
                body: 'Typing a standard invoice takes 8–15 minutes. Describing it takes 30 seconds. Voice invoicing removes the gap entirely.',
              },
              {
                stat: '60s',
                label: 'From job done to invoice sent',
                body: 'Speak. Review. Send. The entire process — including GST calculation and customer delivery — in under a minute.',
              },
            ].map((item) => (
              <AnimateIn key={item.stat} direction="up">
                <div className="bg-white rounded-4xl p-8 border border-slate-100 hover:border-accent transition-all">
                  <p className="font-display text-5xl uppercase tracking-tighter text-brand mb-2">{item.stat}</p>
                  <p className="font-display text-[11px] uppercase tracking-[0.15em] text-slate-400 mb-4">{item.label}</p>
                  <p className="font-body text-sm text-slate-500 leading-relaxed">{item.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-4">Who uses it</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] text-brand mb-6 max-w-3xl">
              Built for anyone who works with their hands.
            </h2>
            <p className="font-body text-xl text-slate-500 max-w-2xl leading-relaxed mb-12">
              Voice invoicing works for any trade or service business where jobs are quoted and invoiced on site — not at a desk.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { trade: 'Plumbers', link: '/for-plumbers' },
              { trade: 'Electricians', link: '/for-electricians' },
              { trade: 'Painters', link: '/for-painters' },
              { trade: 'Cleaners', link: '/for-cleaners' },
              { trade: 'Handymen', link: '/for-handymen' },
              { trade: 'Gardeners', link: '/for-gardeners' },
              { trade: 'Mobile Mechanics', link: '/for-mobile-mechanics' },
              { trade: 'HVAC Technicians', link: '/for-hvac' },
              { trade: 'Pest Control', link: '/for-pest-control' },
              { trade: 'Concreters', link: '/for-concreters' },
              { trade: 'Tilers', link: '/for-tilers' },
              { trade: 'Arborists', link: '/for-arborists' },
            ].map((item) => (
              <Link
                key={item.trade}
                to={item.link}
                className="bg-slate-50 rounded-4xl p-5 border border-slate-100 hover:border-accent hover:bg-white transition-all"
              >
                <span className="font-display text-sm uppercase tracking-tight text-brand">{item.trade}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — 5 STEPS ───────────────────────────── */}
      <section className="bg-black py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-4">How it works</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] text-white mb-4 max-w-3xl">
              The five steps of voice invoicing.
            </h2>
            <p className="font-body text-xl text-slate-400 max-w-xl leading-relaxed mb-16">
              This is the complete workflow — from the moment you finish a job to money in your account.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                icon: Mic,
                step: '01',
                title: 'Talk',
                body: 'Describe the job out loud — what you did, materials used, time taken. 20–30 seconds. Natural speech, no script.',
              },
              {
                icon: FileText,
                step: '02',
                title: 'Quote built',
                body: 'In under 10 seconds, a structured, priced, GST-compliant invoice is built automatically from your speech.',
              },
              {
                icon: Send,
                step: '03',
                title: 'Sent',
                body: 'Review the invoice, make any edits, then send it as a link via SMS, email, or WhatsApp. Instant delivery.',
              },
              {
                icon: ThumbsUp,
                step: '04',
                title: 'Approved',
                body: 'Customer opens the link on their phone. You\'re notified the second they open it. They approve with one tap.',
              },
              {
                icon: DollarSign,
                step: '05',
                title: 'Paid',
                body: 'Payment processed immediately. Money on its way. Invoice automatically issued. Total time: under 60 seconds.',
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <AnimateIn key={s.step} direction="up">
                  <div className="bg-white/5 border border-white/10 rounded-4xl p-6 hover:border-accent transition-all h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                        <Icon size={18} className="text-accent" strokeWidth={2} />
                      </div>
                      <span className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-500">{s.step}</span>
                    </div>
                    <h3 className="font-display text-xl uppercase tracking-tight text-white mb-3">{s.title}</h3>
                    <p className="font-body text-sm text-slate-400 leading-relaxed">{s.body}</p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

          <AnimateIn direction="up">
            <p className="font-body text-center text-slate-500 mt-10 text-sm">
              Total time from job done to invoice sent: <span className="text-white font-semibold">under 60 seconds</span>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── HOW SMASH DOES IT ─────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-4">How SMASH does it</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] text-brand mb-6 max-w-3xl">
              The technology behind the 60-second invoice.
            </h2>
            <p className="font-body text-xl text-slate-500 max-w-2xl leading-relaxed mb-16">
              Voice invoicing at this speed requires four systems working together.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Speech recognition built for job sites',
                body: 'SMASH uses professional-grade voice transcription tuned for trade terminology, Australian accents, and noisy environments. You don\'t need to speak slowly or use special words. Say it the way you\'d explain it to an apprentice.',
              },
              {
                title: 'AI interpretation of job descriptions',
                body: 'The transcription is processed by an AI model trained to identify line items, labour time, materials, rates, and customer details from natural job descriptions. It fills gaps intelligently using your pricing catalog and job history.',
              },
              {
                title: 'Your personal pricing catalog',
                body: 'Build your rates once and SMASH remembers them. Every time you mention a service or material you\'ve quoted before, it fills the price automatically. The more you use it, the faster it gets — under 30 seconds once your catalog is established.',
              },
              {
                title: 'GST and ATO compliance built in',
                body: 'Every invoice generated by SMASH is automatically GST-compliant — ABN included, tax calculated correctly, line items itemised. Meets ATO tax invoice requirements for Australian businesses without any extra steps.',
              },
            ].map((item) => (
              <AnimateIn key={item.title} direction="up">
                <div className="bg-slate-50 rounded-4xl p-8 border border-slate-100 hover:border-accent transition-all">
                  <h3 className="font-display text-xl uppercase tracking-tight text-brand mb-4">{item.title}</h3>
                  <p className="font-body text-base text-slate-500 leading-relaxed">{item.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VOICE EXAMPLES ───────────────────────────────────── */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-white/30 mb-4">Real examples</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] text-white mb-4 max-w-2xl">
              This is all you say.
            </h2>
            <p className="font-body text-xl text-white/50 max-w-xl leading-relaxed mb-12">
              No special format. No specific words. Just the job, the way you'd explain it.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                trade: 'Cleaner',
                link: '/for-cleaners',
                quote: '"3-bed standard clean, Mrs Johnson, Indooroopilly, took about 3 hours, the usual rate."',
                result: 'Quote built: 3hr standard clean, correct rate, GST included, customer link ready.',
              },
              {
                trade: 'Handyman',
                link: '/for-handymen',
                quote: '"Fixed the fence gate out the back — two new hinges and a latch, about 2 hours labour."',
                result: 'Quote built: labour + materials priced from catalog, sent in 45 seconds.',
              },
              {
                trade: 'Painter',
                link: '/for-painters',
                quote: '"Bedroom and hallway, 2 coats, used about 15 litres of paint, took 2 days."',
                result: 'Quote built: paint materials priced, labour rate applied, PDF ready.',
              },
            ].map((ex) => (
              <AnimateIn key={ex.trade} direction="up">
                <div className="bg-white/5 rounded-4xl border border-white/10 p-8 hover:border-accent transition-all">
                  <Link to={ex.link} className="inline-block font-display text-[10px] uppercase tracking-widest bg-accent text-brand px-3 py-1.5 rounded-full mb-5 hover:brightness-95 transition-all">
                    {ex.trade}
                  </Link>
                  <p className="font-body text-lg text-white/80 italic leading-relaxed mb-6">{ex.quote}</p>
                  <div className="border-t border-white/10 pt-5 flex items-start gap-3">
                    <Check size={16} className="text-accent shrink-0 mt-0.5" strokeWidth={3} />
                    <p className="font-body text-sm text-accent leading-relaxed">{ex.result}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ───────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] text-brand mb-4 text-center">
              Voice invoicing vs. traditional invoicing
            </h2>
            <p className="font-body text-xl text-slate-500 text-center mb-12 leading-relaxed">
              The only real difference is whether you type or talk.
            </p>
          </AnimateIn>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b-2 border-brand">
                  <th className="text-left py-4 pr-6 font-display text-xs uppercase tracking-widest text-brand">Method</th>
                  <th className="text-center py-4 px-4 font-display text-xs uppercase tracking-widest text-brand">Time</th>
                  <th className="text-center py-4 px-4 font-display text-xs uppercase tracking-widest text-brand">Typing</th>
                  <th className="text-center py-4 px-4 font-display text-xs uppercase tracking-widest text-brand">On-site</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: 'Word / Excel template', time: '15–25 min', typing: true, onsite: false },
                  { method: 'Traditional invoice app', time: '5–10 min', typing: true, onsite: false },
                  { method: 'SMASH voice invoicing', time: 'Under 60s', typing: false, onsite: true, highlight: true },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 ${row.highlight ? 'bg-slate-50' : ''}`}>
                    <td className={`py-5 pr-6 font-display text-sm uppercase tracking-tight ${row.highlight ? 'text-brand' : 'text-slate-400'}`}>
                      {row.method}
                    </td>
                    <td className={`text-center py-5 px-4 font-display text-sm ${row.highlight ? 'text-accent' : 'text-slate-400'}`}>
                      {row.time}
                    </td>
                    <td className="text-center py-5 px-4">
                      {row.typing
                        ? <span className="font-body text-sm text-slate-300">Yes</span>
                        : <Check size={16} className="mx-auto text-accent" strokeWidth={3} />}
                    </td>
                    <td className="text-center py-5 px-4">
                      {row.onsite
                        ? <Check size={16} className="mx-auto text-accent" strokeWidth={3} />
                        : <span className="font-body text-sm text-slate-300">No</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-4">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] text-brand mb-10">
              Common questions.
            </h2>
          </AnimateIn>
          <div className="bg-white rounded-4xl border border-slate-100 px-8 py-2">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED TOOLS ─────────────────────────────────────── */}
      <section className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RelatedTools keywords={['invoice', 'voice', 'quote']} title="Free voice invoicing tools" />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-black py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <AnimateIn direction="up">
            <div>
              <p className="font-display text-[11px] uppercase tracking-[0.2em] text-white/30 mb-4">Free to start</p>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.88] text-white mb-4 max-w-xl">
                Stop typing.<br />
                <span className="text-accent">Start talking.</span>
              </h2>
              <p className="font-body text-xl text-slate-400 leading-relaxed max-w-lg">
                SMASH is the voice invoicing app built for Australian tradies. Free to try. No card needed.
              </p>
              <div className="flex items-center gap-2 mt-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-accent fill-accent" />)}
                <span className="font-body text-sm text-white/40 ml-1">4.9 on the App Store</span>
              </div>
            </div>
          </AnimateIn>
          <div className="flex flex-col gap-4 shrink-0">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 font-display text-sm uppercase tracking-widest text-brand px-10 py-5 rounded-2xl hover:brightness-95 transition-all"
              style={{ backgroundColor: '#DFFF00' }}
            >
              Download Free
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <p className="font-body text-xs text-white/30 text-center">No account needed · 2 free quotes/month</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
