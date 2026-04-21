import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForSecurityInstallers() {
  return <SegmentPage data={segmentBySlug['security-installers']} />;
}
