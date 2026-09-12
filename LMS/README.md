# Netcore Learn : LMS Student Dashboard

A student-facing dashboard for an LMS, built as a portfolio project. It covers the common things a learner needs in one place: tracking enrolled courses, checking assignments, joining live classes, and seeing progress over time.

The data is mocked, so everything runs standalone without a backend.

**Live demo:** [https://netcore-learn.vercel.app/]  
**Repo:** [https://github.com/vaibhav-salve-dev/LMS_netcoreInfo](#)

---

## What's in it

The dashboard has a sidebar and a top bar, and everything lives inside that shell:

- **Overview page** with four stat cards, a continue-learning strip, and a split layout below — charts and assignments on the left, upcoming classes and achievements on the right.
- **My Courses** — filter courses by All / In Progress / Completed / Not Started.
- **Assignments** — list view with due dates, priority tags, and status badges (pending, submitted, graded, overdue).
- **Calendar** — a simple month grid with dots on days that have events, plus a "this week" panel.
- **Live Classes** — cards for upcoming sessions with a join button.
- **Progress** — an area chart of weekly study hours, plus skill proficiency bars.
- **Certificates** — cards for earned certificates with download/verify buttons.
- **Settings** — profile fields, notification toggles, and a preferences section.

The header has a working search input (UI only), a notifications dropdown, and a profile menu.

## Tech

- React 18 with Vite
- React Router v6
- Tailwind CSS 3
- Recharts for the progress chart
- lucide-react for icons

## Running it

You'll need Node 18 or newer.

```bash
npm install
npm run dev