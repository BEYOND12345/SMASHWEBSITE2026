import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'accent' | 'success';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  // Styles: No borders. Height 56px.
  // Updated: UPPERCASE, tracking-widest, bold font.
  const baseStyles = "h-[56px] rounded-[32px] font-black text-[13px] uppercase tracking-widest transition-all duration-300 flex items-center justify-center focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]";
  
  const variants = {
    // Solid Black. No border.
    primary: "bg-brand text-white shadow-lg shadow-brand/10 hover:shadow-brand/20 hover:brightness-95",
    // Lime Pop.
    accent: "bg-accent text-brand shadow-lg shadow-accent/20 hover:brightness-95",
    // Success now uses the same Lime accent to maintain consistency (no other greens)
    success: "bg-accent text-brand shadow-lg shadow-accent/20 hover:brightness-95",
    // Light Gray Fill (Modern Secondary).
    secondary: "bg-gray-100 text-primary hover:bg-gray-200",
    // Traditional Outline (used sparingly)
    outline: "bg-transparent border-2 border-gray-200 text-secondary hover:border-brand hover:text-brand",
    ghost: "bg-transparent text-secondary hover:text-primary hover:bg-gray-50",
    danger: "bg-red-50 text-red-600 hover:bg-red-100"
  };

  const widthClass = fullWidth ? "w-full" : "px-8";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};