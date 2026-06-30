import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  ChromePrimaryCta,
  EdgeInstallCta,
} from '../chrome-landing/chrome-landing-ui';
import {
  CHROME_STORE_URL,
  EDGE_STORE_URL,
  GMAIL_CHROME_CTA_LABEL,
  GMAIL_EDGE_CTA_LABEL,
} from '../../data/download-urls';

export function GmailInstallCtas({
  size = 'md',
  className = '',
  centered = false,
}: {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  centered?: boolean;
}) {
  // Buttons are whitespace-nowrap + shrink-0, so on narrow phones a side-by-side
  // pair overflows (and gets clipped by section overflow-hidden). Stack full-width
  // below sm, pair up from sm.
  const layout = centered
    ? 'flex flex-col sm:flex-row gap-3 items-stretch justify-center w-full max-w-md mx-auto sm:max-w-none sm:mx-0 sm:w-auto'
    : 'flex flex-col sm:flex-row gap-3 items-stretch w-full max-w-md sm:max-w-none sm:w-auto';

  const btnClass = 'w-full sm:w-auto sm:flex-none sm:min-w-[168px] justify-center';

  return (
    <div className={`${layout} ${className}`.trim()}>
      <ChromePrimaryCta
        href={CHROME_STORE_URL}
        label={GMAIL_CHROME_CTA_LABEL}
        size={size}
        matched
        className={btnClass}
      />
      <EdgeInstallCta
        href={EDGE_STORE_URL}
        label={GMAIL_EDGE_CTA_LABEL}
        size={size}
        matched
        className={btnClass}
      />
    </div>
  );
}

/** Hero — Chrome + Edge install, with a quiet reassurance + demo link beneath. */
export function GmailHeroInstallCtas({
  demoAnchorId,
  className = '',
}: {
  demoAnchorId: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 ${className}`.trim()}>
      <GmailInstallCtas />
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-x-2.5 gap-y-1 text-sm">
        <span className="font-body font-medium text-white/45">Free to install</span>
        <span aria-hidden className="hidden sm:inline text-white/20">·</span>
        <a
          href={`#${demoAnchorId}`}
          className="group inline-flex items-center gap-1 font-body font-semibold text-accent hover:text-white transition-colors"
        >
          See it work
          <ArrowRight
            size={14}
            strokeWidth={2.5}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </a>
        <span aria-hidden className="hidden sm:inline text-white/20">·</span>
        <Link
          to="/voice-invoicing"
          className="font-body font-semibold text-white/55 hover:text-accent transition-colors"
        >
          On site? SMASH for iPhone →
        </Link>
      </div>
    </div>
  );
}

/** Final band — centered dual install. */
export function GmailFinalInstallCtas() {
  return <GmailInstallCtas size="lg" centered />;
}
