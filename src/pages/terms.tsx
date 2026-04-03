import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';
import { Footer } from '../components/footer';
import { AnimateIn } from '../components/animate-in';
import { Nav } from '../components/nav';
import { StructuredData, createBreadcrumbSchema } from '../components/structured-data';

export function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service | SMASH Invoices"
        description="Terms of Service for SMASH Invoices. ABN 58 600 491 085. Understand your rights and obligations when using SMASH for invoicing and quoting."
        keywords="SMASH Invoices terms of service, invoice app terms, tradie app terms and conditions"
        ogTitle="Terms of Service — SMASH Invoices"
        ogDescription="Terms of Service for SMASH Invoices — the voice-to-invoice app for Australian tradies."
        ogUrl="https://smashinvoices.com/terms"
        canonical="https://smashinvoices.com/terms"
      />

      <StructuredData data={createBreadcrumbSchema([
        { name: 'Home', url: 'https://smashinvoices.com/' },
        { name: 'Terms of Service', url: 'https://smashinvoices.com/terms' },
      ])} />

      <Nav />

      {/* HEADER */}
      <section className="bg-brand py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <AnimateIn direction="up">
            <h1 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] mb-4">
              Terms of Service
            </h1>
            <p className="font-body text-white/60 font-medium">
              Last updated: 4 April 2026
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="prose prose-lg max-w-none text-brand/80 leading-relaxed space-y-10">

            <div>
              <p className="font-body text-brand font-medium leading-[1.6]">
                These Terms of Service ("Terms") govern your use of SMASH Invoices ("SMASH", "we", "us", "our"), operated by Daniel Neale (ABN 58 600 491 085), based in Australia. By downloading, accessing, or using the SMASH Invoices app or website (smashinvoices.com), you agree to be bound by these Terms.
              </p>
              <p className="font-body mt-4 leading-[1.6]">
                If you do not agree to these Terms, do not use the service. These Terms apply to all users, including free and paid subscribers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">1. Not Accounting Software</h2>
              <div className="bg-slate-50 border-l-4 border-accent rounded-r-2xl px-6 py-5 mb-4">
                <p className="font-body text-brand font-medium leading-[1.6]">
                  <strong>SMASH is not accounting software.</strong> SMASH Invoices is a productivity tool designed to help tradies create and send invoices and quotes quickly. It does not provide accounting, financial, tax, or legal advice.
                </p>
              </div>
              <p className="font-body leading-[1.6]">
                You are solely responsible for ensuring your invoices comply with Australian Taxation Office (ATO) requirements, including correct GST treatment, accurate ABN display, and record-keeping obligations. We recommend consulting a registered accountant or BAS agent for tax and accounting matters.
              </p>
              <p className="font-body mt-4 leading-[1.6]">
                SMASH assists with the formatting and delivery of invoices — it does not verify, audit, or guarantee the accuracy of figures you enter, nor does it constitute a bookkeeping or accounting system.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">2. Use of Service</h2>
              <p className="font-body leading-[1.6]">By using SMASH, you agree to:</p>
              <ul className="list-disc list-outside ml-6 mt-3 space-y-2 font-body leading-[1.6]">
                <li>Use the service only for lawful purposes and in accordance with these Terms</li>
                <li>Provide accurate information when creating your account and invoices</li>
                <li>Not use SMASH to send fraudulent, misleading, or deceptive invoices</li>
                <li>Not attempt to reverse-engineer, copy, or reproduce the service</li>
                <li>Not use automated tools to access or scrape the service</li>
                <li>Keep your account credentials secure and not share access with unauthorised parties</li>
                <li>Comply with all applicable Australian laws, including consumer protection and fair trading laws</li>
              </ul>
              <p className="font-body mt-4 leading-[1.6]">
                You must be at least 18 years old and legally able to enter into contracts under Australian law to use SMASH.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">3. Subscription and Billing</h2>
              <p className="font-body leading-[1.6]">
                SMASH offers a free plan and paid subscription plans. Paid plans are billed monthly through the Apple App Store via RevenueCat. All prices are in Australian dollars (AUD) and inclusive of GST where applicable.
              </p>
              <h3 className="text-lg font-black text-brand mt-6 mb-2">App Store billing</h3>
              <p className="font-body leading-[1.6]">
                Subscriptions are managed through your Apple ID and the App Store. Billing, refunds, and subscription management are handled by Apple in accordance with their terms. To cancel or manage your subscription, go to Settings → Apple ID → Subscriptions on your iPhone.
              </p>
              <h3 className="text-lg font-black text-brand mt-6 mb-2">Free plan</h3>
              <p className="font-body leading-[1.6]">
                The free plan includes 2 quotes per month at no charge, with no credit card required. We reserve the right to adjust free plan limits with reasonable notice.
              </p>
              <h3 className="text-lg font-black text-brand mt-6 mb-2">Upgrades and downgrades</h3>
              <p className="font-body leading-[1.6]">
                You may upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing period. We do not offer pro-rata refunds for unused time on a paid plan unless required by Australian Consumer Law.
              </p>
              <h3 className="text-lg font-black text-brand mt-6 mb-2">Price changes</h3>
              <p className="font-body leading-[1.6]">
                We may update our pricing with at least 30 days' notice via email or in-app notification. Continued use after a price change constitutes acceptance of the new pricing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">4. Data Handling</h2>
              <p className="font-body leading-[1.6]">
                Your use of SMASH is also governed by our <Link to="/privacy" className="text-brand underline hover:text-accent transition-colors">Privacy Policy</Link>, which is incorporated into these Terms by reference.
              </p>
              <p className="font-body mt-4 leading-[1.6]">
                You retain ownership of all invoice data, customer records, and business information you create in SMASH. By using the service, you grant us a limited licence to store and process that data solely to provide the service to you.
              </p>
              <p className="font-body mt-4 leading-[1.6]">
                We do not sell your data. We do not use your business data to train AI models. Voice recordings used for invoice generation are processed in real-time and not stored after the invoice is created.
              </p>
              <p className="font-body mt-4 leading-[1.6]">
                If you delete your account, we will delete your personal data within 30 days, except where retention is required by Australian law (e.g. tax records).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">5. Intellectual Property</h2>
              <p className="font-body leading-[1.6]">
                SMASH Invoices, including its name, logo, design, software, and content, is owned by Daniel Neale and protected by Australian and international intellectual property laws. You may not reproduce, distribute, or create derivative works from any part of the service without prior written consent.
              </p>
              <p className="font-body mt-4 leading-[1.6]">
                Invoice templates and generated documents belong to you. We claim no intellectual property rights over the invoices or quotes you create using SMASH.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">6. Disclaimers and Limitation of Liability</h2>
              <p className="font-body leading-[1.6]">
                SMASH is provided "as is" without warranties of any kind, express or implied. We do not warrant that the service will be uninterrupted, error-free, or meet your specific requirements.
              </p>
              <p className="font-body mt-4 leading-[1.6]">
                To the maximum extent permitted by law, SMASH and Daniel Neale are not liable for any indirect, incidental, special, or consequential damages arising from your use of the service, including but not limited to: lost revenue, incorrect invoices sent to customers, data loss, or disputes with customers.
              </p>
              <p className="font-body mt-4 leading-[1.6]">
                Nothing in these Terms excludes rights you may have under the Australian Consumer Law that cannot be excluded by contract, including consumer guarantees.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">7. Termination</h2>
              <p className="font-body leading-[1.6]">
                You may stop using SMASH and cancel your subscription at any time through the App Store.
              </p>
              <p className="font-body mt-4 leading-[1.6]">
                We may suspend or terminate your access to SMASH immediately and without notice if you:
              </p>
              <ul className="list-disc list-outside ml-6 mt-3 space-y-2 font-body leading-[1.6]">
                <li>Breach these Terms</li>
                <li>Use the service for fraudulent or illegal purposes</li>
                <li>Take actions that harm other users or the integrity of the service</li>
              </ul>
              <p className="font-body mt-4 leading-[1.6]">
                On termination, your right to access the service ceases immediately. We will retain your data for 30 days after termination, after which it will be deleted in accordance with our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">8. Changes to These Terms</h2>
              <p className="font-body leading-[1.6]">
                We may update these Terms from time to time. We will notify you of material changes via email or in-app notification at least 14 days before they take effect. Your continued use of SMASH after the effective date constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">9. Governing Law</h2>
              <p className="font-body leading-[1.6]">
                These Terms are governed by the laws of New South Wales, Australia. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts of New South Wales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand uppercase tracking-tighter leading-[0.88] mb-4">10. Contact</h2>
              <p className="font-body leading-[1.6]">If you have questions about these Terms, contact us:</p>
              <div className="mt-4 bg-surface rounded-[24px] p-6 border-2 border-border">
                <p className="font-black text-brand">SMASH Invoices</p>
                <p className="font-body">Daniel Neale</p>
                <p className="font-body">ABN: 58 600 491 085</p>
                <p className="font-body">Byron Bay, NSW, Australia</p>
                <p className="font-body">Email: <a href="mailto:dan@smashinvoices.com" className="text-accent hover:underline">dan@smashinvoices.com</a></p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8">
              <p className="text-sm text-brand/50 font-body">
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
