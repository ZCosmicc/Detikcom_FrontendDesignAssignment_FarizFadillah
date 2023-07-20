/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Arial", "sans-serif"], // 'sans' refers to the default sans-serif font stack
    },
    extend: {},
  },
  plugins: [],
};
