import type { GmailDesktopScreenId } from './gmail-landing-tokens';

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
};

/** Product PNG export — used until self-contained HTML screens arrive. */
export function GmailPngDesktopScreen({ screen, width, className = '' }: Props) {
  return (
    <img
      src={`/product/gmail/screens/${screen}.png?v=2`}
      alt={SCREEN_ALTS[screen]}
      width={width}
      className={`block h-auto max-w-full bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] rounded-2xl ${className}`.trim()}
      style={{ width }}
      loading={screen === 'hero' ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}
