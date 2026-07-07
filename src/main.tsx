import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import { bindStoreLinkConversionTracking, initGoogleAds } from './lib/analytics.ts';
import { bindMetaPixelStoreLinkTracking, initMetaPixel } from './lib/meta-pixel.ts';
import './index.css';

initGoogleAds();
bindStoreLinkConversionTracking();
initMetaPixel();
bindMetaPixelStoreLinkTracking();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
