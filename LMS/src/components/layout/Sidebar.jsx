import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, BookOpen, ClipboardList, Calendar, Video,
  TrendingUp, Award, Settings, X, GraduationCap,
} from 'lucide-react';

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/courses', label: 'My Courses', icon: BookOpen },
  { to: '/assignments', label: 'Assignments', icon: ClipboardList },
  { to: '/calendar', label: 'Calendar', icon: Calendar },
  { to: '/live-classes', label: 'Live Classes', icon: Video },
  { to: '/progress', label: 'Progress', icon: TrendingUp },
  { to: '/certificates', label: 'Certificates', icon: Award },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-ink-900/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-white border-r border-ink-100 flex flex-col transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-ink-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <GraduationCap size={20} className="text-white" />
            </div>
            <span className="text-lg font-bold text-ink-900">EduFlow</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-ink-500 hover:text-ink-900">
            <X size={20} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          <p className="px-3 mb-3 text-xs font-semibold text-ink-400 uppercase tracking-wider">Menu</p>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-ink-500 hover:bg-ink-50 hover:text-ink-900'
                  }`
                }
              >
                <Icon size={18} strokeWidth={2.2} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Upgrade card */}
        <div className="p-4">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-4 text-white">
            <p className="text-sm font-semibold">Upgrade to Pro</p>
            <p className="text-xs text-white/80 mt-1">Unlock unlimited courses and certificates.</p>
            <button className="mt-3 w-full py-2 rounded-lg bg-white text-indigo-600 text-xs font-semibold hover:bg-white/90 transition">
              Upgrade Now
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}