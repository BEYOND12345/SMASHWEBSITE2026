import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-[11px] font-black text-slate-500 ml-1 uppercase tracking-widest">{label}</label>}
      <input 
        className={`h-[56px] px-5 rounded-2xl border border-border bg-white text-brand text-[16px] font-medium placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-200 shadow-sm ${className}`}
        {...props}
      />
    </div>
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
}

export const Select: React.FC<SelectProps> = ({ label, options, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-[11px] font-black text-slate-500 ml-1 uppercase tracking-widest">{label}</label>}
      <div className="relative">
        <select 
          className={`h-[56px] w-full px-5 rounded-2xl border border-border bg-white text-brand text-[16px] font-medium appearance-none focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-200 shadow-sm ${className}`}
          {...props}
        >
          <option value="" disabled selected>Select an option</option>
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};