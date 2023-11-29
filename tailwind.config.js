/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "purple-dark": "var(--purple-dark)",
        "red": "var(--red)",
        "yellow": "var(--yellow)",
        "blue": "var(--blue)",
        "grey": "var(--grey)",
     },
     fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      "gabriel_weiss_friends": ['gabriel_weiss_friends'],
    },
    },
  },
  plugins: [],
}