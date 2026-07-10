import { useState } from 'react';
import { Mic } from 'lucide-react';
import { VoiceQuoteDemoModal } from './VoiceQuoteDemoModal';
import { iosLanding } from '../ios-product-landing/ios-landing-tokens';
import { AnimateIn } from '../animate-in';

type Props = {
  /** Controlled open from hero CTA */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** When true, render the homepage section band */
  showSection?: boolean;
};

/**
 * Public try-it voice-to-quote demo — modal + optional homepage section.
 * Audio goes to Supabase edge function (Deepgram + demo catalogue). Never exposes API keys.
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
        <section id="try-it" className="bg-white py-16 md:py-24 lg:py-32 scroll-mt-24">
          <div className={iosLanding.container}>
            <AnimateIn direction="up" className="text-center max-w-2xl mx-auto">
              <p className={`${iosLanding.eyebrow} !text-slate-400 mb-3`}>Try it live</p>
              <h2 className={`${iosLanding.heroHeadline} text-brand mb-3`}>
                <span className="block">30 SECONDS</span>
                <span className="block text-accent">TO A QUOTE</span>
              </h2>
              <p className="font-body text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                Hear it. Speak it. See it priced — with the same GST maths you&apos;ll use on real jobs.
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
                Free · No account · Uses demo rates until you upload yours
              </p>
            </AnimateIn>
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
