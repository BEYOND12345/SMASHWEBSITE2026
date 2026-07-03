import type { GmailDesktopScreenId } from './gmail-landing-tokens';
import { GMAIL_DESKTOP_LOGICAL, GMAIL_DESKTOP_LOGICAL_BY_SCREEN } from './gmail-landing-tokens';

const SCREEN_ALTS: Record<GmailDesktopScreenId, string> = {
  hero: 'Gmail with SMASH sidebar — quote matched from email',
  'step-request': 'Quote request email in Gmail inbox',
  'step-matching': 'SMASH sidebar matching email lines to catalogue SKUs',
  'step-done': 'Finished itemised quote ready to send from Gmail',
  'sku-match': 'Line items matched to catalogue with prices',
  'inbox-toolbar': 'SMASH extension button in Gmail toolbar',
};

type Props = {
  screen: GmailDesktopScreenId;
  width: number;
  className?: string;
  rounded?: boolean;
};

/** Scaled iframe — same pattern as IosHtmlPhoneScreen. */
export function GmailHtmlDesktopScreen({
  screen,
  width,
  className = '',
  rounded = true,
}: Props) {
  const logical = GMAIL_DESKTOP_LOGICAL_BY_SCREEN[screen];
  const scale = width / logical.width;
  const height = Math.round(logical.height * scale);
  const radius = rounded ? (GMAIL_DESKTOP_LOGICAL.radius / logical.width) * width : 0;

  return (
    <div
      className={`relative overflow-hidden bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] ${className}`.trim()}
      style={{ width, height, borderRadius: radius }}
    >
      <iframe
        src={`/product/gmail/screens/${screen}.html?v=2`}
        title={SCREEN_ALTS[screen]}
        className="absolute top-0 left-0 border-0 bg-white pointer-events-none"
        style={{
          width: logical.width,
          height: logical.height,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
        loading={screen === 'hero' ? 'eager' : 'lazy'}
        tabIndex={-1}
      />
    </div>
  );
}
