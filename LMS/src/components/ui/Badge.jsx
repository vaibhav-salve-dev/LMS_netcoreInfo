const variants = {
  indigo: 'bg-indigo-50 text-indigo-700',
  emerald: 'bg-emerald-50 text-emerald-700',
  amber: 'bg-amber-50 text-amber-700',
  rose: 'bg-rose-50 text-rose-700',
  slate: 'bg-slate-100 text-slate-700',
  purple: 'bg-purple-50 text-purple-700',
  orange: 'bg-orange-50 text-orange-700',
};

export default function Badge({ children, variant = 'slate', className = '' }) {
  return <span className={`chip ${variants[variant] || variants.slate} ${className}`}>{children}</span>;
}