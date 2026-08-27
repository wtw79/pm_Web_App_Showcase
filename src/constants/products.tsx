export const products = [
  {
    href: "/demo/",
    title: "标的管理",
    description:
      "标的批量新增 / Excel 导入导出（13 列模板，可回导）/ 搜索分页 / 批量操作（删除·流拍·暂停·恢复·清空）。标的详情四页签：资料 / 媒体 / 键盘 / 历史报表。",
    thumbnail: "/images/lots.png",
    images: [
      "/images/lots.png",
      "/images/lots.png",
    ],
    stack: ["React", "SheetJS"],
    slug: "lots",
    content: (
      <div>
        <p>
          标的管理是标的数据的唯一入口。支持新建、编辑、删除、设为当前与批量导入导出；
          列表提供搜索、状态筛选、分页与多选批量操作，现场换标的只需一次点击。
        </p>
        <p>
          标的详情分为四个页签：<b>资料</b>（起拍价 / 竞价幅度 / 展示标题 /
          欢迎页 PDF / 标的图片 / 计算参数 C1-C4 / 配置变更审计）、<b>媒体</b>
          （图片与 PDF 管理）、<b>键盘</b>（软键盘布局按标的独立配置）、
          <b>历史报表</b>（内嵌单标的报表）。Excel 批量导入采用原子替换策略：
          要么全部成功，要么失败回滚，避免现场数据被半成品污染。
        </p>
      </div>
    ),
  },
  {
    href: "/demo/",
    title: "控制台报价",
    description:
      "号牌输入即提交、报价实时校验（增价不低于起拍价 / 减价不高于）、撤回上一条、删除任意行（精确撤销栈）、重新开始（快照可恢复）、确认成交与流拍。",
    thumbnail: "/images/overview.png",
    images: ["/images/overview.png", "/images/overview.png"],
    stack: ["React", "自研 Store"],
    slug: "console-bid",
    content: (
      <div>
        <p>
          控制台是一场比赛的核心操作区：起拍设置（起拍价 / 竞价幅度 / 金额单位 /
          增价-减价切换）、竞价区（应价 + 号牌 + 自定义参数列）、操作面板
          （确认成交 / 流拍 / 撤回 / 撤销删除 / 暂停·恢复 / 重新开始）与实时报价记录表。
        </p>
        <p>
          关键设计来自拍卖现场的防错诉求：<b>输入即提交</b>缩短操作路径、
          <b>防重复签名</b>避免同一手报价被并发提交、<b>成交前二次校验</b>
          杜绝非法数据流入归档。所有竞价规则（报价校验、状态机、成交锁定）按
          拍卖行业标准流程严谨实现，行为稳定可靠。
        </p>
      </div>
    ),
  },
  {
    href: "/demo/",
    title: "副屏投屏",
    description:
      "欢迎页（PDF / 图片轮播）与竞价页（2×2 大字卡 + 实时报价表）独立投放到不同物理显示器；Viewbox Uniform 等比缩放，任意分辨率无黑边。",
    thumbnail: "/images/welcome.jpg",
    images: ["/images/welcome.jpg", "/images/welcome.jpg"],
    stack: ["Electron", "pdfjs-dist"],
    slug: "projection",
    content: (
      <div>
        <p>
          投屏采用"主屏操作、副屏展示"的经典拍卖现场布局：竞价页投副屏 1、
          欢迎页投副屏 2，互不干扰。投屏窗无边框置顶全屏，画面按
          Viewbox Uniform 等比缩放，任何分辨率下比例一致、无黑边。
        </p>
        <p>
          投屏窗由主进程统一管理：多显示器枚举与投放、DPI 自适应、渲染进程崩溃自动重启
          （最多 3 次）。欢迎页 PDF 使用 pdfjs 在 canvas 上纯净渲染，避免浏览器内置
          PDF 查看器的工具栏，保证干净纯粹的大屏展示效果。
        </p>
      </div>
    ),
  },
  {
    href: "/demo/",
    title: "成交归档",
    description:
      "确认成交一键完成：Excel 成交报表生成 + 竞价页现场截图 + 按标的归档（文件名带时间戳）+ 台账登记，事后可查可溯。",
    thumbnail: "/images/archive.png",
    images: ["/images/archive.png", "/images/archive.png"],
    stack: ["SheetJS", "Electron"],
    slug: "deal-archive",
    content: (
      <div>
        <p>
          成交归档把"落槌"之后的所有收尾动作压缩为一个按钮：锁定领先记录为成交、
          再次复核价格规则、生成规范 Excel 报表（抬头信息块 + 报价分栏表）、
          截取竞价页现场画面、按标的名称归档到数据目录并登记台账。
        </p>
        <p>
          报表格式规范：标的名称 / 序号 / 展示标题 / 起拍价 / 竞价幅度 /
          拍卖方式 / 成交价 / 领先号牌 / 金额单位 / 生成时间，可直接对外交付；
          历史成交可在报表页随时查看、导出或撤回。
        </p>
      </div>
    ),
  },
  {
    href: "/demo/",
    title: "报表管理",
    description:
      "全局已结束标的列表 + 单标的完整报价记录（行级删除 / 已删除记录精确撤回 / 导出 Excel）。报表状态自动重算，杜绝历史数据残留错误。",
    thumbnail: "/images/reports.png",
    images: ["/images/reports.png", "/images/reports.png"],
    stack: ["SheetJS", "Vitest"],
    slug: "reports",
    content: (
      <div>
        <p>
          报表系统提供两种视角：全局模式汇总全部已结束标的（成交价 / 领先号牌 /
          生成时间，支持一键导出全部）；单标的模式展示完整报价记录，支持行级删除与
          已删除记录精确撤回（撤销栈记录原位置与领先状态）。
        </p>
        <p>
          渲染时按规则自动重算每条记录状态（成交 / 领先 / 出局），修复了历史数据
          d1 字段残留导致的"轮次 3 还领先"类错误，保证导出报表始终准确。
        </p>
      </div>
    ),
  },
  {
    href: "/demo/",
    title: "G4 公式引擎",
    description:
      "Cn4-Cn7 参数列按公式实时计算（单位地价 DD/C1、楼面地价 DD/C2、溢价率 (DD-C3)/C3×100 等），公式可配置，报价即算即显。",
    thumbnail: "/images/formula.png",
    images: [
      "/images/formula.png",
      "/images/formula.png",
    ],
    stack: ["Shunting-yard", "公式引擎"],
    slug: "formula-engine",
    content: (
      <div>
        <p>
          公式引擎采用 Shunting-yard 调度场算法：公式可引用 DD（当前总价）与
          C1-C4（标的常量参数），支持四则运算与括号，中缀转后缀后求值，
          运算符优先级严格（高→低）：除法、乘法、减法、加法。
        </p>
        <p>
          默认公式配置：DD/C1、DD/C2、DD/(C1·C2)、空（空公式不计算）。
          变量为空 / 除零 / 语法错误时一律返回 0——容错语义保证大屏展示
          永不因公式异常中断，现场没有重启系统的机会。
        </p>
      </div>
    ),
  },
];
