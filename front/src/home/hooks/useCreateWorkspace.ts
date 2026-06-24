import { useState, useCallback } from "react";
import { AxiosError } from "axios";
import { CreateWorkspaceInput, CreateWorkspaceState } from "../types/workspaces.types";
import { createWorkspace } from "../services/workspaces.services";

export function useCreateWorkspace() {
    const [state, setState] = useState<CreateWorkspaceState>({
        workspace: null,
        loading: false,
        error: null,
    });

    const create = useCallback(
        async (data: Pick<CreateWorkspaceInput, 'name'> & Partial<Pick<CreateWorkspaceInput, 'color' | 'icon'>>): Promise<boolean> => {
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