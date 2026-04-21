import { Link } from 'react-router-dom';
import { useState, ReactNode } from 'react';
import { Facebook, Instagram, Apple, Chrome, ChevronDown } from 'lucide-react';

interface FooterProps {
  showCTA?: boolean;
}

// Single source of truth for the two store destinations so they're easy to
// swap when the Chrome Web Store listing goes live.
const APP_STORE_URL = 'https://apps.apple.com/au/app/smash-invoices/id6759475079';
const CHROME_STORE_URL = 'https://chromewebstore.google.com/search/smash%20invoices';

/**
 * Mobile-collapsible footer section. Heading acts as a button under `lg`,
 * always expanded on `lg` and above.
 */
function FooterSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-white/10 lg:border-0 py-4 lg:py-0 first:border-t lg:first:border-0">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 lg:pointer-events-none lg:cursor-default text-sm font-black uppercase tracking-wider text-white/50 lg:mb-5 lg:justify-start"
      >
        <span>{title}</span>
        <ChevronDown
          size={18}
          strokeWidth={2.5}
          className={`lg:hidden transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`${open ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
        <ul className="space-y-3">{children}</ul>
      </div>
    </div>
  );
}

const linkClass =
  'text-base text-white/70 hover:text-accent transition-colors font-semibold';

