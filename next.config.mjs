/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";

const nextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  // 静态导出：GitHub Pages 部署（next build 后产物在 out/）
  output: "export",
  // 本地静态图片，无需 Next 图片优化（静态导出必需）
  images: {
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    // String plugin IDs are required for Turbopack (Next.js 16+)
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["@mapbox/rehype-prism"],
  },
});

export default withMDX(nextConfig);
