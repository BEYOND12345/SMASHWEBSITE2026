import { Link } from 'react-router-dom';

/** White SMASH wordmark — source file lives in /public. */
export const SMASH_LOGO_SRC = '/smash-logo-white.png';
export const SMASH_LOGO_ALT = 'SMASH';
/** Native asset dimensions (300×74). */
export const SMASH_LOGO_ASPECT = 300 / 74;

type SmashLogoProps = {
  height?: number;
  className?: string;
};

/** Default nav height — ~50% of original 28px wordmark. */
export const SMASH_LOGO_NAV_HEIGHT = 14;

export function SmashLogo({ height = SMASH_LOGO_NAV_HEIGHT, className = '' }: SmashLogoProps) {
  return (
    <img
      src={SMASH_LOGO_SRC}
      alt={SMASH_LOGO_ALT}
      width={Math.round(height * SMASH_LOGO_ASPECT)}
      height={height}
      className={`w-auto object-contain block ${className}`.trim()}
      style={{ height }}
    />
  );
}

type SmashLogoLinkProps = SmashLogoProps & {
  className?: string;
  onClick?: () => void;
};

/** Home link with the SMASH wordmark — used in nav, footer, sticky bars. */
export function SmashLogoLink({ height = SMASH_LOGO_NAV_HEIGHT, className = '', onClick }: SmashLogoLinkProps) {
  return (
    <Link
      to="/"
      className={`inline-flex shrink-0 items-center ${className}`.trim()}
      onClick={onClick}
      aria-label={SMASH_LOGO_ALT}
    >
      <SmashLogo height={height} />
    </Link>
  );
}
