import AssignmentsSection from '../components/sections/Assignments';

export default function AssignmentsPage() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">Assignments</h1>
        <p className="text-sm text-ink-500 mt-1">Track all your assignments and submissions</p>
      </div>
      <AssignmentsSection />
    </div>
  );
}