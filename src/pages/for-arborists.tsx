import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForArborists() {
  return <SegmentPage data={segmentBySlug['arborists']} />;
}
