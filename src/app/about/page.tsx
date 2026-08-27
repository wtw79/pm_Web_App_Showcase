import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "系统介绍 | 拍卖竞价显示系统",
  description:
    "面向拍卖师与现场操作员的桌面管理系统：标的管理、实时报价、副屏投屏、成交归档。",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">系统介绍</Heading>
      <About />
    </Container>
  );
}
