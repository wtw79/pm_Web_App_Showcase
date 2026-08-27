"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "motion/react";

export default function About() {
  const images = [
    "/images/console-light.png",
    "/images/bigscreen-bid.png",
    "/images/console-dark.png",
    "/images/bigscreen-welcome.png",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="系统界面"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          <b className="text-neutral-700">拍卖竞价显示系统</b>是运行在拍卖会现场的
          "信息展示 + 竞价管理"一体化工具：会前把标的信息（公告 PDF、图片、产权资料）
          组织好，会中把资料投到大屏幕、实时呈现每一手报价与领先情况，落槌成交后自动
          生成报表与现场留档。
        </Paragraph>
        <Paragraph className=" mt-4">
          它解决的是没有这套系统时现场工作的真实困扰：标的信息零散难管理、展示全靠
          手工布置、报价记录靠手写容易记错漏记、会后报表归档繁琐。
        </Paragraph>

        <Paragraph className=" mt-4">
          <b className="text-neutral-700">目标用户</b>：拍卖师 / 主持人（大屏展示清晰、
          竞价顺畅、成交判定明确），现场操作员（操作简单直接、关键动作不易点错、
          出错可快速撤回），主办方与管理层（数据完整留档、报表规范可导出、事后可查可追溯）。
        </Paragraph>
        <Paragraph className=" mt-4">
          <b className="text-neutral-700">设计原则</b>：出错可逆（撤回 / 撤销删除 /
          重开快照），投屏即所见（主屏操作、副屏展示，多显示器独立投放），
          成交即归档（一个动作完成报表 + 截图 + 归档），数据本地私有（单文件便携版，
          不依赖网络，开箱即用）。
        </Paragraph>
        <Paragraph className=" mt-4">
          <b className="text-neutral-700">版本与对齐</b>：产品版本 V2.2.00，web 工程
          package.json 2.2.0，与原 pm 桌面端（WPF/C#，2.2.00）功能完全对齐；
          竞价逻辑、状态机、报表格式、软键盘行为逐行移植，老用户无需重新学习。
        </Paragraph>
        <Paragraph className=" mt-4">
          通过本展示站，你可以在线体验纯 Web 演示版（<b className="text-neutral-700">左侧「在线体验系统」</b>），
          或浏览技术文章了解架构与实现。如需业务合作、源码授权或定制开发，
          请通过 GitHub 联系作者。
        </Paragraph>
      </div>
    </div>
  );
}
