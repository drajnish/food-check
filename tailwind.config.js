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
      keyframes: {
        heart: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        heart: 'heart 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
