import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForPoolMaintenance() {
  return <SegmentPage data={segmentBySlug['pool-maintenance']} />;
}
