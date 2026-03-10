import { Link } from 'react-router-dom';
import { Play, Mail, Facebook, Instagram } from 'lucide-react';
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
import { StructuredData, organizationSchema, webApplicationSchema } from '../components/structured-data';
import { DualPhoneSection } from '../components/dual-phone-section';
import { ScannerScreen } from '../components/scanner-screen';
import { AnalyzerScreen } from '../components/analyzer-screen';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <SEO
        title="Voice to Invoice & Quote Software | SMASH Invoices - Generate Invoices 4x Faster"
        description="Voice to invoice software that generates quotes and invoices in seconds. Just talk - no typing. Voice to quote technology 4x faster than traditional invoicing. Perfect for tradies doing high-volume work."
        keywords="voice to invoice, voice to quote, voice powered invoicing, generate invoices quickly, fast invoice software, quick quote generator, voice invoice app, talk to invoice, speech to invoice, automated invoice generation, tradie invoice software, contractor quote software, mobile invoice generator"
        ogTitle="Voice to Invoice & Quote Software | SMASH Invoices"
        ogDescription="Generate invoices and quotes 4x faster with voice. Just talk - SMASH creates professional invoices instantly. Voice to invoice technology for busy tradies."
        ogUrl="https://smashinvoices.com"
        twitterTitle="Voice to Invoice & Quote Software | SMASH"
        twitterDescription="Generate invoices 4x faster with voice. Just talk - SMASH creates professional invoices instantly."
        canonical="https://smashinvoices.com"
      />

      <StructuredData data={organizationSchema} />
      <StructuredData data={webApplicationSchema} />

      <StickyCTA />
      <SignupFAB />

      {/* SECTION 1: HERO WITH SIDE-BY-SIDE LAYOUT */}
      <section className="relative text-white min-h-[85vh] md:min-h-[95vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero_image.png"
            alt=""
            className="w-full h-full object-cover"
            style={{ imageRendering: 'crisp-edges' }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/98 via-gray-900/95 to-gray-900/80"></div>
        </div>

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 md:py-6 flex items-center justify-end relative z-10">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/founder" className="hidden md:block px-3 md:px-4 py-2 md:py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
              Founder
            </Link>
            <Link to="/blog" className="hidden md:block px-3 md:px-4 py-2 md:py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
              Blog
            </Link>
            <a href="#signup-form" className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-accent text-accentText font-black text-xs sm:text-sm uppercase tracking-wide hover:brightness-95 transition-all">
              Sign Up
            </a>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-12 md:py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-[2.75rem] leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight md:tracking-tighter mb-8 md:mb-10 uppercase">
              Just Talk.<br />
              SMASH does<br />
              the rest.
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 md:mb-12 font-bold leading-snug md:leading-tight">
              Describe the job out loud. SMASH sends a professional invoice before you've left the driveway.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 md:mb-8">
              <a href="#signup-form" className="px-6 sm:px-8 py-3 sm:py-4 rounded-brand bg-accent text-accentText font-black text-sm sm:text-base uppercase tracking-wider sm:tracking-widest hover:brightness-95 transition-all shadow-glow flex items-center justify-center gap-2 sm:gap-3">
                <Mail size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={2.5} />
                Get Early Access
              </a>
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-brand bg-white/10 text-white border-2 border-white/20 font-bold text-sm sm:text-base uppercase tracking-wider sm:tracking-widest hover:bg-white/15 transition-all backdrop-blur-sm flex items-center justify-center gap-2 sm:gap-3">
                <Play size={18} className="sm:w-5 sm:h-5" strokeWidth={2.5} />
                Watch Demo
              </button>
            </div>

            <p className="text-sm sm:text-base text-white/50 font-medium">
              Beta access. Free.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SPEED REINFORCEMENT */}
      <section className="bg-accent py-10 md:py-14 lg:py-20 relative z-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-accentText leading-[1] md:leading-[1.05] mb-6 md:mb-8 uppercase tracking-tight md:tracking-tighter">
            4X faster than typing.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-accentText/90 font-bold max-w-3xl mx-auto leading-snug md:leading-tight">
            Stop losing 20 to 30 minutes to every invoice. <Link to="/blog/the-60-second-invoice-voice-to-invoice" className="underline hover:no-underline">Master the 60-second workflow</Link>.
          </p>
        </div>
      </section>

      {/* SECTION 3: VOICE TO QUOTE - VISUAL PROOF */}
      <DualPhoneSection />

      {/* SECTION 4: VIDEO DEMO */}
      <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight md:tracking-tighter mb-4 md:mb-6 text-brand uppercase leading-tight">
              WATCH HOW IT WORKS
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 font-bold max-w-3xl mx-auto leading-snug">
              Voice to PDF in seconds.
            </p>
          </div>

          <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/gr_iAEvyIQY?rel=0"
              title="SMASH Voice-to-Invoice Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <InlineCTA
        title="Ready to Quote Faster?"
        subtitle="Join beta testers quoting in seconds."
      />

      {/* SECTION 5: BUILT-IN PRICING */}
      <FeatureSection
        background="slate"
        imagePosition="right"
        title="IT ALREADY KNOWS YOUR BUSINESS."
        description={
          <p>
            Upload a couple of your old invoices when you sign up. That's it.
            <br /><br />
            SMASH reads them and learns everything — your rates, your jobs, your way of doing things. From your very first quote it prices the way you price. Not a generic template. Yours. <Link to="/blog/voice-to-crm-ai-learns-customers" className="text-white underline hover:no-underline">Learn how AI learns your business</Link>.
          </p>
        }
        bullets={[
          "Your labour rates, automatically applied",
          "Your job types, already understood",
          "Your style, from day one",
          "No setup. No configuration. Just talk and it works like you."
        ]}
        image={
          <div className="flex items-center justify-center w-full">
            <div className="relative flex items-end justify-center scale-[0.45] sm:scale-[0.6] md:scale-75 lg:scale-90 xl:scale-100 max-w-full">
              <div className="relative z-0 -rotate-2 md:-rotate-3 lg:-rotate-6 -mr-2 md:-mr-4 lg:-mr-6">
                <PhoneMockup>
                  <ScannerScreen />
                </PhoneMockup>
              </div>
              <div className="relative z-10 -ml-2 md:-ml-4 lg:-ml-6">
                <PhoneMockup>
                  <AnalyzerScreen />
                </PhoneMockup>
              </div>
            </div>
          </div>
        }
      />

      {/* SECTION 6: WHY THIS IS FAST */}
      <section
        className="relative min-h-[500px] md:min-h-screen bg-cover bg-left md:bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: 'url(/why_section_image.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50 md:from-slate-900/70 md:via-slate-900/50 md:to-transparent"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="hidden lg:block"></div>

            <div className="text-white max-w-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black tracking-tight md:tracking-tighter mb-6 md:mb-10 uppercase leading-tight">
                Why <span className="bg-accent text-brand px-1.5 sm:px-2 md:px-3 py-0.5 md:py-1">SMASH</span> is actually fast
              </h2>

              <ul className="space-y-3 md:space-y-5 mb-6 md:mb-10">
                <li className="flex items-start gap-2.5 md:gap-4">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-accent shrink-0 mt-1.5 md:mt-2"></div>
                  <span className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold text-white leading-snug">Talk instead of type — always</span>
                </li>
                <li className="flex items-start gap-2.5 md:gap-4">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-accent shrink-0 mt-1.5 md:mt-2"></div>
                  <span className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold text-white leading-snug">Already knows your rates and jobs</span>
                </li>
                <li className="flex items-start gap-2.5 md:gap-4">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-accent shrink-0 mt-1.5 md:mt-2"></div>
                  <span className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold text-white leading-snug">Scope written for you automatically</span>
                </li>
                <li className="flex items-start gap-2.5 md:gap-4">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-accent shrink-0 mt-1.5 md:mt-2"></div>
                  <span className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold text-white leading-snug">GST handled, nothing to calculate</span>
                </li>
                <li className="flex items-start gap-2.5 md:gap-4">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-accent shrink-0 mt-1.5 md:mt-2"></div>
                  <span className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold text-white leading-snug">Quote becomes invoice in one tap</span>
                </li>
                <li className="flex items-start gap-2.5 md:gap-4">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-accent shrink-0 mt-1.5 md:mt-2"></div>
                  <span className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold text-white leading-snug">Customer pays right there and then</span>
                </li>
              </ul>

              <p className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold text-white/90 leading-snug mb-3 md:mb-4">
                From finished job to paid. In under a minute.
              </p>
              <Link to="/blog/ultimate-tradie-tech-stack-voice-first-2026" className="text-accent underline hover:no-underline text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                See the complete tech stack for 2026 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SHARING & DELIVERY */}
      <FeatureSection
        background="white"
        imagePosition="left"
        title="SEND IT. WATCH IT. GET PAID."
        description={
          <>
            <p className="mb-4">
              From the moment you hit send, you know exactly what's happening.
            </p>
            <p className="text-base font-normal text-textSecondary">
              No guessing. No chasing. No "I never got it."
            </p>
          </>
        }
        bullets={[
          "See the second they open your quote or invoice",
          "They approve with one tap — no back and forth",
          "They pay right there and then — no bank transfer drama",
          "Everything tracked automatically — nothing to chase"
        ]}
        image={
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-95 xl:scale-100 w-full py-12">
            <PhoneMockup size="small">
              <AppScreen type="estimates-static" />
            </PhoneMockup>
            <PhoneMockup size="small">
              <AppScreen type="portal" />
            </PhoneMockup>
          </div>
        }
      />

      <InlineCTA
        title="Stop Typing. Start Talking."
        subtitle="Free beta access for high-volume trades."
        variant="secondary"
      />

      {/* SECTION 10: CRM DASHBOARD */}
      <FeatureSection
        background="white"
        imagePosition="right"
        title="TRACK HIGH-VOLUME QUOTING"
        description={
          <p>
            See all quotes in one view. Nothing slips through.
          </p>
        }
        bullets={[
          "All quotes at a glance",
          "Filter by status",
          "Track repeat clients",
          "Never miss follow-ups"
        ]}
        image={
          <div className="flex justify-center lg:justify-start scale-[0.6] sm:scale-75 md:scale-[0.85] lg:scale-95 xl:scale-100 w-full">
            <PhoneMockup>
              <AppScreen type="estimates" />
            </PhoneMockup>
          </div>
        }
      />

      {/* SECTION 11: CLIENT MANAGEMENT */}
      <FeatureSection
        background="slate"
        imagePosition="left"
        title="REPEAT CLIENTS REMEMBERED"
        description={
          <p>
            Client history pulled up instantly. Repeat work done faster.
          </p>
        }
        bullets={[
          "Details linked to quotes",
          "Addresses saved",
          "Past quotes visible",
          "Faster repeat work"
        ]}
        image={
          <div className="flex justify-center lg:justify-start scale-[0.6] sm:scale-75 md:scale-[0.85] lg:scale-95 xl:scale-100 w-full">
            <PhoneMockup>
              <AppScreen type="customer-management" />
            </PhoneMockup>
          </div>
        }
      />

      {/* SOCIAL PROOF */}
      <section className="bg-white py-10 md:py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <SocialProof />
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <BlogPreview />

      {/* FAQ SECTION */}
      <FAQ />

      {/* SECTION 13: SIGNUP FORM */}
      <SignupForm />

      {/* SECTION 16: FOOTER */}
      <footer className="bg-brand text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 lg:py-20">
          <div className="text-center mb-10 md:mb-14 pb-10 md:pb-14 border-b border-white/10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 leading-tight uppercase tracking-tight md:tracking-tighter">
              Start Quoting Faster
            </h3>
            <p className="text-base sm:text-lg text-white/80 font-bold mb-6 md:mb-8 max-w-2xl mx-auto leading-snug md:leading-relaxed">
              Try voice-powered quoting on real jobs.
            </p>
            <a
              href="#signup-form"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-brand bg-accent text-accentText font-black text-sm sm:text-base uppercase tracking-wider sm:tracking-widest hover:brightness-95 transition-all shadow-glow"
            >
              <Mail size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={2.5} />
              Get Beta Access
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-14 mb-10 md:mb-14">
            <div>
              <div className="text-3xl font-black tracking-tight mb-5">
                SMASH<span className="text-accent text-5xl leading-none align-baseline">.</span>
              </div>
              <p className="text-base text-white/60 font-medium leading-relaxed mb-6">
                Smart invoicing. Voice-to-invoice in seconds.
              </p>
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider mb-4 text-white/50">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com/smashquotes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-accent transition-all flex items-center justify-center group"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook size={20} strokeWidth={2.5} className="text-white/70 group-hover:text-accentText transition-colors" />
                  </a>
                  <a
                    href="https://instagram.com/smashquotes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-white/10 hover:bg-accent transition-all flex items-center justify-center group"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram size={20} strokeWidth={2.5} className="text-white/70 group-hover:text-accentText transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-wider mb-5 text-white/50">Contact</h3>
              <ul className="space-y-3">
                <li><a href="mailto:dan@smashinvoices.com" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">dan@smashinvoices.com</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-wider mb-5 text-white/50">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/founder" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Meet the Founder</Link></li>
                <li><Link to="/blog" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-wider mb-5 text-white/50">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Privacy Policy</a></li>
                <li><a href="#" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10">
            <nav className="mb-6">
              <ul className="flex flex-wrap gap-6 justify-center md:justify-start">
                <li><Link to="/" className="text-sm text-white/50 hover:text-white transition-colors font-semibold">Home</Link></li>
                <li><Link to="/blog" className="text-sm text-white/50 hover:text-white transition-colors font-semibold">Blog</Link></li>
                <li><Link to="/founder" className="text-sm text-white/50 hover:text-white transition-colors font-semibold">Meet the Founder</Link></li>
                <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors font-semibold">Privacy</a></li>
                <li><a href="#" className="text-sm text-white/50 hover:text-white transition-colors font-semibold">Terms</a></li>
              </ul>
            </nav>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-3">
              <p className="text-sm text-white/40 font-medium">
                © 2024 SMASH<span className="text-accent text-xl leading-none align-baseline">.</span> Made for high volume work.
              </p>
              <p className="text-sm text-white/40 font-medium">
                Built in Byron Bay, Australia
              </p>
            </div>
            <p className="text-sm text-white/30 font-medium text-center md:text-left leading-relaxed">
              Beta software. Not accounting software.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
