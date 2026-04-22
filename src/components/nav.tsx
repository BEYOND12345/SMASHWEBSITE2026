import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X, Apple, Chrome } from 'lucide-react';

const APP_STORE_URL = 'https://apps.apple.com/au/app/smash-invoices/id6759475079';
const CHROME_STORE_URL = 'https://chromewebstore.google.com/search/smash%20invoices';

const desktopLinkClass =
  'hidden md:block px-3 py-2 text-sm font-bold text-white/60 hover:text-white transition-colors uppercase tracking-wide';

const mobileLinkClass =
  'block px-4 py-3 text-base font-bold text-white/80 hover:text-accent hover:bg-white/5 rounded-lg transition-colors uppercase tracking-wide';

const mobileSectionHeading =
  'px-4 pt-4 pb-1 text-xs font-black uppercase tracking-widest text-white/40';

export function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

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
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter text-white"
            onClick={() => setOpen(false)}
          >
            SMASH
            <span className="text-accent text-4xl leading-none align-baseline">
              .
            </span>
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            <Link to="/features" className={desktopLinkClass}>Features</Link>
            <Link to="/pricing" className={desktopLinkClass}>Pricing</Link>
            <Link to="/tools" className={`${desktopLinkClass} hidden lg:block`}>Tools</Link>
            <Link to="/integrations" className={`${desktopLinkClass} hidden lg:block`}>Integrations</Link>
            <Link to="/smash-vs-xero" className={`${desktopLinkClass} hidden xl:block`}>Compare</Link>
            <Link to="/blog" className={`${desktopLinkClass} hidden lg:block`}>Blog</Link>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 sm:px-5 py-2.5 rounded-[32px] bg-accent text-brand font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-95 transition-all"
            >
              Start Free
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
            <div className={mobileSectionHeading}>Product</div>
            <Link to="/features" className={mobileLinkClass}>Features</Link>
            <Link to="/pricing" className={mobileLinkClass}>Pricing</Link>
            <Link to="/how-it-works" className={mobileLinkClass}>How It Works</Link>
            <Link to="/voice-invoicing" className={mobileLinkClass}>Voice Invoicing</Link>
            <Link to="/ai-invoicing" className={mobileLinkClass}>AI Invoicing</Link>
            <Link to="/chrome-extension" className={mobileLinkClass}>SMASH for Gmail</Link>

            <div className={mobileSectionHeading}>Tools</div>
            <Link to="/tools" className={mobileLinkClass}>All Free Tools</Link>
            <Link to="/quote-generator" className={mobileLinkClass}>Quote Generator</Link>
            <Link to="/invoice-generator" className={mobileLinkClass}>Invoice Generator</Link>
            <Link to="/gst-calculator" className={mobileLinkClass}>GST Calculator</Link>
            <Link to="/hourly-rate-calculator" className={mobileLinkClass}>Hourly Rate Calculator</Link>

            <div className={mobileSectionHeading}>Guides</div>
            <Link to="/tradie-hourly-rates" className={mobileLinkClass}>Tradie Hourly Rates</Link>
            <Link to="/materials-pricing" className={mobileLinkClass}>Materials Pricing</Link>
            <Link to="/customer-approval" className={mobileLinkClass}>Customer Approval</Link>

            <div className={mobileSectionHeading}>Company</div>
            <Link to="/integrations" className={mobileLinkClass}>Integrations</Link>
            <Link to="/smash-vs-xero" className={mobileLinkClass}>Compare</Link>
            <Link to="/blog" className={mobileLinkClass}>Blog</Link>
            <Link to="/founder" className={mobileLinkClass}>Meet the Founder</Link>
            <Link to="/faq" className={mobileLinkClass}>FAQ</Link>
            <Link to="/contact" className={mobileLinkClass}>Contact</Link>

            {/* Download buttons */}
            <div className="px-3 pt-6 pb-4 flex gap-3 flex-wrap">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-brand font-black text-sm uppercase tracking-wider hover:brightness-95 transition-all"
              >
                <Apple size={18} strokeWidth={2.5} />
                App Store
              </a>
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white/10 border border-white/15 text-white font-black text-sm uppercase tracking-wider hover:bg-white/20 transition-all"
              >
                <Chrome size={18} strokeWidth={2.5} />
                Chrome
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
