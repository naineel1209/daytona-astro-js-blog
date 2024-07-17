import { getCollection, getEntryBySlug } from "astro:content";
// @ts-ignore
import { sanityClient } from 'sanity:client';
import { ARTICLES_PER_PAGE, LATEST_ARTICLE_LIMIT, STARRED_ARTICLE_LIMIT } from "../constants";
import type { TArticles } from "../types/types";
import { getArticlesQuery, getLatestArticlesQuery, getStarredArticleQuery } from "./query/articles.query";

export const getArticles = async (limit?: number) => {
  let articles = await getCollection("blogs");

  if (limit) {
    articles = articles.slice(0, limit);
  }

  return articles;
};

export const getSanityArticles = async (limit?: number, page?: number): Promise<TArticles[]> => {
  if (!limit || limit < 1) {
    limit = ARTICLES_PER_PAGE;
  }

  if (!page || page < 1) {
    page = 1;
  }

  const sanityArticles: TArticles[] = await sanityClient.fetch(getArticlesQuery(limit, page));

  return sanityArticles;
};

export const getSanityStarredArticles = async (): Promise<TArticles[]> => {
  const limit = STARRED_ARTICLE_LIMIT;

  const sanityArticles: TArticles[] = await sanityClient.fetch(getStarredArticleQuery(limit));

  return sanityArticles;

}

export const getLatestSanityArticles = async (): Promise<TArticles[]> => {
  const limit = LATEST_ARTICLE_LIMIT;

  const sanityArticles: TArticles[] = await sanityClient.fetch(getLatestArticlesQuery(limit));

  return sanityArticles;
}

export const getArticle = async (slug: string) => {
  const articles = await getEntryBySlug("blogs", slug);

  return articles;
};
