import Link from "next/link";
import { StripeMark } from "@/components/StripeMark";
import { HeroDashboard } from "@/components/HeroDashboard";
import { StatBar } from "@/components/StatBar";
import { LogosWall } from "@/components/LogosWall";
import { SectionHead } from "@/components/SectionHead";
import { CtaBanner } from "@/components/CtaBanner";
import { features } from "@/constants/features";
import { solutions } from "@/constants/solutions";

// 价值主张带（FAB：把功能翻译成利益）
const valueProps = [
  {
    icon: "⚡",
    title: "开箱即用，零部署成本",
    desc: "下载即装，无需服务器、无需 IT 团队、无需联网。浏览器里也能完整体验全部流程，装上就能开拍。",
    href: "/features#desktop",
  },
  {
    icon: "🖥",
    title: "每一手报价，全场同步",
    desc: "报价一落，观众大屏同步刷新，大字卡、报价表、领先号牌一目了然。操作台和投屏各归各位，互不干扰。",
    href: "/features#screen",
  },
  {
    icon: "📁",
    title: "落槌即归档，散场即报表",
    desc: "成交瞬间锁定结果，规范格式的《拍卖记录表》自动生成，买受人签字区、轮次分页全部排好，告别散场后的手工台账。",
    href: "/features#archive",
  },
];

const testimonial = {
  quote:
    "以前一场拍卖，报价、记录、投影三头跑，散场还要加班整台账。现在一个人、一台电脑就能全办完，落槌报表就出来了。",
  author: "某艺术品拍卖行 · 拍卖师",
};

export default function Home() {
  return (
    <div className="max-w-5xl w-full mx-auto px-4 md:px-10 pt-10 md:pt-14 pb-10">
      {/* ═══════ 01 Hero：3 秒说清"我是谁" ═══════ */}
      <section className="grid lg:grid-cols-[42%_58%] gap-10 lg:gap-12 items-center">
        <div>
          <div className="flex items-center gap-3">
            <StripeMark />
            <span className="text-xs font-bold tracking-[0.18em] text-brand uppercase">
              Auction Bid Console · V2.2.00
            </span>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-[3.4rem] font-black text-primary tracking-tight leading-[1.12]">
            从起拍，到落槌，
            <span className="text-brand relative whitespace-nowrap">
              一气呵成。
            </span>
          </h1>

          <p className="mt-6 text-[15px] md:text-base text-secondary leading-relaxed max-w-[30rem]">
            专为拍卖行与现场操作员打造的一体化系统：
            <b className="text-primary font-bold">
              标的管理、实时报价、副屏投屏、成交归档
            </b>
            ，覆盖一场拍卖的全部环节——一个人，也能从容开拍。
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/experience"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white text-sm font-bold rounded-full px-7 py-3.5 hover:bg-brand-deep transition-colors shadow-sm"
            >
              立即在线体验 →
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 border border-neutral-300 text-primary text-sm font-bold rounded-full px-7 py-3.5 hover:border-brand hover:text-brand transition-colors"
            >
              查看核心功能
            </Link>
          </div>

          <ul className="mt-8 space-y-2.5">
            {[
              "无需安装，浏览器 3 秒即可完整体验",
              "数据保存在本地，断网也能跑完整场拍卖",
              "88 个自动化测试护航，关键环节几乎不会出错",
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
            FIG.01 — 控制台 · 起拍设置 / 实时报价 / 操作面板 · 截图自真实系统，
            <Link href="/experience" className="text-brand font-semibold hover:underline">
              点击在线体验 →
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════ 02 信任条：指标 + Logo 墙 ═══════ */}
      <section className="mt-14 md:mt-20">
        <StatBar />
        <LogosWall />
      </section>

      {/* ═══════ 03 价值主张带 ═══════ */}
      <section className="mt-14 md:mt-20">
        <SectionHead
          index="03"
          title="为什么选它"
          desc="把功能翻译成利益：三个问题，正好是现场最痛的三件事。"
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
                了解详情 →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════ 04 功能亮点 Preview ═══════ */}
      <section className="mt-14 md:mt-20">
        <SectionHead
          index="04"
          title="核心功能模块"
          desc="六大模块覆盖拍卖会『会前准备 → 会中竞价 → 会后收尾』完整流程。"
        />
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {features.map((f) => (
            <Link
              key={f.id}
              href={`/features#${f.id}`}
              className="group rounded-xl border border-neutral-200 bg-white overflow-hidden hover:border-brand/40 hover:shadow-md transition-all"
            >
              <div className="relative overflow-hidden bg-neutral-50">
                <img
                  src={f.image}
                  alt={f.alt}
                  loading="lazy"
                  className="w-full h-40 md:h-44 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider text-white bg-black/50 rounded-full px-2.5 py-1">
                  {f.benefit}
                </span>
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
            查看全部功能与适用场景 →
          </Link>
        </div>
      </section>

      {/* ═══════ 05 行业方案 Preview（对号入座） ═══════ */}
      <section className="mt-14 md:mt-20">
        <SectionHead
          index="05"
          title="按行业对号入座"
          desc="不同细分行业的流程与痛点各不相同，找到属于你的那一页。"
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
                查看方案 →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════ 06 客户证言 ═══════ */}
      <section className="mt-14 md:mt-20">
        <figure className="rounded-2xl border border-neutral-200 bg-neutral-50/60 px-6 py-10 md:px-12 md:py-12 text-center">
          <div className="mx-auto h-1.5 w-10 rounded-full bg-brand/30" />
          <blockquote className="mt-6 text-lg md:text-xl text-primary font-medium leading-relaxed max-w-2xl mx-auto">
            「{testimonial.quote}」
          </blockquote>
          <figcaption className="mt-5 text-sm text-secondary">
            —— {testimonial.author}
          </figcaption>
        </figure>
      </section>

      {/* ═══════ 07 行动区 ═══════ */}
      <CtaBanner />

      {/* 版本徽章 */}
      <p className="text-center text-xs text-neutral-400 mt-8">
        当前版本 V2.2.00 ·
        <Link href="/updates" className="text-brand font-semibold hover:underline">
          查看版本发布记录 →
        </Link>
      </p>
    </div>
  );
}
