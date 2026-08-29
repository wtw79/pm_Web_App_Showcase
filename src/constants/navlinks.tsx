import {
  IconArticle,
  IconBolt,
  IconChartBar,
  IconHistory,
  IconLayoutDashboard,
  IconMail,
  IconPlayerPlay,
} from "@tabler/icons-react";

// 产品站导航（IA 蓝图：识别 → 理解 → 信任 → 试用 → 联系）
export const navlinks = [
  {
    href: "/",
    label: "首页",
    icon: IconBolt,
  },
  {
    href: "/features",
    label: "产品功能",
    icon: IconLayoutDashboard,
  },
  {
    href: "/experience",
    label: "在线演示",
    icon: IconPlayerPlay,
  },
  {
    href: "/blog",
    label: "文档中心",
    icon: IconArticle,
  },
  {
    href: "/updates",
    label: "版本发布",
    icon: IconHistory,
  },
  {
    href: "/contact",
    label: "联系",
    icon: IconMail,
  },
];
