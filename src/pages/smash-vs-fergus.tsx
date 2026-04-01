import { ComparisonPage } from './comparison-page';
import { comparisonBySlug } from '../data/comparison-data';

export function SmashVsFergus() {
  return <ComparisonPage data={comparisonBySlug['smash-vs-fergus']} />;
}
