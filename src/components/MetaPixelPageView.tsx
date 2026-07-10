import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackGa4PageView } from '../lib/analytics';
import { trackMetaPageView } from '../lib/meta-pixel';

/**
 * Fire Meta + GA4 page views on SPA route changes.
 * Skips the first GA4 hit — initGoogleAds already sends the initial page_view.
 */
export function MetaPixelPageView() {
  const { pathname, search } = useLocation();
  const isFirstGa4 = useRef(true);

  useEffect(() => {
    trackMetaPageView();

    if (isFirstGa4.current) {
      isFirstGa4.current = false;
      return;
    }

    trackGa4PageView(`${pathname}${search}`);
  }, [pathname, search]);

  return null;
}
