/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FCF6F9",
          200: "#EFB5B1",
          300: "#EC958F",
          400: "#E9787A",
          500: "#D77570", // main color
          600: "#C26A67",
          700: "#AE5F5E",
          800: "#9A5455",
          900: "#874A4C",
        },
        secondary: {
          100: "#F2F8F8",
          200: "#C5E1DE",
          300: "#A8D2CD",
          400: "#8BC3BD",
          500: "#72A9A2", // Original color
          600: "#6a9f98",
          700: "#52736E",
          800: "#425854",
          900: "#323D3A",
        },
        accent: {
          100: "#ededec",
          200: "#d2d2d1",
          300: "#b7b7b6",
          400: "#9c9c9a",
          500: "#2C2C2C", // original
          600: "#212529",
          700: "#565655",
          800: "#4b4b4a",
          900: "#40403f",
        },
      },
    },
  },
  plugins: [],
};
