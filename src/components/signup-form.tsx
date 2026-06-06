import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Mail, Apple } from 'lucide-react';
import { APP_STORE_URL, IOS_CTA_LABEL } from '../data/download-urls';

export function SignupForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const source = typeof window !== 'undefined' ? window.location.pathname : 'unknown';
    const payload = {
      email,
      name: null,
      phone: null,
      trade_type: null,
      quotes_per_week: null,
      message: null,
      source,
    };

    try {
      const { error } = await supabase.from('beta_signups').insert([payload]);

      if (error) {
        console.error('Supabase insert error:', error);
        if (error.code === '23505') {
          setErrorMessage('This email is already registered.');
        } else {
          setErrorMessage(`Error: ${error.message || 'Something went wrong. Please try again.'}`);
        }
        setSubmitStatus('error');
      } else {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        try {
          const response = await fetch(`${supabaseUrl}/functions/v1/send-signup-notification`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${supabaseKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });

          const result = await response.json();
          console.log('Email notification response:', result);

          if (!response.ok) {
            console.error('Email notification failed with status:', response.status, result);
          }
        } catch (err) {
          console.error('Email notification error:', err);
        }

        setSubmitStatus('success');
        setEmail('');
      }
    } catch (err) {
      console.error('Signup form error:', err);
      setErrorMessage(`Error: ${err instanceof Error ? err.message : 'Something went wrong. Please try again.'}`);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="signup-form" className="bg-accent py-20 md:py-28 px-6 lg:px-12">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 text-brand uppercase leading-[0.88]">
          Get SMASH on your iPhone
        </h2>
        <p className="text-lg md:text-xl text-brand/90 font-medium leading-[1.3] mb-8">
          Live on the App Store. Free to start — no credit card required.
        </p>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-[32px] bg-brand text-white font-black text-base uppercase tracking-widest hover:brightness-110 transition-all shadow-xl"
        >
          <Apple size={22} strokeWidth={2.5} />
          {IOS_CTA_LABEL}
        </a>

        {submitStatus === 'success' ? (
          <div className="mt-10 rounded-3xl bg-brand/10 border-2 border-brand/20 px-6 py-8">
            <p className="text-brand font-black text-lg uppercase tracking-wide mb-2">You&apos;re on the list</p>
            <p className="text-brand/80 font-medium text-base">
              We&apos;ll email you when new features ship. Download the app above to start invoicing today.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 pt-10 border-t border-brand/20">
            <p className="text-sm font-black text-brand/70 uppercase tracking-wider mb-4">
              Get product updates
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-[32px] border-2 border-slate-900/20 focus:border-brand focus:outline-none text-slate-900 font-semibold bg-white shadow-sm text-base"
                  placeholder="your@email.com"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3.5 rounded-[32px] bg-brand text-white font-black text-sm uppercase tracking-widest hover:bg-brand/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                {isSubmitting ? 'Sending…' : 'Subscribe'}
              </button>
            </div>

            {submitStatus === 'error' && (
              <p className="mt-4 text-red-700 font-semibold text-sm">{errorMessage}</p>
            )}

            <p className="mt-4 text-sm text-brand/60 font-medium">
              No spam. Just product updates.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
