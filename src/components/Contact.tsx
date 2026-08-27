"use client";
import React from "react";
import { Paragraph } from "@/components/Paragraph";
import { Heading } from "@/components/Heading";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

export const Contact = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-5 md:items-center bg-neutral-50 rounded-xl border border-neutral-100 p-6">
        <div className="flex-1">
          <Heading as="h3" className="text-base md:text-lg font-black">
            项目展示仓库 · GitHub
          </Heading>
          <Paragraph className="mt-2">
            浏览 README、项目介绍、界面截图与纯 Web 演示版（构建产物）。
            业务合作、源码授权或定制开发，请通过 GitHub 联系作者。
          </Paragraph>
        </div>
        <a
          href="https://github.com/wtw79/pm_Web_App_Showcase"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-brand transition-colors"
        >
          <IconBrandGithub className="h-4 w-4" />
          访问 GitHub
          <IconExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="bg-neutral-50 rounded-xl border border-l-4 border-l-brand border-neutral-100 p-6">
        <Heading as="h3" className="text-base md:text-lg font-black">
          权益声明
        </Heading>
        <div className="mt-3 space-y-2 text-sm text-neutral-600 leading-relaxed">
          <p>
            📌 本仓库为<strong className="text-neutral-800">项目展示仓库（Showcase Repository）</strong>
            ：含项目说明、界面截图、展示网页与
            <strong className="text-neutral-800">纯 Web 演示版（编译产物）</strong>。
          </p>
          <p>
            ❌ 不包含：<strong className="text-neutral-800">源代码</strong>（src/）、
            <strong className="text-neutral-800">Electron 主进程</strong>（electron/）、
            <strong className="text-neutral-800">可执行程序</strong>（exe/安装包）等核心权益文件。
          </p>
          <p>
            演示版为构建后的静态产物，仅供功能体验，不构成对源代码的授权。
            源代码与可执行程序作为核心知识产权保留，不随远程公开。
          </p>
        </div>
      </div>

      <div className="bg-neutral-50 rounded-xl border border-neutral-100 p-6">
        <Heading as="h3" className="text-base md:text-lg font-black">
          产品信息
        </Heading>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-600">
          <div className="flex justify-between border-b border-neutral-100 pb-2">
            <span>产品版本</span>
            <span className="font-semibold text-neutral-800">V2.2.00</span>
          </div>
          <div className="flex justify-between border-b border-neutral-100 pb-2">
            <span>技术架构</span>
            <span className="font-semibold text-neutral-800">React + Electron</span>
          </div>
          <div className="flex justify-between border-b border-neutral-100 pb-2">
            <span>技术栈</span>
            <span className="font-semibold text-neutral-800">React · Vite · Electron · sql.js</span>
          </div>
          <div className="flex justify-between border-b border-neutral-100 pb-2">
            <span>测试保障</span>
            <span className="font-semibold text-neutral-800">88 自动化用例 · 100% 通过</span>
          </div>
        </div>
      </div>
    </div>
  );
};
