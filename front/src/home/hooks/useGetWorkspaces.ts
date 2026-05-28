import { useState, useEffect, useCallback } from "react";
import { AxiosError } from "axios";
import { Workspace, WorkspacesResponse } from "../types/home.types";
import { getWorkspaces } from "../services/home.services";

interface GetWorkspacesState {
    workspaces: Workspace[];
    loading: boolean;
    error: string | null;
}

export function useGetWorkspaces() {
    const [state, setState] = useState<GetWorkspacesState>({
        workspaces: [],
        loading: true,
        error: null,
    });

    const fetch = useCallback(async () => {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        try {
            const response = await getWorkspaces();

            setState({ workspaces: response.workspaces, loading: false, error: null });
        } catch (err) {
            const axiosError = err as AxiosError<{ message: string }>;
            setState({
                workspaces: [],
                loading: false,
                error: axiosError.response?.data?.message ?? "UNKNOWN_ERROR",
            });
        }
    }, []);

    useEffect(() => {
        fetch();
    }, [fetch]);

    return { ...state, refetch: fetch };
}
