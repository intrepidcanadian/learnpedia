"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ArticleMeta, Category } from "@/lib/types";

interface SidebarProps {
  categories: Category[];
  articlesByCategory: Record<string, ArticleMeta[]>;
  totalArticles: number;
  onNavigate?: () => void;
}

export default function Sidebar({
  categories,
  articlesByCategory,
  totalArticles,
  onNavigate,
}: SidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggle = (cat: string) =>
    setCollapsed((prev) => ({ ...prev, [cat]: !prev[cat] }));

  return (
    <nav className="text-[13px] py-3" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      {/* Main navigation */}
      <div className="border-b border-[#c8ccd1] pb-2 mb-2 px-3">
        <Link
          href="/"
          onClick={onNavigate}
          className={`block py-1 transition-colors ${
            pathname === "/"
              ? "font-bold text-[#202122]"
              : "text-[#3366cc] hover:underline"
          }`}
        >
          Main page
        </Link>
      </div>

      {/* Categories */}
      {categories.map((cat) => (
        <div key={cat} className="border-b border-[#eaecf0]">
          <button
            onClick={() => toggle(cat)}
            className="w-full flex items-center justify-between px-3 py-1.5 text-left font-bold text-[#54595d] text-[12px] uppercase tracking-wide hover:bg-[#eaecf0] transition-colors"
          >
            <span>{cat}</span>
            <svg
              className={`w-3 h-3 text-[#72777d] transition-transform ${collapsed[cat] ? "" : "rotate-180"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {!collapsed[cat] && (
            <ul className="pb-1">
              {(articlesByCategory[cat] ?? []).map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/wiki/${article.slug}`}
                    onClick={onNavigate}
                    className={`block px-3 py-[3px] transition-colors truncate ${
                      pathname === `/wiki/${article.slug}`
                        ? "font-bold text-[#202122] bg-white"
                        : "text-[#3366cc] hover:underline hover:bg-[#eaecf0]"
                    }`}
                    title={article.title}
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="px-3 pt-3 text-[11px] text-[#72777d]">
        {totalArticles} articles
      </div>
    </nav>
  );
}
