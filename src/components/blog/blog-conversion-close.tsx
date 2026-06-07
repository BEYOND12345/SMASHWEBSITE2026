import { Apple, Chrome } from 'lucide-react';
import {
  APP_STORE_URL,
  CHROME_STORE_URL,
  IOS_CTA_LABEL,
  CHROME_CTA_LABEL,
} from '../../data/download-urls';

const upgrades = [
  {
    title: 'Pricing DNA',
    body: 'Upload 2–3 old invoices. SMASH maps your labour rates and job types automatically.',
  },
  {
    title: 'Read receipts',
    body: 'Know the second a client opens your invoice link — follow up while you still have leverage.',
  },
  {
    title: 'On-the-spot card payments',
    body: 'Stripe checkout with Apple Pay, Google Pay and instant card processing on every invoice.',
  },
  {
    title: 'Cloud ledger sync',
    body: 'Push to Xero or QuickBooks without retyping line items or double-handling data.',
  },
];

export function BlogConversionClose() {
  return (
    <aside className="mt-16 pt-8 border-t border-white/10">
      <div className="rounded-2xl border-2 border-accent/25 bg-gradient-to-br from-accent/15 to-accent/5 p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-3">
          Stop losing admin hours.
          <span className="block text-accent">Start getting paid faster.</span>
        </h2>
        <p className="font-body text-white/75 text-base mb-8 max-w-2xl leading-[1.5]">
          Voice on-site or Gmail at your desk — same professional invoices, same Pay Now button, zero keyboard tax.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {upgrades.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-brand/40 border border-white/10 p-4"
            >
              <p className="font-black text-accent text-sm uppercase tracking-wide mb-1">
                {item.title}
              </p>
              <p className="font-body text-sm text-white/75 leading-[1.45]">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all"
          >
            <Apple size={18} strokeWidth={2.5} />
            {IOS_CTA_LABEL}
          </a>
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[32px] border-2 border-white/20 text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            <Chrome size={18} strokeWidth={2.5} />
            {CHROME_CTA_LABEL}
          </a>
        </div>
      </div>
    </aside>
  );
}
