import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: {
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    slug: z.string().optional(),
  }
});

export const collections = {
  blogs: blogCollection,
};