export function Footer({ showCTA = false }: FooterProps) {
  return (
    <footer className="bg-brand text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 lg:py-20">
        {showCTA && (
          <div className="text-center mb-10 md:mb-14 pb-10 md:pb-14 border-b border-white/10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 leading-[0.88] uppercase tracking-tighter">
              From Finished Job to Paid. In Under a Minute.
            </h3>
            <p className="text-base sm:text-lg text-white/80 font-medium mb-2 max-w-2xl mx-auto leading-[1.15]">
              Describe the job out loud. SMASH does the rest.
            </p>
            <p className="text-sm text-white/50 font-medium mb-6 md:mb-8">
              No credit card required.
            </p>
            <Link
              to="/#signup-form"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-wider sm:tracking-widest hover:brightness-95 transition-all shadow-glow"
            >
              Start Free
            </Link>
          </div>
        )}

        {/* ── TOP: BRAND + DOWNLOAD BUTTONS ─────────────────── */}
        <div className="lg:grid lg:grid-cols-5 lg:gap-12 lg:mb-14">
          <div className="lg:col-span-1 mb-10 lg:mb-0">
            <Link
              to="/"
              className="inline-block text-3xl font-black tracking-tight mb-5"
            >
              SMASH
              <span className="text-accent text-5xl leading-none align-baseline">
                .
              </span>
            </Link>
            <p className="text-base text-white/60 font-medium leading-[1.15] mb-6">
              Describe the job. Get paid. That's it.
            </p>

            {/* Download round buttons */}
            <h3 className="text-sm font-black uppercase tracking-wider mb-3 text-white/50">
              Download
            </h3>
            <div className="flex gap-3 mb-8">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download SMASH on the App Store"
                className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white text-brand font-black text-sm uppercase tracking-wider hover:brightness-95 transition-all"
              >
                <Apple size={18} strokeWidth={2.5} />
                <span>App&nbsp;Store</span>
              </a>
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get the SMASH Chrome extension on the Chrome Web Store"
                className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 text-white font-black text-sm uppercase tracking-wider hover:bg-white/20 transition-all border border-white/15"
              >
                <Chrome size={18} strokeWidth={2.5} />
                <span>Chrome</span>
              </a>
            </div>

            <h3 className="text-sm font-black uppercase tracking-wider mb-3 text-white/50">
              Follow us
            </h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/smashquotes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-accent transition-all flex items-center justify-center group"
                aria-label="Follow us on Facebook"
              >
                <Facebook
                  size={20}
                  strokeWidth={2.5}
                  className="text-white/70 group-hover:text-brand transition-colors"
                />
              </a>
              <a
                href="https://instagram.com/smashquotes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-accent transition-all flex items-center justify-center group"
                aria-label="Follow us on Instagram"
              >
                <Instagram
                  size={20}
                  strokeWidth={2.5}
                  className="text-white/70 group-hover:text-brand transition-colors"
                />
              </a>
            </div>
          </div>

          {/* ── COLLAPSIBLE SECTIONS ─────────────────────────── */}
          <div className="lg:col-span-4 lg:grid lg:grid-cols-4 lg:gap-10">
            {/* COL 1 – Product + Guides */}
            <div className="lg:space-y-8">
              <FooterSection title="Product">
                <li><Link to="/features" className={linkClass}>Features</Link></li>
                <li><Link to="/pricing" className={linkClass}>Pricing</Link></li>
                <li><Link to="/how-it-works" className={linkClass}>How It Works</Link></li>
                <li><Link to="/voice-invoicing" className={linkClass}>Voice Invoicing</Link></li>
                <li><Link to="/ai-invoicing" className={linkClass}>AI Invoicing</Link></li>
                <li><Link to="/gst-compliant-invoicing" className={linkClass}>GST Invoicing</Link></li>
                <li><Link to="/invoice-on-mobile" className={linkClass}>Invoice on Mobile</Link></li>
                <li><Link to="/quote-generator" className={linkClass}>Quote Generator</Link></li>
                <li><Link to="/invoice-generator" className={linkClass}>Invoice Generator</Link></li>
              </FooterSection>

              <FooterSection title="Guides">
                <li><Link to="/tradie-hourly-rates" className={linkClass}>Tradie hourly rates</Link></li>
                <li><Link to="/materials-pricing" className={linkClass}>Materials pricing</Link></li>
                <li><Link to="/customer-approval" className={linkClass}>Customer approval</Link></li>
              </FooterSection>
            </div>

            {/* COL 2 – Tools + Integrations + Compare */}
            <div className="lg:space-y-8">
              <FooterSection title="Free Tools">
                <li><Link to="/tools" className={linkClass}>All free tools</Link></li>
                <li><Link to="/invoice-template" className={linkClass}>Invoice template</Link></li>
                <li><Link to="/gst-calculator" className={linkClass}>GST calculator</Link></li>
                <li><Link to="/hourly-rate-calculator" className={linkClass}>Hourly rate calculator</Link></li>
                <li><Link to="/late-payment-calculator" className={linkClass}>Late payment calculator</Link></li>
                <li><Link to="/profit-calculator" className={linkClass}>Profit calculator</Link></li>
              </FooterSection>

              <FooterSection title="Integrations">
                <li><Link to="/integrations" className={linkClass}>All integrations</Link></li>
                <li><Link to="/integrations/xero" className={linkClass}>SMASH × Xero</Link></li>
                <li><Link to="/integrations/quickbooks" className={linkClass}>SMASH × QuickBooks</Link></li>
              </FooterSection>

              <FooterSection title="Compare">
                <li><Link to="/smash-vs-xero" className={linkClass}>SMASH vs Xero</Link></li>
                <li><Link to="/smash-vs-myob" className={linkClass}>SMASH vs MYOB</Link></li>
                <li><Link to="/smash-vs-servicem8" className={linkClass}>SMASH vs ServiceM8</Link></li>
                <li><Link to="/smash-vs-quickbooks" className={linkClass}>SMASH vs QuickBooks</Link></li>
                <li><Link to="/smash-vs-fergus" className={linkClass}>SMASH vs Fergus</Link></li>
                <li><Link to="/smash-vs-tradify" className={linkClass}>SMASH vs Tradify</Link></li>
                <li><Link to="/smash-vs-invoice2go" className={linkClass}>SMASH vs Invoice2go</Link></li>
                <li><Link to="/smash-vs-joist" className={linkClass}>SMASH vs Joist</Link></li>
                <li><Link to="/smash-vs-rounded" className={linkClass}>SMASH vs Rounded</Link></li>
              </FooterSection>
            </div>

            {/* COL 3 – Company + Countries */}
            <div className="lg:space-y-8">
              <FooterSection title="Company">
                <li><Link to="/founder" className={linkClass}>Meet the Founder</Link></li>
                <li><Link to="/blog" className={linkClass}>Blog</Link></li>
                <li><Link to="/faq" className={linkClass}>FAQ</Link></li>
                <li><Link to="/roadmap" className={linkClass}>Roadmap</Link></li>
                <li><Link to="/changelog" className={linkClass}>Changelog</Link></li>
                <li><Link to="/contact" className={linkClass}>Contact</Link></li>
                <li><Link to="/sitemap" className={linkClass}>Sitemap</Link></li>
              </FooterSection>

              <FooterSection title="Countries">
                <li>
                  <Link to="/" className={linkClass}>
                    Australia <span className="text-white/30 font-medium">· Live</span>
                  </Link>
                </li>
                <li>
                  <Link to="/nz" className={linkClass}>
                    New Zealand <span className="text-white/30 font-medium">· Waitlist</span>
                  </Link>
                </li>
                <li>
                  <Link to="/uk" className={linkClass}>
                    United Kingdom <span className="text-white/30 font-medium">· Waitlist</span>
                  </Link>
                </li>
                <li>
                  <Link to="/us" className={linkClass}>
                    United States <span className="text-white/30 font-medium">· Waitlist</span>
                  </Link>
                </li>
                <li>
                  <Link to="/ca" className={linkClass}>
                    Canada <span className="text-white/30 font-medium">· Waitlist</span>
                  </Link>
                </li>
              </FooterSection>

              <FooterSection title="Legal">
                <li><Link to="/privacy" className={linkClass}>Privacy Policy</Link></li>
                <li><Link to="/terms" className={linkClass}>Terms of Service</Link></li>
              </FooterSection>
            </div>

            {/* COL 4 – Industries */}
            <div>
              <FooterSection title="Industries">
                <li><Link to="/for-cleaners" className={linkClass}>Cleaners</Link></li>
                <li><Link to="/for-plumbers" className={linkClass}>Plumbers</Link></li>
                <li><Link to="/for-electricians" className={linkClass}>Electricians</Link></li>
                <li><Link to="/for-handymen" className={linkClass}>Handymen</Link></li>
                <li><Link to="/for-painters" className={linkClass}>Painters</Link></li>
                <li><Link to="/for-gardeners" className={linkClass}>Gardeners</Link></li>
                <li><Link to="/for-mobile-mechanics" className={linkClass}>Mobile Mechanics</Link></li>
                <li><Link to="/for-hvac" className={linkClass}>HVAC &amp; Air Con</Link></li>
                <li><Link to="/for-pest-control" className={linkClass}>Pest Control</Link></li>
                <li><Link to="/for-concreters" className={linkClass}>Concreters</Link></li>
                <li><Link to="/for-tilers" className={linkClass}>Tilers</Link></li>
                <li><Link to="/for-arborists" className={linkClass}>Arborists</Link></li>
                <li><Link to="/for-locksmiths" className={linkClass}>Locksmiths</Link></li>
                <li><Link to="/for-car-detailers" className={linkClass}>Car Detailers</Link></li>
                <li><Link to="/for-dog-groomers" className={linkClass}>Dog Groomers</Link></li>
                <li><Link to="/for-pool-maintenance" className={linkClass}>Pool Maintenance</Link></li>
                <li><Link to="/for-solar-installers" className={linkClass}>Solar Installers</Link></li>
                <li><Link to="/for-rubbish-removal" className={linkClass}>Rubbish Removal</Link></li>
                <li><Link to="/for-it-repair" className={linkClass}>IT Repair</Link></li>
                <li><Link to="/for-appliance-repair" className={linkClass}>Appliance Repair</Link></li>
                <li><Link to="/for-security-installers" className={linkClass}>Security Installers</Link></li>
                <li><Link to="/for-fencers" className={linkClass}>Fencers</Link></li>
              </FooterSection>

              <div className="mt-8">
                <FooterSection title="Contact">
                  <li>
                    <a
                      href="mailto:dan@smashinvoices.com"
                      className={linkClass}
                    >
                      dan@smashinvoices.com
                    </a>
                  </li>
                </FooterSection>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM LINE ────────────────────────────────────── */}
        <div className="pt-10 border-t border-white/10 mt-10 lg:mt-0">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-3">
            <div>
              <p className="text-sm text-white/40 font-medium">
                © 2026 SMASH. All rights reserved.
              </p>
              <p className="text-sm text-white/30 font-medium mt-1">
                ABN: 58 600 491 085
              </p>
            </div>
            <p className="text-sm text-white/40 font-medium">
              Built in Byron Bay, Australia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
