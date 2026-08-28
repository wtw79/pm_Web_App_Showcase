import React from "react";
import Link from "next/link";

// 行动区 CTA Banner（转化收口：体验 / 预约）
export const CtaBanner = ({
  title = "还没有体验过？3 分钟，感受一场顺畅的拍卖。",
  primaryHref = "/experience",
  primaryLabel = "立即在线体验",
  secondaryHref = "/contact",
  secondaryLabel = "预约演示",
}: {
  title?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) => {
  return (
    <section className="my-10 md:my-16">
      <div className="rounded-2xl bg-gradient-to-br from-brand to-brand-deep px-6 py-12 md:px-12 md:py-16 text-center shadow-lg">
        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          {title}
        </h2>
        <p className="mt-3 text-sm md:text-base text-white/80">
          无需安装、无需联网、数据留在本地——打开即用。
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-deep text-sm font-bold rounded-full px-7 py-3.5 hover:bg-brand-soft transition-colors shadow-sm"
          >
            {primaryLabel} →
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-sm font-bold rounded-full px-7 py-3.5 hover:bg-white/10 transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};
