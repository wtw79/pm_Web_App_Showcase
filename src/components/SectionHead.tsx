import React from "react";
import { twMerge } from "tailwind-merge";

// 章节头（产品站样式）：渐变小标 + 大字标题 + 渐变短线
export const SectionHead = ({
  index,
  title,
  desc,
  className,
}: {
  index?: string;
  title: string;
  desc?: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("mb-8 md:mb-12", className)}>
      <div className="flex items-center gap-3">
        <span
          className="h-5 w-1.5 rounded-full bg-gradient-to-b from-brand-light to-brand-deep"
          aria-hidden="true"
        />
        <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-black text-primary tracking-tight">
          {title}
        </h2>
      </div>
      {index && (
        <p className="mt-2 text-xs font-bold tracking-[0.18em] text-neutral-400 uppercase">
          {index}
        </p>
      )}
      {desc && (
        <p className="mt-3 text-sm md:text-base text-secondary max-w-2xl">
          {desc}
        </p>
      )}
    </div>
  );
};