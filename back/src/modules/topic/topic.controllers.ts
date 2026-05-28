import { Request, Response } from "express";
import { ValidationError } from "../../errors/appError.js";
import { asyncHandler } from "../../middlewares/asyncHandler.js";
import {
  createTopic,
  deleteTopic,
  getTopicById,
  getTopics,
  updateTopic,
} from "./topic.services.js";
import { createTopicSchema, updateTopicSchema } from "./topic.schemas.js";

export const list = asyncHandler(async (req: Request, res: Response) => {
  const topics = await getTopics(String(req.params.workspaceId), req.user!.id);

  res.status(200).json({
    message: "Topics retrieved successfully",
    topics,
  });
});

export const getById = asyncHandler(async (req: Request, res: Response) => {
  const topic = await getTopicById(
    String(req.params.id),
    String(req.params.workspaceId),
    req.user!.id,
  );

  res.status(200).json({
    message: "Topic retrieved successfully",
    topic,
  });
});

export const create = asyncHandler(async (req: Request, res: Response) => {
  const validation = createTopicSchema.safeParse(req.body);

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

  const topic = await createTopic(
    validation.data,
    String(req.params.workspaceId),
    req.user!.id,
  );

  res.status(201).json({
    message: "Topic created successfully",
    topic,
  });
});

export const update = asyncHandler(async (req: Request, res: Response) => {
  const validation = updateTopicSchema.safeParse(req.body);

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

  const topic = await updateTopic(
    String(req.params.id),
    validation.data,
    String(req.params.workspaceId),
    req.user!.id,
  );

  res.status(200).json({
    message: "Topic updated successfully",
    topic,
  });
});

export const remove = asyncHandler(async (req: Request, res: Response) => {
  await deleteTopic(
    String(req.params.id),
    String(req.params.workspaceId),
    req.user!.id,
  );

  res.status(200).json({
    message: "Topic deleted successfully",
  });
});
