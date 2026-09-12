import { Clock, Users, Star, Play } from 'lucide-react';
import ProgressBar from './ProgressBar';
import Badge from './Badge';

export default function CourseCard({ course, variant = 'default' }) {
  if (variant === 'continue') {
    return (
      <div className="card overflow-hidden group hover:shadow-card transition-all duration-300 flex flex-col sm:flex-row">
        <div className="relative sm:w-56 h-40 sm:h-auto overflow-hidden shrink-0">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <Badge variant="indigo" className="absolute top-3 left-3 bg-white/90 backdrop-blur">
            {course.category}
          </Badge>
        </div>
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-ink-900 text-base line-clamp-1">{course.title}</h3>
            <p className="text-sm text-ink-500 mt-1">by {course.instructor}</p>
            <div className="flex items-center gap-3 mt-2 text-xs text-ink-500">
              <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
              <span className="flex items-center gap-1"><Play size={12} /> {course.completedLessons}/{course.totalLessons} lessons</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs font-medium text-ink-500 mb-1.5">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <ProgressBar value={course.progress} />
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-ink-400">Last accessed {course.lastAccessed}</span>
              <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                Continue <Play size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden group hover:shadow-card transition-all duration-300 flex flex-col">
      <div className="relative h-40 overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <Badge variant="indigo" className="absolute top-3 left-3 bg-white/90 backdrop-blur">
          {course.category}
        </Badge>
        {course.status === 'completed' && (
          <Badge variant="emerald" className="absolute top-3 right-3 bg-white/90 backdrop-blur">✓ Completed</Badge>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-ink-900 line-clamp-1">{course.title}</h3>
        <p className="text-sm text-ink-500 mt-1">by {course.instructor}</p>
        <div className="flex items-center gap-3 mt-2 text-xs text-ink-500">
          <span className="flex items-center gap-1"><Star size={12} className="fill-amber-400 text-amber-400" /> {course.rating}</span>
          <span className="flex items-center gap-1"><Users size={12} /> {course.students.toLocaleString()}</span>
          <span>{course.lessons} lessons</span>
        </div>
        <div className="mt-auto pt-4">
          <ProgressBar value={course.progress} showLabel />
        </div>
      </div>
    </div>
  );
}