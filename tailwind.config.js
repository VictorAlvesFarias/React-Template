/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{js,ts,jsx,tsx,html}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins:[
  ],
  theme: {
    extend: {
    },
  },
  "tailwindCSS.classAttributes": [
    "class",
    "className",
    "ngClass",
    ".*Styles.*" // Add ".*Styles.*" (or whatever matches your naming scheme)
  ]
}