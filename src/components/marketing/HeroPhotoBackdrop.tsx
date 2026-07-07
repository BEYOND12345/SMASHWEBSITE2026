import { IosStoryPhotoCover } from '../ios-product-landing/IosStoryPhotoCover';
import type { StoryPhoto } from '../../data/ios-landing-spec';

type Props = {
  photo: StoryPhoto;
  /** 0–100 dark-tint strength for the desktop horizontal scrim. */
  tint?: number;
};

/** Hero photography — desktop: left-weighted scrim; mobile: top band + fade to solid brand. */
export function HeroPhotoBackdrop({ photo, tint = 58 }: Props) {
  const t = tint / 100;
  const desktopScrim = `linear-gradient(90deg, rgba(15,23,42,${Math.min(tint + 28, 92) / 100}) 0%, rgba(15,23,42,${t}) 45%, rgba(15,23,42,${Math.max(tint - 28, 12) / 100}) 100%)`;

  return (
    <>
      <div className="absolute inset-0 hidden sm:block overflow-hidden">
        <IosStoryPhotoCover photo={photo} variant="fullBleed" />
        <div aria-hidden className="absolute inset-0" style={{ background: desktopScrim }} />
      </div>

      <div className="absolute inset-0 sm:hidden overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[40vh] max-h-[300px] relative overflow-hidden">
          <IosStoryPhotoCover photo={photo} variant="fullBleed" preferMobileFocus />
        </div>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(15,23,42,${t + 0.12}) 0%, rgba(15,23,42,${Math.min(t + 0.38, 0.96)}) 32%, rgb(15,23,42) 48%)`,
          }}
        />
      </div>
    </>
  );
}
