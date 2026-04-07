"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import type { ArticleMeta, Category } from "@/lib/types";

interface WikiLayoutProps {
  children: React.ReactNode;
  categories: Category[];
  articlesByCategory: Record<string, ArticleMeta[]>;
  allArticles: ArticleMeta[];
  totalArticles: number;
}

export default function WikiLayout({
  children,
  categories,
  articlesByCategory,
  allArticles,
  totalArticles,
}: WikiLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
      {/* Wikipedia-style top header */}
      <header className="bg-white border-b border-[#c8ccd1]">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-1.5 text-[#54595d] hover:text-[#202122]"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/" className="flex items-center gap-2 hover:no-underline">
              <span className="text-[22px] font-normal text-[#202122]" style={{ fontFamily: "'Linux Libertine', Georgia, Times, serif" }}>
                Learnpedia
              </span>
            </Link>
            <span className="hidden sm:inline text-xs text-[#54595d] italic" style={{ fontFamily: "'Linux Libertine', Georgia, Times, serif" }}>
              The AI Video Production Encyclopedia
            </span>
          </div>
          <div className="flex items-center gap-3">
            <SearchBar articles={allArticles} />
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main body with sidebar + content */}
      <div className="flex flex-1 max-w-[1600px] mx-auto w-full">
        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-40 w-[220px] shrink-0 bg-[#f8f9fa] border-r border-[#c8ccd1] overflow-y-auto transform transition-transform lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar
            categories={categories}
            articlesByCategory={articlesByCategory}
            totalArticles={totalArticles}
            onNavigate={() => setSidebarOpen(false)}
          />
        </aside>

        {/* Page content */}
        <main className="flex-1 bg-white border-l border-[#c8ccd1] min-h-[calc(100vh-50px)]">
          <div className="max-w-[960px] px-6 lg:px-8 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
