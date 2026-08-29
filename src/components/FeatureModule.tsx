import React from "react";
import Link from "next/link";

// FAB 模块：痛点句 + 方案标题 + 截图 + FAB 三列表 + 适用场景
export const FeatureModule = ({
  id,
  benefit,
  pain,
  desc,
  image,
  alt,
  scene,
  fab,
  reverse = false,
  demoHref = "/experience",
}: {
  id: string;
  benefit: string;
  pain: string;
  desc: string;
  image: string;
  alt: string;
  scene: string;
  fab: { f: string; a: string }[];
  reverse?: boolean;
  demoHref?: string;
}) => {
  return (
    <section
      id={id}
      className="scroll-mt-24 py-10 md:py-14 border-b border-neutral-100 last:border-0"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        {/* 截图 */}
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden group-hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 px-4 py-2.5 border-b border-neutral-100 bg-neutral-50/60">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <span className="text-[10px] font-mono text-neutral-400">
                auction-bid.local
              </span>
            </div>
            <img
              src={image}
              alt={alt}
              loading="lazy"
              className="w-full object-cover object-top"
            />
          </div>
          <p className="mt-2 text-[11px] text-neutral-400 tracking-wide">
            FIG.{id.toUpperCase()} — {alt} · 截图自真实系统
          </p>
        </div>

        {/* FAB 叙述 */}
        <div className={reverse ? "lg:order-1" : ""}>
          <p className="text-sm text-neutral-400 leading-relaxed border-l-2 border-neutral-200 pl-4 italic">
            {pain}
          </p>
          <h3 className="mt-4 text-2xl md:text-[1.7rem] font-black text-primary tracking-tight">
            {benefit}
          </h3>
          <p className="mt-2 text-sm md:text-base text-secondary leading-relaxed">
            {desc}
          </p>

          <div className="mt-6 space-y-3">
            {fab.map((row) => (
              <div
                key={row.f}
                className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] gap-1.5 sm:gap-4 rounded-lg border border-neutral-100 bg-neutral-50/50 px-4 py-3 hover:border-brand/30 hover:bg-brand-soft/40 transition-colors"
              >
                <span className="text-[13px] font-bold text-primary leading-snug">
                  {row.f}
                </span>
                <span className="text-[13px] text-secondary leading-snug">
                  {row.a}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs text-neutral-400">
            <span className="font-bold text-neutral-500">适用场景</span> · {scene}
          </p>
          <Link
            href={demoHref}
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold text-brand hover:text-brand-deep transition-colors"
          >
            看它怎么工作 →
          </Link>
        </div>
      </div>
    </section>
  );
};
