import { ArrowRight } from 'lucide-react';
import { iosLanding } from '../ios-product-landing/ios-landing-tokens';

export type GmailStoryCalloutStep = {
  step: number;
  verb: string;
  sub?: string;
  showArrow?: boolean;
};

/**
 * Dark numbered step chip — sits with the copy and points at the UI proof.
 * The arrow always aims at the card: right/left on desktop (depending which side the
 * card is on), and down on mobile where the card stacks beneath the text.
 */
export function GmailStoryStepCallout({
  step,
  verb,
  direction = 'right',
}: {
  step: number;
  verb: string;
  direction?: 'right' | 'left';
}) {
  return (
    <div className="relative inline-flex">
      <div
        aria-hidden
        className="absolute -inset-1 rounded-full bg-accent/10 blur-md opacity-70"
      />
      <div className="relative flex items-center gap-2 rounded-full bg-[#0A1119] border border-white/[0.06] pl-1.5 pr-3 py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.32)]">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent font-display-italic font-black text-brand text-xs leading-none">
          {step}
        </span>
        <p className="font-display-italic font-black uppercase tracking-tight text-white text-[11px] leading-none whitespace-nowrap">
          {verb}
        </p>
        <ArrowRight
          size={13}
          strokeWidth={2.75}
          aria-hidden
          className={`shrink-0 text-accent rotate-90 ${
            direction === 'left' ? 'lg:order-first lg:rotate-180' : 'lg:rotate-0'
          }`}
        />
      </div>
    </div>
  );
}

/** Compact lime strip — replaces heavy navy before/after block. */
export function GmailContrastStrip({
  eyebrow,
  headlineWhite,
  headlineLime,
  proof,
}: {
  eyebrow: string;
  headlineWhite: string;
  headlineLime: string;
  proof: string;
}) {
  return (
    <section className="bg-accent py-10 md:py-14 border-y border-brand/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <p className="text-xs font-black uppercase tracking-widest text-brand/50 mb-3">{eyebrow}</p>
        <p className="font-display-italic font-black uppercase tracking-tighter text-[clamp(1.75rem,4.5vw,2.75rem)] leading-[0.88] text-brand mb-4">
          <span className="block">{headlineWhite}</span>
          <span className="block">{headlineLime}</span>
        </p>
        <p className="font-body text-sm sm:text-base text-brand/75 font-medium leading-[1.55] italic">{proof}</p>
      </div>
    </section>
  );
}

/** Blue connector between Story A and Story B — one tool, two audiences. */
export function GmailBothSidesStrap() {
  return (
    <section className="relative bg-brand border-y border-white/10 py-12 md:py-16 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"
      />
      <div className={`${iosLanding.container} relative z-10 text-center`}>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-accent mb-4">One tool · Two sides</p>
        <p className="font-display-italic font-black uppercase tracking-tighter text-[clamp(1.6rem,4vw,2.5rem)] leading-[0.9]">
          <span className="text-accent">Same tool. Both sides.</span>{' '}
          <span className="text-white">What they send is what you receive.</span>
        </p>
      </div>
    </section>
  );
}
