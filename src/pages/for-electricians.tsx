import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForElectricians() {
  return <SegmentPage data={segmentBySlug['electricians']} />;
}
