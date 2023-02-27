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
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        heart: 'heart 1s ease-in-out infinite',
        shimmer:
          'shimmer 3s bg-gradient-to-r from-#e6e6e6-5% to-#cccccc-25%-#e6e6e6-35%) infinite',
      },
    },
  },
  plugins: [],
};
