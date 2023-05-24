/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      gray: {
        100: 'var(--gray-100)',
        500: 'var(--gray-500)',
      },
      primary: {
        100: 'var(--primary-100)',
        500: 'var(--primary)',
        600: 'var(--primary-600)',
        800: 'var(--primary-800)',
        900: 'var(--primary-900)'
      },
      secondary: {
        500: 'var(--secondary)'
      },
    },
    extend: {},
  },
  plugins: [],
}

