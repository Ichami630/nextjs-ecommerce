import type { Config } from 'tailwindcss';
import scrollbarHide from 'tailwind-scrollbar-hide';

const config: Config = {
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
  plugins: [scrollbarHide],
};

export default config;
