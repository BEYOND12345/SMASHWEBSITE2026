import { Chrome, Quote, Star } from 'lucide-react';
import type { ReactNode } from 'react';
import { AnimateIn } from '../animate-in';
import { CHROME_STORE_RATING } from '../../data/download-urls';
import { EdgeLogoMark } from '../icons/EdgeLogoMark';

/** Shared tokens for Gmail / Chrome extension landing pages. */
export const chromeLanding = {
  eyebrow: 'font-display font-black text-[11px] uppercase tracking-[0.2em]',
  sectionTitle: 'font-sans font-black uppercase tracking-tighter leading-[0.88]',
  featuredQuote: 'font-display text-2xl md:text-3xl uppercase tracking-tighter leading-[0.95] text-brand',
  primaryCta:
    'inline-flex items-center justify-center gap-2 rounded-full bg-accent text-brand font-black uppercase tracking-widest hover:brightness-95 transition-all animate-pulse-glow whitespace-nowrap',
  secondaryCtaOnDark:
    'inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-brand transition-all',
  testimonialCard: 'bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3 h-full',
  dotPattern:
    'pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_#C8FF00_1px,_transparent_1px)] bg-[length:24px_24px]',
} as const;

export type ChromeTestimonial = {
  quote: string;
  name: string;
  city: string;
  role?: string;
  trade?: string;
};

type EyebrowVariant = 'muted' | 'accent' | 'onDark';

export function ChromeLandingEyebrow({
  children,
  variant = 'muted',
  className = '',
}: {
  children: ReactNode;
  variant?: EyebrowVariant;
  className?: string;
}) {
  const tone =
    variant === 'accent' ? 'text-accent' : variant === 'onDark' ? 'text-white/30' : 'text-brand/40';

  return (
    <p className={`${chromeLanding.eyebrow} mb-4 ${tone} ${className}`.trim()}>{children}</p>
  );
}

const primaryCtaSize = {
  sm: 'px-8 py-4 text-sm',
  md: 'px-8 py-4 text-sm',
  lg: 'px-10 py-4 text-base',
} as const;

const browserInstallBtnSize = {
  sm: 'h-12 px-6 text-sm',
  md: 'h-[52px] px-8 text-sm',
  lg: 'h-14 px-10 text-base',
} as const;

/** Shared pill geometry — Chrome + Edge install buttons must match. */
export const browserInstallBtnBase =
  'inline-flex items-center justify-center gap-2 rounded-full font-black uppercase tracking-widest whitespace-nowrap transition-all shrink-0';

export function ChromePrimaryCta({
  href,
  label,
  size = 'md',
  className = '',
  matched = false,
}: {
  href: string;
  label: string;
  size?: keyof typeof browserInstallBtnSize;
  className?: string;
  /** When true, uses shared sizing with EdgeInstallCta (Gmail landing pair). */
  matched?: boolean;
}) {
  const sizing = matched ? browserInstallBtnBase : chromeLanding.primaryCta;
  const sizeClass = matched ? browserInstallBtnSize[size] : primaryCtaSize[size];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${sizing} ${sizeClass} ${matched ? 'bg-accent text-brand hover:brightness-95 animate-pulse-glow' : ''} ${className}`.trim()}
    >
      <Chrome size={size === 'lg' ? 18 : 17} strokeWidth={2.5} className="shrink-0" />
      {label}
    </a>
  );
}

/** Edge Add-ons install — matched pill sizing with ChromePrimaryCta. */
export function EdgeInstallCta({
  href,
  label,
  size = 'md',
  className = '',
  matched = false,
}: {
  href: string;
  label: string;
  size?: keyof typeof browserInstallBtnSize;
  className?: string;
  matched?: boolean;
}) {
  const iconSize = size === 'lg' ? 18 : 17;

  if (matched) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${browserInstallBtnBase} ${browserInstallBtnSize[size]} bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 ${className}`.trim()}
      >
        <EdgeLogoMark size={iconSize + 2} className="shrink-0" />
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${chromeLanding.secondaryCtaOnDark} ${primaryCtaSize[size]} whitespace-nowrap ${className}`.trim()}
    >
      <EdgeLogoMark size={iconSize + 2} className="shrink-0" />
      {label}
    </a>
  );
}

export function StarRating({
  size = 12,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`.trim()} aria-hidden>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} className="text-accent fill-accent" />
      ))}
    </span>
  );
}

function testimonialAttribution({ name, role, trade, city }: ChromeTestimonial) {
  const line = role ?? trade ?? '';
  return `${name} · ${line} · ${city}`;
}

export function TestimonialGridSection({
  eyebrow,
  items,
  chromeStoreUrl,
  showStoreRating = false,
  className = '',
}: {
  eyebrow: string;
  items: ChromeTestimonial[];
  chromeStoreUrl?: string;
  showStoreRating?: boolean;
  className?: string;
}) {
  return (
    <section className={`py-16 md:py-20 border-t border-white/10 ${className.includes('bg-transparent') ? '' : 'bg-brand'} ${className}`.trim()}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <AnimateIn direction="up">
          <p className={`${chromeLanding.eyebrow} text-white/30 mb-8 text-center`}>{eyebrow}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map(({ quote, name, role, trade, city }) => (
              <figure key={name} className={chromeLanding.testimonialCard}>
                <StarRating size={12} />
                <blockquote className="font-body text-sm text-white/75 font-medium leading-[1.55] italic flex-1">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="font-display text-xs uppercase tracking-wider text-white/40">
                  {testimonialAttribution({ quote, name, role, trade, city })}
                </figcaption>
              </figure>
            ))}
          </div>

          {showStoreRating && chromeStoreUrl && (
            <ChromeStoreRatingLink href={chromeStoreUrl} className="mt-10" />
          )}
        </AnimateIn>
      </div>
    </section>
  );
}

export function FeaturedTestimonialSection({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <section className="bg-surface py-16 md:py-20 relative overflow-hidden border-t border-border/60">
      <div className={chromeLanding.dotPattern} aria-hidden />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <AnimateIn direction="up">
          <div className="flex items-center justify-center gap-1 mb-5">
            <StarRating size={16} />
          </div>
          <Quote size={28} className="text-brand/30 mx-auto mb-4" strokeWidth={2} aria-hidden />
          <blockquote>
            <p className={`${chromeLanding.featuredQuote} mb-6`}>&ldquo;{quote}&rdquo;</p>
            <footer className="font-body text-brand/50 text-sm">{attribution}</footer>
          </blockquote>
        </AnimateIn>
      </div>
    </section>
  );
}

export function ChromeStoreRatingLink({
  href,
  className = '',
  variant = 'dark',
}: {
  href: string;
  className?: string;
  variant?: 'dark' | 'light';
}) {
  const tone = variant === 'dark' ? 'text-white/50 hover:text-white/70' : 'text-brand/50 hover:text-brand/70';

  return (
    <p className={`text-center ${className}`.trim()}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 font-body text-sm font-semibold transition-colors ${tone}`}
      >
        <span className="inline-flex items-center gap-2">
          <StarRating size={12} />
          <span>
            {CHROME_STORE_RATING.ratingValue} average · {CHROME_STORE_RATING.reviewCount} Chrome Web Store reviews
          </span>
        </span>
      </a>
    </p>
  );
}
