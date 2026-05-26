export interface WorkspaceData {
    name: string;
    color?: string;
    icon?: string;
}

export interface CreateWorkspaceState {
    workspace: WorkspaceData | null;
    loading: boolean;
    error: string | null;
}
