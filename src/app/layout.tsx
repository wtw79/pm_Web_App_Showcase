import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "拍卖竞价显示系统 · Auction Bid Console",
  description:
    "从起拍到落槌，一气呵成。面向拍卖行与现场操作员的一体化系统：标的管理、实时报价、副屏投屏、成交归档。离线可用，开箱即用。",
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
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 flex-1 overflow-y-auto pt-14 lg:pt-2">
          <div className="flex-1 bg-white min-h-dvh lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto pb-16 lg:pb-0">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
