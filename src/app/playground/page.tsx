import Link from "next/link";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "在线体验系统 | 拍卖竞价显示系统",
  description:
    "浏览器打开即用的纯 Web 演示版：控制台报价、标的管理、三主题换肤、投屏演示。",
};

export default function PlaygroundPage() {
  return (
    <Container>
      <div className="flex flex-col items-center text-center pt-4 pb-2">
        <div className="text-5xl mb-4">🎮</div>
        <Heading className="font-black">在线体验系统</Heading>
        <Paragraph className="max-w-2xl mt-4">
          纯 Web 演示版（构建产物静态托管），<b>浏览器打开即用</b>——
          完整呈现控制台报价、标的管理、系统设置、三主题换肤与投屏演示。
        </Paragraph>
      </div>

      <div className="mt-10 max-w-2xl mx-auto">
        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 md:p-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
            可体验内容
          </div>
          <ul className="space-y-3 text-sm text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand/10 text-brand text-xs font-bold">1</span>
              <span><b>控制台报价</b> · 起拍设置 / 应价+号牌双输入 / 实时报价表 / 确认成交·流拍</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand/10 text-brand text-xs font-bold">2</span>
              <span><b>标的管理</b> · 新增·编辑·设为当前 / Excel 批量导入导出（13 列模板）</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand/10 text-brand text-xs font-bold">3</span>
              <span><b>系统设置</b> · 标题字体 / 表格列 / 公式列 / 三主题切换</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand/10 text-brand text-xs font-bold">4</span>
              <span><b>投屏演示</b> · 欢迎页 PDF / 图片轮播 / 竞价页大字卡 + 报价表</span>
            </li>
          </ul>

          <div className="mt-7 text-xs text-neutral-400">
            <Highlight>提示</Highlight> 系统为桌面端设计，建议在电脑上体验完整效果；
            浏览器环境下 localStorage 持久化 + 投屏窗以新窗口演示。Electron 专属能力（多副屏、SQLite）需桌面版。
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              href="/experience"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-semibold rounded-full px-7 py-3.5 hover:bg-brand transition-colors shadow-sm"
            >
              🎮 立即进入体验系统 →
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-neutral-200 text-neutral-700 text-sm font-semibold rounded-full px-7 py-3.5 hover:border-brand hover:text-brand transition-colors"
            >
              ← 返回首页
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
