import LearningProgress from '../components/sections/LearningProgress';
import { stats, achievements } from '../data/mockData';

export default function ProgressPage() {
  const earned = achievements.filter((a) => a.earned).length;
  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">Learning Progress</h1>
        <p className="text-sm text-ink-500 mt-1">Detailed analytics on your learning journey</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
        <div className="card p-5">
          <p className="text-sm text-ink-500">Total Hours</p>
          <p className="text-3xl font-bold text-ink-900 mt-1">148h</p>
          <p className="text-xs text-emerald-600 mt-2">+12h this week</p>
        </div>
        <div className="card p-5">
          <p className="text-sm text-ink-500">Average Score</p>
          <p className="text-3xl font-bold text-ink-900 mt-1">88%</p>
          <p className="text-xs text-emerald-600 mt-2">+4% vs last month</p>
        </div>
        <div className="card p-5">
          <p className="text-sm text-ink-500">Achievements</p>
          <p className="text-3xl font-bold text-ink-900 mt-1">{earned}/{achievements.length}</p>
          <p className="text-xs text-ink-500 mt-2">Keep going!</p>
        </div>
      </div>
      <LearningProgress />
    </div>
  );
}