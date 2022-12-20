/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: [path.join(__dirname, './src/**/*.(js|jsx|ts|tsx)')],
  theme: {
    extend: {
      fontFamily: {
        // eslint-disable-next-line quote-props
        'rubik': ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/line-clamp'),
  ],
};
