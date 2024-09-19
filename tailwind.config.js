/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-900': '#48556A',
        'blue-800': '#6E8098',
        'blue-700': '#9DAEC2',
        'blue-300': '#ECF2F8',
      },
      boxShadow: {
        'card-shadow': '0 40px 40px -10px rgba(201, 213, 225, 0.5034)',
        'popup-shadow': '0 10px 10px rgba(201, 213, 225, 0.5034)',
      },
    },
  },
  plugins: [],
}

