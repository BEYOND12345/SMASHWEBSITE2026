import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { Plus, Zap, Wrench, ArrowRight, Star } from 'lucide-react';
import { Nav } from '../components/nav';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

type ChangeType = 'new' | 'improved' | 'fixed';

interface Change {
  type: ChangeType;
  text: string;
}

interface Release {
  version: string;
  date: string;
  label?: string;
  headline: string;
  summary: string;
  changes: Change[];
}

const releases: Release[] = [
  {
    version: '1.4',
    date: 'March 2026',
    label: 'Latest',
    headline: 'Read receipts & payment tracking',
    summary: 'Now you know the moment your client opens your invoice — and whether they\'ve paid. No more chasing in the dark.',
    changes: [
      { type: 'new',      text: 'Read receipts — see when your client opens a quote or invoice' },
      { type: 'new',      text: 'Payment status tracking across all open invoices' },
      { type: 'new',      text: 'Overdue invoice badge with days-outstanding counter' },
      { type: 'improved', text: 'Invoice list sorted by status — unpaid first, paid last' },
      { type: 'improved', text: 'Faster quote loading on slow connections' },
      { type: 'fixed',    text: 'GST calculation rounding on items over $10,000' },
    ],
  },
  {
    version: '1.3',
    date: 'February 2026',
    headline: 'Stripe payments — get paid on the spot',
    summary: 'Your clients can now pay directly from the invoice link. Tap, pay, done. Money hits your account within 2 business days.',
    changes: [
      { type: 'new',      text: 'Stripe payment integration — clients pay from the invoice link' },
      { type: 'new',      text: 'Pay Now button on all sent invoices' },
      { type: 'new',      text: 'Payment confirmation email to client and you automatically' },
      { type: 'new',      text: 'Payout history in the app' },
      { type: 'improved', text: 'Invoice PDF now includes QR code linking to payment page' },
      { type: 'fixed',    text: 'Occasional crash when sending invoices on poor signal' },
    ],
  },
  {
    version: '1.2',
    date: 'January 2026',
    headline: 'Customer management & repeat client history',
    summary: 'Repeat clients are now remembered automatically. Pull up their address, past quotes, and job history in seconds.',
    changes: [
      { type: 'new',      text: 'Customer profiles created automatically from invoice details' },
      { type: 'new',      text: 'Full quote and invoice history per client' },
      { type: 'new',      text: 'Saved addresses — no re-typing for return jobs' },
      { type: 'new',      text: 'Client search by name or address' },
      { type: 'improved', text: 'Voice recognition now learns your regular clients\' names' },
      { type: 'improved', text: 'Faster app startup on older iPhones' },
      { type: 'fixed',    text: 'Client name sometimes not appearing on emailed PDF' },
    ],
  },
  {
    version: '1.1',
    date: 'December 2025',
    headline: 'GST improvements & PDF customisation',
    summary: 'Tax invoices now meet every ATO requirement out of the box. Plus the first wave of branding options — your business name and ABN, always front and centre.',
    changes: [
      { type: 'new',      text: 'Full ATO-compliant tax invoice format with all required fields' },
      { type: 'new',      text: 'ABN displayed prominently on every invoice' },
      { type: 'new',      text: 'GST-exclusive and GST-inclusive line item toggle' },
      { type: 'new',      text: 'Business name and contact details on PDF header' },
      { type: 'improved', text: 'PDF layout — more professional, cleaner spacing' },
      { type: 'improved', text: 'Voice command now accepts "plus GST" naturally in descriptions' },
      { type: 'fixed',    text: 'Invoice numbering occasionally skipping a number' },
      { type: 'fixed',    text: 'Email sometimes landing in spam — fixed sender authentication' },
    ],
  },
  {
    version: '1.0',
    date: 'November 2025',
    label: 'Launch',
    headline: 'SMASH launches on the App Store',
    summary: 'The first version. Voice-to-invoice in under 60 seconds. The core loop that everything else is built on top of.',
    changes: [
      { type: 'new', text: 'Voice-to-quote — describe the job out loud, get a full quote' },
      { type: 'new', text: 'Instant PDF generation with professional layout' },
      { type: 'new', text: 'One-tap email send to customer' },
      { type: 'new', text: 'AI learns your labour rates and pricing style from your first few quotes' },
      { type: 'new', text: 'Quote list with status tracking' },
      { type: 'new', text: 'Free plan — 2 quotes per month, no card needed' },
    ],
  },
];

const changeIcon: Record<ChangeType, { icon: typeof Plus; color: string; label: string }> = {
  new:      { icon: Plus,   color: 'text-accent',    label: 'New' },
  improved: { icon: Zap,    color: 'text-blue-400',  label: 'Improved' },
  fixed:    { icon: Wrench, color: 'text-white/40',  label: 'Fixed' },
};

