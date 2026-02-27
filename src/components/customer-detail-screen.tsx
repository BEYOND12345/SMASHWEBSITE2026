import React from 'react';

export const CustomerDetailScreen = () => (
  <div className="h-full pt-6 px-5 bg-white font-sans flex flex-col">
    <div className="text-center mb-8">
      <h2 className="text-[10px] font-bold text-slate-900 uppercase tracking-wider mb-6">Client Details</h2>
    </div>

    <div className="flex-1 flex flex-col">
      <div className="mb-6">
        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">Client</div>
        <div className="text-base font-bold text-[#0F172A] mb-0.5">Alex Thompson</div>
        <div className="text-[11px] text-slate-500">42 High Street</div>
      </div>

      <div className="flex-1">
        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-3">Job History</div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[13px] font-medium text-slate-700">Deck Build</span>
            <span className="text-[11px] font-bold text-[#0F172A]">PAID</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[13px] font-medium text-slate-700">Fence Repair</span>
            <span className="text-[11px] font-bold text-[#0F172A]">PAID</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
