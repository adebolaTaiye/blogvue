/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
     padding: '1.5rem',

    },
    // screens: {
    //   sm: '576px',
    //   // => @media (min-width: 576px)
    //   md: '960px'
    //   // => @media (min-width: 960px)
    // },
  },
  plugins: [],
}
