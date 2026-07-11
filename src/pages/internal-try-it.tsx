import { Navigate } from 'react-router-dom';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { SEO } from '../components/seo';
import { VoiceQuoteDemoDesignReview } from '../components/voice-quote-demo/VoiceQuoteDemo';
import { isVoiceQuoteDemoInternalAllowed } from '../lib/feature-flags';
import { iosLanding } from '../components/ios-product-landing/ios-landing-tokens';

/**
 * Internal design + try-it review. Available with `npm run dev`.
 * Not linked from public nav/sitemap.
 */
export function InternalTryItPage() {
  if (!isVoiceQuoteDemoInternalAllowed()) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={`${iosLanding.page} bg-brand min-h-screen`}>
      <SEO
        title="Internal — Voice quote demo | SMASH"
        description="Internal try-it voice-to-quote design review. Not for public indexing."
        canonical="https://smashinvoices.com/internal/try-it"
        robots="noindex, nofollow"
      />
      <Nav />
      <main className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 70% 20%, rgba(223,255,0,0.18), transparent 45%), radial-gradient(ellipse at 10% 80%, rgba(255,255,255,0.06), transparent 40%)',
          }}
        />
        <div className={`${iosLanding.container} relative py-12 md:py-16 lg:py-20`}>
          <VoiceQuoteDemoDesignReview />
        </div>
      </main>
      <Footer />
    </div>
  );
}
