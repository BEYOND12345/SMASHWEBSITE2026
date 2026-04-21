import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForApplianceRepair() {
  return <SegmentPage data={segmentBySlug['appliance-repair']} />;
}
