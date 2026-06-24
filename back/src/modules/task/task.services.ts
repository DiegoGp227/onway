import prisma from "../../db/prisma.js";
import { NotFoundError } from "../../errors/appError.js";
import { ICreateTask, IUpdateTask, ITaskResponse } from "./task.types";

const verifyWorkspaceOwnership = async (workspaceId: string, userId: string) => {
  const workspace = await prisma.workspace.findFirst({
    where: { id: workspaceId, userId },
  });

  if (!workspace) {
    throw new NotFoundError("Workspace");
  }
};

export const getTasks = async (
  workspaceId: string,
  userId: string,
): Promise<ITaskResponse[]> => {
  await verifyWorkspaceOwnership(workspaceId, userId);

  return prisma.task.findMany({
    where: { workspaceId },
    orderBy: { order: "asc" },
  });
};

export const getTaskById = async (
  id: string,
  workspaceId: string,
  userId: string,
): Promise<ITaskResponse> => {
  await verifyWorkspaceOwnership(workspaceId, userId);

  const task = await prisma.task.findFirst({
    where: { id, workspaceId },
  });

  if (!task) {
    throw new NotFoundError("Task");
  }

  return task;
};

export const createTask = async (
  data: ICreateTask,
  workspaceId: string,
  userId: string,
): Promise<ITaskResponse> => {
  await verifyWorkspaceOwnership(workspaceId, userId);

  const count = await prisma.task.count({ where: { workspaceId } });

  return prisma.task.create({
    data: {
      title: data.title,
      completed: data.completed ?? false,
      dueDate: data.dueDate,
      tags: data.tags as any,
      order: count,
      workspaceId,
    },
  });
};

export const updateTask = async (
  id: string,
  data: IUpdateTask,
  workspaceId: string,
  userId: string,
): Promise<ITaskResponse> => {
  await verifyWorkspaceOwnership(workspaceId, userId);

  const existing = await prisma.task.findFirst({
    where: { id, workspaceId },
  });

  if (!existing) {
    throw new NotFoundError("Task");
  }

  return prisma.task.update({
    where: { id },
    data: data as any,
  });
};

export const deleteTask = async (
  id: string,
  workspaceId: string,
  userId: string,
): Promise<void> => {
  await verifyWorkspaceOwnership(workspaceId, userId);

  const existing = await prisma.task.findFirst({
    where: { id, workspaceId },
  });

  if (!existing) {
    throw new NotFoundError("Task");
  }

  await prisma.task.delete({ where: { id } });
};
