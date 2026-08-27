# DESIGN.md — Marque · 拍卖竞价显示系统展示门户

> 设计系统架构师 Diana 出品 · 2026-08-28
> 面向对象：`pm_Web_App_Showcase`（拍卖竞价显示系统品牌展示站 / 在线演示门户）
> 风格代号：**Marque** —— 编辑式品牌手册（Editorial Brand Book）

---

## 1. Visual Theme & Atmosphere（视觉主题与氛围）

**设计哲学**：把产品当作一本"已出版的精装品牌书"来对待。每一屏都是一页经过编辑排版的版面：超大展示字体引领阅读节奏、宽阔的淡紫色留白形成呼吸感、条纹靛蓝标记像书脊与章节符号一样贯穿全书，把形象、摄影、排版与组件统一为同一种高级语法。

**视觉基调**：轻 · 编辑部 · 出版级（Light · Editorial · Publication-grade）

**核心视觉特征关键词**（4 个）：
1. **Ink-on-Paper** —— 深紫罗兰墨色文字落在层叠淡紫纸面上，如印刷品
2. **Oversized Display** —— 每章以超大展示字号开篇（H1 最高 120px+）
3. **Striped Signature** —— 靛蓝条纹标记（4 条平行条带）作为贯穿性品牌锚点
4. **Numbered Chapters** —— 全站按章节编号（01/02/03…），如书之目录

**光影与质感倾向**：纯扁平 + 极细 1px 边框（hairline）；无毛玻璃、无重阴影；阴影仅用于图片容器（柔和、低透明度）；hover 用"条纹滑入 + 抬升 2px"代替 3D 扭曲。

---

## 2. Color Palette & Roles（调色板与角色）

### Primary Colors — 主色
| 角色 | CSS 变量 | HEX | 说明 |
|------|----------|-----|------|
| Violet 紫罗兰 | `--violet` | `#6D4AC4` | 品牌主色：CTA、链接、强调 |
| Violet Deep 深紫罗兰 | `--violet-deep` | `#4B2E8F` | 深色变体：hover、渐变端点 |
| Indigo 靛蓝 | `--indigo` | `#4338CA` | 条纹标记主色、章节编号 |
| Indigo Bright 亮靛蓝 | `--indigo-bright` | `#4F46E5` | 条纹渐变第二色、焦点 |

### Ink & Type — 墨色文字系统
| 角色 | CSS 变量 | HEX | 说明 |
|------|----------|-----|------|
| Ink 墨色 | `--ink` | `#241A3F` | 主文字/标题（deep violet ink） |
| Ink Soft | `--ink-2` | `#5A5280` | 次级文字 |
| Ink Faint | `--ink-3` | `#8B83B0` | 弱化文字/图注 |
| Ink Reverse | `--ink-rev` | `#F7F4FE` | 深色底上的文字 |

### Neutral / Surface — 层叠淡紫表面
| 角色 | CSS 变量 | HEX | 说明 |
|------|----------|-----|------|
| Paper 页面底 | `--paper` | `#FBFAFE` | 最外层纸面（近白淡紫） |
| Lavender 1 表面 | `--lav-1` | `#F4F0FB` | 面板/卡片底 |
| Lavender 2 表面 | `--lav-2` | `#ECE5F8` | 悬浮/更深一层面板 |
| Surface White | `--surface` | `#FFFFFF` | 纯白卡（截图容器等） |
| Hairline 边框 | `--line` | `#E3DCF2` | 全站 1px 细线 |
| Hairline Strong | `--line-2` | `#CDC3E8` | hover/强调边框 |

### Semantic Colors — 语义色
| 角色 | CSS 变量 | HEX | 用途 |
|------|----------|-----|------|
| Deal 成交 | `--deal` | `#B42318` | 成交/红色徽记（中文语义红） |
| Flow 流拍 | `--flow` | `#667085` | 流拍/中性灰 |
| Success | `--ok` | `#0E7A5F` | 通过率等正向指标 |
| Warn | `--warn` | `#B54708` | 提示 |

### Shadow — 阴影
| 角色 | 值 | 用途 |
|------|-----|------|
| `--shadow-sm` | `0 1px 2px rgba(36,26,63,.06)` | 卡片微阴影 |
| `--shadow-md` | `0 12px 34px rgba(36,26,63,.10)` | 悬浮卡片 |
| `--shadow-lg` | `0 28px 70px rgba(36,26,63,.16)` | 截图大图容器 |

---

## 3. Typography Rules（排版规则）

### Font Family
```css
--font-display: "Space Grotesk", "Archivo", "PingFang SC", "Microsoft YaHei UI", system-ui, sans-serif;
--font-body: "PingFang SC", "Microsoft YaHei UI", "Noto Sans SC", system-ui, sans-serif;
```
- 数字与英文：几何无衬线（Space Grotesk / Archivo，若离线则回退系统），传达"自信的几何"
- 中文正文：系统黑体栈，保证清晰

