import { useState, useCallback } from "react";
import { AxiosError } from "axios";
import { CreateTaskInput, CreateTaskState } from "../types/tasks.types";
import { createTask } from "../services/tasks.services";

export function useCreateTask(workspaceId: string) {
    const [state, setState] = useState<CreateTaskState>({
        task: null,
        loading: false,
        error: null,
    });

    const create = useCallback(
        async (data: CreateTaskInput): Promise<boolean> => {
            setState({ task: null, loading: true, error: null });
            try {
                const response = await createTask(workspaceId, data);

                setState({ task: response.task, loading: false, error: null });
                return true;
            } catch (err) {
                const axiosError = err as AxiosError<{ message: string }>;
                setState({
                    task: null,
                    loading: false,
                    error: axiosError.response?.data?.message ?? "UNKNOWN_ERROR",
                });
                return false;
            }
        },
        [workspaceId],
    );

    return { ...state, create };
}
