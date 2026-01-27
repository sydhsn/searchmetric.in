import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6f5ff",
          100: "#edeafd",
          200: "#d9d4fb",
          300: "#bcb2f7",
          400: "#967ef0",
          500: "#7a55eb",
          600: "#6c4bf0",
          700: "#5a38de",
          800: "#4b2eb5",
          900: "#3f2a8a",
        },
        ink: {
          900: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
