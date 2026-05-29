import useSWR from "swr";
import { Workspace } from "../types/workspaces.types";
import { getWorkspaces } from "../services/workspaces.services";

export function useGetWorkspaces() {
    const { data, isLoading, error, mutate } = useSWR(
        "workspaces", // key → SWR cachea con este nombre
        getWorkspaces, // fetcher → el service que hace el GET
    );

    return {
        workspaces: data?.workspaces ?? ([] as Workspace[]),
        loading: isLoading,
        error: error?.message ?? null,
        refetch: () => mutate(),
    };
}
