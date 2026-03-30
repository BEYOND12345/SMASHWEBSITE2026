import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Footer } from '../components/footer';

export function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | SMASH Invoices"
        description="Privacy Policy for SMASH Invoices. How we collect, use, and protect your data. ABN 58 600 491 085."
        keywords="SMASH Invoices privacy policy, invoice app privacy"
        ogTitle="Privacy Policy — SMASH Invoices"
        ogDescription="How SMASH Invoices collects, uses, and protects your personal information."
        ogImage="https://smashinvoices.com/og-image.png"
        ogUrl="https://smashinvoices.com/privacy"
        twitterTitle="Privacy Policy — SMASH Invoices"
        twitterDescription="How SMASH Invoices collects, uses, and protects your personal information."
        canonical="https://smashinvoices.com/privacy"
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
            Privacy Policy
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
                SMASH Invoices ("SMASH", "we", "us", "our") is operated by Daniel Neale (ABN 58 600 491 085), based in Australia. This Privacy Policy explains how we collect, use, and protect your personal information when you use the SMASH Invoices app and website (smashinvoices.com).
              </p>
              <p className="mt-4">
                By using SMASH, you agree to the collection and use of information in accordance with this policy. We comply with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">1. Information We Collect</h2>
              <h3 className="text-lg font-bold text-brand mb-2">Account information</h3>
              <p>When you create an account, we collect your name, email address, and business details (business name, ABN if provided).</p>

              <h3 className="text-lg font-bold text-brand mt-6 mb-2">Voice recordings</h3>
              <p>When you use the voice-to-quote feature, your voice is temporarily processed to generate a quote. Voice audio is transmitted to our speech processing provider for transcription and is not stored permanently after processing is complete.</p>

              <h3 className="text-lg font-bold text-brand mt-6 mb-2">Business data</h3>
              <p>We store the quotes, invoices, and customer records you create in the app. This includes customer names, contact details, job descriptions, pricing, and payment status.</p>

              <h3 className="text-lg font-bold text-brand mt-6 mb-2">Payment information</h3>
              <p>Subscription payments are processed by Stripe. We do not store your credit card details. Stripe's privacy policy governs how payment information is handled. Customer payments you collect via SMASH are processed through Stripe Connect.</p>

              <h3 className="text-lg font-bold text-brand mt-6 mb-2">Usage data</h3>
              <p>We collect information about how you use the app — features used, quotes sent, session data — to improve the service. This data is aggregated and not used to identify you individually.</p>

              <h3 className="text-lg font-bold text-brand mt-6 mb-2">Device information</h3>
              <p>We collect device type, operating system version, and app version for support and debugging purposes.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc list-outside ml-6 space-y-2">
                <li>To provide and operate the SMASH Invoices service</li>
                <li>To process your voice input and generate quotes and invoices</li>
                <li>To send quotes and invoices to your customers on your behalf</li>
                <li>To process subscription payments and manage your account</li>
                <li>To send transactional emails (quote confirmations, invoice receipts, payment notifications)</li>
                <li>To respond to support requests</li>
                <li>To improve the product through aggregated usage analysis</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p className="mt-4">We do not sell your personal information to third parties. We do not use your business data to train AI models.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">3. Third-Party Services</h2>
              <p className="mb-4">SMASH uses the following third-party services to deliver the product. Each has its own privacy policy:</p>
              <ul className="list-disc list-outside ml-6 space-y-2">
                <li><strong>Supabase</strong> — database and authentication (supabase.com/privacy)</li>
                <li><strong>Stripe</strong> — subscription billing and customer payment collection (stripe.com/privacy)</li>
                <li><strong>Deepgram</strong> — voice transcription (deepgram.com/privacy)</li>
                <li><strong>OpenAI</strong> — quote generation from transcribed speech (openai.com/privacy)</li>
                <li><strong>RevenueCat</strong> — subscription management for iOS (revenuecat.com/privacy)</li>
                <li><strong>Apple</strong> — App Store distribution (apple.com/privacy)</li>
                <li><strong>Vercel</strong> — website hosting (vercel.com/legal/privacy-policy)</li>
              </ul>
              <p className="mt-4">We only share data with these providers to the extent necessary to deliver the service.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">4. Data Storage and Security</h2>
              <p>Your data is stored on servers in Australia and/or the United States via Supabase. We use encryption in transit (TLS) and at rest. Access to your data is restricted to authenticated users and authorised personnel only.</p>
              <p className="mt-4">We take reasonable steps to protect your information from misuse, loss, and unauthorised access. However, no method of electronic transmission or storage is 100% secure.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">5. Data Retention</h2>
              <p>We retain your account data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal or tax purposes.</p>
              <p className="mt-4">Voice recordings are not retained after transcription is complete.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">6. Your Rights</h2>
              <p className="mb-4">Under the Australian Privacy Principles, you have the right to:</p>
              <ul className="list-disc list-outside ml-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your account and associated data</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with the Office of the Australian Information Commissioner (oaic.gov.au)</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, email us at <a href="mailto:dan@smashinvoices.com" className="text-accent hover:underline">dan@smashinvoices.com</a>.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">7. Cookies and Analytics</h2>
              <p>Our website (smashinvoices.com) uses cookies for basic functionality and may use analytics tools to understand how visitors use the site. You can disable cookies in your browser settings, though some site features may not work correctly.</p>
              <p className="mt-4">The SMASH app does not use advertising cookies or tracking pixels.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">8. Children</h2>
              <p>SMASH Invoices is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us and we will delete it.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via email or in-app notification. Your continued use of SMASH after changes are posted constitutes acceptance of the updated policy.</p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or how we handle your data, contact us:</p>
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
                See also: <Link to="/terms" className="underline hover:text-brand transition-colors">Terms of Service</Link> · <Link to="/pricing" className="underline hover:text-brand transition-colors">Pricing</Link>
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
