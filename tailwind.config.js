/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pricing.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          300: '#06b6d4',
          400: '#06b6d4',
          500: '#06b6d4',
          600: '#0891b2',
        }
      }
    },
  },
  plugins: [],
}
