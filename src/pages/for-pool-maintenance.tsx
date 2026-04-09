import { Link } from 'react-router-dom';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { PhoneMockup } from '../components/phone-mockup';
import { ListeningScreen } from '../components/listening-screen';
import { EstimatesScreen } from '../components/estimates-screen';

export function ForPoolMaintenance() {
  return (
    <div className="bg-white">

      <Nav />

      {/* HERO */}
      <section className="relative text-white min-h-[90vh] flex flex-col overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero_image.png" alt="SMASH invoicing app for pool maintenance" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/97 via-gray-900/90 to-gray-900/60" />
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-end px-6 pb-16 lg:px-24 lg:pb-24 pt-12">
          <p className="font-black text-xs uppercase tracking-widest text-accent mb-4">For Pool Maintenance</p>
          <h1 className="font-display text-[56px] lg:text-[100px] uppercase tracking-tighter leading-[0.88] text-white max-w-5xl mb-6">
            Pool Serviced. Invoice Sent. Next Stop.
          </h1>
          <p className="font-body text-xl lg:text-2xl text-white/70 max-w-2xl leading-relaxed mb-8">
            Multiple pools per day, chemical top-ups, equipment checks, repairs. SMASH invoices every service from your phone in under 60 seconds, between pools, not at the end of the day.
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
                Invoice every<br />pool. Between<br />pools.
              </p>
              <p className="font-body text-base text-brand/60 font-medium mt-3 max-w-sm leading-[1.4]">
                Eight pools, different chemicals every visit. Stop guessing at the end of the day. Invoice each one while the details are still fresh.
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
              <p className="font-display text-6xl lg:text-7xl uppercase tracking-tighter text-brand mb-2">All of them</p>
              <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400">Properties invoiced between visits</p>
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
              Eight Pools. Different Chemicals Each Visit. All To Invoice From Memory At Night.
            </h2>
            <p className="font-body text-xl text-slate-500 leading-relaxed mb-6">
              Pool 3 needed 2 litres of chlorine and a pH up. Pool 5 needed an algaecide treatment. Pool 7 had a pump that needed replacing. All different chemical quantities, all different costs, all being tracked in your head through a full day on the road.
            </p>
            <p className="font-body text-xl text-slate-500 leading-relaxed">
              Most pool technicians invoice everything at the end of the day when details are already fading. SMASH lets you invoice each property in 60 seconds between visits, with the chemical quantities and service rates filled in automatically.
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
                Invoice Every Pool. Between Pools.
              </h2>
              <p className="font-body text-xl text-white/60 leading-relaxed mb-6">
                Say "weekly service at the Cremorne property, vacuum, backwash, 2 litres liquid chlorine, 1kg pH up, standard weekly rate." SMASH applies your service rate and chemical pricing in one step.
              </p>
              <p className="font-body text-xl text-white/60 leading-relaxed">
                Standard service, green pool treatment, repair rate. All your rates set once. Chemical quantities priced automatically from what you say.
              </p>
            </div>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Describe the service', body: "Tasks done, chemicals dosed, any repairs. Say it before you drive to the next property." },
                { step: '02', title: 'Chemical costs calculated automatically', body: 'SMASH applies your chemical rates per litre or per application. Service rate added. GST calculated.' },
                { step: '03', title: 'Client receives invoice immediately', body: "Sent to their phone while you're still at the pool. Recurring clients expect it now." },
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
                Chemical quantities. Service rates. All priced automatically between pools.
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
            <p className="font-black text-xs uppercase tracking-widest text-accent mb-4">Built For Pool Maintenance</p>
            <h2 className="font-display text-4xl lg:text-6xl uppercase tracking-tighter leading-[0.9] text-brand max-w-2xl">
              Everything You Actually Need. Nothing You Don't.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Chemical Pricing Catalog', body: 'Chlorine, pH up, pH down, algaecide, clarifier. Add your chemical prices once. Mention quantity used and SMASH prices it.' },
              { title: 'Service vs Repair Rates', body: 'Set a standard service rate and a repair hourly rate. Mention which applies and SMASH uses the right one.' },
              { title: 'Recurring Client Profiles', body: 'Client, pool size, and service rate all saved. Recurring service invoices take 15 seconds.' },
              { title: 'Multi-Property Days', body: "Invoice each property immediately or batch at day's end. All jobs queued and ready." },
              { title: 'Equipment Supply and Install', body: 'Pumps, filters, chlorinators. Describe supply and install and SMASH lists them as separate line items.' },
              { title: 'Online Payments', body: 'Clients pay from the invoice link. Recurring clients get invoiced and pay on a predictable cycle.' },
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
      <section className="bg-accent py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl lg:text-6xl uppercase tracking-tighter leading-[0.88] text-brand max-w-2xl mb-4">
              Every Pool Invoiced. Every Dollar Captured.
            </h2>
            <p className="font-body text-xl text-brand/60 max-w-xl">Free to start. No credit card. Works on any iPhone.</p>
          </div>
          <a
            href="https://apps.apple.com/app/smash-invoices/id6759475079"
            className="flex-shrink-0 px-10 py-5 rounded-[32px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Download Free
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="font-black text-xs uppercase tracking-widest text-accent mb-12">What Pool Technicians Say</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "I service 9 properties on my Monday run. Before SMASH all 9 invoices happened in the evening. Now I do each one from the van before I pull out of the driveway. My clients get their invoice while I'm still at the house.", name: 'Greg', location: 'Pool Technician, Sydney' },
              { quote: "The chemical pricing was always a rough estimate. 2 litres of chlorine, 1kg pH up, some clarifier, what does that cost? Now I say the quantities and SMASH calculates it exactly. I'm charging accurately for the first time.", name: 'Lisa', location: 'Pool Service Owner, Brisbane' },
              { quote: "Equipment jobs on top of a service used to mean two invoices or a complicated combined one. Now I describe both in one voice message and SMASH separates them into the right line items. Easy for the client to understand.", name: 'Marcus', location: 'Pool Maintenance, Gold Coast' },
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

      {/* PRICING */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-black text-xs uppercase tracking-widest text-accent mb-4">Simple Pricing</p>
            <h2 className="font-display text-4xl lg:text-6xl uppercase tracking-tighter leading-[0.9] text-brand mb-4">
              Start Free. Scale When Ready.
            </h2>
            <p className="font-body text-lg text-brand/60 max-w-xl mx-auto">No subscriptions until you need more. Free forever for occasional use.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { plan: 'Free', price: '$0', period: 'forever', invoices: 'Up to 5 invoices per month', cta: 'Get Started', highlight: false },
              { plan: 'Starter', price: '$14.99', period: 'per month', invoices: 'Up to 30 invoices per month', cta: 'Start Free Trial', highlight: true },
              { plan: 'Pro', price: '$24.99', period: 'per month', invoices: 'Unlimited invoices', cta: 'Start Free Trial', highlight: false },
            ].map(({ plan, price, period, invoices, cta, highlight }) => (
              <div key={plan} className={`rounded-3xl p-8 border-2 flex flex-col justify-between ${highlight ? 'bg-brand border-brand text-white' : 'bg-white border-slate-200 text-brand'}`}>
                <div>
                  <p className={`font-black text-xs uppercase tracking-widest mb-4 ${highlight ? 'text-accent' : 'text-accent'}`}>{plan}</p>
                  <p className={`font-display text-5xl uppercase tracking-tighter leading-none mb-1 ${highlight ? 'text-white' : 'text-brand'}`}>{price}</p>
                  <p className={`font-body text-sm mb-6 ${highlight ? 'text-white/60' : 'text-slate-400'}`}>{period}</p>
                  <p className={`font-body text-base leading-relaxed ${highlight ? 'text-white/80' : 'text-slate-500'}`}>{invoices}</p>
                </div>
                <Link
                  to="/pricing"
                  className={`mt-8 block text-center px-6 py-3 rounded-[24px] font-black text-sm uppercase tracking-widest transition-all ${highlight ? 'bg-accent text-brand hover:brightness-95' : 'bg-slate-100 text-brand hover:bg-slate-200'}`}
                >
                  {cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center font-body text-sm text-slate-400 mt-8">
            <Link to="/pricing" className="underline hover:text-brand transition-colors">View full pricing details</Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl lg:text-6xl uppercase tracking-tighter leading-[0.88] text-white max-w-2xl mb-4">
              Invoice Every Pool. Between Pools.
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
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="font-black text-xs uppercase tracking-widest text-accent mb-6">FAQ</p>
          <h2 className="font-display text-4xl lg:text-5xl uppercase tracking-tighter leading-[0.9] text-brand mb-16">
            Common Questions
          </h2>
          <div className="space-y-10">
            {[
              {
                q: 'Is SMASH only for iPhone?',
                a: 'Yes. SMASH is built natively for iOS. Download it free from the App Store and start invoicing immediately.'
              },
              {
                q: 'Do my clients need the app to receive invoices?',
                a: 'No. Your clients receive a professional PDF invoice by email or SMS with a payment link. They pay by card directly from the link. No app required on their end.'
              },
              {
                q: 'Can I use SMASH if I am not registered for GST?',
                a: 'Yes. SMASH works for both GST-registered and non-registered businesses. Set your GST status once in settings and all invoices are formatted correctly from there.'
              },
              {
                q: 'What if I service 8 pools in one day with different chemicals at each?',
                a: 'Invoice each pool immediately after servicing it. Describe the chemicals used and quantities at each property and SMASH prices them from your catalog. Eight pools invoiced between visits. No catching up at the end of the day.'
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-slate-200 pb-10">
                <h3 className="font-black text-lg uppercase tracking-tight text-brand mb-3">{q}</h3>
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
