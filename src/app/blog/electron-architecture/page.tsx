import { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/electron-architecture" },
};

export default function Page() {
  return <Content />;
}