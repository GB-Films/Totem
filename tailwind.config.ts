import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gabinete: {
          exterior: "#E8E6D8",
          exterior2: "#DCD7C8",
          exterior3: "#CBB377",
          panel: "rgba(232, 230, 216, 0.82)",
          panelSolid: "#F4F0E3",
          paper: "#E8E6D8",
          paper2: "#DCD7C8",
          paper3: "#CBB377",
          paperLight: "#F7F3E8",
          text: "#472F29",
          muted: "#5F2915",
          faint: "#8F766E",
          darkBrown: "#472F29",
          brown: "#5F2915",
          copper: "#892F1A",
          gold: "#CBB377",
          oldGold: "#A9955F",
          line: "#CBB377",
          lineLight: "#DED2AD",
          lineDark: "#5F2915",
          error: "#892F1A",
          available: "#5F2915",
          consult: "#892F1A",
        },
      },
      fontFamily: {
        display: ["Helvetica Neue", "Helvetica", "Arial", "ui-sans-serif", "system-ui", "sans-serif"],
        serifDisplay: ["Helvetica Neue", "Helvetica", "Arial", "ui-sans-serif", "system-ui", "sans-serif"],
        editorial: ["Helvetica Neue", "Helvetica", "Arial", "ui-sans-serif", "system-ui", "sans-serif"],
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
