import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gabinete: {
          exterior: "#5F2915",
          exterior2: "#472F29",
          exterior3: "#39231F",
          panel: "rgba(71, 47, 41, 0.94)",
          panelSolid: "#472F29",
          paper: "#5F2915",
          paper2: "#472F29",
          paper3: "#39231F",
          paperLight: "#6F3A27",
          text: "#E8E6D8",
          muted: "#DED8C6",
          faint: "#B8AA92",
          darkBrown: "#E8E6D8",
          brown: "#CBB377",
          copper: "#892F1A",
          gold: "#CBB377",
          oldGold: "#A89057",
          line: "#CBB377",
          lineLight: "#806C4C",
          lineDark: "#E8E6D8",
          error: "#E47B6D",
          available: "#7FB396",
          consult: "#D19A59",
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
