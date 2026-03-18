/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '322px',
        'sm': '426px',
        'md': '768px',
        'lg': '1025px',
      },
    },
  },
  plugins: [],
}