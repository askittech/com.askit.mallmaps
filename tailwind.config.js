/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.tsx',
    './src/screens/*.tsx',
    './src/core/navigation/navigators/*',
    './src/shared/components/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Lato'],
      },
    },
  },
  plugins: [],
};
