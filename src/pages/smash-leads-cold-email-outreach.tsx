import { SmashLeadsLandingPage } from '../components/smash-leads/SmashLeadsLandingPage';
import { smashLeadsPages } from '../data/smash-leads-pages';

export function SmashLeadsColdEmailOutreach() {
  return <SmashLeadsLandingPage config={smashLeadsPages.outreach} />;
}
