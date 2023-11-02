module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#d9d9d9" },
        black: { 900: "#000000", "900_68": "#00000068" },
        gray: { 800: "#3a3a3a" },
        red: { 400: "#e05c5c", "400_01": "#e05d5d" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        altehaasgrotesk: "Alte Haas Grotesk",
        sourcesanspro: "Source Sans Pro",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
