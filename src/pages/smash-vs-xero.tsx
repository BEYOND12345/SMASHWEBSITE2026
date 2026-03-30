import { ComparisonPage } from './comparison-page';
import { comparisonBySlug } from '../data/comparison-data';

export function SmashVsXero() {
  return <ComparisonPage data={comparisonBySlug['smash-vs-xero']} />;
}
