import { GmailLandingPage } from '../components/gmail-landing/GmailLandingPage';
import { gmailLandingPages } from '../data/gmail-landing-pages';

export function XeroGmail() {
  return <GmailLandingPage config={gmailLandingPages['xero-gmail']} />;
}
