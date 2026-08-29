import React from "react";

// 一些事实（不夸大，只说真实的数字）
const stats = [
  { num: "3", unit: "套", label: "界面主题" },
  { num: "2", unit: "屏", label: "独立投屏" },
  { num: "45", unit: "轮", label: "一页规范报表" },
  { num: "1", unit: "步", label: "完成成交归档" },
  { num: "0", unit: "", label: "网络依赖 · 离线可用" },
];

export const StatBar = () => {
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-5 gap-4 md:gap-6 py-8 md:py-10 border-y border-neutral-200">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <dd className="font-black text-primary tabular-nums text-3xl md:text-4xl tracking-tight">
            <span className="bg-gradient-to-br from-brand to-brand-deep bg-clip-text text-transparent">
              {s.num}
            </span>
            <span className="text-base md:text-lg text-brand font-bold ml-0.5">
              {s.unit}
            </span>
          </dd>
          <dt className="mt-1.5 text-xs md:text-sm text-secondary">
            {s.label}
          </dt>
        </div>
      ))}
    </dl>
  );
};
