import { ComparisonPage } from './comparison-page';
import { comparisonBySlug } from '../data/comparison-data';

export function SmashVsServiceM8() {
  return <ComparisonPage data={comparisonBySlug['smash-vs-servicem8']} />;
}
