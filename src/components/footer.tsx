import { Link } from 'react-router-dom';
import { useState, ReactNode } from 'react';
import { Facebook, Instagram, Apple, Chrome, ChevronDown, Youtube, Mail, ArrowRight } from 'lucide-react';
import {
  APP_STORE_URL,
  CHROME_STORE_URL,
  IOS_DOWNLOAD_LABEL,
} from '../data/download-urls';

interface FooterProps {
  showCTA?: boolean;
}

const linkClass =
  'text-base text-white/70 hover:text-accent transition-colors font-semibold';

const headingClass =
  'text-sm font-black uppercase tracking-wider text-white/50';

/**
 * Mobile-collapsible footer section. Under `lg` each section renders as
 * a toggleable accordion; at `lg` and above the heading is a plain label
 * and the content is always shown.
 */
function FooterSection({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 lg:border-0 py-4 lg:py-0 first:border-t lg:first:border-0">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className={`lg:hidden flex w-full items-center justify-between gap-4 ${headingClass}`}
      >
        <span>{title}</span>
        <ChevronDown
          size={18}
          strokeWidth={2.5}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <h3 className={`hidden lg:block ${headingClass} mb-5`}>{title}</h3>
      <div className={`${open ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
        <ul className="space-y-3">{children}</ul>
      </div>
    </div>
  );
}

/**
 * Full-width disclosure bar used at the bottom of the footer to hide the
 * long Compare and Industries lists by default. Toggles on every breakpoint.
 * When opened, the children render in a multi-column grid for compactness.
 */
function FooterDisclosure({
  title,
  count,
  children,
  cols = 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
}: {
  title: string;
  count: number;
  children: ReactNode;
  cols?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-white/10">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 py-5 group"
      >
        <span className="flex items-center gap-3">
          <span className={headingClass}>{title}</span>
          <span className="text-xs font-bold text-white/30 tabular-nums">
            {count}
          </span>
        </span>
        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/40 group-hover:text-accent transition-colors">
          {open ? 'Hide' : 'Show'}
          <ChevronDown
            size={16}
            strokeWidth={2.5}
            className={`transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </span>
      </button>
      {open && (
        <ul className={`grid grid-cols-1 ${cols} gap-x-6 gap-y-3 pb-6`}>
          {children}
        </ul>
      )}
    </div>
  );
}

export function Footer({ showCTA = false }: FooterProps) {
  return (
    <footer className="bg-brand text-white border-t-4 border-accent/40">
      {/* ── MEGA DOWNLOAD STRIP (always visible) ───────────────── */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 md:py-20 lg:py-24">
          <p className="text-center text-brand/50 font-black text-xs uppercase tracking-[0.25em] mb-4">
            Download SMASH
          </p>
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand uppercase tracking-tighter leading-[0.9] mb-4 md:mb-6">
            Get paid faster.
            <span className="block">Pick your workflow.</span>
          </h2>
          <p className="text-center font-body text-base md:text-lg text-brand/70 font-medium max-w-2xl mx-auto mb-10 md:mb-14">
            Voice invoicing on iOS, or quote straight from Gmail with our Chrome extension. Free to start.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto">
            <Link
              to="/chrome-extension"
              className="group flex flex-col rounded-[28px] bg-brand p-8 md:p-10 border-2 border-brand hover:border-white/20 transition-all shadow-xl"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Mail size={22} className="text-brand" strokeWidth={2.5} />
                </div>
                <span className="text-accent font-black text-xs uppercase tracking-[0.2em]">Most popular for desk work</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-3">
                SMASH for Gmail
              </h3>
              <p className="font-body text-base text-white/65 font-medium leading-[1.5] mb-8 flex-1">
                Chrome extension in your inbox. Scan emails, build quotes, sync to Xero &amp; QuickBooks — without leaving Gmail.
              </p>
              <span className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest group-hover:brightness-95 transition-all w-full sm:w-auto">
                <Chrome size={18} strokeWidth={2.5} />
                See Gmail extension
                <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <div className="flex flex-col rounded-[28px] bg-white p-8 md:p-10 border-2 border-white shadow-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center">
                  <Apple size={22} className="text-white" strokeWidth={2.5} />
                </div>
                <span className="text-brand/50 font-black text-xs uppercase tracking-[0.2em]">On the job site</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.9] mb-3">
                SMASH for iOS
              </h3>
              <p className="font-body text-base text-brand/65 font-medium leading-[1.5] mb-8 flex-1">
                Talk the job on your phone. Professional invoice before you leave the driveway.
              </p>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all w-full sm:w-auto"
              >
                <Apple size={18} strokeWidth={2.5} />
                {IOS_DOWNLOAD_LABEL}
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand font-bold text-sm uppercase tracking-wide hover:underline"
            >
              <Chrome size={16} strokeWidth={2.5} />
              Or add to Chrome directly
            </a>
            {showCTA && (
              <Link
                to="/#signup-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-brand/30 text-brand font-black text-sm uppercase tracking-wider hover:bg-brand/5 transition-all"
              >
                Start free on web
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-20 lg:py-24">

        {/* ── PRIMARY ROW ────────────────────────────────────── */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 mb-2 lg:mb-12">
          {/* Brand + Download + Social */}
          <div className="lg:col-span-4 mb-10 lg:mb-0">
            <Link
              to="/"
              className="inline-block text-3xl font-black tracking-tight mb-5"
            >
              SMASH
              <span className="text-accent text-5xl leading-none align-baseline">
                .
              </span>
            </Link>
            <p className="text-base text-white/60 font-medium leading-[1.15] mb-6 max-w-xs">
              Describe the job. Get paid. That's it.
            </p>

            <h3 className={`${headingClass} mb-3`}>Quick download</h3>
            <div className="flex flex-col gap-3 mb-6">
              <Link
                to="/chrome-extension"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-accent text-brand font-black text-sm uppercase tracking-wider hover:brightness-95 transition-all"
              >
                <Chrome size={18} strokeWidth={2.5} />
                <span>SMASH for Gmail</span>
              </Link>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download SMASH on the App Store"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white text-brand font-black text-sm uppercase tracking-wider hover:brightness-95 transition-all"
              >
                <Apple size={18} strokeWidth={2.5} />
                <span>Download the iOS app</span>
              </a>
            </div>

            <h3 className={`${headingClass} mb-3`}>Follow us</h3>
            <div className="flex gap-3">
              <a
                href="https://youtube.com/@smashinvoices"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-accent transition-all flex items-center justify-center group"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube
                  size={20}
                  strokeWidth={2.5}
                  className="text-white/70 group-hover:text-brand transition-colors"
                />
              </a>
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

          {/* Three balanced columns of essentials */}
          <div className="lg:col-span-8 lg:grid lg:grid-cols-3 lg:gap-8">
            {/* COL 1 — Product + Guides */}
            <div className="lg:space-y-8">
              <FooterSection title="Product">
                <li><Link to="/features" className={linkClass}>Features</Link></li>
                <li><Link to="/pricing" className={linkClass}>Pricing</Link></li>
                <li><Link to="/how-it-works" className={linkClass}>How It Works</Link></li>
                <li><Link to="/voice-invoicing" className={linkClass}>Send invoice fast</Link></li>
                <li><Link to="/ai-invoicing" className={linkClass}>AI Invoicing</Link></li>
                <li><Link to="/gst-compliant-invoicing" className={linkClass}>GST Invoicing</Link></li>
                <li>
                  <Link to="/chrome-extension" className="text-base text-accent hover:text-white transition-colors font-black">
                    SMASH for Gmail (Chrome)
                  </Link>
                </li>
                <li>
                  <Link to="/smash-leads" className="text-base text-accent hover:text-white transition-colors font-black">
                    Smash Leads — Gmail CRM
                  </Link>
                </li>
              </FooterSection>

              <FooterSection title="Guides">
                <li><Link to="/tradie-hourly-rates" className={linkClass}>Tradie hourly rates</Link></li>
                <li><Link to="/materials-pricing" className={linkClass}>Materials pricing</Link></li>
                <li><Link to="/customer-approval" className={linkClass}>Customer approval</Link></li>
                <li><Link to="/for-ndis-support-workers" className={linkClass}>NDIS invoicing</Link></li>
              </FooterSection>
            </div>

            {/* COL 2 — Free Tools + Integrations */}
            <div className="lg:space-y-8">
              <FooterSection title="Free Tools">
                <li><Link to="/tools" className={linkClass}>All free tools</Link></li>
                <li><Link to="/quote-generator" className={linkClass}>Quote generator</Link></li>
                <li><Link to="/invoice-generator" className={linkClass}>Invoice generator</Link></li>
                <li><Link to="/invoice-template" className={linkClass}>Invoice template</Link></li>
                <li><Link to="/gst-calculator" className={linkClass}>GST calculator</Link></li>
                <li><Link to="/hourly-rate-calculator" className={linkClass}>Hourly rate calculator</Link></li>
                <li><Link to="/late-payment-calculator" className={linkClass}>Late payment calculator</Link></li>
                <li><Link to="/profit-calculator" className={linkClass}>Profit calculator</Link></li>
              </FooterSection>

              <FooterSection title="Integrations">
                <li><Link to="/integrations" className={linkClass}>All integrations</Link></li>
                <li><Link to="/gmail-invoice" className={linkClass}>Gmail invoice extension</Link></li>
                <li><Link to="/integrations/gmail-xero-quote-builder" className={linkClass}>Gmail + Xero quotes</Link></li>
                <li><Link to="/integrations/gmail-quickbooks-estimate-generator" className={linkClass}>Gmail + QuickBooks estimates</Link></li>
                <li><Link to="/integrations/xero" className={linkClass}>SMASH × Xero</Link></li>
                <li><Link to="/integrations/quickbooks" className={linkClass}>SMASH × QuickBooks</Link></li>
              </FooterSection>
            </div>

            {/* COL 3 — Company + Countries + Legal */}
            <div className="lg:space-y-8">
              <FooterSection title="Company">
                <li><Link to="/founder" className={linkClass}>Meet the Founder</Link></li>
                <li><Link to="/blog" className={linkClass}>Blog</Link></li>
                <li><Link to="/faq" className={linkClass}>FAQ</Link></li>
                <li><Link to="/roadmap" className={linkClass}>Roadmap</Link></li>
                <li><Link to="/changelog" className={linkClass}>Changelog</Link></li>
                <li><Link to="/contact" className={linkClass}>Contact</Link></li>
                <li><Link to="/sitemap" className={linkClass}>Sitemap</Link></li>
                <li>
                  <a href="https://www.youtube.com/@smashinvoices" target="_blank" rel="noopener noreferrer" className={linkClass}>
                    YouTube
                  </a>
                </li>
              </FooterSection>

              <FooterSection title="Countries">
                <li><Link to="/" className={linkClass}>Australia</Link></li>
                <li><Link to="/nz" className={linkClass}>New Zealand</Link></li>
                <li><Link to="/uk" className={linkClass}>United Kingdom</Link></li>
                <li><Link to="/us" className={linkClass}>United States</Link></li>
                <li><Link to="/ca" className={linkClass}>Canada</Link></li>
              </FooterSection>

              <FooterSection title="Legal">
                <li><Link to="/privacy" className={linkClass}>Privacy Policy</Link></li>
                <li><Link to="/terms" className={linkClass}>Terms of Service</Link></li>
                <li>
                  <a href="mailto:dan@smashinvoices.com" className={linkClass}>
                    dan@smashinvoices.com
                  </a>
                </li>
              </FooterSection>
            </div>
          </div>
        </div>

        {/* ── DISCLOSURES (hidden by default, multi-column when open) ── */}
        <FooterDisclosure
          title="Compare SMASH vs alternatives"
          count={9}
          cols="sm:grid-cols-2 md:grid-cols-3"
        >
          <li><Link to="/smash-vs-xero" className={linkClass}>SMASH vs Xero</Link></li>
          <li><Link to="/smash-vs-myob" className={linkClass}>SMASH vs MYOB</Link></li>
          <li><Link to="/smash-vs-servicem8" className={linkClass}>SMASH vs ServiceM8</Link></li>
          <li><Link to="/smash-vs-quickbooks" className={linkClass}>SMASH vs QuickBooks</Link></li>
          <li><Link to="/smash-vs-fergus" className={linkClass}>SMASH vs Fergus</Link></li>
          <li><Link to="/smash-vs-tradify" className={linkClass}>SMASH vs Tradify</Link></li>
          <li><Link to="/smash-vs-invoice2go" className={linkClass}>SMASH vs Invoice2go</Link></li>
          <li><Link to="/smash-vs-joist" className={linkClass}>SMASH vs Joist</Link></li>
          <li><Link to="/smash-vs-rounded" className={linkClass}>SMASH vs Rounded</Link></li>
        </FooterDisclosure>

        <FooterDisclosure
          title="Browse by industry"
          count={23}
          cols="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
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
          <li><Link to="/for-ndis-support-workers" className={linkClass}>NDIS Support Workers</Link></li>
        </FooterDisclosure>

        {/* ── BOTTOM LINE ────────────────────────────────────── */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-sm text-white/40 font-medium">
                © 2026 SMASH. All rights reserved.
              </p>
              <p className="text-sm text-white/30 font-medium mt-1">
                ABN: 58 600 491 085
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.youtube.com/@smashinvoices"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
              >
                YouTube
              </a>
              <p className="text-sm text-white/40 font-medium">
                Built in Byron Bay, Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
