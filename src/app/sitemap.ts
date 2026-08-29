import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const ORIGIN = "https://wtw79.github.io";

const pages = [
  "",
  "/about",
  "/features",
  "/solutions",
  "/experience",
  "/blog",
  "/blog/architecture-overview",
  "/blog/electron-architecture",
  "/blog/state-management",
  "/blog/data-model",
  "/blog/auction-state-machine",
  "/blog/formula-engine",
  "/blog/excel-import-export",
  "/blog/projection-rendering",
  "/blog/test-system",
  "/blog/file-management",
  "/updates",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${ORIGIN}${BASE}${p}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
