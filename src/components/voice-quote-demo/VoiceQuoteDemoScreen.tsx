/**
 * Presentational screens matching SMASHAPP voicerecorder + estimatepreview.
 * Source: BEYOND12345/SMASHAPP design-handoff (screens 11–14).
 */

import { Check, Mic, X } from 'lucide-react';
import { APP_STORE_URL } from '../../data/download-urls';
import type { DemoQuote } from '../../data/demo-quote-catalogue';

export type AppDemoPhase = 'idle' | 'recording' | 'processing' | 'result' | 'error';

export type ChecklistStatus = 'waiting' | 'detecting' | 'complete';

export type ChecklistItem = {
  id: number;
  label: string;
  status: ChecklistStatus;
  detail?: string | null;
};

export const APP_CHECKLIST_LABELS = [
  'Job address',
  'Customer name',
  'Scope of work',
  'Materials needed',
  'Time to complete',
  'Fees',
] as const;

export function checklistForPhase(phase: AppDemoPhase): ChecklistItem[] {
  const base = APP_CHECKLIST_LABELS.map((label, i) => ({
    id: i + 1,
    label,
    status: 'waiting' as ChecklistStatus,
    detail: null as string | null,
  }));

  if (phase === 'idle' || phase === 'error') return base;

  if (phase === 'recording') {
    return [
      { id: 1, label: 'Job address', status: 'complete', detail: '42 Marine Pde' },
      { id: 2, label: 'Customer name', status: 'complete', detail: 'Sarah Jones' },
      { id: 3, label: 'Scope of work', status: 'detecting', detail: null },
      { id: 4, label: 'Materials needed', status: 'waiting', detail: null },
      { id: 5, label: 'Time to complete', status: 'waiting', detail: null },
      { id: 6, label: 'Fees', status: 'waiting', detail: null },
    ];
  }

  if (phase === 'processing') {
    return [
      { id: 1, label: 'Job address', status: 'complete', detail: '42 Marine Pde' },
      { id: 2, label: 'Customer name', status: 'complete', detail: 'Sarah Jones' },
      { id: 3, label: 'Scope of work', status: 'complete', detail: '1 captured' },
      { id: 4, label: 'Materials needed', status: 'complete', detail: '1 materials' },
      { id: 5, label: 'Time to complete', status: 'complete', detail: '2 hrs' },
      { id: 6, label: 'Fees', status: 'complete', detail: 'Call-out' },
    ];
  }

  // result — all complete
  return [
    { id: 1, label: 'Job address', status: 'complete', detail: '42 Marine Pde' },
    { id: 2, label: 'Customer name', status: 'complete', detail: 'Sarah Jones' },
    { id: 3, label: 'Scope of work', status: 'complete', detail: '1 captured' },
    { id: 4, label: 'Materials needed', status: 'complete', detail: '1 materials' },
    { id: 5, label: 'Time to complete', status: 'complete', detail: '2 hrs' },
    { id: 6, label: 'Fees', status: 'complete', detail: 'Call-out' },
  ];
}

function money(n: number) {
  return n.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' });
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[12px] font-semibold text-slate-900">
      <span className="tabular-nums">9:41</span>
      <div className="flex items-center gap-1.5" aria-hidden>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
          <rect x="0" y="7.5" width="3" height="4.5" rx="0.5" />
          <rect x="4.5" y="5" width="3" height="7" rx="0.5" />
          <rect x="9" y="2.5" width="3" height="9.5" rx="0.5" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
        </svg>
        <span className="inline-flex items-center gap-0.5">
          <span className="w-[22px] h-[11px] rounded-[3px] border-[1.5px] border-slate-900 relative">
            <span className="absolute inset-[1.5px] right-[3px] bg-slate-900 rounded-[1px]" />
          </span>
          <span className="w-[1.5px] h-[4px] bg-slate-900 rounded-r-sm" />
        </span>
      </div>
    </div>
  );
}

