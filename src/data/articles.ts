import { getCollection, getEntryBySlug } from "astro:content";
// @ts-ignore
import { sanityClient } from 'sanity:client';

export const getArticles = async (limit?: number, page?: number) => {
  let articles = await getCollection("blogs");

  if (limit) {
    articles = articles.slice(0, limit);
  }

  return articles;
};

export const getSanityArticles = async (limit?: number, page?: number) => {
  if (limit && limit < 1) {
    limit = 1;
  }

  if (page && page < 1) {
    page = 1;
  }

  limit = limit || 1;
  page = page || 2;

  const sanityArticles = await sanityClient.fetch(`*[_type == "article"][${(page - 1) * limit}...${page * limit}]{
  _id,
  title,
  description,
  author,
  date,
  image,
  tags,
  slug,
  starred,
  draft
}
`);

  return sanityArticles;
}

export const getArticle = async (slug: string) => {
  const articles = await getEntryBySlug("blogs", slug);

  return articles;
};
