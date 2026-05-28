import { z } from "zod";

export const createTopicSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.record(z.string(), z.unknown()).optional(),
});

export const updateTopicSchema = z.object({
  title: z.string().min(1).optional(),
  content: z.record(z.string(), z.unknown()).optional(),
  order: z.number().int().optional(),
});

export type CreateTopicDTO = z.infer<typeof createTopicSchema>;
export type UpdateTopicDTO = z.infer<typeof updateTopicSchema>;
