/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        ink: '#0C0C0C',
        mist: '#D7E2EA',
        steel: '#646973',
      },
      keyframes: {
        nudge: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(6px)' },
        },
      },
      animation: {
        nudge: 'nudge 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