function VoiceStatusCard({
  phase,
  elapsed,
}: {
  phase: AppDemoPhase;
  elapsed: number;
}) {
  const isRecording = phase === 'recording';
  const isProcessing = phase === 'processing';
  const isActive = isRecording || isProcessing;

  return (
    <div
      className="mb-5 h-[124px] rounded-[24px] p-6 flex items-center gap-5 shadow-2xl shadow-slate-200/50"
      style={{ backgroundColor: '#0A0E17' }}
    >
      <div
        className={`w-14 h-14 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-all duration-300 ${
          isActive ? 'scale-110 bg-white/10' : 'scale-100'
        }`}
      >
        <div className="relative">
          {isRecording ? (
            <div className="flex items-end gap-[3px]">
              {[0, 0.15, 0.3, 0.15, 0].map((delay, i) => (
                <div
                  key={i}
                  className="w-[3px] bg-[#dfff00] rounded-full smash-listen-wave"
                  style={{ height: `${12 + i * 2}px`, animationDelay: `${delay}s` }}
                />
              ))}
            </div>
          ) : isProcessing ? (
            <div className="w-6 h-6 rounded-full border-2 border-[#dfff00]/25 border-t-[#dfff00] animate-spin" />
          ) : (
            <>
              <div
                className="absolute -inset-3 rounded-full opacity-30 pointer-events-none"
                style={{ backgroundColor: '#dfff00' }}
              />
              <Mic size={24} className="relative z-10" style={{ color: '#dfff00' }} />
            </>
          )}
        </div>
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h2 className="text-white/60 font-black text-[13px] leading-none mb-1.5 tracking-[0.1em] uppercase">
          {phase === 'idle' || phase === 'error'
            ? 'Voice Assistant'
            : phase === 'processing'
              ? 'Processing…'
              : 'Listening…'}
        </h2>
        <div className="h-[32px] flex items-center gap-2">
          {phase === 'idle' || phase === 'error' ? (
            <span className="text-[28px] leading-none font-black text-white/0 tracking-tight tabular-nums select-none">
              0:00
            </span>
          ) : phase === 'processing' ? (
            <span className="text-[18px] leading-none font-black text-[#dfff00] tracking-tight tabular-nums">
              Building...
            </span>
          ) : (
            <>
              <span className="text-[28px] leading-none font-black text-white tracking-tight tabular-nums">
                {formatTime(elapsed)}
              </span>
              <span className="text-[9px] font-black text-[#dfff00] uppercase tracking-[0.35em]">REC</span>
            </>
          )}
        </div>
        <p className="min-h-[28px] text-white/30 text-[11px] font-bold uppercase tracking-[0.05em] leading-tight mt-1">
          {phase === 'recording' ? (
            'Tap button to stop'
          ) : phase === 'processing' ? (
            'Please wait a moment'
          ) : (
            <>
              Say the job address, scope
              <br />
              and materials
            </>
          )}
        </p>
      </div>
    </div>
  );
}

