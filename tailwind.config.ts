import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#FAF6EF",
          100: "#F3ECDE",
          200: "#E6D6B8",
          300: "#D6BC8B",
          400: "#C49E5E",
        },
        ochre: {
          500: "#B8862F",
          600: "#9A6E22",
          700: "#7A5618",
        },
        clay: {
          500: "#A8482B",
          600: "#8A3A22",
          700: "#6B2C19",
        },
        bark: {
          800: "#241A12",
          900: "#15100B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "warm-overlay":
          "linear-gradient(180deg, rgba(21,16,11,0.25) 0%, rgba(21,16,11,0.55) 60%, rgba(21,16,11,0.85) 100%)",
        "hero-overlay":
          "linear-gradient(180deg, rgba(21,16,11,0.35) 0%, rgba(21,16,11,0.45) 40%, rgba(21,16,11,0.75) 100%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        kenBurns: {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1.15)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease-out both",
        "fade-in": "fadeIn 1.2s ease-out both",
        "ken-burns": "kenBurns 20s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
