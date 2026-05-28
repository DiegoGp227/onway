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

export interface Workspace {
    id: string;
    name: string;
    color: string | null;
    icon: string | null;
    order: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface WorkspacesResponse {
    message: string;
    workspaces: Workspace[];
}
