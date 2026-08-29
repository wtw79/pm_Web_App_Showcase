import { TopNav } from "@/components/TopNav";
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://wtw79.github.io/pm_Web_App_Showcase/"),
  title: "拍卖竞价显示系统 · Auction Bid Console",
  description:
    "从起拍到落槌，一气呵成。面向拍卖行与现场操作员的一体化系统：标的管理、实时报价、副屏投屏、成交归档。离线可用，开箱即用。",
  openGraph: {
    title: "拍卖竞价显示系统 · Auction Bid Console",
    description:
      "标的管理、实时报价、副屏投屏、成交归档，都在一个程序里。一个人能操作，断网也能跑。",
    type: "website",
    locale: "zh_CN",
    url: "https://wtw79.github.io/pm_Web_App_Showcase/",
    siteName: "拍卖竞价显示系统",
    // 相对路径由 metadataBase 解析，避免出现 basePath 叠加（/pm_Web_App_Showcase/pm_Web_App_Showcase）
    images: [{ url: "images/console-light.png", width: 1200, height: 800, alt: "拍卖竞价显示系统 · 控制台" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "拍卖竞价显示系统 · Auction Bid Console",
    description: "标的管理、实时报价、副屏投屏、成交归档，都在一个程序里。",
    images: ["images/console-light.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-white min-h-dvh flex flex-col">
        <TopNav />
        <main className="flex-1 w-full bg-gradient-to-b from-brand-soft/40 via-white to-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
