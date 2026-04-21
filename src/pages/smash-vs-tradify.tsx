import { ComparisonPage } from './comparison-page';
import { comparisonBySlug } from '../data/comparison-data';

export function SmashVsTradify() {
  return <ComparisonPage data={comparisonBySlug['smash-vs-tradify']} />;
}
