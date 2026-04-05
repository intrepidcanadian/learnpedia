import Link from "next/link";
import {
  getAllCategories,
  getArticlesByCategory,
  CATEGORY_COLORS,
  articles,
} from "@/lib/articles";

export default function Home() {
  const categories = getAllCategories();

  return (
    <div>
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Learnpedia
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Your personal knowledge base for creating great AI-generated videos.
          {" "}
          <span className="text-gray-500">
            {articles.length} articles across {categories.length} categories.
          </span>
        </p>
      </div>

      {/* Quick Start */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Start Here</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              slug: "prompt-engineering-fundamentals",
              label: "Prompt Engineering",
              desc: "The foundation of all AI video",
            },
            {
              slug: "camera-angles",
              label: "Camera Angles",
              desc: "Visual storytelling through angle",
            },
            {
              slug: "lighting-techniques",
              label: "Lighting Techniques",
              desc: "The #1 factor for video quality",
            },
            {
              slug: "character-consistency-fundamentals",
              label: "Character Consistency",
              desc: "The hardest problem in AI video",
            },
          ].map((item) => (
            <Link
              key={item.slug}
              href={`/wiki/${item.slug}`}
              className="flex flex-col p-4 bg-white rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <span className="font-semibold text-gray-900">{item.label}</span>
              <span className="text-sm text-gray-500 mt-1">{item.desc}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* All Categories */}
      <div className="space-y-8">
        {categories.map((cat) => {
          const catArticles = getArticlesByCategory(cat);
          return (
            <section key={cat}>
              <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span
                  className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${CATEGORY_COLORS[cat]}`}
                >
                  {cat}
                </span>
                <span className="text-sm font-normal text-gray-400">
                  {catArticles.length} article{catArticles.length !== 1 ? "s" : ""}
                </span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {catArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/wiki/${article.slug}`}
                    className="group block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {article.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
