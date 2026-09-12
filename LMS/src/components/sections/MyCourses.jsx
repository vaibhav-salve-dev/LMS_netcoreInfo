import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import CourseCard from '../ui/CourseCard';
import { myCourses } from '../../data/mockData';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'in-progress', label: 'In Progress' },
  { key: 'completed', label: 'Completed' },
  { key: 'not-started', label: 'Not Started' },
];

export default function MyCourses({ limit }) {
  const [filter, setFilter] = useState('all');

  const filtered = myCourses.filter((c) => (filter === 'all' ? true : c.status === filter));
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-ink-900">My Courses</h2>
          <p className="text-sm text-ink-500 mt-0.5">{filtered.length} courses found</p>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide -mx-1 px-1">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`chip whitespace-nowrap ${
                filter === f.key
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-ink-600 border border-ink-100 hover:border-indigo-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {displayed.length === 0 ? (
        <div className="card p-10 text-center text-ink-400">No courses in this category.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {displayed.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}

      {limit && filtered.length > limit && (
        <div className="mt-5 flex justify-center sm:hidden">
          <button className="flex items-center gap-1 text-sm font-semibold text-indigo-600">
            View all courses <ArrowRight size={16} />
          </button>
        </div>
      )}
    </section>
  );
}