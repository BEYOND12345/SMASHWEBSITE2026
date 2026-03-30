import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForHandymen() {
  return <SegmentPage data={segmentBySlug['handymen']} />;
}
