/**
 * Homepage placement mock for the try-it demo.
 * Internal review only — shows where it sits and how desktop vs mobile differ.
 */

import { Mic } from 'lucide-react';
import { VoiceQuoteDemoScreen } from './VoiceQuoteDemoScreen';
import { iosLanding } from '../ios-product-landing/ios-landing-tokens';

type Viewport = 'desktop' | 'mobile';

/**
 * Recommended homepage band — copy + CTA.
 * Desktop also shows an idle phone teaser; mobile does not (avoids phone-in-phone).
 */
export function TryItHomepageSectionMock({
  viewport = 'desktop',
  onTryIt,
}: {
  viewport?: Viewport;
  onTryIt?: () => void;
}) {
  const isMobile = viewport === 'mobile';

  return (
    <section className="relative bg-[#FAFAFA] border border-dashed border-slate-300 rounded-3xl overflow-hidden">
      <div className="absolute top-3 left-3 z-10 rounded-full bg-accent text-brand px-3 py-1 font-display text-[10px] uppercase tracking-widest">
        Homepage · Section 2
      </div>

      <div className={`px-5 sm:px-8 ${isMobile ? 'py-12' : 'py-14 md:py-16'}`}>
        <div
          className={
            isMobile
              ? 'flex flex-col items-center text-center gap-6'
              : 'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center'
          }
        >
          <div className={isMobile ? 'w-full' : 'lg:col-span-5 text-left'}>
            <p className="font-display text-[11px] uppercase tracking-[0.22em] text-slate-400 mb-3">
              Try it live
            </p>
            <h2
              className={`${iosLanding.heroHeadline} text-brand mb-3 ${
                isMobile ? 'text-[clamp(2rem,9vw,2.75rem)]' : ''
              }`}
            >
              <span className="block">30 SECONDS</span>
              <span className="block text-accent">TO A QUOTE</span>
            </h2>
            <p
              className={`font-body text-slate-600 leading-relaxed mb-6 ${
                isMobile ? 'text-[15px] max-w-sm mx-auto' : 'text-base md:text-lg max-w-md'
              }`}
            >
              Same Voice Assistant as the iPhone app. Speak the job. See it priced.
            </p>
            <button
              type="button"
              onClick={onTryIt}
              className="inline-flex items-center justify-center gap-2 min-h-[52px] rounded-full bg-brand text-accent font-black text-sm uppercase tracking-widest px-8 py-4 touch-manipulation"
            >
              <Mic className="w-5 h-5" strokeWidth={2.5} />
              Try It Now
            </button>
            <p className="font-body text-xs text-slate-400 mt-3">
              Free · No account · Demo rates
            </p>
          </div>

          {!isMobile && (
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="w-full max-w-[300px] scale-[0.85] origin-top pointer-events-none select-none opacity-95">
                <VoiceQuoteDemoScreen phase="idle" preview />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** Annotated homepage wire — hero → try-it → rest of page. */
export function HomepagePlacementWireframe({
  viewport,
  onTryIt,
}: {
  viewport: Viewport;
  onTryIt?: () => void;
}) {
  const isMobile = viewport === 'mobile';

  return (
    <div
      className={`mx-auto bg-brand rounded-3xl overflow-hidden border border-white/10 shadow-2xl ${
        isMobile ? 'max-w-[390px]' : 'max-w-5xl'
      }`}
    >
      {/* Fake nav */}
      <div className="h-12 px-4 flex items-center justify-between border-b border-white/10">
        <span className="font-display text-accent text-sm tracking-widest">SMASH</span>
        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Nav</span>
      </div>

      {/* Hero stub */}
      <div className={`relative ${isMobile ? 'px-4 py-10' : 'px-8 py-14'} border-b border-white/10`}>
        <div className="absolute top-3 left-3 rounded-full bg-white/10 text-white/50 px-2.5 py-0.5 font-display text-[9px] uppercase tracking-widest">
          Section 1 · Hero
        </div>
        <p className="font-display text-white text-[clamp(1.5rem,4vw,2.5rem)] uppercase leading-none mb-2 mt-4">
          Never type
          <span className="block text-accent">an invoice again.</span>
        </p>
        <p className="font-body text-white/50 text-sm mb-4">Invoicing for people who hate typing.</p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex h-10 items-center rounded-full bg-accent text-brand px-4 text-[11px] font-black uppercase tracking-wide">
            Start Free on iPhone
          </span>
          <button
            type="button"
            onClick={onTryIt}
            className="inline-flex h-10 items-center rounded-full border border-white/25 text-white px-4 text-[11px] font-black uppercase tracking-wide"
          >
            Try It Now
          </button>
        </div>
      </div>

      {/* Try-it — the real placement */}
      <div className="bg-[#FAFAFA]">
        <TryItHomepageSectionMock viewport={viewport} onTryIt={onTryIt} />
      </div>

      {/* Rest of page stub */}
      <div className={`${isMobile ? 'px-4 py-8' : 'px-8 py-10'} space-y-3`}>
        <div className="rounded-full bg-white/10 text-white/40 px-2.5 py-0.5 font-display text-[9px] uppercase tracking-widest w-fit">
          Section 3+ · Testimonials · How it works · …
        </div>
        <div className="h-3 w-2/3 rounded bg-white/10" />
        <div className="h-3 w-1/2 rounded bg-white/10" />
        <div className="h-16 rounded-2xl bg-white/5 border border-white/10" />
      </div>
    </div>
  );
}
