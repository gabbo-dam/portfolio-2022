/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#888',
        card: '#111',
      },
      keyframes: {
        fade1: {
          '0%, 16.667%, 100%': { color: 'transparent' },
          '33.333%, 83.333%': { color: 'white' },
        },
        fade2: {
          '0%, 100%': { color: 'white' },
          '33.333%, 50%': { color: 'transparent' },
          '16.667%, 66.667%': { color: 'white' },
        },
        fade3: {
          '0%, 50%, 100%': { color: 'white' },
          '66.667%, 83.333%': { color: 'transparent' },
        },
      },
      animation: {
        fade1: 'fade1 9s infinite',
        fade2: 'fade2 9s infinite',
        fade3: 'fade3 9s infinite',
      },
    },
  },
};
