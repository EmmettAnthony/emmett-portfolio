/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      red: '#ff0000',
      blue: '#3b82f6',
      gray: '#576574',
      cyan: '#06b6d4'
    },
    extend: {
      fontFamily: {
        signature: ["Great Vibes"],
      },
    },
  },
  plugins: [],
}

