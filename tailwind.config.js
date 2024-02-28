/** @type {import('tailwindcss').Config} */
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
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#bce7ff',
          300: '#8edaff',
          400: '#59c2ff',
          500: '#2fa4ff',
          600: '#1b87f5',
          700: '#146fe1',
          800: '#1759b6',
          900: '#194d8f',
          950: '#142f57',
          DEFAULT: '#2fa4ff',
        },
      },
    },
  },
  plugins: [],
};
