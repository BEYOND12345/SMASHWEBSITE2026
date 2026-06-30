import { useEffect, useState } from 'react';
import type { StoryPhoto } from '../../data/ios-landing-spec';
import { IOS_STORY_PHOTO_COVER_SCALE } from './ios-landing-tokens';

type Breakpoint = 'desktop' | 'tablet' | 'mobile';

function resolveBreakpoint(): Breakpoint {
  if (typeof window === 'undefined') return 'desktop';
  if (window.matchMedia('(min-width: 1024px)').matches) return 'desktop';
  if (window.matchMedia('(min-width: 640px)').matches) return 'tablet';
  return 'mobile';
}

function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>(() => resolveBreakpoint());

  useEffect(() => {
    const update = () => setBp(resolveBreakpoint());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return bp;
}

function resolveCoverScale(photo: StoryPhoto, breakpoint: Breakpoint): number {
  if (photo.coverScale != null) return photo.coverScale;
  const base = IOS_STORY_PHOTO_COVER_SCALE[breakpoint];
  return base * (photo.coverScaleFactor ?? 1);
}

type Props = {
  photo: StoryPhoto;
  /** Full-bleed section fill vs rounded frame behind the phone. */
  variant: 'fullBleed' | 'frame';
  className?: string;
};

/** object-cover photo with extra zoom so focus shifts never expose section bg. */
export function IosStoryPhotoCover({ photo, variant, className = '' }: Props) {
  const breakpoint = useBreakpoint();
  const focus = photo.focus ?? 'center';
  const scale = resolveCoverScale(photo, breakpoint);

  const picture = (
    <picture className={`block h-full w-full ${photo.flipX ? '-scale-x-100' : ''}`}>
      {photo.srcMobile && (
        <source media="(max-width: 640px)" srcSet={photo.srcMobile} />
      )}
      <img
        src={photo.src}
        alt={photo.alt ?? ''}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        style={{
          objectPosition: focus,
          transform: `scale(${scale})`,
          transformOrigin: focus,
        }}
      />
    </picture>
  );

  if (variant === 'fullBleed') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`.trim()}>
        {picture}
      </div>
    );
  }

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`.trim()}>
      {picture}
    </div>
  );
}
