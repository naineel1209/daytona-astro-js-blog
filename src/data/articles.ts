import { getCollection, getEntryBySlug } from "astro:content";
// @ts-ignore
import { sanityClient } from 'sanity:client';

export const getArticles = async (limit?: number) => {
  let articles = await getCollection("blogs");

  if (limit) {
    articles = articles.slice(0, limit);
  }

  return articles;
};

export const getSanityArticles = async (limit ?: number) => {
  let articles = await sanityClient.fetch(`*[_type == "article"]{
  title,
  description,
  author,
  content,
  slug,
}`);
}

export const getArticle = async (slug: string) => {
  const articles = await getEntryBySlug("blogs", slug);

  return articles;
};
