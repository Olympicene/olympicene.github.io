// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    type: z.string(),
    description: z.string(),
    date: z.string(),
    time: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    favorite: z.boolean().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};