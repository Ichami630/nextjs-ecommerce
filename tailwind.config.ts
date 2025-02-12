/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC000',
        secondary: '#33b6b9 ',
        tertiary: '#e52492',
      },
      fontFamily: {
        body: ['poppins']
      },
    },
  },
  plugins: [],
};
