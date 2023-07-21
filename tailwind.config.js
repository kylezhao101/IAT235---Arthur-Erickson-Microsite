/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', './*.js' 
  
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-landing' : "url('/img/UBCMOA01.png')"
      },
      height:{
        'screen-80' : '80dvh',
        'screen-70' : '70dvh',
        'screen-60' : '60dvh',
        'screen-50' : '50dvh',
        'screen-40' : '40dvh',
        'screen-30' : '30dvh',
        'screen-20' : '20dvh',
      },
      width:{
        'screen-20' : '20vw',
      },
      gap:{
        'screen-w-15' : '15vw'
      }
    },
  },
  plugins: [],
}