export function Changelog() {
  return (
    <>
      <SEO
        title="Changelog | SMASH Invoices Release Notes"
        description="Every update to SMASH Invoices. See what's new, what's improved, and what's been fixed in each release."
        keywords="SMASH invoices changelog, release notes, app updates, new features"
        ogTitle="SMASH Changelog — Every Update"
        ogDescription="Every update to SMASH Invoices. See what's new, improved, and fixed."
        canonical="https://smashinvoices.com/changelog"
      />

      <Nav />

      {/* HERO */}
      <section className="bg-brand pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-5">Release notes</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
              Every update.<br />Nothing hidden.
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/65 font-medium leading-[1.5] max-w-2xl">
              SMASH gets updated constantly. Here's everything that's changed — new features, improvements, and fixes — most recent first.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* CHANGELOG ENTRIES */}
      <section className="bg-brand pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">

          {/* Legend */}
          <AnimateIn direction="up">
            <div className="flex flex-wrap items-center gap-4 mb-12 pt-2 border-t border-white/10">
              {(Object.entries(changeIcon) as [ChangeType, typeof changeIcon[ChangeType]][]).map(([, { icon: Icon, color, label }]) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon size={13} className={color} strokeWidth={2.5} />
                  <span className={`text-xs font-bold uppercase tracking-widest ${color}`}>{label}</span>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Release entries */}
          <div className="space-y-8">
            {releases.map((release, ri) => (
              <AnimateIn key={ri} direction="up" delay={ri * 60}>
                <div className={`rounded-[32px] border-2 overflow-hidden ${
                  ri === 0 ? 'border-accent/30 bg-white/[0.04]' : 'border-white/10 bg-white/[0.02]'
                }`}>
                  {/* Release header */}
                  <div className={`px-8 py-6 border-b ${ri === 0 ? 'border-accent/20' : 'border-white/8'}`}>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-full ${
                            ri === 0 ? 'bg-accent text-brand' : 'bg-white/10 text-white/50'
                          }`}>
                            v{release.version}
                          </span>
                          {release.label && (
                            <span className={`text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                              release.label === 'Latest' ? 'bg-accent/20 text-accent border border-accent/30' : 'bg-white/8 text-white/40 border border-white/10'
                            }`}>
                              {release.label}
                            </span>
                          )}
                          <span className="font-body text-xs font-medium text-white/35 uppercase tracking-widest">{release.date}</span>
                        </div>
                        <h2 className={`text-xl sm:text-2xl font-black uppercase tracking-tighter leading-[0.92] ${
                          ri === 0 ? 'text-white' : 'text-white/70'
                        }`}>
                          {release.headline}
                        </h2>
                      </div>
                    </div>
                    <p className={`font-body text-sm font-medium leading-[1.6] mt-3 max-w-2xl ${
                      ri === 0 ? 'text-white/65' : 'text-white/40'
                    }`}>
                      {release.summary}
                    </p>
                  </div>

                  {/* Change list */}
                  <div className="px-8 py-6">
                    <ul className="space-y-3">
                      {release.changes.map((change, ci) => {
                        const { icon: Icon, color } = changeIcon[change.type];
                        return (
                          <li key={ci} className="flex items-start gap-3">
                            <Icon size={14} className={`${color} shrink-0 mt-0.5`} strokeWidth={2.5} />
                            <span className={`font-body text-sm font-medium leading-[1.5] ${
                              ri === 0 ? 'text-white/75' : 'text-white/40'
                            }`}>
                              {change.text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* What's coming */}
              <div className="bg-white rounded-[24px] border-2 border-border p-7">
                <h3 className="text-xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-2">
                  What's coming next?
                </h3>
                <p className="font-body text-brand/55 font-medium text-sm leading-[1.5] mb-5">
                  See what's in development and what's planned for upcoming releases.
                </p>
                <Link
                  to="/roadmap"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[32px] bg-brand text-white font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all"
                >
                  View roadmap
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </div>
              {/* Try it now */}
              <div className="bg-brand rounded-[24px] p-7">
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-accent fill-accent" />
                  ))}
                  <span className="font-body text-xs font-semibold text-white/45 ml-2">4.9 App Store</span>
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-2">
                  Want to use it today?
                </h3>
                <p className="font-body text-white/55 font-medium text-sm leading-[1.5] mb-5">
                  Everything in the latest release is live now. Free to download, free to start.
                </p>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[32px] bg-accent text-brand font-black text-xs uppercase tracking-widest hover:brightness-95 transition-all"
                >
                  Start Free
                </a>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
