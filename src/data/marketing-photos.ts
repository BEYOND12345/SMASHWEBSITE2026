import type { StoryPhoto } from './ios-landing-spec';

export type MarketingPhotoBg = StoryPhoto & { tint?: number };

/** Default field/tradie backdrop — wide hero (driver + dash phone mount). */
export const MARKETING_HERO_PHOTO: MarketingPhotoBg = {
  src: '/product/home/hero-tradie-car.png',
  alt: 'Tradie in his ute with SMASH on the dash phone mount',
  focus: '50% 45%',
  tint: 58,
  coverScaleFactor: 1,
};

/** Desk / Gmail workflow placeholder — swap when Gmail-specific shots land. */
export const MARKETING_DESK_PHOTO: MarketingPhotoBg = {
  src: '/product/gmail/photos/demo.jpg',
  alt: '',
  focus: '68% 38%',
  tint: 52,
};
