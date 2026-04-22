import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SEO } from '../components/seo';
import { StructuredData, createFAQSchema, createBreadcrumbSchema } from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { hreflangAlternates } from '../data/country-data';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { VoiceConversionCTA } from '../components/voice-conversion-cta';
import { ChevronDown, Package, ArrowRight } from 'lucide-react';

const url = 'https://smashinvoices.com/materials-pricing';

const faqs = [
  {
    q: 'How do I price materials in a quote?',
    a: "Work out the landed cost (purchase price + delivery + any waste), add a markup of 10–30% to cover handling and the risk of unused stock, then show materials as a separate line on the quote. Never bury materials inside a single lump-sum — customers lose trust and you lose the ability to defend the number. SMASH does this automatically by pricing every line item from your personal catalog when you describe the job out loud.",
  },
  {
    q: 'What is a fair markup on materials for tradies?',
    a: "10–30% is standard across the trades. Anything lower and you're giving away the cost of sourcing, carrying, and occasionally eating unused stock. Anything higher than 30% for retail-available items risks trust issues if the customer can price-check the item on their phone. Specialty, special-order, or imported items can justify higher markup if you handle the sourcing risk.",
  },
  {
    q: 'Should I charge the same for materials I buy in bulk?',
    a: "Your quote price should reflect the retail value the customer would pay, not the bulk cost you paid. You earn a legitimate margin for buying in volume, storing stock, and carrying the cash flow risk. That margin is part of the business model for trades — not a hidden markup.",
  },
  {
    q: 'How do I stop losing money on materials?',
    a: "The three common leaks: (1) guessing prices instead of looking them up, (2) forgetting small items (sealant, fixings, consumables), (3) not updating prices when suppliers change them. SMASH solves all three by maintaining a personal materials catalog that voice-invoicing matches against. When you speak the job, it lists every item at your current prices — no guessing, no forgotten consumables.",
  },
  {
    q: 'Does SMASH work for trades with a big materials catalogue?',
    a: "Yes — it's designed for exactly this. Plumbers, electricians, HVAC, tilers and concreters typically have 200–2,000+ items they use regularly. SMASH stores your catalog and matches voice descriptions against it in real time, so a 60-second voice note can produce a quote with 15 correctly-priced line items without you ever opening a spreadsheet.",
  },
  {
    q: 'Can I use SMASH materials pricing outside Australia?',
    a: "Yes. The catalog is your pricing, in your currency. SMASH ships in Australia today and is launching in New Zealand, the UK, the US and Canada — each with local tax rules applied automatically on top of your catalog prices.",
  },
];

const categories = [
  { name: 'Labour rate',      why: 'Your hourly time. Already covered by your hourly rate — materials line should not double-charge it.' },
  { name: 'Landed cost',      why: 'Purchase price from the supplier, plus delivery, plus any typical wastage. This is the real cost to you.' },
  { name: 'Handling markup',  why: '10–30%. Covers time sourcing, picking up, storing, and the occasional unused stock written off.' },
  { name: 'Special-order risk', why: 'If the item is non-standard or imported, add another 10–15% to cover the risk of it sitting on your van.' },
  { name: 'Tax',              why: 'Applied on top of the priced line — GST (AU/NZ), VAT (UK), HST/GST/PST (CA), state sales tax (US).' },
];

