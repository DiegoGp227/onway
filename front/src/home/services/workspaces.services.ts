import { fetcher, postFetcher } from "@/utils/utils";
import { CreateWorkspaceInput, WorkspacesResponse } from "../types/workspaces.types";
import { WorkspacesURL } from "@/src/shared/constants/urls";

export function createWorkspace(
    data: Pick<CreateWorkspaceInput, "name"> & Partial<Pick<CreateWorkspaceInput, "color" | "icon">>,
): Promise<{ workspace: CreateWorkspaceInput }> {
    return postFetcher<{ workspace: CreateWorkspaceInput }>(WorkspacesURL.toString(), data);
}

export function getWorkspaces(): Promise<WorkspacesResponse> {
    return fetcher<WorkspacesResponse>(WorkspacesURL.toString());
}
