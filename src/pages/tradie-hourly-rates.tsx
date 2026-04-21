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
import { ChevronDown, Calculator, ArrowRight } from 'lucide-react';

const url = 'https://smashinvoices.com/tradie-hourly-rates';

interface RateRow {
  trade: string;
  slug: string;
  au: string;
  nz: string;
  uk: string;
  us: string;
  ca: string;
}

// Indicative 2026 rates drawn from tradie industry surveys and small-business
// pricing guides. Ranges are typical, not definitive — every operator should
// factor in overheads, experience, region and equipment.
const rates: RateRow[] = [
  { trade: 'Cleaner',           slug: 'cleaners',         au: '$45–$75',   nz: 'NZ$40–$70',  uk: '£18–£30',  us: '$35–$60',   ca: 'C$30–$55' },
  { trade: 'Handyman',          slug: 'handymen',         au: '$65–$110',  nz: 'NZ$60–$100', uk: '£25–£45',  us: '$50–$90',   ca: 'C$45–$80' },
  { trade: 'Plumber',           slug: 'plumbers',         au: '$90–$180',  nz: 'NZ$85–$170', uk: '£40–£90',  us: '$75–$175',  ca: 'C$70–$150' },
  { trade: 'Electrician',       slug: 'electricians',     au: '$90–$180',  nz: 'NZ$85–$170', uk: '£40–£85',  us: '$75–$170',  ca: 'C$65–$140' },
  { trade: 'Painter',           slug: 'painters',         au: '$55–$95',   nz: 'NZ$55–$90',  uk: '£22–£40',  us: '$40–$75',   ca: 'C$40–$70' },
  { trade: 'Gardener',          slug: 'gardeners',        au: '$55–$90',   nz: 'NZ$50–$85',  uk: '£20–£40',  us: '$35–$65',   ca: 'C$35–$60' },
  { trade: 'Mobile mechanic',   slug: 'mobile-mechanics', au: '$95–$160',  nz: 'NZ$90–$150', uk: '£40–£80',  us: '$80–$150',  ca: 'C$75–$130' },
  { trade: 'HVAC / air con',    slug: 'hvac',             au: '$100–$170', nz: 'NZ$95–$165', uk: '£45–£85',  us: '$85–$160',  ca: 'C$75–$145' },
  { trade: 'Pest control',      slug: 'pest-control',     au: '$80–$130',  nz: 'NZ$75–$125', uk: '£30–£65',  us: '$65–$120',  ca: 'C$60–$110' },
  { trade: 'Tiler',             slug: 'tilers',           au: '$65–$110',  nz: 'NZ$60–$105', uk: '£25–£50',  us: '$55–$100',  ca: 'C$50–$95' },
  { trade: 'Concreter',         slug: 'concreters',       au: '$70–$120',  nz: 'NZ$65–$115', uk: '£25–£50',  us: '$55–$110',  ca: 'C$55–$105' },
  { trade: 'Arborist',          slug: 'arborists',        au: '$90–$160',  nz: 'NZ$85–$155', uk: '£35–£75',  us: '$70–$140',  ca: 'C$70–$130' },
  { trade: 'Locksmith',         slug: 'locksmiths',       au: '$90–$150',  nz: 'NZ$85–$145', uk: '£35–£75',  us: '$70–$140',  ca: 'C$65–$125' },
  { trade: 'Car detailer',      slug: 'car-detailers',    au: '$55–$100',  nz: 'NZ$50–$90',  uk: '£20–£45',  us: '$40–$80',   ca: 'C$40–$75' },
  { trade: 'Dog groomer',       slug: 'dog-groomers',     au: '$55–$95',   nz: 'NZ$50–$90',  uk: '£20–£40',  us: '$40–$75',   ca: 'C$40–$70' },
];

