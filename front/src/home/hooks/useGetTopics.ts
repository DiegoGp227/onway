import useSWR from "swr";
import { getTopics } from "../services/topics.services";
import { Topic } from "../types/topics.types";

export function useGetTopics(workspaceId: string) {
    const { data, isLoading, error, mutate } = useSWR(
        workspaceId ? ["topics", workspaceId] : null,
        ([, id]) => getTopics(id),
    );

    return {
        topics: data?.topics ?? ([] as Topic[]),
        loading: isLoading,
        error: error?.message ?? null,
        refetch: () => mutate(),
    };
}
