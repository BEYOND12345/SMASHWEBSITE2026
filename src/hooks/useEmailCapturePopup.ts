import { useCallback, useEffect, useState } from 'react';

const SESSION_KEY = 'smash_offer_popup_dismissed';
const DEFAULT_SCROLL_TARGET = 'how-it-works';

/** Minimum time on page before auto-trigger can fire. */
const MIN_DWELL_MS = 6_000;
/** User must scroll past the hero band before we consider them engaged. */
const MIN_SCROLL_PX = 180;
/** Re-check scroll position after dwell (handles scroll-then-wait). */
const POLL_MS = 1_000;
/** If they scroll but never hit the story section, offer after this long. */
const FALLBACK_MS = 18_000;

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
  return rect.top < vh * 0.78 && rect.bottom > vh * 0.08;
}

/**
 * Offer popup — dwell ~10s, scroll past hero, then story section in view.
 * Polls after dwell so early scroll + later wait still triggers. Once per session.
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

    const tryTrigger = (reason: 'scroll' | 'poll' | 'fallback') => {
      if (triggered || hasSeenPopup() || !isEngaged()) return;

      if ((reason === 'scroll' || reason === 'poll') && !scrollTargetInView(scrollTargetId)) {
        return;
      }

      triggered = true;
      markSeen();
      setOpen(true);
    };

    const onScroll = () => {
      maxScrollY = Math.max(maxScrollY, window.scrollY);
      tryTrigger('scroll');
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const pollTimer = window.setInterval(() => {
      maxScrollY = Math.max(maxScrollY, window.scrollY);
      tryTrigger('poll');
    }, POLL_MS);

    const fallbackTimer = window.setTimeout(() => {
      maxScrollY = Math.max(maxScrollY, window.scrollY);
      if (isEngaged()) tryTrigger('fallback');
    }, FALLBACK_MS);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearInterval(pollTimer);
      window.clearTimeout(fallbackTimer);
    };
  }, [autoTrigger, hasSeenPopup, markSeen, scrollTargetId]);

  return { open, openPopup, closePopup };
}
