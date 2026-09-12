import { useState } from 'react';
import { Menu, Search, Bell, ChevronDown, LogOut, User, Settings as SettingsIcon } from 'lucide-react';
import { student, notifications } from '../../data/mockData';
import Avatar from '../ui/Avatar';

export default function Header({ onMenuClick }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-ink-100">
      <div className="flex items-center justify-between gap-4 h-20 px-4 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl text-ink-500 hover:bg-ink-50"
          >
            <Menu size={20} />
          </button>

          <div className="hidden md:flex items-center flex-1 max-w-md">
            <div className="relative w-full">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
              <input
                type="text"
                placeholder="Search courses, assignments..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-ink-50 border border-transparent focus:border-indigo-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 text-sm text-ink-900 placeholder:text-ink-400 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="md:hidden p-2.5 rounded-xl text-ink-500 hover:bg-ink-50">
            <Search size={20} />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications((v) => !v);
                setShowProfile(false);
              }}
              className="relative p-2.5 rounded-xl text-ink-500 hover:bg-ink-50 transition"
            >
              <Bell size={20} />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowNotifications(false)} />
                <div className="absolute right-0 mt-2 w-80 sm:w-96 card shadow-card z-20 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-ink-100">
                    <p className="font-semibold text-sm">Notifications</p>
                    <span className="text-xs text-indigo-600 font-medium cursor-pointer">Mark all read</span>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`px-4 py-3 border-b border-ink-50 last:border-0 hover:bg-ink-50/50 cursor-pointer transition ${
                          n.unread ? 'bg-indigo-50/40' : ''
                        }`}
                      >
                        <div className="flex gap-3">
                          <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${n.unread ? 'bg-indigo-500' : 'bg-transparent'}`} />
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-ink-900">{n.title}</p>
                            <p className="text-xs text-ink-500 mt-0.5 truncate">{n.description}</p>
                            <p className="text-xs text-ink-400 mt-1">{n.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2.5 text-center border-t border-ink-100">
                    <button className="text-xs font-semibold text-indigo-600">View all notifications</button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => {
                setShowProfile((v) => !v);
                setShowNotifications(false);
              }}
              className="flex items-center gap-2 pl-1 pr-2 sm:pr-3 py-1 rounded-xl hover:bg-ink-50 transition"
            >
              <Avatar src={student.avatar} alt={student.name} size="md" />
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-ink-900 leading-tight">{student.firstName}</p>
                <p className="text-xs text-ink-400 leading-tight">{student.role}</p>
              </div>
              <ChevronDown size={16} className="hidden sm:block text-ink-400" />
            </button>

            {showProfile && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowProfile(false)} />
                <div className="absolute right-0 mt-2 w-56 card shadow-card z-20 overflow-hidden">
                  <div className="px-4 py-3 border-b border-ink-100">
                    <p className="text-sm font-semibold text-ink-900">{student.name}</p>
                    <p className="text-xs text-ink-500 truncate">{student.email}</p>
                  </div>
                  <div className="py-1">
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-ink-700 hover:bg-ink-50">
                      <User size={16} /> My Profile
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-ink-700 hover:bg-ink-50">
                      <SettingsIcon size={16} /> Settings
                    </button>
                  </div>
                  <div className="border-t border-ink-100 py-1">
                    <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50">
                      <LogOut size={16} /> Log out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}