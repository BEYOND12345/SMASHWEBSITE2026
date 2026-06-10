import { ListeningScreen } from './listening-screen';
import { EstimatesScreen } from './estimates-screen';
import { InvoicesScreen } from './invoices-screen';
import { CustomerDetailScreen } from './customer-detail-screen';
import { PortalScreen } from './portal-screen';
import { EstimatesScreenStatic } from './estimates-screen-static';

/** Logical iPhone viewport — screens are authored at this width. */
const LOGICAL_WIDTH = 375;
const LOGICAL_HEIGHT = 812;

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
  floating?: boolean;
  size?: 'standard' | 'small';
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className = '', size = 'standard' }) => {
  const frameW = size === 'small' ? 240 : 296;
  const frameH = Math.round((frameW / LOGICAL_WIDTH) * LOGICAL_HEIGHT);
  const borderPx = size === 'small' ? 6 : 7;
  const radius = size === 'small' ? 40 : 48;
  const scale = frameW / LOGICAL_WIDTH;

  return (
    <div className={`relative shrink-0 ${className}`} style={{ width: frameW, height: frameH }}>
      <div
        className="absolute inset-0 overflow-hidden bg-[#0F172A] shadow-2xl"
        style={{ borderRadius: radius, border: `${borderPx}px solid #0F172A` }}
      >
        {/* Absolutely positioned so the 812px logical canvas does not expand layout
            and get clipped by overflow:hidden (which caused top-heavy content + cut-off bottom). */}
        <div
          className="absolute"
          style={{
            width: LOGICAL_WIDTH,
            height: LOGICAL_HEIGHT,
            transform: `translate(${-borderPx}px, ${-borderPx}px) scale(${scale})`,
            transformOrigin: '0 0',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

interface AppScreenProps {
  type: 'voice' | 'dashboard' | 'quote' | 'pricing' | 'invoice' | 'invoices' | 'portal' | 'estimates-static' | 'client' | 'customer-detail' | 'estimates' | 'customer-management';
  animated?: boolean;
}

export const AppScreen: React.FC<AppScreenProps> = ({ type }) => {
  if (type === 'voice') {
    return <ListeningScreen />;
  }

  if (type === 'dashboard') {
    return <EstimatesScreen />;
  }

  if (type === 'invoices') {
    return <InvoicesScreen />;
  }

  if (type === 'quote') {
    return (
      <div className="w-full h-full bg-white px-6 py-14 box-border overflow-hidden flex flex-col justify-center">
        <div className="text-center mb-5">
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
        <div className="flex-1 px-6 py-6 space-y-3 overflow-hidden flex flex-col justify-center">
          <div className="bg-white rounded-xl p-3 border border-slate-100">
            <div className="font-bold text-slate-900 text-xs mb-1">Merbau Decking</div>
            <div className="text-sm font-black text-brand">$120/m²</div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-slate-100">
            <div className="font-bold text-slate-900 text-xs mb-1">Pine Framing</div>
            <div className="text-sm font-black text-brand">$85/m²</div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-slate-100">
            <div className="font-bold text-slate-900 text-xs mb-1">Labour Rate</div>
            <div className="text-sm font-black text-brand">$800/day</div>
          </div>
          <div className="bg-white rounded-xl p-3 border border-slate-100">
            <div className="font-bold text-slate-900 text-xs mb-1">Travel Fee</div>
            <div className="text-sm font-black text-brand">$150</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'invoice') {
    return (
      <div className="w-full h-full bg-white px-6 py-14 box-border overflow-hidden flex flex-col justify-center">
        <div className="text-center mb-5">
          <div className="text-brand text-xs font-bold mb-2 bg-white inline-block px-3 py-1 rounded-full border border-accent">
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
            <span className="font-bold text-brand">PAID</span>
          </div>
        </div>
        <div className="pt-4 border-t border-slate-200">
          <div className="flex justify-between font-black text-sm text-slate-900">
            <span>AMOUNT PAID</span>
            <span className="text-brand">$4,455</span>
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
        <div className="flex-1 px-6 py-6 flex flex-col justify-center">
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
                <span className="font-bold text-brand">PAID</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-700">Fence Repair</span>
                <span className="font-bold text-brand">PAID</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'customer-detail') {
    return <CustomerDetailScreen />;
  }

  if (type === 'estimates') {
    return <EstimatesScreen />;
  }

  if (type === 'portal') {
    return <PortalScreen />;
  }

  if (type === 'estimates-static') {
    return <EstimatesScreenStatic />;
  }

  if (type === 'customer-management') {
    return <CustomerDetailScreen />;
  }

  return null;
};
