"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { AnimatePresence, motion } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      {/* 移动端顶部栏：品牌 + 菜单按钮（桌面端隐藏） */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-[60] h-14 bg-white/90 backdrop-blur-md border-b border-neutral-200 flex items-center justify-between px-4 safe-top">
        <Link href="/" className="flex items-center gap-2 min-w-0" onClick={() => isMobile() && setOpen(false)}>
          <div className="h-8 w-8 rounded-lg bg-brand text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
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
        <button
          aria-label={open ? "关闭菜单" : "打开菜单"}
          className="h-11 w-11 flex items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-sm active:scale-95 transition-transform"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <IconX className="h-5 w-5 text-primary" />
          ) : (
            <IconMenu2 className="h-5 w-5 text-primary" />
          )}
        </button>
      </header>

      {/* 移动端遮罩：点击关闭抽屉 */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden fixed inset-0 z-[90] bg-black/40"
            onClick={() => isMobile() && setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -240 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -240 }}
            className="px-6 z-[100] py-8 lg:py-10 bg-neutral-100 max-w-[16rem] w-[80vw] lg:w-fit fixed lg:relative h-dvh left-0 top-0 lg:top-auto flex flex-col justify-between"
          >
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div onClick={() => isMobile() && setOpen(false)}>
              <Link
                href="/experience"
                className="bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block w-full"
              >
                <div className="relative flex space-x-2 items-center justify-center z-10 rounded-full bg-transparent py-2.5 px-4 ring-1 ring-white/10">
                  <span>在线体验系统</span>
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <div className="flex flex-col space-y-1 my-8 lg:my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => isMobile() && setOpen(false)}
            className={twMerge(
              "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2.5 px-2 rounded-md text-sm",
              isActive(link.href) && "bg-white shadow-lg text-primary"
            )}
          >
            <Icon
              className={twMerge(
                "h-4 w-4 flex-shrink-0",
                isActive(link.href) && "text-brand"
              )}
            />
            <span>{link.label}</span>
          </Link>
        );
      })}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-8 lg:pt-10 px-2">
        社交
      </Heading>
      {socials.map((link: Navlink) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={twMerge(
              "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2.5 px-2 rounded-md text-sm"
            )}
          >
            <Icon className="h-4 w-4 flex-shrink-0" />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-2 items-center">
      <div className="h-10 w-10 rounded-lg bg-brand text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
        拍
      </div>
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">拍卖竞价显示系统</p>
        <p className="font-light text-secondary">Auction Bid Console</p>
      </div>
    </div>
  );
};
