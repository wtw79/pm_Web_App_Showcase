import Link from "next/link";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Props = {
  // Next 16：动态路由 params 为 Promise，必须 await
  params: Promise<{ slug: string }>;
};

// 静态导出（output: export）需要为动态路由声明所有参数
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug) as Product | undefined;
  if (product) {
    return {
      title: `${product.title} | 拍卖竞价显示系统`,
      description: product.description,
    };
  } else {
    return {
      title: "核心功能 | 拍卖竞价显示系统",
      description:
        "标的管理、控制台报价、副屏投屏、成交归档、报表管理与 G4 公式引擎。",
    };
  }
}

// 详情页为纯 Server 组件渲染：动态路由 + client 组件在静态导出下会挂起（body 仅骨架），
// 改为服务端内联渲染，保证静态 HTML 完整（含图片）。
export default async function SingleProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <Container>
      <div className="py-6">
        <div className="relative">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-md object-contain w-full"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-10 gap-4">
          <Heading className="font-black">{product.title}</Heading>
          <div className="flex flex-wrap gap-2">
            {(product.stack || []).map((stack: string) => (
              <span
                key={stack}
                className="text-xs bg-neutral-50 border border-neutral-200 text-neutral-600 px-3 py-1.5 rounded-full"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>

        <Paragraph className="max-w-2xl mt-4">{product.description}</Paragraph>

        <div className="prose prose-sm md:prose-base max-w-none text-neutral-600 mt-6">
          {product?.content}
        </div>

        <div className="mt-10">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 bg-gray-800 text-white text-sm font-semibold rounded-full px-6 py-3 hover:bg-brand transition-colors"
          >
            在线体验 →
          </Link>
        </div>

        {/* 延伸阅读：功能页与站内其他内容联动 */}
        <div className="mt-12 pt-6 border-t border-neutral-100">
          <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
            延伸阅读
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className="text-xs bg-neutral-50 border border-neutral-200 text-neutral-600 px-3 py-1.5 rounded-full hover:border-brand hover:text-brand transition-colors"
            >
              📝 技术文章
            </Link>
            <Link
              href="/resume"
              className="text-xs bg-neutral-50 border border-neutral-200 text-neutral-600 px-3 py-1.5 rounded-full hover:border-brand hover:text-brand transition-colors"
            >
              📊 系统总览 · 版本演进
            </Link>
            <Link
              href="/about"
              className="text-xs bg-neutral-50 border border-neutral-200 text-neutral-600 px-3 py-1.5 rounded-full hover:border-brand hover:text-brand transition-colors"
            >
              💬 系统介绍
            </Link>
            <Link
              href="/experience"
              className="text-xs bg-neutral-50 border border-neutral-200 text-neutral-600 px-3 py-1.5 rounded-full hover:border-brand hover:text-brand transition-colors"
            >
              🎮 完整在线体验
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
