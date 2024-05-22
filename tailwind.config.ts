import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
        freeman: ['"Freeman"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#37e602",
        main: "#000000",
        shade: "#121212",
        blackColor: "#00000",
        greyColor: "#999999",
        softColor: "#F5F5DC",
      },
    },
  },
  plugins: [],
};
export default config;
