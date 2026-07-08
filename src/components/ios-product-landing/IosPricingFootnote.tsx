import { Link } from 'react-router-dom';
import { iosLanding } from './ios-landing-tokens';

/** One-line pricing bridge between product story and FAQ — no tier comparison above the fold. */
export function IosPricingFootnote({ copy }: { copy: string }) {
  return (
    <section className="bg-brand border-t border-white/[0.06] py-8 md:py-10" aria-label="SMASH pricing">
      <p className={`${iosLanding.container} text-center font-body text-sm text-white/55 font-medium leading-relaxed max-w-xl mx-auto`}>
        {copy}{' '}
        <Link
          to="/pricing"
          className="text-accent font-semibold underline underline-offset-[5px] decoration-accent/40 hover:decoration-accent transition-colors touch-manipulation"
        >
          See pricing
        </Link>
      </p>
    </section>
  );
}
