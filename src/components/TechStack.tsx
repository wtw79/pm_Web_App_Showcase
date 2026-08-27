import React from "react";
import { Heading } from "./Heading";

export const TechStack = () => {
  const stack = [
    "React 18",
    "Vite 5",
    "Electron 33",
    "sql.js",
    "SheetJS",
    "pdfjs-dist",
    "Vitest 4",
    "自研 Store",
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-4 mb-4"
      >
        技术栈
      </Heading>
      <div className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 text-xs md:text-sm bg-neutral-50 border border-neutral-200 text-neutral-600 px-3 py-1.5 rounded-full"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
