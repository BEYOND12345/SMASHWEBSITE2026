import { useEffect, useRef, ReactNode } from 'react';

type RevealDirection = 'up' | 'left' | 'right' | 'fade';

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  /** On viewports below 640px — defaults to `up` for calmer stacked layouts. */
  directionMobile?: RevealDirection;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

function resolveDirectionClass(direction: RevealDirection): string {
  if (direction === 'fade') return 'reveal-fade';
  if (direction === 'left') return 'reveal-left';
  if (direction === 'right') return 'reveal-right';
  return 'reveal';
}

function pickDirection(
  direction: RevealDirection,
  directionMobile: RevealDirection | undefined,
): RevealDirection {
  if (typeof window === 'undefined') return direction;
  const isMobile = window.matchMedia('(max-width: 639px)').matches;
  if (isMobile) return directionMobile ?? 'up';
  return direction;
}

export function AnimateIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  directionMobile,
  threshold = 0.06,
  as: Tag = 'div',
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const activeDirection = pickDirection(direction, directionMobile);
    el.classList.add(resolveDirectionClass(activeDirection));
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const reveal = () => {
      el.classList.add('revealed');
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px 8% 0px' },
    );

    observer.observe(el);

    const revealIfVisible = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < viewportHeight && rect.bottom > 0) {
        reveal();
        observer.disconnect();
      }
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(revealIfVisible);
    });

    return () => observer.disconnect();
  }, [delay, direction, directionMobile, threshold]);

  return (
    // @ts-expect-error — polymorphic wrapper: Tag is keyof JSX.IntrinsicElements, ref typing varies by element
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
