"use client";
import React, { useCallback, useEffect, useState } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const pillCls = (active: boolean) =>
  "text-xs md:text-[13px] font-bold rounded-full px-4 py-2 transition-colors " +
  (active ? "bg-brand text-white shadow-sm" : "text-secondary hover:text-brand");

// 在线体验：控制台报价 / 副屏投屏 双预览 + 移动端门控。
//  - 桌面 / 宽屏 → 直接预览；投屏预览内嵌独立渲染的副屏页（无操作时展示内置示例场次数据，
//    玩过控制台演示后经 localStorage 实时跟随你的数据）。
//  - 手机（coarse 指针 + 窄屏）→ 提示页（桌面端应用，建议电脑体验），可「复制链接」或「横屏试试」。
export const MobileDemoGate = () => {
  const [tab, setTab] = useState<"console" | "screen">(() => {
    if (typeof window === "undefined") return "console";
    return new URLSearchParams(window.location.search).get("tab") === "screen"
      ? "screen"
      : "console";
  });
  const [device, setDevice] = useState<"checking" | "desktop" | "mobile">(
    "checking"
  );
  const [landscape, setLandscape] = useState(false);
  const [force, setForce] = useState(false);
  const [copied, setCopied] = useState(false);

  const measure = useCallback(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const narrow = window.innerWidth < 820;
    setDevice(coarse && narrow ? "mobile" : "desktop");
    setLandscape(window.innerWidth > window.innerHeight);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, [measure]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // 切换预览并同步 URL（?tab=screen 可分享 / 深链），不整页刷新
  const switchTab = (next: "console" | "screen") => {
    setTab(next);
    try {
      const u = new URL(window.location.href);
      if (next === "screen") u.searchParams.set("tab", "screen");
      else u.searchParams.delete("tab");
      history.replaceState(null, "", u.pathname + u.search);
    } catch {
      /* 忽略 URL 同步失败 */
    }
  };

  // 初始检测中：占位，避免闪烁
  if (device === "checking") {
    return (
      <div className="h-[70vh] rounded-xl border border-neutral-200 bg-neutral-50 animate-pulse" />
    );
  }

  // 投屏预览：独立渲染的副屏页面（自带种子/同步数据）
  const demoSrc =
    tab === "screen" ? `${BASE}/demo/bigscreen.html?mode=bid` : `${BASE}/demo/`;

  return (
    <div className="h-full">
      {/* 预览切换：控制台报价 / 副屏投屏 */}
      <div
        role="tablist"
        aria-label="演示预览切换"
        className="mb-3 inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white p-1"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "console"}
          onClick={() => switchTab("console")}
          className={pillCls(tab === "console")}
        >
          🖥 控制台报价
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "screen"}
          onClick={() => switchTab("screen")}
          className={pillCls(tab === "screen")}
        >
          📺 副屏投屏
        </button>
      </div>

      {device === "desktop" || force ? (
        <div className="relative">
          {/* 强制预览时：竖屏旋转引导遮罩（半透明，不打断 iframe 加载） */}
          {device === "mobile" && force && !landscape && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-white/85 backdrop-blur-sm text-center px-6">
              <span
                aria-hidden="true"
                className="h-16 w-10 rounded-lg border-[3px] border-brand flex items-center justify-center animate-rotate-hint"
              >
                <span className="block h-2.5 w-2.5 rounded-full bg-brand/40" />
              </span>
              <div>
                <p className="text-base font-black text-primary">
                  请旋转设备，横屏体验
                </p>
                <p className="mt-3 text-[13px] text-secondary">
                  演示版按桌面端设计，横屏后效果更好
                </p>
              </div>
            </div>
          )}

          {/* 强制预览时：顶部提示条 */}
          {device === "mobile" && force && (
            <div className="mb-2 flex items-center justify-between gap-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[12px] text-amber-800">
              <span>移动端体验有限，建议在电脑上打开。</span>
              <button
                onClick={copyLink}
                className="shrink-0 font-bold underline underline-offset-2"
              >
                {copied ? "已复制 ✓" : "复制链接"}
              </button>
            </div>
          )}

          <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-sm">
            <iframe
              src={demoSrc}
              title={
                tab === "screen"
                  ? "拍卖竞价显示系统 · 副屏投屏预览"
                  : "拍卖竞价显示系统 · 在线体验"
              }
              className="w-full h-[calc(100dvh-16rem)] min-h-[70vh] border-0 bg-white"
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-[11px] text-neutral-400">
            {tab === "screen"
              ? "提示：投屏窗是独立页面，数据跟着控制台演示走；没操作过时，里面是示例数据。"
              : "提示：系统按桌面端设计；在系统内打开「投屏窗」会以浏览器新窗口演示。"}
          </p>
        </div>
      ) : (
        <>
          {/* 手机端：提示页（桌面端应用） */}
          <div className="flex flex-col items-center justify-center text-center rounded-2xl border border-neutral-200 bg-neutral-50/60 px-6 py-16 md:py-24 h-full min-h-[60vh]">
            <span
              aria-hidden="true"
              className="h-20 w-12 rounded-xl border-[3px] border-neutral-300 flex items-center justify-center"
            >
              <span className="block h-2.5 w-2.5 rounded-full bg-neutral-300" />
            </span>
            <h3 className="mt-6 text-xl font-black text-primary">
              这个系统是为桌面端设计的
            </h3>
            <p className="mt-3 text-sm text-secondary leading-relaxed max-w-sm">
              控制台报价、投屏演示需要较大的屏幕，
              建议在电脑浏览器中打开体验，效果最佳。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={copyLink}
                className="inline-flex items-center justify-center gap-2 bg-brand text-white text-sm font-bold rounded-full px-6 py-3 hover:bg-brand-deep transition-colors"
              >
                {copied ? "链接已复制 ✓" : "复制链接，稍后电脑打开"}
              </button>
              <button
                onClick={() => setForce(true)}
                className="inline-flex items-center justify-center gap-2 border border-neutral-300 bg-white text-primary text-sm font-bold rounded-full px-6 py-3 hover:border-brand hover:text-brand transition-colors"
              >
                横屏试试
              </button>
            </div>
            <p className="mt-4 text-[11px] text-neutral-400">
              提示：演示版数据保存在浏览器本地，仅供体验。
            </p>
          </div>
        </>
      )}
    </div>
  );
};