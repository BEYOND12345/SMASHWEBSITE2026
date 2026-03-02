import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MessageSquare, ShieldCheck } from 'lucide-react';

const PortalContent = () => (
  <div className="flex-1 pt-12">
    <div className="p-4">
      <div className="bg-white p-8 rounded-[32px] border-2 border-slate-100 shadow-xl relative overflow-hidden">
        <div className="flex justify-between items-start mb-10">
          <div className="w-16 h-16 bg-[#0F172A] text-white flex items-center justify-center font-black text-2xl rounded-2xl shadow-lg">JS</div>
          <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full bg-[#E2FF00] text-[#0F172A]">
            Payment Due
          </span>
        </div>

        <div className="space-y-2 mb-10">
          <h2 className="text-[12px] font-black uppercase tracking-widest text-slate-400">Invoice #5678</h2>
          <h1 className="text-5xl font-black text-[#0F172A] tracking-tighter uppercase">$1,375.00</h1>
          <p className="text-sm font-bold text-slate-500">Due by May 15, 2024</p>
        </div>

        <button className="w-full h-16 bg-[#0F172A] text-white font-black uppercase tracking-widest text-[12px] rounded-2xl shadow-lg flex items-center justify-center gap-3">
          Pay Now
          <ArrowRight size={18} />
        </button>

        <div className="mt-8 pt-8 border-t border-slate-50 flex justify-between">
          <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <Download size={14} /> PDF
          </button>
          <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <MessageSquare size={14} /> Contact
          </button>
        </div>
      </div>
    </div>

    <div className="px-4 mb-6">
      <div className="bg-[#0F172A] p-6 rounded-[24px] text-white flex items-center gap-4 border border-white/5 shadow-lg">
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#E2FF00]">
          <ShieldCheck size={24} />
        </div>
        <div>
          <p className="text-[11px] font-black uppercase tracking-widest mb-0.5">Secure Transaction</p>
          <p className="text-[10px] font-medium opacity-50 uppercase tracking-widest leading-none">256-Bit SSL Encrypted</p>
        </div>
      </div>
    </div>

    <div className="px-4 mb-12">
      <div className="bg-white p-8 border-2 border-slate-100 rounded-[32px] shadow-sm">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-5 bg-[#E2FF00] rounded-full"></div>
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-300">Confidential Breakdown</h3>
        </div>

        <div className="mb-10">
          <h4 className="text-2xl font-black text-[#0F172A] tracking-tighter uppercase leading-tight">Install Custom Kitchen Shelving</h4>
          <p className="text-sm font-medium text-slate-400 mt-3 leading-relaxed">
            Installation of custom heavy-duty shelving units in main kitchen area, including material sourcing and structural reinforcement for masonry walls.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-[0.2em] text-slate-300 border-b border-slate-50 pb-4">
            <span>Description</span>
            <span>Line Total</span>
          </div>
          <div className="flex justify-between items-center text-[14px]">
            <span className="font-bold text-slate-700 italic">Materials (Premium Hardwood)</span>
            <span className="font-black tabular-nums text-[#0F172A]">$850.00</span>
          </div>
          <div className="flex justify-between items-center text-[14px]">
            <span className="font-bold text-slate-700 italic">Labour (Senior Carpenter)</span>
            <span className="font-black tabular-nums text-[#0F172A]">$450.00</span>
          </div>
          <div className="flex justify-between items-center text-[14px]">
            <span className="font-bold text-slate-700 italic">Waste Removal & Site Clear</span>
            <span className="font-black tabular-nums text-[#0F172A]">$75.00</span>
          </div>

          <div className="pt-8 border-t-4 border-[#0F172A]">
            <div className="flex justify-between items-center font-black text-3xl tracking-tighter uppercase text-[#0F172A]">
              <span className="text-[11px] tracking-widest text-slate-400 mt-2">Amount due</span>
              <span className="tabular-nums">$1,375.00</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-50 space-y-4">
          <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Payment Conditions</h5>
          <div className="space-y-2 opacity-60">
            <p className="text-[10px] font-bold text-[#0F172A] leading-relaxed uppercase">01. Direct deposit or Secure card processing available.</p>
            <p className="text-[10px] font-bold text-[#0F172A] leading-relaxed uppercase">02. Late fees apply after 30 days of invoice date.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const PortalScreen = () => (
  <div className="flex-1 flex flex-col bg-[#F8F9FB] text-[#1A1D21] h-full overflow-hidden">
    <motion.div
      animate={{ y: [0, -1000] }}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: "linear"
      }}
    >
      <PortalContent />
      <PortalContent />
    </motion.div>
  </div>
);

export default PortalScreen;
