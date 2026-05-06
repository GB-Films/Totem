import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coal: "#061014",
        ink: "#08171A",
        ash: "#0B1B1F",
        bone: "#F1E4CC",
        parchment: "#E8D8C0",
        brass: "#A16428",
        copper: "#7A4A21",
        blood: "#7A1F1F",
        bottle: "#4F6B3A",
        gabinete: {
          exterior: "#061014",
          exterior2: "#08171A",
          exterior3: "#0B1B1F",
          paper: "#E8D8C0",
          paper2: "#DCC8A8",
          paper3: "#CDB58F",
          paperLight: "#F1E4CC",
          text: "#3A2A1A",
          muted: "#6B563D",
          faint: "#8A7458",
          darkBrown: "#4A2D16",
          brown: "#7A4A21",
          copper: "#A16428",
          gold: "#B67A32",
          oldGold: "#C7954B",
          line: "#9B7A52",
          lineLight: "#B89A70",
          lineDark: "#7B5835",
          error: "#7A1F1F",
          available: "#4F6B3A",
          consult: "#9A6A1F",
        },
      },
      fontFamily: {
        display: ["Cinzel", "Cormorant Garamond", "Georgia", "serif"],
        serifDisplay: ["Cinzel", "Cormorant Garamond", "Georgia", "serif"],
        editorial: ["Lora", "Libre Baskerville", "Georgia", "serif"],
        body: ["Inter", "Source Sans 3", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        cabinet: "0 40px 100px rgba(0,0,0,.55)",
        relic: "0 14px 34px rgba(74,45,22,.18)",
        paper: "0 16px 46px rgba(74,45,22,.16)",
      },
      borderRadius: {
        object: "10px",
      },
    },
  },
  plugins: [],
} satisfies Config;
