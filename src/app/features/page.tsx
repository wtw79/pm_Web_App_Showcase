import Link from "next/link";
import { Metadata } from "next";
import { FeatureModule } from "@/components/FeatureModule";
import { CtaBanner } from "@/components/CtaBanner";
import { features } from "@/constants/features";

export const metadata: Metadata = {
  title: "产品功能 | 拍卖竞价显示系统",
  description:
    "控制台报价零失误、副屏专业大屏同步、落槌即归档报表——六大核心模块覆盖拍卖会完整流程。",
};

export default function FeaturesPage() {
  return (
    <div className="max-w-5xl w-full mx-auto px-4 md:px-10 pt-10 md:pt-14 pb-10">
      {/* 首屏定位 */}
      <section>
        <p className="text-xs font-bold tracking-[0.18em] text-brand uppercase">
          Products · 产品功能
        </p>
        <h1 className="mt-4 text-3xl md:text-4xl lg:text-[2.6rem] font-black text-primary tracking-tight leading-tight">
          这个系统能做什么
        </h1>
        <p className="mt-5 text-[15px] md:text-base text-secondary leading-relaxed max-w-2xl">
          标的管理 → 现场报价 → 大屏投屏 → 成交归档，覆盖从开场到落槌的主要环节，
          一个人也能操作。
        </p>

        {/* 页面锚点导航（sticky） */}
        <nav
          aria-label="功能目录"
          className="sticky top-0 z-40 -mx-4 md:-mx-10 px-4 md:px-10 mt-8 py-3 bg-[#f9f9fb]/95 backdrop-blur border-b border-neutral-200"
        >
          <div className="flex gap-2 overflow-x-auto pb-1">
            {features.map((f) => (
              <a
                key={f.id}
                href={`#${f.id}`}
                className="shrink-0 text-xs md:text-[13px] font-bold text-secondary hover:text-brand transition-colors border border-neutral-200 bg-white rounded-full px-3.5 py-1.5 hover:border-brand/50"
              >
                {f.title}
              </a>
            ))}
          </div>
        </nav>
      </section>

      {/* 6 大功能模块（FAB 叙述） */}
      <section className="mt-6">
        {features.map((f, i) => (
          <FeatureModule key={f.id} {...f} reverse={i % 2 === 1} />
        ))}
      </section>

      {/* 页末汇总 CTA */}
      <CtaBanner
        title="看完了，想试试实际效果？"
        primaryLabel="在线体验"
        secondaryLabel="联系我"
      />
      <p className="text-center text-xs text-neutral-400 mt-4">
        需要技术细节？前往
        <Link href="/blog" className="text-brand font-semibold hover:underline">
          文档中心
        </Link>
        ——架构总览、竞价状态机、公式引擎、测试体系。
      </p>
    </div>
  );
}
