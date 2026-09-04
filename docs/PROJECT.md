# PROJECT.md · pm_Web_App_Showcase 项目技术说明

> 面向维护者与接手工程师的技术文档。所有路径、命令、版本均以本仓库代码为准（核实日期见文末）。
> 配套文档：`README.md`（面向访客+开发者）；`docs/_archive/错误清单.md`（旧文档错误核对记录）。

---

## 1. 架构总览

- **框架**：Next.js 16（App Router）+ TypeScript + Tailwind CSS 4，`output: "export"` 全站静态导出，部署 GitHub Pages。
- **内容**：博客/文档中心使用 MDX（`@next/mdx`，remark-gfm + @mapbox/rehype-prism 代码高亮），文章存放在 `src/app/blog/<slug>/content.mdx`。
- **交互**：静态导出下所有动态行为均为客户端 JS——`/experience` 演示切换（`?tab=` 深链由客户端读取，不使用 searchParams 等动态 API）、移动端抽屉导航、博客列表 hover 动画等。
- **主题**：品牌青绿（`--color-brand: #0e7c86`，对齐产品主色），定义于 `src/app/globals.css` 的 `@theme` 块（brand / brand-deep / brand-light / brand-soft + ink 深色氛围色）。
- **数据流**：内容数据集中放在 `src/constants/`（导航、功能、场景、时间线），页面组件消费常量渲染；无后端、无数据库、无运行时取数（除博客 MDX 构建期 import）。

### 目录树（关键部分）

```
src/
├── app/                    # App Router
│   ├── layout.tsx          # 全局布局（TopNav + main + Footer + metadata）
│   ├── page.tsx            # 首页
│   ├── globals.css         # Tailwind v4 主题与全局样式
│   ├── not-found.tsx       # 品牌 404
│   ├── sitemap.ts          # sitemap 生成（18 个 URL）
│   ├── about/  features/  solutions/  experience/  updates/  contact/
│   ├── blog/               # 文档中心：page.tsx + 10 篇文章 content.mdx
│   │   └── _template-blog-bak/   # 模板备份（非文章，勿发布）
│   ├── projects/  resume/  # 影子页面：路由存在但全部 notFound()
│   └── blog/[slug]/page.tsx（由 lib/getAllBlogs.ts 驱动）
├── components/             # 组件库（见 §3）
├── constants/              # 内容数据（见 §3）
├── types/  lib/            # 类型与工具
lib/                        # 根级内容工具（getAllBlogs.ts / formatDate.ts）
```

---

## 2. 路由与页面职责

| 路径 | 源文件 | 职责 | 数据来源 |
| --- | --- | --- | --- |
| `/` | `src/app/page.tsx` | 首页：深色 Hero（「看它工作→」+「看它有哪些功能」）、事实条 StatBar、适用场景 4 卡、关于项目 | `constants/solutions`、`components/StatBar` |
| `/about` | `src/app/about/page.tsx` | 系统介绍 | `components/About` |
| `/features` | `src/app/features/page.tsx` | 产品功能：7 大模块 FAB 详述 + 锚点导航 + 页末 CTA | `constants/features`（7 项） |
| `/solutions` | `src/app/solutions/page.tsx` | 适用场景：4 场景（痛点→解决→改造前后对照） | `constants/solutions`（4 项） |
| `/experience` | `src/app/experience/page.tsx` | 在线演示：MobileDemoGate 双预览（控制台/投屏） | `components/MobileDemoGate` + `demo/` |
| `/blog` | `src/app/blog/page.tsx` | 文档中心：文章列表 | `lib/getAllBlogs`（10 篇） |
| `/blog/[slug]` | `src/app/blog/[slug]/page.tsx` | 文章详情（MDX 渲染） | `src/app/blog/<slug>/content.mdx` |
| `/updates` | `src/app/updates/page.tsx` | 版本发布：当前版本徽章 + 时间线 | `constants/timeline`（12 项） |
| `/contact` | `src/app/contact/page.tsx` | 联系·权益：GitHub 卡 / 权益声明 / 产品信息表 | `components/Contact` |
| `/projects` `/projects/[slug]` | `src/app/projects/*` | 影子页面（模板遗留）：一律 `notFound()` | 无 |
| `/resume` | `src/app/resume/page.tsx` | 影子页面（模板遗留）：一律 `notFound()` | 无 |
| `/not-found` | `src/app/not-found.tsx` | 品牌 404（导出为 404.html） | 自包含 |

> 说明：`/projects`、`/resume` 未在导航中，也不在 sitemap；保留文件仅避免路由冲突，内容已下线。导航项以 `src/constants/navlinks.tsx` 为准（首页/产品功能/在线演示/文档中心/版本发布/联系）。

---

## 3. 组件与常量体系

### 组件（`src/components/`）

