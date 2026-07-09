import { useReducedMotion } from 'framer-motion';
import { AnimateIn } from '../animate-in';
import { StarRating } from '../chrome-landing/chrome-landing-ui';
import type { ProductTestimonial } from '../../data/product-testimonials';
import { iosLanding } from './ios-landing-tokens';

const CARD_CLASS =
  'shrink-0 w-[min(82vw,19rem)] sm:w-[18rem] md:w-[20rem] lg:w-[21rem] snap-center bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 flex flex-col gap-2.5 relative overflow-hidden before:absolute before:inset-y-3 before:left-0 before:w-[3px] before:rounded-full before:bg-accent/70';

function testimonialAttribution({ name, trade, city }: ProductTestimonial) {
  return `${name} · ${trade} · ${city}`;
}

function TestimonialCard({ item }: { item: ProductTestimonial }) {
  return (
    <figure className={CARD_CLASS}>
      <StarRating size={10} />
      <blockquote className="font-body font-medium italic text-white/85 text-sm leading-[1.45] pl-1">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <figcaption className="font-display uppercase tracking-wider text-white/45 text-[10px] sm:text-[11px] leading-tight pl-1">
        {testimonialAttribution(item)}
      </figcaption>
    </figure>
  );
}

export function TestimonialSliderSection({
  eyebrow,
  items,
  className = '',
}: {
  eyebrow: string;
  items: ProductTestimonial[];
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const trackItems = reduceMotion ? items : [...items, ...items];

  return (
    <section className={`relative overflow-hidden ${className}`.trim()} aria-label={eyebrow}>
      <AnimateIn direction="up">
        <div className="text-center mb-4 md:mb-5">
          <p className={`${iosLanding.eyebrow} text-white/40`}>{eyebrow}</p>
          <div className="mx-auto mt-2.5 h-px w-10 bg-gradient-to-r from-transparent via-accent/60 to-transparent" aria-hidden />
        </div>

        <div
          className={`testimonial-marquee relative -mx-4 sm:-mx-6 lg:-mx-12 ${reduceMotion ? '' : 'group'}`}
          tabIndex={reduceMotion ? undefined : 0}
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-16 bg-gradient-to-r from-brand via-brand/80 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-16 bg-gradient-to-l from-brand via-brand/80 to-transparent"
            aria-hidden
          />

          <div className={reduceMotion ? 'overflow-x-auto px-4 sm:px-6 lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden' : 'overflow-hidden'}>
            <div
              className={`flex gap-3 sm:gap-4 w-max px-4 sm:px-6 lg:px-12 ${reduceMotion ? 'snap-x snap-mandatory' : 'testimonial-marquee-track'}`}
              role="list"
            >
              {trackItems.map((item, index) => (
                <div key={`${item.name}-${index}`} role="listitem">
                  <TestimonialCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
