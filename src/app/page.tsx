import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">🏛</span>
      <Heading className="font-black">拍卖竞价显示系统</Heading>
      <Paragraph className="max-w-xl mt-4">
        面向拍卖师与现场操作员的<b className="text-neutral-700">桌面管理系统</b>——
        标的管理、实时报价、副屏投屏、成交归档，覆盖拍卖会
        <Highlight>"从开场到落槌"</Highlight>的完整流程。
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        本项目为 pm（WPF 桌面端）的
        <Highlight>Web / Electron 移植实现</Highlight>，竞价逻辑、状态机、报表格式
        逐行对齐原版，同时获得三主题换肤、公式列配置与多屏投屏等增强能力。
      </Paragraph>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        核心功能模块
      </Heading>
      <Products />

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        技术栈
      </Heading>
      <TechStack />
    </Container>
  );
}
