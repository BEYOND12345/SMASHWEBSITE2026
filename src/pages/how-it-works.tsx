import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SEO } from '../components/seo';
import { StructuredData, createVideoSchema } from '../components/structured-data';
import { Footer } from '../components/footer';
import { FeatureSection } from '../components/feature-section';
import { PhoneMockup, AppScreen } from '../components/phone-mockup';
import { ListeningScreen } from '../components/listening-screen';
import { GeneratingScreen } from '../components/generating-screen';
import { InlineCTA } from '../components/inline-cta';
import { AnimateIn } from '../components/animate-in';

export function HowItWorks() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create Invoices with Voice Using SMASH",
    "description": "Learn how to create professional invoices in under 60 seconds using voice commands with SMASH Invoices",
    "totalTime": "PT1M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Speak Your Job Details",
        "text": "Tap the microphone and describe the work you just completed. Just talk naturally about what you did, materials used, and time spent.",
        "image": "https://smashinvoices.com/hero_image.png"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "SMASH Builds Your Quote",
        "text": "SMASH instantly converts your voice into a professional quote with automatic pricing based on your rates and past jobs.",
        "image": "https://smashinvoices.com/hero_image.png"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Review and Send",
        "text": "Quick review and one-tap send. Your customer receives a professional quote instantly on their phone.",
        "image": "https://smashinvoices.com/hero_image.png"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Get Paid",
        "text": "Customer approves and pays directly from the quote. Money hits your account fast.",
        "image": "https://smashinvoices.com/hero_image.png"
      }
    ]
  };

  return (
    <>
      <SEO
        title="How It Works | Voice-to-Invoice in Under 60 Seconds | SMASH Invoices"
        description="Learn how SMASH turns your voice into professional invoices in under 60 seconds. Simple 4-step process: speak, review, send, get paid. No typing required."
        keywords="how voice invoicing works, voice to invoice process, automated invoicing workflow, voice invoicing Australia"
        ogTitle="How SMASH Voice-to-Invoice Works"
        ogDescription="Speak your job details, SMASH creates the invoice, send with one tap, get paid in 48 hours. That simple."
        ogImage="https://smashinvoices.com/hero_image.png"
        ogUrl="https://smashinvoices.com/how-it-works"
        twitterTitle="How SMASH Voice-to-Invoice Works"
        twitterDescription="Speak your job details, SMASH creates the invoice, send with one tap. Under 60 seconds, no typing."
        canonical="https://smashinvoices.com/how-it-works"
      />

      <StructuredData data={howToSchema} />
      <StructuredData data={createVideoSchema({
        name: "SMASH Voice-to-Invoice Demo",
        description: "Watch how SMASH turns your voice into a professional invoice in under 60 seconds. No typing required.",
        thumbnailUrl: "https://smashinvoices.com/hero_image.png",
        embedUrl: "https://www.youtube.com/embed/gr_iAEvyIQY",
        uploadDate: "2026-01-01"
      })} />

      <div className="min-h-screen bg-white">
        <nav className="bg-brand text-white border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 md:py-6 flex items-center justify-between">
            <Link to="/" className="text-2xl font-black tracking-tight">
              SMASH<span className="text-accent text-4xl leading-none align-baseline">.</span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-3">
              <Link to="/faq" className="hidden md:block px-3 md:px-4 py-2 md:py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
                FAQ
              </Link>
              <Link to="/blog" className="hidden md:block px-3 md:px-4 py-2 md:py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
                Blog
              </Link>
              <Link to="/#signup-form" className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-accent text-brand font-black text-xs sm:text-sm uppercase tracking-wide hover:brightness-95 transition-all">
                Start Free
              </Link>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="bg-brand text-white py-16 md:py-20 lg:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <AnimateIn direction="up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.88] mb-6 md:mb-8 uppercase tracking-tighter">
                How SMASH Works
              </h1>
              <p className="font-body text-xl sm:text-2xl md:text-3xl text-white/90 font-medium max-w-3xl mx-auto leading-[1.5] mb-8 md:mb-12">
                From finished job to paid invoice. In under 60 seconds. No typing.
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* VIDEO DEMO */}
        <section className="py-10 md:py-14 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <AnimateIn direction="up">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand mb-4 md:mb-6 leading-[0.88] uppercase tracking-tighter">
                  See It In Action
                </h2>
                <p className="font-body text-lg sm:text-xl md:text-2xl text-slate-700 font-medium max-w-3xl mx-auto leading-[1.5]">
                  Watch how SMASH turns voice into a professional invoice in under 60 seconds
                </p>
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={100}>
            <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
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

        {/* STEP 1: SPEAK */}
        <FeatureSection
          background="slate"
          imagePosition="right"
          title="STEP 1. TALK ABOUT THE JOB"
          description={
            <p className="font-body leading-[1.5]">
              Tap the mic and describe the work. Talk naturally — what you did, materials used, time spent. No scripts, no special commands. Just talk like you'd explain the job to a mate.
            </p>
          }
          bullets={[
            "Understands trade terminology and job language",
            "Picks up materials, quantities, and pricing",
            "Works in under 10 seconds",
            "No typing. Ever."
          ]}
          image={
            <div className="flex justify-center scale-[0.6] sm:scale-75 md:scale-[0.85] lg:scale-95 xl:scale-100 w-full">
              <PhoneMockup>
                <ListeningScreen />
              </PhoneMockup>
            </div>
          }
        />

        {/* STEP 2: GENERATE */}
        <FeatureSection
          background="white"
          imagePosition="left"
          title="STEP 2. SMASH BUILDS YOUR QUOTE"
          description={
            <p className="font-body leading-[1.5]">
              SMASH takes what you said and turns it into a professional, itemised quote — priced the way you price. Your rates. Your job types. Your style. From your very first quote.
            </p>
          }
          bullets={[
            "Automatic line items and descriptions",
            "Your rates applied — not generic pricing",
            "GST calculated and included",
            "Professional layout, ready to send"
          ]}
          image={
            <div className="flex justify-center scale-[0.6] sm:scale-75 md:scale-[0.85] lg:scale-95 xl:scale-100 w-full">
              <PhoneMockup>
                <GeneratingScreen />
              </PhoneMockup>
            </div>
          }
        />

        <InlineCTA
          title="That's Under 60 Seconds So Far."
          subtitle="No typing. No spreadsheets. Just talking."
          variant="secondary"
        />

        {/* STEP 3: SEND */}
        <FeatureSection
          background="white"
          imagePosition="right"
          title="STEP 3. SEND IT. WATCH IT."
          description={
            <p className="font-body leading-[1.5]">
              One tap to send via SMS or email. Your customer gets a professional quote on their phone. You'll know the second they open it — no more "I never got it."
            </p>
          }
          bullets={[
            "Send via SMS or email with one tap",
            "Read receipts — see when they open it",
            "Customer approves from their phone",
            "No back and forth"
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

        {/* STEP 4: GET PAID */}
        <FeatureSection
          background="slate"
          imagePosition="left"
          title="STEP 4. GET PAID. MOVE ON."
          description={
            <p className="font-body leading-[1.5]">
              Customer approves with one tap and pays right there and then. Quote becomes invoice automatically. Money in your account — not in two weeks, not after chasing. Done.
            </p>
          }
          bullets={[
            "Customer pays directly from the quote",
            "Quote converts to invoice on approval",
            "Payment history tracked automatically",
            "PDF and CSV export available"
          ]}
          image={
            <div className="flex justify-center scale-[0.6] sm:scale-75 md:scale-[0.85] lg:scale-95 xl:scale-100 w-full">
              <PhoneMockup>
                <AppScreen type="customer-detail" />
              </PhoneMockup>
            </div>
          }
        />

        {/* CLOSING CTA */}
        <section className="py-14 md:py-20 lg:py-32 bg-brand text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <AnimateIn direction="up">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-[0.88] uppercase tracking-tighter">
                That's it. Seriously.
              </h2>
              <p className="font-body text-xl sm:text-2xl md:text-3xl text-white/90 font-medium mb-8 md:mb-12 max-w-3xl mx-auto leading-[1.5]">
                From job completion to money in the bank. Under 60 seconds of work. No typing. No spreadsheets. No waiting.
              </p>
              <Link
                to="/#signup-form"
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-[32px] bg-accent text-brand font-black text-base sm:text-lg uppercase tracking-wide hover:brightness-95 transition-all shadow-glow"
              >
                Start Free
                <ArrowRight size={24} strokeWidth={3} />
              </Link>
              <p className="text-sm text-white/50 font-medium mt-4">
                No credit card required.
              </p>
            </AnimateIn>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
