import { Mail, Mic, CheckCircle2, Sparkles } from 'lucide-react';

type FrameProps = {
  children: React.ReactNode;
  className?: string;
};

function GmailBrowserFrame({ children, className = '' }: FrameProps) {
  return (
    <div
      className={`relative w-full rounded-[16px] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(200,255,0,0.12)] bg-white ${className}`.trim()}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F4F6F9] border-b border-slate-200">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-3 px-3 py-1 rounded-md bg-white text-[10px] text-slate-400 font-mono truncate">
          mail.google.com/mail/u/0/#inbox
        </div>
      </div>
      {children}
    </div>
  );
}

const PARTS_LINES = [
  '15mm copper elbow × 12',
  'Basin mixer — chrome',
  'Flexi hose 600mm × 4',
  'Call-out fee if applicable',
] as const;

const MATCHED_ITEMS = [
  { label: '15mm copper elbow', sku: 'SKU-CE15', qty: '× 12', price: '$8.40', matched: true },
  { label: 'Basin mixer chrome', sku: 'SKU-BM02', qty: '× 1', price: '$189.00', matched: true },
  { label: 'Flexi hose 600mm', sku: 'SKU-FH60', qty: '× 4', price: '$22.50', matched: true },
  { label: 'Call-out fee', sku: 'LAB-CALL', qty: '× 1', price: '$95.00', matched: true },
] as const;

function GmailToolbar() {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-slate-200">
      <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center">
        <Mail size={14} className="text-white" strokeWidth={2.5} />
      </div>
      <span className="text-slate-700 font-bold text-sm">Inbox</span>
      <span className="ml-auto px-2.5 py-1 rounded-full bg-brand text-accent text-[8px] font-black uppercase tracking-widest">
        SMASH
      </span>
    </div>
  );
}

