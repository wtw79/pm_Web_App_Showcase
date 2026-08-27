import Link from "next/link";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

// 快速导航：把站点各入口整合到首页，形成"看介绍 → 看功能 → 体验 → 读文章"完整动线
const navCards = [
  {
    href: "/experience",
    icon: "🎮",
    title: "在线体验",
    desc: "浏览器打开即用的纯 Web 演示版：控制台报价、标的管理、三主题、投屏演示",
  },
  {
    href: "/projects",
    icon: "⚡",
    title: "核心功能",
    desc: "标的管理 / 控制台报价 / 副屏投屏 / 成交归档 / 报表 / 公式引擎",
  },
  {
    href: "/playground",
    icon: "🎬",
    title: "视差演示",
    desc: "基于 Motion 的多深度视差 Hero 组件，可作大屏欢迎页候选视觉",
  },
  {
    href: "/blog",
    icon: "📝",
    title: "技术文章",
    desc: "Electron 架构 / 竞价状态机 / 公式引擎 / 88 测试用例",
  },
  {
    href: "/resume",
    icon: "📊",
    title: "系统总览",
    desc: "关键指标与 V2.1.55 → V2.2.00 → Web·Electron 版版本演进",
  },
  {
    href: "/about",
    icon: "💬",
    title: "系统介绍",
    desc: "产品定位、目标用户、设计原则与真实界面",
  },
];

export default function Home() {
  return (
    <Container>
      {/* Hero */}
      <span className="text-4xl">🏛</span>
      <Heading className="font-black">拍卖竞价显示系统</Heading>
      <Paragraph className="max-w-xl mt-4">
        面向拍卖师与现场操作员的<b className="text-neutral-700">桌面管理系统</b>——
        标的管理、实时报价、副屏投屏、成交归档，覆盖拍卖会
        <Highlight>"从开场到落槌"</Highlight>的完整流程。
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        全新打造的 <Highlight>Web / Electron 桌面应用</Highlight>：
        三主题换肤、公式列配置、多屏投屏，88 个自动化测试用例护航，开箱即用。
      </Paragraph>

      {/* CTA */}
      <div className="flex flex-wrap gap-4 mt-8">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold rounded-full px-6 py-3 hover:bg-brand transition-colors shadow-sm"
        >
          🎮 在线体验系统 →
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 border border-neutral-200 text-neutral-700 text-sm font-semibold rounded-full px-6 py-3 hover:border-brand hover:text-brand transition-colors"
        >
          查看核心功能
        </Link>
      </div>

      {/* 系统总览图：点击进入在线体验 */}
      <div className="mt-12">
        <Link href="/experience" className="block group">
          <div className="relative rounded-xl overflow-hidden border border-neutral-200 shadow-sm group-hover:shadow-md transition-shadow">
            <Image
              src="/images/overview.png"
              alt="系统界面总览"
              width={1280}
              height={720}
              className="w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 py-3 px-4 text-center text-xs font-medium text-white bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              ▸ 点击进入在线体验系统
            </div>
          </div>
          <p className="mt-2 text-xs text-neutral-400 font-medium tracking-wide uppercase">
            FIG.01 — 控制台 · 起拍设置 / 竞价 / 操作面板 · 点击在线体验
          </p>
        </Link>
      </div>

      {/* 快速导航：整合入口 */}
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-16 mb-4"
      >
        快速导航
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {navCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group bg-neutral-50 rounded-xl border border-neutral-100 p-5 hover:border-brand/40 hover:shadow-sm transition-all"
          >
            <div className="text-2xl">{card.icon}</div>
            <div className="mt-2 font-bold text-neutral-800 group-hover:text-brand transition-colors">
              {card.title} →
            </div>
            <p className="mt-1 text-sm text-neutral-500 leading-relaxed">
              {card.desc}
            </p>
          </Link>
        ))}
      </div>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        核心功能模块
      </Heading>
      <Products />

      <TechStack />
    </Container>
  );
}
