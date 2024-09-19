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
      spacing:{
        730: '45.625rem',
        445: '27.8125rem',
        327: '87.2%',
        285: '17.8125rem',
        280: '17.5rem',
        248: '15.5rem',
        200: '12.5rem',
        175: '10.9375rem',
        74: '4.625rem',
        55: '3.4375rem',
        36: '11.01%',
        32: '9.79%',
        20:'6.12%',
      },
      lineHeight: {
        200: '200%',
        160: '160%',
        155: '155%',
        150: '150%',
        140: '140%',
        125: '125%',
        120: '120%',
        100: '100%',
        85: '85%',
        80: '80%',
      },
      fontSize: {
        56: '3.5rem',
        48: '3rem',
        40: '2.5rem',
        32: '2rem',
        20: '1.25rem',
        18: '1.125rem',
        17: '1.0625rem',
        14: '0.875rem',
        13: '0.8125rem',
        12: '0.75rem',
      },
    },
  },
  plugins: [],
}

