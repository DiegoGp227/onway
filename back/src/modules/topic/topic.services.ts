import prisma from "../../db/prisma.js";
import { NotFoundError } from "../../errors/appError.js";
import { ICreateTopic, IUpdateTopic, ITopicResponse } from "./topic.types";

const verifyWorkspaceOwnership = async (workspaceId: string, userId: string) => {
  const workspace = await prisma.workspace.findFirst({
    where: { id: workspaceId, userId },
  });

  if (!workspace) {
    throw new NotFoundError("Workspace");
  }
};

export const getTopics = async (
  workspaceId: string,
  userId: string,
): Promise<ITopicResponse[]> => {
  await verifyWorkspaceOwnership(workspaceId, userId);

  const topics = await prisma.topic.findMany({
    where: { workspaceId },
    orderBy: { order: "asc" },
  });

  return topics.map((t) => ({
    ...t,
    content: (t.content ?? {}) as Record<string, unknown>,
  }));
};

export const getTopicById = async (
  id: string,
  workspaceId: string,
  userId: string,
): Promise<ITopicResponse> => {
  await verifyWorkspaceOwnership(workspaceId, userId);

  const topic = await prisma.topic.findFirst({
    where: { id, workspaceId },
  });

  if (!topic) {
    throw new NotFoundError("Topic");
  }

  return {
    ...topic,
    content: (topic.content ?? {}) as Record<string, unknown>,
  };
};

export const createTopic = async (
  data: ICreateTopic,
  workspaceId: string,
  userId: string,
): Promise<ITopicResponse> => {
  await verifyWorkspaceOwnership(workspaceId, userId);

  const count = await prisma.topic.count({ where: { workspaceId } });

  const topic = await prisma.topic.create({
    data: {
      title: data.title,
      content: (data.content ?? {}) as any,
      order: count,
      workspaceId,
    },
  });

  return {
    ...topic,
    content: (topic.content ?? {}) as Record<string, unknown>,
  };
};

export const updateTopic = async (
  id: string,
  data: IUpdateTopic,
  workspaceId: string,
  userId: string,
): Promise<ITopicResponse> => {
  await verifyWorkspaceOwnership(workspaceId, userId);

  const existing = await prisma.topic.findFirst({
    where: { id, workspaceId },
  });

  if (!existing) {
    throw new NotFoundError("Topic");
  }

  const topic = await prisma.topic.update({
    where: { id },
    data: data as any,
  });

  return {
    ...topic,
    content: (topic.content ?? {}) as Record<string, unknown>,
  };
};

export const deleteTopic = async (
  id: string,
  workspaceId: string,
  userId: string,
): Promise<void> => {
  await verifyWorkspaceOwnership(workspaceId, userId);

  const existing = await prisma.topic.findFirst({
    where: { id, workspaceId },
  });

  if (!existing) {
    throw new NotFoundError("Topic");
  }

  await prisma.topic.delete({ where: { id } });
};
