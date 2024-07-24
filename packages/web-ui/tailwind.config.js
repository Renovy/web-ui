/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "rgba(var(--accent), <alpha-value>)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
