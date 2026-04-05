import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticle, getArticles } from "@/lib/articles";
import { CATEGORY_COLORS } from "@/lib/types";
import type { Article } from "@/lib/types";

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
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span
          className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full ${CATEGORY_COLORS[article.category]}`}
        >
          {article.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>
      <p className="text-gray-600 mb-8 text-lg leading-relaxed">{article.summary}</p>

      {/* Content */}
      <div
        className="wiki-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Edit on GitHub link */}
      <div className="mt-8 pt-4 border-t border-gray-100">
        <a
          href={`https://github.com/intrepidcanadian/learnpedia/edit/main/content/${getCategoryFolder(article.category)}/${article.slug}.md`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-blue-600 transition-colors"
        >
          Edit this page on GitHub &rarr;
        </a>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/wiki/${related.slug}`}
                className="group block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <span
                  className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full mb-2 ${CATEGORY_COLORS[related.category]}`}
                >
                  {related.category}
                </span>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {related.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {related.summary}
                </p>
              </Link>
            ))}
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
