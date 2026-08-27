# 拍卖竞价显示系统 · 项目展示仓库

> 面向拍卖师与现场操作员的桌面管理系统，提供标的批量管理、实时报价、副屏投屏、成交归档的完整业务闭环。
> 本项目为 pm（WPF 桌面端）的 Web/Electron 移植实现，业务逻辑严格对齐 pm。

**👉 查看完整项目介绍与界面预览：[GitHub Pages 展示页](https://wtw79.github.io/pm_Web_App_Showcase/docs/)**

## 🎮 在线体验（纯 Web 演示版）

**打开即用，无需安装：https://wtw79.github.io/pm_Web_App_Showcase/**

展示仓库根目录内置了**可运行的纯 Web 演示版**（浏览器静态托管），可直接体验系统核心功能：

| 可体验功能 | 说明 |
|---|---|
| 控制台报价 | 标的详情、应价/号牌输入、软键盘、报价记录表、领先高亮 |
| 标的管理 | 新增/导入/导出（Excel 模板）、搜索分页、批量操作 |
| 系统设置 | 标题字体、表格列、公式、三主题切换（Aurora/Obsidian/Glass） |
| 报表 | 报价记录、成交/流拍状态、报表导出 |
| 投屏预览 | `bigscreen.html` 投屏窗（浏览器新窗口演示） |

> ⚠️ **纯 Web 演示版说明**：浏览器环境下的 `bridge.js` 自动降级（localStorage 持久化 + window.open 投屏演示）。
> Electron 专属能力（副屏物理投屏、SQLite 持久化、文件系统、托盘/自动更新）仅在桌面版可用。
> 演示版数据保存在浏览器本地，刷新不丢失，仅供功能体验，不用于生产。

---

## ⚠️ 重要声明

本仓库是**项目展示仓库（Showcase Repository）**，用于展示项目信息、界面截图与**在线可运行的演示版**：

- ✅ 包含：项目说明、界面截图、展示网页、**纯 Web 演示版（构建产物）**、LICENSE
- ❌ 不包含：**源代码**（src/）、**Electron 主进程**（electron/）、**可执行程序**（exe/安装包）

**源代码与可执行程序作为核心知识产权保留**，不随远程公开。演示版为编译后的静态产物，仅供功能展示，不构成对源代码的授权。如需业务合作、源码授权或定制开发，请通过 GitHub 联系作者。

---

## 🏷 版本与对齐

- 产品版本：**V2.2.00**（对齐 pm 桌面端产品线）
- 技术栈：React 18 · Vite 5 · Electron 33 · sql.js · Vitest
- 业务规则：与 pm（WPF/C#）严格对齐（ADR-003）

---

## 📸 界面预览

| 主题 | 控制台 | 投屏页 |
|---|---|---|
| Aurora 现代青绿（默认） | [console-light.png](docs/screenshots/console-light.png) | [bigscreen-bid.png](docs/screenshots/bigscreen-bid.png) |
| Obsidian 深空科技 | [console-dark.png](docs/screenshots/console-dark.png) | [bigscreen-welcome.png](docs/screenshots/bigscreen-welcome.png) |
| Glass 玻璃渐变 | [console-glass.png](docs/screenshots/console-glass.png) | |

完整展示请访问 GitHub Pages：

```
https://wtw79.github.io/pm_Web_App_Showcase/
```

---

## 📂 仓库结构

```
pm_Web_App_Showcase/
├── README.md              # 本文件（仓库主页）
├── LICENSE                 # MIT（展示内容协议）
├── .gitignore              # 防御性：拦截敏感文件（src/、electron/、dist/、release/ 等）
├── index.html              # 🎮 纯 Web 演示版入口（GitHub Pages 根目录 = 在线体验系统）
├── bigscreen.html          # 投屏窗（演示）
├── assets/                 # 演示版静态资源（编译产物，非源码）
└── docs/                   # GitHub Pages 项目介绍站
    ├── index.html          # 展示页（介绍 + 截图 + 技术栈 + 架构 + 权益）
    └── screenshots/        # 项目界面截图
```

---

## 🔒 权益保护机制

本仓库通过以下机制确保核心权益文件不会被上传到远程：

1. **目录隔离**：源代码、可执行程序、构建产物均不在本仓库目录内（保留在本地开发仓库 `pm_Web_App/`）
2. **防御性 .gitignore**：即使误拷入敏感文件，也不会被 git 跟踪
3. **文档说明**：README 与展示页明确标注"远程仅展示，非源代码授权"

如需获取源代码或可执行程序，请通过 GitHub 联系作者。

---

## 📄 许可

- 展示内容（README、展示页、截图）：[MIT License](LICENSE)
- 源代码与可执行程序：保留所有权利

---

## 🤝 联系与商务

- GitHub: @wtw79
- 业务合作、源码授权、定制开发：通过 GitHub Issues 联系

---

<p align="center">本仓库由 <code>pm_Web_App_Showcase</code> 维护 · 仅含项目展示内容</p>