import { useState } from 'react';
import { student } from '../data/mockData';
import Avatar from '../components/ui/Avatar';

function Toggle({ enabled, onChange }) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative w-11 h-6 rounded-full transition ${enabled ? 'bg-indigo-600' : 'bg-ink-200'}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
          enabled ? 'translate-x-5' : ''
        }`}
      />
    </button>
  );
}

export default function SettingsPage() {
  const [prefs, setPrefs] = useState({
    emailNotifications: true,
    pushNotifications: true,
    classReminders: true,
    weeklyReport: false,
    darkMode: false,
  });

  return (
    <div className="max-w-[900px] mx-auto space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-ink-900">Settings</h1>
        <p className="text-sm text-ink-500 mt-1">Manage your account preferences</p>
      </div>

      {/* Profile */}
      <div className="card p-5 lg:p-6">
        <h2 className="text-lg font-bold text-ink-900 mb-5">Profile</h2>
        <div className="flex items-center gap-4 mb-5">
          <Avatar src={student.avatar} size="xl" alt={student.name} />
          <div>
            <p className="font-semibold text-ink-900">{student.name}</p>
            <p className="text-sm text-ink-500">{student.email}</p>
            <button className="mt-2 text-xs font-semibold text-indigo-600">Change photo</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-ink-700 block mb-1.5">Full name</label>
            <input defaultValue={student.name} className="w-full px-4 py-2.5 rounded-xl border border-ink-100 bg-white focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium text-ink-700 block mb-1.5">Email</label>
            <input defaultValue={student.email} className="w-full px-4 py-2.5 rounded-xl border border-ink-100 bg-white focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 text-sm" />
          </div>
        </div>
        <button className="mt-5 px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition">
          Save changes
        </button>
      </div>

      {/* Notifications */}
      <div className="card p-5 lg:p-6">
        <h2 className="text-lg font-bold text-ink-900 mb-5">Notifications</h2>
        <div className="space-y-4">
          {[
            ['emailNotifications', 'Email notifications', 'Receive updates via email'],
            ['pushNotifications', 'Push notifications', 'Get browser push notifications'],
            ['classReminders', 'Class reminders', 'Reminders 15 min before class'],
            ['weeklyReport', 'Weekly progress report', 'Summary of your week'],
          ].map(([key, label, desc]) => (
            <div key={key} className="flex items-center justify-between gap-4 py-2">
              <div>
                <p className="text-sm font-medium text-ink-900">{label}</p>
                <p className="text-xs text-ink-500 mt-0.5">{desc}</p>
              </div>
              <Toggle enabled={prefs[key]} onChange={(v) => setPrefs({ ...prefs, [key]: v })} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}