import Link from "next/link";
import {
  getAllCategories,
  getArticlesByCategory,
  getArticles,
} from "@/lib/articles";

export default function Home() {
  const categories = getAllCategories();
  const allArticles = getArticles();

  const startHere = [
    {
      slug: "prompt-engineering-fundamentals",
      label: "Prompt Engineering Fundamentals",
      desc: "Core principles for writing effective AI video prompts",
    },
    {
      slug: "camera-angles",
      label: "Camera Angles",
      desc: "Visual storytelling through camera positioning",
    },
    {
      slug: "lighting-techniques",
      label: "Lighting Techniques",
      desc: "The #1 factor for professional video quality",
    },
    {
      slug: "character-consistency-fundamentals",
      label: "Character Consistency",
      desc: "Maintaining coherent characters across clips",
    },
  ];

  return (
    <div style={{ fontFamily: "'Linux Libertine', Georgia, Times, serif" }}>
      {/* Title */}
      <h1 className="text-[28px] font-normal text-[#202122] border-b border-[#a2a9b1] pb-1 mb-1">
        Main Page
      </h1>
      <p className="text-[#54595d] text-[13px] mb-6" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        From Learnpedia, the AI video production encyclopedia
        {" "}&mdash;{" "}
        {allArticles.length} articles in {categories.length} categories
      </p>

      {/* Welcome box */}
      <div className="border border-[#a2a9b1] bg-[#f8eaba] mb-6">
        <div className="bg-[#cef2e0] border-b border-[#a2a9b1] px-4 py-2">
          <h2 className="text-[18px] font-normal text-[#202122] m-0">
            Welcome to Learnpedia
          </h2>
        </div>
        <div className="px-4 py-3 text-[14px] bg-[#f9f9f9]">
          <p className="text-[#202122] m-0">
            Your comprehensive knowledge base for AI video production. Learn prompt engineering,
            camera composition, lighting, character consistency, and professional workflows for
            creating high-quality AI-generated videos.
          </p>
        </div>
      </div>

      {/* Start Here - featured articles */}
      <div className="border border-[#a2a9b1] mb-6">
        <div className="bg-[#dfeeff] border-b border-[#a2a9b1] px-4 py-2">
          <h2 className="text-[16px] font-bold text-[#202122] m-0" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            Start here
          </h2>
        </div>
        <div className="px-4 py-3 bg-[#f9f9f9]">
          <ul className="list-disc pl-5 space-y-1 text-[14px]">
            {startHere.map((item) => (
              <li key={item.slug}>
                <Link href={`/wiki/${item.slug}`} className="text-[#3366cc] hover:underline">
                  {item.label}
                </Link>
                <span className="text-[#54595d]"> &ndash; {item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => {
          const catArticles = getArticlesByCategory(cat);
          return (
            <div key={cat} className="border border-[#a2a9b1]">
              <div className="bg-[#dfeeff] border-b border-[#a2a9b1] px-3 py-1.5">
                <h2 className="text-[14px] font-bold text-[#202122] m-0" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                  {cat}
                  <span className="font-normal text-[#54595d] ml-1.5">
                    ({catArticles.length})
                  </span>
                </h2>
              </div>
              <div className="px-3 py-2 bg-[#f9f9f9]">
                <ul className="list-disc pl-4 space-y-0.5 text-[13px]">
                  {catArticles.map((article) => (
                    <li key={article.slug}>
                      <Link
                        href={`/wiki/${article.slug}`}
                        className="text-[#3366cc] hover:underline"
                      >
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
