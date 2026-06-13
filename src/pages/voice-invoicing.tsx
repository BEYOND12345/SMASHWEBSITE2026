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

const YOUTUBE_DEMO_ID = 'uNL733tYTf0';

const faqs = [
  {
    q: 'How fast can I send an invoice after a job?',
    a: 'Under 60 seconds for a typical job: talk for 20–30 seconds, verify line items SMASH matched to your catalog, then send. Once your Price Hub is set up, many invoices are out in under 30 seconds.',
  },
  {
    q: 'What is voice to invoice?',
    a: 'Voice to invoice means describing the completed job out loud and having software build a structured, priced invoice from your speech. SMASH matches what you said to your own rates and materials — unmatched items are flagged for you, not guessed.',
  },
  {
    q: 'Can I invoice without typing?',
    a: 'Yes. On iPhone you speak the job. In Gmail you can scan the open email thread, upload a PDF, or use voice in the sidebar. You always review before anything is sent.',
  },
  {
    q: 'Does SMASH use my own prices?',
    a: 'Yes. Invoices are built from your Price Hub — your labour rates, fees, and catalog. SMASH does not invent prices. If it cannot match an item confidently, it flags it for you to price manually.',
  },
  {
    q: 'Does this work in Australia?',
    a: 'Yes. GST, ABN fields, and ATO-compliant tax invoice layout are built in, with a 2,250+ item materials catalog. SMASH also runs in NZ, the UK, the US, and Canada with local tax and currency.',
  },
  {
    q: 'iPhone only?',
    a: 'The voice-first field app is iOS (iPhone). For desk work, the Chrome extension runs inside Gmail on any laptop — email scan, PDF upload, or voice in the sidebar. Android app is not available yet.',
  },
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
        title="Send an Invoice in 30 Seconds — Talk, Verify, Send | SMASH"
        description="Finished the job? Describe it out loud. SMASH builds a priced invoice from your catalog in ~30 seconds — nothing guessed. iPhone app + Gmail extension. Start free."
        keywords="voice to invoice, send invoice after job, invoice without typing, fastest way to invoice, invoice from phone, on the job invoice, voice invoicing"
        ogTitle="Send an Invoice in 30 Seconds — Talk, Verify, Send | SMASH"
        ogDescription="Talk for 30 seconds. SMASH prices the job from your catalog. Verify. Send — before you leave the site."
        ogUrl="https://smashinvoices.com/voice-invoicing"
        canonical="https://smashinvoices.com/voice-invoicing"
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com' },
        { name: 'Send invoice fast', url: 'https://smashinvoices.com/voice-invoicing' },
      ])} />
      <StructuredData data={createFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))} />
      <StructuredData data={createHowToSchema({
        name: 'How to Send an Invoice Before You Leave the Job',
        description: 'The complete workflow from job done to invoice sent using voice invoicing software.',
        steps: [
          { name: 'Describe the job out loud', text: 'Speak naturally for 20–30 seconds — what you did, materials used, time taken. No script or format required.' },
          { name: 'Software builds the invoice', text: 'In under 10 seconds, a structured, priced, GST-compliant invoice is generated automatically from your speech.' },
          { name: 'Review and edit', text: 'Check the invoice on screen. Edit line items, adjust prices, add notes, and confirm any saved NDIS participant number. Nothing leaves without your approval.' },
          { name: 'Send to customer', text: 'Send the invoice as a link via SMS, email, or WhatsApp. Customer receives it instantly on their phone.' },
          { name: 'Customer approves and pays', text: 'Customer opens the link, approves with one tap, and pays. You receive a notification the moment they open it.' },
        ],
      })} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav />

      {/* ── HERO — PROBLEM → SOLUTION ────────────────────────── */}
      <section className="bg-black py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-6">
              Finished the job — customer wants a number
            </p>
            <h1 className="font-display text-[48px] md:text-[72px] lg:text-[96px] uppercase tracking-tighter leading-[0.9] text-white mb-8 max-w-5xl">
              Send the invoice<br />
              <span className="text-accent">before you leave.</span>
            </h1>
            <p className="font-body text-xl lg:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-4">
              Talk for 30 seconds. SMASH builds a priced invoice from your catalog — nothing guessed. Verify. Send.
            </p>
            <p className="font-body text-sm text-slate-500 max-w-2xl leading-relaxed mb-10">
              Live worldwide on iOS &amp; Chrome — <Link to="/" className="underline decoration-accent/60 hover:text-white">Australia</Link>, <Link to="/nz" className="underline decoration-accent/60 hover:text-white">New Zealand</Link>, <Link to="/uk" className="underline decoration-accent/60 hover:text-white">the UK</Link>, <Link to="/us" className="underline decoration-accent/60 hover:text-white">the US</Link> and <Link to="/ca" className="underline decoration-accent/60 hover:text-white">Canada</Link>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-widest text-brand px-8 py-4 rounded-2xl hover:brightness-95 transition-all"
                style={{ backgroundColor: '#DFFF00' }}
              >
                Get iPhone app — Start free
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <Link
                to="/chrome-extension"
                className="inline-flex items-center gap-3 font-display text-sm uppercase tracking-widest text-white border border-white/20 px-8 py-4 rounded-2xl hover:border-accent transition-all"
              >
                Add to Gmail — Start free
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── DEMO VIDEO ───────────────────────────────────────── */}
      <section className="bg-black pb-16 md:pb-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-4 text-center">
              60-second demo
            </p>
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_DEMO_ID}?rel=0&modestbranding=1`}
                title="Fastest way to send an invoice — SMASH demo"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="font-body text-sm text-slate-500 text-center mt-4">
              <a href="https://www.youtube.com/@smashinvoices" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:no-underline">
                More demos on YouTube
              </a>
            </p>
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
              Most people fail to invoice on the day because typing waits until tonight — and tonight never comes. When you can describe the job the way you would to a colleague and have a priced draft in under a minute, sending before you leave becomes the default.
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
              You know what the job was. The problem was never the work — it was stopping to type it up when the customer has already moved on.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: '$8,684',
                label: 'Average uninvoiced work per operator per year',
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

      {/* ── WHEN YOU NEED IT ─────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-4">When you need it</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] text-brand mb-6 max-w-3xl">
              Same problem. Any job.
            </h2>
            <p className="font-body text-xl text-slate-500 max-w-2xl leading-relaxed mb-12">
              If you finish work on site and the customer wants a number before you drive away — this is for you.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { scene: 'Customer waiting at the van', body: 'They want a price now. You talk for 30 seconds instead of promising "I\'ll email tonight".' },
              { scene: 'Between appointments', body: 'Stack three jobs — invoice each one before the next, not at midnight.' },
              { scene: 'Hands full, no laptop', body: 'Phone in pocket. Voice in. Priced draft out. No keyboard.' },
              { scene: 'Inbox full of RFQs', body: 'On desktop, the Gmail extension reads the open thread and matches your catalog — same verify-and-send flow.' },
            ].map((item) => (
              <div
                key={item.scene}
                className="bg-slate-50 rounded-4xl p-6 border border-slate-100 hover:border-accent transition-all"
              >
                <p className="font-display text-sm uppercase tracking-tight text-brand mb-2">{item.scene}</p>
                <p className="font-body text-sm text-slate-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
            <Link to="/blog/the-60-second-invoice-voice-to-invoice" className="text-brand underline hover:no-underline">
              Voice to invoice in 60 seconds →
            </Link>
            <Link to="/blog/how-long-to-send-invoice-after-job-australia" className="text-brand underline hover:no-underline">
              How long to wait after a job →
            </Link>
            <Link to="/gmail-invoice" className="text-brand underline hover:no-underline">
              Gmail invoicing →
            </Link>
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
                title: 'Structured line items from natural speech',
                body: 'SMASH identifies labour, materials, quantities, and customer details from how you describe the job — then matches them to your Price Hub. Unmatched items are flagged; nothing is silently invented.',
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
                scene: 'After a site visit',
                quote: '"3-hour standard service, Johnson residence, usual rate plus materials as discussed."',
                result: 'Labour + materials from your catalog, GST included, send link ready.',
              },
              {
                scene: 'Quick repair',
                quote: '"Replaced the gate hardware — two hinges and a latch, about two hours on site."',
                result: 'Line items priced from catalog, verified and sent in under a minute.',
              },
              {
                scene: 'Multi-day job',
                quote: '"Two rooms, two coats, about fifteen litres of product, two days on site."',
                result: 'Materials and labour matched to your rates — draft ready to send.',
              },
            ].map((ex) => (
              <AnimateIn key={ex.scene} direction="up">
                <div className="bg-white/5 rounded-4xl border border-white/10 p-8 hover:border-accent transition-all">
                  <span className="inline-block font-display text-[10px] uppercase tracking-widest bg-accent text-brand px-3 py-1.5 rounded-full mb-5">
                    {ex.scene}
                  </span>
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
                The fastest way to send an invoice after a job — iPhone or Gmail. Your catalog. Your prices. Start free.
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
              Download the iOS app
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <p className="font-body text-xs text-white/30 text-center">Start free · No card needed</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
