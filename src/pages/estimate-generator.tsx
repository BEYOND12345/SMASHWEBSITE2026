import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { hreflangAlternates } from '../data/country-data';
import {
  StructuredData,
  createFAQSchema,
  createBreadcrumbSchema,
  createHowToSchema,
  createCalculatorSchema,
} from '../components/structured-data';
import { Nav } from '../components/nav';
import { ToolPageHero } from '../components/marketing/ToolPageHero';
import { Footer } from '../components/footer';
import { VoiceConversionCTA } from '../components/voice-conversion-cta';
import { AnimateIn } from '../components/animate-in';
import { ChevronDown } from 'lucide-react';
import { RelatedTools } from '../components/related-tools';
import { useState } from 'react';
import { QuoteBuilder } from './quote-generator';

const faqs = [
  {
    q: 'What is a free estimate generator?',
    a: 'A free estimate generator lets you build a professional job estimate in your browser — business details, line items, tax and totals — without buying software first. This page is free to use. SMASH does the same job by voice from your saved rates in under 60 seconds.',
  },
  {
    q: 'Is an estimate the same as a quote?',
    a: 'Yes for most service businesses. Estimate is the usual word in the US and Canada; quote is common in Australia, New Zealand and the UK. SMASH creates one priced document either way. Prefer quote language? Use the free quote generator.',
  },
  {
    q: 'How do I create an AI estimate instead of typing?',
    a: 'Download SMASH on iPhone, speak the job for about 20–30 seconds, verify catalog-priced lines, and send. That is an AI estimate (voice to estimate). At the desk, the Chrome extension builds from a Gmail thread the same way.',
  },
  {
    q: 'Can I turn the estimate into an invoice?',
    a: 'Yes in SMASH — one tap after approval. Labour, materials and tax carry over so you do not rebuild the job. See quote to invoice.',
  },
  {
    q: 'Does this work outside Australia?',
    a: 'Yes. SMASH is live in Australia, New Zealand, the UK, the US and Canada. The browser builder on this page works worldwide; the app localises tax fields for your region.',
  },
  {
    q: 'How is this different from construction estimating software?',
    a: 'This is for service and trade jobs priced from your rates — cleaners, handymen, painters, mobile trades — not blueprint takeoff or bill-of-quantities software.',
  },
];

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button type="button" onClick={onClick} className="w-full flex items-start justify-between gap-4 py-5 text-left">
        <span className="text-base font-bold text-white">{q}</span>
        <ChevronDown size={22} className={`shrink-0 text-white/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
      </button>
      {isOpen && <p className="font-body text-sm font-medium text-white/60 leading-[1.6] pb-5">{a}</p>}
    </div>
  );
}

export function EstimateGenerator() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <SEO
        title="Free Estimate Generator — Job Estimates in Under 60 Seconds | SMASH"
        description="Free estimate generator for service businesses. Build a priced job estimate in your browser, or speak an AI estimate on iPhone from your rates. Live AU, NZ, UK, US, CA. Start free."
        keywords="estimate generator, free estimate generator, AI estimate generator, job estimate, job estimate app, AI estimate, create an estimate"
        ogTitle="Free Estimate Generator — SMASH"
        ogDescription="Build a professional job estimate free in your browser — or send an AI estimate by voice from your catalog in under 60 seconds."
        canonical="https://smashinvoices.com/estimate-generator"
        hreflangs={hreflangAlternates}
      />

      <StructuredData
        data={createCalculatorSchema({
          name: 'Free Estimate Generator',
          description:
            'Free online estimate generator for service businesses. Build a priced job estimate in your browser, or use SMASH voice AI estimates from your catalog.',
          url: 'https://smashinvoices.com/estimate-generator',
          featureList: [
            'Itemised labour and materials',
            'Live estimate preview',
            'Tax-ready totals',
            'Voice AI estimate via SMASH',
            'Estimate to invoice',
          ],
        })}
      />

      <StructuredData
        data={createHowToSchema({
          name: 'How to generate a job estimate',
          description: 'Build a professional job estimate online, or send an AI estimate by voice with SMASH.',
          steps: [
            {
              name: 'Add business and client details',
              text: 'Enter your business name, tax ID, client and job address. Add an estimate number and valid-until date.',
            },
            {
              name: 'Add line items',
              text: 'Labour, materials and fees with quantity, rate and tax. Preview totals live.',
            },
            {
              name: 'Send — or do it by voice in SMASH',
              text: 'Download SMASH to describe the job out loud and send a catalog-priced AI estimate in under 60 seconds, then convert to invoice when approved.',
            },
          ],
        })}
      />

      <StructuredData data={createFAQSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      <StructuredData
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://smashinvoices.com' },
          { name: 'Tools', url: 'https://smashinvoices.com/tools' },
          { name: 'Estimate Generator', url: 'https://smashinvoices.com/estimate-generator' },
        ])}
      />

      <Nav />

      <ToolPageHero
        eyebrow="Free estimate generator"
        subline="Build a priced job estimate in your browser — or speak an AI estimate from your rates on iPhone in under 60 seconds. Same document people call a quote in AU and the UK."
        meta="Free in browser · Start Free on iPhone · Gmail extension"
        headline={
          <>
            <span className="block text-white">Free Estimate</span>
            <span className="block text-white">Generator — Priced</span>
            <span className="block text-accent">Jobs in 60 Seconds.</span>
          </>
        }
      />

      <section className="bg-accent py-8 md:py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-brand font-medium leading-[1.45] text-base md:text-lg">
            <strong className="font-black">An estimate generator</strong> creates a professional, itemised price for a job before the work starts.
            Use the free builder below, or{' '}
            <Link to="/ai-estimates" className="underline font-black">
              AI estimate
            </Link>{' '}
            by voice in SMASH — then{' '}
            <Link to="/quote-to-invoice" className="underline font-black">
              invoice in one tap
            </Link>{' '}
            when they approve. Looking for quote wording? Try the{' '}
            <Link to="/quote-generator" className="underline font-black">
              free quote generator
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="text-center mb-10">
              <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-3">Free online tool</p>
              <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">
                Build your estimate now.
              </h2>
              <p className="font-body text-brand/55 font-medium text-base leading-[1.5] max-w-xl mx-auto">
                No login required. When you want this from voice — your rates, under 60 seconds — that is SMASH.
              </p>
            </div>
            <QuoteBuilder leadSource="estimate_generator" />
          </AnimateIn>
        </div>
      </section>

      <VoiceConversionCTA
        outputLabel="this estimate"
        headline="Want this estimate to build itself from a voice note?"
        sub="SMASH turns a 30-second voice note into a priced AI estimate from your rates — then one-tap invoice when they say yes."
      />

      <section className="bg-brand py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-8 text-center">
            Estimate generator FAQ
          </h2>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] px-4 sm:px-8">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
          <p className="text-center text-white/40 text-sm font-medium mt-8">
            <Link to="/ai-estimates" className="underline hover:text-white/70">
              AI estimates
            </Link>
            {' · '}
            <Link to="/voice-invoicing" className="underline hover:text-white/70">
              Voice to invoice
            </Link>
            {' · '}
            <Link to="/quote-generator" className="underline hover:text-white/70">
              Quote generator
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-brand py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <RelatedTools
            keywords={['estimate', 'quote', 'invoice', 'job estimate']}
            currentSlug="/estimate-generator"
            title="Related free tools"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
