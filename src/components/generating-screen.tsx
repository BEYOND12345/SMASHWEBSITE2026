import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mic } from 'lucide-react';

export const GeneratingScreen = () => {
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => (p < 100 ? p + 5 : 100));
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full pt-14 px-6 flex flex-col bg-white">
      <div className="flex justify-between items-center mb-12">
        <button className="text-[11px] font-black text-[#0F172A] uppercase tracking-widest">Cancel</button>
        <div className="flex items-center gap-0.5 font-extrabold tracking-tighter text-xl">
          <span className="text-[#0F172A]">SMASH</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#E2FF00] mt-1" />
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
          <User size={20} className="text-slate-600" />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center pt-12">
        <div className="relative w-40 h-40 mb-16">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="80" cy="80" r="70"
              fill="none" stroke="#F1F5F9" strokeWidth="4"
            />
            <motion.circle
              cx="80" cy="80" r="70"
              fill="none" stroke="#E2FF00" strokeWidth="4"
              strokeDasharray="440"
              animate={{ strokeDashoffset: 440 - (440 * progress / 100) }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-[#0F172A] rounded-full flex items-center justify-center shadow-xl">
              <Mic className="text-[#E2FF00]" size={32} />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-black text-[#0F172A] uppercase tracking-tight mb-3 text-center">Generating Estimate</h2>
        <p className="text-[11px] font-bold text-slate-300 uppercase tracking-[0.2em] text-center max-w-[240px] leading-relaxed mb-4">
          Turning voice into a professional document...
        </p>

        <div className="w-full mt-12">
          <div className="flex gap-1 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`h-2 flex-1 rounded-full ${progress >= i * 20 ? 'bg-[#E2FF00]' : 'bg-slate-100'}`} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Transcribing Audio', active: progress >= 25 },
              { label: 'Extracting Details', active: progress >= 50 },
              { label: 'Pricing Materials', active: progress >= 75 },
              { label: 'Building Document', active: progress >= 100 }
            ].map((phase, i) => (
              <div
                key={i}
                className={`p-4 rounded-2xl border flex flex-col justify-between h-20 transition-all ${
                  phase.active ? 'bg-white border-slate-100 shadow-sm' : 'bg-transparent border-slate-100 opacity-40'
                }`}
              >
                <span className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest leading-tight">
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
