import { Link } from 'react-router-dom';
import { Play, Star, Quote } from 'lucide-react';
import { Nav } from '../components/nav';
import { PhoneMockup, AppScreen } from '../components/phone-mockup';
import { FeatureSection } from '../components/feature-section';
import { SEO } from '../components/seo';
import { SignupForm } from '../components/signup-form';
import { StickyCTA } from '../components/sticky-cta';
import { SignupFAB } from '../components/signup-fab';
import { InlineCTA } from '../components/inline-cta';
import { SocialProof } from '../components/social-proof';
import { FAQ } from '../components/faq';
import { BlogPreview } from '../components/blog-preview';
import { StructuredData, organizationSchema, webApplicationSchema, websiteSchema, createVideoSchema, createFAQSchema } from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import {
  organizationSchema as aiOrgSchema,
  websiteSchema as aiWebsiteSchema,
  softwareApplicationSchema,
  homepageFaqSchema,
} from '../data/schema-data';
import { hreflangAlternates } from '../data/country-data';
import { Footer } from '../components/footer';
import { DualPhoneSection } from '../components/dual-phone-section';
import { ScannerScreen } from '../components/scanner-screen';
import { AnalyzerScreen } from '../components/analyzer-screen';
import { AnimateIn } from '../components/animate-in';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

const homeFaqs = [
  { question: "What is SMASH Invoices?", answer: "SMASH is a voice-to-invoice app for Australian tradies. Describe the job out loud and get a professional, GST-compliant invoice in under 60 seconds. Free to start, no credit card required." },
  { question: "Is SMASH free to use?", answer: "Yes. SMASH has a free plan with 2 invoices per month — no credit card needed. The Pro plan ($22.99/month) gives unlimited invoices, Stripe payments, read receipts, and customer history." },
  { question: "How fast can I send an invoice?", answer: "Under 60 seconds. Talk for 30 seconds describing the job, review the invoice, tap send. Your client receives a professional PDF with a Pay Now button before you've packed up your tools." },
  { question: "Does SMASH work for GST invoices?", answer: "Yes. Every SMASH invoice is ATO-compliant with your ABN, GST breakdown, sequential invoice numbers, and all required tax invoice fields. GST is calculated automatically per line item." },
];

