import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gabinete: {
          exterior: "#E8E6D8",
          exterior2: "#DED8C6",
          exterior3: "#CBB377",
          panel: "rgba(247, 243, 233, 0.92)",
          panelSolid: "#F7F3E9",
          paper: "#E8E6D8",
          paper2: "#DED8C6",
          paper3: "#CBB377",
          paperLight: "#FCF9F0",
          text: "#472F29",
          muted: "#5F2915",
          faint: "#80685F",
          darkBrown: "#472F29",
          brown: "#5F2915",
          copper: "#892F1A",
          gold: "#CBB377",
          oldGold: "#A89057",
          line: "#CBB377",
          lineLight: "#DED5BE",
          lineDark: "#5F2915",
          error: "#A64034",
          available: "#39745A",
          consult: "#A66B2D",
        },
      },
      fontFamily: {
        display: ["Arial Rounded MT Bold", "Arial", "ui-sans-serif", "system-ui", "sans-serif"],
        serifDisplay: ["Arial Rounded MT Bold", "Arial", "ui-sans-serif", "system-ui", "sans-serif"],
        editorial: ["Inter", "Avenir Next", "Segoe UI", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Helvetica Neue", "Helvetica", "Arial", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        cabinet: "0 28px 70px rgba(71, 47, 41, .12)",
        relic: "0 18px 38px rgba(95, 41, 21, .16)",
        paper: "0 14px 44px rgba(71, 47, 41, .10)",
      },
      borderRadius: {
        object: "16px",
      },
    },
  },
  plugins: [],
} satisfies Config;
