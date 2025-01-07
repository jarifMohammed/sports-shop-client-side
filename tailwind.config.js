/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
import daisyui from 'daisyui';

export default {
  darkMode: 'class',
=======
export default {
  darkMode:'class',

>>>>>>> 2a1f45546f844368530cb74a92dc1d891e878130
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
<<<<<<< HEAD
    daisyui,
  ],
};
=======
    require('daisyui'),
  ],
}
>>>>>>> 2a1f45546f844368530cb74a92dc1d891e878130
