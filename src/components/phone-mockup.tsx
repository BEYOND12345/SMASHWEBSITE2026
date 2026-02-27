import React from 'react';
import { ListeningScreen } from './listening-screen';
import { EstimatesScreen } from './estimates-screen';
import { CustomerManagement } from './customer-management';

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  floating?: boolean;
  size?: 'standard' | 'small';
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className = '', floating = false, size = 'standard' }) => {
  const sizeClasses = size === 'small'
    ? 'w-[240px] h-[520px] rounded-[40px] border-[6px]'
    : 'w-[280px] h-[607px] rounded-[48px] border-[7px]';

  return (
    <div className={`relative ${floating ? 'animate-float' : ''} ${className}`}>
      <div className={`relative ${sizeClasses} bg-[#0F172A] border-[#0F172A] overflow-hidden shadow-2xl`}>
        {children}
      </div>
    </div>
  );
};

interface AppScreenProps {
  type: 'voice' | 'dashboard' | 'quote' | 'pricing' | 'invoice' | 'client' | 'customer-detail' | 'estimates' | 'customer-management';
  animated?: boolean;
}

export const AppScreen: React.FC<AppScreenProps> = ({ type }) => {
  if (type === 'voice') {
    return <ListeningScreen />;
  }

  if (type === 'dashboard') {
    return <EstimatesScreen />;
  }

  if (type === 'quote') {
    return (
      <div className="w-full h-full bg-white p-6 overflow-hidden">
        <div className="text-center mb-4">
          <div className="font-black text-lg text-slate-900 mb-1">QUOTE #1042</div>
          <div className="text-xs text-slate-500">Alex Thompson</div>
        </div>
        <div className="space-y-3 text-xs">
          <div className="border-b border-slate-200 pb-2">
            <div className="flex justify-between mb-1">
              <span className="text-slate-600 font-medium">Merbau Decking</span>
              <span className="font-bold text-slate-900">$2,400</span>
            </div>
            <div className="text-slate-400 text-[10px]">20m² @ $120/m²</div>
          </div>
          <div className="border-b border-slate-200 pb-2">
            <div className="flex justify-between mb-1">
              <span className="text-slate-600 font-medium">Labour</span>
              <span className="font-bold text-slate-900">$1,600</span>
            </div>
            <div className="text-slate-400 text-[10px]">2 days @ $800/day</div>
          </div>
          <div className="border-b border-slate-200 pb-2">
            <div className="flex justify-between mb-1">
              <span className="text-slate-600 font-medium">Materials</span>
              <span className="font-bold text-slate-900">$450</span>
            </div>
          </div>
          <div className="pt-2">
            <div className="flex justify-between font-black text-sm text-slate-900">
              <span>TOTAL (incl GST)</span>
              <span>$4,455</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'pricing') {
    return (
      <div className="w-full h-full bg-[#FAFAFA] flex flex-col">
        <div className="h-16 bg-white border-b border-slate-100 flex items-center justify-center">
          <div className="text-slate-900 font-black text-xs tracking-widest uppercase">Pricing Library</div>
        </div>
        <div className="flex-1 p-4 space-y-2 overflow-hidden">
          <div className="bg-white rounded-xl p-3 border border-slate-100">
            <div className="font-bold text-slate-900 text-xs mb-1">Merbau Decking</div>
            <div className="text-sm font-black text-accentText">$120/m²</div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-slate-100">
            <div className="font-bold text-slate-900 text-xs mb-1">Pine Framing</div>
            <div className="text-sm font-black text-accentText">$85/m²</div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-slate-100">
            <div className="font-bold text-slate-900 text-xs mb-1">Labour Rate</div>
            <div className="text-sm font-black text-accentText">$800/day</div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-slate-100">
            <div className="font-bold text-slate-900 text-xs mb-1">Travel Fee</div>
            <div className="text-sm font-black text-accentText">$150</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'invoice') {
    return (
      <div className="w-full h-full bg-white p-6 overflow-hidden">
        <div className="text-center mb-4">
          <div className="text-accentText text-xs font-bold mb-2 bg-white inline-block px-3 py-1 rounded-full border border-accent">
            INVOICE
          </div>
          <div className="font-black text-lg text-slate-900 mb-1">#INV-1042</div>
          <div className="text-xs text-slate-500">Alex Thompson</div>
        </div>
        <div className="space-y-2 text-xs mb-4">
          <div className="flex justify-between">
            <span className="text-slate-600">Due Date</span>
            <span className="font-bold text-slate-900">Dec 30, 2024</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Status</span>
            <span className="font-bold text-accentText">PAID</span>
          </div>
        </div>
        <div className="pt-4 border-t border-slate-200">
          <div className="flex justify-between font-black text-sm text-slate-900">
            <span>AMOUNT PAID</span>
            <span className="text-accentText">$4,455</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'client') {
    return (
      <div className="w-full h-full bg-[#FAFAFA] flex flex-col">
        <div className="h-16 bg-white border-b border-slate-100 flex items-center justify-center">
          <div className="text-slate-900 font-black text-xs tracking-widest uppercase">Client Details</div>
        </div>
        <div className="flex-1 p-4">
          <div className="bg-white rounded-2xl p-4 border border-slate-100 mb-3">
            <div className="text-xs text-slate-500 mb-1">CLIENT</div>
            <div className="font-black text-slate-900">Alex Thompson</div>
            <div className="text-xs text-slate-600 mt-1">42 High Street</div>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-slate-100">
            <div className="text-xs text-slate-500 mb-2">JOB HISTORY</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-700">Deck Build</span>
                <span className="font-bold text-accentText">PAID</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-700">Fence Repair</span>
                <span className="font-bold text-accentText">PAID</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'customer-detail') {
    return <EstimatesScreen />;
  }

  if (type === 'estimates') {
    return <EstimatesScreen />;
  }

  if (type === 'customer-management') {
    return <CustomerManagement />;
  }

  return null;
};