const testimonials = [
  {
    quote: "Finished a hot water job at 4pm, talked into my phone for 30 seconds, invoice was in the customer's inbox before I started the van. Never going back.",
    name: "Chris M.",
    trade: "Plumber, Sydney",
  },
  {
    quote: "I was losing track of small jobs — $200 here, $150 there. SMASH catches every single one now. My monthly income is noticeably higher.",
    name: "Brendan T.",
    trade: "Electrician, Melbourne",
  },
  {
    quote: "My wife used to chase invoices for me on weekends. That stopped the day I got SMASH. It just sends them on the spot.",
    name: "Jason K.",
    trade: "Carpenter, Brisbane",
  },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEO
        title="Tradie Invoicing App Australia | SMASH — Quote &amp; Invoice in 60 Seconds"
        description="The invoicing &amp; quoting app built for Australian tradies. Speak a job description and get a GST-compliant invoice in under 60 seconds. Free to start. No typing, no laptop."
        keywords="tradie invoicing app, tradie quoting software, invoicing software for tradies, tradie quoting app, tradie invoice app australia, voice invoicing australia, GST invoice app, tradie quoting tool, invoice app for tradies, mobile invoicing app australia"
        ogTitle="Tradie Invoicing App Australia | SMASH — Quote in 60 Seconds"
        ogDescription="The invoicing app built for Australian tradies. Speak a job and get a GST-compliant quote in 60 seconds. Free to start."
        ogUrl="https://smashinvoices.com"
        twitterTitle="Voice to Invoice & Quote Software | SMASH"
        twitterDescription="Generate invoices 4x faster with voice. Just talk - SMASH creates professional invoices instantly."
        ogImage="https://smashinvoices.com/hero_image.png"
        twitterImage="https://smashinvoices.com/hero_image.png"
        canonical="https://smashinvoices.com"
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={organizationSchema} />
      <StructuredData data={webApplicationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={createVideoSchema({
        name: "SMASH Voice-to-Invoice Demo",
        description: "Watch how SMASH turns your voice into a professional invoice in under 60 seconds. No typing required.",
        thumbnailUrl: "https://smashinvoices.com/hero_image.png",
        embedUrl: "https://www.youtube.com/embed/gr_iAEvyIQY",
        uploadDate: "2026-01-01"
      })} />
      <StructuredData data={createFAQSchema(homeFaqs)} />
      <SchemaMarkup schemas={[aiOrgSchema, aiWebsiteSchema, softwareApplicationSchema, homepageFaqSchema]} />

      <StickyCTA />
      <SignupFAB />
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative text-white min-h-[90vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/hero_image.png"
            alt="Voice to invoice software — describe the job, SMASH sends the invoice"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/98 via-gray-900/93 to-gray-900/70" />
        </div>

        {/* Hero content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-16 md:py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p
              className="text-accent font-black text-xs uppercase tracking-[0.2em] mb-6 animate-hero-reveal"
              style={{ animationDelay: '0ms' }}
            >
              Voice to Invoice — Australia <span className="text-accent/60">· UK / US / CA / NZ next</span>
            </p>

            {/* H1 — staggered line-by-line */}
            <h1 className="font-black uppercase leading-[0.88] tracking-tighter mb-8 md:mb-10">
              <span
                className="block text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl animate-hero-reveal"
                style={{ animationDelay: '80ms' }}
              >
                Just Talk.
              </span>
              <span
                className="block text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl animate-hero-reveal"
                style={{ animationDelay: '180ms' }}
              >
                SMASH does
              </span>
              <span
                className="block text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl text-accent animate-hero-reveal"
                style={{ animationDelay: '280ms' }}
              >
                the rest.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="font-body text-xl sm:text-2xl md:text-3xl text-white/80 mb-10 md:mb-12 font-medium leading-[1.3] max-w-2xl animate-hero-reveal"
              style={{ animationDelay: '420ms' }}
            >
              Describe the job out loud. SMASH sends a professional invoice before you've left the driveway.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 animate-hero-reveal"
              style={{ animationDelay: '560ms' }}
            >
              <a
                href="#signup-form"
                className="px-8 py-4 rounded-[32px] bg-accent text-brand font-black text-base uppercase tracking-widest hover-glow transition-all flex items-center justify-center gap-3"
              >
                Start Free
              </a>
              <button className="px-8 py-4 rounded-[32px] bg-white/10 text-white border-2 border-white/15 font-black text-base uppercase tracking-widest hover:bg-white/15 transition-all backdrop-blur-sm flex items-center justify-center gap-3">
                <Play size={16} strokeWidth={2.5} />
                Watch Demo
              </button>
            </div>

            {/* Trust row */}
            <div
              className="flex flex-col sm:flex-row sm:items-center gap-3 animate-hero-reveal"
              style={{ animationDelay: '650ms' }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 w-fit">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="text-accent fill-accent" />
                  ))}
                </div>
                <span className="font-body text-xs font-semibold text-white/70">4.9 App Store</span>
              </div>
              <p className="font-body text-sm text-white/40 font-medium">
                No credit card required · Free to start
              </p>
            </div>

            {/* Global waitlist strip */}
            <div className="mt-6 animate-hero-reveal" style={{ animationDelay: '720ms' }}>
              <p className="font-body text-xs text-white/40 font-medium">
                Outside Australia? Early access lists open:{' '}
                <Link to="/nz" className="underline decoration-accent/50 hover:text-white">NZ</Link>
                {' · '}
                <Link to="/uk" className="underline decoration-accent/50 hover:text-white">UK</Link>
                {' · '}
                <Link to="/us" className="underline decoration-accent/50 hover:text-white">US</Link>
                {' · '}
                <Link to="/ca" className="underline decoration-accent/50 hover:text-white">CA</Link>
              </p>
            </div>
          </div>
        </div>

        {/* Decorative: large ambient text */}
        <div
          className="absolute bottom-0 right-0 text-[200px] md:text-[320px] lg:text-[440px] font-black text-white/[0.025] leading-none tracking-tighter pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          60s
        </div>
      </section>

      {/* ── SPEED BAR ────────────────────────────────────────────────────── */}
      <section className="bg-accent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-8">
            {/* Giant 4X */}
            <AnimateIn direction="left">
              <span className="block text-[100px] sm:text-[140px] md:text-[180px] lg:text-[220px] font-black leading-none tracking-tighter text-brand">
                4X
              </span>
            </AnimateIn>
            {/* Label */}
            <AnimateIn delay={100}>
              <div className="pb-4 md:pb-8">
                <p className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.88] text-brand">
                  FASTER<br />THAN<br />TYPING.
                </p>
                <p className="font-body text-base md:text-lg text-brand/65 font-medium mt-4 max-w-sm leading-[1.4]">
                  Stop losing 20–30 minutes to every invoice.{' '}
                  <Link to="/blog/the-60-second-invoice-voice-to-invoice" className="underline hover:no-underline">
                    Master the 60-second workflow
                  </Link>.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── DUAL PHONE SECTION ───────────────────────────────────────────── */}
      <DualPhoneSection />

      {/* ── VIDEO DEMO ───────────────────────────────────────────────────── */}
      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn className="text-center mb-12 md:mb-16">
            <p className="text-accent font-black text-xs uppercase tracking-widest mb-4">See it in action</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-5 text-brand uppercase leading-[0.88]">
              Watch how it works
            </h2>
            <p className="font-body text-base sm:text-lg md:text-xl text-brand/60 font-medium max-w-2xl mx-auto leading-[1.4]">
              Voice to PDF. Under 60 seconds.
            </p>
          </AnimateIn>

          <AnimateIn delay={100}>
            <div className="relative aspect-video rounded-[24px] md:rounded-[32px] overflow-hidden border-2 border-border shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/gr_iAEvyIQY?rel=0"
                title="SMASH Voice-to-Invoice Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      <InlineCTA
        title="Ready to Quote Faster?"
        subtitle="Send an invoice in under 60 seconds."
      />

      {/* ── BUILT-IN PRICING ─────────────────────────────────────────────── */}
      <FeatureSection
        background="slate"
        imagePosition="right"
        title="IT ALREADY KNOWS YOUR BUSINESS."
        description={
          <p className="font-body">
            Upload a couple of your old invoices when you start. That's it.
            <br /><br />
            SMASH reads them and learns everything — your rates, your jobs, your way of doing things. From your very first quote it prices the way you price.{' '}
            <Link to="/blog/voice-to-crm-ai-learns-customers" className="text-accent underline hover:no-underline">
              Learn how AI learns your business
            </Link>.
          </p>
        }
        bullets={[
          "Your labour rates, automatically applied",
          "Your job types, already understood",
          "Your style, from day one",
          "No setup. No configuration. Just talk and it works like you.",
        ]}
        image={
          <div className="flex items-end justify-center w-full overflow-visible h-[280px] sm:h-[370px] md:h-[450px] lg:h-auto">
            <div className="relative flex items-end justify-center scale-[0.5] sm:scale-[0.65] md:scale-[0.8] lg:scale-90 xl:scale-100 origin-bottom">
              <div className="animate-float-slow -mr-6">
                <PhoneMockup>
                  <ScannerScreen />
                </PhoneMockup>
              </div>
              <div className="animate-float-delayed -ml-6">
                <PhoneMockup>
                  <AnalyzerScreen />
                </PhoneMockup>
              </div>
            </div>
          </div>
        }
      />

      {/* ── WHY SMASH IS FAST ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[500px] md:min-h-screen bg-cover bg-left md:bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: 'url(/why_section_image.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block" />

            <AnimateIn direction="right" className="text-white max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 md:mb-12 uppercase leading-[0.88]">
                Why{' '}
                <span className="bg-accent text-brand px-2 md:px-3 py-0.5">SMASH</span>
                {' '}is actually fast
              </h2>

              <ul className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                {[
                  'Talk instead of type — always',
                  'Already knows your rates and jobs',
                  'Scope written for you automatically',
                  'GST handled, nothing to calculate',
                  'Quote becomes invoice in one tap',
                  'Customer pays right there and then',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent shrink-0 mt-2.5" />
                    <span className="font-body text-lg md:text-xl lg:text-2xl font-medium text-white leading-[1.3]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="font-body text-lg md:text-xl font-medium text-white/80 leading-[1.3] mb-4">
                From finished job to paid. In under a minute.
              </p>
              <Link to="/how-it-works" className="font-body text-accent font-bold text-base hover:text-white transition-colors">
                See how it works →
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── SEND IT. WATCH IT. GET PAID. ─────────────────────────────────── */}
      <FeatureSection
        background="white"
        imagePosition="left"
        title="SEND IT. WATCH IT. GET PAID."
        description={
          <>
            <p className="font-body mb-4">
              From the moment you hit send, you know exactly what's happening.
            </p>
            <p className="font-body text-base font-medium text-brand/55">
              No guessing. No chasing. No "I never got it."
            </p>
          </>
        }
        bullets={[
          "See the second they open your quote or invoice",
          "They approve with one tap — no back and forth",
          "They pay right there and then — no bank transfer drama",
          "Everything tracked automatically — nothing to chase",
        ]}
        image={
          <div className="flex items-end justify-center w-full overflow-visible h-[260px] sm:h-[330px] md:h-[400px] lg:h-auto">
            <div className="flex items-end justify-center gap-4 lg:gap-6 scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-95 xl:scale-100 origin-bottom">
              <div className="animate-float">
                <PhoneMockup size="small">
                  <AppScreen type="estimates-static" />
                </PhoneMockup>
              </div>
              <div className="animate-float-delayed">
                <PhoneMockup size="small">
                  <AppScreen type="portal" />
                </PhoneMockup>
              </div>
            </div>
          </div>
        }
      />

      <InlineCTA
        title="Stop Typing. Start Talking."
        subtitle="Work with your hands. Not a keyboard."
        variant="secondary"
      />

      {/* ── TRACK HIGH-VOLUME QUOTING ─────────────────────────────────────── */}
      <FeatureSection
        background="white"
        imagePosition="right"
        title="TRACK HIGH-VOLUME QUOTING"
        description={
          <p className="font-body">
            See all quotes in one view. Nothing slips through.
          </p>
        }
        bullets={[
          "All quotes at a glance",
          "Filter by status",
          "Track repeat clients",
          "Never miss follow-ups",
        ]}
        image={
          <div className="flex items-end justify-center lg:justify-start w-full overflow-visible h-[350px] sm:h-[440px] md:h-[510px] lg:h-auto">
            <div className="scale-[0.6] sm:scale-75 md:scale-[0.85] lg:scale-95 xl:scale-100 origin-bottom animate-float">
              <PhoneMockup>
                <AppScreen type="estimates" />
              </PhoneMockup>
            </div>
          </div>
        }
      />

      {/* ── REPEAT CLIENTS ───────────────────────────────────────────────── */}
      <FeatureSection
        background="slate"
        imagePosition="left"
        title="REPEAT CLIENTS REMEMBERED"
        description={
          <p className="font-body">
            Client history pulled up instantly. Repeat work done faster.
          </p>
        }
        bullets={[
          "Details linked to quotes",
          "Addresses saved",
          "Past quotes visible",
          "Faster repeat work",
        ]}
        image={
          <div className="flex items-end justify-center lg:justify-start w-full overflow-visible h-[350px] sm:h-[440px] md:h-[510px] lg:h-auto">
            <div className="scale-[0.6] sm:scale-75 md:scale-[0.85] lg:scale-95 xl:scale-100 origin-bottom animate-float">
              <PhoneMockup>
                <AppScreen type="customer-management" />
              </PhoneMockup>
            </div>
          </div>
        }
      />

      {/* ── SOCIAL PROOF ─────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <SocialProof />
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white/8 border border-white/12">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-accent fill-accent" />
                ))}
              </div>
              <span className="font-body text-xs font-semibold text-white/60">Tradies that switched</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.88] text-white">
              The job site review.
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((t, i) => (
              <AnimateIn key={i} delay={i * 80} direction="up">
                <div className="rounded-[24px] bg-white/6 border border-white/10 p-6 md:p-7 flex flex-col h-full">
                  <Quote size={22} className="text-accent mb-4 shrink-0" />
                  <p className="font-body text-base font-medium text-white/85 leading-[1.6] mb-5 flex-1">
                    "{t.quote}"
                  </p>
                  <div>
                    <p className="font-black text-sm text-white uppercase tracking-wide">{t.name}</p>
                    <p className="font-body text-xs text-white/45 font-medium mt-0.5">{t.trade}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={300} className="mt-8 text-center">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all"
            >
              Join them — Start Free
            </a>
            <p className="font-body text-xs text-white/35 font-medium mt-3">No card needed · Cancel anytime</p>
          </AnimateIn>
        </div>
      </section>

      {/* ── BLOG PREVIEW ─────────────────────────────────────────────────── */}
      <BlogPreview />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FAQ />

      {/* ── SIGNUP FORM ──────────────────────────────────────────────────── */}
      <SignupForm />

      <Footer showCTA />
    </div>
  );
}