function Checklist({ items }: { items: ChecklistItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        const isDone = item.status === 'complete';
        const isActive = item.status === 'detecting';
        return (
          <div
            key={item.id}
            className="flex items-center gap-4 py-4 px-5 rounded-[24px] border border-slate-100 bg-white shadow-sm"
          >
            <div className="shrink-0">
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  isDone || isActive ? 'bg-[#dfff00]' : 'bg-slate-200'
                } ${isActive ? 'animate-pulse' : ''}`}
              />
            </div>
            <span
              className={`flex-1 text-[12px] font-black uppercase tracking-[0.13em] ${
                isDone ? 'text-slate-900' : isActive ? 'text-slate-700' : 'text-slate-300'
              }`}
            >
              {item.label}
            </span>
            {isDone && item.detail ? (
              <span className="text-[11px] font-semibold text-slate-400 truncate max-w-[110px] text-right">
                {item.detail}
              </span>
            ) : isDone ? (
              <Check size={14} strokeWidth={3} className="shrink-0" style={{ color: '#dfff00' }} />
            ) : isActive ? (
              <span className="text-[11px] font-bold shrink-0 text-slate-600">Detecting…</span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function RecordFab({
  phase,
  onToggle,
  disabled,
  preview,
}: {
  phase: AppDemoPhase;
  onToggle?: () => void;
  disabled?: boolean;
  preview?: boolean;
}) {
  const isRecording = phase === 'recording';
  const isBusy = phase === 'processing';

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {(phase === 'idle' || phase === 'error') && (
        <div className="absolute inset-0 rounded-full bg-[#dfff00]/40 smash-breathe pointer-events-none" />
      )}
      {isRecording && (
        <>
          <div className="absolute inset-0 rounded-full bg-[#dfff00]/50 smash-sonic-wave pointer-events-none" />
          <div
            className="absolute inset-0 rounded-full bg-[#dfff00]/30 smash-sonic-wave pointer-events-none"
            style={{ animationDelay: '-1.1s' }}
          />
        </>
      )}
      <button
        type="button"
        onClick={preview ? undefined : onToggle}
        disabled={preview || disabled || isBusy}
        className={`relative w-16 h-16 rounded-full flex items-center justify-center z-10 transition-all duration-300 shadow-2xl active:scale-95 disabled:opacity-50 touch-none select-none ${
          isRecording ? 'scale-105' : 'scale-100'
        }`}
        style={{ backgroundColor: '#0A0E17' }}
        aria-label={isRecording ? 'Stop recording' : 'Start recording'}
      >
        {isRecording ? (
          <div className="flex items-center gap-[6px]">
            <div className="w-[9px] h-[24px] bg-[#dfff00] rounded-[3px]" />
            <div className="w-[9px] h-[24px] bg-[#dfff00] rounded-[3px]" />
          </div>
        ) : isBusy ? (
          <div className="w-6 h-6 rounded-full border-2 border-[#dfff00]/30 border-t-[#dfff00] animate-spin" />
        ) : (
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#dfff00"
            stroke="#dfff00"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            style={{ marginLeft: 4 }}
          >
            <polygon points="7,5 19,12 7,19" />
          </svg>
        )}
      </button>
    </div>
  );
}

/** Quote preview — mirrors estimatepreview Breakdown + Totals. */
export function AppQuotePreview({
  quote,
  onTryAgain,
  preview,
}: {
  quote: DemoQuote;
  onTryAgain?: () => void;
  preview?: boolean;
}) {
  const materials = quote.lineItems.filter((i) =>
    /fitting|paint|tap|material|hose/i.test(i.name),
  );
  const labour = quote.lineItems.filter((i) => /labour|labor|handyman|hr/i.test(i.unit) || /labour|labor/i.test(i.name));
  const fees = quote.lineItems.filter(
    (i) => !materials.includes(i) && !labour.includes(i),
  );

  const sections: { title: string; items: typeof quote.lineItems }[] = [
    { title: 'Materials', items: materials.length ? materials : [] },
    { title: 'Labour', items: labour.length ? labour : [] },
    { title: 'Fees', items: fees.length ? fees : quote.lineItems },
  ].filter((s) => s.items.length > 0);

  // If nothing classified, show all under Fees-style flat list
  const rows =
    sections.length > 0
      ? sections
      : [{ title: 'Items', items: quote.lineItems }];

  return (
    <div className="flex flex-col gap-5 pb-4">
      <div>
        <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
          Job
        </p>
        <div className="bg-white rounded-[24px] border-2 border-slate-50 shadow-sm p-5">
          <p className="font-black uppercase tracking-tight text-slate-900 text-[15px] leading-tight">
            {quote.customerName}
          </p>
          <p className="text-[12px] font-semibold text-slate-400 mt-1 uppercase tracking-wider">
            {quote.address} · {quote.business}
          </p>
        </div>
      </div>

      <div>
        <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
          Breakdown
        </p>
        <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100">
                <th className="px-5 py-3.5">Item</th>
                <th className="px-5 py-3.5 text-right w-[100px]">Amount</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((section) => (
                <FragmentSection key={section.title} title={section.title} items={section.items} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
          Totals
        </p>
        <div className="bg-white rounded-[24px] border border-slate-100 shadow-xl overflow-hidden">
          <div className="p-5 flex flex-col gap-3">
            <div className="flex justify-between text-[14px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Subtotal</span>
              <span className="text-slate-900 tabular-nums">{money(quote.subtotal)}</span>
            </div>
            <div className="flex justify-between text-[14px] font-bold text-slate-400 uppercase tracking-widest">
              <span>GST (10%)</span>
              <span className="text-slate-900 tabular-nums">{money(quote.gst)}</span>
            </div>
          </div>
          <div className="bg-slate-50 border-t border-slate-100 p-5 flex justify-between items-center">
            <span className="text-[13px] font-bold text-slate-500 uppercase tracking-widest">
              Total Amount
            </span>
            <span className="text-[28px] font-bold text-slate-900 tracking-tight leading-none tabular-nums">
              {money(quote.total)}
            </span>
          </div>
        </div>
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-2 ml-1">
          Built in {quote.builtInSeconds.toFixed(1)}s · Demo rates
        </p>
      </div>

      <p className="text-[12px] font-medium text-slate-500 leading-relaxed bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
        This uses our standard pricing. Your actual quotes? Faster and exact when you upload your own
        rates.
      </p>

      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center h-14 rounded-2xl bg-[#0F172A] text-white font-bold text-[15px] shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition-colors touch-manipulation"
      >
        Start Free on iPhone
      </a>

      {onTryAgain && !preview && (
        <button
          type="button"
          onClick={onTryAgain}
          className="inline-flex items-center justify-center h-12 rounded-2xl border-2 border-slate-100 text-slate-600 font-bold text-[13px] uppercase tracking-widest hover:bg-slate-50 touch-manipulation"
        >
          Try another
        </button>
      )}
    </div>
  );
}

function FragmentSection({
  title,
  items,
}: {
  title: string;
  items: DemoQuote['lineItems'];
}) {
  return (
    <>
      <tr className="bg-slate-50">
        <td colSpan={2} className="px-5 py-3">
          <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">{title}</span>
        </td>
      </tr>
      {items.map((item) => (
        <tr key={item.id} className="border-b border-slate-50">
          <td className="px-5 py-5 min-w-0">
            <div className="text-[15px] font-bold text-slate-900 break-words leading-snug">{item.name}</div>
            <div className="mt-1 text-[12px] font-bold text-slate-400 uppercase tracking-wider">
              {item.qty} {item.unit} × {money(item.unitPrice)}
            </div>
          </td>
          <td className="px-5 py-5 text-right text-[15px] font-bold text-slate-900 tabular-nums whitespace-nowrap">
            {money(item.total)}
          </td>
        </tr>
      ))}
    </>
  );
}

export type VoiceQuoteDemoScreenProps = {
  phase: AppDemoPhase;
  elapsed?: number;
  error?: string | null;
  quote?: DemoQuote | null;
  checklist?: ChecklistItem[];
  onToggleRecord?: () => void;
  onTryAgain?: () => void;
  onClose?: () => void;
  /** Optional typed fallback (marketing only — not in app) */
  typedJob?: string;
  onTypedJobChange?: (v: string) => void;
  onSubmitTyped?: () => void;
  preview?: boolean;
};

/**
 * App-faithful phone chrome for screens 11–14.
 */
export function VoiceQuoteDemoScreen({
  phase,
  elapsed = 0,
  error = null,
  quote = null,
  checklist,
  onToggleRecord,
  onTryAgain,
  onClose,
  typedJob = '',
  onTypedJobChange,
  onSubmitTyped,
  preview = false,
}: VoiceQuoteDemoScreenProps) {
  const items = checklist ?? checklistForPhase(phase);

  return (
    <div className="relative w-full max-w-[390px] mx-auto h-[min(720px,92vh)] bg-[#FAFAFA] rounded-[2rem] border-[3px] border-[#0F172A] shadow-[0_24px_80px_-20px_rgba(15,23,42,0.55)] overflow-hidden flex flex-col font-sans">
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-[#0F172A] rounded-full z-20 pointer-events-none" />

      {onClose && !preview && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-white/90 border border-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-50 touch-manipulation"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      <StatusBar />

      {/* App header — Cancel | Voice Assistant */}
      <div className="h-[56px] px-5 flex items-center justify-between shrink-0 border-b border-slate-100/70">
        <button
          type="button"
          onClick={preview ? undefined : onClose}
          className="h-10 px-3 -ml-2 rounded-full flex items-center text-[12px] font-black text-slate-900 uppercase tracking-widest"
        >
          Cancel
        </button>
        <span className="text-[13px] font-black uppercase tracking-[0.24em] text-slate-300">
          Voice Assistant
        </span>
        <div className="w-10 h-10" aria-hidden />
      </div>

      <div className="relative flex-1 flex flex-col px-5 pt-5 overflow-y-auto pb-28">
        {phase === 'result' && quote ? (
          <AppQuotePreview quote={quote} onTryAgain={onTryAgain} preview={preview} />
        ) : (
          <>
            <VoiceStatusCard phase={phase} elapsed={elapsed} />
            <Checklist items={items} />

            {error && (
              <div className="mt-4 rounded-2xl border border-rose-100 bg-rose-50 px-4 py-3" role="alert">
                <div className="text-[12px] font-black text-rose-900 uppercase tracking-widest">
                  Couldn&apos;t generate estimate
                </div>
                <div className="mt-1 text-[12px] font-semibold text-rose-700">{error}</div>
              </div>
            )}

            {(phase === 'idle' || phase === 'error') && onSubmitTyped && (
              <div className="mt-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 text-center">
                  Or type the job (web only)
                </p>
                <textarea
                  value={typedJob}
                  onChange={(e) => onTypedJobChange?.(e.target.value)}
                  rows={2}
                  readOnly={preview}
                  placeholder="e.g. Kitchen tap, Sarah Jones, call-out"
                  className="w-full rounded-2xl border-2 border-slate-100 bg-white px-3.5 py-3 text-[13px] font-medium text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#dfff00]/40 resize-none"
                />
                <button
                  type="button"
                  onClick={onSubmitTyped}
                  disabled={preview}
                  className="mt-2 w-full h-12 rounded-2xl bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest disabled:opacity-50"
                >
                  Build quote from text
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* FAB slot — matches app bottom-right record button */}
      {phase !== 'result' && (
        <div className="absolute bottom-6 right-6 z-20">
          <RecordFab
            phase={phase}
            onToggle={onToggleRecord}
            preview={preview}
            disabled={phase === 'processing'}
          />
        </div>
      )}

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[108px] h-[4px] rounded-full bg-slate-900/15" aria-hidden />
    </div>
  );
}

/** Handoff mock quote — Smith Plumbing / kitchen tap scenario. */
export const APP_PREVIEW_QUOTE: DemoQuote = {
  customerName: 'Sarah Jones',
  business: 'Smith Plumbing',
  address: '42 Marine Pde, Sydney NSW',
  lineItems: [
    {
      id: 'fittings',
      name: 'Compression fittings',
      qty: 1,
      unit: 'set',
      unitPrice: 50,
      total: 50,
    },
    {
      id: 'labour',
      name: 'Labour Charges',
      qty: 2,
      unit: 'hrs',
      unitPrice: 95,
      total: 190,
    },
    {
      id: 'call-out',
      name: 'Call-out fee',
      qty: 1,
      unit: 'each',
      unitPrice: 500,
      total: 500,
    },
    {
      id: 'travel',
      name: 'Travel fee',
      qty: 1,
      unit: 'each',
      unitPrice: 80,
      total: 80,
    },
  ],
  subtotal: 820,
  gst: 82,
  total: 902,
  currency: 'AUD',
  builtInSeconds: 2.4,
};
