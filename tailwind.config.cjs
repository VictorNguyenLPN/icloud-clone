/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        customBG: {
          darkLess: "rgb(44, 44, 46, 1)",
          dark: "rgb(28, 28, 30, 1)",
          darker: "rgb(24, 24, 26, 1)",
          darkest: "rgb(20, 20, 20, 1)",
        },
      },
      fontWeight: {
        customFW: {
          semibold: 600,
        },
      },
    },
  },
  plugins: [],
};
