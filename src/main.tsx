import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import { bindStoreLinkConversionTracking, initGoogleAds } from './lib/analytics.ts';
import './index.css';

initGoogleAds();
bindStoreLinkConversionTracking();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
