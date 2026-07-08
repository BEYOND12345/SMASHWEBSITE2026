import type { CSSProperties } from 'react';

const BRAND_RGB = '15, 23, 42';
/** Subtle blue wash over field photography — keeps brand navy readable. */
const BLUE_WASH_RGB = '30, 58, 95';

function blueWash(opacity = 0.2): string {
  return `linear-gradient(rgba(${BLUE_WASH_RGB}, ${opacity}), rgba(${BLUE_WASH_RGB}, ${opacity}))`;
}

/** Navy scrim + blue wash for hero bands, testimonials, and story rows. */
export function brandPhotoScrim(
  tint: number,
  mode: 'horizontal' | 'vertical',
  flipHorizontal = false,
): CSSProperties {
  const t = tint / 100;

  if (mode === 'vertical') {
    const navy = `linear-gradient(180deg, rgba(${BRAND_RGB},${Math.min(t + 0.22, 0.94)}) 0%, rgba(${BRAND_RGB},${t}) 55%, rgba(${BRAND_RGB},${Math.max(t - 0.08, 0.72)}) 100%)`;
    return { background: `${blueWash()}, ${navy}` };
  }

  const direction = flipHorizontal ? '270deg' : '90deg';
  const navy = `linear-gradient(${direction}, rgba(${BRAND_RGB},${Math.min(tint + 28, 92) / 100}) 0%, rgba(${BRAND_RGB},${t}) 45%, rgba(${BRAND_RGB},${Math.max(tint - 28, 12) / 100}) 100%)`;
  return { background: `${blueWash()}, ${navy}` };
}

/** Hero mobile top-band fade — blue wash over the photo strip. */
export function heroMobilePhotoScrim(tint: number): CSSProperties {
  const t = tint / 100;
  const navy = `linear-gradient(180deg, rgba(${BRAND_RGB},${t + 0.12}) 0%, rgba(${BRAND_RGB},${Math.min(t + 0.38, 0.96)}) 32%, rgb(15,23,42) 48%)`;
  return { background: `${blueWash(0.18)}, ${navy}` };
}

/** Stacked story row — copy on top, photo band behind the phone below. */
export function storyStackedScrimCopyTop(tint: number): CSSProperties {
  const t = tint / 100;
  const navy = `linear-gradient(180deg, rgb(${BRAND_RGB}) 0%, rgb(${BRAND_RGB}) 36%, rgba(${BRAND_RGB},${Math.min(t + 0.32, 0.9)}) 50%, rgba(${BRAND_RGB},${t}) 64%, rgba(${BRAND_RGB},${Math.max(t - 0.18, 0.52)}) 100%)`;
  return { background: `${blueWash(0.14)}, ${navy}` };
}

/** Stacked story row — phone on top, copy below over a heavier lower wash. */
export function storyStackedScrimCopyBottom(tint: number): CSSProperties {
  const t = tint / 100;
  const navy = `linear-gradient(180deg, rgba(${BRAND_RGB},${Math.max(t - 0.14, 0.48)}) 0%, rgba(${BRAND_RGB},${t}) 34%, rgba(${BRAND_RGB},${Math.min(t + 0.34, 0.92)}) 56%, rgb(${BRAND_RGB}) 70%, rgb(${BRAND_RGB}) 100%)`;
  return { background: `${blueWash(0.14)}, ${navy}` };
}

/** Centered content bands (testimonials, final CTA) — stronger mid wash on narrow viewports. */
export function brandStackedVerticalScrim(tint: number): CSSProperties {
  const t = tint / 100;
  const navy = `linear-gradient(180deg, rgba(${BRAND_RGB},${Math.min(t + 0.26, 0.93)}) 0%, rgba(${BRAND_RGB},${Math.min(t + 0.42, 0.96)}) 40%, rgba(${BRAND_RGB},${Math.min(t + 0.38, 0.94)}) 60%, rgba(${BRAND_RGB},${Math.min(t + 0.2, 0.86)}) 100%)`;
  return { background: `${blueWash(0.22)}, ${navy}` };
}
