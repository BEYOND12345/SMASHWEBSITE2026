import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// LandingPage is kept as a static import — it is the "/" route and must render
// on first paint without any async chunk delay.
import { LandingPage } from './pages/landing-page';

// All other pages are lazily loaded so Vite splits them into separate chunks.
const Founder = lazy(() => import('./pages/founder').then(m => ({ default: m.Founder })));
const HowItWorks = lazy(() => import('./pages/how-it-works').then(m => ({ default: m.HowItWorks })));
const FAQPage = lazy(() => import('./pages/faq-page').then(m => ({ default: m.FAQPage })));
const Pricing = lazy(() => import('./pages/pricing').then(m => ({ default: m.Pricing })));
const Privacy = lazy(() => import('./pages/privacy').then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import('./pages/terms').then(m => ({ default: m.Terms })));
const Contact = lazy(() => import('./pages/contact').then(m => ({ default: m.Contact })));
const Features = lazy(() => import('./pages/features').then(m => ({ default: m.Features })));
const VoiceInvoicing = lazy(() => import('./pages/voice-invoicing').then(m => ({ default: m.VoiceInvoicing })));
const AiInvoicing = lazy(() => import('./pages/ai-invoicing').then(m => ({ default: m.AiInvoicing })));
const GstCompliantInvoicing = lazy(() => import('./pages/gst-compliant-invoicing').then(m => ({ default: m.GstCompliantInvoicing })));
const InvoiceOnMobile = lazy(() => import('./pages/invoice-on-mobile').then(m => ({ default: m.InvoiceOnMobile })));
const ChromeExtension = lazy(() => import('./pages/chrome-extension').then(m => ({ default: m.ChromeExtension })));
const Roadmap = lazy(() => import('./pages/roadmap').then(m => ({ default: m.Roadmap })));
const Changelog = lazy(() => import('./pages/changelog').then(m => ({ default: m.Changelog })));

// Tool pages
const QuoteGenerator = lazy(() => import('./pages/quote-generator').then(m => ({ default: m.QuoteGenerator })));
const InvoiceGenerator = lazy(() => import('./pages/invoice-generator').then(m => ({ default: m.InvoiceGenerator })));
const GstCalculator = lazy(() => import('./pages/gst-calculator').then(m => ({ default: m.GstCalculator })));
const InvoiceTemplate = lazy(() => import('./pages/invoice-template').then(m => ({ default: m.InvoiceTemplate })));
const HourlyRateCalculator = lazy(() => import('./pages/hourly-rate-calculator').then(m => ({ default: m.HourlyRateCalculator })));
const LatePaymentCalculator = lazy(() => import('./pages/late-payment-calculator').then(m => ({ default: m.LatePaymentCalculator })));
const ProfitCalculator = lazy(() => import('./pages/profit-calculator').then(m => ({ default: m.ProfitCalculator })));
const Tools = lazy(() => import('./pages/tools').then(m => ({ default: m.Tools })));

// Comparison pages
const SmashVsXero = lazy(() => import('./pages/smash-vs-xero').then(m => ({ default: m.SmashVsXero })));
const SmashVsMyob = lazy(() => import('./pages/smash-vs-myob').then(m => ({ default: m.SmashVsMyob })));
const SmashVsServiceM8 = lazy(() => import('./pages/smash-vs-servicem8').then(m => ({ default: m.SmashVsServiceM8 })));
const SmashVsQuickBooks = lazy(() => import('./pages/smash-vs-quickbooks').then(m => ({ default: m.SmashVsQuickBooks })));
const SmashVsFergus = lazy(() => import('./pages/smash-vs-fergus').then(m => ({ default: m.SmashVsFergus })));
const SmashVsTradify = lazy(() => import('./pages/smash-vs-tradify').then(m => ({ default: m.SmashVsTradify })));
const SmashVsInvoice2go = lazy(() => import('./pages/smash-vs-invoice2go').then(m => ({ default: m.SmashVsInvoice2go })));
const SmashVsJoist = lazy(() => import('./pages/smash-vs-joist').then(m => ({ default: m.SmashVsJoist })));
const SmashVsRounded = lazy(() => import('./pages/smash-vs-rounded').then(m => ({ default: m.SmashVsRounded })));
const BlogList = lazy(() => import('./pages/blog-list').then(m => ({ default: m.BlogList })));
const BlogPost = lazy(() => import('./pages/blog-post').then(m => ({ default: m.BlogPost })));
const BlogAdmin = lazy(() => import('./pages/admin/blog-admin').then(m => ({ default: m.BlogAdmin })));
const BlogEditor = lazy(() => import('./pages/admin/blog-editor').then(m => ({ default: m.BlogEditor })));

