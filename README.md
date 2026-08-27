# 拍卖竞价显示系统 · 项目展示仓库

> 面向拍卖师与现场操作员的桌面管理系统，提供标的批量管理、实时报价、副屏投屏、成交归档的完整业务闭环。
> 本项目为 pm（WPF 桌面端）的 Web/Electron 移植实现，业务逻辑严格对齐 pm。

**👉 查看完整项目介绍与界面预览：[GitHub Pages 展示页](https://wtw79.github.io/pm_Web_App_Showcase/)**

---

## ⚠️ 重要声明

本仓库是**项目展示仓库（Showcase Repository）**，仅用于展示项目信息与界面截图：

- ✅ 包含：项目说明、界面截图、展示网页、LICENSE、文档
- ❌ 不包含：源代码、可执行文件、构建产物、配置密钥

**源代码与可执行程序作为核心知识产权保留**，不随远程公开。如需业务合作、源码授权或定制开发，请通过 GitHub 联系作者。

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
└── docs/                   # GitHub Pages 静态网站根
    ├── index.html          # 完整展示页
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