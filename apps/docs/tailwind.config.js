/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./node_modules/@renovy/web-ui/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "rgba(var(--accent), <alpha-value>)",
      },
    },
  },
};
