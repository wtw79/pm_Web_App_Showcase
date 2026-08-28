import React from "react";
import { twMerge } from "tailwind-merge";

// 章节头（Marque 编辑式语言）：编号 Label + 标题 + 右侧延伸细线
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
      <div className="flex items-center gap-4">
        {index && (
          <span className="text-xs font-bold tracking-[0.18em] text-brand shrink-0">
            {index}
          </span>
        )}
        <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-black text-primary tracking-tight shrink-0">
          {title}
        </h2>
        <div className="h-px flex-1 bg-neutral-200" aria-hidden="true" />
      </div>
      {desc && (
        <p className="mt-3 text-sm md:text-base text-secondary max-w-2xl">
          {desc}
        </p>
      )}
    </div>
  );
};
