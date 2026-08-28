import { Metadata } from "next";
import { StripeMark } from "@/components/StripeMark";
import { CtaBanner } from "@/components/CtaBanner";
import { timeline } from "@/constants/timeline";

export const metadata: Metadata = {
  title: "版本发布记录 | 拍卖竞价显示系统",
  description:
    "持续迭代的证明：从 2021 年桌面版到 Web/Electron 重构版，每一次版本更新都看得见。",
};

export default function UpdatesPage() {
  return (
    <div className="max-w-4xl w-full mx-auto px-4 md:px-10 pt-10 md:pt-14 pb-10">
      <p className="text-xs font-bold tracking-[0.18em] text-brand uppercase">
        Updates · 版本发布
      </p>
      <h1 className="mt-4 text-3xl md:text-4xl font-black text-primary tracking-tight">
        持续迭代，看得见
      </h1>
      <p className="mt-4 text-[15px] md:text-base text-secondary leading-relaxed max-w-2xl">
        从 2021 年的桌面版奠基，到今天的 Web / Electron 重构版，
        产品始终在演进——这是我们对"买完有人维护"最直接的承诺。
      </p>

      {/* 最新版本徽章 */}
      <div className="mt-8 flex items-center gap-3 rounded-2xl border border-brand/25 bg-brand-soft/40 px-6 py-5">
        <StripeMark />
        <div className="flex-1">
          <p className="text-sm font-black text-primary">
            最新版本 V2.2.00 · 功能整合版
          </p>
          <p className="mt-0.5 text-[13px] text-secondary">
            初始化入口统一、成交归档一键完成、导入导出模板精简
          </p>
        </div>
        <a
          href="https://github.com/wtw79/pm_Web_App_Showcase"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex text-xs font-bold text-brand hover:text-brand-deep"
        >
          GitHub →
        </a>
      </div>

      {/* 版本时间线 */}
      <ol className="relative mt-12 space-y-10 border-l border-neutral-200 ml-3">
        {timeline.map((v, i) => (
          <li key={v.company} className="relative pl-8 md:pl-10">
            <span
              className={
                "absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 " +
                (i === 0 ? "bg-brand border-brand" : "bg-white border-neutral-300")
              }
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="text-lg md:text-xl font-black text-primary">
                {v.company}
              </h2>
              <span className="text-xs font-bold text-neutral-400">
                {v.date}
              </span>
            </div>
            <p className="mt-1 text-sm font-semibold text-brand">{v.title}</p>
            <p className="mt-1 text-[13px] text-secondary">{v.description}</p>
            <ul className="mt-3 space-y-1.5">
              {v.responsibilities.map((r) => (
                <li
                  key={r}
                  className="flex gap-2 text-[13px] text-secondary leading-relaxed"
                >
                  <span className="text-brand font-black flex-none">·</span>
                  {r}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-14">
        <CtaBanner />
      </div>
    </div>
  );
}
