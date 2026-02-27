import { Mail, ArrowRight } from 'lucide-react';

interface InlineCTAProps {
  title: string;
  subtitle?: string;
  variant?: 'primary' | 'secondary';
}

export function InlineCTA({ title, subtitle, variant = 'primary' }: InlineCTAProps) {
  const scrollToSignup = () => {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (variant === 'secondary') {
    return (
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-8 lg:px-12 text-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand mb-6 leading-tight uppercase tracking-tighter">
            {title}
          </h3>
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-700 font-bold mb-8 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          <button
            onClick={scrollToSignup}
            className="px-8 py-4 rounded-brand bg-accent text-accentText font-black text-base uppercase tracking-widest hover:brightness-95 transition-all shadow-glow inline-flex items-center justify-center gap-3"
          >
            <Mail size={22} strokeWidth={2.5} />
            Join The Beta
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-brand to-slate-800 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-8 lg:px-12 text-center">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 font-bold mb-10 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToSignup}
            className="px-8 py-4 rounded-brand bg-accent text-accentText font-black text-base uppercase tracking-widest hover:brightness-95 transition-all shadow-glow flex items-center justify-center gap-3"
          >
            <Mail size={22} strokeWidth={2.5} />
            Get Early Access
          </button>
          <p className="text-base text-white/70 font-medium">
            Free • No credit card
          </p>
        </div>
      </div>
    </section>
  );
}
