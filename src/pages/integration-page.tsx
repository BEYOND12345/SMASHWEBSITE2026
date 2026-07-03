import { useState } from 'react';
import { ChevronDown, ArrowRight, Check, Link as LinkIcon } from 'lucide-react';
import { SEO } from '../components/seo';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import {
  StructuredData,
  createBreadcrumbSchema,
  createFAQSchema,
  createHowToSchema,
} from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { hreflangAlternates } from '../data/country-data';
import type { IntegrationData } from '../data/integrations-data';

interface IntegrationPageProps {
  data: IntegrationData;
}

export function IntegrationPage({ data }: IntegrationPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const url = `https://smashinvoices.com/integrations/${data.slug}`;

  const waitlistMailto = `mailto:dan@smashinvoices.com?subject=${encodeURIComponent(
    `SMASH × ${data.name} integration waitlist`,
  )}&body=${encodeURIComponent(
    `Hi, please add me to the waitlist for the SMASH × ${data.name} integration.\n\nEmail: ${email}\nTrade / work I do:\nCountry I operate in:\n`,
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    window.location.href = waitlistMailto;
  };

  const statusLabel =
    data.status === 'live' ? 'Live' : data.status === 'coming-soon' ? 'Coming soon' : 'On roadmap';

  return (
    <>
      <SEO
        title={data.seo.title}
        description={data.seo.description}
        keywords={data.seo.keywords}
        ogTitle={data.seo.title}
        ogDescription={data.seo.description}
        ogUrl={url}
        canonical={url}
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home',         url: 'https://smashinvoices.com/' },
        { name: 'Integrations', url: 'https://smashinvoices.com/integrations' },
        { name: data.name,      url },
      ])} />
      <StructuredData data={createFAQSchema(data.faqs.map(f => ({ question: f.q, answer: f.a })))} />
      <StructuredData data={createHowToSchema({
        name: `How to connect ${data.name} to SMASH`,
        description: `Connect ${data.name} to SMASH so voice-generated invoices, contacts, payments and tax codes sync automatically.`,
        steps: data.howItWorks.map(s => ({ name: s.title, text: s.body })),
      })} />
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
            <p className="text-accent font-black text-xs uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
              <LinkIcon size={12} strokeWidth={3} />
              SMASH × {data.name} · {statusLabel}
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
              {data.heroH1}
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
              {data.heroSub}
            </p>

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
                Thanks — we will email you the moment the {data.name} integration goes live. Check your mail client for a confirmation draft.
              </p>
            )}

            <p className="mt-4 text-white/50 text-xs font-body">{data.waitlistCopy}</p>
          </AnimateIn>
        </div>
      </section>

      {/* ANSWER BLOCK */}
      <section className="bg-accent py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand/60 mb-3">
            What is the SMASH × {data.name} integration?
          </p>
          <p className="font-body text-xl md:text-2xl text-brand leading-snug max-w-3xl mx-auto">
            {data.answer}
          </p>
        </div>
      </section>

      {/* WHAT SYNCS */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3 text-center">
              What syncs
            </p>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.9] text-brand text-center mb-16 max-w-3xl mx-auto">
              Every piece of invoicing data — in both directions.
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.whatSyncs.map((s, i) => (
              <AnimateIn key={i} direction="up">
                <div className="rounded-3xl border border-slate-100 hover:border-accent transition-all p-8 h-full">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-5">
                    <Check size={18} className="text-brand" strokeWidth={3} />
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-tight text-brand mb-3 leading-tight">
                    {s.label}
                  </h3>
                  <p className="font-body text-slate-500 leading-relaxed">{s.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3 text-center">
              How it works
            </p>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-tighter leading-[0.9] text-brand text-center mb-16 max-w-3xl mx-auto">
              Four steps. One connection. Zero double-entry.
            </h2>
          </AnimateIn>

          <ol className="space-y-4">
            {data.howItWorks.map(s => (
              <li key={s.step} className="bg-white rounded-2xl border border-slate-100 p-6 flex gap-5 items-start">
                <span className="shrink-0 w-10 h-10 rounded-full bg-brand text-accent font-display text-base flex items-center justify-center">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-display text-lg uppercase tracking-tight text-brand mb-1">{s.title}</h3>
                  <p className="font-body text-slate-500 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SPEC BOX */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2">Partner</p>
                <p className="font-display text-2xl text-brand">{data.name}</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2">Status</p>
                <p className="font-display text-2xl text-brand">{statusLabel}</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2">Markets</p>
                <p className="font-body text-sm text-brand leading-snug">{data.markets.join(' · ')}</p>
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
              {data.name} integration FAQ
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
            Be first on the {data.name} integration.
          </h2>
          <p className="font-body text-white/60 mb-8 text-lg">
            Priority access when the integration goes live. Direct line to the founder.
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
