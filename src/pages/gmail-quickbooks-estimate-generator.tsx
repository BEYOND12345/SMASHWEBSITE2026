import { GmailLandingPage } from '../components/gmail-landing/GmailLandingPage';
import { gmailLandingPages } from '../data/gmail-landing-pages';

export function GmailQuickBooksEstimateGenerator() {
  return <GmailLandingPage config={gmailLandingPages.quickbooks} />;
}
