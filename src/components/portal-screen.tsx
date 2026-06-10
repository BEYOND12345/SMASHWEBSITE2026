import { ShieldCheck } from 'lucide-react';

export const PortalScreen = () => (
  <div className="h-full w-full px-6 py-12 box-border bg-[#F8F9FB] text-[#1A1D21] overflow-hidden flex flex-col justify-center">
    <div className="bg-white p-7 rounded-[32px] border-2 border-slate-100 shadow-xl">
      <div className="flex justify-between items-start mb-8">
        <div className="w-14 h-14 bg-[#0F172A] text-white flex items-center justify-center font-black text-xl rounded-2xl shadow-lg">JS</div>
        <span className="px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full bg-[#E2FF00] text-[#0F172A]">
          Payment Due
        </span>
      </div>

      <div className="space-y-2 mb-8">
        <h2 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Invoice #5678</h2>
        <h1 className="text-4xl font-black text-[#0F172A] tracking-tighter uppercase">$1,375.00</h1>
        <p className="text-xs font-bold text-slate-500">Due by May 15, 2024</p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-[0.18em] text-slate-300 border-b border-slate-100 pb-3">
          <span>Description</span>
          <span>Line Total</span>
        </div>
        <div className="flex justify-between items-center text-[13px]">
          <span className="font-bold text-slate-700 italic">Materials</span>
          <span className="font-black tabular-nums text-[#0F172A]">$850.00</span>
        </div>
        <div className="flex justify-between items-center text-[13px]">
          <span className="font-bold text-slate-700 italic">Labour</span>
          <span className="font-black tabular-nums text-[#0F172A]">$450.00</span>
        </div>
        <div className="pt-5 border-t-4 border-[#0F172A]">
          <div className="flex justify-between items-center font-black tracking-tighter uppercase text-[#0F172A]">
            <span className="text-[10px] tracking-widest text-slate-400">Amount due</span>
            <span className="text-2xl tabular-nums">$1,375.00</span>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-5 bg-[#0F172A] p-5 rounded-[24px] text-white flex items-center gap-4 border border-white/5 shadow-lg">
      <div className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-[#E2FF00] shrink-0">
        <ShieldCheck size={22} />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-black uppercase tracking-widest mb-0.5">Secure Transaction</p>
        <p className="text-[9px] font-medium opacity-50 uppercase tracking-widest leading-none">256-Bit SSL Encrypted</p>
      </div>
    </div>
  </div>
);

export default PortalScreen;
