import { defineCollection, z } from "astro:content";

const blogsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.string().date(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    starred: z.boolean().default(false),
  })
});

export const collections = {
  blogs: blogsCollection,
};
