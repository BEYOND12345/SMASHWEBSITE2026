import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForConcreters() {
  return <SegmentPage data={segmentBySlug['concreters']} />;
}
