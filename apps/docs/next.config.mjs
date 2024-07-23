import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import oneDarkPro from "shiki/themes/one-dark-pro.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: ".",
  images: {
    domains: [],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: oneDarkPro,
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
