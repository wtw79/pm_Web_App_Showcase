import { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/projection-rendering" },
};

export default function Page() {
  return <Content />;
}