### Type Scale（编辑式：超大 Display 引领）
| 层级 | Size | Weight | Line Height | Letter Spacing | 用途 |
|------|------|--------|-------------|----------------|------|
| Display XL | `clamp(52px, 9vw, 132px)` | 800 | 0.98 | `-0.03em` | 首页大标题 |
| Chapter Head | `clamp(30px, 4.5vw, 52px)` | 800 | 1.08 | `-0.01em` | 章节标题 |
| H3 | `clamp(17px, 2vw, 20px)` | 750 | 1.3 | `0` | 卡片标题 |
| Lead | `clamp(15px, 1.8vw, 18px)` | 500 | 1.75 | `0.01em` | 导语段落 |
| Body | `14.5px` | 450 | 1.75 | `0` | 正文 |
| Label | `12px` | 700 | 1.4 | `0.14em` | 章节编号/徽记（大写感） |
| Caption | `11.5px` | 600 | 1.5 | `0.08em` | 图注 Fig.xx |

### 排版哲学
- **编辑式对比**：Display 字号与正文拉开 8~10 倍差距，制造杂志版面的张弛；
- **章节编号**：每章标题前置 `Label` 级编号（01 · 02 · 03），字号小、字距宽，如书之页码；
- **数字**：统计数字一律 `font-variant-numeric: tabular-nums`，几何字体 + 等宽数字；
- 中文标题不做字母间距拉伸，靠字重与字号制造层级。

---

## 4. Component Stylings（组件样式）

### Signature Mark（条纹签名标记）
```
▍▍▍▍  4 条平行竖条，宽 6px，间距 5px，
      渐变 靛蓝#4338CA → 亮靛#4F46E5 → 紫#6D4AC4 → 深紫#4B2E8F
      圆角 2px；作为 logo、章节装饰、页脚锚点复用
```
- 容器 `.stripe`：`display:inline-flex; gap:5px`
- 条 `.stripe i`：`width:6px; border-radius:2px`

### Buttons
| 变体 | 背景 | 文字 | 边框 | 圆角 | Padding | Hover |
|------|------|------|------|------|---------|-------|
| Primary | `--indigo` | `#fff` | 无 | `8px` | `13px 26px` | 背景 `--violet-deep`，抬升 2px，阴影 md |
| Ghost | `transparent` | `--ink` | `1px solid --line-2` | `8px` | `13px 26px` | 边框 `--violet`，文字 `--violet` |
| Text | `transparent` | `--violet` | 无 | `8px` | `10px 14px` | 下划线 |

### Cards
- 背景 `--lav-1`（特性卡）/ `--surface`（截图容器）；边框 `1px solid --line`；圆角 `14px`；
- 阴影 `--shadow-sm`，hover `--shadow-md` + `translateY(-3px)`；
- **条纹入场**：卡顶 3px 条纹渐变，默认 `scaleX(0)`，hover `scaleX(1)`（与 Marque 条纹语法呼应）。

### Chapter Head（章节头）
- 结构：`编号 Label + 标题 Display/Chapter + 右侧横线`（`flex:1; height:1px; background:--line`）；
- 编号用 `--indigo`，标题用 `--ink`。

### Tags / Chips（技术栈）
- 背景 `--lav-1`，边框 `--line`，圆角 `999px`；前置 6px 圆点（`--indigo-bright`）。

### Figure（截图）
- 容器圆角 `16px`、边框 `--line-2`、阴影 `--shadow-lg`；底部 `Fig. 01 — …` 图注（Caption 级，`--ink-3`）。

### Callout（权益声明）
- 背景 `--lav-1`，左边框 `4px solid --indigo`（条纹语言的转译），圆角 `0 14px 14px 0`。

---

## 5. Layout Principles（布局原则）

- **Spacing System**：基数 `4px`；常用 `8 / 16 / 24 / 40 / 64 / 96 / 128`；
- **Grid**：内容区 `max-width: 1200px`，12 列直觉网格；特性区 `auto-fit minmax(300px,1fr)`；
- **Container**：`.wrap{max-width:1200px;margin:0 auto;padding:0 28px}`；
- **Section Spacing**：章节间距 `96px`（移动端 `56px`）；
- **留白哲学（Marque 核心）**：淡紫边距要"慷慨"——每章上下留白接近一屏的 1/6，标题与内容之间留 `32px+`，宁可空不可挤；编辑式版面以留白制造高级感。

---

## 6. Depth & Elevation（深度与层级）

