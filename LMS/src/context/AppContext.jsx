import { createContext, useContext, useEffect, useState } from 'react';
import * as seed from '../data/mockData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Student profile — persisted
  const [student, setStudent] = useState(() => {
    try {
      const saved = localStorage.getItem('lms_student');
      return saved ? JSON.parse(saved) : seed.student;
    } catch {
      return seed.student;
    }
  });

  // Static seeded data
  const [courses] = useState(seed.myCourses);
  const [assignments] = useState(seed.assignments);

  // Notifications — mutable so "mark read" works
  const [notifications, setNotifications] = useState(seed.notifications);

  // Preferences — persisted
  const [prefs, setPrefs] = useState(() => {
    try {
      const saved = localStorage.getItem('lms_prefs');
      return saved
        ? JSON.parse(saved)
        : {
            emailNotifications: true,
            pushNotifications: true,
            classReminders: true,
            weeklyReport: false,
            
          };
    } catch {
      return {
        emailNotifications: true,
        pushNotifications: true,
        classReminders: true,
        weeklyReport: false,
        
      };
    }
  });

  // Toast
  const [toast, setToast] = useState(null);
  const showToast = (message) => setToast({ message, id: Date.now() });

  // Persist student
  useEffect(() => {
    localStorage.setItem('lms_student', JSON.stringify(student));
  }, [student]);

  // Persist prefs
  useEffect(() => {
    localStorage.setItem('lms_prefs', JSON.stringify(prefs));
  }, [prefs]);

  const markAllRead = () =>
    setNotifications((n) => n.map((x) => ({ ...x, unread: false })));

  const markRead = (id) =>
    setNotifications((n) =>
      n.map((x) => (x.id === id ? { ...x, unread: false } : x))
    );

  const logout = () => {
    localStorage.removeItem('lms_student');
    setStudent(seed.student);
  };

  return (
    <AppContext.Provider
      value={{
        student,
        setStudent,
        courses,
        assignments,
        notifications,
        markAllRead,
        markRead,
        prefs,
        setPrefs,
        logout,
        toast,
        showToast,
        setToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};