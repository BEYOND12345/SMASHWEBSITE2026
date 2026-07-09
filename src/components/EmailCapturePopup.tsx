import { useEffect, useRef, useState } from 'react';
import { X, Check } from 'lucide-react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Props = {
  source?: string;
  open: boolean;
  onClose: () => void;
};

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export function EmailCapturePopup({ source = 'landing_popup', open, onClose }: Props) {
  const [email, setEmail] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setSubmitState('idle');
      setErrorMessage('');
      setCopied(false);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const validateEmail = (value: string): string | null => {
    const trimmed = value.trim();
    if (!trimmed) return 'Please enter your email.';
    if (!EMAIL_REGEX.test(trimmed)) return 'Please enter a valid email address.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateEmail(email);
    if (validationError) {
      setErrorMessage(validationError);
      setSubmitState('error');
      return;
    }

    setSubmitState('submitting');
    setErrorMessage('');

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    try {
      const response = await fetch(`${supabaseUrl}/functions/v1/issue-waitlist-promo`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim(), source }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        const message =
          result.error === 'Invalid email address'
            ? 'Please enter a valid email address.'
            : result.error || 'Something went wrong. Please try again.';
        setErrorMessage(message);
        setSubmitState('error');
        return;
      }

      setPromoCode(result.promo_code);
      setSubmitState('success');
    } catch {
      setErrorMessage('Network error. Check your connection and try again.');
      setSubmitState('error');
    }
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(promoCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — code remains visible */
    }
  };

  const handleScrimClick = (e: React.MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70"
      role="dialog"
      aria-modal="true"
      aria-labelledby="offer-popup-headline"
      onClick={handleScrimClick}
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-md bg-black text-white rounded-[32px] px-6 py-8 sm:px-8 sm:py-10"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors touch-manipulation"
          aria-label="Close"
        >
          <X size={20} strokeWidth={2} />
        </button>

        {submitState === 'success' ? (
          <div className="text-center pt-2">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3">
              LIMITED OFFER
            </p>
            <h2
              id="offer-popup-headline"
              className="font-display uppercase tracking-tighter leading-[0.88] text-4xl lg:text-5xl text-white mb-4"
            >
              YOU&apos;RE IN.
            </h2>
            <p className="font-body text-base text-slate-400 mb-6">
              Enter this code in the app to unlock your free month.
            </p>
            <p className="font-display text-3xl text-accent mb-6 tracking-wider">{promoCode}</p>
            <button
              type="button"
              onClick={handleCopyCode}
              className="w-full py-4 bg-accent text-brand font-display uppercase tracking-widest rounded-2xl hover:bg-accentDark transition-colors touch-manipulation flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check size={18} strokeWidth={2.5} />
                  Copied
                </>
              ) : (
                'Copy Code'
              )}
            </button>
          </div>
        ) : (
          <>
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3">
              LIMITED OFFER
            </p>
            <h2
              id="offer-popup-headline"
              className="font-display uppercase tracking-tighter leading-[0.88] text-4xl lg:text-5xl text-white mb-3 pr-8"
            >
              GET ONE MONTH FREE.
            </h2>
            <p className="font-body text-base text-slate-400 mb-6">
              Unlimited invoicing. Hands-free, voice-first. No card required.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <input
                ref={inputRef}
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (submitState === 'error') {
                    setSubmitState('idle');
                    setErrorMessage('');
                  }
                }}
                placeholder="Enter your email"
                autoComplete="email"
                disabled={submitState === 'submitting'}
                className="w-full px-4 py-3.5 rounded-2xl bg-white text-brand font-body text-base placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-60"
              />

              {submitState === 'error' && errorMessage && (
                <p className="text-red-400 font-body text-sm mt-2">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={submitState === 'submitting'}
                className="w-full mt-4 py-4 bg-accent text-brand font-display uppercase tracking-widest rounded-2xl hover:bg-accentDark transition-colors disabled:opacity-60 disabled:cursor-not-allowed touch-manipulation"
              >
                {submitState === 'submitting' ? 'Sending…' : 'GET MY CODE'}
              </button>
            </form>

            <p className="font-body text-sm text-slate-400 text-center mt-4">
              We&apos;ll never spam you. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
