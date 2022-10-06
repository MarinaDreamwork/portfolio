/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'appearence': 'appearence 3s linear' 
      },
      keyframes: {
        appearence: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}