const faqs = [
  {
    q: 'How much should a tradie charge per hour?',
    a: "Most tradies in 2026 charge between AU$55 and AU$180 per hour depending on the trade, with the highest rates going to licensed plumbers, electricians and HVAC technicians. Rates vary roughly 20–40% by country and region. The right number for any individual operator is the one that covers direct costs (tools, vehicle, materials markup), overheads (insurance, admin, phone, software), a target wage, profit margin, and non-billable hours. Use our hourly rate calculator to work it out for your business.",
  },
  {
    q: 'Why does charging the wrong rate cost so much?',
    a: "Most sole traders undercharge by 15–40% because they price from memory or from what a mate charges instead of their actual costs. A plumber who bills 30 hours a week at AU$120 instead of AU$95 adds around AU$40,000 to annual revenue for the same work. Voice invoicing closes this gap by pricing every job off a personal catalog — so you never guess the same number twice.",
  },
  {
    q: 'Should I charge a call-out fee on top of hourly?',
    a: "Yes. A call-out fee covers the time and vehicle cost of getting to the job before you start work. Typical call-out fees are AU$60–AU$150 in Australia, £40–£90 in the UK, US$60–US$150 in the United States, and C$60–C$130 in Canada. SMASH can add your default call-out automatically to every voice-generated invoice so you never forget.",
  },
  {
    q: 'How do rates differ between AU, NZ, UK, US and Canada?',
    a: "Australian and New Zealand rates are very close because both markets have similar labour costs and trade licensing. The UK runs roughly 50–60% lower in AUD equivalent. The US is generally higher in the north-east and California, lower in the south. Canadian rates sit between the US and NZ. Once SMASH ships in each market the app will apply local currency, tax rules and catalog defaults automatically.",
  },
  {
    q: 'Do I include GST / VAT / sales tax in my hourly rate?',
    a: "Most quotes and invoices show the labour rate exclusive of tax, with the tax calculated on the line total. SMASH always shows tax as a separate line so customers can see exactly what they're paying. For Australia that's GST (10%); for NZ it's GST (15%); the UK uses VAT (20%); Canada uses GST / HST / PST depending on province; US uses state-level sales tax.",
  },
  {
    q: 'What is a reasonable profit margin on labour?',
    a: "After paying yourself an hourly wage and covering overheads, a healthy labour margin is 15–30% on top. Below 10% and a bad debt or one slow week wipes you out; above 40% and you risk pricing yourself out against competitors unless you have a strong brand reason to justify it.",
  },
];

