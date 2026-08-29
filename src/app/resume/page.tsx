import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function ResumePage() {
  return (
    <Container>
      <span className="text-4xl">📊</span>
      <Heading className="font-black">系统总览</Heading>
      <Paragraph className="max-w-xl mt-4">
        一场拍卖的全流程数字化：<Highlight>7 大核心模块</Highlight>
        覆盖标的管理、报价、投屏、归档的完整业务闭环，
        3 套主题换肤，45 轮/页的规范报表。
      </Paragraph>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
        {[
          ["7", "核心模块"],
          ["3", "主题换肤"],
          ["45", "报表每页轮次"],
          ["0", "网络依赖"],
        ].map(([num, label]) => (
          <div
            key={label}
            className="bg-neutral-50 rounded-xl border border-neutral-100 p-6 text-center"
          >
            <div className="text-4xl font-black text-brand">{num}</div>
            <div className="mt-2 text-sm text-neutral-500">{label}</div>
          </div>
        ))}
      </div>

      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-12 mb-2"
      >
        版本演进
      </Heading>
      <WorkHistory />
    </Container>
  );
}
