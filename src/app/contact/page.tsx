import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系·权益 | 拍卖竞价显示系统",
  description:
    "项目展示仓库的 GitHub 链接、权益声明与产品信息。源代码与可执行程序保留所有权利。",
};

export default function ContactPage() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">联系 · 权益</Heading>
      <Paragraph className="mb-10 max-w-xl">
        项目展示、合作咨询与权益说明。演示版仅供功能体验，不构成对源代码的授权。
      </Paragraph>
      <Contact />
    </Container>
  );
}
