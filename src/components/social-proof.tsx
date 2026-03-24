import { useState, useEffect } from 'react';
import { Users, CheckCircle, TrendingUp } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function SocialProof() {
  const [signupCount, setSignupCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchSignupCount = async () => {
      const { count, error } = await supabase
        .from('beta_signups')
        .select('*', { count: 'exact', head: true });

      if (!error && count !== null) {
        setSignupCount(count);
      }
    };

    fetchSignupCount();
  }, []);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-slate-200">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <Users className="text-brand" size={32} strokeWidth={2.5} />
          </div>
          <div className="text-4xl font-black text-brand mb-2">
            {signupCount !== null ? `${signupCount}+` : '100+'}
          </div>
          <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">
            Early Users
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <CheckCircle className="text-brand" size={32} strokeWidth={2.5} />
          </div>
          <div className="text-4xl font-black text-brand mb-2">
            100%
          </div>
          <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">
            Free to Start
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <TrendingUp className="text-brand" size={32} strokeWidth={2.5} />
          </div>
          <div className="text-4xl font-black text-brand mb-2">
            4X
          </div>
          <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">
            Faster Quoting
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-slate-200">
        <div className="flex items-center justify-center gap-4 text-sm text-slate-600 font-semibold">
          <div className="flex -space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-3 border-white shadow-lg flex items-center justify-center text-white font-bold text-lg">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="SMASH user"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-3 border-white shadow-lg flex items-center justify-center text-white font-bold text-lg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="SMASH user"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 border-3 border-white shadow-lg flex items-center justify-center text-white font-bold text-lg">
              <img
                src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="SMASH user"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 border-3 border-white shadow-lg flex items-center justify-center text-white font-bold text-lg">
              <img
                src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="SMASH user"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <p>Electricians, plumbers, and builders testing now</p>
        </div>
      </div>
    </div>
  );
}
