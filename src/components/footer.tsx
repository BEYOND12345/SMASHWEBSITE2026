import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  showCTA?: boolean;
}

export function Footer({ showCTA = false }: FooterProps) {
  return (
    <footer className="bg-brand text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16 lg:py-20">
        {showCTA && (
          <div className="text-center mb-10 md:mb-14 pb-10 md:pb-14 border-b border-white/10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 md:mb-6 leading-[0.88] uppercase tracking-tighter">
              From Finished Job to Paid. In Under a Minute.
            </h3>
            <p className="text-base sm:text-lg text-white/80 font-medium mb-2 max-w-2xl mx-auto leading-[1.15]">
              Describe the job out loud. SMASH does the rest.
            </p>
            <p className="text-sm text-white/50 font-medium mb-6 md:mb-8">
              No credit card required.
            </p>
            <Link
              to="/#signup-form"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] bg-accent text-brand font-black text-sm sm:text-base uppercase tracking-wider sm:tracking-widest hover:brightness-95 transition-all shadow-glow"
            >
              Start Free
            </Link>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-14 mb-10 md:mb-14">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block text-3xl font-black tracking-tight mb-5">
              SMASH<span className="text-accent text-5xl leading-none align-baseline">.</span>
            </Link>
            <p className="text-base text-white/60 font-medium leading-[1.15] mb-6">
              Describe the job. Get paid. That's it.
            </p>
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider mb-4 text-white/50">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/smashquotes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-accent transition-all flex items-center justify-center group"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={20} strokeWidth={2.5} className="text-white/70 group-hover:text-brand transition-colors" />
                </a>
                <a
                  href="https://instagram.com/smashquotes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-accent transition-all flex items-center justify-center group"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} strokeWidth={2.5} className="text-white/70 group-hover:text-brand transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-wider mb-5 text-white/50">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Features</Link></li>
              <li><Link to="/pricing" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Pricing</Link></li>
              <li><Link to="/how-it-works" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">How It Works</Link></li>
              <li><Link to="/voice-invoicing" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Voice Invoicing</Link></li>
              <li><Link to="/gst-compliant-invoicing" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">GST Invoicing</Link></li>
              <li><Link to="/quote-generator" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Quote Generator</Link></li>
              <li><Link to="/invoice-generator" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Invoice Generator</Link></li>
            </ul>
            <h3 className="text-sm font-black uppercase tracking-wider mb-4 mt-8 text-white/50">Compare</h3>
            <ul className="space-y-3">
              <li><Link to="/smash-vs-xero" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">SMASH vs Xero</Link></li>
              <li><Link to="/smash-vs-myob" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">SMASH vs MYOB</Link></li>
              <li><Link to="/smash-vs-servicem8" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">SMASH vs ServiceM8</Link></li>
              <li><Link to="/smash-vs-quickbooks" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">SMASH vs QuickBooks</Link></li>
              <li><Link to="/smash-vs-fergus" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">SMASH vs Fergus</Link></li>
              <li><Link to="/smash-vs-tradify" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">SMASH vs Tradify</Link></li>
              <li><Link to="/smash-vs-invoice2go" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">SMASH vs Invoice2go</Link></li>
              <li><Link to="/smash-vs-joist" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">SMASH vs Joist</Link></li>
              <li><Link to="/smash-vs-rounded" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">SMASH vs Rounded</Link></li>
            </ul>
            <h3 className="text-sm font-black uppercase tracking-wider mb-4 mt-8 text-white/50">Free Tools</h3>
            <ul className="space-y-3">
              <li><Link to="/tools" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">All free tools</Link></li>
              <li><Link to="/invoice-template" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Invoice template</Link></li>
              <li><Link to="/gst-calculator" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">GST calculator</Link></li>
              <li><Link to="/hourly-rate-calculator" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Hourly rate calculator</Link></li>
              <li><Link to="/late-payment-calculator" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Late payment calculator</Link></li>
              <li><Link to="/profit-calculator" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Profit calculator</Link></li>
            </ul>
            <h3 className="text-sm font-black uppercase tracking-wider mb-4 mt-8 text-white/50">Integrations</h3>
            <ul className="space-y-3">
              <li><Link to="/integrations" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">All integrations</Link></li>
              <li><Link to="/integrations/xero" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">SMASH × Xero</Link></li>
              <li><Link to="/integrations/quickbooks" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">SMASH × QuickBooks</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-wider mb-5 text-white/50">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/founder" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Meet the Founder</Link></li>
              <li><Link to="/blog" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Blog</Link></li>
              <li><Link to="/faq" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">FAQ</Link></li>
              <li><Link to="/roadmap" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Roadmap</Link></li>
              <li><Link to="/changelog" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Changelog</Link></li>
              <li><Link to="/contact" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Contact</Link></li>
              <li><Link to="/sitemap" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Sitemap</Link></li>
            </ul>
            <h3 className="text-sm font-black uppercase tracking-wider mb-4 mt-8 text-white/50">Countries</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Australia <span className="text-white/30 font-medium">· Live</span></Link></li>
              <li><Link to="/nz" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">New Zealand <span className="text-white/30 font-medium">· Waitlist</span></Link></li>
              <li><Link to="/uk" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">United Kingdom <span className="text-white/30 font-medium">· Waitlist</span></Link></li>
              <li><Link to="/us" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">United States <span className="text-white/30 font-medium">· Waitlist</span></Link></li>
              <li><Link to="/ca" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Canada <span className="text-white/30 font-medium">· Waitlist</span></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-wider mb-5 text-white/50">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Terms of Service</Link></li>
            </ul>
            <h3 className="text-sm font-black uppercase tracking-wider mb-4 mt-8 text-white/50">Industries</h3>
            <ul className="space-y-3">
              <li><Link to="/for-cleaners" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Cleaners</Link></li>
              <li><Link to="/for-plumbers" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Plumbers</Link></li>
              <li><Link to="/for-electricians" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Electricians</Link></li>
              <li><Link to="/for-handymen" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Handymen</Link></li>
              <li><Link to="/for-painters" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Painters</Link></li>
              <li><Link to="/for-mobile-mechanics" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Mobile Mechanics</Link></li>
              <li><Link to="/for-gardeners" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Gardeners</Link></li>
              <li><Link to="/for-hvac" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">HVAC & Air Con</Link></li>
              <li><Link to="/for-concreters" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Concreters</Link></li>
              <li><Link to="/for-pest-control" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Pest Control</Link></li>
              <li><Link to="/for-tilers" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Tilers</Link></li>
              <li><Link to="/for-arborists" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Arborists</Link></li>
              <li><Link to="/for-locksmiths" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Locksmiths</Link></li>
              <li><Link to="/for-car-detailers" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Car Detailers</Link></li>
              <li><Link to="/for-dog-groomers" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Dog Groomers</Link></li>
              <li><Link to="/for-pool-maintenance" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Pool Maintenance</Link></li>
              <li><Link to="/for-solar-installers" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Solar Installers</Link></li>
              <li><Link to="/for-rubbish-removal" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Rubbish Removal</Link></li>
              <li><Link to="/for-it-repair" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">IT Repair</Link></li>
              <li><Link to="/for-appliance-repair" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Appliance Repair</Link></li>
              <li><Link to="/for-security-installers" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Security Installers</Link></li>
              <li><Link to="/for-fencers" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">Fencers</Link></li>
            </ul>
            <h3 className="text-sm font-black uppercase tracking-wider mb-4 mt-8 text-white/50">Contact</h3>
            <ul className="space-y-3">
              <li><a href="mailto:dan@smashinvoices.com" className="text-base text-white/70 hover:text-accent transition-colors font-semibold">dan@smashinvoices.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-3">
            <div>
              <p className="text-sm text-white/40 font-medium">
                © 2026 SMASH. All rights reserved.
              </p>
              <p className="text-sm text-white/30 font-medium mt-1">
                ABN: 58 600 491 085
              </p>
            </div>
            <p className="text-sm text-white/40 font-medium">
              Built in Byron Bay, Australia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
