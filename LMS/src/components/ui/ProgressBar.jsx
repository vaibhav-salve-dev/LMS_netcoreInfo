export default function ProgressBar({ value = 0, color = 'indigo', height = 'h-2', showLabel = false }) {
  const colors = {
    indigo: 'bg-indigo-500',
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    rose: 'bg-rose-500',
    purple: 'bg-purple-500',
  };
  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-xs font-medium text-ink-500 mb-1.5">
          <span>Progress</span>
          <span>{value}%</span>
        </div>
      )}
      <div className={`w-full ${height} bg-ink-100 rounded-full overflow-hidden`}>
        <div
          className={`${height} ${colors[color]} rounded-full transition-all duration-700 ease-out`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}