/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops) 100%, transparent)",
      },
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        surface: "var(--surface)",
        border: "var(--border)",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
        "pos-200": "200% 200%",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
