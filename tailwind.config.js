const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        "main": "#00B207",
        "socMain": "#2C742F",
        "white": "#F2F2F2",
        "black": "#191919",
        "rate": "#ffc908"
      },
      fontFamily: {
        "main": ['Poppins', 'sans-serif'], // Adds a new `font-display` class
      },
      spacing: {
        'H1': '55px',
        'H2': '42px',
        'H3': '27px',
        'H4': '25px',
        'B1': '22px',
        'B2': '18px',
        'B2': '16px',
      },
    },
    container: {
      center: true,
    },
    darkMode: "class",
  },
  plugins: [
    nextui(),

  ],
}

