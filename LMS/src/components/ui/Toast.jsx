import { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function Toast() {
  const { toast, setToast } = useApp();

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast, setToast]);

  if (!toast) return null;

  return (
    <div
      key={toast.id}
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-ink-900 text-white pl-4 pr-3 py-3 rounded-xl shadow-card text-sm animate-in fade-in slide-in-from-bottom-2"
      style={{ animation: 'toastIn 250ms ease-out' }}
    >
      <CheckCircle size={18} className="text-emerald-400 shrink-0" />
      <span className="font-medium">{toast.message}</span>
      <button
        onClick={() => setToast(null)}
        className="ml-2 p-1 rounded-lg hover:bg-white/10 transition"
      >
        <X size={14} />
      </button>

      <style>{`
        @keyframes toastIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}