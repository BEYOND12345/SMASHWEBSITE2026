import React from 'react';

export function ScannerScreen() {
  return (
    <div className="h-full flex flex-col p-8 pt-32 bg-white text-[#0F172A] relative">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-black tracking-tighter uppercase leading-[0.95] mb-6">
          Set up pricing in 30 seconds
        </h2>
        <p className="text-xs font-medium text-slate-500 leading-relaxed px-2">
          Upload 1–3 of your old invoices and we'll learn how you price your work. Every quote will match your style automatically.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 pb-8">
        <button className="w-full h-16 rounded-[24px] bg-[#E2FF00] text-[#0F172A] font-black uppercase tracking-widest text-[10px] shadow-xl shadow-[#E2FF00]/30">
          Upload Invoices
        </button>

        <button className="text-[10px] font-black text-slate-300 uppercase tracking-[0.15em]">
          Skip for now — I'll set up manually
        </button>

        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center leading-relaxed max-w-[240px]">
          We only read pricing. Customer details are never stored.
        </p>
      </div>
    </div>
  );
}
