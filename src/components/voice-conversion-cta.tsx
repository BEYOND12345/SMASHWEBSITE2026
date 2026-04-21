import { Link } from 'react-router-dom';
import { Mic, ArrowRight } from 'lucide-react';

interface VoiceConversionCTAProps {
  /** What the tool produces — "this invoice", "this quote", "this calculation" etc. */
  outputLabel: string;
  /** Short, tool-specific headline. Fallback provided. */
  headline?: string;
  /** Short, tool-specific sub. Fallback provided. */
  sub?: string;
  /** App Store URL — defaults to the AU listing. */
  appStoreUrl?: string;
  variant?: 'light' | 'dark';
}

const DEFAULT_APP_STORE = 'https://apps.apple.com/au/app/smash-invoices/id6759475079';

/**
 * Conversion block dropped at the bottom of every free tool page. This is the
 * Invoice Simple play — a free tool that quietly converts into the full app.
 * Single line: want this to happen automatically from voice?
 */
export function VoiceConversionCTA({
  outputLabel,
  headline,
  sub,
  appStoreUrl = DEFAULT_APP_STORE,
  variant = 'dark',
}: VoiceConversionCTAProps) {
  const isDark = variant === 'dark';

  const headlineText =
    headline ?? `Want ${outputLabel} to happen from voice?`;
  const subText =
    sub ??
    `SMASH turns a 30-second voice note into a professional, tax-compliant ${outputLabel.replace(/^this\s+/, '')} — sent, tracked, and paid. No typing, no templates.`;

  return (
    <section className={isDark ? 'bg-brand py-16 md:py-20' : 'bg-surface py-16 md:py-20'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className={[
            'rounded-[32px] overflow-hidden border-2 p-8 md:p-12',
            isDark
              ? 'bg-white/[0.03] border-white/10'
              : 'bg-white border-border',
          ].join(' ')}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center">
              <Mic size={22} className="text-accent" strokeWidth={2.5} />
            </div>

            <div className="flex-1">
              <p
                className={[
                  'text-[11px] font-black uppercase tracking-[0.2em] mb-2',
                  isDark ? 'text-accent/80' : 'text-accent',
                ].join(' ')}
              >
                The SMASH app
              </p>
              <h2
                className={[
                  'font-display text-2xl md:text-3xl uppercase tracking-tighter leading-[0.95] mb-3',
                  isDark ? 'text-white' : 'text-brand',
                ].join(' ')}
              >
                {headlineText}
              </h2>
              <p
                className={[
                  'font-body text-sm md:text-base leading-[1.55] max-w-2xl',
                  isDark ? 'text-white/60' : 'text-brand/60',
                ].join(' ')}
              >
                {subText}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:shrink-0">
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-brand font-display text-xs uppercase tracking-widest hover:brightness-95 transition-all whitespace-nowrap"
              >
                Start Free
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
              <Link
                to="/voice-invoicing"
                className={[
                  'inline-flex items-center justify-center px-6 py-3 rounded-full border-2 font-display text-xs uppercase tracking-widest transition-all whitespace-nowrap',
                  isDark
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-brand/20 text-brand hover:bg-brand/5',
                ].join(' ')}
              >
                See how voice works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
