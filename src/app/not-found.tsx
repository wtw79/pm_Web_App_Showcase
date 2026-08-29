import Link from "next/link";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

// 自定义 404 页：静态导出为根 404.html，GitHub Pages 对任何不存在的路径都会返回它，
// 提供品牌风视觉 + 返回首页入口，避免默认白屏 "This page could not be found."
export default function NotFound() {
  return (
    <main className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10 flex flex-col items-center justify-center text-center min-h-[60dvh]">
      <div className="text-7xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand/40 tracking-tight">
        404
      </div>
      <h1 className="mt-4 text-2xl md:text-3xl font-semibold text-neutral-800">
        页面不存在
      </h1>
      <p className="mt-3 text-sm text-neutral-500 max-w-md">
        您访问的地址不存在或已被移除。请返回首页，或通过左侧导航进入
        首页 / 产品功能 / 在线演示 / 文档中心。
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-semibold rounded-full px-7 py-3.5 hover:bg-brand transition-colors shadow-sm"
        >
          ← 返回首页
        </Link>
        <Link
          href="/experience"
          className="inline-flex items-center justify-center gap-2 border border-neutral-200 text-neutral-700 text-sm font-semibold rounded-full px-7 py-3.5 hover:border-brand hover:text-brand transition-colors"
        >
          看它工作
        </Link>
      </div>
    </main>
  );
}
