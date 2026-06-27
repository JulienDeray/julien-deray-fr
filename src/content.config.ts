import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journey = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journey' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string().optional(),
    dates: z.string(),
    order: z.number(), // lower = newer / shown first
    current: z.boolean().default(false),
    blurb: z.string().optional(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    blurb: z.string(),
    tag: z.string(),
    emoji: z.string().default('📖'),
    order: z.number(),
  }),
});

const methods = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/methods' }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    tag: z.string(),
    emoji: z.string().default('🛠️'),
    order: z.number(),
  }),
});

const podcastTopics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/podcast-topics' }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    emoji: z.string().default('🎙️'),
    order: z.number(),
  }),
});

export const collections = { journey, books, methods, podcastTopics };
