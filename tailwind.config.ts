import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand-correct yellow palette overrides
        yellow: {
          50: "#FFF9DB",
          100: "#FFEEA8",
          200: "#FFE27A",
          300: "#FFD54F",
          400: "#FFCA2C",
          500: "#FFC107",
          600: "#FFB300",
          700: "#FFA000",
          800: "#FF8F00",
          900: "#FF6F00",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        night: "rgb(var(--color-text-primary) / <alpha-value>)",
        dusk: "rgb(var(--color-text-secondary) / <alpha-value>)",
        teal: "rgb(var(--color-accent) / <alpha-value>)",
        mint: "rgb(var(--color-accent-soft) / <alpha-value>)",
        sand: "rgb(var(--color-surface) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["Poppins", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        shimmer: "shimmer 2s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      boxShadow: {
        glow: "0 20px 80px rgba(245, 196, 0, 0.35)",
        card: "0 30px 120px rgba(15, 23, 42, 0.2)",
        "glow-yellow": "0 10px 40px -10px rgba(245, 158, 11, 0.3)",
        "glow-amber": "0 10px 40px -10px rgba(251, 191, 36, 0.3)",
        "inner-glow": "inset 0 2px 4px 0 rgba(255, 255, 255, 0.1)",
        "social-card": "0 4px 20px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "grid-light":
          "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0)",
        "gradient-hero":
          "linear-gradient(120deg, rgba(var(--color-bg) / 1) 0%, rgba(var(--color-bg-alt) / 1) 45%, rgba(var(--color-surface) / 1) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        full: "100%",
        "200%": "200%",
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
