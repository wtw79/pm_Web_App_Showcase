import Link from "next/link";
import { Metadata } from "next";
import { StripeMark } from "@/components/StripeMark";
import { StatBar } from "@/components/StatBar";
import { SectionHead } from "@/components/SectionHead";
import { solutions } from "@/constants/solutions";

export const metadata: Metadata = {
  title: "拍卖竞价显示系统 · Auction Bid Console",
  description:
    "从起拍到落槌，一气呵成。面向拍卖行与现场操作员的一体化系统：标的管理、实时报价、副屏投屏、成交归档。离线可用，开箱即用。",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="max-w-6xl w-full mx-auto px-4 md:px-10 pt-8 md:pt-12 pb-12">
      {/* 01 这是什么（深色氛围 hero） */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#041e23] via-[#0a5f66] to-brand text-white shadow-xl shadow-brand/10">
        <div className="relative flex flex-col items-center text-center py-14 md:py-24 px-6 md:px-12 animate-fade-up">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 pl-2 pr-4 py-1.5 text-xs font-bold text-white">
            <StripeMark barClassName="!h-3.5 !w-1" />
            Auction Bid Console · 个人维护项目
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl lg:text-[3.6rem] font-black text-white tracking-tight leading-[1.08]">
            拍卖竞价显示系统
          </h1>

          <p className="mt-6 text-[15px] md:text-lg text-white/85 leading-relaxed max-w-[32rem]">
            标的管理、实时报价、副屏投屏、成交归档，
            <b className="text-white font-bold">一个程序跑完。</b>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/experience"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand text-sm font-bold rounded-full px-7 py-3.5 hover:bg-brand-soft transition-all shadow-md"
            >
              看它工作 →
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 border border-white/40 bg-white/5 text-white text-sm font-bold rounded-full px-7 py-3.5 hover:bg-white/15 transition-all"
            >
              看它有哪些功能
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ 02 一些事实 ═══════ */}
      <section className="mt-14 md:mt-20">
        <StatBar />
      </section>

      {/* ═══════ 03 适用场景 ═══════ */}
      <section className="mt-14 md:mt-20">
        <SectionHead index="03" title="哪些场景用得上" />
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {solutions.map((s) => (
            <Link
              key={s.id}
              href={`/solutions#${s.id}`}
              className="group rounded-xl border border-neutral-200 bg-neutral-50/60 p-6 hover:border-brand/40 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-lg bg-white border border-neutral-200 text-brand flex items-center justify-center text-base font-black group-hover:bg-brand group-hover:text-white transition-colors">
                  {s.icon}
                </span>
                <h3 className="text-base font-black text-primary">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 text-[13px] text-secondary leading-relaxed line-clamp-1">
                {s.intro}
              </p>
              <span className="inline-block mt-4 text-sm font-bold text-brand">
                看场景说明 →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════ 04 关于这个项目 ═══════ */}
      <section className="mt-14 md:mt-20">
        <SectionHead index="04" title="关于这个项目" />
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 px-6 py-8 md:px-10">
          <p className="text-[15px] md:text-base text-secondary leading-relaxed max-w-3xl">
            系统从 2021 年活到现在，2025 年年末起由我接手维护。一个人维护，只把现场该做的事做扎实。
            <Link href="/updates" className="text-brand font-semibold hover:underline">
              看更新记录 →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
