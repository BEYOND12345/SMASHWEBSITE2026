import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { StructuredData, createFAQSchema, createBreadcrumbSchema } from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { hreflangAlternates } from '../data/country-data';
import { RelatedTools } from '../components/related-tools';
import { Footer } from '../components/footer';
import { PhoneMockup, AppScreen } from '../components/phone-mockup';
import { ScaledPhone } from '../components/phone-showcase';
import { Check, ChevronDown, Star, Quote } from 'lucide-react';
import { useState } from 'react';
import { AnimateIn } from '../components/animate-in';
import { Nav } from '../components/nav';
import { DualProductCtas } from '../components/marketing/DualProductCtas';
import { MarketingPhotoHero } from '../components/marketing/MarketingPhotoHero';
import { iosLanding } from '../components/ios-product-landing/ios-landing-tokens';
import { APP_STORE_URL } from '../data/download-urls';

const faqs = [
  {
    q: 'What is an AI estimate?',
    a: 'An AI estimate is a priced job estimate (or quote) built from a natural-language description — spoken or typed — instead of typing every line item. SMASH matches what you say to your saved rates and materials, then you verify and send a professional PDF in under 60 seconds.',
  },
  {
    q: 'Is an AI estimate the same as a quote?',
    a: 'Same job, different words. In the US and Canada people usually say estimate; in Australia, New Zealand and the UK they usually say quote. SMASH builds one priced document either way, then converts it to an invoice when the customer says yes.',
  },
  {
    q: 'How is this different from ChatGPT for estimates?',
    a: 'ChatGPT can draft wording if you paste every rate each time. It does not hold your catalog, send a branded PDF with approval, or turn the estimate into a tax-ready invoice. SMASH is talk → verify → send from your prices.',
  },
  {
    q: 'Can I send the estimate by voice on site?',
    a: 'Yes on iPhone. Describe the job out loud for about 20–30 seconds, verify catalog-priced lines, and send before you leave. That is voice to estimate — the same engine as voice to invoice.',
  },
  {
    q: 'What happens when the customer approves?',
    a: 'One tap turns the estimate into an invoice — labour, materials, fees and tax carry over. No retyping. That is how you get paid without a second admin session.',
  },
  {
    q: 'Does it work with QuickBooks and Xero?',
    a: 'Yes on paid plans. Push the finished estimate or invoice to QuickBooks Online or Xero. There is also a Gmail → QuickBooks estimate path for desk workflows.',
  },
  {
    q: 'Where is SMASH available?',
    a: 'Live in Australia, New Zealand, the United Kingdom, the United States and Canada — on iOS and as a Chrome/Edge extension for Gmail. Tax fields localise to your region.',
  },
];

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button onClick={onClick} className="w-full flex items-start justify-between gap-4 py-6 text-left">
        <span className="text-lg font-bold text-brand">{q}</span>
        <ChevronDown size={24} className={`shrink-0 transition-transform text-brand/40 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="font-body text-brand/70 font-medium leading-[1.5]">{a}</p>
        </div>
      )}
    </div>
  );
}

export function AiEstimates() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="AI Estimate — Priced From Your Rates in Under 60 Seconds | SMASH"
        description="AI estimate for service businesses: speak the job on iPhone or scan Gmail — catalog-priced estimate (or quote) in under 60 seconds, then one-tap invoice. Live AU, NZ, UK, US, CA."
        keywords="AI estimate, AI estimate generator, AI job estimate, voice to estimate, job estimate app, estimate generator, AI quote, voice to quote"
        ogTitle="AI Estimate — Send Before You Lose the Job | SMASH"
        ogDescription="Talk the job. SMASH builds a priced estimate from your rates. Verify, send, then invoice in one tap when they say yes."
        ogImage="https://smashinvoices.com/og-image.png"
        ogUrl="https://smashinvoices.com/ai-estimates"
        twitterTitle="AI Estimate | SMASH Invoices"
        twitterDescription="Voice or Gmail → priced estimate from your catalog in under 60 seconds."
        canonical="https://smashinvoices.com/ai-estimates"
        hreflangs={hreflangAlternates}
      />
      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com' },
        { name: 'Features', url: 'https://smashinvoices.com/features' },
        { name: 'AI Estimates', url: 'https://smashinvoices.com/ai-estimates' },
      ])} />
      <StructuredData data={createFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav />

      <MarketingPhotoHero contentClassName="py-20 md:py-28 lg:py-36">
        <AnimateIn direction="up">
          <p className={`${iosLanding.eyebrow} mb-4`}>AI Estimate</p>
          <h1 className={`${iosLanding.heroHeadline} mb-6 max-w-4xl`}>
            <span className="block text-white">Send the estimate</span>
            <span className="block text-white">before you</span>
            <span className="block text-accent">lose the job.</span>
          </h1>
          <p className={`${iosLanding.subline} mb-4 !text-white/80 !max-w-2xl`}>
            Describe the job out loud — or open the Gmail thread. SMASH builds a priced estimate from your rates in under 60 seconds. When they say yes, turn it into an invoice in one tap.
          </p>
          <p className="font-body text-sm text-white/45 max-w-2xl mb-8">
            Same product people call a quote in AU/UK. Live on iOS &amp; Chrome —{' '}
            <Link to="/" className="underline decoration-accent/60 hover:text-white">Australia</Link>,{' '}
            <Link to="/nz" className="underline decoration-accent/60 hover:text-white">New Zealand</Link>,{' '}
            <Link to="/uk" className="underline decoration-accent/60 hover:text-white">the UK</Link>,{' '}
            <Link to="/us" className="underline decoration-accent/60 hover:text-white">the US</Link> and{' '}
            <Link to="/ca" className="underline decoration-accent/60 hover:text-white">Canada</Link>.
          </p>
          <DualProductCtas />
        </AnimateIn>
      </MarketingPhotoHero>

      <section className="bg-accent py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-brand font-medium leading-[1.4] text-lg md:text-xl">
            <strong className="font-black">AI estimate</strong> means turning a spoken or typed job description into a professional, itemised estimate priced from your own rates — not generic internet guesses. SMASH is built for self-employed service workers: talk for about 30 seconds on iPhone (or scan Gmail), verify the lines, send before you leave, then{' '}
            <Link to="/quote-to-invoice" className="underline font-black">convert to invoice</Link> when the work is approved. That is also{' '}
            <Link to="/voice-invoicing" className="underline font-black">voice to invoice</Link> when the job is already done.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimateIn direction="left">
              <div>
                <p className="text-accent font-black text-xs uppercase tracking-widest mb-3">The problem</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-6">
                  The estimate<br />takes longer<br />than the job.
                </h2>
                <p className="font-body text-brand/70 font-medium leading-[1.5] mb-4">
                  Most jobs are lost to whoever replied first — not whoever was cheapest. Typing an estimate tonight means someone else already sent theirs.
                </p>
                <p className="font-body text-brand/70 font-medium leading-[1.5] mb-6">
                  SMASH is voice-first AI estimating: you describe the scope, it fills line items from your catalog, you verify, you send. No spreadsheet. No retyping into QuickBooks or Xero later.
                </p>
                <p className="text-brand font-black leading-[1.4]">
                  First estimate wins. Invoice is how you get paid.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn direction="right">
              <ScaledPhone>
                <PhoneMockup>
                  <AppScreen type="estimates-static" />
                </PhoneMockup>
              </ScaledPhone>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12 md:mb-16">
              Voice to estimate.<br />Then invoice.
            </h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Speak the job',
                  body: 'On site: hold record and describe labour, materials and call-out the way you would tell a mate. At the desk: open the customer email in Gmail and build from the thread.',
                },
                {
                  step: '02',
                  title: 'Estimate priced from your rates',
                  body: 'SMASH matches speech to your catalog — unmatched items are flagged, not silently guessed. Review, edit, send a professional PDF with approval.',
                },
                {
                  step: '03',
                  title: 'One-tap invoice when they say yes',
                  body: 'Approved estimate becomes the invoice — same lines, tax, and totals. Optional Pay Now. Sync to Xero or QuickBooks on paid plans.',
                },
              ].map((s) => (
                <div key={s.step} className="bg-surface rounded-[32px] border-2 border-border p-8">
                  <p className="text-5xl font-black text-accent/30 leading-none mb-4">{s.step}</p>
                  <h3 className="text-xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">{s.title}</h3>
                  <p className="font-body text-brand/70 font-medium text-sm leading-[1.5]">{s.body}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
          <p className="text-center text-brand/60 font-medium mt-8">
            Total time: <strong className="text-brand">under 60 seconds</strong> to send the estimate.{' '}
            <Link to="/voice-invoicing" className="text-brand font-black underline">Voice to invoice</Link>
            {' '}uses the same flow after the job.
          </p>
        </div>
      </section>

      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-3">What&apos;s different</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-12">
              Your prices.<br />Not AI guesswork.
            </h2>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Catalog fidelity',
                  body: 'Upload your rates once. Every AI estimate uses your labour, packages and materials — the same promise as voice invoicing.',
                },
                {
                  title: 'Estimate and invoice in one loop',
                  body: 'Win the job with speed. Get paid without rebuilding the document. That is the Smash Invoices product — not a one-off generator.',
                },
                {
                  title: 'Field + desk',
                  body: 'iPhone for the driveway. Chrome/Edge for Gmail enquiries. Same account, same pricing DNA.',
                },
                {
                  title: 'Tax-ready documents',
                  body: 'Business number, tax breakdown and sequential docs for your region — GST, VAT, sales tax, HST/PST.',
                },
              ].map((f) => (
                <div key={f.title} className="bg-white/10 rounded-[32px] border border-white/20 p-8">
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-3">{f.title}</h3>
                  <p className="font-body text-white/70 font-medium text-sm leading-[1.5]">{f.body}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4 text-center">
              AI estimate vs typing vs ChatGPT
            </h2>
            <p className="font-body text-center text-brand/60 font-medium mb-12 max-w-xl mx-auto leading-[1.5]">
              Speed wins the job. Catalog prices win trust.
            </p>
          </AnimateIn>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr className="border-b-2 border-brand">
                  <th className="text-left py-4 pr-6 text-sm font-black uppercase tracking-wider text-brand" />
                  <th className="text-center py-4 px-4 text-sm font-black uppercase tracking-wider text-accent">SMASH</th>
                  <th className="text-center py-4 px-4 text-sm font-black uppercase tracking-wider text-brand/50">ChatGPT</th>
                  <th className="text-center py-4 px-4 text-sm font-black uppercase tracking-wider text-brand/50">Typing apps</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Input', smash: 'Voice or Gmail', other: 'Paste + prompt', trad: 'Forms' },
                  { label: 'Time to send', smash: 'Under 60 seconds', other: '10–30+ minutes', trad: '15–45 minutes' },
                  { label: 'Your personal rates', smash: true, other: false, trad: 'Manual' },
                  { label: 'Send from site', smash: true, other: false, trad: 'Rare' },
                  { label: 'Estimate → invoice', smash: true, other: false, trad: 'Varies' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="py-4 pr-6 text-sm font-bold text-brand leading-[1.15]">{row.label}</td>
                    {[row.smash, row.other, row.trad].map((val, j) => (
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

      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-white/8 border border-white/12">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-accent fill-accent" />
                ))}
              </div>
              <span className="font-body text-xs font-semibold text-white/60">First reply wins</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-[0.88] text-white">
              Built for people who quote on the job
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                quote: 'I send the estimate while I am still standing in their driveway. Used to be an email at 9pm if I remembered.',
                name: 'Dan W.',
                trade: 'Handyman',
              },
              {
                quote: 'This does not invent prices. It uses mine. That is the only AI estimate I trust to send a customer.',
                name: 'Amy R.',
                trade: 'Gardener',
              },
              {
                quote: 'Quote goes out, they approve, invoice is already done. I stopped rebuilding the same job twice.',
                name: 'Chris B.',
                trade: 'Tiler',
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
                    &ldquo;{t.quote}&rdquo;
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

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10 md:mb-14 text-center">
              AI estimate questions
            </h2>
            <div className="bg-surface rounded-[32px] border-2 border-border px-4 sm:px-8 py-2 sm:py-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-brand uppercase tracking-tighter leading-[0.88]">Keep going</h2>
            <Link to="/blog" className="text-sm font-black text-brand/50 uppercase tracking-wide hover:text-brand transition-colors">All posts →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { to: '/estimate-generator', title: 'Free estimate generator', desc: 'Build a priced estimate in the browser — then do it by voice in SMASH.' },
              { to: '/voice-invoicing', title: 'Voice to invoice', desc: 'Same engine after the job — invoice sent before you leave the driveway.' },
              { to: '/quote-to-invoice', title: 'Estimate → invoice', desc: 'Approved document becomes the bill without retyping.' },
              { to: '/ai-invoicing', title: 'AI invoicing', desc: 'When the search is invoice-first — same catalog, same speed.' },
              { to: '/blog/can-chatgpt-write-a-quote-estimate', title: 'Can ChatGPT write an estimate?', desc: 'What works, what breaks, and why catalog pricing wins.' },
              { to: '/blog/first-quote-wins-instant-quote-on-site', title: 'First quote wins', desc: 'Speed to estimate is the job-win metric.' },
            ].map((card) => (
              <Link key={card.to} to={card.to} className="bg-white rounded-[24px] border-2 border-border p-6 hover:border-accent transition-colors group">
                <h3 className="text-base font-black text-brand uppercase tracking-tighter leading-[0.88] mb-2 group-hover:text-accent transition-colors">{card.title}</h3>
                <p className="text-sm text-brand/60 font-medium leading-[1.4]">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <RelatedTools keywords={['estimate', 'quote', 'job estimate', 'ai']} title="Related free tools" />
        </div>
      </section>

      <section className="bg-brand py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-[0.88]">
              Estimate sent before<br />you leave the driveway.
            </h2>
            <p className="font-body text-lg text-white/80 font-medium leading-[1.5] mb-8 max-w-xl mx-auto">
              Free to start. Speak for 30 seconds. See your first priced estimate — then invoice when they say yes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-95 transition-all">
                Start Free on iPhone
              </a>
              <Link to="/estimate-generator" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] border-2 border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-white/10 transition-all">
                Try free estimate generator
              </Link>
            </div>
            <p className="text-sm text-white/40 font-medium">
              <Link to="/voice-invoicing" className="underline hover:text-white/70 transition-colors">Voice invoicing</Link>
              {' · '}
              <Link to="/quote-generator" className="underline hover:text-white/70 transition-colors">Quote generator</Link>
              {' · '}
              <Link to="/pricing" className="underline hover:text-white/70 transition-colors">Pricing</Link>
            </p>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
