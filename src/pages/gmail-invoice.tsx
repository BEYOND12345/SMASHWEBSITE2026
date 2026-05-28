import { GmailLandingPage } from '../components/gmail-landing/GmailLandingPage';
import { gmailLandingPages } from '../data/gmail-landing-pages';

export function GmailInvoice() {
  return <GmailLandingPage config={gmailLandingPages['gmail-invoice']} />;
}
