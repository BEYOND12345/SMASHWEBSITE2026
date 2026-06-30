import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X, Apple, Chrome } from 'lucide-react';
import { SmashLogoLink } from './SmashLogo';
import {
  APP_STORE_URL,
  CHROME_STORE_URL,
  IOS_DOWNLOAD_LABEL,
  NAV_CTA_LABEL,
} from '../data/download-urls';

const desktopLinkClass =
  'hidden md:block px-3 py-2 text-sm font-bold text-white/60 hover:text-white transition-colors uppercase tracking-wide';

const mobileLinkClass =
  'block px-4 py-3 text-base font-bold text-white/80 hover:text-accent hover:bg-white/5 rounded-lg transition-colors uppercase tracking-wide';

/** Primary nav — homepage is the logo; these are the product paths. */
const NAV_LINKS = [
  { to: '/voice-invoicing', label: 'iOS', icon: Apple, accent: true },
  { to: '/chrome-extension', label: 'Gmail Extension', icon: Chrome },
  { to: '/pricing', label: 'Pricing' },
  { to: '/integrations', label: 'Integrations' },
  { to: '/blog', label: 'Blog' },
] as const;

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
            {NAV_LINKS.map(({ to, label, icon: Icon, accent }) => (
              <Link
                key={to}
                to={to}
                className={
                  accent
                    ? 'hidden md:flex items-center gap-1.5 px-3 py-2 text-sm font-black text-accent hover:text-white transition-colors uppercase tracking-wide'
                    : `hidden md:flex items-center gap-1.5 ${desktopLinkClass.replace('hidden md:block ', '')}`
                }
              >
                {Icon && <Icon size={15} strokeWidth={2.5} />}
                {label}
              </Link>
            ))}

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
            {NAV_LINKS.map(({ to, label, icon: Icon, accent }) => (
              <Link
                key={to}
                to={to}
                className={`${mobileLinkClass}${accent ? ' !text-accent font-black' : ''}${Icon ? ' flex items-center gap-2' : ''}`}
              >
                {Icon && <Icon size={18} strokeWidth={2.5} />}
                {label}
              </Link>
            ))}

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
