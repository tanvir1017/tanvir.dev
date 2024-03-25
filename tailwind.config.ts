import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    function ({ addUtilities }: { addUtilities: any }) {
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
} satisfies Config;

export default config;
