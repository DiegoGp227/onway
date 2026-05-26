import { useState, useCallback } from "react";
import { AxiosError } from "axios";
import { WorkspaceData, CreateWorkspaceState } from "../types/home.types";
import { createWorkspace } from "../services/home.services";

export function useCreateWorkspace() {
    const [state, setState] = useState<CreateWorkspaceState>({
        workspace: null,
        loading: false,
        error: null,
    });

    const create = useCallback(
        async (data: Pick<WorkspaceData, 'name'> & Partial<Pick<WorkspaceData, 'color' | 'icon'>>): Promise<boolean> => {
            setState({ workspace: null, loading: true, error: null });
            try {
                const response = await createWorkspace(data);

                setState({ workspace: response.workspace, loading: false, error: null });
                return true;
            } catch (err) {
                const axiosError = err as AxiosError<{ message: string }>;
                setState({
                    workspace: null,
                    loading: false,
                    error: axiosError.response?.data?.message ?? "UNKNOWN_ERROR",
                });
                return false;
            }
        },
        [],
    );

    return { ...state, create };
}