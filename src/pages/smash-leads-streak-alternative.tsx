import { SmashLeadsLandingPage } from '../components/smash-leads/SmashLeadsLandingPage';
import { smashLeadsPages } from '../data/smash-leads-pages';

export function SmashLeadsStreakAlternative() {
  return <SmashLeadsLandingPage config={smashLeadsPages['streak-alternative']} />;
}
