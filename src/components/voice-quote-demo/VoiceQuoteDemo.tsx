import { useState } from 'react';
import { Mic } from 'lucide-react';
import { VoiceQuoteDemoModal } from './VoiceQuoteDemoModal';
import { VoiceQuoteDemoScreen, type DemoPhase } from './VoiceQuoteDemoScreen';
import { DEMO_PREVIEW_QUOTE, DEMO_PREVIEW_TRANSCRIPT } from './QuoteResult';
import { iosLanding } from '../ios-product-landing/ios-landing-tokens';
import { AnimateIn } from '../animate-in';

type Props = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  showSection?: boolean;
};

const SECTION_EXAMPLES = [
  'Gutters · two-storey',
  'Lawn + garden cleanup',
  'Kitchen tap + fittings',
] as const;

/**
 * Public try-it voice-to-quote demo — modal + optional homepage section.
 */
export function VoiceQuoteDemo({ open: controlledOpen, onOpenChange, showSection = true }: Props) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = (next: boolean) => {
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  };

  return (
    <>
      {showSection && (
        <section id="try-it" className="relative bg-[#F4F6F9] py-16 md:py-24 lg:py-28 scroll-mt-24 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(223,255,0,0.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(15,23,42,0.08), transparent 35%)',
            }}
          />
          <div className={`${iosLanding.container} relative`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <AnimateIn direction="left" directionMobile="up" className="lg:col-span-5 text-center lg:text-left">
                <p className={`${iosLanding.eyebrow} !text-slate-400 mb-3`}>Try it live</p>
                <h2 className={`${iosLanding.heroHeadline} text-brand mb-4`}>
                  <span className="block">30 SECONDS</span>
                  <span className="block text-accent">TO A QUOTE</span>
                </h2>
                <p className="font-body text-base md:text-lg text-slate-600 leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
                  Speak the job. See line items, GST, and a total — then download the app and upload
                  your own rates.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center gap-2 min-h-[52px] rounded-full bg-brand text-accent font-black text-sm uppercase tracking-widest px-8 py-4 hover:brightness-110 active:scale-[0.98] transition-all touch-manipulation shadow-lg"
                >
                  <Mic className="w-5 h-5" strokeWidth={2.5} />
                  Try It Now
                </button>
                <p className="font-body text-sm text-slate-400 mt-4">
                  Free · No account · Demo rates until you upload yours
                </p>
                <ul className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
                  {SECTION_EXAMPLES.map((ex) => (
                    <li
                      key={ex}
                      className="font-body text-xs font-semibold text-slate-500 bg-white border border-slate-200 rounded-full px-3 py-1.5"
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
              </AnimateIn>

              <AnimateIn direction="right" directionMobile="up" className="lg:col-span-7 flex justify-center">
                <div className="w-full max-w-[340px] scale-[0.92] sm:scale-100 origin-top">
                  <VoiceQuoteDemoScreen
                    phase="ready"
                    typedJob=""
                    preview
                  />
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>
      )}

      <VoiceQuoteDemoModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export function TryItNowButton({
  onClick,
  className = '',
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 min-h-[48px] rounded-full border-2 border-white/25 text-white font-bold text-sm uppercase tracking-wide px-7 py-4 hover:bg-white hover:text-brand active:scale-[0.98] transition-all whitespace-nowrap touch-manipulation ${className}`.trim()}
    >
      <Mic className="w-4 h-4" strokeWidth={2.5} />
      Try It Now
    </button>
  );
}

const REVIEW_STATES: { id: DemoPhase; label: string; note: string }[] = [
  {
    id: 'ready',
    label: 'Ready',
    note: 'First impression — headline, mic CTA, typed fallback.',
  },
  {
    id: 'recording',
    label: 'Recording',
    note: 'Live listen panel — timer, REC, waveform on brand green.',
  },
  {
    id: 'listening',
    label: 'Listening',
    note: 'Post-stop — transcribing state before pricing.',
  },
  {
    id: 'building',
    label: 'Building',
    note: 'Pricing the job — same panel, different label.',
  },
  {
    id: 'result',
    label: 'Result',
    note: 'Heard text, line items, GST total, caveat, App Store CTA.',
  },
  {
    id: 'error',
    label: 'Error',
    note: 'Graceful fail — clear message + type fallback still available.',
  },
];

/** Internal design-review: flip through every phone state without the API. */
export function VoiceQuoteDemoDesignReview() {
  const [phase, setPhase] = useState<DemoPhase>('ready');
  const active = REVIEW_STATES.find((s) => s.id === phase)!;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-start">
      <div className="xl:col-span-4 space-y-6">
        <div>
          <p className="font-display text-[11px] uppercase tracking-[0.22em] text-accent mb-2">
            Design review
          </p>
          <h2 className={`${iosLanding.heroHeadline} text-white text-[clamp(2rem,4vw,3.25rem)]`}>
            <span className="block">EVERY STATE.</span>
            <span className="block text-accent">ONE PHONE.</span>
          </h2>
          <p className="font-body text-white/65 mt-3 leading-relaxed">
            Flip states and mark what to change. No mic or Deepgram needed for this view.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {REVIEW_STATES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setPhase(s.id)}
              className={`min-h-[40px] px-4 rounded-full font-display text-xs uppercase tracking-wide transition-colors touch-manipulation ${
                phase === s.id
                  ? 'bg-accent text-brand'
                  : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
          <p className="font-display text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
            Looking at · {active.label}
          </p>
          <p className="font-body text-sm text-white/70 leading-relaxed">{active.note}</p>
        </div>

        <ul className="space-y-2 font-body text-sm text-white/50">
          <li>• Does the phone feel like SMASH (not a generic modal)?</li>
          <li>• Is the record → result path obvious?</li>
          <li>• Is the caveat clear without killing the win?</li>
          <li>• Mobile at 375px — anything cramped?</li>
        </ul>
      </div>

      <div className="xl:col-span-8 flex justify-center xl:justify-end">
        <VoiceQuoteDemoScreen
          phase={phase}
          elapsed={phase === 'recording' ? 9 : 0}
          error={
            phase === 'error' ? "Couldn't hear that clearly — try again" : null
          }
          transcript={DEMO_PREVIEW_TRANSCRIPT}
          quote={DEMO_PREVIEW_QUOTE}
          typedJob={phase === 'ready' || phase === 'error' ? '' : ''}
          preview
        />
      </div>
    </div>
  );
}
