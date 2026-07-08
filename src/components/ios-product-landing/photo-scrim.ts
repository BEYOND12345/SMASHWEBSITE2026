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
