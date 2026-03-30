import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForTilers() {
  return <SegmentPage data={segmentBySlug['tilers']} />;
}
