import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

// 静态导出（output: export）需要为动态路由声明所有参数
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
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

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }
  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
