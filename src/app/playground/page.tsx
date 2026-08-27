import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import ParallaxHeroImagesDemo from "@/components/parallax-hero-images-demo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "视差 Hero 演示 | 拍卖竞价显示系统",
  description:
    "基于 Motion（Framer Motion）的多深度视差图片 Hero 组件演示——不同深度的图片随鼠标以不同速度移动。",
};

export default function PlaygroundPage() {
  return (
    <Container>
      <span className="text-4xl">🎬</span>
      <Heading className="font-black">视差 Hero 演示</Heading>
      <Paragraph className="max-w-xl mt-4">
        基于 <Highlight>Motion</Highlight>（Framer Motion）的多深度视差组件：
        8 张图片按 8 个方位排布，各自拥有不同的纵深系数，随鼠标以不同速度
        移动，形成"远近错落"的立体层次。组件来自 Aceternity UI
        （与本站模板同源），已接入本站组件库
        <Highlight>src/components/ui/parallax-hero-images.tsx</Highlight>。
      </Paragraph>
      <Paragraph className="max-w-xl mt-4 text-sm text-neutral-400">
        移动鼠标 / 手指查看视差效果。该演示可作为拍卖会大屏欢迎页的候选视觉方案。
      </Paragraph>

      <div className="mt-10">
        <ParallaxHeroImagesDemo />
      </div>
    </Container>
  );
}
