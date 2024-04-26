 // tailwind.config.js
 module.exports = {

  mode: 'jit',

  purge: [],

  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors: {
        'custom-color-0': '#252525',
        'custom-color-1': '#fff',
        'custom-color-2': '#006699', // Define tu color personalizado aquí
      },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }

