import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForCarDetailers() {
  return <SegmentPage data={segmentBySlug['car-detailers']} />;
}
