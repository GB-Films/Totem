import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gabinete: {
          exterior: "#F6F1EA",
          exterior2: "#EEE6DA",
          exterior3: "#E3D7C8",
          panel: "rgba(255, 252, 247, 0.82)",
          panelSolid: "#FFFDF8",
          paper: "#F7F1E8",
          paper2: "#D9CEC0",
          paper3: "#B8AA99",
          paperLight: "#FFFDF8",
          text: "#0D1B2A",
          muted: "#65605A",
          faint: "#9B9186",
          darkBrown: "#071624",
          brown: "#C15934",
          copper: "#D77A3F",
          gold: "#C9942E",
          oldGold: "#7A8238",
          line: "#D8CDBE",
          lineLight: "#EEE3D4",
          lineDark: "#B8AA99",
          error: "#A54B36",
          available: "#697538",
          consult: "#A9792C",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        serifDisplay: ["Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        editorial: ["Montserrat", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Montserrat", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        cabinet: "0 28px 70px rgba(21, 29, 38, .10)",
        relic: "0 18px 38px rgba(40, 31, 21, .16)",
        paper: "0 14px 44px rgba(25, 30, 34, .10)",
      },
      borderRadius: {
        object: "16px",
      },
    },
  },
  plugins: [],
} satisfies Config;