export function TradieHourlyRates() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Tradie Hourly Rates 2026 | How Much to Charge Per Hour | SMASH"
        description="Tradie hourly rates for 2026 across Australia, New Zealand, the UK, the US and Canada. Plumbers, electricians, cleaners, painters, handymen and more — with a free hourly rate calculator built for sole traders."
        keywords="tradie hourly rates, how much should I charge per hour, plumber hourly rate, electrician hourly rate, cleaner hourly rate, handyman hourly rate, tradie pricing guide 2026, contractor hourly rate UK, contractor hourly rate USA, tradie hourly rate NZ"
        ogTitle="Tradie Hourly Rates 2026 — Global Pricing Guide | SMASH"
        ogDescription="What tradies should charge per hour in 2026, country by country. Free calculator included."
        ogUrl={url}
        canonical={url}
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home',               url: 'https://smashinvoices.com/' },
        { name: 'Tradie hourly rates', url },
      ])} />
      <StructuredData data={createFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-accent mb-6">
              Pricing guide · 2026
            </p>
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] text-white mb-8">
              How much should<br />a tradie <span className="text-accent">charge</span>?
            </h1>
            <p className="font-body text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-4">
              Current hourly rates across Australia, New Zealand, the UK, the US and Canada — plus the one calculation almost every sole trader gets wrong.
            </p>
            <p className="font-body text-sm text-white/40 max-w-2xl leading-relaxed mb-10">
              Rates reviewed quarterly. SMASH runs AU today; NZ, UK, US and Canada are next —{' '}
              <Link to="/nz" className="underline decoration-accent/60 hover:text-white">NZ</Link>{' · '}
              <Link to="/uk" className="underline decoration-accent/60 hover:text-white">UK</Link>{' · '}
              <Link to="/us" className="underline decoration-accent/60 hover:text-white">US</Link>{' · '}
              <Link to="/ca" className="underline decoration-accent/60 hover:text-white">Canada</Link>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/hourly-rate-calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-display text-sm uppercase tracking-widest hover:brightness-95 transition-all"
              >
                <Calculator size={16} strokeWidth={2.5} />
                Calculate your rate
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

      {/* ── ANSWER BLOCK (AI citation bait) ───────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="border-l-4 border-accent pl-8 py-2">
            <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-4">
              Short answer
            </p>
            <p className="font-body text-xl md:text-2xl font-bold text-brand leading-relaxed">
              Most tradies in 2026 charge between AU$55 and AU$180 per hour, with specialists (plumbers, electricians, HVAC) at the top of the band. The right number for any single operator is the one that covers direct costs, overheads, a real wage and a 15–30% profit margin — not what a mate charges.
            </p>
          </div>
        </div>
      </section>

      {/* ── RATES TABLE ──────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
              Rates by trade · 2026
            </p>
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-brand leading-[0.95] mb-4">
              Typical hourly rates
            </h2>
            <p className="font-body text-base md:text-lg text-slate-500 max-w-2xl leading-relaxed mb-10">
              Indicative labour rates, ex-tax, drawn from industry surveys and operator interviews. Use as a starting point, not a price list — your own costs and region will shift these.
            </p>

            <div className="bg-white rounded-3xl border-2 border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-4 px-4 md:px-6 font-display text-xs uppercase tracking-widest text-brand/60">Trade</th>
                      <th className="py-4 px-4 md:px-6 font-display text-xs uppercase tracking-widest text-brand/60">AU</th>
                      <th className="py-4 px-4 md:px-6 font-display text-xs uppercase tracking-widest text-brand/60">NZ</th>
                      <th className="py-4 px-4 md:px-6 font-display text-xs uppercase tracking-widest text-brand/60">UK</th>
                      <th className="py-4 px-4 md:px-6 font-display text-xs uppercase tracking-widest text-brand/60">US</th>
                      <th className="py-4 px-4 md:px-6 font-display text-xs uppercase tracking-widest text-brand/60">CA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rates.map(r => (
                      <tr key={r.slug} className="border-b border-border last:border-b-0 hover:bg-surface/60 transition-colors">
                        <td className="py-4 px-4 md:px-6">
                          <Link to={`/for-${r.slug}`} className="font-display text-sm uppercase tracking-tight text-brand hover:text-accent transition-colors">
                            {r.trade}
                          </Link>
                        </td>
                        <td className="py-4 px-4 md:px-6 font-body text-sm text-brand/80">{r.au}</td>
                        <td className="py-4 px-4 md:px-6 font-body text-sm text-brand/80">{r.nz}</td>
                        <td className="py-4 px-4 md:px-6 font-body text-sm text-brand/80">{r.uk}</td>
                        <td className="py-4 px-4 md:px-6 font-body text-sm text-brand/80">{r.us}</td>
                        <td className="py-4 px-4 md:px-6 font-body text-sm text-brand/80">{r.ca}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-4 font-body text-xs text-slate-400">
              Rates ex-tax (GST / VAT / HST / sales tax calculated on top). Updated April 2026.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── COST BUILD (HOW TO PRICE CORRECTLY) ─────────── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-accent mb-4">
              Build your rate
            </p>
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-brand leading-[0.95] mb-10">
              The five inputs every rate needs
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                { h: '1 · Target wage', b: 'What you want to pay yourself per year, after tax. This is the number you actually take home — not revenue, not profit.' },
                { h: '2 · Overheads', b: 'Insurance, phone, software, accounting, advertising, vehicle running costs, tools, licences. Annual total, then divided across billable hours.' },
                { h: '3 · Billable hours', b: 'Realistically 1,200–1,500 a year for most sole traders. Not 2,080. Admin, quoting, driving, sick days and quiet weeks all eat into it.' },
                { h: '4 · Materials markup', b: 'A 10–30% markup on materials covers the time spent buying them, storing them, and the risk of unused stock. Voice-catalog pricing makes this automatic.' },
                { h: '5 · Profit margin', b: 'On top of your wage, a 15–30% margin is the number that lets you reinvest, cover bad debts, and scale. Under 10% is surviving, not running a business.' },
              ].map(item => (
                <div key={item.h} className="bg-surface border-2 border-border rounded-3xl p-7">
                  <p className="font-display text-base uppercase tracking-tight text-brand mb-3">{item.h}</p>
                  <p className="font-body text-sm text-brand/60 leading-relaxed">{item.b}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/hourly-rate-calculator"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-white font-display text-sm uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Run the numbers
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter text-brand leading-[0.95] mb-10 text-center">
            Hourly rate questions
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
        </div>
      </section>

      <VoiceConversionCTA
        outputLabel="this rate"
        headline="Set your rate once. Quote it from voice forever."
        sub="SMASH stores your labour rate, call-out fee, and materials markup — so every voice-generated quote and invoice uses your numbers without you doing the maths twice."
      />

      <Footer />
    </>
  );
}
