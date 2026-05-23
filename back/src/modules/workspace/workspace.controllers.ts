import { Request, Response } from "express";
import { ValidationError } from "../../errors/appError.js";
import { asyncHandler } from "../../middlewares/asyncHandler.js";
import {
  createWorkspace,
  deleteWorkspace,
  getWorkspaceById,
  getWorkspaces,
  updateWorkspace,
} from "./workspace.services.js";
import { createWorkspaceSchema, updateWorkspaceSchema } from "./workspace.schemas.js";

export const list = asyncHandler(async (req: Request, res: Response) => {
  const workspaces = await getWorkspaces(req.user!.id);

  res.status(200).json({
    message: "Workspaces retrieved successfully",
    workspaces,
  });
});

export const getById = asyncHandler(async (req: Request, res: Response) => {
  const workspace = await getWorkspaceById(String(req.params.id), req.user!.id);

  res.status(200).json({
    message: "Workspace retrieved successfully",
    workspace,
  });
});

export const create = asyncHandler(async (req: Request, res: Response) => {
  const validation = createWorkspaceSchema.safeParse(req.body);

  if (!validation.success) {
    const errors = validation.error.issues.reduce<Record<string, string>>(
      (acc, err) => {
        acc[err.path.join(".")] = err.message;
        return acc;
      },
      {},
    );
    throw new ValidationError("Validation errors", errors);
  }

  const workspace = await createWorkspace(validation.data, req.user!.id);

  res.status(201).json({
    message: "Workspace created successfully",
    workspace,
  });
});

export const update = asyncHandler(async (req: Request, res: Response) => {
  const validation = updateWorkspaceSchema.safeParse(req.body);

  if (!validation.success) {
    const errors = validation.error.issues.reduce<Record<string, string>>(
      (acc, err) => {
        acc[err.path.join(".")] = err.message;
        return acc;
      },
      {},
    );
    throw new ValidationError("Validation errors", errors);
  }

  const workspace = await updateWorkspace(String(req.params.id), validation.data, req.user!.id);

  res.status(200).json({
    message: "Workspace updated successfully",
    workspace,
  });
});

export const remove = asyncHandler(async (req: Request, res: Response) => {
  await deleteWorkspace(String(req.params.id), req.user!.id);

  res.status(200).json({
    message: "Workspace deleted successfully",
  });
});
