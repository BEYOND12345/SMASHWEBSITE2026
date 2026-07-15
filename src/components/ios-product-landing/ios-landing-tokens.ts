/** Typography + layout — aligned with chrome-landing-ui / max-w-6xl site grid. */
export const iosLanding = {
  page: 'bg-brand text-white min-h-screen',
  container: 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-12',

  kicker:
    'font-body font-bold uppercase tracking-[0.14em] text-brand-muted text-xs sm:text-sm',
  eyebrow:
    'font-display-italic font-black uppercase tracking-[0.16em] text-accent text-[11px] sm:text-xs leading-[1.35]',
  heroHeadline:
    'font-display-italic font-black uppercase tracking-[-0.03em] leading-[0.86] text-[clamp(2.5rem,6.5vw,5rem)] text-balance',
  sectionHeadline:
    'font-display-italic font-black uppercase tracking-[-0.03em] leading-[0.86] text-[clamp(2rem,5vw,3.75rem)] text-balance',
  /** Story rows — narrower measure so eyebrows and headlines wrap cleanly. */
  storyHeadline:
    'font-display-italic font-black uppercase tracking-[-0.03em] leading-[0.88] text-[clamp(1.75rem,4.5vw,2.75rem)] text-balance',
  storyEyebrow:
    'font-display-italic font-black uppercase tracking-[0.14em] text-accent text-[11px] sm:text-xs leading-[1.35] text-pretty max-w-[11.5rem] sm:max-w-[12.5rem]',
  subline: 'font-body text-base sm:text-lg text-brand-subtle font-medium leading-[1.45] max-w-md text-pretty',
  storySubline:
    'font-body text-[0.9375rem] sm:text-base text-brand-subtle font-medium leading-[1.45] text-pretty max-w-[19rem]',
  body: 'font-body text-base sm:text-lg text-brand-subtle font-medium leading-[1.55] max-w-lg',
  caption: 'font-body text-sm text-brand-muted font-medium',

  lime: 'text-accent',
  white: 'text-white',

  primaryCta:
    'inline-flex items-center justify-center min-h-[48px] rounded-full bg-accent text-brand font-black uppercase tracking-widest hover:brightness-95 active:scale-[0.98] transition-all shadow-glow hover:shadow-glow-lg px-8 py-4 text-sm whitespace-nowrap touch-manipulation',
  /** Ghost pill — pairs with primary; never a competing download. */
  secondaryCta:
    'inline-flex items-center justify-center min-h-[48px] rounded-full border-2 border-white/25 text-white font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-brand active:scale-[0.98] transition-all whitespace-nowrap px-6 sm:px-8 touch-manipulation',
  calloutCard:
    'bg-brand-deep rounded-[28px] shadow-[0_30px_70px_rgba(0,0,0,0.55)] p-6 sm:p-8 border border-white/[0.06]',
} as const;

export const IOS_PHONE_LOGICAL = { width: 900, height: 1240, radius: 72 } as const;

/** Display widths — story phones scaled ~25% down on two-column breakpoints so
 *  the composition never overlaps the copy. Mobile stacks single-column, so it
 *  keeps a comfortable size. Whole composition derives from these widths, so this
 *  is a pure uniform scale — no per-element design changes. */
export const IOS_PHONE_DISPLAY = {
  hero: { desktop: 360, tablet: 315, mobile: 228 },
  story: { desktop: 251, tablet: 225, mobile: 228 },
} as const;

export type IosShowcaseVariantId =
  | 'hero'
  | 'voice'
  | 'quote'
  | 'pricehub'
  | 'send'
  | 'readreceipts'
  | 'pay'
  | 'automessage'
  | 'integrations'
  | 'customers'
  | 'cardpayment';

export type IosShowcaseVariantConfig = {
  /** Top position of the callout as a ratio of phoneHeight (e.g. 940/1240 = 0.758). */
  calloutTopRatio: number;
  /** On mobile hero — clip height when callout is hidden (shows voice UI above fold). */
  mobileClipRatio?: number;
  contentScale: number;
  groundRatio: number;
  tailLogical: number;
  /** Shift iframe up (logical px) so the clip shows line items instead of empty chrome. */
  focusYOffset?: number;
  /** Scale story/hero display width for this variant (e.g. 1.2 = 20% larger phone). */
  phoneWidthScale?: number;
};

