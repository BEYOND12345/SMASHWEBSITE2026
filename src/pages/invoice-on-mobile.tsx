import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Footer } from '../components/footer';
import { PhoneMockup, AppScreen } from '../components/phone-mockup';
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { AnimateIn } from '../components/animate-in';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

const faqs = [
  {
    q: "Can I really invoice from my phone without typing?",
    a: "Yes. SMASH uses voice input — you describe the job out loud and the app builds the invoice. No typing, no keyboard, no squinting at a small screen. The whole process takes under 60 seconds."
  },
  {
    q: "What phones does SMASH work on?",
    a: "SMASH is an iOS app available on iPhone. It works on any iPhone running iOS 16 or later. Download it free from the App Store."
  },
  {
    q: "Does it work without WiFi or mobile data?",
    a: "Voice processing requires a connection at the moment you record — but it's a short burst of data, not a continuous stream. If you're in a low-signal area, you can record in the app and process when signal returns."
  },
  {
    q: "Can I send the invoice from my phone?",
    a: "Yes. SMASH sends a professional PDF invoice directly to your client's email — from your phone, from the job site, before you've even packed up your gear."
  },
  {
    q: "What if I want to review the invoice before sending?",
    a: "You always see the invoice before it goes anywhere. Edit any line item, adjust quantities or prices, then approve and send. Nothing leaves without your sign-off."
  },
  {
    q: "Is it secure to store client and payment data on my phone?",
    a: "Yes. SMASH uses enterprise-grade encryption and stores data securely in the cloud — not just on your device. If you lose your phone, your invoices and client data are safe."
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

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

export function InvoiceOnMobile() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Invoice on Mobile | Invoice from Your Phone | SMASH Invoices"
        description="Invoice from your phone without typing. Speak the job, SMASH builds the invoice. Send a professional PDF before you leave the job site."
        keywords="invoice on mobile, invoice from phone, mobile invoicing app, iPhone invoice app, invoice on site, voice invoice phone"
        ogTitle="Invoice on Mobile — SMASH"
        ogDescription="Speak the job. Invoice sent. Before you leave the driveway."
        canonical="https://smashinvoices.com/invoice-on-mobile"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* NAV */}
      <nav className="bg-brand px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between sticky top-0 z-50">
        <Link to="/" className="text-white font-black text-xl tracking-tighter">SMASH.</Link>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all">
          Start Free
        </a>
      </nav>

      {/* HERO */}
      <section className="bg-brand pt-16 pb-0 md:pt-24 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <AnimateIn direction="left">
            <div className="pb-16 md:pb-24">
              <p className="text-accent font-black text-xs uppercase tracking-widest mb-4">Mobile Invoicing</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-6">
                Invoice sent.<br />Before you leave<br />the driveway.
              </h1>
              <p className="font-body text-lg text-white/80 font-medium leading-[1.5] mb-8 max-w-md">
                No laptop. No desk. No typing. Talk for 30 seconds and SMASH builds a professional, GST-compliant invoice — sent from your phone, on the job.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-95 transition-all">
                  Download Free
                </a>
                <Link to="/how-it-works" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] border-2 border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-white/10 transition-all">
                  See How It Works
                </Link>
              </div>
            </div>
            </AnimateIn>
            <AnimateIn direction="right">
            <div className="flex justify-center md:justify-end">
              <PhoneMockup>
                <AppScreen type="voice" />
              </PhoneMockup>
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* AI ANSWER BLOCK */}
      <section className="bg-accent py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-xs font-black uppercase tracking-widest text-brand/50 mb-3">Can you invoice from your phone?</p>
          <p className="text-lg md:text-xl font-bold text-brand leading-[1.3]">
            Yes — and with SMASH, you don't even need to type. Open the app, tap record, describe the job out loud, and tap send. A professional PDF invoice with your ABN, correct GST, and itemised line items is emailed to your client before you've packed up your tools. The whole process takes under 60 seconds.
          </p>
        </div>
      </section>

      {/* PROBLEM / REALITY */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4 text-center">
              The old way of invoicing on a phone
            </h2>
            <p className="font-body text-brand/60 font-medium leading-[1.5] text-center mb-12 max-w-2xl mx-auto">
              Every invoicing app says it works on mobile. Most of them mean "you can technically open it on your phone."
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { problem: "Tiny text fields built for desktop", reality: "Typing line items with greasy thumbs on a small screen" },
              { problem: "\"Mobile-friendly\" login screens", reality: "Then 12 tabs of settings before you reach an invoice" },
              { problem: "Drop-down menus that don't scroll right", reality: "Three taps per line item. Five line items. You've lost the will." },
              { problem: "Invoice saved as draft. Again.", reality: "Because sending from mobile is broken so you finish it at home" },
            ].map((item, i) => (
              <div key={i} className="bg-surface rounded-[24px] border-2 border-border p-6">
                <p className="text-brand font-black text-sm uppercase tracking-tighter leading-[0.88] mb-2">{item.problem}</p>
                <p className="font-body text-brand/60 font-medium text-sm leading-[1.5]">{item.reality}</p>
              </div>
            ))}
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* HOW SMASH WORKS ON MOBILE */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-4 text-center">
              SMASH was built for one hand, one job site
            </h2>
            <p className="font-body text-white/60 font-medium leading-[1.5] text-center mb-12 max-w-2xl mx-auto">
              Not a desktop app squeezed into a phone. A voice-first mobile tool designed around how you actually work.
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "One tap to record",
                body: "Open SMASH. One button. Start talking. No login maze, no blank forms, no dropdowns to navigate."
              },
              {
                step: "02",
                title: "Your voice does the data entry",
                body: "Say the job, the materials, the client name. SMASH fills in prices from your catalog. GST calculated. ABN added."
              },
              {
                step: "03",
                title: "Send before you start the engine",
                body: "Review the invoice. Make any edits. Tap send. Your client gets a PDF. You get on with your day."
              },
            ].map((s) => (
              <div key={s.step} className="bg-white/5 border-2 border-white/10 rounded-[32px] p-8">
                <p className="text-accent font-black text-sm uppercase tracking-widest mb-3">{s.step}</p>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-3">{s.title}</h3>
                <p className="font-body text-white/60 font-medium text-sm leading-[1.5]">{s.body}</p>
              </div>
            ))}
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* SPEED COMPARISON */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10 text-center">
            Time to send an invoice on your phone
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 pr-6 text-sm font-black text-brand/50 uppercase tracking-wide">Method</th>
                  <th className="text-center py-4 px-4 text-sm font-black text-brand/50 uppercase tracking-wide">Time</th>
                  <th className="text-center py-4 px-4 text-sm font-black text-brand/50 uppercase tracking-wide">Typing required</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: "Word doc on phone", time: "15–25 min", typing: true },
                  { method: "Xero mobile app", time: "8–12 min", typing: true },
                  { method: "Other invoice apps", time: "5–10 min", typing: true },
                  { method: "SMASH — voice only", time: "Under 60 sec", typing: false },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-border ${i === 3 ? 'bg-accent/5' : ''}`}>
                    <td className={`py-4 pr-6 text-sm font-bold leading-[1.15] ${i === 3 ? 'text-brand' : 'text-brand/60'}`}>{row.method}</td>
                    <td className={`text-center py-4 px-4 text-sm font-black ${i === 3 ? 'text-accent' : 'text-brand/50'}`}>{row.time}</td>
                    <td className="text-center py-4 px-4">
                      {row.typing
                        ? <span className="text-brand/30 font-bold text-sm">Yes</span>
                        : <Check size={18} className="mx-auto text-accent" strokeWidth={3} />
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4 text-center">
              Watch it in action
            </h2>
            <p className="font-body text-brand/60 font-medium text-center leading-[1.5] mb-10">
              From tap to sent invoice. Under 60 seconds.
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
          <div className="rounded-[24px] overflow-hidden border-2 border-border aspect-video">
            <iframe
              src="https://www.youtube.com/embed/gr_iAEvyIQY?rel=0"
              title="SMASH Invoices — Invoice on mobile demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* FROM THE BLOG */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-brand uppercase tracking-tighter leading-[0.88]">From the blog</h2>
            <Link to="/blog" className="text-sm font-black text-brand/50 uppercase tracking-wide hover:text-brand transition-colors">All posts →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { slug: "why-invoicing-apps-fail-mobile-test", title: "Why Invoice Apps Fail the Mobile Test", desc: "Most invoice software fails the moment you try to use it in the field. Here's what to look for instead." },
              { slug: "stop-bringing-laptops-to-job-sites", title: "Stop Bringing Laptops to Job Sites", desc: "Your laptop has no place on a job site. Your phone does — if you have the right app." },
              { slug: "why-tradies-hate-phones-for-admin", title: "Why People Hate Phones for Admin", desc: "It's not the phone. It's the apps. Here's what makes mobile admin feel broken — and what doesn't." },
            ].map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="bg-surface rounded-[24px] border-2 border-border p-6 hover:border-accent transition-colors group">
                <h3 className="text-base font-black text-brand uppercase tracking-tighter leading-[0.88] mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="text-sm text-brand/60 font-medium leading-[1.4]">{post.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-10 md:mb-14 text-center">
              Mobile invoicing questions
            </h2>
            <div className="bg-white rounded-[32px] border-2 border-border px-4 sm:px-8 py-2 sm:py-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <AnimateIn direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter leading-[0.88]">
            Your phone is your<br />invoice office now.
          </h2>
          <p className="font-body text-lg text-white/80 font-medium leading-[1.5] mb-8 max-w-xl mx-auto">
            Free to download. Talk for 30 seconds. See your first invoice.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-widest hover:brightness-95 transition-all">
              Download Free
            </a>
            <Link to="/voice-invoicing" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] border-2 border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-white/10 transition-all">
              How Voice Invoicing Works
            </Link>
          </div>
          <p className="text-sm text-white/40 font-medium">
            <Link to="/features" className="underline hover:text-white/70 transition-colors">All features</Link> · <Link to="/pricing" className="underline hover:text-white/70 transition-colors">Pricing</Link> · <Link to="/gst-compliant-invoicing" className="underline hover:text-white/70 transition-colors">GST invoicing</Link>
          </p>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
