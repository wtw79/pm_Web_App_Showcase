import Link from "next/link";
import { Metadata } from "next";
import { StripeMark } from "@/components/StripeMark";
import { HeroDashboard } from "@/components/HeroDashboard";
import { StatBar } from "@/components/StatBar";
import { SectionHead } from "@/components/SectionHead";
import { CtaBanner } from "@/components/CtaBanner";
import { features } from "@/constants/features";
import { solutions } from "@/constants/solutions";

// 这个系统能做什么（务实叙述，不夸大）
const valueProps = [
  {
    icon: "⚡",
    title: "装上就能用",
    desc: "下载即装，数据存在本机，不需要服务器、不需要联网。浏览器里也能打开演示版先看看。",
    href: "/features#desktop",
  },
  {
    icon: "🖥",
    title: "报价实时上大屏",
    desc: "报价一落，副屏立刻刷新。大字卡、报价表、领先号牌一目了然，操作台和投屏互不干扰。",
    href: "/experience?tab=screen",
  },
  {
    icon: "📁",
    title: "成交自动归档",
    desc: "成交瞬间锁定结果，规范格式的《拍卖记录表》自动生成，散场后少加班。",
    href: "/features#archive",
  },
];

export const metadata: Metadata = {
  title: "拍卖竞价显示系统 · Auction Bid Console",
  description:
    "从起拍到落槌，一气呵成。面向拍卖行与现场操作员的一体化系统：标的管理、实时报价、副屏投屏、成交归档。离线可用，开箱即用。",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="max-w-5xl w-full mx-auto px-4 md:px-10 pt-10 md:pt-14 pb-10">
      {/* 01 这是什么 */}
      <section className="relative overflow-hidden">
        <div className="relative grid lg:grid-cols-[42%_58%] gap-10 lg:gap-12 items-center py-10 md:py-14">
        <div>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-brand/20 bg-brand-soft/60 pl-2 pr-4 py-1.5 text-xs font-bold text-brand">
            <StripeMark barClassName="!h-3.5 !w-1" />
            Auction Bid Console · 个人维护项目
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-[3.2rem] font-black text-primary tracking-tight leading-[1.15]">
            拍卖竞价显示系统
          </h1>

          <p className="mt-6 text-[15px] md:text-base text-secondary leading-relaxed max-w-[30rem]">
            标的管理、实时报价、副屏投屏、成交归档，都在一个程序里。
            <b className="text-primary font-bold">一个人能操作，断网也能跑。</b>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/experience"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white text-sm font-bold rounded-full px-7 py-3.5 hover:bg-brand-deep hover:shadow-md transition-all shadow-sm"
            >
              看它工作 →
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 border border-neutral-300 bg-white text-primary text-sm font-bold rounded-full px-7 py-3.5 hover:border-brand hover:text-brand transition-all"
            >
              看它有哪些功能
            </Link>
          </div>

          <ul className="mt-8 space-y-2.5">
            {[
              "纯桌面程序，数据存在本机，不上传",
              "落槌即归档，报表和现场截图自动躺进标的的文件夹",
              "V2.3.00 · 从 2021 年活到现在",
            ].map((t) => (
              <li
                key={t}
                className="flex items-center gap-2.5 text-[13px] font-medium text-secondary"
              >
                <span className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-black flex items-center justify-center flex-none">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <HeroDashboard />
          <p className="mt-3 text-[11px] text-neutral-400 tracking-wide">
            界面截图：控制台 · 起拍设置 / 实时报价 / 操作面板
            <Link href="/experience" className="text-brand font-semibold hover:underline">
              看它工作 →
            </Link>
          </p>
        </div>
        </div>
      </section>

      {/* ═══════ 02 一些事实 ═══════ */}
      <section className="mt-14 md:mt-20">
        <StatBar />
      </section>

      {/* ═══════ 03 这个系统能做什么 ═══════ */}
      <section className="mt-14 md:mt-20">
        <SectionHead
          index="03"
          title="这个系统能做什么"
          desc="不吹功能，就说它实际帮你省了哪些事。"
        />
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {valueProps.map((v) => (
            <Link
              key={v.title}
              href={v.href}
              className="group rounded-xl border border-neutral-200 bg-white p-6 md:p-7 hover:border-brand/40 hover:shadow-md transition-all"
            >
              <div className="text-2xl">{v.icon}</div>
              <h3 className="mt-4 text-lg font-black text-primary group-hover:text-brand transition-colors">
                {v.title}
              </h3>
              <p className="mt-2 text-sm text-secondary leading-relaxed">
                {v.desc}
              </p>
              <span className="inline-block mt-4 text-sm font-bold text-brand">
                看实现 →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════ 04 功能一览 ═══════ */}
      <section className="mt-14 md:mt-20">
        <SectionHead
          index="04"
          title="功能一览"
          desc="标的管理 → 现场报价 → 大屏投屏 → 成交归档，覆盖一场拍卖的主要环节。"
        />
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {features.map((f, i) => (
            <Link
              key={f.id}
              href={`/features#${f.id}`}
              className={
                "group relative rounded-xl border border-neutral-200 bg-white overflow-hidden hover:border-brand/40 hover:shadow-md transition-all " +
                (i === 0 ? "sm:col-span-2" : "")
              }
            >
              <div
                className={
                  "relative overflow-hidden bg-neutral-50 " +
                  (i === 0 ? "h-52 md:h-64" : "h-40 md:h-44")
                }
              >
                <img
                  src={f.image}
                  alt={f.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-black text-primary group-hover:text-brand transition-colors">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-[13px] text-secondary leading-relaxed line-clamp-2">
                  {f.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-deep transition-colors"
          >
            看每个功能的具体说明 →
          </Link>
        </div>
      </section>

      {/* ═══════ 05 适用场景 ═══════ */}
      <section className="mt-14 md:mt-20">
        <SectionHead
          index="05"
          title="哪些场景用得上"
          desc="流程是『标的 + 现场竞价 + 落槌归档』的场合，基本都能用。"
        />
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {solutions.map((s) => (
            <Link
              key={s.id}
              href={`/solutions#${s.id}`}
              className="group rounded-xl border border-neutral-200 bg-neutral-50/60 p-6 hover:border-brand/40 hover:bg-white hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-lg bg-white border border-neutral-200 text-brand flex items-center justify-center text-base font-black group-hover:bg-brand group-hover:text-white transition-colors">
                  {s.icon}
                </span>
                <h3 className="text-base font-black text-primary">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 text-[13px] text-secondary leading-relaxed line-clamp-3">
                {s.intro}
              </p>
              <span className="inline-block mt-4 text-sm font-bold text-brand">
                看场景说明 →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════ 06 关于这个项目 ═══════ */}
      <section className="mt-14 md:mt-20">
        <SectionHead
          index="06"
          title="关于这个项目"
          desc=""
        />
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 px-6 py-10 md:px-10">
          <p className="text-[15px] md:text-base text-secondary leading-relaxed max-w-3xl">
            拍卖现场靠喊报价、靠笔记录，大屏要专人盯守，散场还得手工整理成交台账——越到关键轮次越容易出错。
            这套系统把「标的管理 → 现场报价 → 大屏投屏 → 成交归档」收进一个程序：
            报价落屏、成交归档，每一步都留得下记录。
          </p>
          <p className="mt-4 text-[15px] md:text-base text-secondary leading-relaxed max-w-3xl">
            系统由<b className="text-primary">我一个人维护</b>，不追求大而全，
            只把现场该做的事做扎实。它 2021 年就在拍卖现场干活，2025 年年中起由我接手维护；
            核心流程每一步都有记录，错了可以撤回，不会让你带着糊涂散场。
            如果你在实际使用中发现什么问题，欢迎在
            <a
              href="https://github.com/wtw79/pm_Web_App_Showcase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              GitHub
            </a>
            上提 issue。
          </p>
        </div>
      </section>

      {/* ═══════ 07 行动区 ═══════ */}
      <CtaBanner />
    </div>
  );
}
