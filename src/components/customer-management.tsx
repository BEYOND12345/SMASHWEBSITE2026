import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronLeft, MoreVertical, Plus, User } from 'lucide-react';

const CUSTOMERS = [
  { id: '1', name: 'Anthony Russo', email: 'anthony.r@outlook.com', phone: '+61 411 222 333', initials: 'AR', jobs: 3, revenue: '$4,250.00', lastJob: '12 Jan' },
  { id: '2', name: 'Sarah Johnson', email: 'sarah.johnson@gmail.com', phone: '+61 423 456 789', initials: 'SJ', jobs: 2, revenue: '$18,447.00', lastJob: '28 Oct' },
  { id: '3', name: 'David Chen', email: 'dchen88@outlook.com', phone: '+61 455 666 777', initials: 'DC', jobs: 5, revenue: '$12,100.00', lastJob: '15 Feb' },
  { id: '4', name: 'Emma Wilson', email: 'emma.w@gmail.com', phone: '+61 488 999 000', initials: 'EW', jobs: 1, revenue: '$1,375.00', lastJob: '25 Feb' },
  { id: '5', name: 'Jennifer Martinez', email: 'jen.martinez@hotmail.com', phone: '+61 433 444 555', initials: 'JM', jobs: 4, revenue: '$7,800.00', lastJob: '18 Mar' }
];

export const CustomerManagement = () => {
  const [view, setView] = useState<'list' | 'detail'>('detail');
  const [selectedId, setSelectedId] = useState('2');

  const customer = CUSTOMERS.find(c => c.id === selectedId) || CUSTOMERS[0];

  if (view === 'detail') {
    return (
      <div className="pt-12 pb-32 px-6 bg-[#F8FAFC] min-h-screen font-sans">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => setView('list')} className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100 text-[#0F172A]">
            <ChevronLeft size={18} />
          </button>
          <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100 text-[#0F172A]">
            <MoreVertical size={18} />
          </button>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-2xl font-black text-[#0F172A] tracking-tight mb-1">{customer.name}</h1>
          <div className="flex flex-col items-center gap-0.5">
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{customer.email}</p>
            <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">{customer.phone}</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-50 mb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center">
              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Jobs</span>
              <span className="text-xl font-black text-[#0F172A] tracking-tighter">{customer.jobs}</span>
            </div>
            <div className="w-px h-8 bg-slate-100 self-center mx-auto" />
            <div className="flex flex-col items-center text-center">
              <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Revenue</span>
              <span className="text-xl font-black text-[#0F172A] tracking-tighter">{customer.revenue}</span>
            </div>
          </div>
          <div className="h-px bg-slate-100 my-4" />
          <div className="flex justify-between items-center px-2">
            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Last Job</span>
            <span className="text-sm font-black text-[#0F172A] tracking-tight">{customer.lastJob}</span>
          </div>
        </div>

        <button className="w-full bg-[#0F172A] text-white font-black uppercase tracking-widest py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 mb-8">
          <Plus size={18} />
          New Quote
        </button>

        <div className="flex justify-between items-center mb-4 px-1">
          <span className="text-[10px] font-black text-[#0F172A] uppercase tracking-widest">Recent Activity</span>
          <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">3 total</span>
        </div>

        <div className="space-y-3">
          {[
            { id: '1', title: 'Bathroom Tap Replacement', date: '28 Oct', amount: '$258.50', status: 'Paid' },
            { id: '2', title: 'Kitchen Cabinet Repair', date: '20 Sept', amount: '$159.50', status: 'Paid' },
            { id: '3', title: 'Deck Power Washing', date: '20 June', amount: '$797.50', status: 'Sent' }
          ].map((act) => (
            <div key={act.id} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-50">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-extrabold text-[#0F172A] text-[12px] tracking-tight leading-tight mb-0.5">{act.title}</h3>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Invoice #</p>
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
  }

  return (
    <div className="pt-14 pb-32 px-6 bg-[#F8FAFC] min-h-screen font-sans">
      <div className="flex justify-end items-center mb-6">
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
          <User size={16} />
        </div>
      </div>

      <div className="flex gap-3 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input type="text" placeholder="Search customers..." className="w-full bg-white rounded-2xl py-3.5 pl-12 pr-4 text-sm border border-slate-100 shadow-sm focus:outline-none" />
        </div>
      </div>

      <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4 ml-1">${CUSTOMERS.length} Customers</p>

      <div className="space-y-3">
        {CUSTOMERS.map((cust) => (
          <motion.div
            key={cust.id}
            onClick={() => { setSelectedId(cust.id); setView('detail'); }}
            className="bg-white rounded-3xl p-4 flex items-center gap-4 shadow-sm border border-slate-50 cursor-pointer hover:bg-slate-50 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center font-bold text-[#0F172A]">
              {cust.initials}
            </div>
            <div>
              <h3 className="font-extrabold text-[#0F172A] text-sm tracking-tight leading-none mb-1">{cust.name}</h3>
              <p className="text-[10px] font-bold text-slate-400 tracking-wider">{cust.email}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
