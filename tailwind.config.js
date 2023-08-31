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
        // used for subtitle
        caveatRegular: "CaveatRegular",
        caveatBold: "CaveatBold",
        caveatMedium: "CaveatMedium",
        caveatSemiBold: "CaveatSemiBold",
        // Globally use
        jostBold: "JostBold",
        jostBlack: "JostBlack",
        jostExtraBold: "JostExtraBold",
        jostExtraLight: "JostExtraLight",
        jostLight: "JostLight",
        jostMedium: "JostMedium",
        jostRegular: "JostRegular",
        jostSemiBold: "JostSemiBold",
        // Stroke font for heading & title
        poppinsBold: "PoppinsBold",
        poppinsBoldItalic: "PoppinsBoldItalic",
        poppinsBlack: "PoppinsBlack",
        poppinsBlackItalic: "PoppinsBlackItalic",
        poppinsExtraBold: "PoppinsExtraBold",
        poppinsExtraBoldItalic: "PoppinsExtraBoldItalic",
      },
    },
    height: {
      "[30rem]": "30rem",
      screen: ["100vh"],
      full: ["100%"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".stroke-text-light": {
          "-webkit-text-stroke-width": "2px",
          "-webkit-text-stroke-color": "#000",
        },
        ".stroke-text-dark": {
          "-webkit-text-stroke-width": "2px",
          "-webkit-text-stroke-color": "#fff",
        },
        ".stroke-text-light-gradient": {
          "-webkit-text-stroke-width": "2px",
          "-webkit-text-stroke-color": "transparent",
          background: "-webkit-linear-gradient(45deg, #08AEEA, #2AF598)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".stroke-text-dark-gradient": {
          "-webkit-text-stroke-width": "2px",
          "-webkit-text-stroke-color": "transparent",
          background: "-webkit-linear-gradient(45deg, #08AEEA, #2AF598)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover", "dark"]);
    },
  ],
};
