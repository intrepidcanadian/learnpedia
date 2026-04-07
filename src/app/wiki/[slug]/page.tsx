import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticle, getArticles } from "@/lib/articles";
import type { Article } from "@/lib/types";
import CopyCodeButton from "@/components/CopyCodeButton";

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} — Learnpedia`,
    description: article.summary,
  };
}

export default async function WikiArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const allArticles = getArticles();
  const relatedArticles = article.relatedSlugs
    .map((s) => allArticles.find((a) => a.slug === s))
    .filter(Boolean) as Article[];

  return (
    <article>
      {/* Title */}
      <h1
        className="text-[28px] font-normal text-[#202122] border-b border-[#a2a9b1] pb-1 mb-1"
        style={{ fontFamily: "'Linux Libertine', Georgia, Times, serif" }}
      >
        {article.title}
      </h1>
      <p
        className="text-[13px] text-[#54595d] mb-4"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        From Learnpedia, the AI video production encyclopedia
      </p>

      {/* Summary box */}
      <div className="text-[14px] text-[#202122] mb-4 leading-relaxed" style={{ fontFamily: "'Linux Libertine', Georgia, Times, serif" }}>
        {article.summary}
      </div>

      {/* Content */}
      <div
        className="wiki-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <CopyCodeButton />

      {/* Categories & metadata footer */}
      <div className="mt-8 pt-3 border-t border-[#a2a9b1]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        <div className="flex flex-wrap items-center gap-2 text-[12px] text-[#54595d]">
          <span className="font-bold">Category:</span>
          <Link
            href="/"
            className="text-[#3366cc] hover:underline"
          >
            {article.category}
          </Link>
          <span className="mx-1">|</span>
          <a
            href={`https://github.com/intrepidcanadian/learnpedia/edit/main/content/${getCategoryFolder(article.category)}/${article.slug}.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3366cc] hover:underline"
          >
            Edit this page
          </a>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="mt-6 border border-[#a2a9b1]">
          <div className="bg-[#dfeeff] border-b border-[#a2a9b1] px-3 py-1.5">
            <h2 className="text-[14px] font-bold text-[#202122] m-0" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              Related articles
            </h2>
          </div>
          <div className="px-3 py-2 bg-[#f9f9f9]">
            <ul className="list-disc pl-4 space-y-0.5 text-[13px]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              {relatedArticles.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/wiki/${related.slug}`}
                    className="text-[#3366cc] hover:underline"
                  >
                    {related.title}
                  </Link>
                  <span className="text-[#54595d]"> ({related.category})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}

function getCategoryFolder(category: string): string {
  const map: Record<string, string> = {
    Prompting: "prompting",
    "Camera & Composition": "camera-composition",
    Lighting: "lighting",
    "Character Consistency": "character-consistency",
    "Motion & Animation": "motion-animation",
    "Post-Production": "post-production",
    "Tools & Platforms": "tools-platforms",
    Workflows: "workflows",
  };
  return map[category] ?? "prompting";
}
