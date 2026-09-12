export const student = {
  name: 'Aarav Sharma',
  firstName: 'Aarav',
  role: 'Student',
  email: 'aarav.sharma@email.com',
  avatar: 'https://i.pravatar.cc/150?img=12',
  level: 'Intermediate',
  streak: 12,
};

export const stats = [
  {
    id: 1,
    label: 'Enrolled Courses',
    value: 12,
    icon: 'BookOpen',
    change: '+2 this month',
    trend: 'up',
    color: 'indigo',
  },
  {
    id: 2,
    label: 'Completed Courses',
    value: 8,
    icon: 'GraduationCap',
    change: '+1 this week',
    trend: 'up',
    color: 'emerald',
  },
  {
    id: 3,
    label: 'Overall Progress',
    value: 72,
    suffix: '%',
    icon: 'TrendingUp',
    change: '+8% this month',
    trend: 'up',
    color: 'amber',
  },
  {
    id: 4,
    label: 'Learning Hours',
    value: 148,
    icon: 'Clock',
    change: '+12h this week',
    trend: 'up',
    color: 'rose',
  },
];

export const continueLearning = [
  {
    id: 'c1',
    title: 'Advanced React Patterns',
    instructor: 'Sarah Chen',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80',
    progress: 68,
    totalLessons: 42,
    completedLessons: 29,
    category: 'Development',
    lastAccessed: '2 hours ago',
    duration: '8h 20m',
  },
  {
    id: 'c2',
    title: 'UI/UX Design Fundamentals',
    instructor: 'Marcus Lee',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80',
    progress: 45,
    totalLessons: 36,
    completedLessons: 16,
    category: 'Design',
    lastAccessed: 'Yesterday',
    duration: '6h 15m',
  },
  {
    id: 'c3',
    title: 'Data Structures Masterclass',
    instructor: 'Priya Nair',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&q=80',
    progress: 82,
    totalLessons: 50,
    completedLessons: 41,
    category: 'Computer Science',
    lastAccessed: '3 days ago',
    duration: '12h 40m',
  },
];

