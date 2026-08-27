import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "技术文章 | 拍卖竞价显示系统",
  description:
    "架构设计、竞价状态机、公式引擎与测试体系——拍卖竞价显示系统的工程实践笔记。",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">技术文章</Heading>
      <Paragraph className="pb-10">
        从 <Highlight>架构选型</Highlight> 到业务状态机，记录拍卖竞价显示系统的
        工程实践与取舍。
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
