import React from 'react';
import { Search, Filter, Eye, EyeOff } from 'lucide-react';

const ESTIMATES = [
  { id: '1', title: 'REPLACE GARAGE DOOR', customer: 'ALEX JOHNSON', amount: '$1,250.00', date: 'OCT 24', status: 'SENT', seenCount: 2, initials: 'AJ' },
  { id: '2', title: 'KITCHEN FAUCET REPAIR', customer: 'SARAH WILLIAMS', amount: '$320.00', date: 'OCT 23', status: 'APPROVED', seenCount: 5, initials: 'SW' },
  { id: '3', title: 'GARDEN FENCE INSTALL', customer: 'MIKE PETERS', amount: '$2,800.00', date: 'OCT 22', status: 'DRAFT', initials: 'MP' },
  { id: '4', title: 'BATHROOM RENOVATION', customer: 'EMMA DAVIS', amount: '$5,400.00', date: 'OCT 21', status: 'APPROVED', seenCount: 8, initials: 'ED' },
  { id: '5', title: 'ROOF LEAK REPAIR', customer: 'TOM BAKER', amount: '$980.00', date: 'OCT 20', status: 'SENT', seenCount: 1, initials: 'TB' },
  { id: '6', title: 'DECK RESTORATION', customer: 'LISA CHEN', amount: '$3,200.00', date: 'OCT 19', status: 'DRAFT', initials: 'LC' },
];

const EstimateCard = ({ est }: { est: typeof ESTIMATES[number] }) => (
  <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-50 shrink-0">
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-4">
        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center font-bold text-[#0F172A] text-lg">
          {est.initials}
        </div>
        <div>
          <h3 className="font-extrabold text-[#0F172A] text-sm leading-tight mb-1 uppercase tracking-tight">
            {est.title}
          </h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            {est.customer}
          </p>
        </div>
      </div>
      <div className={`px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase ${
        est.status === 'APPROVED' ? 'bg-[#0F172A] text-[#E2FF00]' : 'bg-[#0F172A] text-white'
      }`}>
        {est.status}
      </div>
    </div>

    <div className="flex justify-between items-center mt-6">
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{est.date}</span>
        <div className="flex items-center gap-1.5">
          {est.seenCount ? (
            <>
              <Eye size={12} className="text-[#0F172A]" />
              <span className="text-[9px] font-black text-[#0F172A] uppercase tracking-widest">SEEN {est.seenCount}X</span>
            </>
          ) : (
            <>
              <EyeOff size={12} className="text-rose-400" />
              <span className="text-[9px] font-black text-rose-400 uppercase tracking-widest">NOT SEEN</span>
            </>
          )}
        </div>
      </div>
      <span className="text-xl font-extrabold text-[#0F172A] tracking-tighter">{est.amount}</span>
    </div>
  </div>
);

export const EstimatesScreen = () => {
  return (
    <div className="pt-14 pb-32 px-6 bg-[#F8FAFC] min-h-full overflow-hidden">
      <div className="mb-6" />

      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search by name, job, or address..."
            className="w-full bg-white rounded-2xl py-3.5 pl-12 pr-4 text-sm border border-slate-100 shadow-sm focus:outline-none"
          />
        </div>
        <button className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
          <Filter size={20} className="text-slate-600" />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {ESTIMATES.slice(0, 4).map((est) => (
          <EstimateCard key={est.id} est={est} />
        ))}
      </div>
    </div>
  );
};

export default EstimatesScreen;
