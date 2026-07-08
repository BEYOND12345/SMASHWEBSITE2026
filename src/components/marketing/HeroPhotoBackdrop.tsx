import { IosStoryPhotoCover } from '../ios-product-landing/IosStoryPhotoCover';
import type { StoryPhoto } from '../../data/ios-landing-spec';
import { brandPhotoScrim, heroMobilePhotoScrim } from '../ios-product-landing/photo-scrim';

type Props = {
  photo: StoryPhoto;
  /** 0–100 dark-tint strength for the desktop horizontal scrim. */
  tint?: number;
};

/** Hero photography — desktop: left-weighted scrim; mobile: top band + fade to solid brand. */
export function HeroPhotoBackdrop({ photo, tint = 58 }: Props) {
  const desktopScrim = brandPhotoScrim(tint, 'horizontal');

  return (
    <>
      <div className="absolute inset-0 hidden sm:block overflow-hidden">
        <IosStoryPhotoCover photo={photo} variant="fullBleed" priority />
        <div aria-hidden className="absolute inset-0" style={desktopScrim} />
      </div>

      <div className="absolute inset-0 sm:hidden overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[40vh] max-h-[300px] relative overflow-hidden">
          <IosStoryPhotoCover photo={photo} variant="fullBleed" preferMobileFocus priority />
        </div>
        <div aria-hidden className="absolute inset-0" style={heroMobilePhotoScrim(tint)} />
      </div>
    </>
  );
}
