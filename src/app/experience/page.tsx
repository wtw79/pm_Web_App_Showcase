import { Metadata } from "next";
import { MobileDemoGate } from "@/components/MobileDemoGate";

export const metadata: Metadata = {
  title: "在线演示 | 拍卖竞价显示系统",
  description:
    "在线体验：控制台报价、副屏投屏，浏览器打开即用，无需安装。",
  alternates: { canonical: "/experience" },
};

// 静态导出页：预览切换（控制台 / 投屏）为纯客户端交互（?tab= 深链由客户端读取），
// 不使用 searchParams 等动态 API，保证 output: export 下整页静态渲染。
export default function ExperiencePage() {
  return (
    <div className="flex flex-col min-h-full">
      {/* 极简标题区：不占演示空间 */}
      <header className="w-full px-3 md:px-4 pt-4 md:pt-5">
        <p className="text-xs font-bold tracking-[0.18em] text-brand uppercase">
          Live Demo · 看它工作
        </p>
        <p className="mt-1 text-[13px] text-neutral-400">
          起拍 → 应价 → 落槌 → 归档，隔窗看一场拍卖从头到尾
        </p>
      </header>

      {/* 演示主体：全宽铺满（切换器 + 移动端门控都在组件内） */}
      <div className="w-full px-3 md:px-4 pt-3 pb-4 flex-1">
        <MobileDemoGate />
      </div>
    </div>
  );
}