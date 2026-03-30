import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { StructuredData, createBreadcrumbSchema } from '../components/structured-data';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { CheckCircle2, Circle, Zap, Clock, Lightbulb, Rocket } from 'lucide-react';
import { Nav } from '../components/nav';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

type Status = 'live' | 'building' | 'soon' | 'planned' | 'considering';

interface RoadmapItem {
  title: string;
  desc: string;
  status: Status;
  tag?: string;
}

const roadmap: { section: string; icon: typeof Rocket; status: Status; color: string; items: RoadmapItem[] }[] = [
  {
    section: 'Just shipped',
    icon: CheckCircle2,
    status: 'live',
    color: 'text-accent',
    items: [
      { title: 'Read receipts', desc: 'See the exact moment your client opens your quote or invoice. No more wondering.', status: 'live' },
      { title: 'Payment via Stripe', desc: 'Clients tap a button, pay right there. Money hits your account within 2 business days.', status: 'live' },
      { title: 'Customer history', desc: 'Every client\'s past quotes and invoices in one place. Repeat work done faster.', status: 'live' },
      { title: 'Voice-to-quote in under 60s', desc: 'The core. Speak the job, SMASH builds the quote. Sent before you leave the driveway.', status: 'live', tag: 'Core' },
    ],
  },
  {
    section: 'Building now',
    icon: Zap,
    status: 'building',
    color: 'text-accent',
    items: [
      { title: 'Android app', desc: 'Full feature parity with iOS. Same voice-to-invoice speed, same simplicity. Coming to the Play Store.', status: 'building', tag: 'Big one' },
      { title: 'Quote-to-invoice in one tap', desc: 'Job approved? Convert your quote to a tax invoice instantly. No re-typing anything.', status: 'building' },
      { title: 'Job photo attachments', desc: 'Attach before/after photos to quotes and invoices directly from your camera roll.', status: 'building' },
    ],
  },
  {
    section: 'Coming soon',
    icon: Clock,
    status: 'soon',
    color: 'text-white/70',
    items: [
      { title: 'Xero integration', desc: 'Push invoices directly into Xero. Your accountant will finally stop chasing you.', status: 'soon', tag: 'Requested' },
      { title: 'Quote templates', desc: 'Save your most common jobs as templates. One tap to load, one sentence to customise.', status: 'soon' },
      { title: 'Deposit requests', desc: 'Request a deposit before the job starts. Clients pay it right from the quote link.', status: 'soon' },
      { title: 'Custom branding', desc: 'Add your logo and brand colours. Every invoice looks like it came from a proper business.', status: 'soon' },
    ],
  },
  {
    section: 'On the roadmap',
    icon: Rocket,
    status: 'planned',
    color: 'text-white/40',
    items: [
      { title: 'Recurring invoices', desc: 'Set up weekly or monthly invoices for maintenance clients. Send without lifting a finger.', status: 'planned' },
      { title: 'MYOB integration', desc: 'For those who live in MYOB. Push jobs straight through without double entry.', status: 'planned' },
      { title: 'Team accounts', desc: 'Add employees or subcontractors. Everyone quotes under your business name.', status: 'planned', tag: 'Popular request' },
      { title: 'Materials cost tracker', desc: 'Log what you bought for a job. SMASH adds it to the invoice automatically.', status: 'planned' },
    ],
  },
  {
    section: 'Under consideration',
    icon: Lightbulb,
    status: 'considering',
    color: 'text-white/30',
    items: [
      { title: 'Client portal', desc: 'Give clients a login to see all their quotes and invoices in one place.', status: 'considering' },
      { title: 'GPS job tracking', desc: 'Log time on site automatically. Bill accurately without watching the clock.', status: 'considering' },
      { title: 'Supplier price lists', desc: 'Import your supplier pricing. SMASH auto-fills materials costs from what you actually pay.', status: 'considering' },
    ],
  },
];

const statusBadge: Record<Status, { label: string; classes: string }> = {
  live:       { label: 'Live',        classes: 'bg-accent text-brand' },
  building:   { label: 'Building',    classes: 'bg-accent/20 text-accent border border-accent/40' },
  soon:       { label: 'Coming soon', classes: 'bg-white/10 text-white/70 border border-white/20' },
  planned:    { label: 'Planned',     classes: 'bg-white/5 text-white/40 border border-white/10' },
  considering:{ label: 'Considering', classes: 'bg-white/5 text-white/30 border border-white/10' },
};

