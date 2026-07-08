import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, type ComponentType } from 'react';
import { Menu, X, Apple, Chrome } from 'lucide-react';
import { SmashLogoLink } from './SmashLogo';
import {
  APP_STORE_URL,
  CHROME_STORE_URL,
  IOS_DOWNLOAD_LABEL,
  NAV_CTA_LABEL,
} from '../data/download-urls';

type NavIcon = ComponentType<{ size?: number; strokeWidth?: number }>;

type NavLinkDef = {
  to: string;
  label: string;
  icon?: NavIcon;
  isActive: (pathname: string) => boolean;
};

/** Primary nav — logo still links home; explicit Home link for clarity. */
const NAV_LINKS: NavLinkDef[] = [
  {
    to: '/',
    label: 'Home',
    isActive: (pathname) => pathname === '/',
  },
  {
    to: '/voice-invoicing',
    label: 'iOS',
    icon: Apple,
    isActive: (pathname) => pathname === '/voice-invoicing',
  },
  {
    to: '/chrome-extension',
    label: 'Gmail Extension',
    icon: Chrome,
    isActive: (pathname) =>
      pathname === '/chrome-extension' ||
      pathname === '/gmail-invoice' ||
      pathname === '/b2b-gmail-quoting' ||
      pathname === '/xero' ||
      pathname.startsWith('/smash-leads'),
  },
  {
    to: '/pricing',
    label: 'Pricing',
    isActive: (pathname) => pathname === '/pricing',
  },
  {
    to: '/integrations',
    label: 'Integrations',
    isActive: (pathname) =>
      pathname === '/integrations' || pathname.startsWith('/integrations/'),
  },
  {
    to: '/blog',
    label: 'Blog',
    isActive: (pathname) => pathname === '/blog' || pathname.startsWith('/blog/'),
  },
];

function desktopNavLinkClass(active: boolean): string {
  return [
    'hidden md:flex items-center gap-1.5 px-3 py-2 text-sm uppercase tracking-wide transition-colors',
    active ? 'font-black text-accent' : 'font-bold text-white/60 hover:text-white',
  ].join(' ');
}

function mobileNavLinkClass(active: boolean, hasIcon: boolean): string {
  return [
    'block px-4 py-3 text-base uppercase tracking-wide rounded-lg transition-colors',
    active
      ? 'font-black text-accent bg-white/5'
      : 'font-bold text-white/80 hover:text-white hover:bg-white/5',
    hasIcon ? 'flex items-center gap-2' : '',
  ].join(' ');
}

export function Nav({ ctaUrl, ctaLabel }: { ctaUrl?: string; ctaLabel?: string } = {}) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const resolvedCtaUrl = ctaUrl ?? APP_STORE_URL;
  const resolvedCtaLabel = ctaLabel ?? NAV_CTA_LABEL;

  // Close the menu when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll while the menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav className="bg-brand/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 md:py-5 flex items-center justify-between">
          <SmashLogoLink onClick={() => setOpen(false)} />

          <div className="flex items-center gap-1 sm:gap-2">
            {NAV_LINKS.map(({ to, label, icon: Icon, isActive }) => {
              const active = isActive(pathname);
              return (
                <Link
                  key={to}
                  to={to}
                  aria-current={active ? 'page' : undefined}
                  className={desktopNavLinkClass(active)}
                >
                  {Icon && <Icon size={15} strokeWidth={2.5} />}
                  {label}
                </Link>
              );
            })}

            <a
              href={resolvedCtaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 sm:px-5 py-2.5 rounded-[32px] bg-accent text-brand font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-95 transition-all"
            >
              {resolvedCtaLabel}
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="md:hidden ml-1 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              {open ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/*
        Mobile menu drawer — rendered as a sibling of <nav> (NOT inside it).
        The parent nav uses `backdrop-blur-sm`, which establishes a containing
        block for `position: fixed` descendants and breaks viewport-fixed
        positioning. Keeping the drawer outside avoids that trap.
      */}
      {open && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-brand border-t border-white/10 overflow-y-auto z-40">
          <div className="max-w-7xl mx-auto px-3 py-4 pb-24">
            {NAV_LINKS.map(({ to, label, icon: Icon, isActive }) => {
              const active = isActive(pathname);
              return (
                <Link
                  key={to}
                  to={to}
                  aria-current={active ? 'page' : undefined}
                  className={mobileNavLinkClass(active, Boolean(Icon))}
                >
                  {Icon && <Icon size={18} strokeWidth={2.5} />}
                  {label}
                </Link>
              );
            })}

            {/* Download buttons */}
            <div className="px-3 pt-6 pb-4 flex gap-3 flex-wrap">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-brand font-black text-sm uppercase tracking-wider hover:brightness-95 transition-all"
              >
                <Apple size={18} strokeWidth={2.5} />
                {IOS_DOWNLOAD_LABEL}
              </a>
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/10 border border-white/15 text-white font-black text-sm uppercase tracking-wider hover:bg-white/20 transition-all"
              >
                <Chrome size={18} strokeWidth={2.5} />
                Add to Chrome
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
