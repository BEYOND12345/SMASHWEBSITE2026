import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Home, Mic, Wrench, ScrollText, FileText } from 'lucide-react';
import { SEO } from '../components/seo';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';

interface Suggestion {
  to: string;
  label: string;
  desc: string;
  Icon: typeof Home;
}

const suggestions: Suggestion[] = [
  { to: '/',                  label: 'Homepage',            desc: 'Voice-to-invoice for tradies', Icon: Home },
  { to: '/voice-invoicing',   label: 'Voice invoicing',     desc: 'How voice-to-invoice works',   Icon: Mic },
  { to: '/tools',             label: 'Free tools',          desc: 'Invoice, quote, GST calculators', Icon: Wrench },
  { to: '/blog',              label: 'Blog',                desc: 'All articles and guides',      Icon: ScrollText },
  { to: '/sitemap',           label: 'Sitemap',             desc: 'Every SMASH page in one place', Icon: FileText },
];

export function NotFound() {
  const { pathname } = useLocation();

  return (
    <>
      <SEO
        title="Page not found | SMASH Invoices"
        description="The page you were looking for could not be found. Here are some popular SMASH pages instead."
        robots="noindex, follow"
        canonical="https://smashinvoices.com/"
      />

      <Nav />

      <section className="bg-brand py-24 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-[0.2em] mb-6">
              404 · Page not found
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
              That page is on smoko.
            </h1>
            <p className="font-body text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-2 leading-relaxed">
              We could not find{' '}
              <code className="font-mono text-sm px-2 py-0.5 rounded bg-white/10 text-accent break-all">
                {pathname}
              </code>
              .
            </p>
            <p className="font-body text-base text-white/50 max-w-2xl mx-auto mb-10">
              Either the link is stale or the URL was typed incorrectly. Try one of the popular pages below.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestions.map(s => (
              <AnimateIn key={s.to} direction="up">
                <Link
                  to={s.to}
                  className="group block rounded-2xl border border-slate-200 hover:border-accent p-6 h-full transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <s.Icon size={18} className="text-accent" strokeWidth={2.5} />
                    </div>
                    <ArrowRight
                      size={16}
                      strokeWidth={2.5}
                      className="text-brand/30 group-hover:text-brand group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                  <p className="font-display text-lg uppercase tracking-tight text-brand leading-tight mb-1">
                    {s.label}
                  </p>
                  <p className="font-body text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="font-body text-sm text-slate-500">
              Still looking? Email{' '}
              <a
                href="mailto:dan@smashinvoices.com"
                className="underline decoration-accent hover:text-brand"
              >
                dan@smashinvoices.com
              </a>{' '}
              and we will point you in the right direction.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
