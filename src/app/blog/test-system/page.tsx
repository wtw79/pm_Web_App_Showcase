import { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/test-system" },
};

export default function Page() {
  return <Content />;
}