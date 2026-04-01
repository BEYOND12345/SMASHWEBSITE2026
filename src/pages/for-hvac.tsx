import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForHvac() {
  return <SegmentPage data={segmentBySlug['hvac']} />;
}
