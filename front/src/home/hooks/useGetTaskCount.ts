import useSWR from "swr";
import { getTaskCount } from "../services/tasks.services";

export default function useGetTaskCount(workspaceId: string) {
    const { data, isLoading, error, mutate } = useSWR(
        workspaceId ? ["task-count", workspaceId] : null,
        ([, id]) => getTaskCount(id),
    );

    return {
        count: data ?? { total: 0, completed: 0, pending: 0 },
        loading: isLoading,
        error: error?.message ?? null,
        refetch: () => mutate(),
    };
}
