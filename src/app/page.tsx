import Link from "next/link";
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
    href: "/features#screen",
  },
  {
    icon: "📁",
    title: "成交自动归档",
    desc: "成交瞬间锁定结果，规范格式的《拍卖记录表》自动生成，散场后少加班。",
    href: "/features#archive",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl w-full mx-auto px-4 md:px-10 pt-10 md:pt-14 pb-10">
      {/* ═══════ 01 这是什么 ═══════ */}
      <section className="relative overflow-hidden">
        {/* 柔和背景：细网格 + 品牌光斑（纯 CSS，克制装饰） */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(14,124,134,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,124,134,0.055) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 65% at 50% 0%, black, transparent 72%)",
            maskImage:
              "radial-gradient(ellipse 75% 65% at 50% 0%, black, transparent 72%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-28 right-[-6rem] h-96 w-96 rounded-full bg-brand/10 blur-3xl pointer-events-none"
        />

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
              className="inline-flex items-center justify-center gap-2 bg-brand text-white text-sm font-bold rounded-full px-7 py-3.5 hover:bg-brand-deep hover:shadow-md hover:-translate-y-0.5 transition-all shadow-sm"
            >
              在线体验演示版 →
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 border border-neutral-300 bg-white text-primary text-sm font-bold rounded-full px-7 py-3.5 hover:border-brand hover:text-brand hover:-translate-y-0.5 transition-all"
            >
              看它有哪些功能
            </Link>
          </div>

          <ul className="mt-8 space-y-2.5">
            {[
              "纯桌面程序，数据存在本机，不上传",
              "核心流程有 88 个自动化测试覆盖（逻辑 / 接口 / 性能分层）",
              "V2.3.00 · 从 2021 年持续更新到现在",
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
              在线体验 →
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
              <span className="inline-block mt-4 text-sm font-bold text-brand opacity-0 group-hover:opacity-100 transition-opacity">
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
              {/* hover 顶部条纹光条（呼应品牌条纹） */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand via-brand-light to-brand transition-transform duration-300 group-hover:scale-x-100"
              />
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
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
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
              <span className="inline-block mt-4 text-sm font-bold text-brand opacity-0 group-hover:opacity-100 transition-opacity">
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
            拍卖现场的传统流程里，报价靠喊、记录靠手写、大屏展示需要专人盯守、
            散场后还要手工整理成交台账——每个环节都依赖现场人员的专注与经验，
            在紧张节奏下容易出错，事后也难以追溯。这套系统把
            「标的管理 → 现场报价 → 大屏投屏 → 成交归档」的完整流程
            <b className="text-primary">结构化、标准化</b>：每个环节都有明确的规则，
            每一步操作都有可追溯的记录，让一场拍卖从头到尾清晰可控。
          </p>
          <p className="mt-4 text-[15px] md:text-base text-secondary leading-relaxed max-w-3xl">
            系统由<b className="text-primary">我个人维护</b>，不追求大而全，
            只把该做好的内容结构化、标准化，并把每一步改进做扎实。
            核心逻辑对齐行业里成熟的桌面版流程，写有自动化测试；
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
