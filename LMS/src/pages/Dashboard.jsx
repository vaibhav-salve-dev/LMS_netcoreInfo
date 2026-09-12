import { student } from '../data/mockData';
import StatisticsCards from '../components/sections/StatisticsCards';
import ContinueLearning from '../components/sections/ContinueLearning';
import MyCourses from '../components/sections/MyCourses';
import UpcomingClasses from '../components/sections/UpcomingClasses';
import Assignments from '../components/sections/Assignments';
import LearningProgress from '../components/sections/LearningProgress';
import Achievements from '../components/sections/Achievements';

export default function Dashboard() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric',
  });

  return (
    <div className="space-y-6 lg:space-y-8 max-w-[1600px] mx-auto">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">
            Welcome back, {student.firstName} 👋
          </h1>
          <p className="text-sm text-ink-500 mt-1">
            {today} · You're on a {student.streak}-day learning streak. Keep it up!
          </p>
        </div>
        <button className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition shadow-soft">
          Resume last lesson
        </button>
      </div>

      <StatisticsCards />
      <ContinueLearning />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-6">
        <div className="xl:col-span-2 space-y-4 lg:space-y-6">
          <LearningProgress />
          <Assignments limit={4} />
        </div>
        <div className="space-y-4 lg:space-y-6">
          <UpcomingClasses />
          <Achievements />
        </div>
      </div>

      <MyCourses limit={4} />
    </div>
  );
}