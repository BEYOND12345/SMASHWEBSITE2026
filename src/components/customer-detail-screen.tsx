import React from 'react';
import { ChevronLeft, MoreVertical, Plus } from 'lucide-react';

const CUSTOMER = {
  name: 'SARAH WILLIAMS',
  email: 'SARAH.W@EXAMPLE.COM',
  phone: '+61 412 345 678',
  jobs: 12,
  revenue: '$14,250.00',
  lastJob: 'KITCHEN REPAIR'
};

const ACTIVITY = [
  { id: '1', title: 'KITCHEN FAUCET REPAIR', invoiceId: '882', date: 'OCT 23', amount: '$320.00', status: 'Paid' },
  { id: '2', title: 'BATHROOM TILING', invoiceId: '881', date: 'OCT 15', amount: '$1,200.00', status: 'Sent' },
];

export const CustomerDetailScreen = () => (
  <div className="pt-12 pb-32 px-6 bg-[#F8FAFC] h-full overflow-y-auto">
    <div className="flex justify-between items-center mb-6">
      <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
        <ChevronLeft size={18} className="text-[#0F172A]" />
      </button>
      <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
        <MoreVertical size={18} className="text-[#0F172A]" />
      </button>
    </div>

    <div className="text-center mb-6">
      <h1 className="text-2xl font-black text-[#0F172A] tracking-tight mb-1">{CUSTOMER.name}</h1>
      <div className="flex flex-col items-center gap-0.5">
        <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{CUSTOMER.email}</p>
        <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{CUSTOMER.phone}</p>
      </div>
    </div>

    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-50 mb-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center text-center">
          <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Jobs</span>
          <span className="text-xl font-black text-[#0F172A] tracking-tighter">{CUSTOMER.jobs}</span>
        </div>
        <div className="w-px h-8 bg-slate-100 self-center mx-auto" />
        <div className="flex flex-col items-center text-center">
          <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Revenue</span>
          <span className="text-xl font-black text-[#0F172A] tracking-tighter">{CUSTOMER.revenue}</span>
        </div>
      </div>
      <div className="h-px bg-slate-100 my-4" />
      <div className="flex justify-between items-center px-2">
        <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Last Job</span>
        <span className="text-sm font-black text-[#0F172A] tracking-tight">{CUSTOMER.lastJob}</span>
      </div>
    </div>

    <button className="w-full bg-[#0F172A] text-white font-black uppercase tracking-widest py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 mb-8">
      <Plus size={18} />
      New Quote
    </button>

    <div className="flex justify-between items-center mb-4 px-1">
      <span className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest">Recent Activity</span>
      <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{ACTIVITY.length} total</span>
    </div>

    <div className="space-y-3">
      {ACTIVITY.map((act) => (
        <div key={act.id} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-50">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-extrabold text-[#0F172A] text-[12px] tracking-tight leading-tight mb-0.5">{act.title}</h3>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                Invoice #{act.invoiceId}
              </p>
            </div>
            <div className={`px-2 py-0.5 rounded-full text-[8px] font-black tracking-widest uppercase ${
              act.status === 'Paid' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
            }`}>
              {act.status}
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{act.date}</span>
            <span className="text-md font-black text-[#0F172A] tracking-tighter">{act.amount}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CustomerDetailScreen;
