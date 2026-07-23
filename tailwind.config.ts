import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gabinete: {
          exterior: "#F1EEE6",
          exterior2: "#E8E3D8",
          exterior3: "#D8CFBE",
          panel: "rgba(251, 249, 244, 0.88)",
          panelSolid: "#FBF9F4",
          paper: "#F1EEE6",
          paper2: "#E8E3D8",
          paper3: "#D8CFBE",
          paperLight: "#FFFEFA",
          text: "#1C2924",
          muted: "#5D685F",
          faint: "#7D847E",
          darkBrown: "#1C2924",
          brown: "#34483F",
          copper: "#B34F36",
          gold: "#C9B98F",
          oldGold: "#9B8B64",
          line: "#D8D1C4",
          lineLight: "#E8E2D7",
          lineDark: "#7B857F",
          error: "#A64034",
          available: "#39745A",
          consult: "#A66B2D",
        },
      },
      fontFamily: {
        display: ["Iowan Old Style", "Baskerville", "Georgia", "ui-serif", "serif"],
        serifDisplay: ["Iowan Old Style", "Baskerville", "Georgia", "ui-serif", "serif"],
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
