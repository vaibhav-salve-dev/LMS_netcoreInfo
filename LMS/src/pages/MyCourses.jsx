import MyCoursesSection from '../components/sections/MyCourses';

export default function MyCoursesPage() {
  return (
    <div className="max-w-[1600px] mx-auto space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">My Courses</h1>
        <p className="text-sm text-ink-500 mt-1">Browse and manage all your enrolled courses</p>
      </div>
      <MyCoursesSection />
    </div>
  );
}