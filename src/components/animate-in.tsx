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
  threshold = 0.12,
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction, threshold]);

  return (
    // @ts-ignore — dynamic tag
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
