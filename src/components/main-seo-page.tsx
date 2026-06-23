import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SEO } from './seo';
import { Nav } from './nav';
import { Footer } from './footer';
import { StructuredData, createBreadcrumbSchema, createFAQSchema } from './structured-data';
import { AnimateIn } from './animate-in';
import { hreflangAlternates } from '../data/country-data';
import {
  APP_STORE_URL,
  CHROME_STORE_URL,
  IOS_DOWNLOAD_LABEL,
  CHROME_CTA_LABEL,
} from '../data/download-urls';
import { type MainPageSeo } from '../data/main-pages-seo';

type Props = {
  page: MainPageSeo;
};

export function MainSeoPage({ page }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = page.faqs ?? [];
  const canonical = `https://smashinvoices.com${page.path}`;

  return (
    <>
      <SEO
        title={page.title}
        description={page.description}
        ogTitle={page.title}
        ogDescription={page.description}
        canonical={canonical}
        ogUrl={canonical}
        hreflangs={hreflangAlternates}
      />
      <StructuredData
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://smashinvoices.com' },
          { name: page.h1, url: canonical },
        ])}
      />
      {faqs.length > 0 && (
        <StructuredData data={createFAQSchema(faqs.map((f) => ({ question: f.question, answer: f.answer })))} />
      )}
      <Nav />
      <main className="bg-surface min-h-screen">
        <section className="bg-brand text-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
            <AnimateIn direction="up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.88] mb-4">
                {page.h1}
              </h1>
              {page.brandLine && (
                <p className="font-body text-white/60 font-medium text-lg mb-8">{page.brandLine}</p>
              )}
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <p className="font-body text-white/90 font-medium leading-relaxed">{page.answerBlock}</p>
              </div>
            </AnimateIn>
          </div>
        </section>

        {page.steps && page.steps.length > 0 && (
          <section className="py-16 md:py-20 border-b border-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
              <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-4">How it works</p>
              <div className="space-y-6">
                {page.steps.map((step, i) => (
                  <AnimateIn key={step.title} direction="up" delay={i * 60}>
                    <div className="flex gap-4">
                      <span className="shrink-0 w-10 h-10 rounded-full bg-accent text-brand font-black text-sm flex items-center justify-center">
                        {i + 1}
                      </span>
                      <div>
                        <h2 className="text-lg font-black text-brand uppercase tracking-tight mb-1">{step.title}</h2>
                        <p className="font-body text-brand/60 font-medium leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </section>
        )}

        {page.relatedLinks && page.relatedLinks.length > 0 && (
          <section className="py-12 bg-canvas border-b border-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
              <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-4">Related</p>
              <div className="flex flex-wrap gap-3">
                {page.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-brand/10 bg-white text-sm font-bold text-brand hover:border-accent transition-colors"
                  >
                    {link.label}
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <AnimateIn direction="up">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {(page.cta === 'both' || page.cta === 'ios') && (
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-105 transition-all"
                  >
                    {IOS_DOWNLOAD_LABEL}
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </a>
                )}
                {(page.cta === 'both' || page.cta === 'chrome') && (
                  <a
                    href={CHROME_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-[32px] border-2 border-brand/20 text-brand font-black text-sm uppercase tracking-widest hover:bg-brand/5 transition-all"
                  >
                    {CHROME_CTA_LABEL}
                  </a>
                )}
              </div>
            </AnimateIn>
          </div>
        </section>

        {faqs.length > 0 && (
          <section className="bg-brand py-16 md:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8">FAQ</h2>
              <div className="rounded-[28px] bg-white/5 border border-white/10 px-6">
                {faqs.map((faq, i) => (
                  <div key={faq.question} className="border-b border-white/10 last:border-0">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between py-5 text-left"
                    >
                      <span className="font-bold text-white pr-4">{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`text-accent shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openFaq === i && (
                      <p className="font-body text-white/70 font-medium leading-relaxed pb-5 -mt-1">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
