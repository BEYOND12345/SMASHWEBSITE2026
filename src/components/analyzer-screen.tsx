import React from 'react';
import { motion } from 'framer-motion';

export function AnalyzerScreen() {
  return (
    <div className="h-full flex flex-col justify-center px-8 bg-white text-[#0F172A]">
      <div className="flex flex-col items-center">
        <div className="relative w-full aspect-[3/4] bg-slate-50 rounded-3xl border-2 border-slate-100 overflow-hidden mb-8">
          <motion.div
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute left-0 right-0 h-1 bg-[#E2FF00] shadow-[0_0_15px_rgba(226,255,0,0.8)] z-10"
          />

          <div className="absolute top-[20%] left-6 right-6 h-6 bg-[#E2FF00]/10 border border-[#E2FF00]/30 rounded animate-pulse" />
          <div className="absolute top-[35%] left-10 right-12 h-6 bg-[#E2FF00]/10 border border-[#E2FF00]/30 rounded animate-pulse" />
          <div className="absolute top-[55%] left-8 right-16 h-6 bg-[#E2FF00]/10 border border-[#E2FF00]/30 rounded animate-pulse" />

          <div className="p-6 space-y-4 opacity-20">
            <div className="h-4 w-1/3 bg-slate-300 rounded" />
            <div className="space-y-2">
              <div className="h-2 w-full bg-slate-200 rounded" />
              <div className="h-2 w-full bg-slate-200 rounded" />
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-black tracking-tighter uppercase mb-2">Analyzing Data</h3>
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Extracting line items...</p>
      </div>
    </div>
  );
}
