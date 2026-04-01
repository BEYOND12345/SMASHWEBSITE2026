import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForCleaners() {
  return <SegmentPage data={segmentBySlug['cleaners']} />;
}
