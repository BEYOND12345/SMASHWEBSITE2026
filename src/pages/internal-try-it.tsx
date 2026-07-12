import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { SEO } from '../components/seo';
import {
  VoiceQuoteDemoDesignReview,
  VoiceQuoteDemo,
} from '../components/voice-quote-demo/VoiceQuoteDemo';
import { HomepagePlacementWireframe } from '../components/voice-quote-demo/TryItPlacementMock';
import { isVoiceQuoteDemoInternalAllowed } from '../lib/feature-flags';
import { iosLanding } from '../components/ios-product-landing/ios-landing-tokens';

type Tab = 'placement' | 'screens';

/**
 * Internal: placement mock + screen-by-screen app UI review.
 */
export function InternalTryItPage() {
  if (!isVoiceQuoteDemoInternalAllowed()) {
    return <Navigate to="/" replace />;
  }

  const [tab, setTab] = useState<Tab>('placement');
  const [viewport, setViewport] = useState<'desktop' | 'mobile'>('desktop');
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className={`${iosLanding.page} bg-brand min-h-screen`}>
      <SEO
        title="Internal — Voice quote demo | SMASH"
        description="Internal try-it placement and UI review. Not for public indexing."
        canonical="https://smashinvoices.com/internal/try-it"
        robots="noindex, nofollow"
      />
      <Nav />
      <main className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 70% 20%, rgba(223,255,0,0.18), transparent 45%), radial-gradient(ellipse at 10% 80%, rgba(255,255,255,0.06), transparent 40%)',
          }}
        />

        <div className={`${iosLanding.container} relative py-10 md:py-14`}>
          <div className="flex flex-wrap gap-2 mb-8">
            {(
              [
                { id: 'placement' as const, label: 'Where it lives' },
                { id: 'screens' as const, label: 'App screens 11–14' },
              ] as const
            ).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`min-h-[40px] px-4 rounded-full font-display text-xs uppercase tracking-wide transition-colors ${
                  tab === t.id
                    ? 'bg-accent text-brand'
                    : 'bg-white/10 text-white/70 hover:bg-white/15'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === 'placement' ? (
            <div className="space-y-10">
              <div className="max-w-2xl">
                <p className="font-display text-[11px] uppercase tracking-[0.22em] text-accent mb-2">
                  Placement recommendation
                </p>
                <h1 className={`${iosLanding.heroHeadline} text-white text-[clamp(2rem,4vw,3.25rem)] mb-3`}>
                  <span className="block">HOMEPAGE</span>
                  <span className="block text-accent">SECTION 2</span>
                </h1>
                <p className="font-body text-white/65 leading-relaxed text-sm md:text-base">
                  After the hero, before testimonials. Hero gets a secondary{' '}
                  <strong className="text-white font-semibold">Try It Now</strong> that opens the
                  demo. The section proves the product in place — then the rest of the page sells
                  outcomes.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: 'Desktop',
                    body: 'Copy left + idle phone teaser right. Click Try It → modal with full app UI in phone chrome.',
                  },
                  {
                    title: 'Mobile web',
                    body: 'No phone-inside-phone. Section is copy + CTA only. Try It opens a near full-screen sheet of the real app UI.',
                  },
                  {
                    title: 'Why here',
                    body: 'Hero makes the promise. Section 2 lets them feel it before scrolling through story bands. Highest intent, lowest friction.',
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
                  >
                    <p className="font-display text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
                      {card.title}
                    </p>
                    <p className="font-body text-sm text-white/65 leading-relaxed">{card.body}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 items-center">
                <span className="font-display text-[10px] uppercase tracking-[0.2em] text-white/40 mr-1">
                  Wireframe
                </span>
                {(
                  [
                    { id: 'desktop' as const, label: 'Desktop' },
                    { id: 'mobile' as const, label: 'Mobile' },
                  ] as const
                ).map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setViewport(v.id)}
                    className={`min-h-[36px] px-3 rounded-full font-display text-[11px] uppercase tracking-wide ${
                      viewport === v.id
                        ? 'bg-white text-brand'
                        : 'bg-white/10 text-white/60 hover:bg-white/15'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setDemoOpen(true)}
                  className="min-h-[36px] px-4 rounded-full bg-accent text-brand font-display text-[11px] uppercase tracking-wide ml-auto"
                >
                  Open live demo
                </button>
              </div>

              <HomepagePlacementWireframe viewport={viewport} onTryIt={() => setDemoOpen(true)} />

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 max-w-3xl">
                <p className="font-display text-[10px] uppercase tracking-[0.2em] text-accent mb-3">
                  Implementation notes
                </p>
                <ul className="space-y-2 font-body text-sm text-white/60 leading-relaxed">
                  <li>
                    · <strong className="text-white/80">One component, two shells:</strong> same app
                    UI; desktop wraps it in phone chrome, mobile uses a full-bleed sheet.
                  </li>
                  <li>
                    · <strong className="text-white/80">Mic:</strong> requires HTTPS + user gesture.
                    Always keep typed fallback for denied permission / Safari quirks.
                  </li>
                  <li>
                    · <strong className="text-white/80">Not on /voice-invoicing first:</strong> that
                    page already sells the app with story screens — demo belongs where undecided
                    traffic lands (homepage).
                  </li>
                  <li>
                    · <strong className="text-white/80">Still gated:</strong> public homepage stays
                    clean until <code className="text-accent">VITE_ENABLE_VOICE_DEMO=true</code>.
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <VoiceQuoteDemoDesignReview />
          )}
        </div>
      </main>
      <Footer />

      <VoiceQuoteDemo open={demoOpen} onOpenChange={setDemoOpen} showSection={false} />
    </div>
  );
}
