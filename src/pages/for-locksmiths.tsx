import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForLocksmiths() {
  return <SegmentPage data={segmentBySlug['locksmiths']} />;
}
