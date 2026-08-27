"use client";
import { Product } from "@/types/products";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<string>(product.thumbnail);
  return (
    <div className="py-10">
      <div className="relative">
        {/* 原生 img：src 已带 basePath 前缀；next/image 在 unoptimized + client 组件下 SSR 不输出 img */}
        <img
          src={activeImage}
          alt="thumbnail"
          className="rounded-md object-contain w-full"
        />
        <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
      </div>
      <div className="flex flex-row justify-center my-8 flex-wrap">
        {product.images.map((image, idx) => (
          <button
            onClick={() => setActiveImage(image)}
            key={`image-thumbnail-${idx}`}
          >
            <img
              src={image}
              alt="product thumbnail"
              className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-r border rounded-lg border-neutral-100"
            />
          </button>
        ))}
      </div>
      <div className="flex lg:flex-row justify-between items-center flex-col mt-20">
        <Heading className="font-black mb-2 pb-1"> {product.title}</Heading>
        <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
          {product.stack?.map((stack: string) => (
            <span
              key={stack}
              className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div>
        <Paragraph className="max-w-xl mt-4">{product.description}</Paragraph>
      </div>
      <div className="prose prose-sm md:prose-base max-w-none text-neutral-600">
        {product?.content}
      </div>

      <Link
        href="/experience"
        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left"
      >
        在线体验
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
        >
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      </Link>

      {/* 延伸阅读：功能页与站内其他内容联动 */}
      <div className="mt-12 pt-6 border-t border-neutral-100">
        <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
          延伸阅读
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/blog"
            className="text-xs bg-neutral-50 border border-neutral-200 text-neutral-600 px-3 py-1.5 rounded-full hover:border-brand hover:text-brand transition-colors"
          >
            📝 技术文章
          </Link>
          <Link
            href="/resume"
            className="text-xs bg-neutral-50 border border-neutral-200 text-neutral-600 px-3 py-1.5 rounded-full hover:border-brand hover:text-brand transition-colors"
          >
            📊 系统总览 · 版本演进
          </Link>
          <Link
            href="/about"
            className="text-xs bg-neutral-50 border border-neutral-200 text-neutral-600 px-3 py-1.5 rounded-full hover:border-brand hover:text-brand transition-colors"
          >
            💬 系统介绍
          </Link>
          <Link
            href="/experience"
            className="text-xs bg-neutral-50 border border-neutral-200 text-neutral-600 px-3 py-1.5 rounded-full hover:border-brand hover:text-brand transition-colors"
          >
            🎮 完整在线体验
          </Link>
        </div>
      </div>
    </div>
  );
};
