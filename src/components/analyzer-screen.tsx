import { motion } from 'framer-motion';

export function AnalyzerScreen() {
  return (
    <div className="h-full w-full bg-white text-[#0F172A] flex flex-col items-center justify-center pt-16 pb-20 box-border">
      <div className="flex flex-col items-center w-[260px]">
        <div className="relative w-full aspect-[3/4] bg-slate-50 rounded-3xl border-2 border-slate-100 overflow-hidden mb-6">
          <motion.div
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            className="absolute left-0 right-0 h-1 bg-[#E2FF00] shadow-[0_0_15px_rgba(226,255,0,0.8)] z-10"
          />

          <div className="absolute top-[20%] left-[14%] right-[14%] h-6 bg-[#E2FF00]/10 border border-[#E2FF00]/30 rounded animate-pulse" />
          <div className="absolute top-[35%] left-[18%] right-[18%] h-6 bg-[#E2FF00]/10 border border-[#E2FF00]/30 rounded animate-pulse" />
          <div className="absolute top-[55%] left-[22%] right-[22%] h-6 bg-[#E2FF00]/10 border border-[#E2FF00]/30 rounded animate-pulse" />

          <div className="absolute left-0 right-0 bottom-8 flex flex-col items-center opacity-20 px-6">
            <div className="h-4 w-24 bg-slate-300 rounded mb-4" />
            <div className="w-full max-w-[180px] space-y-2">
              <div className="h-2 w-full bg-slate-200 rounded" />
              <div className="h-2 w-full bg-slate-200 rounded" />
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-black tracking-tighter uppercase mb-2 text-center w-full">
          Analyzing Data
        </h3>
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center w-full">
          Extracting line items...
        </p>
      </div>
    </div>
  );
}
