import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Chrome,
  Mail,
  Mic,
  Send,
  ChevronDown,
  Star,
  Lock,
  Quote,
  Zap,
  RotateCcw,
  FileText,
} from 'lucide-react';
import { SEO } from '../components/seo';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { StructuredData, createBreadcrumbSchema, createFAQSchema, createVideoSchema } from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { hreflangAlternates } from '../data/country-data';
import { HeroVideo, HeroMockup, PricingDNAMockup, QuoteMockup } from '../components/gmail-sidebar-mockups';

const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/smash-invoices/ilbhjchpeplgaagjkiobgnpgjneeinel';

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
    a: "Your first 5 invoices every month are free. If you hit the cap, you'll get a prompt to upgrade. Starter unlocks unlimited invoices, Xero and QuickBooks sync, and CSV export from $15/month.",
  },
  {
    q: 'Do my customers need to download an app?',
    a: 'No. Your customer gets a clean, professional web link right in their email. They tap it, view the quote, approve it, and pay — all from their phone browser.',
  },
];

const tiers = [
  {
    name: 'Free',
    price: '0',
    volume: '5 invoices a month',
    pitch: 'Feel SMASH on real jobs.',
    highlight: false,
  },
  {
    name: 'Starter',
    price: '15',
    volume: 'Unlimited invoices',
    pitch: 'Accounting sync and CSV export included.',
    highlight: true,
    badge: 'Best Value',
  },
  {
    name: 'Pro',
    price: '25',
    volume: 'Unlimited invoices',
    pitch: 'For service pros invoicing every week.',
    highlight: false,
  },
  {
    name: 'Unlimited',
    price: '35',
    volume: 'Unlimited invoices',
    pitch: 'For busy operators and crews.',
    highlight: false,
  },
];

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button onClick={onClick} className="w-full flex items-center justify-between py-5 text-left gap-4">
        <span className="text-base font-black text-brand uppercase tracking-tighter leading-[0.88]">{q}</span>
        <ChevronDown size={18} className={`shrink-0 text-brand/40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="font-body text-sm text-brand/70 font-medium leading-[1.5] pb-5">{a}</p>}
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
        description="Talk the job. Send the bill. Done. The SMASH Chrome extension docks inside Gmail — start recording or auto-draft from email to build a priced, GST-ready quote in under 60 seconds."
        keywords="SMASH for Gmail, Gmail invoice extension, voice quote chrome extension, gmail quote sidebar, voice to invoice gmail, chrome extension for tradies, gmail invoicing, talk the job send the bill"
        ogTitle="SMASH for Gmail — Talk the Job. Send the Bill. Done."
        ogDescription="From email to paid in under 60 seconds. SMASH docks inside Gmail — start recording or auto-draft from email."
        ogUrl="https://smashinvoices.com/chrome-extension"
        canonical="https://smashinvoices.com/chrome-extension"
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com/' },
        { name: 'SMASH for Gmail', url: 'https://smashinvoices.com/chrome-extension' },
      ])} />
      <StructuredData data={createFAQSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />
      <StructuredData
        data={createVideoSchema({
          name: 'SMASH Invoices — 60 second demo',
          description: 'Turn customer emails into sent invoices inside Gmail with the SMASH Chrome extension.',
          thumbnailUrl: 'https://i.ytimg.com/vi/uNL733tYTf0/maxresdefault.jpg',
          embedUrl: 'https://www.youtube.com/embed/uNL733tYTf0',
          uploadDate: '2026-01-01',
        })}
      />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <Nav ctaUrl={CHROME_STORE_URL} ctaLabel="Add to Chrome" />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-brand pt-16 pb-0 md:pt-24 overflow-hidden relative">
        {/* Subtle background glow behind the video */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none hidden lg:block" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateIn direction="left" className="lg:col-span-5">
              <div className="pb-16 md:pb-24">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] mb-4">
                  <Mail size={13} className="text-accent" strokeWidth={2.5} />
                  <span className="text-accent font-black text-[11px] uppercase tracking-[0.2em]">SMASH for Gmail</span>
                </div>

                <p className="font-body font-black text-xl sm:text-2xl uppercase tracking-[0.12em] text-white/60 mb-3 leading-tight">STOP WASTING TIME.</p>

                <h1 className="font-sans font-black uppercase tracking-tighter leading-[0.88] text-[52px] sm:text-[64px] md:text-[80px] mb-8">
                  <span className="block text-white">Smash out invoices</span>
                  <span className="block text-accent">directly in Gmail.</span>
                </h1>

                <p className="font-body text-base sm:text-lg text-white/70 font-medium leading-[1.55] mb-8 max-w-lg">
                  The magic bridge for QuickBooks &amp; Xero. Our sidebar scans your emails and generates invoices using your own pricing and voice. No new apps. No tab-jumping. Done.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={CHROME_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all animate-pulse-glow whitespace-nowrap"
                  >
                    <Chrome size={17} strokeWidth={2.5} />
                    Add to Chrome
                  </a>
                  <Link
                    to="/how-it-works"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-sm uppercase tracking-wide hover:bg-white hover:text-brand transition-all"
                  >
                    See how it works
                  </Link>
                </div>

                <p className="font-body text-sm text-white/40 italic mt-3 mb-8">Quicker than a sparrow's fart.</p>

                {/* Works with logos */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                  <span className="font-body font-black text-xs sm:text-sm uppercase tracking-[0.2em] text-white/30">Works with</span>
                  <img
                    src="/brand-logos.png"
                    alt="Works with Xero, QuickBooks and Gmail"
                    className="h-14 sm:h-16 w-auto opacity-100"
                  />
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" className="lg:col-span-7 lg:scale-110 lg:translate-x-8">
              <div className="md:pb-24">
                <div className="rounded-[16px] overflow-hidden shadow-[0_0_80px_rgba(200,255,0,0.15)] border border-white/10 relative">
                  <HeroVideo />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── INTEGRATION STRAP ────────────────────────────────────── */}
      <section className="bg-brand border-t border-white/10 py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="font-display font-black text-lg sm:text-xl md:text-2xl uppercase tracking-wide text-white mb-2">
            Simple as: works with Gmail, QuickBooks, Xero, and as a standalone invoicing tool.
          </p>
          <p className="font-body text-sm sm:text-base text-white/50 font-medium">
            Use something else? Email <a href="mailto:dan@smashinvoices.com.au" className="text-accent hover:underline transition-colors">dan@smashinvoices.com.au</a> and I'll add the extension to your network.
          </p>
        </div>
      </section>

      {/* ─── TESTIMONIAL STRIP ────────────────────────────────────── */}
      <section className="bg-[#0D1117] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-white/30 mb-8 text-center">Trusted by tradies</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  quote: "I used to put off quoting until the end of the week. Now I reply before I've left the driveway.",
                  name: 'Jake T.',
                  trade: 'Plumber',
                  city: 'Brisbane',
                },
                {
                  quote: "Holds my prices for every job type. I described a deck sanding and it knew exactly what to charge.",
                  name: 'Mel R.',
                  trade: 'Handywoman',
                  city: 'Melbourne',
                },
                {
                  quote: "The from-email button is unreal. Customer writes in, I tap it, quote's done. Didn't type a word.",
                  name: 'Chris P.',
                  trade: 'Electrician',
                  city: 'Sydney',
                },
                {
                  quote: "Sent 12 invoices in one afternoon. That would have taken me all day before.",
                  name: 'Sam O.',
                  trade: 'Cleaner',
                  city: 'Auckland',
                },
              ].map(({ quote, name, trade, city }) => (
                <div key={name} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-white/75 font-medium leading-[1.55] italic flex-1">"{quote}"</p>
                  <p className="font-display text-xs uppercase tracking-wider text-white/40">{name} · {trade} · {city}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── VIDEO DEMO ───────────────────────────────────────────── */}
      <section className="bg-[#0D1117] py-20 md:py-28 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-accent text-center mb-3">60 second demo</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-10 text-center">
              See it in action.
            </h2>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)] border border-white/10">
              <div className="aspect-video w-full bg-[#0D1117]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/uNL733tYTf0"
                  title="SMASH Invoices — 60 second demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── ANSWER STRIP ─────────────────────────────────────────── */}
      <section className="bg-accent py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-xs font-black uppercase tracking-widest text-brand/50 mb-3">What is SMASH for Gmail?</p>
          <p className="text-lg md:text-xl font-bold text-brand leading-[1.3]">
            SMASH for Gmail is a Chrome extension sidebar that docks inside your inbox. When a job request lands, tap Start Recording and describe the work out loud — or tap From Email and SMASH builds a priced quote directly from the customer's message. Your Pricing DNA matches your voice to your rates instantly, GST is calculated, and one click drops the quote into your Gmail reply.
          </p>
        </div>
      </section>

      {/* ─── STORY 1: TALK THE JOB ────────────────────────────────── */}
      <section className="bg-white py-16 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn direction="left">
              <p className="font-display font-black text-accent text-[11px] uppercase tracking-[0.2em] mb-4">From email to quote</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-6">
                Stop typing<br />invoices.<br />Just talk.
              </h2>
              <p className="font-body text-lg text-brand/65 font-medium leading-[1.6] mb-8 max-w-lg">
                A job request lands in your inbox. Open the SMASH sidebar, tap <strong className="text-brand">Start Recording</strong>, and describe the work out loud — materials, hours, call-out fee. SMASH builds the priced, GST-ready quote in under 60 seconds. No typing. No templates. No brain fog.
              </p>
              <div className="space-y-3">
                {[
                  ['Start Recording', 'Hold and describe the job the way you\'d explain it to a mate.'],
                  ['From Email', 'SMASH reads the customer\'s request and auto-drafts the quote.'],
                  ['Active Context', 'Customer name, email and history pulled from the open inbox thread.'],
                ].map(([title, body]) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <p className="font-body text-sm text-brand/65 font-medium leading-[1.5]"><strong className="text-brand">{title}:</strong> {body}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn direction="right">
              {/* ↓ Replace with <img src="..." /> when screenshot is available */}
              <HeroMockup />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── STORY 2: PRICING DNA ─────────────────────────────────── */}
      <section className="bg-brand py-16 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn direction="left" className="order-2 lg:order-1">
              {/* ↓ Replace with <img src="..." /> when screenshot is available */}
              <PricingDNAMockup />
            </AnimateIn>
            <AnimateIn direction="right" className="order-1 lg:order-2">
              <p className="font-display font-black text-accent text-[11px] uppercase tracking-[0.2em] mb-4">Pricing DNA</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
                It already<br />knows your<br />prices.
              </h2>
              <p className="font-body text-lg text-white/70 font-medium leading-[1.6] mb-8 max-w-lg">
                Upload one old invoice when you sign up. SMASH reads your rates, your job types and your materials and builds your personal Pricing DNA. Every time you describe a job, your voice maps straight to your numbers — no lookup, no guessing.
              </p>
              <div className="space-y-3">
                {[
                  ['Upload one invoice', 'SMASH extracts your labour rates, service types and pricing style.'],
                  ['2,250+ materials catalog', 'Trade materials pre-priced for AU, NZ, UK, US and Canada.'],
                  ['Gets smarter over time', 'The more jobs you run, the better it matches your patterns.'],
                ].map(([title, body]) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <p className="font-body text-sm text-white/65 font-medium leading-[1.5]"><strong className="text-white">{title}:</strong> {body}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── STORY 3: PROFESSIONAL PAID-READY ────────────────────── */}
      <section className="bg-white py-16 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn direction="left">
              <p className="font-display font-black text-accent text-[11px] uppercase tracking-[0.2em] mb-4">Professional. Paid-ready.</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-6">
                Send the bill.<br />Get paid.
              </h2>
              <p className="font-body text-lg text-brand/65 font-medium leading-[1.6] mb-8 max-w-lg">
                One click drops the quote into your Gmail reply. Your customer opens a clean portal link, taps Approve, taps Pay. Read receipts fire the moment they open it. NDIS participant numbers print automatically when saved. Syncs straight to Xero and QuickBooks.
              </p>
              <div className="flex items-center gap-3 flex-wrap mb-6">
                <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.08] border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-white/50 inline-block shrink-0" />
                  <span className="text-[12px] font-black text-white/70">Xero sync</span>
                </div>
                <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.08] border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-white/50 inline-block shrink-0" />
                  <span className="text-[12px] font-black text-white/70">QuickBooks sync</span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  ['Portal link', 'Customer opens from email, approves and pays from their phone.'],
                  ['Read receipts', 'Know the second they open your quote.'],
                  ['NDIS ready', 'Participant numbers print automatically in the Bill To block.'],
                ].map(([title, body]) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <p className="font-body text-sm text-brand/65 font-medium leading-[1.5]"><strong className="text-brand">{title}:</strong> {body}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn direction="right">
              {/* ↓ Replace with <img src="..." /> when screenshot is available */}
              <QuoteMockup />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── CAPABILITY STRIP ─────────────────────────────────────── */}
      <section className="bg-brand py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-white/40 mb-3 text-center">Everything in one sidebar</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-12 text-center max-w-3xl mx-auto">
              No manual entry.<br />No brain fog.<br />No missed details.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { Icon: Mic, title: 'Start Recording', body: 'Describe the job out loud. Line items fill in. GST done. Quote ready.' },
              { Icon: Mail, title: 'From Email', body: 'SMASH reads the customer\'s message and auto-builds the quote without you speaking.' },
              { Icon: Zap, title: 'Pricing DNA', body: 'Your rates, services and materials — all remembered and matched automatically.' },
              { Icon: RotateCcw, title: 'Repeat invoices', body: 'Repeat a sent or paid invoice as a new draft in one tap. Perfect for recurring work.' },
              { Icon: FileText, title: 'NDIS ready', body: 'Save participant numbers per customer. SMASH prints them in every PDF and portal link.' },
              { Icon: Send, title: 'One click to reply', body: 'Drop the quote into your Gmail reply. Customer approves and pays from their phone.' },
              { Icon: Lock, title: 'Privacy first', body: 'We only read the email you have open. Voice recordings are deleted immediately after.' },
              { Icon: Chrome, title: 'Xero + QuickBooks', body: 'Push completed invoices straight to your accounting software. No double entry.' },
            ].map(({ Icon, title, body }, i) => (
              <AnimateIn key={title} direction="up" delay={i * 50}>
                <div className="bg-white/5 border-2 border-white/10 rounded-3xl p-6 h-full hover:border-accent/40 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Icon size={16} className="text-accent" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-base font-black text-white uppercase tracking-tighter leading-[0.95] mb-2">{title}</h3>
                  <p className="font-body text-white/55 font-medium text-sm leading-[1.55]">{body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOUNDER NOTE ─────────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand/40 mb-3">From the founder</p>
            <h2 className="text-4xl sm:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-8">
              This hand<br />does not type.
            </h2>
            <div className="space-y-5 font-body text-base sm:text-lg text-brand/75 font-medium leading-[1.6]">
              <p>I'm Dan. I built SMASH because I know the feeling of the Admin Wall — getting home, opening your inbox, seeing three quote requests, and watching your brain go completely blank.</p>
              <p>You know you need to type out line items, calculate totals, format a PDF and reply. So you put it off. The quote never gets sent. You lose the job.</p>
              <p className="text-brand font-bold">SMASH lives right in your Gmail and does the data entry for you. So you can get your time back.</p>
            </div>
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border">
              <div className="w-12 h-12 rounded-full bg-brand text-white font-black flex items-center justify-center text-lg">D</div>
              <div>
                <p className="font-display text-base text-brand uppercase tracking-tight">Dan Neale</p>
                <p className="font-body text-xs text-brand/50 font-medium">Founder · SMASH Invoices</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand/40 mb-3 text-center">Pricing</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-5 text-center max-w-2xl mx-auto">
              Five free.<br />Unlimited from $15.
            </h2>
            <p className="font-body text-brand/60 font-medium text-base sm:text-lg text-center max-w-2xl mx-auto leading-[1.5] mb-12">
              Free gives you 5 invoices to feel the product. Starter unlocks unlimited invoices, Xero/QuickBooks sync and CSV export.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map((t, i) => {
              const isFree = t.price === '0';
              return (
                <AnimateIn key={t.name} direction="up" delay={i * 60}>
                  <div className={`relative rounded-3xl p-7 h-full flex flex-col border-2 ${t.highlight ? 'bg-brand text-white border-brand' : 'bg-white border-border'}`}>
                    {t.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-brand font-black text-[10px] uppercase tracking-widest">
                        {t.badge}
                      </span>
                    )}
                    <p className={`font-display text-xs uppercase tracking-[0.2em] mb-3 ${t.highlight ? 'text-white/50' : 'text-brand/40'}`}>{t.name}</p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className={`text-base font-bold ${t.highlight ? 'text-white/50' : 'text-brand/50'}`}>$</span>
                      <span className={`text-5xl font-black tabular-nums leading-none ${t.highlight ? 'text-white' : 'text-brand'}`}>{t.price}</span>
                      {!isFree && <span className={`text-sm font-bold ${t.highlight ? 'text-white/50' : 'text-brand/50'}`}>/mo</span>}
                    </div>
                    <p className={`font-display text-sm uppercase tracking-tight mb-2 ${t.highlight ? 'text-white' : 'text-brand'}`}>{t.volume}</p>
                    <p className={`font-body text-sm font-medium leading-[1.5] mb-6 flex-1 ${t.highlight ? 'text-white/65' : 'text-brand/55'}`}>{t.pitch}</p>
                    <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-5 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all ${t.highlight ? 'bg-accent text-brand hover:brightness-95' : 'bg-brand text-white hover:bg-brand/90'}`}>
                      Start Free
                    </a>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
          <p className="text-center font-body text-xs text-brand/30 font-medium mt-8">All prices in AUD. Same plan worldwide. Cancel anytime.</p>
        </div>
      </section>

      {/* ─── TESTIMONIAL ──────────────────────────────────────────── */}
      <section className="bg-surface py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_#C8FF00_1px,_transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-accent fill-accent" />)}
          </div>
          <Quote size={28} className="text-brand/30 mx-auto mb-4" />
          <blockquote>
            <p className="font-display text-2xl md:text-3xl uppercase tracking-tighter leading-[0.95] text-brand mb-6">
              "Customer emails a job request. I hold the button, describe it in 20 seconds, drop it into the reply. They've approved it before I've left the driveway."
            </p>
            <p className="font-body text-brand/50 text-sm">Marcus W. — plumber, Byron Bay</p>
          </blockquote>
        </div>
      </section>

      {/* ─── RELATED LANDING PAGES ───────────────────────────────── */}
      <section className="bg-surface py-16 md:py-20 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-2xl sm:text-3xl font-black text-brand uppercase tracking-tighter mb-8 text-center">
              Gmail workflows by platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { to: '/gmail-invoice', label: 'Gmail invoice extension', desc: 'General email-to-invoice and quoting in Gmail.' },
                { to: '/integrations/gmail-xero-quote-builder', label: 'Gmail + Xero quotes', desc: 'Xero quote builder in your inbox.' },
                { to: '/integrations/gmail-quickbooks-estimate-generator', label: 'Gmail + QuickBooks estimates', desc: 'QBO estimates without CSV import.' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block rounded-2xl border-2 border-border bg-white p-6 hover:border-accent transition-colors"
                >
                  <p className="font-black text-brand uppercase tracking-tight mb-2">{item.label}</p>
                  <p className="font-body text-sm text-brand/60 font-medium">{item.desc}</p>
                </Link>
              ))}
            </div>
          </AnimateIn>
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
                <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────── */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter leading-[0.88]">
              Your inbox is<br />full of jobs.
            </h2>
            <p className="font-body text-lg text-white/65 font-medium leading-[1.5] mb-8 max-w-xl mx-auto">
              SMASH turns them into invoices while you're still on the road.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-brand font-black text-base uppercase tracking-widest hover:brightness-95 transition-all animate-pulse-glow whitespace-nowrap">
                <Chrome size={18} strokeWidth={2.5} />
                Add to Chrome
              </a>
              <Link to="/voice-invoicing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-base uppercase tracking-wide hover:bg-white hover:text-brand transition-all">
                See how voice works
              </Link>
            </div>
            <p className="text-sm text-white/35 font-medium">No credit card needed. Cancel anytime.</p>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
