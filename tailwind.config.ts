import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/content/**/*.{js,ts,jsx,tsx}", // ← ADD THIS — scans your data files
  ],
  safelist: [
    // Challenges gradients
    "from-pink-600", "to-rose-600", "from-pink-50", "to-rose-50",
    "from-red-600", "to-orange-600", "from-red-50", "to-orange-50",
    "from-orange-600", "to-amber-600", "from-orange-50", "to-amber-50",
    "from-purple-600", "to-violet-600", "from-purple-50", "to-violet-50",
    "from-blue-600", "to-cyan-600", "from-blue-50", "to-cyan-50",
    "from-emerald-600", "to-teal-600", "from-emerald-50", "to-teal-50",
    // FAQs gradients
    "from-brand-600", "to-purple-600",
    "from-fuchsia-600", "to-pink-600",
    "from-violet-600", "to-purple-600",
    "from-amber-600", "to-orange-600",
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