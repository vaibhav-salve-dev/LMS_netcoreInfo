import { Trophy, Flame, Star, Award, Moon, Zap, Lock } from 'lucide-react';
import { achievements } from '../../data/mockData';

const iconMap = { Trophy, Flame, Star, Award, Moon, Zap };

const colorMap = {
  amber: 'from-amber-400 to-orange-500',
  rose: 'from-rose-400 to-pink-500',
  indigo: 'from-indigo-400 to-purple-500',
  emerald: 'from-emerald-400 to-teal-500',
  purple: 'from-purple-400 to-fuchsia-500',
  orange: 'from-orange-400 to-red-500',
};

export default function Achievements() {
  return (
    <div className="card p-5 lg:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-ink-900">Achievements</h2>
          <p className="text-sm text-ink-500 mt-0.5">
            {achievements.filter((a) => a.earned).length} of {achievements.length} unlocked
          </p>
        </div>
        <span className="text-2xl">🏆</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {achievements.map((a) => {
          const Icon = iconMap[a.icon] || Trophy;
          const gradient = colorMap[a.color] || colorMap.indigo;
          return (
            <div
              key={a.id}
              title={a.description}
              className={`relative p-3 rounded-xl border transition-all ${
                a.earned
                  ? 'border-ink-100 bg-white hover:shadow-soft hover:-translate-y-0.5'
                  : 'border-dashed border-ink-200 bg-ink-50/50'
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center text-white mb-2 ${
                  a.earned ? `bg-gradient-to-br ${gradient}` : 'bg-ink-200'
                }`}
              >
                {a.earned ? <Icon size={20} /> : <Lock size={16} />}
              </div>
              <p className={`text-xs font-semibold leading-tight ${a.earned ? 'text-ink-900' : 'text-ink-400'}`}>
                {a.title}
              </p>
              <p className="text-[10px] text-ink-400 mt-0.5 leading-tight">
                {a.earned ? a.date : 'Locked'}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}