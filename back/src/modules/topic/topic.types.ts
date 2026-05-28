export interface ICreateTopic {
  title: string;
  content?: Record<string, unknown>;
}

export interface IUpdateTopic {
  title?: string;
  content?: Record<string, unknown>;
  order?: number;
}

export interface ITopicResponse {
  id: string;
  title: string;
  content: Record<string, unknown>;
  order: number;
  workspaceId: string;
  createdAt: Date;
  updatedAt: Date;
}
