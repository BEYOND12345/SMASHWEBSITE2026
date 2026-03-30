import { Link } from 'react-router-dom';
import { Calculator, FileText, ClipboardList, TrendingUp, Download, DollarSign, AlertCircle, ArrowRight } from 'lucide-react';

const ALL_TOOLS = [
  {
    slug: '/gst-calculator',
    name: 'GST Calculator',
    desc: 'Add or remove 10% GST instantly.',
    icon: Calculator,
    keywords: ['gst', 'tax', 'ato', 'tax invoice', 'gst calculation', 'goods and services tax'],
  },
  {
    slug: '/invoice-generator',
    name: 'Invoice Generator',
    desc: 'Build an ATO-compliant tax invoice in your browser.',
    icon: FileText,
    keywords: ['invoice', 'billing', 'tax invoice', 'payment', 'send invoice', 'invoice software'],
  },
  {
    slug: '/quote-generator',
    name: 'Quote Generator',
    desc: 'Build a professional GST quote right now.',
    icon: ClipboardList,
    keywords: ['quote', 'estimate', 'quoting', 'quote generator', 'job quote'],
  },
  {
    slug: '/profit-calculator',
    name: 'Profit Calculator',
    desc: 'Calculate exactly what to charge — materials, labour, margin.',
    icon: TrendingUp,
    keywords: ['profit', 'margin', 'markup', 'materials', 'pricing', 'labour rate', 'job cost'],
  },
  {
    slug: '/invoice-template',
    name: 'Invoice Template',
    desc: 'Download a free ATO-compliant invoice template.',
    icon: Download,
    keywords: ['template', 'word', 'excel', 'invoice template', 'format', 'download'],
  },
  {
    slug: '/hourly-rate-calculator',
    name: 'Hourly Rate Calculator',
    desc: 'Work out your minimum and recommended hourly rate.',
    icon: DollarSign,
    keywords: ['hourly', 'rate', 'labour rate', 'charge per hour', 'tradie rate', 'hourly rate'],
  },
  {
    slug: '/late-payment-calculator',
    name: 'Late Payment Calculator',
    desc: 'See how many days overdue and how much interest is owed.',
    icon: AlertCircle,
    keywords: ['late payment', 'overdue', 'interest', 'unpaid invoice', 'payment terms', 'debt'],
  },
];

interface RelatedToolsProps {
  keywords: string[];
  currentSlug?: string;
  title?: string;
}

export function RelatedTools({ keywords, currentSlug, title = 'Free tools for tradies' }: RelatedToolsProps) {
  const lowerKeywords = keywords.map(k => k.toLowerCase());

  const scored = ALL_TOOLS
    .filter(t => t.slug !== currentSlug)
    .map(tool => ({
      ...tool,
      score: tool.keywords.filter(k => lowerKeywords.some(kw => kw.includes(k) || k.includes(kw))).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  // If no keyword matches, just show first 3 non-current tools
  const tools = scored.some(t => t.score > 0) ? scored : ALL_TOOLS.filter(t => t.slug !== currentSlug).slice(0, 3);

  return (
    <section className="mt-12 pt-8 border-t border-white/10">
      <p className="font-black text-xs uppercase tracking-widest text-white/30 mb-3">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {tools.map(tool => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.slug}
              to={tool.slug}
              className="group flex flex-col gap-3 rounded-[20px] bg-white/[0.05] border border-white/10 p-5 hover:border-accent/40 hover:bg-white/[0.08] transition-all"
            >
              <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                <Icon size={16} className="text-accent" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-black text-sm uppercase tracking-tighter text-white leading-[0.95] mb-1 group-hover:text-accent transition-colors">{tool.name}</p>
                <p className="font-body text-xs font-medium text-white/50 leading-[1.4]">{tool.desc}</p>
              </div>
              <div className="flex items-center gap-1 text-accent font-black text-[10px] uppercase tracking-widest mt-auto">
                Use free <ArrowRight size={10} strokeWidth={3} />
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-4 text-center">
        <Link to="/tools" className="font-black text-xs uppercase tracking-widest text-white/30 hover:text-accent transition-colors">
          See all free tools →
        </Link>
      </div>
    </section>
  );
}
