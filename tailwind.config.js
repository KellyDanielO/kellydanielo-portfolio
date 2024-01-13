/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'md': '1024px',
      'lg': '1025px',
    },
    extend: {
      fontFamily: {
        lemon: ['"Lemon"', ...defaultTheme.fontFamily.sans],
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero-image": "url('/src/images/bg.jpeg')",
      },
      colors: {
        primary: "#7F00FF",
        main: "#FBF9F1",
        blackColor: "#00000",
        shade: "#E5E1DA",
        greyColor: "#F0F0F0",
        softColor: "#F5F5DC",
      },
    },
  },
  plugins: [],
};
