/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      backgroundImage: {
        "portfolio-bg": "url('/src/assets/bg.jpg')",
      },
      variants: {
        extend: {
          ringWidth: ["focus"],
          ringColor: ["focus"],
        },
      },
    },
  },
  plugins: [],
};
