import { Metadata } from "next";
import Content from "./content.mdx";

export const metadata: Metadata = {
  alternates: { canonical: "/blog/auction-state-machine" },
};

export default function Page() {
  return <Content />;
}