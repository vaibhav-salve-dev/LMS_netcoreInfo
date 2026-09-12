import { useState } from 'react';
import { Save, Camera } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Avatar from '../components/ui/Avatar';

function Toggle({ enabled, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={`relative w-11 h-6 rounded-full transition ${
        enabled ? 'bg-indigo-600' : 'bg-ink-200'
      }`}
      aria-pressed={enabled}
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
  const { student, setStudent, prefs, setPrefs, showToast } = useApp();

  const [form, setForm] = useState({
    name: student.name,
    email: student.email,
  });
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    if (!form.name.trim() || !form.email.trim()) {
      showToast('Please fill in name and email');
      return;
    }
    setSaving(true);
    setTimeout(() => {
      setStudent({
        ...student,
        name: form.name.trim(),
        email: form.email.trim(),
        firstName: form.name.trim().split(' ')[0],
      });
      setSaving(false);
      showToast('Profile updated successfully');
    }, 400);
  };

  const resetForm = () => {
    setForm({ name: student.name, email: student.email });
  };

  const isDirty = form.name !== student.name || form.email !== student.email;

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
            <button
              onClick={() => showToast('Photo upload coming soon')}
              className="mt-2 text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
            >
              <Camera size={12} /> Change photo
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-ink-700 block mb-1.5">
              Full name
            </label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-ink-100 bg-white focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-ink-700 block mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-ink-100 bg-white focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 text-sm"
            />
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={handleSave}
            disabled={!isDirty || saving}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition flex items-center gap-2 ${
              isDirty && !saving
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-ink-100 text-ink-400 cursor-not-allowed'
            }`}
          >
            <Save size={16} />
            {saving ? 'Saving...' : 'Save changes'}
          </button>
          {isDirty && (
            <button
              onClick={resetForm}
              className="text-sm font-medium text-ink-500 hover:text-ink-900"
            >
              Cancel
            </button>
          )}
        </div>
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
            <div
              key={key}
              className="flex items-center justify-between gap-4 py-2"
            >
              <div>
                <p className="text-sm font-medium text-ink-900">{label}</p>
                <p className="text-xs text-ink-500 mt-0.5">{desc}</p>
              </div>
              <Toggle
                enabled={prefs[key]}
                onChange={(v) => setPrefs({ ...prefs, [key]: v })}
              />
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}