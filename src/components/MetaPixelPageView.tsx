import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackMetaPageView } from '../lib/meta-pixel';

/** Fire Meta Pixel PageView on SPA route changes (including initial load). */
export function MetaPixelPageView() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    trackMetaPageView();
  }, [pathname, search]);

  return null;
}
