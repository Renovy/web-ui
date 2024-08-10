/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "rgba(var(--accent), <alpha-value>)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
