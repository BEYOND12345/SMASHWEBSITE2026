import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Footer } from '../components/footer';
import { Mic, Tag, Package, UserCheck, Eye, Zap, CreditCard, BarChart2, ChevronRight } from 'lucide-react';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does SMASH generate a quote from voice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You describe the job out loud for 20–30 seconds — the same way you'd explain it to a mate. SMASH transcribes your speech, matches items against your personal pricing catalog and materials database, and builds a structured, priced quote automatically. No typing, no templates, no app navigation."
      }
    },
    {
      "@type": "Question",
      "name": "Does SMASH produce GST-compliant invoices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every invoice SMASH generates includes your ABN, a GST line item, the invoice date, and an itemised job description — all required fields for a valid Australian tax invoice."
      }
    },
    {
      "@type": "Question",
      "name": "Can customers pay directly from the quote link?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every quote includes a link your customer opens on their phone. They review the quote, approve it with one tap, and can pay immediately via Stripe. No phone calls, no printing, no chasing."
      }
    },
    {
      "@type": "Question",
      "name": "What is the personal pricing catalog?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your pricing catalog is a list of services and prices you build once inside SMASH. When you describe a job, SMASH matches your words to items in your catalog and fills in your prices automatically. After a few weeks of use, repeat jobs invoice themselves in under 30 seconds."
      }
    }
  ]
};

