import { Link } from 'react-router-dom';
import { Mail, ArrowRight, Star } from 'lucide-react';
import { SEO } from '../components/seo';
import { hreflangAlternates } from '../data/country-data';
import { StructuredData, createBreadcrumbSchema } from '../components/structured-data';
import { Footer } from '../components/footer';
import { PhoneMockup } from '../components/phone-mockup';
import { ListeningScreen } from '../components/listening-screen';
import { AnimateIn } from '../components/animate-in';
import { Nav } from '../components/nav';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

export function Founder() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title="Meet the Founder | SMASH Invoices Australia"
        description="Meet Dan, founder of SMASH Invoices. A working handyman who built voice to invoice software because typing quotes was slowing him down. Real problems, real solutions."
        keywords="founder story, about us, SMASH founder, voice invoicing creator, service business software founder"
        ogTitle="Meet Dan — Founder of SMASH Invoices"
        ogDescription="A working handyman who built voice to invoice software because typing quotes was slowing him down. Real problems, real solutions."
        ogUrl="https://smashinvoices.com/founder"
        ogImage="https://smashinvoices.com/og-image.png"
        twitterTitle="Meet Dan — Founder of SMASH Invoices"
        twitterDescription="A working handyman who built voice to invoice software because typing quotes was slowing him down."
        canonical="https://smashinvoices.com/founder"
        hreflangs={hreflangAlternates}
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com' },
        { name: 'Our Story', url: 'https://smashinvoices.com/founder' },
      ])} />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
          "@type": "Person",
          "name": "Dan",
          "jobTitle": "Founder",
          "worksFor": {
            "@type": "Organization",
            "name": "SMASH Invoices",
            "url": "https://smashinvoices.com"
          },
          "description": "Founder of SMASH Invoices and Good Hands Handyman. Built voice to invoice software for people who work with their hands.",
          "email": "dan@smashinvoices.com",
          "url": "https://smashinvoices.com/founder"
        }
      }} />

      {/* HERO WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero_image.png"
            alt="SMASH Invoices founder — built for people who work with their hands"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/80 to-brand/40"></div>
        </div>

        <Nav />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 pb-12 md:pb-16">
          <AnimateIn direction="up">
            <p className="text-sm font-black text-accent uppercase tracking-widest mb-4">Meet the Founder</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.88] uppercase tracking-tighter mb-6">
              Built by Someone<br />Who Gets It.
            </h1>
            <p className="font-body text-lg sm:text-xl md:text-2xl text-white/80 font-medium leading-[1.5] max-w-2xl">
              A working handyman who couldn't type fast enough to keep up with the jobs.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FOUNDER CARD */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 -mt-6 relative z-20">
        <div className="bg-white rounded-[32px] p-6 sm:p-8 border-2 border-border shadow-sm">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand flex items-center justify-center shrink-0">
              <span className="text-white text-2xl sm:text-3xl font-black">D</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-brand tracking-tighter">Dan</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">Founder, SMASH Invoices & Good Hands Handyman</p>
              <a href="mailto:dan@smashinvoices.com" className="text-sm text-accent font-bold hover:text-brand transition-colors mt-1 inline-block">
                dan@smashinvoices.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THE STORY */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 lg:py-20">
        <AnimateIn direction="up">
        <div className="space-y-6 text-lg text-slate-700 leading-[1.5]">

          <h2 className="text-3xl sm:text-4xl font-black text-brand tracking-tighter leading-[0.88] uppercase">The Story</h2>

          <p className="font-body">
            I'm a designer, an animator, and a product creator. But I'm also a professional handyman.
          </p>

          <p className="font-body">
            I know what it's like to be on the tools because I'm still on them. I run <a href="https://www.goodhandshandyman.com.au" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-accent font-bold transition-colors">Good Hands Handyman</a>. I'm legit. I know the grind.
          </p>

          <p className="font-body">
            But here is the other side of the coin: I'm dyslexic. If you don't know, that basically means I'm pretty crap at reading and writing. I've always been better with my hands.
          </p>

          {/* PULL QUOTE */}
          <div className="bg-brand rounded-[32px] p-8 sm:p-10 my-10">
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-[0.88] tracking-tighter">
              "Ask me to sit down and type out an invoice? I'd freeze. It was slow, painful, and honestly, I felt like it held me back."
            </p>
            <p className="text-sm text-white/50 font-bold mt-4 uppercase tracking-wider">— Dan, on why voice changes everything</p>
          </div>

          <p className="font-body">
            For years, this was a massive frustration. I could go to a job, solve a complex structural problem, or design a beautiful product. But ask me to sit down and type out an invoice? I'd freeze.
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-brand tracking-tighter leading-[0.88] uppercase pt-4">The Fix</h2>

          <p className="font-body">
            I'm the kind of person who can't leave a problem alone. It's just who I am. If I see a leaky roof, I have to patch it. If I see a process that wastes time, I have to improve it.
          </p>

          <p className="font-body">
            I realized that my "weakness" with typing was actually an opportunity. Why are we forcing people who are masters of verbal communication and hands-on work to act like office clerks?
          </p>

          <p className="font-body">
            I used my background in design and tech to build the tool I personally needed.
          </p>

          <p className="font-body">
            SMASH Invoices isn't just an app. It's my solution to the biggest headache in the trade. It allows you to use your voice to get the job done. It's accurate, and it lets you get back to doing what you're good at.
          </p>

          <p className="text-xl sm:text-2xl font-black text-brand">
            I built it for me. Now I'm sharing it with you.
          </p>

          <p className="font-body text-base text-slate-500 font-medium">
            Dan<br />
            Founder, SMASH Invoices & Good Hands Handyman
          </p>
        </div>
        </AnimateIn>
      </section>

      {/* SEE THE PRODUCT */}
      <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <AnimateIn direction="left">
            <div>
              <p className="text-sm font-black text-accent uppercase tracking-widest mb-4">The Product</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand tracking-tighter leading-[0.88] uppercase mb-6">
                This Is What I Built.
              </h2>
              <p className="font-body text-lg text-slate-700 font-medium leading-[1.5] mb-8">
                Tap the mic. Describe the job. SMASH builds the quote, sends it to the customer, and gets you paid — before you've left the driveway.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-brand text-white font-black text-sm sm:text-base uppercase tracking-widest hover:bg-brand/90 transition-all"
                >
                  See How It Works
                  <ArrowRight size={20} strokeWidth={2.5} />
                </Link>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-95 transition-all"
                >
                  Start Free
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-accent fill-accent" />
                  ))}
                </div>
                <span className="font-body text-xs font-semibold text-slate-400">4.9 App Store · No credit card required</span>
              </div>
            </div>
            </AnimateIn>
            <AnimateIn direction="right">
            <div className="flex justify-center scale-[0.65] sm:scale-75 md:scale-[0.85] lg:scale-95 xl:scale-100">
              <PhoneMockup>
                <ListeningScreen />
              </PhoneMockup>
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* WANT TO CHAT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 lg:py-20">
        <AnimateIn direction="up">
        <div className="bg-brand text-white rounded-[32px] p-6 sm:p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl font-black mb-4 tracking-tighter leading-[0.88]">Want to chat?</h3>
          <p className="font-body text-base sm:text-lg text-white/80 mb-6 leading-[1.5]">
            I'm always interested in hearing from people building businesses. If you have feedback, questions, or just want to talk about invoicing problems, reach out.
          </p>
          <a href="mailto:dan@smashinvoices.com" className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-95 transition-all">
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
        </AnimateIn>
      </section>

      <Footer />
    </div>
  );
}
