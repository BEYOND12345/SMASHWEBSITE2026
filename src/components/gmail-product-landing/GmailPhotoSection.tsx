import type { GmailStoryPhotoBg } from '../../data/gmail-landing-spec';
import { IosStoryPhotoCover } from '../ios-product-landing/IosStoryPhotoCover';
import { IosPhotoBackdrop } from '../ios-product-landing/IosPhotoBackdrop';
import {
  brandPhotoScrim,
  storyStackedScrimCopyTop,
} from '../ios-product-landing/photo-scrim';

/** Full-bleed photography + navy tint — dual desktop/mobile composition like iOS story rows. */
export function GmailSectionPhotoBg({
  photo,
  tintDirection = 'left',
}: {
  photo: GmailStoryPhotoBg;
  tintDirection?: 'left' | 'right';
}) {
  const tint = photo.tint ?? 52;
  const flipHorizontal = tintDirection === 'right';

  return (
    <>
      <div className="absolute inset-0 hidden lg:block overflow-hidden">
        <IosStoryPhotoCover photo={photo} variant="fullBleed" />
        <div
          aria-hidden
          className="absolute inset-0 z-[1]"
          style={brandPhotoScrim(tint, 'horizontal', flipHorizontal)}
        />
      </div>

      <div className="absolute inset-0 lg:hidden overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-[min(54vh,440px)]">
          <IosStoryPhotoCover photo={photo} variant="fullBleed" preferStackedFocus />
        </div>
        <div aria-hidden className="absolute inset-0 z-[1]" style={storyStackedScrimCopyTop(tint)} />
      </div>
    </>
  );
}

/** Framed photo behind desktop mockups on white sections. */
export function GmailMockupPhotoBackdrop({ photo }: { photo: GmailStoryPhotoBg }) {
  return <IosPhotoBackdrop photo={photo} />;
}
