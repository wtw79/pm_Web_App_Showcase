"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100">
      <span className="font-semibold">
        © {new Date().getFullYear()} 拍卖竞价显示系统 · V2.2.00
      </span>
      {"  "}— 全新 Web/Electron 桌面应用 · 展示仓库不含源代码
    </div>
  );
};
