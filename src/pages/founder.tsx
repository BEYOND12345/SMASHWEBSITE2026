import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';
import { SEO } from '../components/seo';
import { StructuredData } from '../components/structured-data';
import { Footer } from '../components/footer';

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
        ogImage="https://smashinvoices.com/hero_image.png"
        twitterTitle="Meet Dan — Founder of SMASH Invoices"
        twitterDescription="A working handyman who built voice to invoice software because typing quotes was slowing him down."
        canonical="https://smashinvoices.com/founder"
      />

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

      <nav className="max-w-7xl mx-auto px-8 lg:px-12 py-6 flex items-center justify-between relative z-10 bg-white border-b border-slate-200">
        <Link to="/" className="text-2xl font-black tracking-tight text-brand">
          SMASH<span className="text-accent text-4xl leading-none align-baseline">.</span>
        </Link>
        <Link to="/" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-brand transition-colors uppercase tracking-wide">
          <ArrowLeft size={18} />
          Back
        </Link>
      </nav>

      <section className="max-w-4xl mx-auto px-8 lg:px-12 py-16 lg:py-24">
        <div className="bg-white rounded-brand p-8 border border-slate-200 mb-12">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-brand flex items-center justify-center shrink-0">
              <span className="text-white text-3xl font-black">D</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900 mb-1 tracking-tight">Dan — Founder, SMASH Invoices</h1>
              <p className="text-base text-slate-600 font-semibold mb-3">Founder, SMASH Invoices & Good Hands Handyman</p>
              <a href="mailto:dan@smashinvoices.com" className="text-brand hover:text-accent transition-colors inline-block">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
          <p className="text-2xl font-bold text-slate-800">
            Whether it's a leaky roof or a broken workflow—I'm obsessed with fixing things.
          </p>

          <h2 className="text-3xl font-black text-brand mt-8 mb-4 tracking-tight">The Story</h2>

          <p>
            I'm a designer, an animator, and a product creator. But I'm also a professional handyman.
          </p>

          <p>
            I know what it's like to be on the tools because I'm still on them. I run <a href="https://www.goodhandshandyman.com.au" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-accent font-bold transition-colors">Good Hands Handyman</a>. I'm legit. I know the grind.
          </p>

          <p>
            But here is the other side of the coin: I'm dyslexic. If you don't know, that basically means I'm pretty crap at reading and writing. I've always been better with my hands.
          </p>

          <p>
            For years, this was a massive frustration. I could go to a job, solve a complex structural problem, or design a beautiful product. But ask me to sit down and type out an invoice? I'd freeze. It was slow, painful, and honestly, I felt like it held me back.
          </p>

          <h2 className="text-3xl font-black text-brand mt-8 mb-4 tracking-tight">The Fix</h2>

          <p>
            I'm the kind of person who can't leave a problem alone. It's just who I am. If I see a leaky roof, I have to patch it. If I see a process that wastes time, I have to improve it.
          </p>

          <p>
            I realized that my "weakness" with typing was actually an opportunity. Why are we forcing tradies—people who are masters of verbal communication and hands-on work—to act like office clerks?
          </p>

          <p>
            I used my background in design and tech to build the tool I personally needed.
          </p>

          <p>
            SMASH Invoices isn't just an app. It's my solution to the biggest headache in the trade. It allows you to use your voice to get the job done. It's fast, it's accurate, and it lets you get back to doing what you're good at.
          </p>

          <p className="text-xl font-black text-brand">
            I built it for me. Now I'm sharing it with you.
          </p>

          <p className="text-base text-slate-600 font-semibold">
            Dan<br />
            Founder, SMASH Invoices & Good Hands Handyman
          </p>

          <div className="bg-brand text-white rounded-brand p-8 mt-12">
            <h3 className="text-2xl font-black mb-4 tracking-tight">Want to chat?</h3>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              I'm always interested in hearing from people building businesses. If you have feedback, questions, or just want to talk about invoicing problems, reach out.
            </p>
            <a href="mailto:dan@smashinvoices.com" className="inline-flex items-center gap-3 px-6 py-3 rounded-brand bg-accent text-accentText font-bold text-base uppercase tracking-wider hover:brightness-95 transition-all">
              <Mail size={20} />
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <Footer showCTA />
    </div>
  );
}
