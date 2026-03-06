import React from 'react';

interface FeatureSectionProps {
  image?: React.ReactNode;
  imagePosition?: 'left' | 'right';
  title: string;
  description: string | React.ReactNode;
  bullets?: string[];
  background?: 'white' | 'slate' | 'brand';
  className?: string;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  image,
  imagePosition = 'right',
  title,
  description,
  bullets,
  background = 'white',
  className = ''
}) => {
  const bgClass = background === 'white' ? 'bg-white' : background === 'slate' ? 'bg-slate-50' : 'bg-brand text-white';
  const textClass = background === 'brand' ? 'text-white' : 'text-slate-900';
  const descClass = background === 'brand' ? 'text-white/90' : 'text-slate-700';

  return (
    <section className={`${bgClass} py-10 md:py-14 lg:py-20 ${className} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`${image ? 'grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20' : 'max-w-3xl'} items-center ${imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`${imagePosition === 'left' ? 'lg:order-2' : ''}`}>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-4 md:mb-6 uppercase leading-[1.1] ${textClass}`}>
              {title}
            </h2>

            <div className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-snug mb-5 md:mb-7 ${descClass}`}>
              {description}
            </div>

            {bullets && bullets.length > 0 && (
              <ul className="space-y-2.5 md:space-y-4">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2.5 md:gap-3">
                    <div className={`w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full ${background === 'brand' ? 'bg-accent/20' : 'bg-white border-2 border-accent'} flex items-center justify-center shrink-0 mt-0.5`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={`md:w-[14px] md:h-[14px] lg:w-[16px] lg:h-[16px] ${background === 'brand' ? 'text-accent' : 'text-accentText'}`}>
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className={`text-xs sm:text-sm md:text-base lg:text-lg font-bold leading-snug ${background === 'brand' ? 'text-white/95' : 'text-slate-800'}`}>
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {image && (
            <div className={`flex items-center justify-center mt-6 lg:mt-0 py-8 ${imagePosition === 'left' ? 'lg:order-1' : ''}`}>
              {image}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

interface ComparisonSectionProps {
  title: string;
  before: {
    label: string;
    content: React.ReactNode;
  };
  after: {
    label: string;
    content: React.ReactNode;
  };
  background?: 'white' | 'slate';
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  title,
  before,
  after,
  background = 'slate'
}) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-slate-50';

  return (
    <section className={`${bgClass} py-10 md:py-14 lg:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight md:tracking-tighter mb-10 md:mb-14 uppercase text-center text-brand leading-tight">
          {title}
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-16">
          <div>
            <div className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-wider mb-4 md:mb-6 text-center">
              {before.label}
            </div>
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border-2 border-slate-200 p-5 sm:p-6 md:p-8 lg:p-10">
              {before.content}
            </div>
          </div>

          <div>
            <div className="text-xs sm:text-sm font-black text-accentText uppercase tracking-wider mb-4 md:mb-6 text-center">
              {after.label}
            </div>
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border-2 border-slate-200 p-5 sm:p-6 md:p-8 lg:p-10">
              {after.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProcessFlowProps {
  title: string;
  steps: {
    label: string;
    content: React.ReactNode;
  }[];
  background?: 'white' | 'slate';
}

export const ProcessFlow: React.FC<ProcessFlowProps> = ({
  title,
  steps,
  background = 'white'
}) => {
  const bgClass = background === 'white' ? 'bg-white' : 'bg-slate-50';

  return (
    <section className={`${bgClass} py-10 md:py-14 lg:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight md:tracking-tighter mb-10 md:mb-14 uppercase text-center text-brand leading-tight">
          {title}
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-wider mb-4 md:mb-6">
                  {step.label}
                </div>
                {step.content}
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block">
                  <svg width="48" height="28" viewBox="0 0 56 32" fill="none" className="text-accent">
                    <path d="M0 16H54M54 16L42 4M54 16L42 28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}

              {index < steps.length - 1 && (
                <div className="lg:hidden">
                  <svg width="28" height="48" viewBox="0 0 32 56" fill="none" className="text-accent">
                    <path d="M16 0V54M16 54L4 42M16 54L28 42" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
