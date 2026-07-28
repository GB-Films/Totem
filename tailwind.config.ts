import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gabinete: {
          exterior: "#EFE7D6",
          exterior2: "#E2D5BC",
          exterior3: "#C7B58B",
          panel: "rgba(248, 242, 228, 0.94)",
          panelSolid: "#F8F2E4",
          paper: "#EFE7D6",
          paper2: "#E2D5BC",
          paper3: "#C7B58B",
          paperLight: "#FFF9EC",
          text: "#292522",
          muted: "#554B43",
          faint: "#80736A",
          darkBrown: "#292522",
          brown: "#9B3E27",
          copper: "#9B3E27",
          gold: "#D2B457",
          oldGold: "#A5873D",
          line: "#B9A98B",
          lineLight: "#DDD0B8",
          lineDark: "#173F52",
          error: "#A64034",
          available: "#456F62",
          consult: "#A66B2D",
        },
      },
      fontFamily: {
        display: ["Bodoni MT", "Didot", "Georgia", "ui-serif", "serif"],
        serifDisplay: ["Bodoni MT", "Didot", "Georgia", "ui-serif", "serif"],
        editorial: ["Inter", "Avenir Next", "Segoe UI", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Helvetica Neue", "Helvetica", "Arial", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        cabinet: "0 28px 70px rgba(71, 47, 41, .12)",
        relic: "0 18px 38px rgba(95, 41, 21, .16)",
        paper: "0 14px 44px rgba(71, 47, 41, .10)",
      },
      borderRadius: {
        object: "4px",
      },
    },
  },
  plugins: [],
} satisfies Config;
