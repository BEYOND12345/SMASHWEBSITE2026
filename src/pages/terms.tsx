import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Footer } from '../components/footer';

export function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service | SMASH Invoices"
        description="Terms of Service for SMASH Invoices. Your rights and responsibilities when using the SMASH quoting and invoicing app. ABN 58 600 491 085."
        keywords="SMASH Invoices terms of service, invoice app terms, terms and conditions"
        ogTitle="Terms of Service — SMASH Invoices"
        ogDescription="Terms and conditions for using SMASH Invoices — the voice quoting and invoicing app for service businesses."
        ogImage="https://smashinvoices.com/og-image.png"
        ogUrl="https://smashinvoices.com/terms"
        twitterTitle="Terms of Service — SMASH Invoices"
        twitterDescription="Terms and conditions for using SMASH Invoices."
        canonical="https://smashinvoices.com/terms"
      />

      {/* NAV */}
      <nav className="bg-brand/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 md:py-6 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black tracking-tight text-white">
            SMASH<span className="text-accent text-4xl leading-none align-baseline">.</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link to="/pricing" className="hidden md:block px-3 md:px-4 py-2 md:py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
              Pricing
            </Link>
            <Link to="/#signup-form" className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-[32px] bg-accent text-brand font-black text-xs sm:text-sm uppercase tracking-wide hover:brightness-95 transition-all">
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-4">
            Terms of Service
          </h1>
          <p className="text-white/60 font-medium">
            Last updated: 30 March 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="prose prose-lg max-w-none text-brand/80 leading-relaxed space-y-10">

            <div>
              <p className="text-brand font-medium">
                These Terms of Service ("Terms") govern your use of SMASH Invoices ("SMASH", "the Service"), operated by Daniel Neale (ABN 58 600 491 085). By creating an account or using SMASH, you agree to these Terms.
              </p>
              <p className="mt-4">
                If you do not agree to these Terms, do not use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">1. The Service</h2>
              <p>SMASH Invoices is a voice-powered quoting and invoicing application for self-employed service workers. The Service allows users to generate quotes and invoices from voice input, send them to customers, and collect payments.</p>
              <p className="mt-4">We reserve the right to modify, suspend, or discontinue any part of the Service at any time. We will provide reasonable notice of significant changes where possible.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">2. Accounts</h2>
              <p>To use SMASH, you must create an account. You are responsible for:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 mt-4">
                <li>Providing accurate account information</li>
                <li>Keeping your password secure</li>
                <li>All activity that occurs under your account</li>
                <li>Notifying us immediately of any unauthorised access</li>
              </ul>
              <p className="mt-4">You must be at least 18 years of age to use SMASH. By using the Service, you confirm you meet this requirement.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">3. Subscriptions and Billing</h2>
              <h3 className="text-lg font-bold text-brand mb-2">Free plan</h3>
              <p>The free plan is available at no cost with limited quote volumes. No credit card is required.</p>

              <h3 className="text-lg font-bold text-brand mt-6 mb-2">Paid plans</h3>
              <p>Paid plans are billed monthly or annually in advance. All prices are in Australian dollars (AUD) and include GST where applicable. Subscription fees are charged to your payment method automatically at the start of each billing period.</p>

              <h3 className="text-lg font-bold text-brand mt-6 mb-2">Free trials</h3>
              <p>Where a free trial is offered, it begins on the date you subscribe. At the end of the trial period, your subscription will automatically convert to the paid plan unless cancelled beforehand.</p>

              <h3 className="text-lg font-bold text-brand mt-6 mb-2">Cancellation</h3>
              <p>You may cancel your subscription at any time from your account settings. Cancellation takes effect at the end of your current billing period. We do not offer refunds for partial billing periods except where required by Australian Consumer Law.</p>

              <h3 className="text-lg font-bold text-brand mt-6 mb-2">Price changes</h3>
              <p>We may change subscription prices. We will give you at least 30 days' notice before a price change takes effect. Your continued use after the effective date constitutes acceptance of the new price.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">4. Acceptable Use</h2>
              <p className="mb-4">You agree not to use SMASH to:</p>
              <ul className="list-disc list-outside ml-6 space-y-2">
                <li>Send fraudulent, misleading, or deceptive quotes or invoices</li>
                <li>Violate any applicable law or regulation</li>
                <li>Infringe the intellectual property rights of others</li>
                <li>Harass, threaten, or abuse any person</li>
                <li>Attempt to gain unauthorised access to any part of the Service</li>
                <li>Reverse engineer, decompile, or extract source code from the app</li>
                <li>Use the Service to facilitate money laundering or financial crime</li>
                <li>Resell or sublicense access to the Service</li>
              </ul>
              <p className="mt-4">We reserve the right to suspend or terminate accounts that violate these terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">5. Your Data</h2>
              <p>You own the data you create in SMASH — your quotes, invoices, customer records, and pricing catalog. By using the Service, you grant us a limited licence to store and process this data to provide the Service to you.</p>
              <p className="mt-4">We will not sell your business data or use it to train AI models. See our <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link> for full details on how we handle your data.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">6. Payments via SMASH</h2>
              <p>SMASH enables you to collect payments from your customers through Stripe Connect. By enabling payment collection, you agree to <a href="https://stripe.com/legal" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Stripe's Terms of Service</a>.</p>
              <p className="mt-4">You are responsible for the accuracy of your quotes and invoices. SMASH is a tool to help you invoice — we are not responsible for disputes between you and your customers.</p>
              <p className="mt-4">Stripe's fees apply to payment processing. We have no control over Stripe's fee structure.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">7. Intellectual Property</h2>
              <p>The SMASH Invoices brand, app, and website are owned by Daniel Neale. All rights reserved. You may not reproduce, distribute, or create derivative works without our written permission.</p>
              <p className="mt-4">The content you create using SMASH (quotes, invoices, customer records) remains yours.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">8. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, SMASH Invoices and Daniel Neale are not liable for:</p>
              <ul className="list-disc list-outside ml-6 space-y-2 mt-4">
                <li>Loss of business, revenue, or profits</li>
                <li>Data loss or corruption</li>
                <li>Errors in voice transcription or quote generation</li>
                <li>Payment failures or disputes</li>
                <li>Service interruptions or downtime</li>
                <li>Any indirect, incidental, or consequential damages</li>
              </ul>
              <p className="mt-4">Our total liability to you for any claim arising from your use of SMASH is limited to the amount you paid us in the 3 months prior to the claim.</p>
              <p className="mt-4">Nothing in these Terms excludes rights you may have under the Australian Consumer Law that cannot be lawfully excluded.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">9. Disclaimer</h2>
              <p>SMASH is provided "as is" without warranty of any kind. We do not warrant that the Service will be uninterrupted, error-free, or free from viruses. You use the Service at your own risk.</p>
              <p className="mt-4">Quotes and invoices generated by SMASH are tools to assist you. You are responsible for reviewing them for accuracy before sending to customers. We make no guarantee that voice-generated content will be error-free.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">10. Termination</h2>
              <p>You may terminate your account at any time by deleting it from the app or contacting us. We may suspend or terminate your account immediately if you breach these Terms or if we are required to do so by law.</p>
              <p className="mt-4">Upon termination, your access to the Service will cease. We will retain your data for up to 30 days, after which it will be deleted, except where retention is required by law.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">11. Governing Law</h2>
              <p>These Terms are governed by the laws of New South Wales, Australia. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts of New South Wales.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">12. Changes to These Terms</h2>
              <p>We may update these Terms from time to time. We will notify you of material changes via email or in-app notification at least 14 days before they take effect. Your continued use of SMASH after the effective date constitutes acceptance of the updated Terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">13. Contact</h2>
              <p>Questions about these Terms?</p>
              <div className="mt-4 bg-surface rounded-[24px] p-6 border-2 border-border">
                <p className="font-bold text-brand">SMASH Invoices</p>
                <p>Daniel Neale</p>
                <p>ABN: 58 600 491 085</p>
                <p>Byron Bay, NSW, Australia</p>
                <p>Email: <a href="mailto:dan@smashinvoices.com" className="text-accent hover:underline">dan@smashinvoices.com</a></p>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <p className="text-sm text-brand/50">
                See also: <Link to="/privacy" className="underline hover:text-brand transition-colors">Privacy Policy</Link> · <Link to="/pricing" className="underline hover:text-brand transition-colors">Pricing</Link>
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
