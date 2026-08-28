import { Metadata } from "next";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "在线体验 | 拍卖竞价显示系统",
  description:
    "浏览器打开即用的纯 Web 演示版：控制台报价、标的管理、系统设置、三主题、投屏演示。",
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col min-h-full">
      {/* 极简标题区：不占演示空间 */}
      <header className="max-w-5xl w-full mx-auto px-4 md:px-10 pt-5 md:pt-6">
        <p className="text-xs font-bold tracking-[0.18em] text-brand uppercase">
          Live Demo · 在线体验
        </p>
        <p className="mt-1 text-[13px] text-neutral-400">
          浏览器打开即用的演示版 · 数据保存在本地 · 建议电脑上体验
        </p>
      </header>

      {/* 演示主体：尽量撑满视口 */}
      <div className="max-w-5xl w-full mx-auto px-4 md:px-10 pt-4 pb-6 flex-1">
        <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-sm h-full">
          <iframe
            src={`${BASE}/demo/`}
            title="拍卖竞价显示系统 · 在线体验"
            className="w-full h-[calc(100dvh-12rem)] min-h-[70vh] border-0 bg-white"
            loading="lazy"
          />
        </div>
        <p className="mt-2.5 text-[11px] text-neutral-400">
          提示：系统按桌面端设计；在系统内打开「投屏窗」会以浏览器新窗口演示。
        </p>
      </div>
    </div>
  );
}
