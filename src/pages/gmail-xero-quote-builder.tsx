import { GmailLandingPage } from '../components/gmail-landing/GmailLandingPage';
import { gmailLandingPages } from '../data/gmail-landing-pages';

export function GmailXeroQuoteBuilder() {
  return <GmailLandingPage config={gmailLandingPages.xero} />;
}
