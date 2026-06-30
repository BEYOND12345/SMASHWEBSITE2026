import { ArrowRight, Star, Quote, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../components/seo';
import { StructuredData, createVideoSchema, createBreadcrumbSchema } from '../components/structured-data';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { organizationSchema as aiOrgSchema, softwareApplicationSchema } from '../data/schema-data';
import { RelatedTools } from '../components/related-tools';
import { Footer } from '../components/footer';
import { FeatureSection } from '../components/feature-section';
import { PhoneMockup, AppScreen } from '../components/phone-mockup';
import { PhoneShowcase, ScaledPhone } from '../components/phone-showcase';
import { ListeningScreen } from '../components/listening-screen';
import { GeneratingScreen } from '../components/generating-screen';
import { InlineCTA } from '../components/inline-cta';
import { AnimateIn } from '../components/animate-in';
import { Nav } from '../components/nav';
import { hreflangAlternates } from '../data/country-data';
import { DualProductCtas } from '../components/marketing/DualProductCtas';
import { MarketingPhotoHero } from '../components/marketing/MarketingPhotoHero';
import { iosLanding } from '../components/ios-product-landing/ios-landing-tokens';
import { APP_STORE_URL } from '../data/download-urls';

const faqs = [
  {
    q: "How long does it actually take?",
    a: "Under 60 seconds for a new job. Once SMASH knows your common jobs and rates — usually after a week or two — it's closer to 20–30 seconds. That includes speaking, reviewing, and sending."
  },
  {
    q: "Do I have to say anything specific, or can I just talk normally?",
    a: "Just talk normally. Describe the job the way you'd explain it to someone — 'changed three power points and tested the circuits, took about 45 minutes'. SMASH understands trade language and extracts the details automatically."
  },
  {
    q: "Can I check and edit the invoice before it goes?",
    a: "Always. You see the full invoice before anything is sent. Edit any line item, adjust quantities, change the price — then hit send when you're happy. Nothing leaves without your approval."
  },
  {
    q: "Does it work without mobile data or WiFi?",
    a: "You need a brief data connection when you record — it's a short burst, not a continuous stream. If signal is poor, you can record the audio and process it when you get better reception. The rest of the app works offline."
  },
  {
    q: "How does SMASH know my rates?",
    a: "You upload a couple of your old invoices when you first set up. SMASH reads them and learns your labour rates, job types, and pricing style. From your very first quote it prices the way you price — no manual setup required."
  },
  {
    q: "What does the customer receive?",
    a: "A professional PDF quote or invoice delivered by email or SMS. It includes your business name, ABN, itemised line items, GST, and a payment link. They can approve and pay directly from their phone — no login, no app required."
  },
  {
    q: "Does SMASH work for NDIS support workers?",
    a: "Yes. SMASH is used by NDIS support workers across Australia. You can save each client's 9-digit NDIS participant number on their profile — SMASH prints it automatically in the Bill To block on every PDF and shows it on the client portal link. For recurring NDIS shifts, use the Repeat button to create a new draft from the last invoice with one tap."
  },
  {
    q: "Can I repeat the same invoice weekly without rebuilding it?",
    a: "Yes. Tap Repeat on any sent, approved or paid invoice card and SMASH creates a new draft with the same client, line items, and job title, dated today. Perfect for weekly NDIS support shifts, regular cleaning jobs, pool maintenance rounds, and any recurring work. Saves 2–3 minutes per recurring invoice."
  },
];

const testimonials = [
  {
    quote: "I watched the demo and literally had my first invoice sent while they were still talking. Could not believe how fast it was.",
    name: "Tom B.",
    trade: "Air con installer, Adelaide",
  },
  {
    quote: "Step 1 to step 4 took me 45 seconds on my first try. Now it's probably 20. The guys I work with think I'm using some magic.",
    name: "Pete A.",
    trade: "Tiler, Melbourne",
  },
  {
    quote: "It actually does what it says. Talk, quote, send, paid. No fluff. I've tried five other apps — none of them worked like this.",
    name: "Sam D.",
    trade: "Painter, Sydney",
  },
];

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button onClick={onClick} className="w-full flex items-start justify-between gap-4 py-6 text-left transition-colors">
        <span className="text-base font-black text-brand uppercase tracking-tighter leading-[0.95]">{q}</span>
        <ChevronDown size={20} className={`shrink-0 text-brand/40 transition-transform mt-0.5 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={2.5} />
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="font-body text-brand/70 font-medium leading-[1.6] text-sm">{a}</p>
        </div>
      )}
    </div>
  );
}

export function HowItWorks() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Send an Invoice Before You Leave the Job",
    "description": "Talk for 30 seconds, verify line items from your catalog, send — under 60 seconds with SMASH",
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
        title="Send an Invoice Before You Leave — How SMASH Works | SMASH"
        description="Finished the job? Talk for 30 seconds, verify line items from your catalog, send. Field (iPhone voice) or desk (Gmail extension). GST-ready in Australia, NZ, UK, US, Canada."
        keywords="send invoice after job, how smash works, voice to invoice, fastest way to invoice, invoice without typing"
        ogTitle="Send the Invoice Before You Leave — How SMASH Works"
        ogDescription="Talk, verify against your catalog, send in under 60 seconds. iPhone in the field or Gmail at your desk. No typing."
        ogImage="https://smashinvoices.com/hero_image.png"
        ogUrl="https://smashinvoices.com/how-it-works"
        twitterTitle="Send the Invoice Before You Leave — How SMASH Works"
        twitterDescription="Talk for 30 seconds, verify, send. Under 60 seconds end to end. iPhone or Gmail."
        canonical="https://smashinvoices.com/how-it-works"
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={howToSchema} />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }} />
      <StructuredData data={createVideoSchema({
        name: "SMASH Voice-to-Invoice Demo",
        description: "Watch how SMASH turns your voice into a professional invoice in under 60 seconds. No typing required.",
        thumbnailUrl: "https://smashinvoices.com/hero_image.png",
        embedUrl: "https://www.youtube.com/embed/gr_iAEvyIQY",
        uploadDate: "2026-01-01"
      })} />
      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com' },
        { name: 'How It Works', url: 'https://smashinvoices.com/how-it-works' },
      ])} />
      <SchemaMarkup schemas={[aiOrgSchema, softwareApplicationSchema]} />

      <div className="min-h-screen bg-white">
        <Nav />

        <MarketingPhotoHero tintDirection="center" contentClassName="py-16 md:py-20 lg:py-32 text-center">
          <AnimateIn direction="up">
            <h1 className={`${iosLanding.heroHeadline} mb-6 md:mb-8 max-w-4xl mx-auto`}>
              <span className="block text-white">Send the invoice</span>
              <span className="block text-accent">before you leave.</span>
            </h1>
            <p className={`${iosLanding.subline} mx-auto mb-4 md:mb-6 !max-w-3xl`}>
              Talk for 30 seconds. Verify. Send. Under 60 seconds end to end.
            </p>
            <p className="font-body text-base text-white/60 font-medium max-w-2xl mx-auto leading-[1.5] mb-8">
              SMASH turns a voice description into a tax-compliant invoice — with GST (Australia &amp; NZ), VAT (UK), or sales tax (US/Canada) — and a Stripe Pay Now button, in under 60 seconds. Supports NDIS participant numbers and repeat invoices.
            </p>
            <DualProductCtas className="flex flex-col items-center [&_p]:text-center" />
          </AnimateIn>
        </MarketingPhotoHero>

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
            <ScaledPhone float="none">
              <PhoneMockup>
                <ListeningScreen />
              </PhoneMockup>
            </ScaledPhone>
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
            <ScaledPhone float="none">
              <PhoneMockup>
                <GeneratingScreen />
              </PhoneMockup>
            </ScaledPhone>
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
            <PhoneShowcase
              layout="dual-row"
              className="py-12"
              scaleClassName="scale-[0.72] sm:scale-[0.82] md:scale-90 lg:scale-100"
            >
              <PhoneMockup size="small">
                <AppScreen type="estimates-static" />
              </PhoneMockup>
              <PhoneMockup size="small">
                <AppScreen type="portal" />
              </PhoneMockup>
            </PhoneShowcase>
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
            <ScaledPhone float="none">
              <PhoneMockup>
                <AppScreen type="customer-detail" />
              </PhoneMockup>
            </ScaledPhone>
          }
        />

        {/* TESTIMONIALS */}
        <section className="py-14 md:py-20 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <AnimateIn className="text-center mb-10 md:mb-12">
              <p className="text-accent font-black text-xs uppercase tracking-widest mb-3">Real results</p>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-[0.88] text-brand">
                Tradies that tried it once and never looked back.
              </h2>
            </AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {testimonials.map((t, i) => (
                <AnimateIn key={i} delay={i * 80} direction="up">
                  <div className="rounded-[24px] bg-white border-2 border-border p-6 md:p-7 flex flex-col h-full">
                    <div className="flex items-center gap-0.5 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={12} className="text-accent fill-accent" />
                      ))}
                    </div>
                    <Quote size={20} className="text-accent/50 mb-3 shrink-0" />
                    <p className="font-body text-sm font-medium text-brand/75 leading-[1.6] mb-5 flex-1">
                      "{t.quote}"
                    </p>
                    <div>
                      <p className="font-black text-sm text-brand uppercase tracking-wide">{t.name}</p>
                      <p className="font-body text-xs text-brand/45 font-medium mt-0.5">{t.trade}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
            <AnimateIn direction="up" className="text-center mb-10 md:mb-12">
              <p className="text-accent font-black text-xs uppercase tracking-widest mb-3">Common questions</p>
              <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88]">
                How it works — answered
              </h2>
            </AnimateIn>
            <AnimateIn direction="up" delay={100}>
              <div className="bg-surface rounded-[32px] border-2 border-border px-6 sm:px-10 py-2">
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
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-[32px] bg-accent text-brand font-black text-base sm:text-lg uppercase tracking-wide hover:brightness-95 transition-all shadow-glow"
              >
                Start Free on iPhone
                <ArrowRight size={24} strokeWidth={3} />
              </a>
              {/* Trust strip */}
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-5">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <span className="font-body text-xs font-semibold text-white/50">4.9 App Store</span>
                </div>
                <span className="text-white/20 hidden sm:block">·</span>
                <span className="font-body text-xs font-medium text-white/40">No credit card required</span>
                <span className="text-white/20 hidden sm:block">·</span>
                <span className="font-body text-xs font-medium text-white/40">Cancel anytime</span>
              </div>
            </AnimateIn>
          </div>
        </section>

        <section className="bg-brand py-12 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
            <RelatedTools
              keywords={['invoice', 'quote', 'how to invoice']}
              title="Related free tools"
            />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
