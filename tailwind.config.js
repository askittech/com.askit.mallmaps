/** @type {import('tailwindcss').Config} */

const colors = require('./src/config/theme/colors');

module.exports = {
  content: [
    './App.tsx',
    './src/components/*.tsx',
    './src/features/**/components/*.tsx',
    './src/features/**/screens/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Lato'],
      },
      colors,
    },
  },
  plugins: [],
};
