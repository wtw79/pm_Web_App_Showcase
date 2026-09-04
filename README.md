# 拍卖竞价显示系统 · 品牌展示站（pm_Web_App_Showcase）

> 拍卖竞价显示系统（Auction Bid Console）的在线品牌展示站：面向拍卖师与现场操作员的桌面管理系统——标的管理、实时报价、副屏投屏、成交归档的完整业务闭环。
> 本仓库是**在线品牌展示站**（Web 产品页），展示产品全貌并提供在线体验；它不是拍卖系统本身的源码仓库。

**在线地址：[https://wtw79.github.io/pm_Web_App_Showcase/](https://wtw79.github.io/pm_Web_App_Showcase/)**
**在线体验：[https://wtw79.github.io/pm_Web_App_Showcase/experience](https://wtw79.github.io/pm_Web_App_Showcase/experience)**

---

## 这是什么 / 不是什么

- ✅ **这是**：拍卖竞价显示系统的品牌展示站（Web 产品页）。它介绍产品、展示真实界面截图、内嵌可运行的纯 Web 演示版，部署在 GitHub Pages。
- ❌ **这不是**：拍卖系统桌面版的源码仓库。桌面端（`pm_Web_App`，Electron）的核心源码、可执行程序均**不在本仓库公开**，见下文「权益声明」。

---

## 在线体验（站内页）

品牌站内嵌**可运行的纯 Web 演示版**（`/experience` 页，控制台报价 + 副屏投屏双预览），浏览器打开即用：

| 可体验功能 | 说明 |
| --- | --- |
| 控制台报价 | 标的详情、应价/号牌输入、软键盘、报价记录表、领先高亮 |
| 标的管理 | 新增/导入/导出（Excel 模板）、搜索分页、批量操作 |
| 系统设置 | 标题字体、表格列、公式、三主题切换（青绿/深空/玻璃） |
| 报表 | 报价记录、成交/流拍状态、报表导出 |
| 投屏预览 | `demo/bigscreen.html` 投屏窗（浏览器新窗口演示，`?tab=screen` 深链） |

> ⚠️ **纯 Web 演示版说明**：浏览器环境自动降级（localStorage 持久化 + window.open 投屏演示）。
> 桌面版专属能力（副屏物理投屏、SQLite 持久化、文件系统、托盘/自动更新）仅桌面版（`pm_Web_App`）可用，演示版不包含。
> 演示版数据保存在浏览器本地，仅供功能体验，不构成对源代码的授权。

---

## 技术栈

以 `package.json` 为准：

| 依赖 | 版本 | 用途 |
| --- | --- | --- |
| Next.js | 16.2.10 | App Router + 静态导出（`output: "export"`） |
| React / React DOM | 19.2.7 | UI 运行时 |
| TypeScript | 5.x | 类型与构建 |
| Tailwind CSS | 4.3.3 | 样式（`@tailwindcss/postcss` + `@tailwindcss/typography`） |
| Motion | 12.42.2 | 动效（入场/抽屉/hover） |
| @next/mdx | 16.2.10 | MDX 内容（博客文档中心） |
| remark-gfm / @mapbox/rehype-prism | 4.0.1 / 0.9.0 | 博客 Markdown 增强与代码高亮 |
| @tabler/icons-react | 3.30.0 | 导航/功能图标 |

> 注：品牌站是 Next.js 技术栈；「桌面系统技术栈」（React 18 · Vite 5 · Electron 33 · sql.js）属于被展示的产品信息，详见站内博客文章（`/blog`）。

---

## 目录结构

```
pm_Web_App_Showcase/
├── src/                    # 品牌站源码（Next.js App Router）
│   ├── app/                #   路由：layout / 首页 / about / features /
│   │                       #   solutions / experience / blog / updates / contact
│   │                       #   projects·resume（影子页=404）/ not-found / sitemap
│   ├── components/         #   组件库（TopNav / Footer / MobileDemoGate / BlogLayout…）
│   ├── constants/          #   内容数据（navlinks / features / solutions / timeline…）
│   ├── types/ lib/         #   类型与工具
├── lib/                    # 内容工具（getAllBlogs.ts / formatDate.ts）
├── docs/                   # 项目文档（PROJECT.md 技术说明 + _archive/ 历史归档）
│   └── _archive/           #   历史文档归档（旧提示词/方案 + 错误清单）
├── demo/                   # 🎮 纯 Web 演示版（构建产物，供 /experience 内嵌）
│   ├── index.html          #   控制台入口
│   ├── bigscreen.html      #   投屏窗入口
│   └── assets/ cmaps/ standard_fonts/ wasm/   # 演示版资源（pdf.js/exceljs 等）
├── out/                    # Next.js 静态导出产物（GitHub Pages 部署源）
├── public/ images/ fonts/  # 静态资源 / 素材 / 字体
├── README.md               # 本文件
├── docs/PROJECT.md         # 项目技术说明（面向工程师）
└── LICENSE                 # MIT（展示内容）
```

---

## 本地开发

```bash
npm install      # 安装依赖
npm run dev      # 开发模式（http://localhost:3000）
npm run build    # 静态导出 out/（并在 out/ 内复制 demo/）
npm run lint     # ESLint 检查（next/core-web-vitals + next/typescript）
npx tsc --noEmit # 类型检查（构建期忽略 TS 错误，发布前以此为准）
```

> 本地预览不带 basePath 前缀；GitHub Pages 子路径部署需在构建时传 `NEXT_PUBLIC_BASE_PATH=/pm_Web_App_Showcase`。

---

## 部署（GitHub Pages）

- **框架**：Next.js `output: "export"` 静态导出；`basePath` 由环境变量 `NEXT_PUBLIC_BASE_PATH` 控制；`trailingSlash: true`（目录形式导出，避免详情页 404）；`images.unoptimized`（静态导出必需）。
- **构建**：`npm run build` 先执行 `next build`，随后把根目录 `demo/` 复制到 `out/demo/`（在线演示依赖）。
- **发布**：将 `out/` 内容推到 `main` 分支部署 GitHub Pages（仓库 `wtw79/pm_Web_App_Showcase`，站点根路径）。
- **SEO**：每页 `metadata`（title/description/canonical/og/twitter）；`src/app/sitemap.ts` 生成 sitemap（18 个 URL）；根目录 `robots.txt` 指向 sitemap。
- **404**：`src/app/not-found.tsx` 输出品牌风 `404.html`，GitHub Pages 对不存在的路径返回它。

---

## 与桌面版（pm_Web_App）的关系与权益声明

- **关系**：演示版 `demo/` 来自桌面系统（`pm_Web_App`）的构建产物；站点内容基于拍卖系统真实功能。
- **本仓库公开**：品牌站源码（Next.js）、界面素材、展示内容、在线演示构建产物（MIT License）。
- **不公开**：拍卖系统**核心源代码**（`pm_Web_App` 的 electron/src）、**可执行程序**（exe/安装包）——作为知识产权保留在本地开发仓库。
- 演示版为编译后的静态产物，仅供功能展示，不构成对核心源代码的授权。

---

## 文档导航

- **`docs/PROJECT.md`**：项目技术说明（架构 / 路由 / 组件 / 内容 / 演示集成 / 构建管线 / 维护备忘），面向接手工程师。
- **站内文档中心 `/blog`**：10 篇技术文章——架构总览、Electron 架构、状态管理、数据模型、竞价状态机、公式引擎、Excel 导入导出、投屏渲染、测试体系、文件管理。
- **版本发布 `/updates`**：V2.3.00（Web/Electron 重构版）及历史时间线。
- **`docs/_archive/错误清单.md`**：旧文档断言与真实情况的核对记录。

---

## 许可

- 展示内容（README、展示页、截图、品牌站源码）：[MIT License](LICENSE)（详见 LICENSE 内「适用范围说明」）。
- 拍卖系统核心代码与可执行程序：保留所有权利。

---

<p align="center">本仓库由 <code>pm_Web_App_Showcase</code> 维护 · 品牌展示 + 在线体验</p>
