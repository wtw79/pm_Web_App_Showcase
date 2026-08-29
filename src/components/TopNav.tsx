"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

// 顶部导航（全站去侧栏）：桌面横排 + 移动端汉堡抽屉
export const TopNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl w-full mx-auto px-4 md:px-10 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 min-w-0"
          onClick={() => setOpen(false)}
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand to-brand-deep text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            拍
          </div>
          <div className="flex flex-col min-w-0">
            <p className="font-bold text-primary text-sm leading-tight truncate">
              拍卖竞价显示系统
            </p>
            <p className="font-light text-secondary text-[10px] leading-tight truncate">
              Auction Bid Console
            </p>
          </div>
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navlinks.map((link: Navlink) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={twMerge(
                  "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-secondary hover:text-primary transition-colors",
                  isActive(link.href) && "text-brand bg-brand-soft/60 font-bold"
                )}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/experience"
            className="hidden sm:inline-flex items-center gap-1.5 bg-brand text-white text-sm font-bold rounded-full px-5 py-2 hover:bg-brand-deep transition-colors shadow-sm"
          >
            看它工作 →
          </Link>
          <button
            aria-label={open ? "关闭菜单" : "打开菜单"}
            onClick={() => setOpen(!open)}
            className="md:hidden h-10 w-10 flex items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-sm active:scale-95 transition-transform"
          >
            {open ? (
              <IconX className="h-5 w-5 text-primary" />
            ) : (
              <IconMenu2 className="h-5 w-5 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* 移动端抽屉 */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t border-neutral-200"
          >
            <nav className="px-4 py-3 flex flex-col">
              {navlinks.map((link: Navlink) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={twMerge(
                      "flex items-center gap-2.5 py-2.5 px-2 rounded-lg text-sm font-medium text-secondary hover:text-primary transition-colors",
                      isActive(link.href) && "text-brand bg-brand-soft/60 font-bold"
                    )}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
              <Link
                href="/experience"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 bg-brand text-white text-sm font-bold rounded-full py-2.5 hover:bg-brand-deep transition-colors shadow-sm"
              >
                看它工作 →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};