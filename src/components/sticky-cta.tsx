import { useState, useEffect } from 'react';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.95;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSignup = () => {
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="bg-brand/95 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-xl font-black tracking-tight text-white">
              SMASH<span className="text-accent text-3xl leading-none align-baseline">.</span>
            </div>
            <div className="hidden md:block text-sm text-white/80 font-bold">
              Describe the job. Get paid. That's it.
            </div>
          </div>
          <button
            onClick={scrollToSignup}
            className="px-6 py-2.5 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-wide hover:brightness-95 transition-all shadow-glow flex items-center gap-2"
          >
            Start Free
          </button>
        </div>
      </div>
    </div>
  );
}
