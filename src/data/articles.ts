import { getCollection, getEntryBySlug } from "astro:content";

export const getArticles = async (limit?: number) => {
  let articles = await getCollection("blogs");

  if (limit) {
    articles = articles.slice(0, limit);
  }
  return articles;
};

export const getArticle = async (slug: string) => {
  const articles = await getEntryBySlug("blogs", slug);

  return articles;
};