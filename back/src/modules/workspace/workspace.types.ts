export interface ICreateWorkspace {
  name: string;
  color?: string;
  icon?: string;
}

export interface IUpdateWorkspace {
  name?: string;
  color?: string;
  icon?: string;
  order?: number;
}

export interface IWorkspaceResponse {
  id: string;
  name: string;
  color: string | null;
  icon: string | null;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}
