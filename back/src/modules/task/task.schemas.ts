import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  completed: z.boolean().optional(),
  dueDate: z.coerce.date().optional(),
  tags: z.unknown().optional(),
});

export const updateTaskSchema = z.object({
  title: z.string().min(1).optional(),
  completed: z.boolean().optional(),
  dueDate: z.coerce.date().optional(),
  tags: z.unknown().optional(),
  order: z.number().int().optional(),
});

export type CreateTaskDTO = z.infer<typeof createTaskSchema>;
export type UpdateTaskDTO = z.infer<typeof updateTaskSchema>;
