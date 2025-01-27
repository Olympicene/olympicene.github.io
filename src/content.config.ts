// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// 2. Define a `type` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ pattern: '[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    description: z.string(),
    date: z.string(),
    time: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string(),
    favorite: z.boolean().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {blog}