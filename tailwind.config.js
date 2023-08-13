/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FF31",
        customBlack: "#151515",
        customDark: "#1E1E1E",
        customGray: "#6A6A6E",
        customLight: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