| 组件 | 职责 |
| --- | --- |
| `TopNav` | 顶部导航（桌面横排 + 移动端抽屉），含「看它工作」CTA |
| `Footer` | 页脚：品牌/站点导航/联系（邮箱、GitHub、联系与合作、隐私政策） |
| `MobileDemoGate` | `/experience` 演示门控：设备检测、控制台/投屏 tab 切换、移动端提示与横屏引导 |
| `HeroDashboard` / `StatBar` | 首页事实条与 hero 视觉 |
| `FeatureModule` | `/features` 功能模块（FAB 两列、痛点对照、截图） |
| `CtaBanner` | 页末行动区（「看它工作」「与作者聊聊」） |
| `Blogs` / `BlogLayout` | 博客列表与文章布局（日期/封面/返回） |
| `Contact` / `About` | 联系权益页与系统介绍页内容 |
| `StripeMark` / `SectionHead` / `Badge` 等 | 视觉装饰与章节头 |
| `Prose` / `Container` / `Heading` / `Paragraph` | 排版基础组件 |

### 常量（`src/constants/`）

| 文件 | 内容 | 消费页面 |
| --- | --- | --- |
| `navlinks.tsx` | 导航 6 项（label/href/图标） | TopNav |
| `features.tsx` | 7 大功能模块（console/screen/lots/archive/formula/desktop/file-management） | /features、首页卡片 |
| `solutions.tsx` | 4 适用场景（art/asset/used-car/pawn） | /solutions、首页 |
| `timeline.tsx` | 版本时间线 12 条（V2.3.00 → 系统早期 2021） | /updates |
| `products.tsx` | 模板遗留产品数据（仅被影子页引用） | 无（影子页） |
| `socials.tsx` | 社交链接（GitHub） | 潜在引用 |

---

## 4. 内容管理（博客/文档中心）

1. **文章位置**：`src/app/blog/<slug>/content.mdx`，目录含 `page.tsx`（`export { default } from ...` 简写，读取同目录 content.mdx 的 `meta`）。
2. **注册**：新增文章必须在 `lib/getAllBlogs.ts` 的 `slugs` 数组加入 slug，否则不展示。
3. **元信息**：content.mdx 顶部 `export const meta = { date, title, description, image, tags }`；图片路径以 `/images/...` 开头，渲染时自动拼 `NEXT_PUBLIC_BASE_PATH` 前缀。
4. **文章体**：MDX 默认支持 GFM（表格/任务列表等）+ prism 代码高亮；`<BlogLayout meta={...}>` 提供日期/封面/返回结构。
5. **当前 10 篇文章**：file-management、architecture-overview、electron-architecture、state-management、data-model、auction-state-machine、formula-engine、excel-import-export、projection-rendering、test-system。
6. **备份目录**：`src/app/blog/_template-blog-bak/` 是模板备份（clean-code、dark-mode-with-nextjs 等模板文章），不在 slugs 中，勿发布。

---

## 5. 演示集成（demo/ ↔ /experience）

- **来源**：`demo/` 是桌面系统（pm_Web_App）构建产物的拷贝——纯 Web 演示版，**构建产物，勿手改源码**。
- **入口**：`demo/index.html`（控制台）、`demo/bigscreen.html`（投屏窗，支持 `?mode=bid`）；资源在 `demo/assets/`、`cmaps/`、`standard_fonts/`、`wasm/`（含 pdf.js、exceljs、quickjs 等第三方产物与许可文件）。
- **集成点**：`components/MobileDemoGate` 以 iframe 嵌入 `${BASE}/demo/` 或 `${BASE}/demo/bigscreen.html?mode=bid`；`?tab=screen` 深链由客户端读取并写入 URL。
- **降级说明**：浏览器环境自动降级为 localStorage 持久化 + window.open 投屏演示；Electron 专属能力（物理投屏、SQLite、文件系统、托盘/自动更新）不在演示版。
- **移动端**：coarse 指针 + 窄屏判定为移动端 → 提示页（复制链接 / 横屏试试）；强制预览带旋转引导遮罩。

---

## 6. 构建与部署管线

### 脚本（package.json）

| 命令 | 行为 |
| --- | --- |
| `npm run dev` | `next dev` 本地开发 |
| `npm run build` | `next build` 静态导出到 `out/`，随后 `cpSync('demo','out/demo',{recursive:true})` 合并演示产物 |
| `npm run start` | `next start`（本地服务预览） |
| `npm run lint` | `eslint .`（next/core-web-vitals + next/typescript） |

### next.config.mjs 配置项

