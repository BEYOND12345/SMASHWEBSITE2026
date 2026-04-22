import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Chrome,
  Mail,
  Mic,
  Send,
  ChevronDown,
  Check,
  Star,
  Lock,
  Inbox,
  FileDown,
  Quote,
} from 'lucide-react';
import { SEO } from '../components/seo';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { StructuredData, createBreadcrumbSchema, createFAQSchema } from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { hreflangAlternates } from '../data/country-data';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/search/smash%20invoices';

// ── Copy data ────────────────────────────────────────────────────────────────
// All headlines stay sentence-case in the source — Tailwind `uppercase` class
// renders them in caps. This keeps screen-reader text readable and respects
// the brand voice rule.

const steps = [
  {
    n: '01',
    title: 'Open the email.',
    body:
      "SMASH reads the customer's name and email straight from your open Gmail thread. No copying, no pasting, no setup.",
  },
  {
    n: '02',
    title: "Talk… or don't.",
    body:
      'Hit the mic and describe the job in plain English ("standard package, 4 hours, travel fee"). Not in the mood to talk? Hit Generate from email and SMASH builds the quote straight from the customer\'s written request.',
  },
  {
    n: '03',
    title: 'Your prices, instantly.',
    body:
      'SMASH matches the work against your personal Pricing DNA or our built-in materials catalog. The line items fill in. The math is done. The tax is calculated.',
  },
  {
    n: '04',
    title: 'Format and send.',
    body:
      'Need an Estimate instead of a Quote? Swap it with one click. Then drop a clean, formatted reply straight into your Gmail thread, or generate a branded PDF to attach.',
  },
];

const features = [
  {
    icon: Inbox,
    title: 'Your prices. In every quote. Automatically.',
    body:
      'Build your catalog once. Every time you speak a service, SMASH already knows what you charge. It gets faster every time you use it. After a few weeks, regular work invoices itself in under 20 seconds.',
  },
  {
    icon: FileDown,
    title: 'Materials priced automatically.',
    body:
      'Stop guessing what parts cost. Over 2,250 Australian trade materials priced and built in. Speak the materials, the exact price drops into the quote.',
  },
  {
    icon: Send,
    title: 'They approve it. They pay it. Done.',
    body:
      "Customers get a link in the email. One tap to approve from their phone. One tap to pay. You'll know the second they open it. No more \"I never got it.\"",
  },
  {
    icon: Check,
    title: 'One click to your accountant.',
    body:
      'Push your completed estimates and invoices straight to Xero or QuickBooks Online. No double-entry. No midnight bookkeeping.',
  },
];

const proofRows: { method: string; time: string; isSmash?: boolean }[] = [
  { method: 'Excel / Word template', time: '15–25 minutes' },
  { method: 'Traditional invoice app (typing)', time: '5–10 minutes' },
  { method: 'SMASH — new job', time: 'Under 60 seconds', isSmash: true },
  { method: 'SMASH — with your catalog', time: 'Under 30 seconds', isSmash: true },
];

const tiers = [
  {
    name: 'Free',
    price: '0',
    volume: '2 quotes a month',
    pitch: 'Test SMASH on real jobs.',
    highlight: false,
  },
  {
    name: 'Starter',
    price: '12',
    volume: '20 quotes a month',
    pitch: 'Built for the side-hustle and weekenders.',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '29',
    volume: '35 quotes a month',
    pitch: 'For service pros quoting every day.',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Unlimited',
    price: '49',
    volume: 'Unlimited quotes',
    pitch: 'For lead-rich businesses and crews.',
    highlight: false,
  },
];

const privacy = [
  {
    title: 'Gmail-only.',
    body: 'We only read the exact email you have open. We never scan your inbox or read your other tabs.',
  },
  {
    title: 'Audio is deleted.',
    body: 'Your voice recordings are used to build the quote, then immediately discarded.',
  },
  {
    title: 'Safe injection.',
    body:
      'Every quote pasted into your Gmail compose box is scrubbed and clean. No tracking pixels, no hidden code.',
  },
];

