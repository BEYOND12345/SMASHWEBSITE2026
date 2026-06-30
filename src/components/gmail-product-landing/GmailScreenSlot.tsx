import { useEffect, useState } from 'react';
import type { GmailDesktopScreenId } from './gmail-landing-tokens';
import { GMAIL_HTML_SCREENS_READY } from '../../data/gmail-landing-spec';
import { GmailHtmlDesktopScreen } from './GmailHtmlDesktopScreen';
import { GmailPngDesktopScreen } from './GmailPngDesktopScreen';

type Props = {
  screen: GmailDesktopScreenId;
  width: number;
  fallback: React.ReactNode;
  className?: string;
};

type AssetKind = 'png' | 'html' | 'fallback';

/**
 * Prefers HTML iframes (crisp scaling), then PNG exports, then React fallback mockups.
 */
export function GmailScreenSlot({ screen, width, fallback, className = '' }: Props) {
  const [asset, setAsset] = useState<AssetKind>('fallback');

  useEffect(() => {
    let cancelled = false;

    const pick = async () => {
      if (GMAIL_HTML_SCREENS_READY) {
        try {
          const html = await fetch(`/product/gmail/screens/${screen}.html`, { method: 'HEAD' });
          if (!cancelled && html.ok) {
            setAsset('html');
            return;
          }
        } catch {
          /* try png next */
        }
      }

      try {
        const png = await fetch(`/product/gmail/screens/${screen}.png`, { method: 'HEAD' });
        if (!cancelled && png.ok) {
          setAsset('png');
          return;
        }
      } catch {
        /* fall through */
      }

      if (!cancelled) setAsset('fallback');
    };

    setAsset('fallback');
    pick();

    return () => {
      cancelled = true;
    };
  }, [screen]);

  if (asset === 'png') {
    return <GmailPngDesktopScreen screen={screen} width={width} className={className} />;
  }

  if (asset === 'html') {
    return <GmailHtmlDesktopScreen screen={screen} width={width} className={className} />;
  }

  return <div className={className}>{fallback}</div>;
}
