import React from "react";
import { twMerge } from "tailwind-merge";

// 品牌签名标记：4 条平行条纹（青绿渐变，Marque 语言 × pm 品牌色）
// 复用为：Logo、章节装饰、页脚锚点
export const StripeMark = ({
  className,
  barClassName,
}: {
  className?: string;
  barClassName?: string;
}) => {
  return (
    <span
      aria-hidden="true"
      className={twMerge("inline-flex gap-[5px]", className)}
    >
      {["#0e7c86", "#0a5f66", "#33c3d0", "#0e7c86"].map((color, i) => (
        <i
          key={i}
          className={twMerge("block w-[6px] h-[22px] rounded-[2px]", barClassName)}
          style={{ background: color, opacity: 1 - i * 0.16 }}
        />
      ))}
    </span>
  );
};