const faqs = [
  {
    q: 'Do I need to be a tradie to use this?',
    a: 'Not at all. SMASH is built for any self-employed service pro who hates admin. Photographers, dog groomers, cleaners, consultants and mobile mechanics use SMASH to kill the brain fog and clear their inboxes.',
  },
  {
    q: 'How does it know my prices?',
    a: 'When you first sign in, you can upload an old PDF invoice. SMASH reads it, learns your rates, and builds your "Pricing DNA." You can also upload a CSV of your services, or just set your hourly rate and fees right in the sidebar.',
  },
  {
    q: 'Does it work with my accounting software?',
    a: 'Yes. SMASH has first-class integrations with Xero and QuickBooks Online. A single click pushes your estimate or invoice straight into your books. We automatically detect your tax region and match your totals perfectly.',
  },
  {
    q: 'What happens if I hit my free limit?',
    a: "Your first 2 quotes every month are totally free. If you hit the cap, you'll get a prompt to upgrade. Paid plans start at just $12/month.",
  },
  {
    q: 'Do my customers need to download an app?',
    a: 'No. Your customer gets a clean, professional web link right in their email. They tap it, view the quote, approve it, and pay — all from their phone browser.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button onClick={onClick} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="text-base font-black text-brand uppercase tracking-tighter leading-[0.88]">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-brand/40 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && <p className="font-body text-sm text-brand/70 font-medium leading-[1.5] pb-5">{a}</p>}
    </div>
  );
}

/**
 * Stylised Gmail mockup with the SMASH side panel docked on the right.
 * Pure CSS — no images, scales cleanly on mobile, doesn't need real assets.
 */
