/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
    },
  },
  plugins: [],
};
