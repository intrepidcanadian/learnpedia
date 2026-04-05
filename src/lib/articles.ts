import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import type { Article, ArticleMeta, Category } from "./types";
export { CATEGORY_COLORS, CATEGORY_ORDER } from "./types";
export type { Article, ArticleMeta, Category } from "./types";

// Map folder names to category display names
const FOLDER_TO_CATEGORY: Record<string, Category> = {
  prompting: "Prompting",
  "camera-composition": "Camera & Composition",
  lighting: "Lighting",
  "character-consistency": "Character Consistency",
  "motion-animation": "Motion & Animation",
  "post-production": "Post-Production",
  "tools-platforms": "Tools & Platforms",
  workflows: "Workflows",
};

const CATEGORY_ORDER_LIST: Category[] = [
  "Prompting",
  "Camera & Composition",
  "Lighting",
  "Character Consistency",
  "Motion & Animation",
  "Post-Production",
  "Tools & Platforms",
  "Workflows",
];

const contentDir = path.join(process.cwd(), "content");

function getMarkdownFiles(): { filePath: string; folder: string }[] {
  const files: { filePath: string; folder: string }[] = [];
  const folders = fs.readdirSync(contentDir);

  for (const folder of folders) {
    const folderPath = path.join(contentDir, folder);
    if (!fs.statSync(folderPath).isDirectory()) continue;

    const mdFiles = fs.readdirSync(folderPath).filter((f) => f.endsWith(".md"));
    for (const mdFile of mdFiles) {
      files.push({
        filePath: path.join(folderPath, mdFile),
        folder,
      });
    }
  }

  return files;
}

function parseArticle(filePath: string, folder: string): Article {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const slug = path.basename(filePath, ".md");

  const html = remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .processSync(content)
    .toString();

  return {
    slug,
    title: data.title ?? slug,
    category:
      (data.category as Category) ?? FOLDER_TO_CATEGORY[folder] ?? "Prompting",
    summary: data.summary ?? "",
    content: html,
    relatedSlugs: data.related ?? [],
  };
}

// Cache parsed articles
let _articles: Article[] | null = null;

export function getArticles(): Article[] {
  if (_articles) return _articles;

  const files = getMarkdownFiles();
  _articles = files.map(({ filePath, folder }) =>
    parseArticle(filePath, folder)
  );

  _articles.sort((a, b) => {
    const catA = CATEGORY_ORDER_LIST.indexOf(a.category);
    const catB = CATEGORY_ORDER_LIST.indexOf(b.category);
    if (catA !== catB) return catA - catB;
    return a.title.localeCompare(b.title);
  });

  return _articles;
}

export function getArticle(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Category): Article[] {
  return getArticles().filter((a) => a.category === category);
}

export function getAllCategories(): Category[] {
  const cats = new Set(getArticles().map((a) => a.category));
  return CATEGORY_ORDER_LIST.filter((c) => cats.has(c));
}

export function getAllArticleMeta(): ArticleMeta[] {
  return getArticles().map(({ slug, title, category, summary }) => ({
    slug,
    title,
    category,
    summary,
  }));
}
