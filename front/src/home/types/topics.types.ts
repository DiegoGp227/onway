export interface Topics {
  id: string;
  title: string;
  content: Record<string, unknown>;
  order: number;
  workspaceId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TopicResponse {
    message: string;
    topics: Topics[];
}
