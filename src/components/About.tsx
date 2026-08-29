"use client";
import { Paragraph } from "@/components/Paragraph";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function About() {
  const images = [
    `${BASE}/images/console-light.png`,
    `${BASE}/images/bigscreen-bid.png`,
    `${BASE}/images/console-dark.png`,
    `${BASE}/images/bigscreen-welcome.png`,
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 my-10">
        {images.map((image, index) => (
          <div
            key={image}
            className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-28 md:h-60 hover:rotate-0 transition duration-200"
            style={index % 2 === 1 ? { transform: "rotate(-3deg)" } : undefined}
          >
            <img
              src={image}
              alt="系统界面"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          <b className="text-neutral-700">拍卖竞价显示系统</b>是运行在拍卖会现场的
          "信息展示 + 竞价管理"工具：会前把标的信息（公告 PDF、图片、产权资料）
          组织好，会中把资料投到大屏幕、实时呈现每一手报价与领先情况，落槌成交后自动
          生成报表与现场留档。
        </Paragraph>
        <Paragraph className=" mt-4">
          它解决的是没有这套系统时现场工作的真实困扰：标的信息零散难管理、展示全靠
          手工布置、报价记录靠手写容易记错漏记、会后报表归档繁琐。
        </Paragraph>

        <Paragraph className=" mt-4">
          用它的主要是三类人：拍卖师与主持人，要大屏清晰、竞价顺畅、成交判定明确；
          现场操作员，要操作直接、关键动作不易点错、出错能快速撤回；
          主办方与管理层，要数据完整留档、报表规范可导出、事后可查可追溯。
        </Paragraph>
        <Paragraph className=" mt-4">
          它有几条固定的做法：出错可逆（撤回 / 撤销删除 / 重开快照），
          投屏即所见（主屏操作、副屏展示，多显示器独立投放），
          成交即归档（一个动作完成报表 + 截图 + 归档），
          数据本地私有（单文件便携版，不依赖网络，开箱即用）。
        </Paragraph>
        <Paragraph className=" mt-4">
          版本：产品版本 V2.3.00。报价校验、状态机、报表格式、软键盘这些核心规则，
          都按拍卖现场的流程来写。
        </Paragraph>
        <Paragraph className=" mt-4">
          本系统从 2021 年就用到现在，2025 年年末起由我接手开发和维护。
          早期版本是内部用的桌面工具，后来整理成现在的样子。
          功能上只做拍卖现场的核心流程。
          使用中如有问题或建议，欢迎在 GitHub 上提 issue 或直接联系。
        </Paragraph>
        <Paragraph className=" mt-4">
          通过本展示站，你可以在线体验纯 Web 演示版（<b className="text-neutral-700">左侧「在线体验」</b>），
          或浏览技术文章了解架构与实现。如需业务合作、源码授权或定制开发，
          请通过 GitHub 联系作者。
        </Paragraph>
      </div>
    </div>
  );
}
