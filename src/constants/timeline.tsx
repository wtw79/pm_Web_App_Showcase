export const timeline = [
  {
    company: "2026 · Web / Electron 重构版",
    title: "从 WPF 到 Web 技术栈重构",
    date: "2026",
    description: "React 18 + Vite 5 + Electron 33 全新实现，业务逻辑对齐桌面版，浏览器可直接运行",
    responsibilities: [
      "三主题换肤升级（Aurora 青绿 / Obsidian 深空 / Glass 玻璃），控制台与投屏全套统一",
      "软键盘重构为自适应页面浮窗：尺寸随内容、锚定触发输入框，牌号键盘 digitsOnly 快速报价",
      "成交归档增强：一键完成报表 + 现场截图 + 按标的归档，截图失败自动降级 canvas 快照",
      "报表改为「保存 pm 模板 + 填充」：45 轮/页、买受人签名区，可直接对外交付",
      "投屏媒体渲染加固：消除裂图闪烁、失败可见、PDF 渲染资源（CMap/标准字体/wasm）配置修复",
      "成交弹窗修复（ARGB→CSS alpha 顺序）与红色半透明 UI 升级",
    ],
  },
  {
    company: "2026 · 工程质量",
    title: "自动化测试体系与安装包",
    date: "2026",
    description: "88 个自动化用例护航核心逻辑，NSIS 安装包一键化构建",
    responsibilities: [
      "Vitest 单元 + 集成测试体系：报价逻辑 / 公式引擎 / 状态迁移 / 模板闭环，共 88 个用例",
      "NSIS 安装包升级：pm 应用图标注入、安装目录归档、快捷方式含版本号，构建一键化",
      "修复运行时崩溃（缺失 import 导致整页 ReferenceError）与报表领先逻辑重算",
      "修复删除当前标的后异常恢复、删除标的同步清理磁盘归档",
      "修复 electron:dev 残留僵尸 vite 占 5173 端口导致白屏",
    ],
  },
  {
    company: "V2.2.00",
    title: "功能整合版",
    date: "2026",
    description: "功能入口统一，成交归档与导入导出模板精简",
    responsibilities: [
      "初始化 → 系统设置入口统一，减少操作层级",
      "成交归档流程调整：一个动作完成报表 + 截图 + 归档",
      "导入导出模板精简（13 列，支持回导）",
    ],
  },
  {
    company: "V2.1.57",
    title: "投屏架构重构",
    date: "2025",
    description: "刷新更流畅，支持多副屏自由切换",
    responsibilities: [
      "投屏刷新链路重构：配置即时通道，副屏实时响应",
      "多副屏自由切换：欢迎页与竞价页可投不同显示器",
      "修复 PDF 清晰度问题",
    ],
  },
  {
    company: "V2.1.56",
    title: "投屏显示优化",
    date: "2025",
    description: "全屏无黑边，动态分辨率适配",
    responsibilities: [
      "PDF 全屏显示无黑边，Viewbox Uniform 等比缩放",
      "动态分辨率适配各种屏幕比例",
      "翻页与缩放交互优化",
    ],
  },
  {
    company: "V2.1.55 及更早",
    title: "核心功能奠基",
    date: "2021 起",
    description: "早期桌面版，自 2021 年起持续迭代",
    responsibilities: [
      "标的体系：增删改查、设为当前、各标的独立数据",
      "竞价流程：报价、领先/出局状态、增价/减价模式",
      "欢迎页 / 竞价页大屏展示、数字软键盘、报表管理",
    ],
  },
];
