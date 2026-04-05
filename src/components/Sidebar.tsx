"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ArticleMeta, Category } from "@/lib/types";
import { CATEGORY_COLORS } from "@/lib/types";

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

  return (
    <nav className="p-4 space-y-4 text-sm">
      <Link
        href="/"
        onClick={onNavigate}
        className="flex items-center gap-2 text-lg font-bold text-gray-900 hover:text-blue-700 transition-colors"
      >
        <span className="text-2xl">&#x1F4D6;</span> Learnpedia
      </Link>

      <div className="pt-2">
        <Link
          href="/"
          onClick={onNavigate}
          className={`block px-2 py-1.5 rounded font-medium transition-colors ${
            pathname === "/"
              ? "bg-blue-50 text-blue-700"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          }`}
        >
          Home
        </Link>
      </div>

      {categories.map((cat) => (
        <div key={cat}>
          <h3 className="px-2 font-semibold text-gray-500 uppercase text-xs tracking-wider mb-1">
            {cat}
          </h3>
          <ul className="space-y-0.5">
            {(articlesByCategory[cat] ?? []).map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/wiki/${article.slug}`}
                  onClick={onNavigate}
                  className={`block px-2 py-1.5 rounded transition-colors truncate ${
                    pathname === `/wiki/${article.slug}`
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  title={article.title}
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="pt-4 border-t border-gray-200 text-xs text-gray-400">
        {totalArticles} articles
      </div>
    </nav>
  );
}
