import prisma from "../../db/prisma.js";
import { NotFoundError } from "../../errors/appError.js";
import { ICreateWorkspace, IUpdateWorkspace, IWorkspaceResponse } from "./workspace.types";

export const getWorkspaces = async (userId: string): Promise<IWorkspaceResponse[]> => {
  return prisma.workspace.findMany({
    where: { userId },
    orderBy: { order: "asc" },
  });
};

export const getWorkspaceById = async (
  id: string,
  userId: string,
): Promise<IWorkspaceResponse> => {
  const workspace = await prisma.workspace.findFirst({
    where: { id, userId },
  });

  if (!workspace) {
    throw new NotFoundError("Workspace");
  }

  return workspace;
};

export const createWorkspace = async (
  data: ICreateWorkspace,
  userId: string,
): Promise<IWorkspaceResponse> => {
  const count = await prisma.workspace.count({ where: { userId } });

  return prisma.workspace.create({
    data: {
      name: data.name,
      color: data.color,
      icon: data.icon,
      order: count,
      userId,
    },
  });
};

export const updateWorkspace = async (
  id: string,
  data: IUpdateWorkspace,
  userId: string,
): Promise<IWorkspaceResponse> => {
  const existing = await prisma.workspace.findFirst({
    where: { id, userId },
  });

  if (!existing) {
    throw new NotFoundError("Workspace");
  }

  return prisma.workspace.update({
    where: { id },
    data,
  });
};

export const deleteWorkspace = async (
  id: string,
  userId: string,
): Promise<void> => {
  const existing = await prisma.workspace.findFirst({
    where: { id, userId },
  });

  if (!existing) {
    throw new NotFoundError("Workspace");
  }

  await prisma.workspace.delete({ where: { id } });
};
