/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'oikos-green':'#0a4879',
        'oikos-white-blue':'#6280c4',
        'oikos-midle-blue':'#0071BD'
      },

    }
  }
}