import { MainSeoPage } from '../components/main-seo-page';
import { mainPages } from '../data/main-pages-seo';

export function GetStarted() {
  return <MainSeoPage page={mainPages.getStarted} />;
}
