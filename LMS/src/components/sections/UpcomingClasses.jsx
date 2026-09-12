import { Video, Clock, Calendar } from 'lucide-react';
import { upcomingClasses } from '../../data/mockData';
import Badge from '../ui/Badge';

const colorBg = {
  indigo: 'from-indigo-500 to-indigo-600',
  emerald: 'from-emerald-500 to-emerald-600',
  amber: 'from-amber-500 to-amber-600',
  rose: 'from-rose-500 to-rose-600',
};

export default function UpcomingClasses() {
  return (
    <div className="card p-5 lg:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-ink-900">Upcoming Classes</h2>
          <p className="text-sm text-ink-500 mt-0.5">Don't miss your live sessions</p>
        </div>
      </div>
      <div className="space-y-3">
        {upcomingClasses.map((c) => (
          <div
            key={c.id}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-ink-50 transition group"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorBg[c.color]} flex items-center justify-center text-white shrink-0`}>
              <Video size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-ink-900 truncate">{c.title}</p>
              <p className="text-xs text-ink-500 mt-0.5 truncate">{c.instructor}</p>
              <div className="flex items-center gap-3 mt-1.5 text-xs text-ink-500">
                <span className="flex items-center gap-1"><Calendar size={11} /> {c.date}</span>
                <span className="flex items-center gap-1"><Clock size={11} /> {c.time}</span>
              </div>
            </div>
            <button className="hidden sm:block px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition opacity-0 group-hover:opacity-100">
              Join
            </button>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full py-2.5 rounded-xl border border-ink-100 text-sm font-semibold text-ink-700 hover:bg-ink-50 transition">
        View full schedule
      </button>
    </div>
  );
}