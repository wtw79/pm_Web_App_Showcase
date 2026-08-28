import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "文档中心 | 拍卖竞价显示系统",
  description:
    "架构总览、竞价状态机、数据模型、公式引擎、Electron 架构、测试体系——拍卖竞价显示系统的工程实践与实现细节。",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <p className="text-xs font-bold tracking-[0.18em] text-brand uppercase mb-3">
        Docs · 文档中心
      </p>
      <Heading className="font-black pb-4">文档中心</Heading>
      <Paragraph className="pb-6 max-w-2xl">
        架构总览、竞价状态机、公式引擎、数据模型与测试体系——
        这个系统是怎么实现的，都在这里。
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
