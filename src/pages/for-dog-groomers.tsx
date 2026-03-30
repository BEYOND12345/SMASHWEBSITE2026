import { SegmentPage } from './segment-page';
import { segmentBySlug } from '../data/segment-data';

export function ForDogGroomers() {
  return <SegmentPage data={segmentBySlug['dog-groomers']} />;
}
