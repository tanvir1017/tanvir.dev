/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
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
