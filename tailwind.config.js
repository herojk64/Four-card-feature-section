/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: 'hsl(0, 78%, 62%)',
          cyan: 'hsl(180, 62%, 55%)',
          orange: 'hsl(34, 97%, 64%)',
          blue: 'hsl(212, 86%, 64%)',
        },
        neutral: {
          veryDarkBlue: 'hsl(234, 12%, 34%)',
          grayishBlue: 'hsl(229, 6%, 66%)',
          veryLightGray: 'hsl(0, 0%, 98%)',
        },
      },
      backgroundColor:{
        primary: {
          red: 'hsl(0, 78%, 62%)',
          cyan: 'hsl(180, 62%, 55%)',
          orange: 'hsl(34, 97%, 64%)',
          blue: 'hsl(212, 86%, 64%)',
        },
        neutral: {
          veryDarkBlue: 'hsl(234, 12%, 34%)',
          grayishBlue: 'hsl(229, 6%, 66%)',
          veryLightGray: 'hsl(0, 0%, 98%)',
        },
      }
      ,
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        body: '15px',
      }
    },
  },
  plugins: [],
}