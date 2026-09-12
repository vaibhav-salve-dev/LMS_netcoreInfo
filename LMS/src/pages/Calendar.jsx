import { ChevronLeft, ChevronRight } from 'lucide-react';
import { upcomingClasses } from '../data/mockData';

export default function CalendarPage() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = today.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="max-w-[1200px] mx-auto space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">Calendar</h1>
        <p className="text-sm text-ink-500 mt-1">View your schedule and upcoming sessions</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card p-5 lg:p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-ink-900">{monthName}</h2>
            <div className="flex gap-1">
              <button className="p-2 rounded-lg hover:bg-ink-50 text-ink-500"><ChevronLeft size={18} /></button>
              <button className="p-2 rounded-lg hover:bg-ink-50 text-ink-500"><ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center">
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d) => (
              <div key={d} className="text-xs font-semibold text-ink-400 py-2">{d}</div>
            ))}
            {cells.map((d, i) => {
              const isToday = d === today.getDate();
              const hasEvent = d && [3, 8, 12, 15, 18, 22].includes(d);
              return (
                <div
                  key={i}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center text-sm relative cursor-pointer transition ${
                    !d ? '' : isToday
                      ? 'bg-indigo-600 text-white font-bold'
                      : 'hover:bg-ink-50 text-ink-700'
                  }`}
                >
                  {d}
                  {hasEvent && !isToday && (
                    <span className="absolute bottom-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="card p-5 lg:p-6">
          <h3 className="text-lg font-bold text-ink-900 mb-4">This week</h3>
          <div className="space-y-3">
            {upcomingClasses.map((c) => (
              <div key={c.id} className="p-3 rounded-xl bg-ink-50/50">
                <p className="text-sm font-semibold text-ink-900">{c.title}</p>
                <p className="text-xs text-ink-500 mt-1">{c.date} · {c.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}