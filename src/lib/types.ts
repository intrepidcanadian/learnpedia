export interface Article {
  slug: string;
  title: string;
  category: Category;
  summary: string;
  content: string; // rendered HTML
  relatedSlugs: string[];
}

export interface ArticleMeta {
  slug: string;
  title: string;
  category: Category;
  summary: string;
}

export type Category =
  | "Prompting"
  | "Camera & Composition"
  | "Lighting"
  | "Character Consistency"
  | "Motion & Animation"
  | "Post-Production"
  | "Tools & Platforms"
  | "Workflows";

export const CATEGORY_COLORS: Record<Category, string> = {
  Prompting: "bg-blue-100 text-blue-800",
  "Camera & Composition": "bg-purple-100 text-purple-800",
  Lighting: "bg-yellow-100 text-yellow-800",
  "Character Consistency": "bg-green-100 text-green-800",
  "Motion & Animation": "bg-red-100 text-red-800",
  "Post-Production": "bg-pink-100 text-pink-800",
  "Tools & Platforms": "bg-indigo-100 text-indigo-800",
  Workflows: "bg-orange-100 text-orange-800",
};

export const CATEGORY_ORDER: Category[] = [
  "Prompting",
  "Camera & Composition",
  "Lighting",
  "Character Consistency",
  "Motion & Animation",
  "Post-Production",
  "Tools & Platforms",
  "Workflows",
];
