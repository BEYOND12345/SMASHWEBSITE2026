import { Mail, Mic } from 'lucide-react';
import { HERO_VIDEO_DEFAULT } from '../../data/download-urls';

type HeroVideoProps = {
  src?: string;
  title?: string;
};

export function HeroVideo({
  src = HERO_VIDEO_DEFAULT,
  title = 'SMASH Gmail invoice demo',
}: HeroVideoProps) {
  return (
    <div className="relative w-full max-w-[560px] mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0D1117]">
      <video
        src={src}
        title={title}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-auto block"
        style={{ aspectRatio: '16/10' }}
      />
      {/* Fallback shown while video loads or if file missing */}
      <noscript>
        <HeroMockup />
      </noscript>
    </div>
  );
}

export function HeroMockup() {
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

      {/* Gmail header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-slate-200">
        <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center">
          <Mail size={14} className="text-white" strokeWidth={2.5} />
        </div>
        <span className="text-slate-700 font-bold text-sm">Inbox</span>
        <span className="ml-auto text-[10px] text-slate-400 font-medium">1 of 248</span>
        <span className="ml-2 px-2 py-1 rounded-full bg-brand text-accent text-[8px] font-black uppercase tracking-widest">SMASH</span>
      </div>

      <div className="grid grid-cols-5">
        {/* Email — left */}
        <div className="col-span-3 p-2 sm:p-4 bg-white space-y-3">
          <div>
            <p className="text-[11px] font-bold text-slate-700 leading-tight">Johnathan Smith</p>
            <p className="text-[10px] text-slate-400 leading-tight">to me · 8:47 AM</p>
          </div>
          <p className="text-[11px] font-bold text-slate-800 leading-tight">Handyman job.</p>
          <div className="space-y-1.5 text-[10px] text-slate-500 leading-[1.4]">
            <p>Hi — need a quote for replacing the copper piping and installing a new mixer tap in the kitchen.</p>
            <p>Also a call-out fee if you can include that.</p>
            <p className="text-slate-400">Thanks, Johnathan</p>
          </div>
          <div className="flex gap-2 pt-2">
            <div className="px-2.5 py-1 rounded bg-slate-100 text-[9px] font-bold text-slate-500 uppercase tracking-wider">Reply</div>
            <div className="px-2.5 py-1 rounded bg-accent text-brand text-[9px] font-black uppercase tracking-wider">Generate Invoice</div>
          </div>
        </div>

        {/* SMASH sidebar — right */}
        <div className="col-span-2 bg-[#0D1117] p-2 sm:p-4 space-y-3 border-l border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-white font-black text-sm tracking-tight">SMASH<span className="text-accent">.</span></span>
            <span className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Sidebar</span>
          </div>

          <div className="rounded-lg bg-white/[0.06] border border-white/10 p-2.5">
            <p className="text-[8px] uppercase tracking-widest text-accent font-black mb-1">Active Context</p>
            <p className="text-[10px] text-white font-bold leading-tight">Johnathan Smith</p>
            <p className="text-[9px] text-white/45 font-medium truncate">jsmith@example.com</p>
          </div>

          <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-3 space-y-1.5">
            <div className="flex justify-between text-[10px]">
              <span className="text-white/55 font-medium truncate pr-2">Call-out fee</span>
              <span className="text-white font-bold tabular-nums">$600</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-white/55 font-medium truncate pr-2">Replace copper piping</span>
              <span className="text-white font-bold tabular-nums">$624</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-white/55 font-medium truncate pr-2">Mixer tap install</span>
              <span className="text-white font-bold tabular-nums">$237</span>
            </div>
            <div className="border-t border-white/10 pt-1.5 flex justify-between text-[10px]">
              <span className="text-white/70 font-bold uppercase tracking-wider">Total inc. GST</span>
              <span className="text-accent font-black tabular-nums">$1,497</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 rounded-full bg-white/10 border border-white/15 text-white font-black text-[8px] uppercase tracking-wider py-2 flex items-center justify-center gap-1">
              <Mail size={9} strokeWidth={3} />
              From Email
            </button>
            <button className="flex-1 rounded-full bg-accent text-brand font-black text-[8px] uppercase tracking-wider py-2 flex items-center justify-center gap-1">
              <Mic size={9} strokeWidth={3} />
              Start Recording
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PricingDNAMockup() {
  return (
    <div className="w-full max-w-[480px] mx-auto rounded-[28px] border-2 border-border bg-white overflow-hidden shadow-sm">
      <div className="bg-brand px-6 py-4 flex items-center justify-between">
        <span className="text-white font-black text-base tracking-tight">SMASH<span className="text-accent">.</span></span>
        <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">v1.0.21 · Speak it. Send it.</span>
      </div>
      <div className="flex border-b border-border text-[11px] font-black uppercase tracking-wider">
        <div className="flex-1 text-center py-3 text-brand/40 border-r border-border">Voice Quote</div>
        <div className="flex-1 text-center py-3 text-brand bg-accent/10 border-r border-border">Billing Profile</div>
        <div className="flex-1 text-center py-3 text-brand/40">History</div>
      </div>
      <div className="p-5">
        <p className="text-[9px] font-black uppercase tracking-[0.15em] text-brand/40 mb-1">Materials Catalogue</p>
        <p className="text-[11px] text-brand/55 font-medium mb-4 leading-[1.4]">Master prices for your region (AU) — same database as SMASH mobile.</p>
        <div className="flex gap-2 mb-4">
          {['All', 'Labour', 'Service', 'Other'].map((t, i) => (
            <span key={t} className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${i === 0 ? 'bg-brand text-accent' : 'bg-surface text-brand/50 border border-border'}`}>{t}</span>
          ))}
        </div>
        <div className="space-y-2">
          {[
            { name: 'Deck sanding', price: '$500.00 / each' },
            { name: 'Exterior House Clean', price: '$400.00 / each' },
            { name: 'Garden Clear out', price: '$300.00 / each' },
            { name: 'Lock Replacement', price: '$300.00 / each' },
          ].map((item) => (
            <div key={item.name} className="flex justify-between items-center py-2 border-b border-border last:border-0">
              <div>
                <p className="text-[12px] font-bold text-brand">{item.name}</p>
                <p className="text-[10px] text-brand/40 font-medium">{item.price} · Custom</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function QuoteMockup() {
  return (
    <div className="w-full max-w-[420px] mx-auto rounded-[28px] border-2 border-border bg-white overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-border">
        <p className="text-[9px] font-black uppercase tracking-[0.15em] text-brand/30 mb-2">Confidential Breakdown</p>
        <p className="text-base font-black text-brand uppercase tracking-tighter leading-[0.9]">Good Hands Property</p>
        <p className="text-[10px] text-brand/40 font-medium mt-1">Quote #Q-2026-0108 · 20 Apr 2026</p>
      </div>
      <div className="px-6 py-4 space-y-3">
        <p className="text-[9px] font-black uppercase tracking-[0.15em] text-brand/30">General Work</p>
        <div className="space-y-2">
          {[
            { desc: 'Labour', detail: '8 hours × $78.00/hr', amount: '$624.00' },
            { desc: 'Plywood', detail: '10 sheets × $262.50', amount: '$2,625.00' },
          ].map((row) => (
            <div key={row.desc} className="flex justify-between items-start">
              <div>
                <p className="text-[12px] font-bold text-brand">{row.desc}</p>
                <p className="text-[10px] text-brand/40 font-medium">{row.detail}</p>
              </div>
              <p className="text-[12px] font-bold text-brand tabular-nums">{row.amount}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-3 space-y-1">
          <div className="flex justify-between text-[11px] text-brand/50 font-medium">
            <span>Subtotal</span><span>$3,249.00</span>
          </div>
          <div className="flex justify-between text-[11px] text-brand/50 font-medium">
            <span>GST (10%)</span><span>$324.90</span>
          </div>
          <div className="flex justify-between text-base font-black text-brand pt-1">
            <span>Total</span><span>$3,573.90</span>
          </div>
        </div>
        <button className="w-full py-3 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-widest mt-2">
          Click to Pay
        </button>
      </div>
      <div className="px-6 py-3 border-t border-border bg-surface">
        <p className="text-[9px] text-brand/35 font-medium italic">This quote is valid for 30 days from the date above.</p>
      </div>
    </div>
  );
}
