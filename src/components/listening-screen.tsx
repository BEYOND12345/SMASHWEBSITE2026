import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export const ListeningScreen = () => {
  const [timer, setTimer] = useState(27);

  useEffect(() => {
    const interval = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-full pt-8 px-6 flex flex-col bg-white font-sans">
      <div className="flex justify-between items-center mb-16">
        <button className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wider">Cancel</button>
        <div className="flex items-center gap-0.5 font-black tracking-tight text-base">
          <span className="text-[#0F172A]">SMASH</span>
        </div>
        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
          <User size={14} />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center pt-4">
        <div className="relative w-40 h-40 mb-10">
          <div className="relative w-full h-full bg-[#1E293B] rounded-full flex items-center justify-center shadow-xl">
            <div className="flex items-end gap-1 h-10">
              {[0.4, 0.7, 1, 0.8, 0.5].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [`${h * 100}%`, `${h * 60}%`, `${h * 100}%`] }}
                  transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                  className="w-1.5 bg-[#D9F99D] rounded-full"
                />
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-xl font-black text-[#0F172A] uppercase tracking-tight mb-3">Listening...</h2>
        <div className="flex items-center gap-2 mb-16">
          <span className="text-3xl font-black text-[#0F172A] tracking-tight">{formatTime(timer)}</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">REC</span>
        </div>

        <div className="w-full px-2">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Live Hints</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Auto-Crafting</span>
            </div>
          </div>

          <div className="space-y-2.5">
            {['Job Address', 'Customer Name', 'Scope of Work', 'Materials Needed'].map((hint, i) => (
              <motion.div
                key={hint}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full border-2 border-slate-200 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">{hint}</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-slate-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
