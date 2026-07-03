import { Link } from 'react-router-dom';
import { Apple, Monitor } from 'lucide-react';
import { APP_STORE_URL } from '../../data/download-urls';
import { iosLanding } from '../ios-product-landing/ios-landing-tokens';

const ctaLime =
  'inline-flex items-center justify-center gap-2 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest px-8 py-4 hover:brightness-95 transition-all whitespace-nowrap';
const ctaGhost =
  'inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 text-white font-bold text-sm uppercase tracking-wide px-7 py-4 hover:bg-white hover:text-brand transition-all whitespace-nowrap';

type SecondaryCta =
  | { kind: 'link'; to: string; label: string }
  | { kind: 'anchor'; href: string; label: string }
  | { kind: 'chrome-product'; label?: string };

type Props = {
  className?: string;
  /** Default: links to /chrome-extension */
  secondary?: SecondaryCta;
  showMicrocopy?: boolean;
  iphoneLabel?: string;
};

/** Sitewide dual front doors — iPhone App Store + secondary path (product page or extension). */
export function DualProductCtas({
  className = '',
  secondary = { kind: 'link', to: '/chrome-extension', label: 'Add to your browser' },
  showMicrocopy = true,
  iphoneLabel = 'Start Free on iPhone',
}: Props) {
  return (
    <div className={className}>
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={ctaLime}>
          <Apple size={18} strokeWidth={2.5} />
          {iphoneLabel}
        </a>
        <SecondaryButton secondary={secondary} />
      </div>
      {showMicrocopy && (
        <>
          <p className={`${iosLanding.caption} mt-3`}>Free to start · No card needed</p>
          <p className="text-xs text-white/45 font-medium mt-1.5">
            iPhone on site · Gmail in Chrome or Edge at your desk
          </p>
        </>
      )}
    </div>
  );
}

function SecondaryButton({ secondary }: { secondary: SecondaryCta }) {
  if (secondary.kind === 'anchor') {
    return (
      <a href={secondary.href} className={ctaGhost}>
        {secondary.label}
      </a>
    );
  }

  if (secondary.kind === 'chrome-product') {
    return (
      <Link to="/chrome-extension" className={ctaGhost}>
        <Monitor size={18} strokeWidth={2.5} />
        {secondary.label ?? 'Add to your browser'}
      </Link>
    );
  }

  return (
    <Link to={secondary.to} className={ctaGhost}>
      <Monitor size={18} strokeWidth={2.5} />
      {secondary.label}
    </Link>
  );
}

export function IphoneInstallCta({ className = '', label = 'Start Free on iPhone' }: { className?: string; label?: string }) {
  return (
    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={`${ctaLime} ${className}`.trim()}>
      <Apple size={18} strokeWidth={2.5} />
      {label}
    </a>
  );
}

export function BrowserProductCta({
  className = '',
  label = 'Add to your browser',
  to = '/chrome-extension',
}: {
  className?: string;
  label?: string;
  to?: string;
}) {
  return (
    <Link to={to} className={`${ctaGhost} ${className}`.trim()}>
      <Monitor size={18} strokeWidth={2.5} />
      {label}
    </Link>
  );
}

export function ProductLearnMoreCta({
  className = '',
  to,
  label,
}: {
  className?: string;
  to: string;
  label: string;
}) {
  return (
    <Link to={to} className={`${ctaGhost} ${className}`.trim()}>
      {label}
    </Link>
  );
}
