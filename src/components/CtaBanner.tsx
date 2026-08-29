import React from "react";
import Link from "next/link";

// 行动区：看它工作 / 与作者聊聊，文案克制不夸大
export const CtaBanner = ({
  title = "去看看它怎么工作。",
  sub = "浏览器直接打开，控制台和投屏窗都能看。",
  primaryHref = "/experience",
  primaryLabel = "看它工作",
  secondaryHref = "/contact",
  secondaryLabel = "与作者聊聊",
}: {
  title?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  sub?: string;
}) => {
  return (
    <section className="my-10 md:my-16">
      <div className="rounded-2xl bg-gradient-to-br from-brand to-brand-deep px-6 py-12 md:px-12 md:py-14 text-center shadow-lg">
        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
          {title}
        </h2>
        <p className="mt-3 text-sm md:text-base text-white/80">{sub}</p>
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
