export interface ICreateTask {
  title: string;
  completed?: boolean;
  dueDate?: Date;
  tags?: unknown;
}

export interface IUpdateTask {
  title?: string;
  completed?: boolean;
  dueDate?: Date;
  tags?: unknown;
  order?: number;
}

export interface ITaskResponse {
  id: string;
  title: string;
  completed: boolean;
  dueDate: Date | null;
  tags: unknown;
  order: number;
  workspaceId: string;
  createdAt: Date;
  updatedAt: Date;
}
