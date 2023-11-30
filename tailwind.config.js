/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        1200: '1200px',    
        920: '920px',
        600: '600px',
        500: '500px'
      },
    },
  },
  plugins: [],
}