function GmailMockup() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-white text-[10px] text-slate-400 font-mono truncate">
          mail.google.com/mail/u/0/#inbox
        </div>
      </div>

      {/* Gmail header bar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-slate-200">
        <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center">
          <Mail size={14} className="text-white" strokeWidth={2.5} />
        </div>
        <span className="text-slate-700 font-bold text-sm">Inbox</span>
        <span className="ml-auto text-[10px] text-slate-400 font-medium">1 of 248</span>
      </div>

      <div className="grid grid-cols-5">
        {/* Open email — left side */}
        <div className="col-span-3 p-4 bg-white space-y-3">
          <div>
            <p className="text-[11px] font-bold text-slate-700 leading-tight">
              Sarah Whitman
            </p>
            <p className="text-[10px] text-slate-400 leading-tight">to me · 9:14 AM</p>
          </div>
          <p className="text-[11px] font-bold text-slate-800 leading-tight">
            Quote — wedding photography, 14 June
          </p>
          <div className="space-y-1.5 text-[10px] text-slate-500 leading-[1.4]">
            <p>Hi — would love a quote for our wedding on June 14th.</p>
            <p>Ceremony 2pm in Bangalow, reception in Byron.</p>
            <p>Need 6 hours coverage, two photographers, all edited photos.</p>
            <p className="text-slate-400">Thanks, Sarah</p>
          </div>
          <div className="flex gap-2 pt-2">
            <div className="px-2.5 py-1 rounded bg-slate-100 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
              Reply
            </div>
            <div className="px-2.5 py-1 rounded bg-slate-100 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
              Forward
            </div>
          </div>
        </div>

        {/* SMASH sidebar — right side */}
        <div className="col-span-2 bg-brand p-4 space-y-3 border-l border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-white font-black text-sm tracking-tight">
              SMASH<span className="text-accent">.</span>
            </span>
            <span className="text-[8px] uppercase tracking-widest text-white/40 font-bold">
              Gmail
            </span>
          </div>

          <div className="rounded-xl bg-white/[0.06] border border-white/10 p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Mic size={13} className="text-brand" strokeWidth={3} />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Recording…</p>
                <p className="text-[10px] text-white/85 font-medium truncate">"Premium package, 6 hrs, 2 shooters"</p>
              </div>
            </div>
            <div className="flex items-end gap-[2px] h-5">
              {[3, 5, 8, 12, 9, 14, 7, 11, 6, 10, 4, 8, 11, 5, 9, 7, 12, 6].map((h, i) => (
                <span key={i} className="flex-1 bg-accent/70 rounded-sm" style={{ height: `${h * 6}%` }} />
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-3 space-y-1.5">
            <div className="flex justify-between text-[10px]">
              <span className="text-white/55 font-medium truncate pr-2">Premium package</span>
              <span className="text-white font-bold tabular-nums">$2,400</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-white/55 font-medium truncate pr-2">2nd shooter, 6 hrs</span>
              <span className="text-white font-bold tabular-nums">$720</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-white/55 font-medium truncate pr-2">Edits + delivery</span>
              <span className="text-white font-bold tabular-nums">$480</span>
            </div>
            <div className="border-t border-white/10 pt-1.5 flex justify-between text-[10px]">
              <span className="text-white/70 font-bold uppercase tracking-wider">Total inc. GST</span>
              <span className="text-accent font-black tabular-nums">$3,960</span>
            </div>
          </div>

          <button className="w-full rounded-full bg-accent text-brand font-black text-[10px] uppercase tracking-widest py-2.5 flex items-center justify-center gap-1.5">
            <Send size={11} strokeWidth={3} />
            Drop into reply
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export function ChromeExtension() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="SMASH for Gmail — Voice-Powered Quotes from Your Inbox | SMASH Invoices"
        description="The SMASH Invoices Chrome extension is a Gmail sidebar tool that turns customer emails into priced quotes using your voice. Open the email, speak the job for 30 seconds, send a professional GST-compliant quote — synced to Xero or QuickBooks. Built for self-employed service pros."
        keywords="SMASH for Gmail, Gmail invoice extension, voice quote chrome extension, gmail quote sidebar, voice to invoice gmail, chrome extension for tradies, gmail invoicing, photographer invoicing, freelancer quote tool"
        ogTitle="SMASH for Gmail — The Fastest Way to Clear Your Inbox"
        ogDescription="Turn customer emails into priced quotes in under 60 seconds. Speak the job. Reply without leaving Gmail."
        ogUrl="https://smashinvoices.com/chrome-extension"
        canonical="https://smashinvoices.com/chrome-extension"
        hreflangs={hreflangAlternates}
      />

      <StructuredData
        data={createBreadcrumbSchema([
          { name: 'Home', url: 'https://smashinvoices.com/' },
          { name: 'SMASH for Gmail', url: 'https://smashinvoices.com/chrome-extension' },
        ])}
      />
      <StructuredData data={createFAQSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-brand pt-16 pb-0 md:pt-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="left">
              <div className="pb-16 md:pb-24">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 mb-5">
                  <Mail size={13} className="text-accent" strokeWidth={2.5} />
                  <span className="text-accent font-black text-[11px] uppercase tracking-[0.2em]">
                    SMASH for Gmail
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
                  The fastest way<br />to clear your<br />
                  <span className="text-accent">inbox.</span>
                </h1>
                <p className="font-body text-lg text-white/80 font-medium leading-[1.5] mb-8 max-w-md">
                  Turn customer emails into priced quotes in under 60 seconds. Speak the job, let SMASH do the math, and reply without ever leaving Gmail.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={CHROME_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-95 transition-all"
                  >
                    Start Free
                  </a>
                  <Link
                    to="/how-it-works"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-white/10 transition-all"
                  >
                    See how it works
                  </Link>
                </div>
                <p className="font-body text-sm text-white/45 font-medium mt-5">
                  No credit card needed. Send your first quote in 60 seconds.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="md:pb-24">
                <GmailMockup />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── ANSWER / SCHEMA BLOCK ────────────────────────────────── */}
      <section className="bg-accent py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-xs font-black uppercase tracking-widest text-brand/50 mb-3">
            What is SMASH for Gmail?
          </p>
          <p className="text-lg md:text-xl font-bold text-brand leading-[1.3]">
            The SMASH Invoices Chrome extension is a Gmail sidebar tool that turns customer emails into priced quotes using your voice. Built for self-employed service workers and freelancers, you simply open a customer email, speak the job details for 30 seconds, and SMASH automatically builds a professional, GST-compliant quote using your personal rates. It syncs directly to Xero and QuickBooks Online without any manual typing.
          </p>
        </div>
      </section>

      {/* ─── EMPATHY / FOUNDER LETTER ─────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand/40 mb-3">
              From the founder
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-8">
              This hand<br />does not type.
            </h2>
            <div className="space-y-5 font-body text-base sm:text-lg text-brand/75 font-medium leading-[1.6]">
              <p>
                I'm Dan. I'm a developer, but I'm also a working service pro. I built SMASH because I know the feeling of the "Admin Wall."
              </p>
              <p>
                It's that moment you get home, open your inbox, and see three quote requests. You know you need to type out line items, calculate totals, format a PDF, and reply. So the brain fog sets in. You put it off. The quote never gets sent. You lose the job.
              </p>
              <p className="text-brand font-bold">
                Numbers are confusing. Typing is exhausting. SMASH is the fix. It lives right in your Gmail and does the data entry for you, so you can get your time back.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
              <div className="w-12 h-12 rounded-full bg-brand text-white font-black flex items-center justify-center text-lg">
                D
              </div>
              <div>
                <p className="font-display text-base text-brand uppercase tracking-tight">Dan Neale</p>
                <p className="font-body text-xs text-brand/50 font-medium">Founder · SMASH Invoices</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── HOW IT WORKS — 4 STEPS ───────────────────────────────── */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3 text-center">
              Four steps
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-12 text-center max-w-3xl mx-auto">
              From email to paid<br />in 4 steps.
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <AnimateIn key={s.n} direction="up" delay={i * 60}>
                <div className="bg-white/5 border-2 border-white/10 rounded-3xl p-7 h-full">
                  <p className="text-accent font-black text-sm uppercase tracking-widest mb-3">{s.n}</p>
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-3">
                    {s.title}
                  </h3>
                  <p className="font-body text-white/65 font-medium text-sm leading-[1.55]">{s.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE FEATURES ────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand/40 mb-3 text-center">
              Why it works
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12 text-center max-w-2xl mx-auto">
              It already knows<br />your business.
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <AnimateIn key={i} direction="up" delay={i * 60}>
                <div className="rounded-3xl border-2 border-border hover:border-accent transition-all p-7 sm:p-8 h-full">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-5">
                    <f.icon size={18} className="text-brand" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-black text-brand uppercase tracking-tighter leading-[0.95] mb-3">
                    {f.title}
                  </h3>
                  <p className="font-body text-brand/65 font-medium text-sm leading-[1.55]">{f.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROOF — TIME COMPARISON ──────────────────────────────── */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand/40 mb-3 text-center">
              The proof
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-12 text-center max-w-2xl mx-auto">
              Why SMASH is<br />actually fast.
            </h2>
          </AnimateIn>
          <div className="overflow-x-auto bg-white rounded-3xl border-2 border-border p-2 sm:p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 sm:px-6 text-sm font-black text-brand/50 uppercase tracking-wide">
                    Method
                  </th>
                  <th className="text-right py-4 px-4 sm:px-6 text-sm font-black text-brand/50 uppercase tracking-wide">
                    Time to invoice
                  </th>
                </tr>
              </thead>
              <tbody>
                {proofRows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-border last:border-0 ${row.isSmash ? 'bg-accent/5' : ''}`}
                  >
                    <td
                      className={`py-4 px-4 sm:px-6 text-sm font-bold leading-[1.15] ${
                        row.isSmash ? 'text-brand' : 'text-brand/60'
                      }`}
                    >
                      {row.method}
                    </td>
                    <td
                      className={`text-right py-4 px-4 sm:px-6 text-sm font-black tabular-nums ${
                        row.isSmash ? 'text-accent' : 'text-brand/50'
                      }`}
                    >
                      {row.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────────────── */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3 text-center">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-5 text-center max-w-2xl mx-auto">
              Pay for volume,<br />not features.
            </h2>
            <p className="font-body text-white/65 font-medium text-base sm:text-lg text-center max-w-2xl mx-auto leading-[1.5] mb-12">
              We don't hold features back for higher tiers. Every plan gets Xero/QuickBooks sync, PDF exports, the customer portal and the materials catalog. Lock in our introductory launch pricing for life.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map((t, i) => {
              const isFree = t.price === '0';
              return (
                <AnimateIn key={t.name} direction="up" delay={i * 60}>
                  <div
                    className={`relative rounded-3xl p-7 h-full flex flex-col ${
                      t.highlight
                        ? 'bg-accent text-brand border-2 border-accent'
                        : 'bg-white/5 border-2 border-white/10 text-white'
                    }`}
                  >
                    {t.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand text-accent font-black text-[10px] uppercase tracking-widest border border-accent">
                        {t.badge}
                      </span>
                    )}
                    <p
                      className={`font-display text-xs uppercase tracking-[0.2em] mb-3 ${
                        t.highlight ? 'text-brand/60' : 'text-white/40'
                      }`}
                    >
                      {t.name}
                    </p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className={`text-base font-bold ${t.highlight ? 'text-brand/60' : 'text-white/50'}`}>$</span>
                      <span
                        className={`text-5xl font-black tabular-nums leading-none ${
                          t.highlight ? 'text-brand' : 'text-white'
                        }`}
                      >
                        {t.price}
                      </span>
                      {!isFree && (
                        <span className={`text-sm font-bold ${t.highlight ? 'text-brand/60' : 'text-white/50'}`}>
                          /mo
                        </span>
                      )}
                    </div>
                    <p
                      className={`font-display text-sm uppercase tracking-tight mb-2 ${
                        t.highlight ? 'text-brand' : 'text-white/85'
                      }`}
                    >
                      {t.volume}
                    </p>
                    <p
                      className={`font-body text-sm font-medium leading-[1.5] mb-6 flex-1 ${
                        t.highlight ? 'text-brand/70' : 'text-white/55'
                      }`}
                    >
                      {t.pitch}
                    </p>
                    <a
                      href={CHROME_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-5 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all ${
                        t.highlight
                          ? 'bg-brand text-accent hover:brightness-110'
                          : 'bg-accent text-brand hover:brightness-95'
                      }`}
                    >
                      Start Free
                    </a>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

          <p className="text-center font-body text-xs text-white/35 font-medium mt-8">
            All prices in AUD. Same plan worldwide. Cancel anytime.
          </p>
        </div>
      </section>

      {/* ─── PRIVACY & SECURITY ───────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand/40 mb-3">
                  Privacy &amp; security
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] max-w-md">
                  Trusted with<br />your books.
                </h2>
              </div>
              <div className="hidden sm:flex w-14 h-14 rounded-full bg-brand items-center justify-center shrink-0">
                <Lock size={22} className="text-accent" strokeWidth={2.5} />
              </div>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {privacy.map((p, i) => (
              <AnimateIn key={i} direction="up" delay={i * 60}>
                <div className="rounded-2xl bg-surface border-2 border-border p-6 h-full">
                  <h3 className="text-base font-black text-brand uppercase tracking-tight leading-[1] mb-3">
                    {p.title}
                  </h3>
                  <p className="font-body text-sm text-brand/65 font-medium leading-[1.55]">{p.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ──────────────────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-accent fill-accent" />
            ))}
          </div>
          <Quote size={28} className="text-brand/30 mx-auto mb-4" />
          <blockquote>
            <p className="font-display text-2xl md:text-3xl uppercase tracking-tighter leading-[0.95] text-brand mb-6">
              "I cleared eleven quote requests on a Sunday morning between coffees. None of them got typed. Three booked the same week."
            </p>
            <p className="font-body text-brand/50 text-sm">
              Marcus W. — wedding photographer, Byron Bay
            </p>
          </blockquote>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10 md:mb-14 text-center">
              Frequently asked<br />questions
            </h2>
            <div className="bg-surface rounded-3xl border-2 border-border px-4 sm:px-8 py-2 sm:py-4">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────── */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-[0.88]">
              Pin it to Gmail.<br />Clear your inbox.
            </h2>
            <p className="font-body text-lg text-white/70 font-medium leading-[1.5] mb-8 max-w-xl mx-auto">
              Free on the Chrome Web Store. One click to install. Send your first quote in under 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-95 transition-all"
              >
                <Chrome size={18} strokeWidth={2.5} />
                Start Free
              </a>
              <Link
                to="/voice-invoicing"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-white/10 transition-all"
              >
                See how voice works
              </Link>
            </div>
            <p className="text-sm text-white/40 font-medium">
              No credit card needed. Cancel anytime.
            </p>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