export function MaterialsPricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="How to Price Materials in a Quote | Tradie Materials Pricing Guide | SMASH"
        description="Materials pricing for tradies and contractors — how to work out landed cost, fair markup, and the personal catalog approach that eliminates guessing. Works in AU, NZ, UK, US and Canada."
        keywords="how to price materials, tradie materials pricing, materials markup tradie, contractor materials quote, materials in an invoice, pricing catalog tradie, materials pricing UK, materials markup USA, materials pricing Canada, materials pricing NZ"
        ogTitle="Materials Pricing — The Tradie's Guide | SMASH"
        ogDescription="How to price materials correctly in every quote. Landed cost, fair markup, personal catalog."
        ogUrl={url}
        canonical={url}
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home',               url: 'https://smashinvoices.com/' },
        { name: 'Materials pricing',  url },
      ])} />
      <StructuredData data={createFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-accent mb-6">
              Materials pricing
            </p>
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] text-white mb-8">
              Stop guessing<br />on <span className="text-accent">materials.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-4">
              Most sole traders leave 15–40% of materials revenue on the table. Either they under-price, forget the small items, or don't update prices when suppliers change them. Here's the fix.
            </p>
            <p className="font-body text-sm text-white/40 max-w-2xl leading-relaxed mb-10">
              Live worldwide on iOS &amp; Chrome ·{' '}
              <Link to="/" className="underline decoration-accent/60 hover:text-white">AU</Link>{' · '}
              <Link to="/nz" className="underline decoration-accent/60 hover:text-white">NZ</Link>{' · '}
              <Link to="/uk" className="underline decoration-accent/60 hover:text-white">UK</Link>{' · '}
              <Link to="/us" className="underline decoration-accent/60 hover:text-white">US</Link>{' · '}
              <Link to="/ca" className="underline decoration-accent/60 hover:text-white">Canada</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/quote-generator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-display text-sm uppercase tracking-widest hover:brightness-95 transition-all"
              >
                <Package size={16} strokeWidth={2.5} />
                Quote a job
              </Link>
              <Link
                to="/voice-invoicing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white font-display text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                See voice invoicing
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── ANSWER BLOCK ────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="border-l-4 border-accent pl-8 py-2">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-4">
              Short answer
            </p>
            <p className="font-body text-xl md:text-2xl font-bold text-brand leading-relaxed">
              Price every material at landed cost, add 10–30% for handling, show it as its own line, and never price from memory. A personal catalog that matches voice to stored prices eliminates the 15–40% most sole traders lose to guessing.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE FIVE THINGS A MATERIAL PRICE INCLUDES ─── */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
              Anatomy of a materials line
            </p>
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-brand leading-[0.95] mb-10">
              What a materials price should actually include
            </h2>

            <div className="space-y-4">
              {categories.map((c, i) => (
                <div key={c.name} className="bg-white rounded-3xl border-2 border-border p-6 md:p-8 flex gap-6">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center font-display text-sm text-brand">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-display text-base md:text-lg uppercase tracking-tight text-brand mb-2">{c.name}</p>
                    <p className="font-body text-sm md:text-base text-brand/65 leading-relaxed">{c.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── PERSONAL CATALOG PITCH ──────────────────────── */}
      <section className="bg-brand py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
              The SMASH edge
            </p>
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-white leading-[0.95] mb-6">
              Your catalog. Your prices.<br />Your voice, your call.
            </h2>
            <p className="font-body text-lg text-white/70 max-w-2xl leading-relaxed mb-10">
              Every SMASH user builds a personal materials catalog — 50 items or 5,000, it doesn't matter. When you describe a job out loud, SMASH matches each line against your catalog and prices it at your number. No lookups, no guesses, no forgotten consumables.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { k: '0',      v: 'Times you open a spreadsheet' },
                { k: '60s',    v: 'From voice to priced quote' },
                { k: '100%',   v: 'Of line items priced from your catalog' },
                { k: '15–40%', v: 'Typical revenue recovered vs guessing' },
              ].map(s => (
                <div key={s.k} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="font-display text-4xl md:text-5xl text-accent leading-none mb-2">{s.k}</p>
                  <p className="font-body text-sm text-white/60 leading-relaxed">{s.v}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-brand leading-[0.95] mb-10 text-center">
            Materials pricing questions
          </h2>
          <div className="bg-white rounded-3xl border-2 border-border px-6 sm:px-10 py-2">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-border last:border-0">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-sm md:text-base uppercase tracking-tight text-brand">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-brand/40 transition-transform mt-0.5 ${openFaq === i ? 'rotate-180' : ''}`}
                    strokeWidth={2.5}
                  />
                </button>
                {openFaq === i && (
                  <p className="font-body text-sm md:text-base text-brand/65 leading-relaxed pb-6">{f.a}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/profit-calculator"
              className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest text-brand hover:text-accent transition-colors"
            >
              Run a profit / loss check
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      <VoiceConversionCTA
        outputLabel="every material"
        headline="Stop pricing materials from memory."
        sub="SMASH turns every voice description into a priced line-by-line quote, pulling from your own catalog. No spreadsheets, no forgotten fittings, no undercharging."
      />

      <Footer />
    </>
  );
}
