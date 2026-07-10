import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Nav } from '../components/nav';
import { Footer } from '../components/footer';
import { SEO } from '../components/seo';
import { VoiceQuoteDemo } from '../components/voice-quote-demo/VoiceQuoteDemo';
import { isVoiceQuoteDemoInternalAllowed } from '../lib/feature-flags';
import { iosLanding } from '../components/ios-product-landing/ios-landing-tokens';

/**
 * Internal-only try-it page. Available with `npm run dev`.
 * Not linked from public nav/sitemap. Production redirects home unless
 * VITE_ENABLE_VOICE_DEMO=true.
 */
export function InternalTryItPage() {
  const enabled = isVoiceQuoteDemoInternalAllowed();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (enabled) setOpen(true);
  }, [enabled]);

  if (!enabled) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={`${iosLanding.page} bg-brand min-h-screen`}>
      <SEO
        title="Internal — Voice quote demo | SMASH"
        description="Internal try-it voice-to-quote demo. Not for public indexing."
        canonical="https://smashinvoices.com/internal/try-it"
        robots="noindex, nofollow"
      />
      <Nav />
      <main className="py-12 md:py-16">
        <div className={`${iosLanding.container} text-center mb-8`}>
          <p className="font-display text-[11px] uppercase tracking-[0.2em] text-accent mb-2">
            Internal only
          </p>
          <h1 className={`${iosLanding.heroHeadline} text-white mb-3`}>
            <span className="block">TRY IT</span>
            <span className="block text-accent">BEFORE LAUNCH</span>
          </h1>
          <p className="font-body text-white/70 max-w-lg mx-auto">
            Not on the public homepage. Set <code className="text-accent">DEEPGRAM_API_KEY</code> on
            Supabase for voice; typed jobs work without it.
          </p>
        </div>
        <VoiceQuoteDemo open={open} onOpenChange={setOpen} showSection />
      </main>
      <Footer />
    </div>
  );
}
