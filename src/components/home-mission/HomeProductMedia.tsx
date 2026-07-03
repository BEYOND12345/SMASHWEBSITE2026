import { IosPhoneShowcase } from '../ios-product-landing/IosPhoneShowcase';
import type {
  IosPhoneShowcaseSize,
  IosPhoneSurface,
} from '../ios-product-landing/ios-landing-tokens';
import type { IosStoryCalloutId } from '../ios-product-landing/IosStoryCallout';
import type { IosStoryScreenId } from '../../data/ios-landing-spec';
import { GmailStoryFrame } from '../gmail-product-landing/GmailStoryFrame';
import type { GmailStoryFrameId } from '../gmail-product-landing/gmail-landing-tokens';

/**
 * Homepage product visuals — render the EXACT same polished pieces as the iOS and
 * Gmail product pages so styling stays identical across all three surfaces.
 * Phones go through IosPhoneShowcase (clipped screen + grounded code callout +
 * lime glow + float). The inbox uses the cropped Gmail story cards. No bespoke
 * "flat screenshot" mockups.
 */

export function HomePhoneCard({
  screen,
  calloutId,
  size = 'story',
  surface = 'dark',
  className = '',
}: {
  screen: IosStoryScreenId;
  /** Defaults to the matching story callout for the screen. */
  calloutId?: IosStoryCalloutId;
  size?: IosPhoneShowcaseSize | number;
  surface?: IosPhoneSurface;
  className?: string;
}) {
  return (
    <IosPhoneShowcase
      screen={screen}
      calloutId={calloutId ?? (screen as IosStoryCalloutId)}
      size={size}
      surface={surface}
      className={className}
    />
  );
}

export function HomeGmailCard({
  frame,
  className = '',
}: {
  frame: GmailStoryFrameId;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full rounded-[22px] overflow-hidden bg-white ring-1 ring-black/[0.06] shadow-[0_40px_110px_-30px_rgba(15,23,42,0.45)] ${className}`.trim()}
    >
      <GmailStoryFrame frame={frame} crop fill />
    </div>
  );
}
