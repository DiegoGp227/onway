export interface Topic {
    id: string;
    title: string;
    content: Record<string, unknown>;
    order: number;
    workspaceId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateTopicInput {
    title: string;
    content?: Record<string, unknown>;
}

export interface CreateTopicState {
    topic: CreateTopicInput | null;
    loading: boolean;
    error: string | null;
}

export interface TopicsResponse {
    message: string;
    topics: Topic[];
}
