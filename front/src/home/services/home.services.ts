import { fetcher, postFetcher } from "@/utils/utils";
import { WorkspaceData, WorkspacesResponse } from "../types/home.types";
import { WorkspacesURL } from "@/src/shared/constants/urls";

export function createWorkspace(
    data: Pick<WorkspaceData, "name"> & Partial<Pick<WorkspaceData, "color" | "icon">>,
): Promise<{ workspace: WorkspaceData }> {
    return postFetcher<{ workspace: WorkspaceData }>(WorkspacesURL.toString(), data);
}

export function getWorkspaces(): Promise<WorkspacesResponse> {
    return fetcher<WorkspacesResponse>(WorkspacesURL.toString());
}
