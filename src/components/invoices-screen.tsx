import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, User, Eye, EyeOff } from 'lucide-react';

const INVOICES = [
  { id: '1', title: 'FULL DECK RENOVATION', customer: 'SARAH JOHNSON', amount: '$9,350.00', date: '25 JAN', status: 'OVERDUE', seenCount: 2, initials: 'FD' },
  { id: '2', title: 'KITCHEN PLUMBING REPAIRS', customer: 'DAVID CHEN', amount: '$533.50', date: '10 FEB', status: 'PAID', seenCount: 3, initials: 'KP' },
  { id: '3', title: 'FRONT DOOR REPLACEMENT', customer: 'EMMA WILSON', amount: '$1,375.00', date: '25 FEB', status: 'OVERDUE', initials: 'FD' },
  { id: '4', title: 'FENCE PANEL REPAIRS', customer: 'JENNIFER MARTINEZ', amount: '$748.00', date: '18 MAR', status: 'PAID', seenCount: 1, initials: 'FP' },
];

const InvoiceCard = ({ inv }: { inv: typeof INVOICES[number] }) => (
  <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-50 shrink-0">
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-4">
        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center font-bold text-[#0F172A] text-lg">
          {inv.initials}
        </div>
        <div>
          <h3 className="font-extrabold text-[#0F172A] text-sm leading-tight mb-1 uppercase tracking-tight">
            {inv.title}
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            {inv.customer}
          </p>
        </div>
      </div>
      <div className={`px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase ${
        inv.status === 'PAID' ? 'bg-[#0F172A] text-[#E2FF00]' : 'bg-[#0F172A] text-white'
      }`}>
        {inv.status}
      </div>
    </div>

    <div className="flex justify-between items-center mt-6">
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{inv.date}</span>
        <div className="flex items-center gap-1.5">
          {inv.seenCount ? (
            <>
              <Eye size={12} className="text-[#0F172A]" />
              <span className="text-[9px] font-black text-[#0F172A] uppercase tracking-widest">SEEN {inv.seenCount}X</span>
            </>
          ) : (
            <>
              <EyeOff size={12} className="text-rose-400" />
              <span className="text-[9px] font-black text-rose-400 uppercase tracking-widest">NOT SEEN</span>
            </>
          )}
        </div>
      </div>
      <span className="text-xl font-extrabold text-[#0F172A] tracking-tighter">{inv.amount}</span>
    </div>
  </div>
);

const duplicatedInvoices = [...INVOICES, ...INVOICES, ...INVOICES, ...INVOICES];

export const InvoicesScreen = () => {
  return (
    <div className="pt-14 pb-32 px-6 bg-[#F8FAFC] h-full flex flex-col overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-0.5 font-extrabold tracking-tighter text-xl">
          <span className="text-[#0F172A]">SMASH</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#E2FF00] mt-1" />
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
          <User size={20} className="text-slate-600" />
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search by name, job, invoice #..."
            className="w-full bg-white rounded-2xl py-3.5 pl-12 pr-4 text-sm border border-slate-100 shadow-sm focus:outline-none"
          />
        </div>
        <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
          <Filter size={20} className="text-slate-600" />
        </button>
      </div>

      <div className="flex-1 relative overflow-hidden">
        <motion.div
          animate={{ y: [0, -600] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
          className="space-y-4"
        >
          {duplicatedInvoices.map((inv, idx) => (
            <InvoiceCard key={`${inv.id}-${idx}`} inv={inv} />
          ))}
        </motion.div>

        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#F8FAFC]/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F8FAFC]/50 to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default InvoicesScreen;