function RequestEmailPanel({ compact = false }: { compact?: boolean }) {
  const text = compact ? 'text-[9px]' : 'text-[11px]';
  const tiny = compact ? 'text-[8px]' : 'text-[10px]';

  return (
    <div className={`col-span-3 bg-white space-y-3 ${compact ? 'p-2 sm:p-3' : 'p-3 sm:p-5'}`}>
      <div>
        <p className={`${text} font-bold text-slate-700 leading-tight`}>BuildCo Supplies</p>
        <p className={`${tiny} text-slate-400 leading-tight`}>quotes@buildco.com.au · Today 9:14 AM</p>
      </div>
      <p className={`${text} font-bold text-slate-800 leading-tight`}>Quote request — plumbing parts</p>
      <div className={`space-y-1.5 ${tiny} text-slate-500 leading-[1.45]`}>
        <p>Hi — can you price the following for delivery Thursday?</p>
        <ul className="list-disc pl-4 space-y-0.5">
          {PARTS_LINES.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="text-slate-400">Thanks, BuildCo</p>
      </div>
    </div>
  );
}

type SidebarProps = {
  variant: 'matching' | 'done' | 'hero';
  compact?: boolean;
};

function SmashSidebar({ variant, compact = false }: SidebarProps) {
  const tiny = compact ? 'text-[7px]' : 'text-[9px]';
  const text = compact ? 'text-[8px]' : 'text-[10px]';

  return (
    <div className={`col-span-2 bg-[#0D1117] border-l border-slate-200 space-y-3 ${compact ? 'p-2' : 'p-3 sm:p-4'}`}>
      <div className="flex items-center justify-between">
        <span className="text-white font-black text-sm tracking-tight">
          SMASH<span className="text-accent">.</span>
        </span>
        <span className={`${tiny} uppercase tracking-widest text-white/40 font-bold`}>Sidebar</span>
      </div>

      <div className="rounded-lg bg-white/[0.06] border border-white/10 p-2.5">
        <p className={`${tiny} uppercase tracking-widest text-accent font-black mb-1`}>From email</p>
        <p className={`${text} text-white font-bold leading-tight`}>BuildCo Supplies</p>
        <p className={`${tiny} text-white/45 font-medium truncate`}>quotes@buildco.com.au</p>
      </div>

      <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-2.5 sm:p-3 space-y-2">
        {MATCHED_ITEMS.map((item) => (
          <div key={item.sku} className="space-y-0.5">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className={`${text} text-white font-bold leading-tight truncate`}>{item.label}</p>
                <p className={`${tiny} text-white/40 font-medium`}>
                  {item.sku} {item.qty}
                </p>
              </div>
              <div className="text-right shrink-0">
                {variant === 'matching' && (
                  <span className="inline-flex items-center gap-0.5 text-[#3DD68C] font-black uppercase tracking-wider text-[7px] sm:text-[8px] mb-0.5">
                    <CheckCircle2 size={9} strokeWidth={2.5} />
                    Matched
                  </span>
                )}
                <p className={`${text} text-white font-bold tabular-nums`}>{item.price}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-white/10 pt-2 flex justify-between items-center">
          <span className={`${tiny} text-white/70 font-bold uppercase tracking-wider`}>Total inc. GST</span>
          <span className={`${compact ? 'text-[10px]' : 'text-sm'} text-accent font-black tabular-nums`}>
            {variant === 'done' || variant === 'hero' ? '$612.30' : '$612…'}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          className={`flex-1 rounded-full bg-white/10 border border-white/15 text-white font-black uppercase tracking-wider py-2 flex items-center justify-center gap-1 ${tiny}`}
        >
          <Mail size={9} strokeWidth={3} />
          From Email
        </button>
        <button
          type="button"
          className={`flex-1 rounded-full bg-accent text-brand font-black uppercase tracking-wider py-2 flex items-center justify-center gap-1 ${tiny}`}
        >
          {variant === 'done' || variant === 'hero' ? (
            <>
              <Sparkles size={9} strokeWidth={3} />
              Send Quote
            </>
          ) : (
            <>
              <Mic size={9} strokeWidth={3} />
              Matching…
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export function GmailHeroMockup() {
  return (
    <GmailBrowserFrame>
      <GmailToolbar />
      <div className="grid grid-cols-5 min-h-[280px] sm:min-h-[320px]">
        <RequestEmailPanel />
        <SmashSidebar variant="hero" />
      </div>
    </GmailBrowserFrame>
  );
}

export function GmailStepRequestMockup() {
  return (
    <GmailBrowserFrame className="shadow-lg border-slate-200">
      <GmailToolbar />
      <div className="grid grid-cols-5 min-h-[220px]">
        <RequestEmailPanel compact />
        <div className="col-span-2 bg-[#F4F6F9] border-l border-slate-200 flex items-center justify-center p-4">
          <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider text-center">
            SMASH sidebar closed
          </p>
        </div>
      </div>
    </GmailBrowserFrame>
  );
}

export function GmailStepMatchingMockup() {
  return (
    <GmailBrowserFrame className="shadow-lg border-slate-200">
      <GmailToolbar />
      <div className="grid grid-cols-5 min-h-[220px]">
        <RequestEmailPanel compact />
        <SmashSidebar variant="matching" compact />
      </div>
    </GmailBrowserFrame>
  );
}

export function GmailStepDoneMockup() {
  return (
    <GmailBrowserFrame className="shadow-lg border-slate-200">
      <GmailToolbar />
      <div className="grid grid-cols-5 min-h-[220px]">
        <RequestEmailPanel compact />
        <SmashSidebar variant="done" compact />
      </div>
    </GmailBrowserFrame>
  );
}

export function GmailSkuMatchMockup() {
  return (
    <div className="w-full max-w-md mx-auto rounded-[20px] overflow-hidden border-2 border-border bg-[#0D1117] shadow-[0_24px_64px_rgba(15,23,42,0.18)]">
      <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
        <span className="text-white font-black text-base tracking-tight">
          SMASH<span className="text-accent">.</span>
        </span>
        <span className="text-[10px] uppercase tracking-widest text-accent font-black">Catalogue match</span>
      </div>
      <div className="p-5 space-y-3">
        {MATCHED_ITEMS.slice(0, 3).map((item) => (
          <div key={item.sku} className="rounded-xl bg-white/[0.05] border border-white/10 p-3">
            <div className="flex justify-between items-start gap-3">
              <div>
                <p className="text-sm text-white font-bold">{item.label}</p>
                <p className="text-xs text-white/45 font-medium mt-0.5">{item.sku}</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-[#3DD68C] font-black uppercase tracking-wider text-[10px]">
                  <CheckCircle2 size={12} strokeWidth={2.5} />
                  Matched
                </span>
                <p className="text-sm text-white font-black tabular-nums mt-1">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GmailInboxToolbarMockup() {
  return (
    <GmailBrowserFrame className="max-w-lg mx-auto border-slate-200 shadow-lg">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F4F6F9] border-b border-slate-200">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white text-[9px] text-slate-400 font-mono truncate">
          mail.google.com
        </div>
      </div>
      <div className="flex items-center gap-3 px-4 py-4 bg-white">
        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
          <Mail size={16} className="text-white" strokeWidth={2.5} />
        </div>
        <span className="font-bold text-slate-700 text-sm">Inbox</span>
        <div className="ml-auto flex items-center gap-2">
          <span className="hidden sm:inline text-[10px] font-bold text-slate-400 uppercase tracking-wider">Compose</span>
          <span className="px-3 py-1.5 rounded-full bg-brand text-accent text-[10px] font-black uppercase tracking-widest shadow-sm">
            SMASH
          </span>
        </div>
      </div>
      <div className="px-4 pb-4 bg-white">
        <div className="rounded-xl border border-slate-200 bg-[#F4F6F9] p-4 text-center">
          <p className="text-xs text-slate-500 font-medium">Open any quote request — SMASH sits right here.</p>
        </div>
      </div>
    </GmailBrowserFrame>
  );
}
