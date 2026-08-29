import { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/state-management" },
};

export default function Page() {
  return <Content />;
}