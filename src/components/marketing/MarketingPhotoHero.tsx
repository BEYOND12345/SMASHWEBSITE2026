import type { ReactNode } from 'react';
import { IosStoryPhotoCover } from '../ios-product-landing/IosStoryPhotoCover';
import { iosLanding } from '../ios-product-landing/ios-landing-tokens';
import { MARKETING_HERO_PHOTO, type MarketingPhotoBg } from '../../data/marketing-photos';

export type MarketingTintDirection = 'left' | 'right' | 'center';

export function marketingPhotoTintGradient(tint: number, direction: MarketingTintDirection = 'left'): string {
  if (direction === 'right') {
    return `linear-gradient(270deg, rgba(15,23,42,${Math.min(tint + 28, 92) / 100}) 0%, rgba(15,23,42,${tint / 100}) 45%, rgba(15,23,42,${Math.max(tint - 28, 12) / 100}) 100%)`;
  }
  if (direction === 'center') {
    return `linear-gradient(180deg, rgba(15,23,42,${Math.min(tint + 22, 88) / 100}) 0%, rgba(15,23,42,${tint / 100}) 50%, rgba(15,23,42,${Math.max(tint - 22, 14) / 100}) 100%)`;
  }
  return `linear-gradient(90deg, rgba(15,23,42,${Math.min(tint + 28, 92) / 100}) 0%, rgba(15,23,42,${tint / 100}) 45%, rgba(15,23,42,${Math.max(tint - 28, 12) / 100}) 100%)`;
}

type Props = {
  photo?: MarketingPhotoBg;
  tintDirection?: MarketingTintDirection;
  className?: string;
  contentClassName?: string;
  showGlow?: boolean;
  children: ReactNode;
};

/** Full-bleed navy hero with optional field photo — matches homepage / product pages. */
export function MarketingPhotoHero({
  photo = MARKETING_HERO_PHOTO,
  tintDirection = 'left',
  className = '',
  contentClassName = '',
  showGlow = true,
  children,
}: Props) {
  const tint = photo.tint ?? 58;

  return (
    <section className={`relative bg-brand overflow-hidden ${className}`.trim()}>
      <IosStoryPhotoCover photo={photo} variant="fullBleed" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: marketingPhotoTintGradient(tint, tintDirection) }}
      />
      {showGlow && (
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none hidden lg:block" />
      )}
      <div className={`${iosLanding.container} relative z-10 ${contentClassName}`.trim()}>{children}</div>
    </section>
  );
}