// Segment pages
const ForCleaners = lazy(() => import('./pages/for-cleaners').then(m => ({ default: m.ForCleaners })));
const ForPlumbers = lazy(() => import('./pages/for-plumbers').then(m => ({ default: m.ForPlumbers })));
const ForElectricians = lazy(() => import('./pages/for-electricians').then(m => ({ default: m.ForElectricians })));
const ForHandymen = lazy(() => import('./pages/for-handymen').then(m => ({ default: m.ForHandymen })));
const ForPainters = lazy(() => import('./pages/for-painters').then(m => ({ default: m.ForPainters })));
const ForGardeners = lazy(() => import('./pages/for-gardeners').then(m => ({ default: m.ForGardeners })));
const ForMobileMechanics = lazy(() => import('./pages/for-mobile-mechanics').then(m => ({ default: m.ForMobileMechanics })));
const ForHvac = lazy(() => import('./pages/for-hvac').then(m => ({ default: m.ForHvac })));
const ForPestControl = lazy(() => import('./pages/for-pest-control').then(m => ({ default: m.ForPestControl })));
const ForConcreters = lazy(() => import('./pages/for-concreters').then(m => ({ default: m.ForConcreters })));
const ForTilers = lazy(() => import('./pages/for-tilers').then(m => ({ default: m.ForTilers })));
const ForLocksmiths = lazy(() => import('./pages/for-locksmiths').then(m => ({ default: m.ForLocksmiths })));
const ForCarDetailers = lazy(() => import('./pages/for-car-detailers').then(m => ({ default: m.ForCarDetailers })));
const ForDogGroomers = lazy(() => import('./pages/for-dog-groomers').then(m => ({ default: m.ForDogGroomers })));
const ForArborists = lazy(() => import('./pages/for-arborists').then(m => ({ default: m.ForArborists })));
const ForPoolMaintenance = lazy(() => import('./pages/for-pool-maintenance').then(m => ({ default: m.ForPoolMaintenance })));
const ForSolarInstallers = lazy(() => import('./pages/for-solar-installers').then(m => ({ default: m.ForSolarInstallers })));
const ForRubbishRemoval = lazy(() => import('./pages/for-rubbish-removal').then(m => ({ default: m.ForRubbishRemoval })));
const ForItRepair = lazy(() => import('./pages/for-it-repair').then(m => ({ default: m.ForItRepair })));
const ForApplianceRepair = lazy(() => import('./pages/for-appliance-repair').then(m => ({ default: m.ForApplianceRepair })));
const ForSecurityInstallers = lazy(() => import('./pages/for-security-installers').then(m => ({ default: m.ForSecurityInstallers })));
const ForFencers = lazy(() => import('./pages/for-fencers').then(m => ({ default: m.ForFencers })));

// International landing pages
const CountryNZ = lazy(() => import('./pages/country-nz').then(m => ({ default: m.CountryNZ })));
const CountryUK = lazy(() => import('./pages/country-uk').then(m => ({ default: m.CountryUK })));
const CountryUS = lazy(() => import('./pages/country-us').then(m => ({ default: m.CountryUS })));
const CountryCA = lazy(() => import('./pages/country-ca').then(m => ({ default: m.CountryCA })));
const Integrations = lazy(() => import('./pages/integrations').then(m => ({ default: m.Integrations })));
const IntegrationsXero = lazy(() => import('./pages/integrations-xero').then(m => ({ default: m.IntegrationsXero })));
const IntegrationsQuickBooks = lazy(() => import('./pages/integrations-quickbooks').then(m => ({ default: m.IntegrationsQuickBooks })));
const SitemapPage = lazy(() => import('./pages/sitemap-page').then(m => ({ default: m.SitemapPage })));
const NotFound = lazy(() => import('./pages/not-found').then(m => ({ default: m.NotFound })));
const TradieHourlyRates = lazy(() => import('./pages/tradie-hourly-rates').then(m => ({ default: m.TradieHourlyRates })));
const MaterialsPricing = lazy(() => import('./pages/materials-pricing').then(m => ({ default: m.MaterialsPricing })));
const CustomerApproval = lazy(() => import('./pages/customer-approval').then(m => ({ default: m.CustomerApproval })));
const NdisInvoicing = lazy(() => import('./pages/ndis-invoicing').then(m => ({ default: m.NdisInvoicing })));

/** Minimal loading fallback — dark background matches the site shell so there
 *  is no flash of white while a route chunk downloads. */
function PageLoader() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }} aria-hidden="true" />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
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
        <Route path="/chrome-extension" element={<ChromeExtension />} />
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
        <Route path="/smash-vs-tradify" element={<SmashVsTradify />} />
        <Route path="/smash-vs-invoice2go" element={<SmashVsInvoice2go />} />
        <Route path="/smash-vs-joist" element={<SmashVsJoist />} />
        <Route path="/smash-vs-rounded" element={<SmashVsRounded />} />

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
        <Route path="/for-it-repair" element={<ForItRepair />} />
        <Route path="/for-appliance-repair" element={<ForApplianceRepair />} />
        <Route path="/for-security-installers" element={<ForSecurityInstallers />} />
        <Route path="/for-fencers" element={<ForFencers />} />

        {/* International landing pages — live in NZ, UK, US, CA */}
        <Route path="/nz" element={<CountryNZ />} />
        <Route path="/uk" element={<CountryUK />} />
        <Route path="/us" element={<CountryUS />} />
        <Route path="/ca" element={<CountryCA />} />

        {/* Integrations */}
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/integrations/xero" element={<IntegrationsXero />} />
        <Route path="/integrations/quickbooks" element={<IntegrationsQuickBooks />} />

        {/* Content pillars — AI search + evergreen SEO */}
        <Route path="/tradie-hourly-rates" element={<TradieHourlyRates />} />
        <Route path="/materials-pricing" element={<MaterialsPricing />} />
        <Route path="/customer-approval" element={<CustomerApproval />} />
        <Route path="/for-ndis-support-workers" element={<NdisInvoicing />} />

        {/* Human-readable sitemap */}
        <Route path="/sitemap" element={<SitemapPage />} />

        {/* Blog */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* Admin */}
        <Route path="/admin/blog" element={<BlogAdmin />} />
        <Route path="/admin/blog/:id" element={<BlogEditor />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
