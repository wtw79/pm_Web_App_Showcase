import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const isMobile = () => {
  if (typeof window === "undefined") return false;
  const width = window.innerWidth;
  return width <= 1024;
};

// shadcn/ui 风格 className 合并工具（供 parallax-hero-images 等组件使用）
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
