import { APP_STORE_URL } from '../../data/download-urls';
import type { DemoQuote } from '../../data/demo-quote-catalogue';

function money(n: number) {
  return n.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' });
}

export function QuoteResult({
  transcript,
  quote,
  onTryAgain,
}: {
  transcript: string;
  quote: DemoQuote;
  onTryAgain?: () => void;
}) {
  const totalLabel = money(quote.total);

  return (
    <div className="flex flex-col gap-4 text-left">
      <div>
        <p className="font-display text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-1.5">
          Heard
        </p>
        <p className="font-body text-sm text-slate-600 bg-[#F4F6F9] rounded-2xl px-3.5 py-3 leading-snug">
          &ldquo;{transcript}&rdquo;
        </p>
      </div>

      <div>
        <p className="font-display text-[10px] uppercase tracking-[0.22em] text-slate-400 mb-2">
          Line items
        </p>
        <ul className="rounded-2xl border border-slate-100 overflow-hidden divide-y divide-slate-100">
          {quote.lineItems.map((item) => (
            <li
              key={item.id}
              className="flex items-start justify-between gap-3 font-body text-sm px-3.5 py-3 bg-white"
            >
              <span className="min-w-0">
                <span className="font-semibold text-brand block leading-snug">{item.name}</span>
                <span className="text-xs text-slate-400 mt-0.5 block">
                  {item.qty} {item.unit} × {money(item.unitPrice)}
                </span>
              </span>
              <span className="font-semibold tabular-nums text-brand shrink-0">
                {money(item.total)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-brand text-white px-4 py-4">
        <div className="flex justify-between font-body text-sm text-white/55 mb-1">
          <span>Subtotal</span>
          <span className="tabular-nums">{money(quote.subtotal)}</span>
        </div>
        <div className="flex justify-between font-body text-sm text-white/55 mb-3">
          <span>GST (10%)</span>
          <span className="tabular-nums">{money(quote.gst)}</span>
        </div>
        <div className="flex justify-between items-end border-t border-white/10 pt-3">
          <div>
            <p className="font-display text-[10px] uppercase tracking-[0.2em] text-accent mb-1">
              Total
            </p>
            <p className="font-body text-[11px] text-white/45">
              Built in {quote.builtInSeconds.toFixed(1)}s · {quote.address}
            </p>
          </div>
          <p className="font-display-italic font-black italic text-[2rem] leading-none tracking-tight tabular-nums">
            <span className="text-accent">{totalLabel.charAt(0)}</span>
            {totalLabel.slice(1)}
          </p>
        </div>
      </div>

      <p className="font-body text-xs text-slate-500 leading-relaxed bg-accent/15 border border-accent/40 rounded-2xl px-3.5 py-3">
        This uses our standard pricing. Your actual quotes? Faster and exact when you upload your own
        rates.
      </p>

      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center min-h-[48px] bg-accent text-brand font-display text-sm uppercase tracking-wide px-5 py-3 rounded-2xl hover:bg-accentDark transition-colors touch-manipulation text-center"
      >
        Start Free — Upload Your Rates
      </a>

      {onTryAgain && (
        <button
          type="button"
          onClick={onTryAgain}
          className="inline-flex items-center justify-center min-h-[44px] border border-slate-200 text-slate-600 font-body text-sm font-semibold rounded-2xl px-5 py-3 hover:bg-slate-50 transition-colors touch-manipulation"
        >
          Try another
        </button>
      )}
    </div>
  );
}

/** Static sample for design review (no API). */
export const DEMO_PREVIEW_QUOTE: DemoQuote = {
  customerName: 'Sarah',
  business: 'Service Worker',
  address: 'Sydney, NSW',
  lineItems: [
    {
      id: 'gutter-clean',
      name: 'Gutter cleaning (2-storey)',
      qty: 1,
      unit: 'job',
      unitPrice: 200,
      total: 200,
    },
    {
      id: 'call-out',
      name: 'Call-out fee',
      qty: 1,
      unit: 'each',
      unitPrice: 65,
      total: 65,
    },
  ],
  subtotal: 265,
  gst: 26.5,
  total: 291.5,
  currency: 'AUD',
  builtInSeconds: 2.4,
};

export const DEMO_PREVIEW_TRANSCRIPT = 'Gutters cleaned, two-storey house, call-out fee';
