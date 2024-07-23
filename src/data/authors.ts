import { sanityClient } from "sanity:client";
import type { TArticleAuthor } from "../types/types.ts";
import { getAuthorBySlugQuery, getAuthorsQuery } from "./query/authors.query.ts";

export const getSanityAuthors = async (): Promise<TArticleAuthor[]> => {
    const authors: TArticleAuthor[] = await sanityClient.fetch(getAuthorsQuery());

    return authors;
};

export const getSanityAuthorBySlug = async (slug: string): Promise<TArticleAuthor> => {
    const author = await sanityClient.fetch(getAuthorBySlugQuery(slug));
    return author;
}