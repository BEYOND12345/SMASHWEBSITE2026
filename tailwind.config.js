/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#020617',
        accent: '#d4ff00',
        accentText: '#020617',
        surface: '#ffffff',
        secondary: '#64748b',
        tertiary: '#94a3b8',
        border: '#e2e8f0',
        card: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'brand': '24px',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 2px 10px rgba(15, 23, 42, 0.03), 0 10px 25px -5px rgba(15, 23, 42, 0.04)',
        'float': '0 20px 40px -4px rgba(15, 23, 42, 0.12)',
        'glow': '0 0 20px rgba(212, 255, 0, 0.4)',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '-0.01em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
