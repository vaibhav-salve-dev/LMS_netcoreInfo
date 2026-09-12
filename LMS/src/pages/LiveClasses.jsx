import { Video, Clock, Calendar, Users } from 'lucide-react';
import { upcomingClasses } from '../data/mockData';
import Badge from '../components/ui/Badge';

const colorBg = {
  indigo: 'from-indigo-500 to-indigo-600',
  emerald: 'from-emerald-500 to-emerald-600',
  amber: 'from-amber-500 to-amber-600',
  rose: 'from-rose-500 to-rose-600',
};

export default function LiveClassesPage() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">Live Classes</h1>
        <p className="text-sm text-ink-500 mt-1">Join your interactive sessions with instructors</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
        {upcomingClasses.map((c) => (
          <div key={c.id} className="card p-5 hover:shadow-card transition">
            <div className={`w-full h-32 rounded-xl bg-gradient-to-br ${colorBg[c.color]} flex items-center justify-center text-white mb-4`}>
              <Video size={36} />
            </div>
            <Badge variant={c.color}>{c.platform}</Badge>
            <h3 className="text-base font-bold text-ink-900 mt-3">{c.title}</h3>
            <p className="text-sm text-ink-500 mt-1">by {c.instructor}</p>
            <div className="flex items-center gap-4 mt-3 text-xs text-ink-500">
              <span className="flex items-center gap-1"><Calendar size={12} /> {c.date}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {c.time}</span>
              <span className="flex items-center gap-1"><Users size={12} /> {c.duration}</span>
            </div>
            <button className="mt-4 w-full py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
              Join Class
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}