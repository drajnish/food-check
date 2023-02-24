/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,}'],
  theme: {
    fontFamily: {
      Merienda: ['Merienda', 'cursive', 'sans', 'sans-serif'],
    },
    extend: {
      outline: {
        transparent: '1px solid transparent',
      },
    },
  },
  plugins: [],
};
