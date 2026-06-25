export interface Task {
    id: string;
    title: string;
    completed: boolean;
    dueDate: string | null;
    tags: unknown;
    order: number;
    workspaceId: string;
    createdAt: string;
    updatedAt: string;
}

export interface TasksResponse {
    tasks: Task[];
}

export interface TaskCountResponse {
    total: number;
    completed: number;
    pending: number;
}

export interface CreateTaskInput {
    title: string;
}

export interface CreateTaskState {
    task: Task | null;
    loading: boolean;
    error: string | null;
}

export interface UpdateTaskInput {
    completed: boolean;
}
