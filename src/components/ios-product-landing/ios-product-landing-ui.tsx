import type { ReactNode } from 'react';
import { Apple } from 'lucide-react';
import { AnimateIn } from '../animate-in';
import { MockupFrame, ScaledPhone } from '../phone-showcase';
import {
  iosStoryCopyCellClass,
  iosStoryGridClass,
  iosStoryMediaCellClass,
} from './ios-landing-tokens';
import type { IosAppStory } from '../../data/ios-app-landing';

/** Shared tokens from smash-templates — product-shot typography + surfaces. */
export const iosProduct = {
  section: 'relative bg-brand overflow-hidden',
  glow:
    'pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(140vw,900px)] aspect-square rounded-full bg-[radial-gradient(circle,rgba(200,255,0,0.16)_0%,rgba(200,255,0,0.05)_38%,rgba(15,23,42,0)_66%)]',
  eyebrow:
    'font-display-italic font-black uppercase tracking-[0.12em] text-accent text-[11px] sm:text-xs md:text-sm mb-3 md:mb-4',
  headline:
    'font-display-italic font-black uppercase tracking-[-0.03em] leading-[0.84] text-white text-[clamp(2rem,8vw,4.5rem)]',
  headlineOnLight:
    'font-display-italic font-black uppercase tracking-[-0.03em] leading-[0.84] text-brand text-[clamp(2rem,7vw,4rem)]',
  headlineLime: 'text-accent',
  body: 'font-body text-brand-subtle font-semibold leading-[1.55]',
  bodyOnLight: 'font-body text-brand/65 font-medium leading-[1.6]',
  primaryCta:
    'inline-flex items-center justify-center gap-2 rounded-full bg-accent text-brand font-black uppercase tracking-widest hover:brightness-95 transition-all animate-pulse-glow px-8 py-4 text-sm',
  secondaryCta:
    'inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 text-white font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-brand transition-all px-8 py-4',
} as const;

export function IosProductGlow({ className = '' }: { className?: string }) {
  return <div aria-hidden className={`${iosProduct.glow} ${className}`.trim()} />;
}

type HeadlineProps = {
  eyebrow: string;
  children: ReactNode;
  className?: string;
  centered?: boolean;
  onLight?: boolean;
};

export function IosProductHeadline({ eyebrow, children, className = '', centered = false, onLight = false }: HeadlineProps) {
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} ${className}`.trim()}>
      <p className={iosProduct.eyebrow}>{eyebrow}</p>
      <h2 className={onLight ? iosProduct.headlineOnLight : iosProduct.headline}>{children}</h2>
    </div>
  );
}

function IosStoryContent({ story }: { story: IosAppStory }) {
  const dark = story.dark ?? false;

  return (
    <>
      <p className={iosProduct.eyebrow}>{story.eyebrow}</p>
      <h2
        className={`${dark ? iosProduct.headline : iosProduct.headlineOnLight} mb-6 whitespace-pre-line`}
      >
        {story.title}
      </h2>
      <p className={`${dark ? iosProduct.body : iosProduct.bodyOnLight} text-base sm:text-lg mb-8 max-w-lg`}>
        {story.body}
      </p>
      <div className="space-y-3">
        {story.bullets.map(([title, body]) => (
          <div key={title} className="flex gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            <p className={`font-body text-sm font-medium leading-[1.5] ${dark ? 'text-white/65' : 'text-brand/65'}`}>
              <strong className={dark ? 'text-white' : 'text-brand'}>{title}:</strong> {body}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

/** Phone mockup with optional glow — no card ring/shadow wrapper. */
export function IosPhoneShowcase({ children, glow = true }: { children: ReactNode; glow?: boolean }) {
  return (
    <MockupFrame>
      <div className="relative flex items-center justify-center">
        {glow && <IosProductGlow className="opacity-80" />}
        <ScaledPhone scaleClassName="relative z-10 scale-100 sm:scale-110" float="none">
          {children}
        </ScaledPhone>
      </div>
    </MockupFrame>
  );
}

export function IosStorySection({
  story,
  mockup,
  imageFirst,
}: {
  story: IosAppStory;
  mockup: ReactNode;
  imageFirst: boolean;
}) {
  const dark = story.dark ?? false;

  return (
    <section
      id={story.id}
      className={`${dark ? 'bg-brand' : 'bg-white'} py-16 md:py-28 overflow-hidden scroll-mt-20`}
      aria-labelledby={`ios-story-${story.id}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className={iosStoryGridClass}>
          <AnimateIn
            direction="left"
            className={`${imageFirst ? iosStoryMediaCellClass : iosStoryCopyCellClass} ${imageFirst ? 'order-2 lg:order-1' : ''}`}
          >
            {imageFirst ? (
              <IosPhoneShowcase>{mockup}</IosPhoneShowcase>
            ) : (
              <div>
                <h2 id={`ios-story-${story.id}`} className="sr-only">
                  {story.eyebrow}: {story.title.replace(/\n/g, ' ')}
                </h2>
                <IosStoryContent story={story} />
              </div>
            )}
          </AnimateIn>
          <AnimateIn
            direction="right"
            className={`${imageFirst ? iosStoryCopyCellClass : iosStoryMediaCellClass} ${imageFirst ? 'order-1 lg:order-2' : ''}`}
          >
            {imageFirst ? (
              <div>
                <h2 id={`ios-story-${story.id}`} className="sr-only">
                  {story.eyebrow}: {story.title.replace(/\n/g, ' ')}
                </h2>
                <IosStoryContent story={story} />
              </div>
            ) : (
              <IosPhoneShowcase>{mockup}</IosPhoneShowcase>
            )}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

export function IosAppStoreCta({
  href,
  label = 'Download on the App Store — Free',
  size = 'md',
  className = '',
}: {
  href: string;
  label?: string;
  size?: 'md' | 'lg';
  className?: string;
}) {
  const sizeClass = size === 'lg' ? 'px-10 py-4 text-base' : 'px-8 py-4 text-sm';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${iosProduct.primaryCta} ${sizeClass} ${className}`.trim()}
    >
      <Apple size={size === 'lg' ? 20 : 18} strokeWidth={2.5} />
      {label}
    </a>
  );
}
