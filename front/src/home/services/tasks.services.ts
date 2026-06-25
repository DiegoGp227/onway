import { fetcher, postFetcher, putFetcher } from "@/utils/utils";
import { CreateTaskInput, Task, TaskCountResponse, TasksResponse, UpdateTaskInput } from "../types/tasks.types";
import { TaskCountURL, TasksURL } from "@/src/shared/constants/urls";

export function getTasks(workspaceId: string): Promise<TasksResponse> {
    const url = TasksURL(workspaceId).toString();
    return fetcher<TasksResponse>(url);
}

export function updateTask(
    workspaceId: string,
    taskId: string,
    data: UpdateTaskInput,
): Promise<{ task: Task }> {
    const url = `${TasksURL(workspaceId).toString()}/${taskId}`;
    return putFetcher<{ task: Task }>(url, data);
}

export function getTaskCount(workspaceId: string): Promise<TaskCountResponse> {
    const url = TaskCountURL(workspaceId).toString();
    return fetcher<TaskCountResponse>(url);
}

export function createTask(
    workspaceId: string,
    data: CreateTaskInput,
): Promise<{ task: Task }> {
    const url = TasksURL(workspaceId).toString();
    return postFetcher<{ task: Task }>(url, data);
}