| 配置 | 值 | 原因 |
| --- | --- | --- |
| `output` | `"export"` | 全站静态导出，供 GitHub Pages |
| `basePath` | `process.env.NEXT_PUBLIC_BASE_PATH \|\| ""` | 子路径部署；本地不传则无前缀 |
| `trailingSlash` | `true` | 目录形式导出（`/xxx/index.html`），GitHub Pages 下 `/xxx/` 与 `/xxx` 均可访问 |
| `images.unoptimized` | `true` | 静态导出无需 Next 图片优化 |
| `typescript.ignoreBuildErrors` | `true` | 受限构建环境 spawn tsc 被拦截；类型把关以独立 `npx tsc --noEmit` 为准 |
| `pageExtensions` | `["ts","tsx","mdx"]` | 支持 MDX 页面 |
| MDX 插件 | remark-gfm + @mapbox/rehype-prism（String id，Turbopack 必需） | 博客 Markdown 增强与高亮 |
| `turbopack.root` | `import.meta.dirname` | Turbopack 根目录 |

### 部署步骤（GitHub Pages）

1. `NEXT_PUBLIC_BASE_PATH=/pm_Web_App_Showcase npm run build`（或构建环境注入）。
2. 推送 `out/` 内容到 `main` 分支（GitHub Pages 站点根）。
3. 验证：`/`、`/experience/`、`/blog/` 及详情页（trailingSlash 下均可访问）；`/sitemap.xml`、`/robots.txt` 可访问；404 落到品牌页。

---

## 7. 代码质量

- **ESLint**：`eslint.config.mjs`（flat config + FlatCompat 扩展 next/core-web-vitals、next/typescript）；`npm run lint`。
- **TypeScript**：`tsconfig.json` strict 模式；构建期忽略 TS 错误（见 §6），**发布前必须 `npx tsc --noEmit` 0 错误**。
- **MDX**：`pageExtensions` 含 mdx；`mdx-components.tsx` 提供自定义组件映射（当前默认）。
- **构建日志**：根目录 `build-*.log`（build-ctl2/3、build-dbg2、build-demo-sync、build-p0、build-pdf 等）为历次构建输出记录，属调试残留，可清理（删除需确认）。

---

## 8. 仓库杂物清单（可清理项，删除需确认）

| 路径/模式 | 性质 | 建议 |
| --- | --- | --- |
| `build-*.log`（build-ctl2.log、build-p0.log 等 ~24 个） | 历次构建输出 | 可删除（.gitignore 已含 `_build.log`） |
| `out.old-0830/` | 旧静态导出备份 | 确认无引用后可删 |
| `_next/`（根目录） | 导出/构建缓存 | 可删（可重建） |
| `index.html`、`index.txt`、`__next.*.txt`、`404.html`、`_not-found/` | 页面快照/清单调试产物 | .gitignore 已含 `__next.*`、`/_not-found/`；根级文件可删 |
| `deploy-preview.cjs` | 部署辅助脚本 | 保留（有用途则留，否则确认后可删） |
| `images/` 下 sidefolio-*.png、logos/ 模板图 | 模板遗留素材 | git 历史已清理部分；剩余确认无人引用后可删（grep 引用确认） |
| `.next.stale-*` | 旧构建缓存 | 可删 |

> 原则：`src/`、`demo/`、`out/`（部署源）、`lib/`、`docs/`、`package.json` 等为实质内容；根目录散落调试产物均以 .gitignore 兜底，清理前用 `git status`/`git ls-files` 确认是否入库。

---

## 9. 维护备忘（改动时需同步）

1. **改路由**：新增页面目录 → 同步 `sitemap.ts` pages 数组、页脚 `Footer.tsx` 链接（如需）、README 目录结构树、本文档 §2 表。
2. **改导航**：`src/constants/navlinks.tsx`（TopNav 自动消费）；Footer 链接独立维护，需手动同步。
3. **改功能模块/场景**：`constants/features.tsx` / `solutions.tsx` → /features、/solutions 与首页自动更新；截图放 `images/` 并带 `NEXT_PUBLIC_BASE_PATH` 前缀。
4. **改版本信息**：`constants/timeline.tsx`（/updates）+ `components/Footer.tsx`（V2.3.00）+ `components/Contact.tsx`（产品信息表）+ README（如提及版本）。
5. **新增博客文章**：建 `src/app/blog/<slug>/`（content.mdx + page.tsx）→ 在 `lib/getAllBlogs.ts` slugs 注册 → 图片入 `images/`。
6. **更新演示版**：在 `pm_Web_App` 重新构建后同步 `demo/`（`npm run build` 会自动拷贝，但 demo/ 本体需从桌面端产物更新）。
7. **改主题**：`src/app/globals.css` `@theme` 块；品牌色对齐产品主色（#0e7c86 系）。
8. **部署**：任何路由/内容变更后重跑 `NEXT_PUBLIC_BASE_PATH=/pm_Web_App_Showcase npm run build` 并同步 out/。

---

*核实依据：package.json / package-lock.json、next.config.mjs、tsconfig.json、src/app/**（路由与 metadata）、src/constants/**、lib/getAllBlogs.ts、globals.css、git remote/log。*
