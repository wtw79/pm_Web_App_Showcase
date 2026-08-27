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
        一场拍卖的全流程数字化：<Highlight>88 个自动化测试用例</Highlight>
        护航核心竞价逻辑，3 套主题换肤，45 行/页的规范报表，6 大核心特性
        覆盖标的管理、报价、投屏、归档的完整业务闭环。
      </Paragraph>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
        {[
          ["88", "自动化测试用例"],
          ["3", "主题换肤"],
          ["45", "报表每页轮次"],
          ["6", "核心特性"],
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
