import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForPestControl() {
  return <SegmentPage data={segmentBySlug['pest-control']} />;
}
