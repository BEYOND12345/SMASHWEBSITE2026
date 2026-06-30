import { AnimateIn } from '../animate-in';
import { HomePhoneCard } from './HomeProductMedia';
import type { IosStoryScreenId } from '../../data/ios-landing-spec';
import type { IosStoryCalloutId } from '../ios-product-landing/IosStoryCallout';

/**
 * Beat 5 — outcomes as things that already happened, each shown on the real
 * App Store showcase (clipped screen + grounded callout) — same UI as the iOS
 * product page. All four are confirmed live.
 */
const PROOFS: { screen: IosStoryScreenId; callout: IosStoryCalloutId; label: string }[] = [
  { screen: 'pay', callout: 'pay', label: 'They approve and pay from the link.' },
  { screen: 'readreceipts', callout: 'readreceipts', label: 'You see the second they open it.' },
  { screen: 'quote', callout: 'quote', label: 'It lands as a clean branded PDF.' },
  { screen: 'integrations', callout: 'integrations', label: 'Straight into your books.' },
];

export function MissionOutcomeProofs() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-4">
      {PROOFS.map((proof, i) => (
        <AnimateIn key={proof.label} direction="up" delay={i * 80}>
          <div className="flex h-full flex-col items-center gap-2 text-center">
            <HomePhoneCard
              screen={proof.screen}
              calloutId={proof.callout}
              size={220}
              surface="dark"
            />
            <p className="font-body text-base font-semibold text-white/85 leading-snug max-w-[15rem]">
              {proof.label}
            </p>
          </div>
        </AnimateIn>
      ))}
    </div>
  );
}
