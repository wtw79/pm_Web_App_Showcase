"use client";
import React from "react";
import Link from "next/link";
import { StripeMark } from "./StripeMark";

// 页脚：正式沟通窗口（邮箱 / 版本 / 隐私 / 社媒），IA 蓝图 08 板块
export const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50/60">
      <div className="max-w-5xl w-full mx-auto px-4 md:px-10 py-10">
        <div className="flex flex-col md:flex-row gap-8 md:items-start md:justify-between">
          {/* 品牌 */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <StripeMark barClassName="!h-4 !w-1.5" />
              <span className="text-sm font-black text-primary">
                拍卖竞价显示系统
              </span>
            </div>
            <p className="mt-3 text-xs text-secondary leading-relaxed">
              Auction Bid Console · V2.3.00 · 个人维护项目
              <br />
              标的管理、实时报价、副屏投屏、成交归档
            </p>
          </div>

          {/* 导航 */}
          <div>
            <p className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
              站点
            </p>
            <ul className="mt-3 space-y-2 text-[13px] font-medium text-secondary">
              <li><Link href="/features" className="hover:text-brand transition-colors">产品功能</Link></li>
              <li><Link href="/solutions" className="hover:text-brand transition-colors">适用场景</Link></li>
              <li><Link href="/experience" className="hover:text-brand transition-colors">在线演示</Link></li>
              <li><Link href="/updates" className="hover:text-brand transition-colors">更新记录</Link></li>
              <li><Link href="/blog" className="hover:text-brand transition-colors">文档中心</Link></li>
            </ul>
          </div>

          {/* 联系 */}
          <div>
            <p className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
              联系
            </p>
            <ul className="mt-3 space-y-2 text-[13px] font-medium text-secondary">
              <li>
                <a href="mailto:hello@auction-console.com" className="hover:text-brand transition-colors">
                  hello@auction-console.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/wtw79/pm_Web_App_Showcase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li><Link href="/contact" className="hover:text-brand transition-colors">联系与合作</Link></li>
              <li><Link href="/contact" className="hover:text-brand transition-colors">隐私政策</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} 拍卖竞价显示系统 · 保留所有权利
          </p>
          <p className="text-xs text-neutral-400">
            展示站点 · 不含源代码 ｜ 个人维护项目 · 数据保存在本地
          </p>
        </div>
      </div>
    </footer>
  );
};
