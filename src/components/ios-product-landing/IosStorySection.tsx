import type { ReactNode } from 'react';
import { AnimateIn } from '../animate-in';
import { MockupFrame } from '../phone-showcase';
import { IosSpecHeadline } from './IosCalloutCard';
import { IosPhoneShowcase } from './IosPhoneShowcase';
import { IosPhotoBackdrop } from './IosPhotoBackdrop';
import { IosStoryPhotoCover } from './IosStoryPhotoCover';
import {
  IOS_STORY_PHOTOS,
  IOS_STORY_PHOTO_BG,
  type IosStorySegment,
} from '../../data/ios-landing-spec';
import { iosLanding } from './ios-landing-tokens';

type Props = {
  segment: IosStorySegment;
  imageFirst?: boolean;
  dark?: boolean;
};

/** Chrome/Gmail-style alternating story row — unified phone showcase on every section. */
export function IosStorySection({ segment, imageFirst = false, dark = false }: Props) {
  const photoBg = IOS_STORY_PHOTO_BG[segment.screen];
  // Over a dark-tinted photo, copy must read as white.
  const copyDark = dark || Boolean(photoBg);

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

  // Framed backdrop behind the phone — white sections only, and never alongside a full-bleed bg.
  const photo = dark || photoBg ? undefined : IOS_STORY_PHOTOS[segment.screen];

  const media = (
    <div className="relative w-full">
      {photo && <IosPhotoBackdrop photo={photo} />}
      <div className="relative z-10">
        <IosPhoneShowcase
          screen={segment.screen}
          calloutId={segment.id}
          size="story"
          surface={copyDark ? 'dark' : 'light'}
        />
      </div>
    </div>
  );

  const sectionBg = photoBg ? 'bg-brand' : dark ? 'bg-brand' : 'bg-white';
  const tint = photoBg?.tint ?? 55;

  return (
    <section className={`relative ${sectionBg} py-16 md:py-28 overflow-hidden`}>
      {photoBg && (
        <>
          <IosStoryPhotoCover photo={photoBg} variant="fullBleed" />
          {/* Dark brand tint — stronger on the copy (left) side for legibility. */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, rgba(15,23,42,${Math.min(tint + 28, 92) / 100}) 0%, rgba(15,23,42,${tint / 100}) 45%, rgba(15,23,42,${Math.max(tint - 28, 12) / 100}) 100%)`,
            }}
          />
        </>
      )}
      <div className={`${iosLanding.container} relative z-10`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateIn
            direction="left"
            className={imageFirst ? 'order-2 lg:order-1' : 'order-1'}
          >
            {imageFirst ? (
              <MockupFrame>{media}</MockupFrame>
            ) : (
              copy
            )}
          </AnimateIn>
          <AnimateIn
            direction="right"
            className={imageFirst ? 'order-1 lg:order-2' : 'order-2'}
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
    <section className="bg-accent py-10 md:py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
        <p className="text-xs font-black uppercase tracking-widest text-brand/50 mb-3">{eyebrow}</p>
        <div className="text-lg md:text-xl font-bold text-brand leading-[1.35]">{children}</div>
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