export const myCourses = [
  { id: 'm1', title: 'Advanced React Patterns', category: 'Development', status: 'in-progress', progress: 68, lessons: 42, instructor: 'Sarah Chen', thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80', rating: 4.8, students: 12480 },
  { id: 'm2', title: 'UI/UX Design Fundamentals', category: 'Design', status: 'in-progress', progress: 45, lessons: 36, instructor: 'Marcus Lee', thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80', rating: 4.7, students: 9320 },
  { id: 'm3', title: 'Data Structures Masterclass', category: 'Computer Science', status: 'in-progress', progress: 82, lessons: 50, instructor: 'Priya Nair', thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&q=80', rating: 4.9, students: 15600 },
  { id: 'm4', title: 'Digital Marketing 101', category: 'Marketing', status: 'completed', progress: 100, lessons: 28, instructor: 'James Wilson', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80', rating: 4.6, students: 8100 },
  { id: 'm5', title: 'Python for Data Science', category: 'Data Science', status: 'completed', progress: 100, lessons: 45, instructor: 'Ananya Rao', thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&q=80', rating: 4.8, students: 22000 },
  { id: 'm6', title: 'Mobile App Development', category: 'Development', status: 'not-started', progress: 0, lessons: 38, instructor: 'David Kim', thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80', rating: 4.5, students: 5400 },
  { id: 'm7', title: 'Cloud Computing Basics', category: 'Cloud', status: 'not-started', progress: 0, lessons: 32, instructor: 'Elena Petrova', thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80', rating: 4.7, students: 6700 },
  { id: 'm8', title: 'Business Analytics', category: 'Business', status: 'completed', progress: 100, lessons: 30, instructor: 'Tom Harris', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80', rating: 4.6, students: 4300 },
];

export const upcomingClasses = [
  { id: 'u1', title: 'React Hooks Deep Dive', instructor: 'Sarah Chen', time: '10:00 AM', date: 'Today', duration: '60 min', platform: 'Zoom', color: 'indigo', joined: false },
  { id: 'u2', title: 'Design Systems Workshop', instructor: 'Marcus Lee', time: '2:30 PM', date: 'Today', duration: '90 min', platform: 'Google Meet', color: 'emerald', joined: false },
  { id: 'u3', title: 'Algorithm Problem Solving', instructor: 'Priya Nair', time: '11:00 AM', date: 'Tomorrow', duration: '75 min', platform: 'Zoom', color: 'amber', joined: false },
  { id: 'u4', title: 'Portfolio Review Session', instructor: 'James Wilson', time: '4:00 PM', date: 'Tomorrow', duration: '45 min', platform: 'Google Meet', color: 'rose', joined: false },
];

export const assignments = [
  { id: 'a1', title: 'Build a Todo App with React', course: 'Advanced React Patterns', dueDate: '2025-01-18', status: 'pending', priority: 'high', points: 100 },
  { id: 'a2', title: 'Wireframe for Mobile App', course: 'UI/UX Design Fundamentals', dueDate: '2025-01-19', status: 'pending', priority: 'medium', points: 80 },
  { id: 'a3', title: 'Binary Tree Implementation', course: 'Data Structures Masterclass', dueDate: '2025-01-15', status: 'submitted', priority: 'high', points: 120 },
  { id: 'a4', title: 'Marketing Funnel Analysis', course: 'Digital Marketing 101', dueDate: '2025-01-12', status: 'graded', priority: 'low', points: 90, grade: 88 },
  { id: 'a5', title: 'Data Cleaning with Pandas', course: 'Python for Data Science', dueDate: '2025-01-20', status: 'pending', priority: 'medium', points: 100 },
  { id: 'a6', title: 'Cloud Deployment Project', course: 'Cloud Computing Basics', dueDate: '2025-01-11', status: 'overdue', priority: 'high', points: 150 },
];

export const progressData = [
  { week: 'Week 1', hours: 6, completed: 2 },
  { week: 'Week 2', hours: 9, completed: 3 },
  { week: 'Week 3', hours: 7, completed: 2 },
  { week: 'Week 4', hours: 12, completed: 4 },
  { week: 'Week 5', hours: 10, completed: 3 },
  { week: 'Week 6', hours: 14, completed: 5 },
  { week: 'Week 7', hours: 11, completed: 3 },
  { week: 'Week 8', hours: 16, completed: 6 },
];

export const skillProgress = [
  { skill: 'React', value: 85, color: '#6366f1' },
  { skill: 'UI/UX Design', value: 62, color: '#10b981' },
  { skill: 'Data Structures', value: 78, color: '#f59e0b' },
  { skill: 'Python', value: 70, color: '#ef4444' },
];

export const achievements = [
  { id: 'ac1', title: 'First Course Completed', description: 'Completed your first course', icon: 'Trophy', color: 'amber', earned: true, date: 'Dec 12, 2024' },
  { id: 'ac2', title: '7 Day Streak', description: 'Logged in 7 days in a row', icon: 'Flame', color: 'rose', earned: true, date: 'Jan 5, 2025' },
  { id: 'ac3', title: 'Perfect Score', description: 'Scored 100% on an assignment', icon: 'Star', color: 'indigo', earned: true, date: 'Dec 28, 2024' },
  { id: 'ac4', title: 'Top 10% Learner', description: 'Ranked in top 10% this month', icon: 'Award', color: 'emerald', earned: true, date: 'Jan 1, 2025' },
  { id: 'ac5', title: 'Night Owl', description: 'Studied after midnight 5 times', icon: 'Moon', color: 'purple', earned: false, date: null },
  { id: 'ac6', title: 'Marathon Learner', description: 'Study for 5 hours straight', icon: 'Zap', color: 'orange', earned: false, date: null },
];

export const notifications = [
  { id: 'n1', title: 'New assignment posted', description: 'Advanced React Patterns', time: '5 min ago', unread: true, type: 'assignment' },
  { id: 'n2', title: 'Class starting soon', description: 'React Hooks Deep Dive at 10:00 AM', time: '20 min ago', unread: true, type: 'class' },
  { id: 'n3', title: 'Assignment graded', description: 'You scored 88/90 on Marketing Funnel', time: '2 hours ago', unread: false, type: 'grade' },
  { id: 'n4', title: 'Achievement unlocked!', description: '7 Day Streak badge earned', time: '1 day ago', unread: false, type: 'achievement' },
];

export const certificates = [
  { id: 'cert1', title: 'Digital Marketing 101', instructor: 'James Wilson', issuedDate: 'Dec 15, 2024', credentialId: 'DM-2024-0891', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80' },
  { id: 'cert2', title: 'Python for Data Science', instructor: 'Ananya Rao', issuedDate: 'Nov 28, 2024', credentialId: 'PY-2024-1102', thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&q=80' },
  { id: 'cert3', title: 'Business Analytics', instructor: 'Tom Harris', issuedDate: 'Oct 10, 2024', credentialId: 'BA-2024-0453', thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80' },
];