import type { ReactNode } from 'react';
import { AnimateIn } from '../animate-in';
import { MockupFrame } from '../phone-showcase';
import { IosSpecHeadline } from './IosCalloutCard';
import { IosPhoneShowcase } from './IosPhoneShowcase';
import { IosStoryPhotoCover } from './IosStoryPhotoCover';
import {
  IOS_STORY_PHOTO_BG,
  type IosStorySegment,
} from '../../data/ios-landing-spec';
import {
  iosLanding,
  iosStoryCopyCellClass,
  iosStoryGridClass,
  iosStoryMediaCellClass,
} from './ios-landing-tokens';

type Props = {
  segment: IosStorySegment;
  imageFirst?: boolean;
  /** When true, full-bleed photo; when false, solid navy (photo / blue alternation). */
  photoBgEnabled?: boolean;
};

/** Chrome/Gmail-style alternating story row — unified phone showcase on every section. */
export function IosStorySection({
  segment,
  imageFirst = false,
  photoBgEnabled = true,
}: Props) {
  const photoBg = photoBgEnabled ? IOS_STORY_PHOTO_BG[segment.screen] : undefined;
  const copyDark = true;

  const copy = (
    <IosSpecHeadline
      eyebrow={segment.eyebrow}
      headlineWhite={segment.headlineWhite}
      headlineLime={segment.headlineLime}
      subline={segment.subline}
      dark={copyDark}
      sublineClassName={photoBg ? '!max-w-sm' : ''}
    />
  );

  const media = (
    <div className="relative w-full">
      <div className="relative z-10">
        <IosPhoneShowcase
          screen={segment.screen}
          calloutId={segment.id}
          size="story"
          surface="dark"
        />
      </div>
    </div>
  );

  const tint = photoBg?.tint ?? 55;

  return (
    <section className="relative bg-brand py-16 md:py-28 overflow-hidden">
      {photoBg && (
        <>
          <IosStoryPhotoCover photo={photoBg} variant="fullBleed" />
          <div
            aria-hidden
            className="absolute inset-0 z-[1]"
            style={{
              background: `linear-gradient(90deg, rgba(15,23,42,${Math.min(tint + 28, 92) / 100}) 0%, rgba(15,23,42,${tint / 100}) 45%, rgba(15,23,42,${Math.max(tint - 28, 12) / 100}) 100%)`,
            }}
          />
        </>
      )}
      <div className={`${iosLanding.container} relative z-10`}>
        <div className={iosStoryGridClass}>
          <AnimateIn
            direction="left"
            className={`${imageFirst ? iosStoryMediaCellClass : iosStoryCopyCellClass} ${imageFirst ? 'order-2 lg:order-1' : 'order-1'}`}
          >
            {imageFirst ? <MockupFrame>{media}</MockupFrame> : copy}
          </AnimateIn>
          <AnimateIn
            direction="right"
            className={`${imageFirst ? iosStoryCopyCellClass : iosStoryMediaCellClass} ${imageFirst ? 'order-1 lg:order-2' : 'order-2'}`}
          >
            {imageFirst ? copy : <MockupFrame>{media}</MockupFrame>}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

export function IosAccentStrip({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-brand border-y border-white/10 py-10 md:py-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">{eyebrow}</p>
        <div className="text-lg md:text-xl font-bold text-white leading-[1.35]">{children}</div>
      </div>
    </section>
  );
}

export function IosIntegrationStrap() {
  return (
    <section className="bg-brand border-t border-white/10 py-6 md:py-8">
      <div className={iosLanding.container + ' text-center'}>
        <p className="font-display font-black text-lg sm:text-xl md:text-2xl uppercase tracking-wide text-white mb-2">
          On site by voice. At your desk in Chrome or Edge. Same quotes. Same account.
        </p>
        <p className="font-body text-sm sm:text-base text-white/50 font-medium">
          Work with your hands, not a keyboard. iPhone on site — laptop for admin.
        </p>
      </div>
    </section>
  );
}
