/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14B8A6',
          light: '#5EEAD4',
          dark: '#0F766E'
        },
        accent: {
          DEFAULT: '#38bdf8',
          indigo: '#6366f1'
        },
        background: '#ffffff',
        surface: '#f8fafc',
        text: {
          main: '#0f172a',
          muted: '#64748b'
        },
        danger: '#ef4444',
        success: '#10b981',
        warning: '#f59e0b'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
