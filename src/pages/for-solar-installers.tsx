import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForSolarInstallers() {
  return <SegmentPage data={segmentBySlug['solar-installers']} />;
}
