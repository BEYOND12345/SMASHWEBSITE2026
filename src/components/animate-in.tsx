import { useEffect, useRef, ReactNode } from 'react';

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

export function AnimateIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0,
  as: Tag = 'div',
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const dirClass =
      direction === 'up' ? 'reveal'
      : direction === 'left' ? 'reveal-left'
      : direction === 'right' ? 'reveal-right'
      : 'reveal';

    el.classList.add(dirClass);
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
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);

    // Tall async blocks (e.g. blog grids) can fail a high intersection ratio on
    // first paint — reveal immediately if any part is already on screen.
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
  }, [delay, direction, threshold]);

  return (
    // @ts-expect-error — polymorphic wrapper: Tag is keyof JSX.IntrinsicElements, ref typing varies by element
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
