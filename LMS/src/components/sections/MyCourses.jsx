import { useMemo, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import CourseCard from '../ui/CourseCard';
import { useApp } from '../../context/AppContext';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'in-progress', label: 'In Progress' },
  { key: 'completed', label: 'Completed' },
  { key: 'not-started', label: 'Not Started' },
];

export default function MyCourses({ limit }) {
  const { courses } = useApp();
  const [filter, setFilter] = useState('all');
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const query = (params.get('q') || '').toLowerCase().trim();

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchesStatus = filter === 'all' ? true : c.status === filter;
      const matchesQuery =
        !query ||
        c.title.toLowerCase().includes(query) ||
        c.category.toLowerCase().includes(query) ||
        c.instructor.toLowerCase().includes(query);
      return matchesStatus && matchesQuery;
    });
  }, [courses, filter, query]);

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  const clearSearch = () => {
    const next = new URLSearchParams(params);
    next.delete('q');
    navigate({ pathname: '/courses', search: next.toString() });
  };

  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-ink-900">My Courses</h2>
          <p className="text-sm text-ink-500 mt-0.5">
            {filtered.length} {filtered.length === 1 ? 'course' : 'courses'} found
            {query && (
              <>
                {' '}for "<span className="font-medium text-ink-700">{query}</span>"
              </>
            )}
          </p>
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

      {/* Active search pill */}
      {query && (
        <div className="mb-4 flex items-center gap-2">
          <span className="chip bg-indigo-50 text-indigo-700 border border-indigo-100">
            <Search size={12} /> {query}
            <button
              onClick={clearSearch}
              className="ml-1 text-indigo-500 hover:text-indigo-700 font-bold"
              aria-label="Clear search"
            >
              ×
            </button>
          </span>
        </div>
      )}

      {displayed.length === 0 ? (
        <div className="card p-10 text-center">
          <p className="text-ink-500 font-medium">No courses match your criteria.</p>
          {(query || filter !== 'all') && (
            <button
              onClick={() => {
                setFilter('all');
                clearSearch();
              }}
              className="mt-3 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Reset filters
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {displayed.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}

      {limit && filtered.length > limit && (
        <div className="mt-5 flex justify-center sm:hidden">
          <button
            onClick={() => navigate('/courses')}
            className="flex items-center gap-1 text-sm font-semibold text-indigo-600"
          >
            View all courses <ArrowRight size={16} />
          </button>
        </div>
      )}
    </section>
  );
}