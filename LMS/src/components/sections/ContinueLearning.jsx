import { ArrowRight } from 'lucide-react';
import CourseCard from '../ui/CourseCard';
import { continueLearning } from '../../data/mockData';

export default function ContinueLearning() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-ink-900">Continue Learning</h2>
          <p className="text-sm text-ink-500 mt-0.5">Pick up where you left off</p>
        </div>
        <button className="hidden sm:flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
          View all <ArrowRight size={16} />
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
        {continueLearning.map((course) => (
          <CourseCard key={course.id} course={course} variant="continue" />
        ))}
      </div>
    </section>
  );
}