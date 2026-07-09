import { useCallback, useEffect, useState } from 'react';

const SESSION_KEY = 'smash_offer_popup_dismissed';
const DEFAULT_SCROLL_TARGET = 'how-it-works';

/** Minimum time on page before auto-trigger can fire. */
const MIN_DWELL_MS = 12_000;
/** User must scroll past the hero band before we consider them engaged. */
const MIN_SCROLL_PX = 360;
/** If they never reach the story section, offer after this long (still requires dwell + scroll). */
const FALLBACK_MS = 50_000;

type Options = {
  /** Element id — popup opens when user scrolls this into view after dwell + engagement. */
  scrollTargetId?: string;
  /** Disable auto-trigger (manual open only). */
  autoTrigger?: boolean;
};

function scrollTargetInView(targetId: string): boolean {
  const target = document.getElementById(targetId);
  if (!target) return false;
  const rect = target.getBoundingClientRect();
  const vh = window.innerHeight;
  // Section has entered the viewport meaningfully (not just a sliver at the bottom on load).
  return rect.top < vh * 0.72 && rect.bottom > vh * 0.12;
}

/**
 * Offer popup — requires ~12s on page, real scroll past hero, then story section in view.
 * Long fallback (50s) only if they scroll but never reach the target. Once per session.
 */
export function useEmailCapturePopup({
  scrollTargetId = DEFAULT_SCROLL_TARGET,
  autoTrigger = true,
}: Options = {}) {
  const [open, setOpen] = useState(false);

  const hasSeenPopup = useCallback(() => {
    if (typeof window === 'undefined') return true;
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  }, []);

  const markSeen = useCallback(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(SESSION_KEY, 'true');
    }
  }, []);

  const openPopup = useCallback(() => {
    markSeen();
    setOpen(true);
  }, [markSeen]);

  const closePopup = useCallback(() => {
    setOpen(false);
    markSeen();
  }, [markSeen]);

  useEffect(() => {
    if (!autoTrigger || hasSeenPopup()) return;

    const pageLoadAt = Date.now();
    let triggered = false;
    let maxScrollY = 0;

    const isEngaged = () => {
      if (Date.now() - pageLoadAt < MIN_DWELL_MS) return false;
      if (maxScrollY < MIN_SCROLL_PX) return false;
      return true;
    };

    const tryTrigger = (reason: 'scroll' | 'fallback') => {
      if (triggered || hasSeenPopup() || !isEngaged()) return;

      if (reason === 'scroll' && !scrollTargetInView(scrollTargetId)) return;

      triggered = true;
      markSeen();
      setOpen(true);
    };

    const onScroll = () => {
      maxScrollY = Math.max(maxScrollY, window.scrollY);
      tryTrigger('scroll');
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const fallbackTimer = window.setTimeout(() => {
      maxScrollY = Math.max(maxScrollY, window.scrollY);
      if (isEngaged()) tryTrigger('fallback');
    }, FALLBACK_MS);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(fallbackTimer);
    };
  }, [autoTrigger, hasSeenPopup, markSeen, scrollTargetId]);

  return { open, openPopup, closePopup };
}
