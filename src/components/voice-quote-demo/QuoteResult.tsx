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
  onTryAgain: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 text-left">
      <p className="font-body text-sm text-slate-500 bg-slate-50 rounded-2xl p-3">
        &ldquo;{transcript}&rdquo;
      </p>

      <ul className="space-y-2">
        {quote.lineItems.map((item) => (
          <li
            key={item.id}
            className="flex items-start justify-between gap-3 font-body text-sm text-slate-700 border-b border-slate-100 pb-2"
          >
            <span>
              <span className="font-semibold text-brand">{item.name}</span>
              <span className="block text-xs text-slate-400 mt-0.5">
                {item.qty} {item.unit} × {money(item.unitPrice)}
              </span>
            </span>
            <span className="font-semibold tabular-nums shrink-0">{money(item.total)}</span>
          </li>
        ))}
      </ul>

      <div className="pt-1 space-y-1">
        <div className="flex justify-between font-body text-sm text-slate-500">
          <span>Subtotal</span>
          <span className="tabular-nums">{money(quote.subtotal)}</span>
        </div>
        <div className="flex justify-between font-body text-sm text-slate-500">
          <span>GST (10%)</span>
          <span className="tabular-nums">{money(quote.gst)}</span>
        </div>
        <div className="flex justify-between items-baseline pt-1">
          <span className="font-display text-sm uppercase tracking-widest text-slate-500">Total</span>
          <span className="font-display text-3xl uppercase tracking-tighter text-brand">
            <span className="text-accent">{money(quote.total).slice(0, 1)}</span>
            {money(quote.total).slice(1)}
          </span>
        </div>
        <p className="font-body text-xs text-slate-400">
          Quote built in {quote.builtInSeconds.toFixed(1)}s · {quote.address}
        </p>
      </div>

      <p className="font-body text-xs text-slate-500 italic leading-relaxed border-l-2 border-accent pl-3 my-1">
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

      <button
        type="button"
        onClick={onTryAgain}
        className="inline-flex items-center justify-center min-h-[44px] border border-slate-200 text-slate-600 font-body text-sm font-semibold rounded-2xl px-5 py-3 hover:bg-slate-50 transition-colors touch-manipulation"
      >
        Try another
      </button>
    </div>
  );
}
