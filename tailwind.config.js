/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        caveatRegular: "CaveatRegular",
        caveatBold: "CaveatBold",
        caveatMedium: "CaveatMedium",
        caveatSemiBold: "CaveatSemiBold",
        jostBold: "JostBold",
        jostBlack: "JostBlack",
        jostExtraBold: "JostExtraBold",
        jostExtraLight: "JostExtraLight",
        jostLight: "JostLight",
        jostMedium: "JostMedium",
        jostRegular: "JostRegular",
        jostSemiBold: "JostSemiBold",
      },
    },
    height: {
      "[30rem]": "30rem",
      screen: ["100vh"],
      full: ["100%"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