/** Per-composition tuning — aligned perfectly to App Store HTML files. */
export const IOS_SHOWCASE_VARIANTS: Record<IosShowcaseVariantId, IosShowcaseVariantConfig> = {
  hero: {
    calloutTopRatio: 940 / 1240,
    mobileClipRatio: 0.72,
    contentScale: 0.88,
    groundRatio: 1.07,
    tailLogical: 420,
  },
  voice: { calloutTopRatio: 940 / 1240, contentScale: 0.9, groundRatio: 1.07, tailLogical: 280 },
  quote: { calloutTopRatio: 980 / 1240, contentScale: 0.9, groundRatio: 1.07, tailLogical: 340 },
  pricehub: { calloutTopRatio: 950 / 1240, contentScale: 0.9, groundRatio: 1.07, tailLogical: 260 },
  send: {
    calloutTopRatio: 1060 / 1240,
    contentScale: 0.9,
    groundRatio: 1.07,
    tailLogical: 340,
    phoneWidthScale: 1.28,
  },
  readreceipts: { calloutTopRatio: 870 / 1240, contentScale: 0.9, groundRatio: 1.07, tailLogical: 280 },
  pay: { calloutTopRatio: 1010 / 1240, contentScale: 0.9, groundRatio: 1.07, tailLogical: 260 },
  automessage: { calloutTopRatio: 987 / 1240, contentScale: 0.9, groundRatio: 1.07, tailLogical: 260 },
  integrations: { calloutTopRatio: 997 / 1240, contentScale: 0.9, groundRatio: 1.07, tailLogical: 260 },
  customers: { calloutTopRatio: 800 / 1240, contentScale: 0.9, groundRatio: 1.07, tailLogical: 260 },
  cardpayment: { calloutTopRatio: 1010 / 1240, contentScale: 0.9, groundRatio: 1.07, tailLogical: 260 },
};

export function iosShowcaseVariant(id: IosShowcaseVariantId): IosShowcaseVariantConfig {
  return IOS_SHOWCASE_VARIANTS[id];
}

export function iosShowcaseTailSpace(
  phoneScale: number,
  variant: IosShowcaseVariantId,
): number {
  const cfg = IOS_SHOWCASE_VARIANTS[variant];
  const effectiveScale = phoneScale * cfg.contentScale;
  const min = variant === 'send' ? 20 : 48;
  return Math.max(Math.round(cfg.tailLogical * effectiveScale), min);
}

/** Story / hero grids — copy stays top-aligned; phone + callout anchor to the row bottom. */
export const iosStoryGridClass = 'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20';
export const iosStoryCopyCellClass = 'self-start w-full max-w-[21rem] sm:max-w-[22rem] lg:max-w-[23rem]';
export const iosStoryMediaCellClass = 'self-end w-full';

/** Mobile ad landing — headline, product proof, then CTA (centered on narrow viewports). */
export const iosHeroGridClass = 'grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-12';
export const iosHeroCopyCellClass = 'self-start order-1 text-center lg:text-left';
export const iosHeroMediaCellClass = 'self-end w-full order-2 flex justify-center lg:justify-end';
/** Mobile: headline → video + byline → CTA */
export const iosHeroMobileCtaCellClass = 'order-3 col-span-1 lg:hidden text-center pb-8 mt-1';
export const iosHeroDesktopCtaClass = 'hidden lg:block';
export const iosHeroMobileSublineClass = 'mx-auto lg:mx-0';
export const iosHeroMobileCtaWrapClass =
  'flex flex-col items-center lg:items-start [&_.flex]:justify-center lg:[&_.flex]:justify-start';

export type IosPhoneShowcaseSize = keyof typeof IOS_PHONE_DISPLAY;
export type IosPhoneSurface = 'light' | 'dark';

/** Extra zoom beyond object-cover minimum — prevents brand bg showing at edges when focus shifts. */
export const IOS_STORY_PHOTO_COVER_SCALE = {
  desktop: 1.22,
  tablet: 1.14,
  mobile: 1.06,
} as const;
