import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';

export const GeneratingScreen = () => {
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => (p < 100 ? p + 5 : 100));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full px-6 flex flex-col justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-8">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
            <circle
              cx="64" cy="64" r="58"
              fill="none" stroke="#F1F5F9" strokeWidth="4"
            />
            <motion.circle
              cx="64" cy="64" r="58"
              fill="none" stroke="#E2FF00" strokeWidth="4"
              strokeDasharray="364"
              animate={{ strokeDashoffset: 364 - (364 * progress / 100) }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-[#0F172A] rounded-full flex items-center justify-center shadow-xl">
              <Mic className="text-[#E2FF00]" size={28} />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-black text-[#0F172A] uppercase tracking-tight mb-3 text-center leading-none">Generating Estimate</h2>
        <p className="text-[12px] font-bold text-slate-300 uppercase tracking-[0.2em] text-center max-w-[280px] leading-relaxed mb-6">
          Turning voice into a professional document...
        </p>

        <div className="w-full">
          <div className="flex gap-1.5 mb-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`h-2.5 flex-1 rounded-full ${progress >= i * 20 ? 'bg-[#E2FF00]' : 'bg-slate-100'}`} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {[
              { label: 'Transcribing Audio', active: progress >= 25 },
              { label: 'Extracting Details', active: progress >= 50 },
              { label: 'Pricing Materials', active: progress >= 75 },
              { label: 'Building Document', active: progress >= 100 }
            ].map((phase, i) => (
              <div
                key={i}
                className={`p-3.5 rounded-xl border flex items-center h-14 transition-all ${
                  phase.active ? 'bg-white border-slate-100 shadow-sm' : 'bg-transparent border-slate-100 opacity-40'
                }`}
              >
                <span className="text-[10px] font-black text-[#0F172A] uppercase tracking-wider leading-tight">
                  {phase.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