| 层 | 值 | 说明 |
|----|-----|------|
| `--shadow-sm` | `0 1px 2px rgba(36,26,63,.06)` | 静态卡片 |
| `--shadow-md` | `0 12px 34px rgba(36,26,63,.10)` | hover / 悬浮 |
| `--shadow-lg` | `0 28px 70px rgba(36,26,63,.16)` | 大图容器 |
| 表面层级 | Paper < Lav1 < Lav2 < Surface(White) | 页面 → 面板 → 悬浮 → 纯白容器 |
| Z-index | topbar `100` / toTop `90` / iframe 层 `2` | 导航恒顶 |

- 不使用毛玻璃 backdrop-filter（编辑式追求"印刷感"而非"玻璃感"）；
- 不使用 3D tilt / 粒子背景；装饰仅用条纹、细网格线与章节编号。

---

## 7. Do's and Don'ts（设计规范与禁忌）

**Do's**
1. 每章用超大 Display 标题 + 章节编号开篇；
2. 紫色系只做"墨色与表面"，靛蓝只做"强调与条纹"，职责分离；
3. 边框一律 1px hairline（`--line`），宁细勿粗；
4. 图片一律带 `Fig. xx` 图注与底部留白；
5. 深紫罗兰墨色（`--ink`）是正文唯一主色；
6. 留白优先：内容放不下就缩减文案，不缩小留白；
7. hover 用"条纹滑入 + 轻抬升"，克制统一；
8. 数字使用等宽数字（tabular-nums）与几何字体。

**Don'ts**
1. 不用重阴影/大模糊/玻璃拟态；
2. 不用霓虹渐变与荧光色；
3. 标题不超 3 种字号同时出现；
4. 不用 emoji 作章节装饰（保留功能性图标时用几何符号）；
5. 不在浅色页面上出现深色整块背景（dark 主题除外）；
6. 不把紫色当强调色大面积铺底；
7. 不加 3D 旋转、粒子、弹跳等花哨动效；
8. 不在同一屏内使用超过 2 种圆角半径体系（本规范固定 8/14/16/999）。

---

## 8. Responsive Behavior（响应式行为）

| Breakpoint | 规则 |
|------------|------|
| `>1024px` | 全版式：大标题 9vw、特性 3 列、章节间距 96px |
| `768–1024px` | 特性 2 列；Hero 标题 7vw；章节间距 72px |
| `≤768px` | 单列；标题 11vw；章节间距 56px；顶部导航折叠为横向滚动 tab；统计 2 列 |
| `≤420px` | 标题 12vw；CTA 按钮全宽；统计 1~2 列 |

- **Touch Targets**：按钮/导航最小高度 `44px`；
- **折叠策略**：tab 条横向滚动（隐藏滚动条）；iframe 高度 `100dvh - nav`；
- **Font Scaling**：所有 Display 字号用 `clamp()`，随视口线性缩放，不设固定断点跳变。

---

## 9. Agent Prompt Guide（AI 代理提示指南）

**Quick Reference**
- 基调：编辑式品牌书（editorial brand book）；浅色；深紫罗兰墨色文字；层叠淡紫表面；靛蓝条纹标记；几何大字排版。
- 关键 tokens：`--ink #241A3F / --violet #6D4AC4 / --indigo #4338CA / --paper #FBFAFE / --lav-1 #F4F0FB / --line #E3DCF2`。
- 组件语言：条纹滑入 hover、章节编号、Fig. 图注、hairline 边框。

**Component Prompts**
1. `生成 Hero：左侧超大 Display 标题 + Label 编号 + 双 CTA（Primary/Text），右侧条纹装饰与统计条`
2. `生成章节头：Label 编号（01）+ Chapter 标题 + 右侧延伸细线`
3. `生成特性卡网格：lav-1 底 + hairline + 顶部条纹滑入 hover + 几何图标`
4. `生成截图 Figure：纯白容器 + 大阴影 + Fig. 图注`
5. `生成技术栈 chips：几何字体 + 靛蓝圆点 + 胶囊边框`
6. `生成页脚：顶部靛蓝条纹带 + 深紫墨色 + 版权小字`

**Iteration Guide**
1. 先定 tokens，再写组件，最后组装页面；
2. 每个新页面先有章节编号再排版；
3. 保持紫色系面积克制（墨色+表面为主，靛蓝点缀）；
4. hover 效果全局统一为"条纹+抬升"；
5. 移动端优先检查 Display 标题是否溢出（用 clamp 而非固定 px）；
6. 数字一律 tabular-nums；
7. 中英文混排时，中文用系统黑体、数字英文用几何字体；
8. 任何装饰元素都问一句"印刷书里会有它吗"，没有就去掉。

---

*本规范为 `pm_Web_App_Showcase/index.html` 的唯一设计依据；`docs/`、`demo/` 为内嵌内容，不在此规范约束内（后续如需统一再扩展）。*
