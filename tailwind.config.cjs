/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        foreground: "#151A1D",
        background: "#ffffff",
        accent: "#7F9EA3",
      },
      fontFamily: {
        display: ["Lato", ...defaultTheme.fontFamily.sans],
        sans: [
          "Lato",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
