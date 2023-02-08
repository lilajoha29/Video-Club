/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'lightRed': '#8F3D38',
        'darkRed': '#56070C',
        'lightBlue': '#192444',
        'darkBlue': '#0D1222',
        'lightYellow': '#FBE16E',
        'darkYellow': '#F4BC5F'
      },
      fontFamily: {
        Quicksand: "'Quicksand','sans-serif'"
      },
      backgroundImage: {
        'default': "url('./src/assets/BackDesktop.svg')"
      }
    },
    screens: {
      'md': '768px',
      'lg': '860px'
    }
  },
  plugins: [],
}
