import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForPlumbers() {
  return <SegmentPage data={segmentBySlug['plumbers']} />;
}
