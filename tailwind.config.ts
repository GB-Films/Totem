import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coal: "#090909",
        ink: "#101113",
        ash: "#1b1b1d",
        bone: "#e8dbc0",
        parchment: "#bca982",
        brass: "#b48642",
        copper: "#9a5437",
        blood: "#6d1f27",
        bottle: "#183d35",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        cabinet: "0 24px 70px rgba(0,0,0,.45)",
        relic: "0 10px 34px rgba(180,134,66,.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
