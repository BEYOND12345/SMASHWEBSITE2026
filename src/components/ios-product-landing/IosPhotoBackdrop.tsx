import type { StoryPhoto } from '../../data/ios-landing-spec';

/**
 * Photography backdrop for white story sections — sits behind the phone, which
 * floats over it. Mobile-optimised: art-directed <picture>, lazy + async decode,
 * object-cover with a focus knob, and no layout shift (height is driven by the
 * phone composition in front of it).
 */
export function IosPhotoBackdrop({ photo }: { photo: StoryPhoto }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex items-stretch justify-center">
      <div className="relative w-full overflow-hidden rounded-[34px] shadow-[0_36px_90px_-22px_rgba(15,23,42,0.4)] ring-1 ring-black/[0.06]">
        <picture>
          {photo.srcMobile && (
            <source media="(max-width: 640px)" srcSet={photo.srcMobile} />
          )}
          <img
            src={photo.src}
            alt={photo.alt ?? ''}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            style={{ objectPosition: photo.focus ?? 'center' }}
          />
        </picture>

        {/* Depth vignette — lifts the phone off the scene. */}
        <div className="absolute inset-0 bg-[radial-gradient(125%_95%_at_50%_12%,transparent_32%,rgba(15,23,42,0.22)_100%)]" />
        {/* Bottom fade into the white section so the phone shadow blends cleanly. */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />
      </div>
    </div>
  );
}
