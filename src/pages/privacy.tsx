import { Link } from 'react-router-dom';
import { SEO } from '../components/seo';

const lastUpdated = 'March 26, 2026';

export function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | SMASH Invoices"
        description="Privacy Policy for SMASH Invoices. Learn how we collect, use, and protect your personal and business data."
        keywords="SMASH privacy policy, invoicing data privacy, tradie data protection"
        canonical="https://smashinvoices.com/privacy"
      />

      <div className="min-h-screen bg-[#0A0A0A]">
        <nav className="bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-8 lg:px-12 py-6 flex items-center justify-between">
            <Link to="/" className="text-2xl font-black tracking-tight text-white">
              SMASH<span className="text-accent text-4xl leading-none align-baseline">.</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link to="/how-it-works" className="hidden md:block px-4 py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
                How It Works
              </Link>
              <Link to="/blog" className="hidden md:block px-4 py-2.5 text-sm font-bold text-white/70 hover:text-white transition-colors uppercase tracking-wide">
                Blog
              </Link>
              <Link to="/#signup-form" className="px-6 py-2.5 rounded-full bg-accent text-accentText font-black text-sm uppercase tracking-wide hover:brightness-95 transition-all">
                Sign Up
              </Link>
            </div>
          </div>
        </nav>

        <section className="py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-8 lg:px-12">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight uppercase tracking-tighter">
              Privacy Policy
            </h1>
            <p className="text-white/50 text-sm font-semibold mb-16">
              Last updated: {lastUpdated}
            </p>

            <div className="space-y-12">
              <PolicySection title="1. Introduction">
                <p>
                  SMASH Invoices ("SMASH", "we", "us", or "our") is committed to protecting
                  the privacy and security of your personal information. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when
                  you use our voice-to-invoice platform, website, and related services
                  (collectively, the "Service").
                </p>
                <p>
                  By using the Service, you agree to the collection and use of information in
                  accordance with this policy. If you do not agree, please do not use the
                  Service.
                </p>
              </PolicySection>

              <PolicySection title="2. Information We Collect">
                <h4 className="text-lg font-bold text-white mt-4 mb-2">Account Information</h4>
                <p>
                  When you sign up for SMASH, we collect your name, email address, phone
                  number, business name, ABN (Australian Business Number), and trade or
                  industry type.
                </p>

                <h4 className="text-lg font-bold text-white mt-6 mb-2">Voice and Invoice Data</h4>
                <p>
                  When you use our voice-to-invoice feature, we process your voice recordings
                  to generate invoices. Voice recordings are temporarily processed to extract
                  invoice details (customer name, job description, amounts) and are not stored
                  permanently after processing is complete. Generated invoices, quotes, and
                  related business documents are stored securely on your behalf.
                </p>

                <h4 className="text-lg font-bold text-white mt-6 mb-2">Customer Data</h4>
                <p>
                  Through the invoices you create, we store information about your customers
                  including their names, email addresses, phone numbers, and business
                  addresses. This data is stored solely to enable invoicing and CRM
                  functionality within the Service.
                </p>

                <h4 className="text-lg font-bold text-white mt-6 mb-2">Usage Data</h4>
                <p>
                  We automatically collect information about how you interact with the
                  Service, including device type, browser type, IP address, pages visited, and
                  features used. This helps us improve the Service and troubleshoot issues.
                </p>

                <h4 className="text-lg font-bold text-white mt-6 mb-2">Payment Information</h4>
                <p>
                  Payment processing is handled by third-party providers. We do not store full
                  credit card numbers or bank account details on our servers. We may store
                  partial payment references (last 4 digits, transaction IDs) for record-keeping.
                </p>
              </PolicySection>

              <PolicySection title="3. How We Use Your Information">
                <p>We use the information we collect to:</p>
                <ul className="list-none space-y-3 mt-4">
                  <ListItem>Provide, operate, and maintain the Service</ListItem>
                  <ListItem>Process voice recordings into invoices and quotes</ListItem>
                  <ListItem>Send invoices and payment reminders to your customers on your behalf</ListItem>
                  <ListItem>Improve and personalise your experience, including AI accuracy over time</ListItem>
                  <ListItem>Communicate with you about your account, updates, and support requests</ListItem>
                  <ListItem>Process payments and manage billing</ListItem>
                  <ListItem>Detect, prevent, and address fraud or technical issues</ListItem>
                  <ListItem>Comply with legal obligations and enforce our terms</ListItem>
                </ul>
              </PolicySection>

              <PolicySection title="4. Data Sharing and Disclosure">
                <p>
                  We do not sell your personal information or business data to third parties.
                  We may share information in the following limited circumstances:
                </p>
                <ul className="list-none space-y-3 mt-4">
                  <ListItem>
                    <strong className="text-white">Service Providers:</strong> We use trusted
                    third-party services for hosting, payment processing, email delivery, and
                    analytics. These providers only access data necessary to perform their
                    functions and are bound by confidentiality obligations.
                  </ListItem>
                  <ListItem>
                    <strong className="text-white">Accounting Integrations:</strong> If you
                    connect SMASH to Xero, QuickBooks, or other accounting software, invoice
                    data is shared with those platforms as directed by you.
                  </ListItem>
                  <ListItem>
                    <strong className="text-white">Legal Requirements:</strong> We may
                    disclose information if required by law, legal process, or government
                    request, or to protect the rights, property, or safety of SMASH, our
                    users, or the public.
                  </ListItem>
                  <ListItem>
                    <strong className="text-white">Business Transfers:</strong> In the event
                    of a merger, acquisition, or sale of assets, your information may be
                    transferred as part of that transaction.
                  </ListItem>
                </ul>
              </PolicySection>

              <PolicySection title="5. Data Security">
                <p>
                  We implement industry-standard security measures to protect your data,
                  including:
                </p>
                <ul className="list-none space-y-3 mt-4">
                  <ListItem>Encryption of data in transit (TLS/SSL) and at rest (AES-256)</ListItem>
                  <ListItem>Secure cloud infrastructure with regular security audits</ListItem>
                  <ListItem>Access controls limiting data access to authorised personnel only</ListItem>
                  <ListItem>Regular backups and disaster recovery procedures</ListItem>
                </ul>
                <p className="mt-4">
                  While we take all reasonable steps to protect your information, no method of
                  electronic storage or transmission is 100% secure. We cannot guarantee
                  absolute security.
                </p>
              </PolicySection>

              <PolicySection title="6. Data Retention">
                <p>
                  We retain your account information and business data for as long as your
                  account is active or as needed to provide the Service. Invoice and financial
                  records are retained for a minimum of 7 years to comply with Australian tax
                  and record-keeping requirements.
                </p>
                <p>
                  Voice recordings used for invoice generation are processed in real-time and
                  are not retained after the invoice has been created, unless you explicitly
                  opt in to storing recordings for quality improvement purposes.
                </p>
                <p>
                  If you close your account, we will delete or anonymise your personal data
                  within 90 days, except where retention is required by law.
                </p>
              </PolicySection>

              <PolicySection title="7. Your Rights">
                <p>
                  Under Australian Privacy Principles (APPs) and applicable data protection
                  laws, you have the right to:
                </p>
                <ul className="list-none space-y-3 mt-4">
                  <ListItem>Access the personal information we hold about you</ListItem>
                  <ListItem>Request correction of inaccurate or incomplete information</ListItem>
                  <ListItem>Request deletion of your personal data (subject to legal retention requirements)</ListItem>
                  <ListItem>Withdraw consent for optional data processing (such as marketing communications)</ListItem>
                  <ListItem>Export your invoice and customer data in a standard format</ListItem>
                  <ListItem>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</ListItem>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, contact us at{' '}
                  <a href="mailto:privacy@smashinvoices.com" className="text-accent hover:text-accent/80 font-semibold transition-colors">
                    privacy@smashinvoices.com
                  </a>.
                </p>
              </PolicySection>

              <PolicySection title="8. Cookies and Tracking">
                <p>
                  We use essential cookies to maintain your session and preferences. We may
                  also use analytics cookies to understand how the Service is used and to
                  improve performance. You can control cookie preferences through your browser
                  settings.
                </p>
                <p>
                  We do not use third-party advertising trackers or sell data to ad networks.
                </p>
              </PolicySection>

              <PolicySection title="9. Third-Party Links">
                <p>
                  The Service may contain links to third-party websites or services not
                  operated by us. We are not responsible for the privacy practices of these
                  third parties. We encourage you to review their privacy policies.
                </p>
              </PolicySection>

              <PolicySection title="10. Children's Privacy">
                <p>
                  The Service is not intended for use by individuals under the age of 18. We
                  do not knowingly collect personal information from children. If we become
                  aware that we have collected data from a child, we will delete it promptly.
                </p>
              </PolicySection>

              <PolicySection title="11. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of
                  material changes by posting the updated policy on our website and updating
                  the "Last updated" date. Continued use of the Service after changes
                  constitutes acceptance of the revised policy.
                </p>
              </PolicySection>

              <PolicySection title="12. Contact Us">
                <p>
                  If you have questions or concerns about this Privacy Policy or our data
                  practices, contact us at:
                </p>
                <div className="mt-4 bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-white font-bold text-lg mb-1">SMASH Invoices</p>
                  <p>
                    Email:{' '}
                    <a href="mailto:privacy@smashinvoices.com" className="text-accent hover:text-accent/80 font-semibold transition-colors">
                      privacy@smashinvoices.com
                    </a>
                  </p>
                  <p>
                    Website:{' '}
                    <a href="https://smashinvoices.com" className="text-accent hover:text-accent/80 font-semibold transition-colors">
                      smashinvoices.com
                    </a>
                  </p>
                </div>
              </PolicySection>
            </div>
          </div>
        </section>

        <footer className="bg-[#0D0D0D] border-t border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <Link to="/" className="text-2xl font-black tracking-tight text-white">
                SMASH<span className="text-accent text-4xl leading-none align-baseline">.</span>
              </Link>
              <div className="flex gap-6">
                <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors font-semibold">Home</Link>
                <Link to="/how-it-works" className="text-sm text-white/60 hover:text-white transition-colors font-semibold">How It Works</Link>
                <Link to="/blog" className="text-sm text-white/60 hover:text-white transition-colors font-semibold">Blog</Link>
                <Link to="/founder" className="text-sm text-white/60 hover:text-white transition-colors font-semibold">Founder</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-black text-white mb-4 tracking-tight">{title}</h2>
      <div className="text-white/70 leading-relaxed space-y-4">{children}</div>
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-accent font-bold mt-0.5 shrink-0">--</span>
      <span>{children}</span>
    </li>
  );
}
