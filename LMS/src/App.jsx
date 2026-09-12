import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Toast from './components/ui/Toast';
import Dashboard from './pages/Dashboard';
import MyCoursesPage from './pages/MyCourses';
import AssignmentsPage from './pages/Assignments';
import CalendarPage from './pages/Calendar';
import LiveClassesPage from './pages/LiveClasses';
import ProgressPage from './pages/Progress';
import CertificatesPage from './pages/Certificates';
import SettingsPage from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<MyCoursesPage />} />
          <Route path="assignments" element={<AssignmentsPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="live-classes" element={<LiveClassesPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="certificates" element={<CertificatesPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Toast />
    </BrowserRouter>
  );
}