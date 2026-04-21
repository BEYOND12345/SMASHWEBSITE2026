import { ComparisonPage } from './comparison-page';
import { comparisonBySlug } from '../data/comparison-data';

export function SmashVsRounded() {
  return <ComparisonPage data={comparisonBySlug['smash-vs-rounded']} />;
}
