import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Menu, Search, Bell, ChevronDown, LogOut, User,
  Settings as SettingsIcon, X,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import Avatar from '../ui/Avatar';

export default function Header({ onMenuClick }) {
  const { student, notifications, markAllRead, markRead, logout, showToast } = useApp();
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [query, setQuery] = useState('');
  const [mobileSearch, setMobileSearch] = useState(false);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) {
      navigate('/courses');
      return;
    }
    navigate(`/courses?q=${encodeURIComponent(q)}`);
    setMobileSearch(false);
  };

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-ink-100">
      <div className="flex items-center justify-between gap-4 h-20 px-4 sm:px-6 lg:px-8">
        {/* LEFT */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl text-ink-500 hover:bg-ink-50"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          {/* Desktop search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center flex-1 max-w-md"
          >
            <div className="relative w-full">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses, assignments..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-ink-50 border border-transparent focus:border-indigo-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 text-sm text-ink-900 placeholder:text-ink-400 transition-all"
              />
            </div>
          </form>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile search toggle */}
          <button
            onClick={() => setMobileSearch((v) => !v)}
            className="md:hidden p-2.5 rounded-xl text-ink-500 hover:bg-ink-50"
            aria-label="Search"
          >
            {mobileSearch ? <X size={20} /> : <Search size={20} />}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications((v) => !v);
                setShowProfile(false);
              }}
              className="relative p-2.5 rounded-xl text-ink-500 hover:bg-ink-50 transition"
              aria-label="Notifications"
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
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowNotifications(false)}
                />
                <div className="absolute right-0 mt-2 w-80 sm:w-96 card shadow-card z-20 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-ink-100">
                    <p className="font-semibold text-sm">Notifications</p>
                    <button
                      onClick={markAllRead}
                      className="text-xs text-indigo-600 font-medium cursor-pointer hover:text-indigo-700"
                    >
                      Mark all read
                    </button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length === 0 && (
                      <div className="p-6 text-center text-sm text-ink-400">
                        No notifications
                      </div>
                    )}
                    {notifications.map((n) => (
                      <button
                        key={n.id}
                        onClick={() => markRead(n.id)}
                        className={`w-full text-left px-4 py-3 border-b border-ink-50 last:border-0 hover:bg-ink-50/50 cursor-pointer transition ${
                          n.unread ? 'bg-indigo-50/40' : ''
                        }`}
                      >
                        <div className="flex gap-3">
                          <div
                            className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                              n.unread ? 'bg-indigo-500' : 'bg-transparent'
                            }`}
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-ink-900">{n.title}</p>
                            <p className="text-xs text-ink-500 mt-0.5 truncate">
                              {n.description}
                            </p>
                            <p className="text-xs text-ink-400 mt-1">{n.time}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="px-4 py-2.5 text-center border-t border-ink-100">
                    <button
                      onClick={() => {
                        markAllRead();
                        setShowNotifications(false);
                        showToast('All notifications marked as read');
                      }}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                      View all notifications
                    </button>
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
                <p className="text-sm font-semibold text-ink-900 leading-tight">
                  {student.firstName}
                </p>
                <p className="text-xs text-ink-400 leading-tight">{student.role}</p>
              </div>
              <ChevronDown size={16} className="hidden sm:block text-ink-400" />
            </button>

            {showProfile && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowProfile(false)}
                />
                <div className="absolute right-0 mt-2 w-56 card shadow-card z-20 overflow-hidden">
                  <div className="px-4 py-3 border-b border-ink-100">
                    <p className="text-sm font-semibold text-ink-900">{student.name}</p>
                    <p className="text-xs text-ink-500 truncate">{student.email}</p>
                  </div>
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setShowProfile(false);
                        navigate('/settings');
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-ink-700 hover:bg-ink-50"
                    >
                      <User size={16} /> My Profile
                    </button>
                    <button
                      onClick={() => {
                        setShowProfile(false);
                        navigate('/settings');
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-ink-700 hover:bg-ink-50"
                    >
                      <SettingsIcon size={16} /> Settings
                    </button>
                  </div>
                  <div className="border-t border-ink-100 py-1">
                    <button
                      onClick={() => {
                        setShowProfile(false);
                        logout();
                        showToast('Logged out (demo)');
                        navigate('/');
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50"
                    >
                      <LogOut size={16} /> Log out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile search bar (toggled) */}
      {mobileSearch && (
        <form
          onSubmit={handleSearch}
          className="md:hidden px-4 pb-3 border-t border-ink-100"
        >
          <div className="relative pt-3">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400"
              style={{ top: 'calc(50% + 6px)' }}
            />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-ink-50 border border-transparent focus:border-indigo-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 text-sm"
            />
          </div>
        </form>
      )}
    </header>
  );
}