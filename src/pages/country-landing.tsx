import { useState } from 'react';
import { ChevronDown, ArrowRight, Check } from 'lucide-react';
import { SEO } from '../components/seo';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { StructuredData, createBreadcrumbSchema, createFAQSchema } from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { type CountryData, hreflangAlternates } from '../data/country-data';

interface CountryLandingProps {
  data: CountryData;
}

export function CountryLanding({ data }: CountryLandingProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Waitlist signup uses a mailto handoff for now — the backend form
  // will be swapped in when the country-specific product launches.
  const waitlistMailto = `mailto:dan@smashinvoices.com?subject=${encodeURIComponent(
    `SMASH ${data.code} waitlist`,
  )}&body=${encodeURIComponent(
    `Hi, please add me to the SMASH ${data.name} waitlist.\n\nEmail: ${email}\nTrade / work I do:\n`,
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    window.location.href = waitlistMailto;
  };

  return (
    <>
      <SEO
        title={data.seo.title}
        description={data.seo.description}
        keywords={data.seo.keywords}
        ogTitle={data.seo.title}
        ogDescription={data.seo.description}
        ogUrl={data.url}
        canonical={data.url}
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com/' },
        { name: data.name, url: data.url },
      ])} />
      <StructuredData data={createFAQSchema(data.faqs.map(f => ({ question: f.q, answer: f.a })))} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav />

      {/* HERO */}
      <section className="relative bg-brand overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero_image.png" alt="" aria-hidden="true" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/98 via-gray-900/92 to-gray-900/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-28">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-[0.2em] mb-5">
              {data.flagEmoji} Coming to {data.name}
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
              {data.heroHook}
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
              {data.heroSub}
            </p>

            {/* Waitlist form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 rounded-2xl bg-white/10 text-white placeholder-white/40 border border-white/20 focus:border-accent focus:outline-none font-body"
              />
              <button
                type="submit"
                className="px-7 py-4 rounded-2xl bg-accent text-brand font-display text-sm uppercase tracking-widest hover:brightness-95 transition-all flex items-center justify-center gap-2"
              >
                Join waitlist <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </form>

            {submitted && (
              <p className="mt-4 text-accent text-sm font-semibold">
                Thanks — we will email you the moment SMASH is live in {data.name}. Check your mail client for a confirmation draft.
              </p>
            )}

            <p className="mt-4 text-white/50 text-xs font-body">
              No spam. Priority onboarding for early {data.demonym} users. Unsubscribe in one click.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ANSWER BLOCK — dense, for AI citation */}
      <section className="bg-accent py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand/60 mb-3">
            What is SMASH for {data.name}?
          </p>
          <p className="font-body text-xl md:text-2xl text-brand leading-snug max-w-3xl mx-auto">
            SMASH is a voice-to-invoice app for {data.demonym} sole traders and contractors —
            {' '}{data.audience}. You describe the job out loud, SMASH writes a professional
            {' '}{data.taxLabel.replace(/\s*\(.*\)/, '')}-compliant invoice in {data.currency.code} and sends it to your customer,
            all in under 60 seconds.
          </p>
        </div>
      </section>

      {/* WHY IT'S BUILT FOR THE COUNTRY */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3 text-center">
              Built for {data.name}
            </p>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] text-brand text-center mb-16 max-w-3xl mx-auto">
              Not a retrofit. A {data.demonym} invoice app from day one.
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-8">
            {data.reasons.map((r, i) => (
              <AnimateIn key={i} direction="up">
                <div className="rounded-3xl border border-slate-100 hover:border-accent transition-all p-8 h-full">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-5">
                    <Check size={18} className="text-brand" strokeWidth={3} />
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-tight text-brand mb-3 leading-tight">
                    {r.title}
                  </h3>
                  <p className="font-body text-slate-500 leading-relaxed">{r.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* SPEC BOX — high-density facts for AI engines */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2">Currency</p>
                <p className="font-display text-2xl text-brand">{data.currency.code}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2">Tax</p>
                <p className="font-display text-2xl text-brand">{data.taxLabel}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2">Business number</p>
                <p className="font-display text-2xl text-brand">{data.businessNumberLabel}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2">Status</p>
                <p className="font-display text-2xl text-brand">
                  {data.live ? 'Live' : 'Waitlist'}
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] text-brand mb-12 text-center">
              Questions about {data.name}
            </h2>
          </AnimateIn>
          <div className="border-t border-b border-slate-100">
            {data.faqs.map((faq, i) => (
              <div key={i} className="border-b border-slate-100 last:border-b-0">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-6 text-left"
                >
                  <span className="font-display text-base uppercase tracking-tight text-brand leading-tight">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    strokeWidth={2.5}
                    className={`shrink-0 text-brand/40 transition-transform mt-0.5 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="pb-6 font-body text-slate-500 leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] text-white mb-4">
            Be first when SMASH lands in {data.name}.
          </h2>
          <p className="font-body text-white/60 mb-8 text-lg">
            Early {data.demonym} users get priority onboarding and a direct line to the founder.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 rounded-2xl bg-white/10 text-white placeholder-white/40 border border-white/20 focus:border-accent focus:outline-none font-body"
            />
            <button
              type="submit"
              className="px-7 py-4 rounded-2xl bg-accent text-brand font-display text-sm uppercase tracking-widest hover:brightness-95 transition-all flex items-center justify-center gap-2"
            >
              Join waitlist <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
