/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{jsx,html,js}", "./src/**/*.{jsx,html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        spaceblue: "#080616",
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
