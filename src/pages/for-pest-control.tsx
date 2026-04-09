import { Link } from 'react-router-dom';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { PhoneMockup } from '../components/phone-mockup';
import { ListeningScreen } from '../components/listening-screen';
import { EstimatesScreen } from '../components/estimates-screen';

export function ForPestControl() {
  return (
    <div className="bg-white">

      <Nav />

      {/* HERO */}
      <section className="relative text-white min-h-[90vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero_image.png" alt="SMASH invoicing app for pest control" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/97 via-gray-900/90 to-gray-900/60" />
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-end px-6 pb-16 lg:px-24 lg:pb-24 pt-12">
          <p className="font-black text-xs uppercase tracking-widest text-accent mb-4">For Pest Control</p>
          <h1 className="font-display text-[56px] lg:text-[100px] uppercase tracking-tighter leading-[0.88] text-white max-w-5xl mb-6">
            Treatment Done. Invoice Sent. Ute Loaded.
          </h1>
          <p className="font-body text-xl lg:text-2xl text-white/70 max-w-2xl leading-relaxed mb-8">
            Pest control invoicing is complex. Multiple treatments, follow-up visits, chemical quantities. SMASH builds the full invoice from a voice description in under 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="https://apps.apple.com/app/smash-invoices/id6759475079"
              className="px-8 py-4 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all"
            >
              Download Free on iOS
            </a>
            <Link
              to="/how-it-works"
              className="px-8 py-4 rounded-[32px] bg-white/10 text-white border border-white/20 font-black text-sm uppercase tracking-widest hover:bg-white/15 transition-all backdrop-blur-sm"
            >
              See How It Works
            </Link>
          </div>
          <div className="flex items-center gap-3 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-accent" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <span className="font-body text-sm text-white/60">4.9 on the App Store · No credit card required · Free to start</span>
          </div>
        </div>
      </section>

      {/* ACCENT BAR */}
      <section className="bg-accent overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 md:py-14">
          <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-8">
            <span className="block text-[80px] sm:text-[120px] md:text-[160px] font-black leading-none tracking-tighter text-brand">
              60s
            </span>
            <div className="pb-2 md:pb-8">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.9] text-brand">
                Every treatment<br />invoiced.<br />Every time.
              </p>
              <p className="font-body text-base text-brand/60 font-medium mt-3 max-w-sm leading-[1.4]">
                Multiple treatment types, chemical quantities, follow-up rates. All handled from one voice description before you load the ute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="py-6 md:py-0 md:pr-12">
              <p className="font-display text-6xl lg:text-7xl uppercase tracking-tighter text-brand mb-2">60 sec</p>
              <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400">Time per invoice with SMASH</p>
            </div>
            <div className="py-6 md:py-0 md:px-12">
              <p className="font-display text-6xl lg:text-7xl uppercase tracking-tighter text-brand mb-2">Any</p>
              <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400">Treatment types supported</p>
            </div>
            <div className="py-6 md:py-0 md:pl-12">
              <p className="font-display text-6xl lg:text-7xl uppercase tracking-tighter text-brand mb-2">4+ hrs</p>
              <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400">Admin hours saved per week</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PAIN */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="font-black text-xs uppercase tracking-widest text-accent mb-6">The Real Problem</p>
            <h2 className="font-display text-4xl lg:text-6xl uppercase tracking-tighter leading-[0.9] text-brand mb-8">
              Three Treatment Types. Chemical Quantities. Two Rate Cards. On One Invoice.
            </h2>
            <p className="font-body text-xl text-slate-500 leading-relaxed mb-6">
              Termite pre-treatment, general pest spray, rodent baiting, all on the same job. Multiple treatment types, chemical quantities to price by the litre, follow-up rates that differ from first-visit rates. All of it to be entered manually on a phone screen after a physical day's work.
            </p>
            <p className="font-body text-xl text-slate-500 leading-relaxed">
              SMASH lets you set up your treatment catalog once, then invoice any combination from a voice description. Chemical quantities, treatment types, residential vs commercial. All handled automatically.
            </p>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-24 lg:py-32 bg-brand text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="font-black text-xs uppercase tracking-widest text-accent mb-6">How SMASH Works</p>
              <h2 className="font-display text-4xl lg:text-6xl uppercase tracking-tighter leading-[0.9] text-white mb-8">
                Every Treatment Invoiced. Every Time.
              </h2>
              <p className="font-body text-xl text-white/60 leading-relaxed mb-6">
                Say "general pest treatment, two hours, cockroaches, spiders and ants, interior and exterior, roof void dusting, standard rate." SMASH builds the full invoice with your treatment and chemical rates applied.
              </p>
              <p className="font-body text-xl text-white/60 leading-relaxed">
                Residential, commercial, follow-up. All your rate types set once and applied automatically from what you say.
              </p>
            </div>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Describe the treatment', body: 'Treatment type, chemicals used, duration, site type. Say it in plain language.' },
                { step: '02', title: 'Rates applied automatically', body: 'SMASH matches your treatment catalog and applies the right rate. Chemical quantities priced correctly.' },
                { step: '03', title: 'Professional invoice sent', body: 'Client gets it on their phone immediately. No chasing, no bank transfers.' },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-6 pb-8 border-b border-white/10 last:border-0 last:pb-0">
                  <span className="font-black text-4xl leading-none text-accent flex-shrink-0">{step}</span>
                  <div>
                    <h3 className="font-black text-lg uppercase tracking-tight text-white mb-2">{title}</h3>
                    <p className="font-body text-base text-white/60 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SCREENS */}
      <section className="py-20 lg:py-28 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="font-black text-xs uppercase tracking-widest text-accent mb-4">See it in action</p>
              <h2 className="font-black text-4xl lg:text-5xl uppercase tracking-tighter leading-[0.88] text-brand mb-6">
                Professional invoices. Built before you load the ute.
              </h2>
              <p className="font-body text-lg text-brand/60 leading-relaxed mb-6">
                Every invoice is GST-compliant, includes your ABN, and arrives in your customer's inbox as a professional PDF with a payment link attached. No typing. No laptop. Done in 60 seconds.
              </p>
              <a
                href="https://apps.apple.com/app/smash-invoices/id6759475079"
                className="inline-block px-8 py-4 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all"
              >
                Download Free on iOS
              </a>
            </div>
            <div className="flex items-end justify-center gap-4 overflow-visible">
              <div className="animate-float-slow -rotate-6 -mr-6 scale-[0.75] sm:scale-[0.85] lg:scale-100 origin-bottom">
                <PhoneMockup>
                  <ListeningScreen />
                </PhoneMockup>
              </div>
              <div className="animate-float-delayed scale-[0.75] sm:scale-[0.85] lg:scale-100 origin-bottom">
                <PhoneMockup>
                  <EstimatesScreen />
                </PhoneMockup>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO DEMO */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="font-black text-xs uppercase tracking-widest text-accent mb-4">See it in action</p>
            <h2 className="font-display text-4xl lg:text-6xl uppercase tracking-tighter leading-[0.9] text-brand mb-4">
              Watch How It Works
            </h2>
            <p className="font-body text-lg text-brand/60 max-w-2xl mx-auto">
              Voice to PDF. Under 60 seconds.
            </p>
          </div>
          <div className="relative aspect-video rounded-[24px] lg:rounded-[32px] overflow-hidden border-2 border-slate-200 shadow-2xl">
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

      {/* 4X BAR */}
      <section className="bg-brand overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
            <span className="block font-black tracking-tighter text-accent flex-shrink-0 text-[140px] sm:text-[180px] md:text-[200px] lg:text-[356px] leading-none" style={{marginTop:'-0.08em', marginBottom:'-0.08em'}}>
              4X
            </span>
            <div>
              <p className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.88] text-white">
                Faster<br />than<br />typing.
              </p>
              <p className="font-body text-base md:text-lg text-white/60 font-medium mt-5 max-w-sm leading-[1.4]">
                Voice is four times faster than typing. Stop losing 20 to 30 minutes to every invoice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="font-black text-xs uppercase tracking-widest text-accent mb-4">Built For Pest Control</p>
            <h2 className="font-display text-4xl lg:text-6xl uppercase tracking-tighter leading-[0.9] text-brand max-w-2xl">
              Everything You Actually Need. Nothing You Don't.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Treatment Catalog', body: "Set up your standard treatments, general pest, termite, rodent, bed bug, with your rates. Mention the treatment and it's priced." },
              { title: 'Chemical Quantities', body: 'Add your chemical pricing per litre or application. Mention what you used and SMASH calculates the cost.' },
              { title: 'Residential and Commercial Rates', body: 'Different rates for houses and commercial kitchens. Set once, applied from your description.' },
              { title: 'Follow-Up Pricing', body: "Set a reduced rate for follow-up visits. SMASH knows to apply it when you mention it's a return call." },
              { title: 'Client Property Records', body: 'Property history saved per client. Recurring treatments take 15 seconds to invoice.' },
              { title: 'Online Payments', body: 'Clients pay from the invoice link. No chasing, no bank transfers.' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:border-accent hover:bg-white transition-all duration-200">
                <div className="w-2 h-2 rounded-full bg-accent mb-5" />
                <h3 className="font-black text-sm uppercase tracking-tight text-brand mb-3">{title}</h3>
                <p className="font-body text-base text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA */}
      <section className="bg-accent py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="font-black text-xs uppercase tracking-widest text-brand/50 mb-3">Ready to stop losing money?</p>
            <h2 className="font-display text-3xl lg:text-5xl uppercase tracking-tighter leading-[0.9] text-brand max-w-xl">
              Every Treatment Invoiced. Every Dollar Captured.
            </h2>
          </div>
          <a
            href="https://apps.apple.com/app/smash-invoices/id6759475079"
            className="flex-shrink-0 px-10 py-5 rounded-[32px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Download Free on iOS
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-black text-xs uppercase tracking-widest text-accent mb-12">What Pest Controllers Say</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Termite pre-treatments are complex invoices. Labour, chemical quantities, metres of soil treatment. Before SMASH I'd avoid doing them on the day because it took so long. Now it's 60 seconds.", name: 'Wayne', location: 'Pest Control Operator, Sydney' },
              { quote: "The follow-up rate thing was always a source of errors. I'd charge full rate by mistake, have to apologise and re-issue. SMASH applies the right rate from the description. No more awkward calls.", name: 'Leanne', location: 'Pest Controller, Brisbane' },
              { quote: "I do a lot of commercial kitchen work. The rate is different, the frequency is different. Having client profiles with the right rate saved means I can invoice 8 properties before lunch.", name: 'Dean', location: 'Commercial Pest Control, Melbourne' },
            ].map(({ quote, name, location }) => (
              <div key={name} className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <p className="font-black text-5xl leading-none mb-4 text-accent">"</p>
                  <p className="font-body text-base text-slate-600 leading-relaxed">{quote}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="font-black text-sm uppercase tracking-tight text-brand">{name}</p>
                  <p className="font-body text-xs text-slate-400 mt-1">{location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SNIPPET */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="font-black text-xs uppercase tracking-widest text-accent mb-4">Simple Pricing</p>
            <h2 className="font-display text-4xl lg:text-5xl uppercase tracking-tighter leading-[0.9] text-brand">
              Volume Only. Same Features On Every Plan.
            </h2>
            <p className="font-body text-lg text-slate-500 mt-4 max-w-xl">No locked features. No paywalls. Pay more when you send more invoices, nothing else.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
            {[
              { tier: 'Free', price: '$0', detail: 'Up to 5 invoices/month', note: 'Try it, no card needed' },
              { tier: 'Starter', price: '$14.99', detail: 'Up to 30 invoices/month', note: 'Most popular for solo cleaners' },
              { tier: 'Pro', price: '$24.99', detail: 'Unlimited invoices', note: 'For busy cleaning businesses' },
            ].map(({ tier, price, detail, note }) => (
              <div key={tier} className="bg-slate-50 border border-slate-200 rounded-3xl p-7">
                <p className="font-black text-xs uppercase tracking-widest text-accent mb-3">{tier}</p>
                <p className="font-display text-4xl uppercase tracking-tighter text-brand mb-1">{price}<span className="text-lg text-slate-400 font-body font-normal">/mo</span></p>
                <p className="font-body text-sm text-slate-600 mb-2">{detail}</p>
                <p className="font-body text-xs text-slate-400">{note}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-sm text-slate-400 mt-8">All plans include voice invoicing, GST compliance, Stripe payments, read receipts and customer portal. <Link to="/pricing" className="text-accent underline underline-offset-2">See full pricing</Link></p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl lg:text-6xl uppercase tracking-tighter leading-[0.88] text-white max-w-2xl mb-4">
              Every Treatment Invoiced. Every Time.
            </h2>
            <p className="font-body text-xl text-white/60 max-w-xl">Free to try. No credit card. Works on any iPhone.</p>
          </div>
          <a
            href="https://apps.apple.com/app/smash-invoices/id6759475079"
            className="flex-shrink-0 px-10 py-5 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all shadow-glow"
          >
            Download Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="font-black text-xs uppercase tracking-widest text-accent mb-4">Common Questions</p>
            <h2 className="font-display text-4xl lg:text-5xl uppercase tracking-tighter leading-[0.9] text-brand">
              Quick Answers.
            </h2>
          </div>
          <div className="max-w-3xl space-y-0 divide-y divide-slate-200">
            {[
              {
                q: 'Is it actually free?',
                a: 'Yes. Download it, set up your account, send your first 5 invoices at no cost. No credit card required to start. You only pay when you need more than 5 invoices a month.'
              },
              {
                q: 'Does it handle GST automatically?',
                a: 'Every invoice SMASH creates is GST-compliant and includes your ABN. You never touch a calculator. Your accountant gets exactly what they need at tax time.'
              },
              {
                q: 'Do I need a laptop or computer?',
                a: 'No. SMASH is iPhone only, built for people who work on the road. Everything is done from your phone, including invoicing, approvals, and getting paid.'
              },
              {
                q: 'Can I handle different treatment types and chemical quantities on the same invoice?',
                a: 'Yes. Set up your treatment catalog once with your chemical rates. When you describe the job, mention each treatment type and the quantities used. SMASH prices them all correctly as separate line items on the same invoice.'
              },
            ].map(({ q, a }) => (
              <div key={q} className="py-8">
                <h3 className="font-black text-base uppercase tracking-tight text-brand mb-3">{q}</h3>
                <p className="font-body text-base text-slate-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
