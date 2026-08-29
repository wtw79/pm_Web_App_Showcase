import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "核心功能 | 拍卖竞价显示系统",
  description:
    "标的管理、控制台报价、副屏投屏、成交归档、报表管理与 G4 公式引擎——七大核心功能模块。",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-2">核心功能</Heading>
      <Paragraph className="mb-10 max-w-xl">
        从标的管理到成交归档，七大模块覆盖拍卖会
        "会前准备 → 会中竞价 → 会后收尾" 的完整流程。
      </Paragraph>

      <Products />
    </Container>
  );
}
