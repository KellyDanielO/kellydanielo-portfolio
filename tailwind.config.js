/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lemon: ['"Lemon"', ...defaultTheme.fontFamily.sans],
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero-image": "url('/src/images/background.jpg')",
      },
      colors: {
        primary: "#00FF00",
        main: "#272727",
        greyColor: "#F0F0F0",
        softColor: "#F5F5DC",
      },
    },
  },
  plugins: [],
};
