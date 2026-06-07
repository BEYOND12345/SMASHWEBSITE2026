import { Apple, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  APP_STORE_URL,
  CHROME_STORE_URL,
  IOS_CTA_LABEL,
  CHROME_CTA_LABEL,
} from '../../data/download-urls';

export function BlogWorkspaceRouter() {
  return (
    <section
      className="mb-12 rounded-2xl border-2 border-accent/25 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent overflow-hidden"
      aria-labelledby="blog-workspace-heading"
    >
      <div className="px-6 py-5 md:px-8 md:py-6 border-b border-accent/20">
        <h2
          id="blog-workspace-heading"
          className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter"
        >
          Choose your hands-free workspace
        </h2>
      </div>

      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
        <div className="p-6 md:p-8">
          <p className="font-body text-sm text-white/50 font-semibold uppercase tracking-wider mb-2">
            On your laptop / desktop
          </p>
          <p className="font-body text-base text-white/75 mb-4 leading-[1.5]">
            Copying numbers from client emails or fumbling with manual dashboards?
          </p>
          <p className="font-black text-white text-lg uppercase tracking-tight mb-2">
            Get SMASH for Chrome
          </p>
          <p className="font-body text-sm text-white/60 mb-5 leading-[1.5]">
            Build and push line-itemed invoices from Gmail in under 20 seconds.
          </p>
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent text-brand font-black text-xs uppercase tracking-widest hover:brightness-95 transition-all"
          >
            <Chrome size={16} strokeWidth={2.5} />
            {CHROME_CTA_LABEL}
          </a>
          <p className="mt-4 text-xs">
            <Link to="/chrome-extension" className="text-accent font-semibold hover:underline">
              See Gmail extension features →
            </Link>
          </p>
        </div>

        <div className="p-6 md:p-8">
          <p className="font-body text-sm text-white/50 font-semibold uppercase tracking-wider mb-2">
            In your truck / on-site
          </p>
          <p className="font-body text-base text-white/75 mb-4 leading-[1.5]">
            Dirty hands, cracked screen, no patience for typing on glass?
          </p>
          <p className="font-black text-white text-lg uppercase tracking-tight mb-2">
            Get SMASH for mobile
          </p>
          <p className="font-body text-sm text-white/60 mb-5 leading-[1.5]">
            Talk for 30 seconds. Drive away with the invoice already sent.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-brand font-black text-xs uppercase tracking-widest hover:brightness-95 transition-all"
          >
            <Apple size={16} strokeWidth={2.5} />
            {IOS_CTA_LABEL}
          </a>
        </div>
      </div>

      <div className="px-6 py-5 md:px-8 bg-white/[0.03] border-t border-white/10">
        <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-3">
          Global compliance regions
        </p>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm text-white/65 font-medium leading-snug">
          <li>
            <strong className="text-white">US:</strong> Sales tax, QuickBooks sync
          </li>
          <li>
            <strong className="text-white">UK:</strong> VAT-compliant invoices, ledger sync
          </li>
          <li>
            <strong className="text-white">CA / NZ / AU:</strong> Local tax rules, Xero integration
          </li>
        </ul>
      </div>
    </section>
  );
}
