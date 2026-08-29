import { notFound } from "next/navigation";
import { products } from "@/constants/products";

// 影子页面（Sidefolio 模板遗留）：模块详情内容已并入 /features，全部详情页下线为品牌 404。
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function SingleProductPage() {
  notFound();
}