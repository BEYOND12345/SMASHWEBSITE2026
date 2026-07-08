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
import type { StoryPhotoBg } from '../../data/ios-landing-spec';
import {
  iosLanding,
  iosStoryCopyCellClass,
  iosStoryGridClass,
  iosStoryMediaCellClass,
} from './ios-landing-tokens';
import { brandPhotoScrim, storyStackedScrimCopyBottom, storyStackedScrimCopyTop } from './photo-scrim';

type Props = {
  segment: IosStorySegment;
  imageFirst?: boolean;
  /** When true, full-bleed photo; when false, solid navy (photo / blue alternation). */
  photoBgEnabled?: boolean;
  priorityLoad?: boolean;
  /** Override default IOS_STORY_PHOTO_BG lookup — used on the ad landing for unique photos. */
  photoOverride?: StoryPhotoBg;
};

/** Chrome/Gmail-style alternating story row — unified phone showcase on every section. */
export function IosStorySection({
  segment,
  imageFirst = false,
  photoBgEnabled = true,
  priorityLoad = false,
  photoOverride,
}: Props) {
  const photoBg = photoBgEnabled
    ? photoOverride ?? IOS_STORY_PHOTO_BG[segment.screen]
    : undefined;
  const copyDark = true;

  const copy = (
    <IosSpecHeadline
      variant="story"
      eyebrow={segment.eyebrow}
      headlineWhite={segment.headlineWhite}
      headlineLime={segment.headlineLime}
      subline={segment.subline}
      dark={copyDark}
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
          priorityLoad={priorityLoad}
        />
      </div>
    </div>
  );

  const tint = photoBg?.tint ?? 55;
  const copyOnTop = !imageFirst;

  return (
    <section className="relative bg-brand py-16 md:py-28 overflow-hidden [content-visibility:auto] [contain-intrinsic-size:auto_720px]">
      {photoBg && (
        <>
          {/* Desktop — side-by-side: photo fills the row, horizontal scrim protects copy column. */}
          <div className="absolute inset-0 hidden lg:block overflow-hidden">
            <IosStoryPhotoCover photo={photoBg} variant="fullBleed" />
            <div
              aria-hidden
              className="absolute inset-0 z-[1]"
              style={brandPhotoScrim(tint, 'horizontal', imageFirst)}
            />
          </div>

          {/* Below lg — stacked: photo lives in the phone band; copy sits on solid navy. */}
          <div className="absolute inset-0 lg:hidden overflow-hidden">
            {copyOnTop ? (
              <div className="absolute inset-x-0 bottom-0 h-[min(54vh,440px)]">
                <IosStoryPhotoCover photo={photoBg} variant="fullBleed" preferStackedFocus />
              </div>
            ) : (
              <div className="absolute inset-x-0 top-0 h-[min(50vh,400px)]">
                <IosStoryPhotoCover photo={photoBg} variant="fullBleed" preferStackedFocus />
              </div>
            )}
            <div
              aria-hidden
              className="absolute inset-0 z-[1]"
              style={
                copyOnTop
                  ? storyStackedScrimCopyTop(tint)
                  : storyStackedScrimCopyBottom(tint)
              }
            />
          </div>
        </>
      )}
      <div className={`${iosLanding.container} relative z-10`}>
        <div className={iosStoryGridClass}>
          <AnimateIn
            direction="left"
            directionMobile="up"
            className={`${imageFirst ? iosStoryMediaCellClass : iosStoryCopyCellClass} ${imageFirst ? 'order-2 lg:order-1' : 'order-1'}`}
          >
            {imageFirst ? <MockupFrame>{media}</MockupFrame> : copy}
          </AnimateIn>
          <AnimateIn
            direction="right"
            directionMobile="up"
            delay={80}
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

export function IosIntegrationStrap({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`bg-brand border-t border-white/[0.06] ${compact ? 'py-5 md:py-6' : 'py-6 md:py-8'}`}
    >
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
