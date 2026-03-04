/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "sans-serif"],
        body:    ["'DM Sans'",    "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#f59e0b",
          dark:    "#d97706",
          light:   "#fbbf24",
        },
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};
