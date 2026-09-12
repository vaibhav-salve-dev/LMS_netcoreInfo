import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { progressData, skillProgress } from '../../data/mockData';

export default function LearningProgress() {
  return (
    <div className="card p-5 lg:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
        <div>
          <h2 className="text-lg font-bold text-ink-900">Learning Progress</h2>
          <p className="text-sm text-ink-500 mt-0.5">Your study hours & completions</p>
        </div>
        <select className="text-sm px-3 py-1.5 rounded-lg border border-ink-100 bg-white text-ink-700 focus:outline-none focus:border-indigo-300">
          <option>Last 8 weeks</option>
          <option>Last 4 weeks</option>
          <option>Last 12 weeks</option>
        </select>
      </div>

      {/* 👇 Added outline-none + select-none + WebkitTapHighlightColor */}
      <div
        className="h-64 -ml-4 outline-none select-none"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={progressData}
            style={{ outline: 'none' }}
            tabIndex={-1}
          >
            <defs>
              <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" vertical={false} />
            <XAxis
              dataKey="week"
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: '1px solid #e2e8f0',
                fontSize: 12,
                outline: 'none',
              }}
              cursor={{ stroke: '#6366f1', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Area
              type="monotone"
              dataKey="hours"
              stroke="#6366f1"
              strokeWidth={2.5}
              fill="url(#colorHours)"
              activeDot={{ r: 5, strokeWidth: 2, stroke: '#fff' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 pt-6 border-t border-ink-100">
        <h3 className="text-sm font-semibold text-ink-900 mb-4">Skill Proficiency</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          {skillProgress.map((s) => (
            <div key={s.skill}>
              <div className="flex justify-between text-xs font-medium text-ink-700 mb-1.5">
                <span>{s.skill}</span>
                <span>{s.value}%</span>
              </div>
              <div className="w-full h-2 bg-ink-100 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full transition-all duration-700"
                  style={{ width: `${s.value}%`, backgroundColor: s.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}