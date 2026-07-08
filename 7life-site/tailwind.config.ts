import type { Config } from "tailwindcss";

// Kleuren en fonts 1-op-1 overgenomen uit de bestaande HTML (:root variabelen)
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oranje: "#EE7E06",   // --o
        donker: "#1C2625",   // --d
        blauw: "#3E8FA3",    // --b
        paars: "#7B5EA7",    // --p
        groen: "#0f766e",    // --g
        achtergrond: "#F3F1ED", // --bg
        kaart: "#FDFCFA",    // --card
        tekst: "#1a1a1a",    // --t
        subtekst: "#6b6b6b", // --s
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
      },
    },
  },
  plugins: [],
};
export default config;
