import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}", "../../node_modules/@renovy/web-ui/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "rgba(var(--accent), <alpha-value>)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
