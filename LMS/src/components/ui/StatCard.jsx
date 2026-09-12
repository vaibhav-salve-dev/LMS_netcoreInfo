import { BookOpen, GraduationCap, TrendingUp, Clock } from 'lucide-react';

const iconMap = { BookOpen, GraduationCap, TrendingUp, Clock };

const colorMap = {
  indigo: 'bg-indigo-50 text-indigo-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  amber: 'bg-amber-50 text-amber-600',
  rose: 'bg-rose-50 text-rose-600',
};

export default function StatCard({ stat }) {
  const Icon = iconMap[stat.icon];
  return (
    <div className="card p-5 hover:shadow-card transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-ink-500">{stat.label}</p>
          <p className="mt-2 text-3xl font-bold text-ink-900">
            {stat.value}
            {stat.suffix && <span className="text-xl text-ink-400 ml-0.5">{stat.suffix}</span>}
          </p>
        </div>
        <div className={`p-3 rounded-xl ${colorMap[stat.color]}`}>
          {Icon && <Icon size={22} strokeWidth={2.2} />}
        </div>
      </div>
      <p className="mt-3 text-xs font-medium text-emerald-600 flex items-center gap-1">
        <TrendingUp size={12} /> {stat.change}
      </p>
    </div>
  );
}