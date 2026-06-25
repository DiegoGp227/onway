import { useState, useCallback } from "react";
import { AxiosError } from "axios";
import { UpdateTaskInput } from "../types/tasks.types";
import { updateTask } from "../services/tasks.services";

export function useUpdateTask(workspaceId: string) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const toggle = useCallback(
        async (taskId: string, data: UpdateTaskInput): Promise<boolean> => {
            setLoading(true);
            setError(null);
            try {
                await updateTask(workspaceId, taskId, data);
                return true;
            } catch (err) {
                const axiosError = err as AxiosError<{ message: string }>;
                setError(axiosError.response?.data?.message ?? "UNKNOWN_ERROR");
                return false;
            } finally {
                setLoading(false);
            }
        },
        [workspaceId],
    );

    return { toggle, loading, error };
}
