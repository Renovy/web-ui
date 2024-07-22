import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import rehypePrettyCode from "rehype-pretty-code";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        rehypePlugins: [rehypePrettyCode],
      }),
    },
    react(),
  ],
  base: "./",
});
