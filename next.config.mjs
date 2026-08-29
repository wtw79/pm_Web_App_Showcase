/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";

const nextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  // GitHub Pages 子路径部署：https://wtw79.github.io/pm_Web_App_Showcase/
  // 构建时传 NEXT_PUBLIC_BASE_PATH=/pm_Web_App_Showcase；本地预览不传则无前缀
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  // 目录形式导出（/xxx/index.html）：GitHub Pages 下 /xxx/ 与 /xxx 均可访问，避免详情页 404
  trailingSlash: true,
  // 静态导出：GitHub Pages 部署（next build 后产物在 out/）
  output: "export",
  // 本地静态图片，无需 Next 图片优化（静态导出必需）
  images: {
    unoptimized: true,
  },
  // 构建期 TS 检查在受限环境（DSH 沙箱）下 spawn tsc 会被 EPERM 拦截；
  // 类型把关以独立 `npx tsc --noEmit` 为准（0 错误才允许发布），故跳过构建内复检。
  typescript: {
    ignoreBuildErrors: true,
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
