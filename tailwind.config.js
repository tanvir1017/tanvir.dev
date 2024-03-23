/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        CaveatSemi: "CaveatSemi",

        // Globally use
        HubotSansReguler: "HubotSansReguler",
        HubotSansItalic: "HubotSansItalic",
        HubotSansLight: "HubotSansLight",
        HubotSansBlack: "HubotSansBlack",
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
          "-webkit-text-strokeWidth": "2px",
          "-webkit-text-stroke-color": "#000",
        },
        ".stroke-text-dark": {
          "-webkit-text-strokeWidth": "2px",
          "-webkit-text-stroke-color": "#fff",
        },
        ".stroke-text-light-gradient": {
          "-webkit-text-strokeWidth": "2px",
          "-webkit-text-stroke-color": "transparent",
          background: "-webkit-linear-gradient(45deg, #08AEEA, #2AF598)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".stroke-text-dark-gradient": {
          "-webkit-text-strokeWidth": "2px",
          "-webkit-text-stroke-color": "transparent",
          background: "-webkit-linear-gradient(45deg, #08AEEA, #2AF598)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".dark-outline-gradient-text": {
          "-webkit-text-stroke-color": "transparent",
          "-webkit-text-strokeWidth": "calc(1em / 16)",
          "-webkit-background-clip": "text",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover", "dark"]);
    },
  ],
};
