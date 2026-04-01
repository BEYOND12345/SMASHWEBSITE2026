import { ComparisonPage } from './comparison-page';
import { comparisonBySlug } from '../data/comparison-data';

export function SmashVsQuickBooks() {
  return <ComparisonPage data={comparisonBySlug['smash-vs-quickbooks']} />;
}
