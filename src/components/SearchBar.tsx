"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { ArticleMeta } from "@/lib/types";

function searchArticles(allArticles: ArticleMeta[], query: string): ArticleMeta[] {
  const lower = query.toLowerCase();
  return allArticles.filter(
    (a) =>
      a.title.toLowerCase().includes(lower) ||
      a.summary.toLowerCase().includes(lower) ||
      a.category.toLowerCase().includes(lower)
  );
}

export default function SearchBar({ articles }: { articles: ArticleMeta[] }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ArticleMeta[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (query.length >= 2) {
      setResults(searchArticles(articles, query).slice(0, 8));
      setOpen(true);
      setSelectedIdx(0);
    } else {
      setResults([]);
      setOpen(false);
    }
  }, [query, articles]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function navigate(slug: string) {
    setQuery("");
    setOpen(false);
    router.push(`/wiki/${slug}`);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      navigate(results[selectedIdx].slug);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div ref={ref} className="relative w-full max-w-[280px]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setOpen(true)}
          placeholder="Search Learnpedia"
          className="w-full px-2.5 py-1.5 border border-[#a2a9b1] text-[13px] bg-white focus:outline-none focus:border-[#3366cc] text-[#202122]"
        />
        <button className="px-3 py-1.5 bg-[#f8f9fa] border border-l-0 border-[#a2a9b1] text-[13px] text-[#202122] hover:bg-[#eaecf0] transition-colors">
          <svg className="w-4 h-4 text-[#54595d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-0 bg-white border border-[#a2a9b1] shadow-md z-50">
          {results.map((article, i) => (
            <button
              key={article.slug}
              onClick={() => navigate(article.slug)}
              className={`w-full text-left px-3 py-2 border-b border-[#eaecf0] last:border-0 transition-colors ${
                i === selectedIdx ? "bg-[#eaf3ff]" : "hover:bg-[#f8f9fa]"
              }`}
            >
              <div className="font-normal text-[13px] text-[#3366cc]">{article.title}</div>
              <div className="text-[11px] text-[#72777d] mt-0.5">{article.category}</div>
            </button>
          ))}
        </div>
      )}
      {open && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-0 bg-white border border-[#a2a9b1] shadow-md z-50 p-3 text-[13px] text-[#54595d] text-center">
          No results for &ldquo;{query}&rdquo;
        </div>
      )}
    </div>
  );
}
