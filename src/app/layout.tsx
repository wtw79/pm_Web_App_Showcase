import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "拍卖竞价显示系统 · Auction Bid Console",
  description:
    "面向拍卖师与现场操作员的桌面管理系统：标的管理、实时报价、副屏投屏、成交归档。对齐 pm 桌面端业务的完整 Web/Electron 实现。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body
        className={twMerge(
          "flex antialiased h-dvh overflow-hidden bg-gray-100"
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto">
          <div className="flex-1 bg-white min-h-dvh lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
