import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForFencers() {
  return <SegmentPage data={segmentBySlug['fencers']} />;
}
