import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color':'#0FE0BB',
      },
      fontSize:{
        'big-size':'40px',
      }
    },
  },
  plugins: [
    plugin(function({addBase, addComponents, addUtilities, theme}){
      addComponents({
       '.btn':{
        display:'inline-block',
        color:'red'
       }
      }),
      addUtilities({
        '.hide': {
          display:'none',
        },
      })
    })
  ],
}

