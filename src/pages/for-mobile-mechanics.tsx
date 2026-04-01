import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForMobileMechanics() {
  return <SegmentPage data={segmentBySlug['mobile-mechanics']} />;
}
