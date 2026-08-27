import { redirect } from "next/navigation";

// "演示"已直接指向站内在线体验页 /experience，本页保留为旧链接兜底跳转
export default function PlaygroundPage() {
  redirect("/experience/");
}
