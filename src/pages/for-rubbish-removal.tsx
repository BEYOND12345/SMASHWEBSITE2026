import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForRubbishRemoval() {
  return <SegmentPage data={segmentBySlug['rubbish-removal']} />;
}
