import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "在线体验 | 拍卖竞价显示系统",
  description:
    "浏览器打开即用的纯 Web 演示版：控制台报价、标的管理、系统设置、三主题、投屏演示。",
};

export default function ExperiencePage() {
  return (
    <div>
      <Container>
        <span className="text-4xl">🎮</span>
        <Heading className="font-black">在线体验</Heading>
        <Paragraph className="max-w-2xl mt-4">
          纯 Web 演示版（构建产物），<b className="text-neutral-700">浏览器打开即用</b>
          ：控制台报价、标的管理、系统设置、三主题换肤与投屏演示。
          浏览器环境下自动降级（localStorage 持久化 + window.open 投屏演示）；
          Electron 专属能力（副屏物理投屏、SQLite、托盘）仅在桌面版可用。
        </Paragraph>
        <Paragraph className="max-w-2xl mt-2 text-sm text-neutral-400">
          演示版数据保存在浏览器本地，刷新不丢失；操作完成后可通过右上角「返回展示站」回到本页。
        </Paragraph>
      </Container>

      <div className="px-4 md:px-10 pb-10">
        <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
          <iframe
            src={`${BASE}/demo/`}
            title="拍卖竞价显示系统 · 在线体验"
            className="w-full h-[calc(100dvh-18rem)] min-h-[420px] md:min-h-[540px] border-0 bg-white"
            loading="lazy"
          />
        </div>
        <p className="mt-3 text-xs text-neutral-400 tracking-wide">
          <Highlight>提示</Highlight> 系统为桌面端设计，建议在电脑上体验完整效果；
          若系统内打开「投屏窗」会以浏览器新窗口演示。该演示即仓库
          <code className="bg-neutral-100 px-1 rounded">/demo/</code> 静态产物。
        </p>
      </div>
    </div>
  );
}
