import React from "react";

// 关键指标条：把产品事实翻译成客户信任（IA 信任条组件）
const stats = [
  { num: "88", unit: "个", label: "自动化测试护航" },
  { num: "3", unit: "套", label: "主题换肤" },
  { num: "2", unit: "屏", label: "独立投屏" },
  { num: "1", unit: "键", label: "成交归档" },
  { num: "0", unit: "", label: "网络依赖，离线可用" },
];

export const StatBar = () => {
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-5 gap-4 md:gap-6 py-8 md:py-10 border-y border-neutral-200">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <dd className="font-black text-primary tabular-nums text-3xl md:text-4xl tracking-tight">
            {s.num}
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
