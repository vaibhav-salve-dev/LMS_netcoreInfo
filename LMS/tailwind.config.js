/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        ink: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          500: '#64748b',
          400: '#94a3b8',
          100: '#f1f5f9',
          50: '#f8fafc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px rgba(15, 23, 42, 0.04)',
        card: '0 4px 20px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [],
};