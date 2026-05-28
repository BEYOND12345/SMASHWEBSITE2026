import { SmashLeadsLandingPage } from '../components/smash-leads/SmashLeadsLandingPage';
import { smashLeadsPages } from '../data/smash-leads-pages';

export function SmashLeadsHub() {
  return <SmashLeadsLandingPage config={smashLeadsPages.hub} />;
}
