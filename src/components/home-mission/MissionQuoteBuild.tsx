import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/**
 * Beat 2 — "the software taking the job off you."
 * A quote assembles itself: line items drop in one by one and the total fills.
 * Deliberately trade-neutral copy so no single job owns the page.
 */
const LINE_ITEMS = [
  { label: 'Call-out & assessment', detail: 'On site', amount: 120 },
  { label: 'Labour', detail: 'Half day', amount: 440 },
  { label: 'Materials', detail: 'Supplied', amount: 285 },
  { label: 'Travel', detail: 'Return', amount: 60 },
] as const;

const GST = 0.1;
const SUBTOTAL = LINE_ITEMS.reduce((sum, i) => sum + i.amount, 0);
const TOTAL = Math.round(SUBTOTAL * (1 + GST));

function useCountUp(target: number, durationMs = 900) {
  const [value, setValue] = useState(0);
  const reduce = useReducedMotion();

  const start = () => {
    if (reduce) {
      setValue(target);
      return;
    }
    const startedAt = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - startedAt) / durationMs, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return { value, start };
}

export function MissionQuoteBuild() {
  const reduce = useReducedMotion();
  const { value, start } = useCountUp(TOTAL);

  return (
    <motion.div
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      onViewportEnter={() => start()}
      variants={{ show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } }}
      className="relative w-full max-w-md mx-auto"
    >
      <div
        aria-hidden
        className="absolute -inset-4 rounded-[40px] bg-brand/10 blur-2xl"
      />
      <div className="relative bg-white rounded-[28px] border border-brand/10 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.45)] overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100">
          <div>
            <p className="font-display-italic font-black uppercase tracking-tight text-brand text-lg leading-none">
              Quote
            </p>
            <p className="font-body text-[11px] font-semibold text-slate-400 mt-1">
              Building itself…
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand text-accent px-3 py-1.5 text-[10px] font-black uppercase tracking-widest">
            <Sparkles size={11} strokeWidth={2.75} />
            Auto
          </span>
        </div>

        <div className="px-6 py-5 space-y-3">
          {LINE_ITEMS.map((item) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="flex items-baseline justify-between gap-4"
            >
              <div className="min-w-0">
                <p className="font-body text-sm font-semibold text-brand leading-tight truncate">
                  {item.label}
                </p>
                <p className="font-body text-[11px] text-slate-400 leading-tight">{item.detail}</p>
              </div>
              <span className="font-body text-sm font-bold text-brand tabular-nums shrink-0">
                ${item.amount.toLocaleString()}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } },
          }}
          className="px-6 py-5 bg-brand text-white flex items-center justify-between"
        >
          <div>
            <p className="font-display-italic font-black uppercase tracking-widest text-white/50 text-[10px]">
              Total inc. GST
            </p>
            <p className="font-body text-[11px] text-white/40">Priced from your rates</p>
          </div>
          <span className="font-display-italic font-black italic text-accent text-3xl tracking-tight tabular-nums">
            ${value.toLocaleString()}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
