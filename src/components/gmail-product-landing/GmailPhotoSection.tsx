import type { GmailStoryPhotoBg } from '../../data/gmail-landing-spec';
import { IosStoryPhotoCover } from '../ios-product-landing/IosStoryPhotoCover';
import { IosPhotoBackdrop } from '../ios-product-landing/IosPhotoBackdrop';

function photoTintGradient(tint: number, direction: 'left' | 'right' = 'left') {
  const t = tint / 100;
  const strong = Math.min(tint + 28, 92) / 100;
  const mid = t;
  const soft = Math.max(tint - 28, 12) / 100;
  if (direction === 'right') {
    return `linear-gradient(270deg, rgba(15,23,42,${strong}) 0%, rgba(15,23,42,${mid}) 55%, rgba(15,23,42,${soft}) 100%)`;
  }
  return `linear-gradient(90deg, rgba(15,23,42,${strong}) 0%, rgba(15,23,42,${mid}) 45%, rgba(15,23,42,${soft}) 100%)`;
}

/** Full-bleed photography + navy tint — mirrors IosStorySection photo backgrounds. */
export function GmailSectionPhotoBg({
  photo,
  tintDirection = 'left',
}: {
  photo: GmailStoryPhotoBg;
  tintDirection?: 'left' | 'right';
}) {
  const tint = photo.tint ?? 52;

  return (
    <>
      <IosStoryPhotoCover photo={photo} variant="fullBleed" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: photoTintGradient(tint, tintDirection) }}
      />
    </>
  );
}

/** Framed photo behind desktop mockups on white sections. */
export function GmailMockupPhotoBackdrop({ photo }: { photo: GmailStoryPhotoBg }) {
  return <IosPhotoBackdrop photo={photo} />;
}
