import { defineCollection, z } from 'astro:content';

export const collections = {
  information: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      avatar: z.string().url().optional(),
      socials: z
        .array(
          z.object({ name: z.string(), url: z.string().url() })
        )
        .optional(),
      hobbies: z.array(z.string()).optional(),
    }),
  }),
};

