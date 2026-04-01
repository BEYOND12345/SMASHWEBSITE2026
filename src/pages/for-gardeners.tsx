import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForGardeners() {
  return <SegmentPage data={segmentBySlug['gardeners']} />;
}
