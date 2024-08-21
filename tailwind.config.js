import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1170px'
      },
      colors: {
        'primary': '#FF7628'
      },
      fontFamily: {
        'pap': ['Paprika', 'system-ui'],
        'sans': ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}
