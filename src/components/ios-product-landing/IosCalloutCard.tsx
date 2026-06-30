import { Mic, DollarSign, CheckCircle2, Send, Eye, BadgeCheck } from 'lucide-react';
import type { IosCalloutAccent } from '../../data/ios-landing-spec';
import { IosSubline } from './IosSubline';
import { iosLanding } from './ios-landing-tokens';

const ICONS = {
  mic: Mic,
  total: DollarSign,
  check: CheckCircle2,
  send: Send,
  eye: Eye,
  paid: BadgeCheck,
} as const;

type Props = {
  label: string;
  value: string;
  accent: IosCalloutAccent;
  icon?: keyof typeof ICONS;
  className?: string;
  compact?: boolean;
};

export function IosCalloutCard({ label, value, accent, icon = 'mic', className = '', compact = false }: Props) {
  const Icon = ICONS[icon];
  const accentColor = accent === 'lime' ? '#DFFF00' : '#3DD68C';
  const tintBg = accent === 'lime' ? 'rgba(223,255,0,0.13)' : 'rgba(61,214,140,0.13)';

  return (
    <div className={`${iosLanding.calloutCard} ${className}`.trim()}>
      <div className="flex items-center gap-3 sm:gap-4">
        <div
          className="shrink-0 rounded-full flex items-center justify-center"
          style={{
            width: compact ? 48 : 64,
            height: compact ? 48 : 64,
            backgroundColor: tintBg,
          }}
        >
          <Icon size={compact ? 20 : 28} strokeWidth={2.25} style={{ color: accentColor }} />
        </div>
        <div className="min-w-0">
          <p className="font-display font-black uppercase tracking-[0.14em] text-[#8A94A6] text-[10px] sm:text-xs mb-0.5">
            {label}
          </p>
          <p
            className="font-display-italic font-black italic leading-[0.95] tracking-[-0.02em] text-lg sm:text-xl md:text-2xl"
            style={{ color: accentColor }}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

type HeadlineProps = {
  eyebrow: string;
  headlineWhite: string;
  headlineLime: string;
  subline?: string;
  centered?: boolean;
  size?: 'hero' | 'section';
  dark?: boolean;
  className?: string;
  /** Extra classes on the subline — e.g. tighter max-width over photo backgrounds. */
  sublineClassName?: string;
};

export function IosSpecHeadline({
  eyebrow,
  headlineWhite,
  headlineLime,
  subline,
  centered = false,
  size = 'section',
  dark = true,
  className = '',
  sublineClassName = '',
}: HeadlineProps) {
  const align = centered ? 'text-center mx-auto' : 'text-left';
  const headlineClass = size === 'hero' ? iosLanding.heroHeadline : iosLanding.sectionHeadline;
  const primary = dark ? iosLanding.white : 'text-brand';

  return (
    <div className={`${align} ${className}`.trim()}>
      <p className={`${iosLanding.eyebrow} ${centered ? 'text-center' : ''}`}>{eyebrow}</p>
      <h2 className={headlineClass}>
        <span className={primary}>{headlineWhite} </span>
        <span className={iosLanding.lime}>{headlineLime}</span>
      </h2>
      {subline && (
        <IosSubline
          className={`${iosLanding.subline} mt-5 sm:mt-6 ${centered ? 'mx-auto' : ''} ${dark ? '' : '!text-brand/65'} ${sublineClassName}`.trim()}
        >
          {subline}
        </IosSubline>
      )}
    </div>
  );
}
