import { ComparisonPage } from './comparison-page';
import { comparisonBySlug } from '../data/comparison-data';

export function SmashVsMyob() {
  return <ComparisonPage data={comparisonBySlug['smash-vs-myob']} />;
}
