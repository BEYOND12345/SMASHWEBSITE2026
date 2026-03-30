/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#0F172A',
        accent: '#DFFF00',
        accentDark: '#A8CC00',
        surface: '#F8FAFC',
        border: '#E2E8F0',
      },
      borderRadius: {
        '3xl': '24px',
        '2xl': '16px',
        'xl': '12px',
      },
      letterSpacing: {
        tighter: '0.02em',
      },
      fontFamily: {
        // Display font: condensed, industrial — for all uppercase headlines
        sans: ['Barlow Condensed', 'system-ui', 'sans-serif'],
        // Body font: clean, slightly warm — for description text, body copy
        body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        // Barlow for medium-weight body where needed
        barlow: ['Barlow', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 24px rgba(223, 255, 0, 0.45)',
        'glow-lg': '0 0 48px rgba(223, 255, 0, 0.35), 0 0 96px rgba(223, 255, 0, 0.15)',
        'glow-sm': '0 0 12px rgba(223, 255, 0, 0.3)',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'hero-reveal': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(-6deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-6deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(223, 255, 0, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(223, 255, 0, 0.7), 0 0 80px rgba(223, 255, 0, 0.3)' },
        },
        'counter': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'hero-reveal': 'hero-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 0.8s infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
