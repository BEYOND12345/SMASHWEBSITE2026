import type { ReactNode } from 'react';
import type { StoryPhoto } from '../../data/ios-landing-spec';
import { IosStoryPhotoCover } from '../ios-product-landing/IosStoryPhotoCover';
import { brandPhotoScrim } from '../ios-product-landing/photo-scrim';
import { iosLanding } from '../ios-product-landing/ios-landing-tokens';

type Props = {
  photo: StoryPhoto;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tint?: number;
  /** 'horizontal' — copy left (desktop story rows); 'vertical' — centered bands. */
  scrim?: 'horizontal' | 'vertical';
};

function scrimStyle(tint: number, mode: 'horizontal' | 'vertical'): React.CSSProperties {
  return brandPhotoScrim(tint, mode);
}

/** Full-bleed field photo + brand scrim — alternating “photo” band in page rhythm. */
export function BrandPhotoBand({
  photo,
  children,
  className = '',
  containerClassName = '',
  tint = photo.tint ?? 52,
  scrim = 'horizontal',
}: Props) {
  return (
    <section className={`relative bg-brand py-16 md:py-28 overflow-hidden ${className}`.trim()}>
      <IosStoryPhotoCover photo={photo} variant="fullBleed" />
      <div aria-hidden className="absolute inset-0 z-[1]" style={scrimStyle(tint, scrim)} />
      <div className={`${iosLanding.container} relative z-10 ${containerClassName}`.trim()}>{children}</div>
    </section>
  );
}

/** Solid navy band — alternating “blue” row (no white). */
export function BrandSolidBand({
  children,
  className = '',
  containerClassName = '',
  compact = false,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  compact?: boolean;
}) {
  return (
    <section
      className={`relative bg-brand overflow-hidden border-t border-white/10 ${compact ? 'py-10 md:py-14' : 'py-16 md:py-28'} ${className}`.trim()}
    >
      <div className={`${iosLanding.container} relative z-10 ${containerClassName}`.trim()}>{children}</div>
    </section>
  );
}
