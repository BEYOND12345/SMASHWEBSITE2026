import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Reset scroll on route changes — long pages (e.g. /voice-invoicing) otherwise land below the fold. */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }, [pathname]);

  return null;
}
