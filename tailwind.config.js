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
        caveatSemiBold: "CaveatSemiBold",

        // Globally use
        firaSansRegular: "FiraSansRegular",
        firaSansItalic: "FiraSansItalic",
        firaSansLight: "FiraSansLight",
        firaSansLightItalic: "FiraSansLightItalic",
        firaSansExtraLight: "FiraSansExtraLight",
        firaSansExtraLightItalic: "FiraSansExtraLightItalic",
        firaSansMedium: "FiraSansMedium",
        firaSansMediumItalic: "FiraSansMediumItalic",
        firaSansSemiBold: "FiraSansSemiBold",
        firaSansSemiBoldItalic: "FiraSansSemiBoldItalic",
        firaSansBold: "FiraSansBold",
        firaSansBoldItalic: "FiraSansBoldItalic",
        firaSansExtraBold: "FiraSansExtraBold",
        firaSansExtraBoldItalic: "FiraSansExtraBoldItalic",
        firaSansBlack: "FiraSansBlack",
        firaSansBlackItalic: "FiraSansBlackItalic",

        // Stroke font for heading & title
        poppinsBold: "PoppinsBold",
        poppinsBoldItalic: "PoppinsBoldItalic",
        poppinsBlack: "PoppinsBlack",
        poppinsBlackItalic: "PoppinsBlackItalic",
        poppinsExtraBold: "PoppinsExtraBold",
        poppinsExtraBoldItalic: "PoppinsExtraBoldItalic",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".App": {
          "min-height": "100vh",
          display: "flex",
          "flex-direction": "column",
        },
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
