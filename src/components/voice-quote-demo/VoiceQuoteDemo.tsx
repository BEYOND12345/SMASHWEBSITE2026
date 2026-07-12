import { useState } from 'react';
import { Mic } from 'lucide-react';
import { VoiceQuoteDemoModal } from './VoiceQuoteDemoModal';
import {
  VoiceQuoteDemoScreen,
  APP_PREVIEW_QUOTE,
  type AppDemoPhase,
} from './VoiceQuoteDemoScreen';
import { iosLanding } from '../ios-product-landing/ios-landing-tokens';
import { AnimateIn } from '../animate-in';

type Props = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  showSection?: boolean;
};

/**
 * Public try-it voice-to-quote demo — modal + optional homepage section.
 * UI matches SMASHAPP screens 11–14 (design-handoff).
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
        <section id="try-it" className="relative bg-[#FAFAFA] py-16 md:py-24 lg:py-28 scroll-mt-24 overflow-hidden">
          <div className={`${iosLanding.container} relative`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <AnimateIn direction="left" directionMobile="up" className="lg:col-span-5 text-center lg:text-left">
                <p className={`${iosLanding.eyebrow} !text-slate-400 mb-3`}>Try it live</p>
                <h2 className={`${iosLanding.heroHeadline} text-brand mb-4`}>
                  <span className="block">30 SECONDS</span>
                  <span className="block text-accent">TO A QUOTE</span>
                </h2>
                <p className="font-body text-base md:text-lg text-slate-600 leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
                  Same Voice Assistant as the iPhone app — speak the job, watch the checklist fill,
                  get a priced quote.
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
              </AnimateIn>

              {/* Desktop only — phone teaser. Mobile uses CTA → full-bleed sheet. */}
              <AnimateIn
                direction="right"
                directionMobile="up"
                className="hidden lg:flex lg:col-span-7 justify-center lg:justify-end"
              >
                <div className="w-full max-w-[340px] scale-95 origin-top pointer-events-none">
                  <VoiceQuoteDemoScreen phase="idle" preview shell="phone" />
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

const REVIEW_STATES: { id: AppDemoPhase; label: string; handoff: string; note: string }[] = [
  {
    id: 'idle',
    label: '11 Idle',
    handoff: '11-voice-idle',
    note: 'Cancel header · dark Voice Assistant card · empty checklist · navy FAB with lime play.',
  },
  {
    id: 'recording',
    label: '12 Recording',
    handoff: '12-voice-recording',
    note: 'Listening + timer + REC · waveform · checklist filling · pause FAB + sonic rings.',
  },
  {
    id: 'processing',
    label: '13 Processing',
    handoff: '13-voice-processing',
    note: 'Processing… / Building... · spinner · checklist complete · FAB disabled.',
  },
  {
    id: 'result',
    label: '14 Preview',
    handoff: '14-quote-preview',
    note: 'Estimate preview — Breakdown table, GST totals, Start Free CTA.',
  },
  {
    id: 'error',
    label: 'Error',
    handoff: '—',
    note: 'Rose error banner + type fallback (web-only escape hatch).',
  },
];

/** Internal design-review against SMASHAPP screens 11–14. */
export function VoiceQuoteDemoDesignReview() {
  const [phase, setPhase] = useState<AppDemoPhase>('idle');
  const active = REVIEW_STATES.find((s) => s.id === phase)!;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-start">
      <div className="xl:col-span-4 space-y-6">
        <div>
          <p className="font-display text-[11px] uppercase tracking-[0.22em] text-accent mb-2">
            Match live app
          </p>
          <h2 className={`${iosLanding.heroHeadline} text-white text-[clamp(2rem,4vw,3.25rem)]`}>
            <span className="block">SCREENS</span>
            <span className="block text-accent">11 → 14</span>
          </h2>
          <p className="font-body text-white/65 mt-3 leading-relaxed text-sm">
            Pixel-faithful recreation of{' '}
            <code className="text-accent text-xs">voicerecorder.tsx</code> →{' '}
            <code className="text-accent text-xs">estimatepreview.tsx</code> from SMASHAPP
            design-handoff.
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
          <p className="font-display text-[10px] uppercase tracking-[0.2em] text-accent mb-1">
            {active.handoff}
          </p>
          <p className="font-body text-sm text-white/70 leading-relaxed">{active.note}</p>
        </div>

        <ul className="space-y-2 font-body text-sm text-white/45">
          <li>• Canvas #FAFAFA · status card #0A0E17 · accent #DFFF00</li>
          <li>• Checklist labels match app (Job address → Fees)</li>
          <li>• FAB = navy circle + lime play / pause bars</li>
          <li>• Preview = Breakdown + Totals like estimatepreview</li>
        </ul>
      </div>

      <div className="xl:col-span-8 flex justify-center xl:justify-end">
        <VoiceQuoteDemoScreen
          phase={phase}
          elapsed={phase === 'recording' ? 9 : 0}
          error={phase === 'error' ? "Couldn't hear that clearly — try again" : null}
          quote={APP_PREVIEW_QUOTE}
          preview
        />
      </div>
    </div>
  );
}
