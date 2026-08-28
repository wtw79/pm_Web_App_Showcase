import React from "react";
import { StripeMark } from "./StripeMark";

// Hero 右侧产品预览：浏览器窗口框 + 控制台 Dashboard（纯 CSS 绘制，对应设计稿 FIG.01）
// 仅作视觉示意，正式上线可替换为真实系统截图
export const HeroDashboard = () => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
      {/* 浏览器窗口 chrome */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-100 bg-white">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </div>
        <div className="flex-1 bg-neutral-100 rounded-md px-3 py-1 text-[10px] text-neutral-400 font-mono flex items-center gap-1.5">
          <span className="text-emerald-600">◉</span>
          console.auction-bid.local · 控制台
        </div>
      </div>

      <div className="grid grid-cols-[118px_1fr] bg-white text-left">
        {/* 侧边导航 */}
        <aside className="bg-neutral-50 border-r border-neutral-100 py-4 px-3 flex flex-col gap-0.5">
          <div className="flex items-center gap-2 px-2 pb-3 mb-1 border-b border-neutral-100">
            <StripeMark barClassName="!h-3 !w-1" />
            <span className="text-xs font-black text-primary">竞拍台</span>
          </div>
          {[
            ["控制台", true],
            ["标的", false],
            ["报表", false],
            ["设置", false],
          ].map(([label, active]) => (
            <div
              key={label as string}
              className={
                "text-[11px] font-semibold rounded-md px-2 py-1.5 " +
                (active ? "bg-brand-soft text-brand" : "text-neutral-400")
              }
            >
              {label}
            </div>
          ))}
          <div className="flex-1" />
          <div className="flex gap-1 px-2 pt-2 border-t border-neutral-100">
            <span className="h-3 w-3 rounded-[4px] bg-[#0e5b54]" />
            <span className="h-3 w-3 rounded-[4px] bg-[#1b2a4a]" />
            <span className="h-3 w-3 rounded-[4px] bg-gradient-to-br from-[#33c3d0] to-[#0e7c86]" />
          </div>
        </aside>

        {/* 主区 */}
        <main className="py-4 px-4 flex flex-col gap-3">
          {/* 状态行 */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black text-primary">
                2026 春拍 · 第 03 号标的
              </p>
              <p className="text-[10px] text-neutral-400 mt-0.5">
                书画专场 · 张大千《山水》立轴
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              进行中
            </span>
          </div>

          {/* 4 大字卡 */}
          <div className="grid grid-cols-4 gap-2">
            {[
              ["起拍价", "¥1,200,000", false],
              ["当前号牌", "038", true],
              ["增价幅度", "¥10,000", false],
              ["最新应价", "¥1,350,000", false],
            ].map(([k, v, hot]) => (
              <div
                key={k as string}
                className="bg-neutral-50 rounded-lg border border-neutral-100 px-2.5 py-2"
              >
                <p className="text-[9px] font-bold text-neutral-400 tracking-wide">
                  {k}
                </p>
                <p
                  className={
                    "mt-1 font-black tabular-nums text-[13px] md:text-sm truncate " +
                    (hot
                      ? "text-white bg-brand rounded px-1.5 py-0.5 inline-block mt-0.5"
                      : "text-primary")
                  }
                >
                  {v}
                </p>
              </div>
            ))}
          </div>

          {/* 报价表 */}
          <div className="rounded-lg border border-neutral-100 overflow-hidden">
            <div className="grid grid-cols-[40px_1fr_1.2fr_1fr] gap-2 px-3 py-1.5 bg-neutral-50 text-[9px] font-bold text-neutral-400 border-b border-neutral-100">
              <span>轮次</span>
              <span>号牌</span>
              <span>应价</span>
              <span>状态</span>
            </div>
            {[
              ["05", "036", "¥1,330,000", "已应价", false],
              ["06", "041", "¥1,340,000", "已应价", false],
              ["07", "038", "¥1,350,000", "领先", true],
            ].map(([r, p, price, st, lead]) => (
              <div
                key={r as string}
                className={
                  "grid grid-cols-[40px_1fr_1.2fr_1fr] gap-2 px-3 py-1.5 text-[11px] tabular-nums border-b border-neutral-50 last:border-0 " +
                  (lead ? "bg-brand-soft/50 shadow-[inset_3px_0_0_#0e7c86]" : "")
                }
              >
                <span className="text-neutral-400 font-semibold">{r}</span>
                <span className="text-primary font-semibold">{p}</span>
                <span className="font-bold text-primary">{price}</span>
                {lead ? (
                  <span className="text-[9px] font-black text-white bg-red-700 rounded-full px-2 py-0.5 w-fit">
                    领先
                  </span>
                ) : (
                  <span className="text-[10px] text-neutral-400 font-semibold">
                    {st}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* 软键盘 + 操作 */}
          <div className="flex gap-2 items-end">
            <div className="flex-1 grid grid-cols-5 gap-1.5 bg-neutral-50 rounded-lg border border-neutral-100 p-2">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map(
                (n, i) => (
                  <span
                    key={n}
                    className={
                      "h-6 rounded-md text-[10px] font-bold flex items-center justify-center border " +
                      (i === 9
                        ? "bg-neutral-100 text-neutral-400 border-neutral-100"
                        : "bg-white text-primary border-neutral-200")
                    }
                  >
                    {n}
                  </span>
                )
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold text-primary bg-neutral-100 rounded-md px-3 py-1.5 text-center">
                撤回
              </span>
              <span className="text-[10px] font-bold text-white bg-red-700 rounded-md px-3 py-1.5 text-center">
                成交
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
