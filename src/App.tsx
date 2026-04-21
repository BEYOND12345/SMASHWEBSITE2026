import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/landing-page';
import { Founder } from './pages/founder';
import { HowItWorks } from './pages/how-it-works';
import { FAQPage } from './pages/faq-page';
import { Pricing } from './pages/pricing';
import { Privacy } from './pages/privacy';
import { Terms } from './pages/terms';
import { Contact } from './pages/contact';
import { Features } from './pages/features';
import { VoiceInvoicing } from './pages/voice-invoicing';
import { AiInvoicing } from './pages/ai-invoicing';
import { GstCompliantInvoicing } from './pages/gst-compliant-invoicing';
import { InvoiceOnMobile } from './pages/invoice-on-mobile';
import { Roadmap } from './pages/roadmap';
import { Changelog } from './pages/changelog';

// Tool pages
import { QuoteGenerator } from './pages/quote-generator';
import { InvoiceGenerator } from './pages/invoice-generator';
import { GstCalculator } from './pages/gst-calculator';
import { InvoiceTemplate } from './pages/invoice-template';
import { HourlyRateCalculator } from './pages/hourly-rate-calculator';
import { LatePaymentCalculator } from './pages/late-payment-calculator';
import { ProfitCalculator } from './pages/profit-calculator';
import { Tools } from './pages/tools';

// Comparison pages
import { SmashVsXero } from './pages/smash-vs-xero';
import { SmashVsMyob } from './pages/smash-vs-myob';
import { SmashVsServiceM8 } from './pages/smash-vs-servicem8';
import { SmashVsQuickBooks } from './pages/smash-vs-quickbooks';
import { SmashVsFergus } from './pages/smash-vs-fergus';
import { BlogList } from './pages/blog-list';
import { BlogPost } from './pages/blog-post';
import { BlogAdmin } from './pages/admin/blog-admin';
import { BlogEditor } from './pages/admin/blog-editor';

// Segment pages
import { ForCleaners } from './pages/for-cleaners';
import { ForPlumbers } from './pages/for-plumbers';
import { ForElectricians } from './pages/for-electricians';
import { ForHandymen } from './pages/for-handymen';
import { ForPainters } from './pages/for-painters';
import { ForGardeners } from './pages/for-gardeners';
import { ForMobileMechanics } from './pages/for-mobile-mechanics';
import { ForHvac } from './pages/for-hvac';
import { ForPestControl } from './pages/for-pest-control';
import { ForConcreters } from './pages/for-concreters';
import { ForTilers } from './pages/for-tilers';
import { ForLocksmiths } from './pages/for-locksmiths';
import { ForCarDetailers } from './pages/for-car-detailers';
import { ForDogGroomers } from './pages/for-dog-groomers';
import { ForArborists } from './pages/for-arborists';
import { ForPoolMaintenance } from './pages/for-pool-maintenance';
import { ForSolarInstallers } from './pages/for-solar-installers';
import { ForRubbishRemoval } from './pages/for-rubbish-removal';

// International coming-soon / country landing pages
import { CountryNZ } from './pages/country-nz';
import { CountryUK } from './pages/country-uk';
import { CountryUS } from './pages/country-us';
import { CountryCA } from './pages/country-ca';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Core pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />

        {/* Product / feature pages */}
        <Route path="/features" element={<Features />} />
        <Route path="/voice-invoicing" element={<VoiceInvoicing />} />
        <Route path="/ai-invoicing" element={<AiInvoicing />} />
        <Route path="/gst-compliant-invoicing" element={<GstCompliantInvoicing />} />
        <Route path="/invoice-on-mobile" element={<InvoiceOnMobile />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/changelog" element={<Changelog />} />

        {/* Tool pages */}
        <Route path="/tools" element={<Tools />} />
        <Route path="/quote-generator" element={<QuoteGenerator />} />
        <Route path="/invoice-generator" element={<InvoiceGenerator />} />
        <Route path="/gst-calculator" element={<GstCalculator />} />
        <Route path="/invoice-template" element={<InvoiceTemplate />} />
        <Route path="/hourly-rate-calculator" element={<HourlyRateCalculator />} />
        <Route path="/late-payment-calculator" element={<LatePaymentCalculator />} />
        <Route path="/profit-calculator" element={<ProfitCalculator />} />

        {/* Comparison pages */}
        <Route path="/smash-vs-xero" element={<SmashVsXero />} />
        <Route path="/smash-vs-myob" element={<SmashVsMyob />} />
        <Route path="/smash-vs-servicem8" element={<SmashVsServiceM8 />} />
        <Route path="/smash-vs-quickbooks" element={<SmashVsQuickBooks />} />
        <Route path="/smash-vs-fergus" element={<SmashVsFergus />} />

        {/* Segment pages */}
        <Route path="/for-cleaners" element={<ForCleaners />} />
        <Route path="/for-plumbers" element={<ForPlumbers />} />
        <Route path="/for-electricians" element={<ForElectricians />} />
        <Route path="/for-handymen" element={<ForHandymen />} />
        <Route path="/for-painters" element={<ForPainters />} />
        <Route path="/for-gardeners" element={<ForGardeners />} />
        <Route path="/for-mobile-mechanics" element={<ForMobileMechanics />} />
        <Route path="/for-hvac" element={<ForHvac />} />
        <Route path="/for-pest-control" element={<ForPestControl />} />
        <Route path="/for-concreters" element={<ForConcreters />} />
        <Route path="/for-tilers" element={<ForTilers />} />
        <Route path="/for-locksmiths" element={<ForLocksmiths />} />
        <Route path="/for-car-detailers" element={<ForCarDetailers />} />
        <Route path="/for-dog-groomers" element={<ForDogGroomers />} />
        <Route path="/for-arborists" element={<ForArborists />} />
        <Route path="/for-pool-maintenance" element={<ForPoolMaintenance />} />
        <Route path="/for-solar-installers" element={<ForSolarInstallers />} />
        <Route path="/for-rubbish-removal" element={<ForRubbishRemoval />} />

        {/* International landing pages (coming soon / waitlist) */}
        <Route path="/nz" element={<CountryNZ />} />
        <Route path="/uk" element={<CountryUK />} />
        <Route path="/us" element={<CountryUS />} />
        <Route path="/ca" element={<CountryCA />} />

        {/* Blog */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Admin */}
        <Route path="/admin/blog" element={<BlogAdmin />} />
        <Route path="/admin/blog/:id" element={<BlogEditor />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
