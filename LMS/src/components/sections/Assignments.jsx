import { ClipboardList, Calendar, Award } from 'lucide-react';
import { assignments } from '../../data/mockData';
import Badge from '../ui/Badge';

const statusConfig = {
  pending: { label: 'Pending', variant: 'amber' },
  submitted: { label: 'Submitted', variant: 'indigo' },
  graded: { label: 'Graded', variant: 'emerald' },
  overdue: { label: 'Overdue', variant: 'rose' },
};

const priorityConfig = {
  high: 'text-rose-600 bg-rose-50',
  medium: 'text-amber-600 bg-amber-50',
  low: 'text-emerald-600 bg-emerald-50',
};

export default function Assignments({ limit }) {
  const items = limit ? assignments.slice(0, limit) : assignments;
  return (
    <div className="card p-5 lg:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-ink-900">Assignments</h2>
          <p className="text-sm text-ink-500 mt-0.5">{assignments.filter((a) => a.status === 'pending').length} pending tasks</p>
        </div>
        <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700">View all</button>
      </div>
      <div className="space-y-3">
        {items.map((a) => {
          const cfg = statusConfig[a.status];
          return (
            <div key={a.id} className="p-3.5 rounded-xl border border-ink-100 hover:border-indigo-200 hover:shadow-soft transition group">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <ClipboardList size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-ink-900 truncate">{a.title}</p>
                    <p className="text-xs text-ink-500 mt-0.5 truncate">{a.course}</p>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className="flex items-center gap-1 text-xs text-ink-500">
                        <Calendar size={11} /> Due {new Date(a.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      <span className={`chip text-[10px] py-0.5 px-2 ${priorityConfig[a.priority]}`}>
                        {a.priority}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-ink-500">
                        <Award size={11} /> {a.points} pts
                      </span>
                    </div>
                  </div>
                </div>
                <Badge variant={cfg.variant}>{cfg.label}</Badge>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}