import type { ReactNode } from 'react';
import { AnimateIn } from '../animate-in';
import { iosLanding } from '../ios-product-landing/ios-landing-tokens';
import { DualProductCtas } from './DualProductCtas';
import { MarketingPhotoHero } from './MarketingPhotoHero';

type Props = {
  eyebrow: string;
  headline: ReactNode;
  subline: string;
  /** Small trust line under subline (e.g. "10% GST · ATO compliant") */
  meta?: ReactNode;
  showCtas?: boolean;
  secondary?: Parameters<typeof DualProductCtas>[0]['secondary'];
};

/** Hero for free tools / calculators — photo backdrop + unified dual CTAs. */
export function ToolPageHero({ eyebrow, headline, subline, meta, showCtas = true, secondary }: Props) {
  return (
    <MarketingPhotoHero contentClassName="pt-20 pb-16 md:pt-28 md:pb-24">
      <AnimateIn direction="up">
        <p className={`${iosLanding.eyebrow} mb-5`}>{eyebrow}</p>
        <h1 className={`${iosLanding.heroHeadline} mb-6 max-w-4xl`}>{headline}</h1>
        <p className={`${iosLanding.subline} mb-8 !text-white/65 !max-w-2xl`}>{subline}</p>
        {meta && (
          <div className="font-body text-xs text-white/40 font-medium mb-8 -mt-4 max-w-2xl">{meta}</div>
        )}
        {showCtas && <DualProductCtas secondary={secondary} />}
      </AnimateIn>
    </MarketingPhotoHero>
  );
}
