/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: '0 0 15px rgba(59,130,246,0.7)', // Tailwind's blue-500 glow
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
