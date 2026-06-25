import { Request, Response } from "express";
import { ValidationError } from "../../errors/appError.js";
import { asyncHandler } from "../../middlewares/asyncHandler.js";
import {
  createTask,
  deleteTask,
  getTaskById,
  getTaskCount,
  getTasks,
  updateTask,
} from "./task.services.js";
import { createTaskSchema, updateTaskSchema } from "./task.schemas.js";

export const list = asyncHandler(async (req: Request, res: Response) => {
  const tasks = await getTasks(String(req.params.workspaceId), req.user!.id);

  res.status(200).json({
    message: "Tasks retrieved successfully",
    tasks,
  });
});

export const getById = asyncHandler(async (req: Request, res: Response) => {
  const task = await getTaskById(
    String(req.params.id),
    String(req.params.workspaceId),
    req.user!.id,
  );

  res.status(200).json({
    message: "Task retrieved successfully",
    task,
  });
});

export const create = asyncHandler(async (req: Request, res: Response) => {
  const validation = createTaskSchema.safeParse(req.body);

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

  const task = await createTask(
    validation.data,
    String(req.params.workspaceId),
    req.user!.id,
  );

  res.status(201).json({
    message: "Task created successfully",
    task,
  });
});

export const update = asyncHandler(async (req: Request, res: Response) => {
  const validation = updateTaskSchema.safeParse(req.body);

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

  const task = await updateTask(
    String(req.params.id),
    validation.data,
    String(req.params.workspaceId),
    req.user!.id,
  );

  res.status(200).json({
    message: "Task updated successfully",
    task,
  });
});

export const count = asyncHandler(async (req: Request, res: Response) => {
  const taskCount = await getTaskCount(String(req.params.workspaceId), req.user!.id);

  res.status(200).json({
    message: "Tasks count retrieved successfully",
    ...taskCount,
  });
});

export const remove = asyncHandler(async (req: Request, res: Response) => {
  await deleteTask(
    String(req.params.id),
    String(req.params.workspaceId),
    req.user!.id,
  );

  res.status(200).json({
    message: "Task deleted successfully",
  });
});
