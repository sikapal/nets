/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver':'#F5F7FA',
        'neutralDGrey':'#4D4D4D',
        'brandPrimary':'#BF2EF0',
        'neutralGrey':'#717171'
      }
    
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

