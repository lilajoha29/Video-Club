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
        'darkBlue': '#192444'
      },
      fontFamily: {
        'Quicksand': ['"Quicksand"','sans-serif']
      },
      backgroundImage: {
        'default': "url('./src/assets/BackDesktop.svg')"
      }
    }
  },
  plugins: [],
}