export function Features() {
  return (
    <>
      <SEO
        title="Features | Voice Invoicing App for Service Businesses | SMASH Invoices"
        description="SMASH Invoices features: voice-to-quote in 60 seconds, personal pricing catalog, automatic materials pricing, customer approval portal, and read receipts. Built for Australian service businesses."
        keywords="invoicing app features Australia, invoice app for service businesses, voice invoicing features, SMASH Invoices features"
        ogTitle="SMASH Invoices — Features"
        ogDescription="Voice-to-quote in 60 seconds. Personal pricing catalog. Customer approval portal. Everything you need to get paid without the admin."
        ogImage="https://smashinvoices.com/og-image.png"
        ogUrl="https://smashinvoices.com/features"
        twitterTitle="SMASH Invoices — Features"
        twitterDescription="Voice-to-quote in 60 seconds. Everything you need to get paid without the admin."
        canonical="https://smashinvoices.com/features"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* NAV */}
      <nav className="bg-brand/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 md:py-6 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black tracking-tight text-white">
            SMASH<span className="text-accent text-4xl leading-none align-baseline">.</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/how-it-works" className="hidden md:block px-3 md:px-4 py-2 md:py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
              How It Works
            </Link>
            <Link to="/pricing" className="hidden md:block px-3 md:px-4 py-2 md:py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
              Pricing
            </Link>
            <Link to="/#signup-form" className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-[32px] bg-accent text-brand font-black text-xs sm:text-sm uppercase tracking-wide hover:brightness-95 transition-all">
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero_image.png"
            alt="SMASH Invoices features"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/90 to-brand/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-accent font-black text-sm uppercase tracking-widest mb-4">Features</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.88] uppercase tracking-tighter">
            Everything built<br />to get you paid.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium leading-[1.15] max-w-2xl mb-8">
            SMASH is the fastest way to send an invoice. Every feature exists to close the gap between finishing a job and getting paid for it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/#signup-form"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-95 transition-all"
            >
              Start Free
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] border-2 border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-white/10 transition-all"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* SPEED PROOF BAR */}
      <section className="bg-accent py-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-brand">
            <div className="text-center">
              <span className="block text-3xl font-black leading-none">&lt;60s</span>
              <span className="text-xs font-bold uppercase tracking-wide opacity-70">New job, new customer</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-brand/20"></div>
            <div className="text-center">
              <span className="block text-3xl font-black leading-none">&lt;30s</span>
              <span className="text-xs font-bold uppercase tracking-wide opacity-70">With your pricing catalog</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-brand/20"></div>
            <div className="text-center">
              <span className="block text-3xl font-black leading-none">15–25 min</span>
              <span className="text-xs font-bold uppercase tracking-wide opacity-70">Traditional invoicing</span>
            </div>
          </div>
        </div>
      </section>

      {/* CLUSTER 1 — QUOTE ON THE JOB */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-accent font-black text-xs uppercase tracking-widest mb-3">Quote on the job</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">
            No keyboard. No templates.<br />Just talk.
          </h2>
          <p className="text-brand/60 font-medium leading-[1.15] max-w-2xl mb-12 md:mb-16">
            The only thing stopping most service businesses from invoicing is the effort of doing it. SMASH removes that barrier completely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Voice to quote */}
            <div className="bg-surface rounded-[32px] border-2 border-border p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Mic size={24} className="text-accent" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-black text-brand uppercase tracking-tighter leading-[0.88]">Voice to quote</h3>
              </div>
              <p className="text-brand/70 font-medium leading-[1.15] mb-4">
                Describe the job the way you'd explain it to a mate — 20 to 30 seconds. SMASH builds the quote. You don't type a single character.
              </p>
              <ul className="space-y-2 mb-6">
                {["Works on any job, any trade", "Professional PDF generated automatically", "GST-compliant, ABN included", "Sent via link — no email required"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm font-medium text-brand/70">
                    <ChevronRight size={16} className="shrink-0 mt-0.5 text-accent" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/voice-invoicing" className="mt-auto inline-flex items-center gap-1 text-sm font-black text-accent uppercase tracking-wide hover:gap-2 transition-all">
                Learn about voice invoicing <ChevronRight size={16} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Personal pricing catalog */}
            <div className="bg-surface rounded-[32px] border-2 border-border p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Tag size={24} className="text-accent" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-black text-brand uppercase tracking-tighter leading-[0.88]">Your pricing catalog</h3>
              </div>
              <p className="text-brand/70 font-medium leading-[1.15] mb-4">
                Build your price list once. Every time you mention a service you offer, SMASH fills in your price automatically. Your rates. Every time. No guessing.
              </p>
              <ul className="space-y-2 mb-6">
                {["Set your own prices for any service", "Matched from your voice automatically", "Gets faster with every job", "Under 30 seconds for repeat work"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm font-medium text-brand/70">
                    <ChevronRight size={16} className="shrink-0 mt-0.5 text-accent" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/features/pricing-catalog" className="mt-auto inline-flex items-center gap-1 text-sm font-black text-accent uppercase tracking-wide hover:gap-2 transition-all">
                Learn about pricing catalog <ChevronRight size={16} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Materials pricing */}
            <div className="bg-surface rounded-[32px] border-2 border-border p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Package size={24} className="text-accent" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-black text-brand uppercase tracking-tighter leading-[0.88]">Materials priced automatically</h3>
              </div>
              <p className="text-brand/70 font-medium leading-[1.15] mb-4">
                Over 2,250 Australian trade materials already priced inside SMASH. Mention the materials in your voice description — they're added to the quote automatically. No looking up, no guessing.
              </p>
              <ul className="space-y-2 mb-6">
                {["2,250+ AU trade items pre-loaded", "Priced from your voice description", "Stop undercharging on materials", "Markup included automatically"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm font-medium text-brand/70">
                    <ChevronRight size={16} className="shrink-0 mt-0.5 text-accent" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/features/materials-pricing" className="mt-auto inline-flex items-center gap-1 text-sm font-black text-accent uppercase tracking-wide hover:gap-2 transition-all">
                Learn about materials pricing <ChevronRight size={16} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Fastest invoicing */}
            <div className="bg-surface rounded-[32px] border-2 border-border p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Zap size={24} className="text-accent" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-black text-brand uppercase tracking-tighter leading-[0.88]">Invoice sent before you leave</h3>
              </div>
              <p className="text-brand/70 font-medium leading-[1.15] mb-4">
                The entire flow — speak the job, review the quote, send it — takes under 60 seconds. For repeat jobs with your catalog, under 30. No other invoicing method comes close.
              </p>
              <ul className="space-y-2 mb-6">
                {["Under 60 seconds, new job", "Under 30 seconds, repeat work", "Quote sent before you leave the driveway", "No other app matches this speed"].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm font-medium text-brand/70">
                    <ChevronRight size={16} className="shrink-0 mt-0.5 text-accent" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/features/fastest-invoicing" className="mt-auto inline-flex items-center gap-1 text-sm font-black text-accent uppercase tracking-wide hover:gap-2 transition-all">
                See the speed proof <ChevronRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CLUSTER 2 — GET PAID FASTER */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-accent font-black text-xs uppercase tracking-widest mb-3">Get paid faster</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">
            They approve it.<br />They pay it. Done.
          </h2>
          <p className="text-brand/60 font-medium leading-[1.15] max-w-2xl mb-12 md:mb-16">
            Sending the quote is only half the job. SMASH closes the loop — customer approval, payment, and confirmation, all from a single link.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[32px] border-2 border-border p-8 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                <UserCheck size={24} className="text-accent" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">Customer approval portal</h3>
              <p className="text-brand/70 font-medium text-sm leading-[1.15] mb-4">
                Customer gets a link. They open it on their phone, review the quote, and tap approve. No printing, no signing, no "can you resend it?"
              </p>
              <Link to="/features/customer-approval" className="mt-auto inline-flex items-center gap-1 text-sm font-black text-accent uppercase tracking-wide hover:gap-2 transition-all">
                Learn more <ChevronRight size={16} strokeWidth={2.5} />
              </Link>
            </div>

            <div className="bg-white rounded-[32px] border-2 border-border p-8 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                <Eye size={24} className="text-accent" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">Read receipts</h3>
              <p className="text-brand/70 font-medium text-sm leading-[1.15] mb-4">
                You'll know the second they open it. No more wondering if it arrived. No more guessing when to follow up. Just certainty.
              </p>
              <p className="mt-auto text-xs font-bold text-brand/40 uppercase tracking-wide">Included on all paid plans</p>
            </div>

            <div className="bg-white rounded-[32px] border-2 border-border p-8 flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                <CreditCard size={24} className="text-accent" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">Payment collection</h3>
              <p className="text-brand/70 font-medium text-sm leading-[1.15] mb-4">
                Customers pay directly from their approval link via Stripe. Quote approved, payment taken, invoice issued — automatically, in sequence.
              </p>
              <p className="mt-auto text-xs font-bold text-brand/40 uppercase tracking-wide">Powered by Stripe</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLUSTER 3 — KNOW YOUR MONEY */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-accent font-black text-xs uppercase tracking-widest mb-3">Know your money</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">
            Know exactly where<br />your money is.
          </h2>
          <p className="text-brand/60 font-medium leading-[1.15] max-w-2xl mb-12 md:mb-16">
            SMASH tracks what's been quoted, approved, invoiced, and paid. No spreadsheet. No mental queue. No forgotten jobs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <div className="bg-surface rounded-[32px] border-2 border-border p-8">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                <BarChart2 size={24} className="text-accent" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">Reporting</h3>
              <p className="text-brand/70 font-medium text-sm leading-[1.15]">
                See what you've earned, what's outstanding, and what's been paid — at a glance. No accounting degree required.
              </p>
              <p className="mt-4 text-xs font-bold text-brand/40 uppercase tracking-wide">Pro and Unlimited plans</p>
            </div>

            <div className="bg-surface rounded-[32px] border-2 border-border p-8">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                <Zap size={24} className="text-accent" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-3">Quote-to-invoice conversion</h3>
              <p className="text-brand/70 font-medium text-sm leading-[1.15]">
                When a customer approves a quote, the invoice is created automatically. One less thing to remember. One less job that falls through the cracks.
              </p>
              <p className="mt-4 text-xs font-bold text-brand/40 uppercase tracking-wide">All paid plans</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR — SEGMENT LINKS */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-4">
            Built for anyone who does the work.
          </h2>
          <p className="text-white/60 font-medium leading-[1.15] mb-10 max-w-xl">
            SMASH works for any service business that quotes and invoices jobs. See how it fits your trade.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { label: "Cleaners", href: "/for-cleaners" },
              { label: "Handymen", href: "/for-handymen" },
              { label: "Gardeners", href: "/for-gardeners" },
              { label: "Painters", href: "/for-painters" },
              { label: "Mobile mechanics", href: "/for-mobile-mechanics" },
            ].map((seg) => (
              <Link
                key={seg.href}
                to={seg.href}
                className="flex items-center justify-center gap-1 px-4 py-3 rounded-[24px] border-2 border-white/20 text-white font-bold text-sm uppercase tracking-wide hover:bg-white/10 hover:border-white/40 transition-all"
              >
                {seg.label} <ChevronRight size={14} strokeWidth={2.5} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10 md:mb-14 text-center">
            Feature questions
          </h2>
          <div className="bg-white rounded-[32px] border-2 border-border px-4 sm:px-8 divide-y divide-border">
            {[
              {
                q: "How does SMASH generate a quote from voice?",
                a: "You describe the job out loud for 20–30 seconds — the same way you'd explain it to a mate. SMASH transcribes your speech, matches items against your personal pricing catalog and materials database, and builds a structured, priced quote automatically. No typing, no templates, no app navigation."
              },
              {
                q: "Does SMASH produce GST-compliant invoices?",
                a: "Yes. Every invoice SMASH generates includes your ABN, a GST line item, the invoice date, and an itemised job description — all required fields for a valid Australian tax invoice."
              },
              {
                q: "Can customers pay directly from the quote link?",
                a: "Yes. Every quote includes a link your customer opens on their phone. They review the quote, approve it with one tap, and can pay immediately via Stripe. No phone calls, no printing, no chasing."
              },
              {
                q: "What is the personal pricing catalog?",
                a: "Your pricing catalog is a list of services and prices you build once inside SMASH. When you describe a job, SMASH matches your words to items in your catalog and fills in your prices automatically. After a few weeks of use, repeat jobs invoice themselves in under 30 seconds."
              },
            ].map((faq, i) => (
              <div key={i} className="py-6">
                <p className="font-bold text-brand mb-2">{faq.q}</p>
                <p className="text-brand/60 font-medium text-sm leading-[1.15]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-[0.88]">
            Invoice sent before you<br />leave the driveway.
          </h2>
          <p className="text-lg text-white/80 font-medium leading-[1.15] mb-8 max-w-xl mx-auto">
            Free to start. No credit card. Talk for 30 seconds and see your first quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link
              to="/#signup-form"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-95 transition-all"
            >
              Start Free
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] border-2 border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-white/10 transition-all"
            >
              See Pricing
            </Link>
          </div>
          <p className="text-sm text-white/40 font-medium">
            <Link to="/voice-invoicing" className="underline hover:text-white/70 transition-colors">Voice invoicing</Link> · <Link to="/pricing" className="underline hover:text-white/70 transition-colors">Pricing</Link> · <Link to="/how-it-works" className="underline hover:text-white/70 transition-colors">How it works</Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