export function Roadmap() {
  return (
    <>
      <SEO
        title="Roadmap | What's Coming to SMASH Invoices"
        description="See what's being built, what's coming soon, and what's on the horizon for SMASH Invoices. Built for tradies, updated constantly."
        keywords="SMASH invoices roadmap, upcoming features, invoice app updates, voice invoicing features"
        ogTitle="SMASH Roadmap — What's Coming"
        ogDescription="See what's being built, what's shipping soon, and what's planned for SMASH Invoices."
        canonical="https://smashinvoices.com/roadmap"
      />
      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com' },
        { name: 'Roadmap', url: 'https://smashinvoices.com/roadmap' },
      ])} />

      <Nav />

      {/* HERO */}
      <section className="bg-brand pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden relative">
        {/* Ambient accent glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-5">Product roadmap</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
              What we're<br />building next.
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/65 font-medium leading-[1.5] max-w-2xl mb-10">
              SMASH is built by one person, for tradies. Every item here came from real feedback from real users.
              If you want something on this list, use the app — your voice shapes what gets built.
            </p>
          </AnimateIn>

          {/* Status legend */}
          <AnimateIn direction="up" delay={100}>
            <div className="flex flex-wrap gap-3">
              {(Object.entries(statusBadge) as [Status, typeof statusBadge[Status]][]).map(([, { label, classes }]) => (
                <span key={label} className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${classes}`}>
                  {label}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ROADMAP SECTIONS */}
      <section className="bg-brand pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 space-y-16 md:space-y-24">
          {roadmap.map((group, gi) => {
            const Icon = group.icon;
            return (
              <AnimateIn key={gi} direction="up" delay={gi * 60}>
                {/* Section header */}
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                  <Icon size={20} className={group.color} strokeWidth={2.5} />
                  <h2 className={`text-sm font-black uppercase tracking-widest ${group.color}`}>
                    {group.section}
                  </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.items.map((item, ii) => {
                    const badge = statusBadge[item.status];
                    const isLive = item.status === 'live';
                    const isBuilding = item.status === 'building';
                    return (
                      <div
                        key={ii}
                        className={`rounded-[24px] p-6 border-2 transition-all ${
                          isLive
                            ? 'bg-accent/8 border-accent/25'
                            : isBuilding
                            ? 'bg-white/5 border-accent/20'
                            : 'bg-white/[0.03] border-white/8'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h3 className={`text-base sm:text-lg font-black uppercase tracking-tighter leading-[0.95] ${
                            isLive || isBuilding ? 'text-white' : 'text-white/50'
                          }`}>
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 shrink-0">
                            {item.tag && (
                              <span className="text-[10px] font-black uppercase tracking-widest bg-accent/20 text-accent px-2 py-1 rounded-full whitespace-nowrap">
                                {item.tag}
                              </span>
                            )}
                            <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full whitespace-nowrap ${badge.classes}`}>
                              {badge.label}
                            </span>
                          </div>
                        </div>
                        <p className={`font-body text-sm font-medium leading-[1.5] ${
                          isLive || isBuilding ? 'text-white/65' : 'text-white/30'
                        }`}>
                          {item.desc}
                        </p>
                        {isLive && (
                          <div className="flex items-center gap-1.5 mt-4">
                            <CheckCircle2 size={13} className="text-accent" strokeWidth={2.5} />
                            <span className="text-xs font-black text-accent uppercase tracking-widest">Available now</span>
                          </div>
                        )}
                        {isBuilding && (
                          <div className="flex items-center gap-1.5 mt-4">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-xs font-black text-accent/80 uppercase tracking-widest">In development</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </section>

      {/* FEEDBACK + TRY IT CTAs */}
      <section className="bg-brand py-16 md:py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feedback */}
            <AnimateIn direction="left">
              <div className="bg-accent rounded-[32px] p-8 md:p-10 h-full flex flex-col">
                <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">
                  Want something<br />on this list?
                </h2>
                <p className="font-body text-brand/70 font-medium text-base leading-[1.5] mb-8 flex-1">
                  Email Dan directly. Every feature here started as a message from someone using the app on a real job.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:dan@smashinvoices.com"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-[32px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
                  >
                    Send feedback
                  </a>
                  <Link
                    to="/changelog"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-[32px] border-2 border-brand/30 text-brand font-black text-sm uppercase tracking-widest hover:bg-brand/10 transition-all"
                  >
                    See what's shipped
                  </Link>
                </div>
              </div>
            </AnimateIn>
            {/* Try it */}
            <AnimateIn direction="right">
              <div className="bg-white/5 border-2 border-white/10 rounded-[32px] p-8 md:p-10 h-full flex flex-col">
                <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-3">
                  Ready to use<br />what's live?
                </h2>
                <p className="font-body text-white/60 font-medium text-base leading-[1.5] mb-8 flex-1">
                  Voice-to-invoice, read receipts, Stripe payments, customer history — all available right now. Free to start.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all"
                  >
                    Start Free
                  </a>
                  <Link
                    to="/how-it-works"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-[32px] border-2 border-white/20 text-white font-bold text-sm uppercase tracking-wide hover:bg-white/10 transition-all"
                  >
                    See How It Works
                  </Link>
                </div>
                <p className="font-body text-xs text-white/30 font-medium mt-4">No credit card · Cancel anytime</p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
