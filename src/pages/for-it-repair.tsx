import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForItRepair() {
  return <SegmentPage data={segmentBySlug['it-repair']} />;
}
