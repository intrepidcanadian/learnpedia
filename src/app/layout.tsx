import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WikiLayout from "@/components/WikiLayout";
import { getAllCategories, getArticlesByCategory, getAllArticleMeta, getArticles } from "@/lib/articles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learnpedia — AI Video Production Wiki",
  description:
    "A personal knowledge base for creating great AI-generated videos. Prompts, camera angles, lighting, character consistency, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = getAllCategories();
  const allArticles = getAllArticleMeta();
  const totalArticles = getArticles().length;

  const articlesByCategory: Record<string, typeof allArticles> = {};
  for (const cat of categories) {
    articlesByCategory[cat] = getArticlesByCategory(cat).map(
      ({ slug, title, category, summary }) => ({ slug, title, category, summary })
    );
  }

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <WikiLayout
          categories={categories}
          articlesByCategory={articlesByCategory}
          allArticles={allArticles}
          totalArticles={totalArticles}
        >
          {children}
        </WikiLayout>
      </body>
    </html>
  );
}
