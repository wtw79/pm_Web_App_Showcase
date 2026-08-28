import React from "react";

// 客户 Logo 墙（信任条）：占位使用目标客户类型，正式上线替换为真实客户标识
const logos = [
  { ico: "艺", name: "XX 艺术品拍卖行" },
  { ico: "资", name: "城市资产交易中心" },
  { ico: "车", name: "XX 二手车拍卖平台" },
  { ico: "当", name: "XX 典当行" },
  { ico: "公", name: "公共资源交易中心" },
  { ico: "展", name: "XX 会展服务" },
];

export const LogosWall = ({
  title = "深受专业拍卖机构信赖",
  note,
}: {
  title?: string;
  note?: string;
}) => {
  return (
    <section className="py-10 md:py-14 text-center">
      <p className="text-xs md:text-sm font-bold tracking-[0.16em] uppercase text-secondary">
        {title}
      </p>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex flex-col items-center gap-2.5 rounded-xl border border-dashed border-neutral-200 py-5 px-2 hover:border-brand/50 hover:bg-brand-soft/40 transition-colors duration-200"
          >
            <span className="h-9 w-9 rounded-lg bg-neutral-100 text-neutral-400 flex items-center justify-center text-sm font-black">
              {logo.ico}
            </span>
            <span className="text-[11px] md:text-xs font-semibold text-neutral-400">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
      {note && <p className="mt-5 text-[11px] text-neutral-400">{note}</p>}
    </section>
  );
};
