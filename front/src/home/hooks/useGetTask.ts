import useSWR from "swr";
import { getTasks } from "../services/tasks.services";
import { Task } from "../types/tasks.types";

export default function useGetTask(workspaceId: string) {
    const { data, isLoading, error, mutate } = useSWR(
        workspaceId ? ["tasks", workspaceId] : null,
        ([, id]) => getTasks(id),
    );

    return {
        tasks: data?.tasks ?? ([] as Task[]),
        loading: isLoading,
        error: error?.message ?? null,
        refetch: () => mutate(),
    };
}
