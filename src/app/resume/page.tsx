import { notFound } from "next/navigation";

// 影子页面（Sidefolio 模板遗留）：系统总览与版本演进已并入 /updates，此页下线为品牌 404。
export default function ResumePage() {
  notFound();
}