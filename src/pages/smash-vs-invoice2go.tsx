import { ComparisonPage } from './comparison-page';
import { comparisonBySlug } from '../data/comparison-data';

export function SmashVsInvoice2go() {
  return <ComparisonPage data={comparisonBySlug['smash-vs-invoice2go']} />;
}
