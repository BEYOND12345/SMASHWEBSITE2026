import { Check, AlertTriangle, Zap } from 'lucide-react';

const MATCHED = [
  { req: '20 × 90° copper elbows, 15mm', match: '90° Copper Elbow 15mm', qty: '×20', price: '$84.00' },
  { req: '5 × brass ball valves, 1"', match: 'Brass Ball Valve 1in', qty: '×5', price: '$112.50' },
  { req: '100m blue PEX-B pipe', match: 'PEX-B Pipe — Blue', qty: '100m', price: '$240.00' },
];

export function B2bRfqMockup() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-white text-[10px] text-slate-400 font-mono truncate">
          mail.google.com/mail/u/0/#inbox
        </div>
      </div>

      <div className="grid grid-cols-5">
        {/* RFQ email — left */}
        <div className="col-span-3 p-3 sm:p-4 bg-white space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-slate-700 leading-tight">Procurement — Harbour Build Co.</p>
              <p className="text-[10px] text-slate-400 leading-tight">to sales · 8:47 AM</p>
            </div>
            <span className="px-2 py-1 rounded-full bg-brand text-accent text-[8px] font-black uppercase tracking-widest">RFQ</span>
          </div>
          <p className="text-[11px] font-bold text-slate-800 leading-tight">Pricing for site order</p>
          <div className="space-y-1.5 text-[10px] text-slate-500 leading-[1.45]">
            <p>Hi — can you quote the following for our site order:</p>
            <p className="text-slate-600">20 × 90° copper elbows, 15mm<br />5 × brass ball valves, 1"<br />100m blue PEX-B pipe<br />+ the usual box of mixed fittings</p>
            <p className="text-slate-400">Cheers, Dana</p>
          </div>
        </div>

        {/* SMASH sidebar — right */}
        <div className="col-span-2 bg-[#0D1117] p-2.5 sm:p-3.5 space-y-2.5 border-l border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-white font-black text-sm tracking-tight">SMASH<span className="text-accent">.</span></span>
            <span className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Parsing</span>
          </div>

          <div className="flex items-center gap-1.5 rounded-lg bg-accent/10 border border-accent/20 px-2.5 py-1.5">
            <Zap size={10} className="text-accent shrink-0" strokeWidth={3} />
            <p className="text-[8px] uppercase tracking-widest text-accent font-black">4 lines matched to catalog</p>
          </div>

          <div className="space-y-1.5">
            {MATCHED.map((row) => (
              <div key={row.match} className="rounded-lg bg-white/[0.05] border border-white/[0.08] p-2">
                <div className="flex items-center gap-1 mb-0.5">
                  <Check size={9} className="text-accent shrink-0" strokeWidth={4} />
                  <span className="text-[9px] text-white font-bold leading-tight truncate">{row.match}</span>
                </div>
                <div className="flex items-center justify-between pl-3">
                  <span className="text-[8px] text-white/40 font-medium">{row.qty}</span>
                  <span className="text-[9px] text-white font-bold tabular-nums">{row.price}</span>
                </div>
              </div>
            ))}

            {/* Flagged / verify line */}
            <div className="rounded-lg bg-amber-400/10 border border-amber-400/40 p-2">
              <div className="flex items-center gap-1 mb-0.5">
                <AlertTriangle size={9} className="text-amber-400 shrink-0" strokeWidth={3} />
                <span className="text-[9px] text-amber-200 font-bold leading-tight truncate">"box of mixed fittings"</span>
              </div>
              <p className="pl-3 text-[8px] text-amber-300/80 font-bold uppercase tracking-wider">Verify — low confidence</p>
            </div>
          </div>

          <button className="w-full rounded-full bg-accent text-brand font-black text-[8px] uppercase tracking-widest py-2">
            Push draft to Xero
          </button>
        </div>
      </div>
    </div>
  );
}
