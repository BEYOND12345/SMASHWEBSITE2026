import { useCallback, useEffect, useState } from 'react';

const SESSION_KEY = 'smash_offer_popup_dismissed';
const DEFAULT_SCROLL_TARGET = 'how-it-works';
const DEFAULT_FALLBACK_MS = 8000;

type Options = {
  /** Element id to observe — popup opens when user scrolls it into view. */
  scrollTargetId?: string;
  /** Fallback delay if user never scrolls past hero. */
  fallbackDelayMs?: number;
  /** Disable auto-trigger (manual open only). */
  autoTrigger?: boolean;
};

/**
 * Scroll-past-hero + 8s fallback trigger for the offer popup.
 * Whichever fires first. Once per session via sessionStorage.
 */
export function useEmailCapturePopup({
  scrollTargetId = DEFAULT_SCROLL_TARGET,
  fallbackDelayMs = DEFAULT_FALLBACK_MS,
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

    let triggered = false;

    const trigger = () => {
      if (triggered || hasSeenPopup()) return;
      triggered = true;
      markSeen();
      setOpen(true);
    };

    const timer = window.setTimeout(trigger, fallbackDelayMs);

    const target = document.getElementById(scrollTargetId);
    let observer: IntersectionObserver | undefined;

    if (target) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            trigger();
          }
        },
        { threshold: 0.15 },
      );
      observer.observe(target);
    }

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [autoTrigger, fallbackDelayMs, hasSeenPopup, markSeen, scrollTargetId]);

  return { open, openPopup, closePopup };
}
