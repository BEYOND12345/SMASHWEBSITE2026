import { useState, useEffect } from 'react';
import { Apple } from 'lucide-react';
import { APP_STORE_URL, IOS_CTA_LABEL } from '../data/download-urls';

export function SignupFAB() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.95;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 w-16 h-16 rounded-full bg-accent text-brand shadow-2xl flex items-center justify-center hover:brightness-95 active:scale-95 transition-all duration-300 z-50 lg:hidden ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}
      aria-label={IOS_CTA_LABEL}
    >
      <Apple size={28} strokeWidth={2.5} />
    </a>
  );
}
