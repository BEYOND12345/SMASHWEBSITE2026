import { Link } from 'react-router-dom';

const APP_STORE_URL = "https://apps.apple.com/au/app/smash-invoices/id6759475079";

export function Nav() {
  return (
    <nav className="bg-brand/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 md:py-5 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white">
          SMASH<span className="text-accent text-4xl leading-none align-baseline">.</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <Link to="/features" className="hidden md:block px-3 py-2 text-sm font-bold text-white/60 hover:text-white transition-colors uppercase tracking-wide">
            Features
          </Link>
          <Link to="/pricing" className="hidden md:block px-3 py-2 text-sm font-bold text-white/60 hover:text-white transition-colors uppercase tracking-wide">
            Pricing
          </Link>
          <Link to="/smash-vs-xero" className="hidden lg:block px-3 py-2 text-sm font-bold text-white/60 hover:text-white transition-colors uppercase tracking-wide">
            Compare
          </Link>
          <Link to="/blog" className="hidden lg:block px-3 py-2 text-sm font-bold text-white/60 hover:text-white transition-colors uppercase tracking-wide">
            Blog
          </Link>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2.5 rounded-[32px] bg-accent text-brand font-black text-sm uppercase tracking-widest hover:brightness-95 transition-all"
          >
            Start Free
          </a>
        </div>
      </div>
    </nav>
  );
}
