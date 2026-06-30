import { Link } from 'react-router-dom';
import { Mic } from 'lucide-react';
import { IphoneInstallCta, BrowserProductCta } from './marketing/DualProductCtas';

interface VoiceConversionCTAProps {
  outputLabel: string;
  headline?: string;
  sub?: string;
  variant?: 'light' | 'dark';
}

/** Conversion block at the bottom of free tool pages — voice on iPhone + Gmail extension. */
export function VoiceConversionCTA({
  outputLabel,
  headline,
  sub,
  variant = 'dark',
}: VoiceConversionCTAProps) {
  const isDark = variant === 'dark';

  const headlineText = headline ?? `Want ${outputLabel} to happen from voice?`;
  const subText =
    sub ??
    `SMASH turns a 30-second voice note into a professional, tax-compliant ${outputLabel.replace(/^this\s+/, '')} — sent, tracked, and paid. No typing, no templates.`;

  return (
    <section className={isDark ? 'bg-brand py-16 md:py-20' : 'bg-surface py-16 md:py-20'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className={[
            'rounded-[32px] overflow-hidden border-2 p-8 md:p-12',
            isDark ? 'bg-white/[0.03] border-white/10' : 'bg-white border-border',
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

            <div className="flex flex-col gap-3 md:shrink-0">
              <IphoneInstallCta className="!px-6 !py-3 !text-xs" />
              <BrowserProductCta className="!px-6 !py-3 !text-xs" />
              <Link
                to="/voice-invoicing"
                className={[
                  'text-center text-xs font-semibold transition-colors',
                  isDark ? 'text-white/45 hover:text-accent' : 'text-brand/45 hover:text-brand',
                ].join(' ')}
              >
                See how voice invoicing works →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
