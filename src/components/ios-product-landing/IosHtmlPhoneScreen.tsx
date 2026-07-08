import type { IosStoryScreenId } from '../../data/ios-landing-spec';
import { IOS_PHONE_LOGICAL } from './ios-landing-tokens';

const SCREEN_ALTS: Record<string, string> = {
  voice: 'SMASH voice assistant listening to a job description',
  quote: 'Itemised quote with materials, labour and GST total',
  pricehub: 'Price Hub catalogue with saved service rates',
  send: 'Itemised estimate ready to send — job summary, line items and customer',
  readreceipts: 'Job list showing seen status and read receipts',
  pay: 'Paid invoices and customer payment confirmation',
  automessage: 'Auto-generated text message to customer',
  integrations: 'Integrations with Xero, QuickBooks, and Stripe',
  customers: 'Customer CRM with job history and revenue',
  cardpayment: 'Credit card payment checkout sheet on mobile',
};

type Props = {
  screen: IosStoryScreenId;
  className?: string;
  /** Display width in px — use IOS_PHONE_DISPLAY values so scale = width/900 is clean. */
  width?: number;
  active?: boolean;
  fadeBottom?: boolean;
  /** Shift content up (logical px) inside the clip window. */
  focusYOffset?: number;
};

/** Live HTML screen from approved App Store extracts — integer scale iframe. */
export function IosHtmlPhoneScreen({
  screen,
  className = '',
  width = 360,
  active = true,
  fadeBottom = false,
  focusYOffset = 0,
}: Props) {
  const scale = width / IOS_PHONE_LOGICAL.width;
  const height = Math.round(IOS_PHONE_LOGICAL.height * scale);
  const yShift = Math.round(focusYOffset * scale);

  return (
    <div
      className={`relative overflow-hidden ${className}`.trim()}
      style={{ width, height }}
      aria-hidden={!active}
    >
      <iframe
        src={`/product/ios/screens/${screen}.html?fade=${fadeBottom ? '1' : '0'}`}
        title={SCREEN_ALTS[screen]}
        className="absolute top-0 left-0 border-0 bg-white pointer-events-none"
        style={{
          width: IOS_PHONE_LOGICAL.width,
          height: IOS_PHONE_LOGICAL.height,
          transform: yShift
            ? `translateY(-${yShift}px) scale(${scale})`
            : `scale(${scale})`,
          transformOrigin: 'top left',
        }}
        loading={screen === 'voice' ? 'eager' : 'lazy'}
        tabIndex={-1}
      />
    </div>
  );
}
