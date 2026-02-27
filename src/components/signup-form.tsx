import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Mail, User, Phone, MessageSquare } from 'lucide-react';

export function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    trade_type: '',
    quotes_per_week: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('beta_signups')
        .insert([
          {
            email: formData.email,
            name: formData.name || null,
            phone: formData.phone || null,
            trade_type: formData.trade_type || null,
            quotes_per_week: formData.quotes_per_week || null,
            message: formData.message || null
          }
        ]);

      if (error) {
        console.error('Supabase insert error:', error);
        if (error.code === '23505') {
          setErrorMessage('This email is already registered for early access.');
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
              'Authorization': `Bearer ${supabaseKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
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
        setFormData({ email: '', name: '', phone: '', trade_type: '', quotes_per_week: '', message: '' });
      }
    } catch (err) {
      console.error('Signup form error:', err);
      setErrorMessage(`Error: ${err instanceof Error ? err.message : 'Something went wrong. Please try again.'}`);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div id="signup-form" className="bg-accent py-24 lg:py-32 px-8 lg:px-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-7 text-accentText uppercase leading-tight">
            Get Early Access
          </h2>
          <p className="text-xl md:text-2xl text-accentText/90 font-bold leading-relaxed">
            Try the app on real jobs. Give us feedback. That's it.
          </p>
        </div>

        {submitStatus === 'success' ? (
          <div className="bg-brand border-2 border-brand rounded-3xl p-12">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mx-auto mb-6">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-brand">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 text-center leading-tight">You're In!</h3>

            <div className="space-y-6 text-white/90 font-semibold max-w-xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-black text-white mb-3 uppercase tracking-wide">What Happens Next:</h4>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-black text-lg">1.</span>
                    <span>Check your email within 24-48 hours for access details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-black text-lg">2.</span>
                    <span>Download the app and start using it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-black text-lg">3.</span>
                    <span>Test it on your real jobs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-black text-lg">4.</span>
                    <span>Tell us what works and what does not</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a href="mailto:dan@smahinvoices.com" className="text-accent font-black text-lg hover:text-accent/80 transition-colors">
                  Questions? dan@smahinvoices.com
                </a>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label htmlFor="email" className="block text-base font-black text-accentText mb-3 uppercase tracking-wider">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-5 py-4 rounded-brand border-2 border-slate-900/20 focus:border-brand focus:outline-none text-slate-900 font-semibold bg-white shadow-sm"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-base font-black text-accentText mb-3 uppercase tracking-wider">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-5 py-4 rounded-brand border-2 border-slate-900/20 focus:border-brand focus:outline-none text-slate-900 font-semibold bg-white shadow-sm"
                  placeholder="John Smith"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-base font-black text-accentText mb-3 uppercase tracking-wider">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-5 py-4 rounded-brand border-2 border-slate-900/20 focus:border-brand focus:outline-none text-slate-900 font-semibold bg-white shadow-sm"
                  placeholder="+61 400 000 000"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-7">
              <div>
                <label htmlFor="trade_type" className="block text-base font-black text-accentText mb-3 uppercase tracking-wider">
                  Trade Type *
                </label>
                <select
                  id="trade_type"
                  name="trade_type"
                  value={formData.trade_type}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-brand border-2 border-slate-900/20 focus:border-brand focus:outline-none text-slate-900 font-semibold bg-white shadow-sm appearance-none"
                >
                  <option value="">Select your trade</option>
                  <option value="electrician">Electrician</option>
                  <option value="plumber">Plumber</option>
                  <option value="carpenter">Carpenter</option>
                  <option value="builder">Builder</option>
                  <option value="landscaper">Landscaper</option>
                  <option value="painter">Painter</option>
                  <option value="hvac">HVAC</option>
                  <option value="roofing">Roofing</option>
                  <option value="concrete">Concrete</option>
                  <option value="flooring">Flooring</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="quotes_per_week" className="block text-base font-black text-accentText mb-3 uppercase tracking-wider">
                  Quotes Per Week *
                </label>
                <select
                  id="quotes_per_week"
                  name="quotes_per_week"
                  value={formData.quotes_per_week}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-brand border-2 border-slate-900/20 focus:border-brand focus:outline-none text-slate-900 font-semibold bg-white shadow-sm appearance-none"
                >
                  <option value="">Select range</option>
                  <option value="1-5">1-5 quotes/week</option>
                  <option value="6-10">6-10 quotes/week</option>
                  <option value="11-20">11-20 quotes/week</option>
                  <option value="20+">20+ quotes/week</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-base font-black text-accentText mb-3 uppercase tracking-wider">
                Tell Us About Your Work
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-5 text-slate-500" size={20} />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-12 pr-5 py-4 rounded-brand border-2 border-slate-900/20 focus:border-brand focus:outline-none text-slate-900 font-semibold resize-none bg-white shadow-sm"
                  placeholder="What trade are you in? How many quotes do you send per week?"
                />
              </div>
            </div>

            {submitStatus === 'error' && (
              <div className="bg-red-600 border-2 border-red-700 rounded-3xl p-6 text-center">
                <p className="text-white font-bold text-lg leading-snug">{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-5 rounded-brand bg-brand text-white font-black text-base uppercase tracking-widest hover:bg-brand/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
            >
              {isSubmitting ? 'Signing Up...' : 'Get Early Access'}
            </button>

            <p className="text-base text-accentText/90 text-center font-bold leading-relaxed pt-2">
              No spam. Just updates about early access and new features.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
