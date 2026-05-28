import { SmashLeadsLandingPage } from '../components/smash-leads/SmashLeadsLandingPage';
import { smashLeadsPages } from '../data/smash-leads-pages';

export function SmashLeadsFreeGmailCrm() {
  return <SmashLeadsLandingPage config={smashLeadsPages.free} />;
}
