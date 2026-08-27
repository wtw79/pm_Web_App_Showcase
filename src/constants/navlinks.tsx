import {
  IconArticle,
  IconBolt,
  IconBriefcase2,
  IconChartBar,
  IconInfoCircle,
  IconMail,
  IconSparkles,
} from "@tabler/icons-react";

// 完整路由导航：覆盖站点全部页面（首页 / 系统介绍 / 核心功能 / 演示 / 系统总览 / 技术文章 / 联系·权益）
export const navlinks = [
  {
    href: "/",
    label: "首页",
    icon: IconBolt,
  },
  {
    href: "/about",
    label: "系统介绍",
    icon: IconInfoCircle,
  },
  {
    href: "/projects",
    label: "核心功能",
    icon: IconBriefcase2,
  },
  {
    href: "/experience",
    label: "演示",
    icon: IconSparkles,
  },
  {
    href: "/resume",
    label: "系统总览",
    icon: IconChartBar,
  },
  {
    href: "/blog",
    label: "技术文章",
    icon: IconArticle,
  },
  {
    href: "/contact",
    label: "联系·权益",
    icon: IconMail,
  },
];
