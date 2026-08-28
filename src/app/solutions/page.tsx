import Link from "next/link";
import { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { solutions } from "@/constants/solutions";

export const metadata: Metadata = {
  title: "行业解决方案 | 拍卖竞价显示系统",
  description:
    "按行业痛点定制：艺术品拍卖、资产房产、二手车二手物资、典当与司法辅助——找到属于你的那一页。",
};

export default function SolutionsPage() {
  return (
    <div className="max-w-5xl w-full mx-auto px-4 md:px-10 pt-10 md:pt-14 pb-10">
      {/* 首屏定位 */}
      <section>
        <p className="text-xs font-bold tracking-[0.18em] text-brand uppercase">
          Solutions · 行业方案
        </p>
        <h1 className="mt-4 text-3xl md:text-4xl lg:text-[2.6rem] font-black text-primary tracking-tight leading-tight">
          你的行业，我们知道痛在哪。
        </h1>
        <p className="mt-5 text-[15px] md:text-base text-secondary leading-relaxed max-w-2xl">
          不同细分行业的流程与痛点各不相同。按行业对号入座，
          看看系统如何解决你的具体问题。
        </p>

        {/* 行业 Tab 导航 */}
        <nav aria-label="行业目录" className="mt-8 flex gap-2.5 flex-wrap">
          {solutions.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-brand transition-colors border border-neutral-200 bg-white rounded-full px-4 py-2 hover:border-brand/50"
            >
              <span className="h-5 w-5 rounded-md bg-brand-soft text-brand text-[11px] flex items-center justify-center font-black">
                {s.icon}
              </span>
              {s.title}
            </a>
          ))}
        </nav>
      </section>

      {/* 行业方案模块：痛点 → 方案 → 改造前后 */}
      <section className="mt-10 space-y-10">
        {solutions.map((s) => (
          <article
            key={s.id}
            id={s.id}
            className="scroll-mt-24 rounded-2xl border border-neutral-200 bg-white p-6 md:p-10"
          >
            <header className="flex items-center gap-4">
              <span className="h-12 w-12 rounded-xl bg-brand-soft text-brand flex items-center justify-center text-xl font-black">
                {s.icon}
              </span>
              <div>
                <h2 className="text-xl md:text-2xl font-black text-primary tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-1 text-sm text-secondary">{s.intro}</p>
              </div>
            </header>

            {/* 痛点 → 方案 一一对应 */}
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-neutral-50 border border-neutral-100 p-5">
                <h3 className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                  行业痛点
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {s.pain.map((p) => (
                    <li
                      key={p}
                      className="flex gap-2.5 text-sm text-secondary leading-relaxed"
                    >
                      <span className="text-neutral-300 font-black flex-none">
                        ✕
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-brand-soft/50 border border-brand/20 p-5">
                <h3 className="text-xs font-bold tracking-wider text-brand uppercase">
                  对应方案
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {s.fix.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2.5 text-sm text-primary leading-relaxed"
                    >
                      <span className="text-brand font-black flex-none">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 改造前后对比 */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-neutral-200 px-5 py-4">
                <p className="text-[11px] font-bold text-neutral-400 tracking-wider">
                  改造前
                </p>
                <p className="mt-1.5 text-sm text-secondary line-through decoration-neutral-300">
                  {s.before}
                </p>
              </div>
              <div className="rounded-xl border border-brand/30 bg-white px-5 py-4">
                <p className="text-[11px] font-bold text-brand tracking-wider">
                  改造后
                </p>
                <p className="mt-1.5 text-sm font-bold text-primary">
                  {s.after}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <div className="mt-10">
        <CtaBanner
          title="你的行业不在列表里？"
          secondaryLabel="联系我们"
          primaryLabel="在线体验通用版"
        />
      </div>
      <p className="text-center text-xs text-neutral-400 mt-4">
        其他场景（展会活动、公益拍卖等）同样适用——
        <Link href="/contact" className="text-brand font-semibold hover:underline">
          联系我们
        </Link>
        讨论你的具体流程。
      </p>
    </div>
  );
}
