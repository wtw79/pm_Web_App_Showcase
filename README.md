# 拍卖竞价显示系统 · 品牌展示站

> 面向拍卖师与现场操作员的桌面管理系统——标的批量管理、实时报价、副屏投屏、成交归档的完整业务闭环。
> 本仓库是**在线品牌展示站**（Next.js 16 + Tailwind v4 + Motion），展示产品全貌并提供在线体验。

**👉 品牌站入口：[https://wtw79.github.io/pm_Web_App_Showcase/](https://wtw79.github.io/pm_Web_App_Showcase/)**
**🎮 在线体验：[https://wtw79.github.io/pm_Web_App_Showcase/experience](https://wtw79.github.io/pm_Web_App_Showcase/experience)**

---

## 🎮 在线体验（站内页）

品牌站内嵌**可运行的纯 Web 演示版**（`/experience` 页，Sidefolio 布局内嵌系统 demo），浏览器打开即用：

| 可体验功能 | 说明 |
| --- | --- |
| 控制台报价 | 标的详情、应价/号牌输入、软键盘、报价记录表、领先高亮 |
| 标的管理 | 新增/导入/导出（Excel 模板）、搜索分页、批量操作 |
| 系统设置 | 标题字体、表格列、公式、三主题切换（Aurora/Obsidian/Glass） |
| 报表 | 报价记录、成交/流拍状态、报表导出 |
| 投屏预览 | `demo/bigscreen.html` 投屏窗（浏览器新窗口演示） |

> ⚠️ **纯 Web 演示版说明**：浏览器环境 `bridge.js` 自动降级（localStorage 持久化 + window.open 投屏演示）。
> Electron 专属能力（副屏物理投屏、SQLite 持久化、文件系统、托盘/自动更新）仅在桌面版（`pm_Web_App`）可用。
> 演示版数据保存在浏览器本地，仅供功能体验。

---

## 📂 仓库结构

```
pm_Web_App_Showcase/
├── src/                    # 品牌站源码（Next.js App Router：首页/系统介绍/核心功能/在线体验/联系·权益等）
├── lib/                    # 站内工具与组件
├── public/                 # 静态资源
├── images/ fonts/          # 品牌站图片素材与字体
├── demo/                   # 🎮 纯 Web 演示版（系统构建产物，供 /experience 内嵌）
│   ├── index.html          #   系统入口（控制台）
│   ├── bigscreen.html      #   投屏窗（演示）
│   └── assets/             #   演示版静态资源
├── out/                    # Next.js 静态导出产物（GitHub Pages 部署源）
├── README.md               # 本文件
└── LICENSE                 # MIT（展示内容协议）
```

---

## ⚠️ 权益声明

本仓库为**品牌展示仓库**：包含展示站源码（Next.js，开源）、界面素材与**在线演示版（构建产物）**。

- ✅ 公开：品牌站源码、界面图片、展示内容（MIT License）
- ❌ **不公开**：拍卖系统**核心源代码**（`pm_Web_App` 的 src/electron）、**可执行程序**（exe/安装包）——作为知识产权保留在本地开发仓库

演示版为编译后的静态产物，仅供功能展示，不构成对核心源代码的授权。如需业务合作、源码授权或定制开发，请通过 GitHub 联系作者。

---

## 🏷 版本信息

- 产品版本：**V2.2.00**（对齐 pm 桌面端，三端业务规则严格一致）
- 品牌站技术栈：Next.js 16 · Tailwind v4 · Motion · MDX（Sidefolio 模板）
- 系统技术栈：React 18 · Vite 5 · Electron 33 · sql.js · Vitest（88 用例）

---

## 📄 许可与联系

- 展示内容（README、展示页、截图、品牌站源码）：[MIT License](LICENSE)
- 拍卖系统核心代码与可执行程序：保留所有权利
- GitHub: @wtw79 · 商务合作/源码授权/定制开发：GitHub Issues

---

<p align="center">本仓库由 <code>pm_Web_App_Showcase</code> 维护 · 品牌展示 + 在线体验</p>