import { useState } from 'react';
import { Chrome, Download } from 'lucide-react';
import type { PseoRegionalConfig } from '../../data/pseo/regional-mapping';
import { pseoChromeStoreUrl } from '../../lib/pseo/chrome-url';

interface PseoInvoiceMockFormProps {
  region: PseoRegionalConfig;
  lineItem: string;
  chromeCampaign: string;
}

export function PseoInvoiceMockForm({ region, lineItem, chromeCampaign }: PseoInvoiceMockFormProps) {
  const [qty, setQty] = useState('1');
  const [rate, setRate] = useState('150');
  const [showModal, setShowModal] = useState(false);

  const subtotal = (parseFloat(qty) || 0) * (parseFloat(rate) || 0);
  const taxRate = region.tax_name.includes('VAT') ? 0.2 : region.country_name === 'United States' ? 0.08 : 0.1;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const fmt = (n: number) => `${region.currency_symbol}${n.toFixed(2)}`;

  function handleDownload() {
    setShowModal(true);
  }

  return (
    <>
      <div className="rounded-2xl border border-brand/15 bg-white p-6 md:p-8 shadow-lg max-w-xl mx-auto">
        <p className="text-xs font-black uppercase tracking-widest text-brand/40 mb-4">Live preview — mock invoice</p>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase text-brand/50">Line item</label>
            <input
              readOnly
              value={lineItem}
              className="mt-1 w-full rounded-lg border border-brand/15 px-3 py-2 text-sm font-medium text-brand bg-brand/[0.02]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase text-brand/50">Qty</label>
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="mt-1 w-full rounded-lg border border-brand/15 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-brand/50">Rate ({region.currency_code})</label>
              <input
                type="number"
                min="0"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="mt-1 w-full rounded-lg border border-brand/15 px-3 py-2 text-sm"
              />
            </div>
          </div>
          <div className="border-t border-brand/10 pt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
            <div className="flex justify-between text-brand/70">
              <span>{region.tax_name}</span>
              <span>{fmt(tax)}</span>
            </div>
            <div className="flex justify-between font-black text-base"><span>Total</span><span>{fmt(total)}</span></div>
          </div>
          <button
            type="button"
            onClick={handleDownload}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand text-white font-black text-sm uppercase tracking-wider hover:brightness-110"
          >
            <Download size={16} />
            Download PDF / Send
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" role="dialog" aria-modal="true">
          <div className="max-w-md w-full rounded-2xl bg-brand border border-white/10 p-8 text-center">
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">Skip the form next time</h3>
            <p className="text-sm text-white/70 mb-6">
              Install the SMASH Invoices Chrome Extension to send this exact {region.tax_name} template inside Gmail with one click.
            </p>
            <a
              href={pseoChromeStoreUrl(chromeCampaign)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-brand font-black text-sm uppercase tracking-wider mb-4"
            >
              <Chrome size={16} />
              Add to Chrome — Free
            </a>
            <button type="button" onClick={() => setShowModal(false)} className="block w-full text-xs text-white/40 hover:text-white">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
