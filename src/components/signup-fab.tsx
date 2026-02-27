import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

export function SignupFAB() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.95;
      const signupForm = document.getElementById('signup-form');
      const signupTop = signupForm?.getBoundingClientRect().top || 0;

      setIsVisible(window.scrollY > heroHeight && signupTop > 100);
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
    <button
      onClick={scrollToSignup}
      className={`fixed bottom-6 right-6 w-16 h-16 rounded-full bg-accent text-accentText shadow-2xl flex items-center justify-center hover:brightness-95 active:scale-95 transition-all duration-300 z-50 lg:hidden ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}
      aria-label="Sign up for beta access"
    >
      <Mail size={28} strokeWidth={2.5} />
    </button>
  );
}
