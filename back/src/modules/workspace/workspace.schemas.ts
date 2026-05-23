import { z } from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().min(1, "Name is required"),
  color: z.string().optional(),
  icon: z.string().optional(),
});

export const updateWorkspaceSchema = z.object({
  name: z.string().min(1).optional(),
  color: z.string().optional(),
  icon: z.string().optional(),
  order: z.number().int().optional(),
});

export type CreateWorkspaceDTO = z.infer<typeof createWorkspaceSchema>;
export type UpdateWorkspaceDTO = z.infer<typeof updateWorkspaceSchema>;
