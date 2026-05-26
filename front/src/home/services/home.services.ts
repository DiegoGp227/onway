import { postFetcher } from "@/utils/utils";
import { WorkspaceData } from "../types/home.types";
import { WorkspacesURL } from "@/src/shared/constants/urls";

export function createWorkspace(
    data: Pick<WorkspaceData, 'name'> & Partial<Pick<WorkspaceData, 'color' | 'icon'>>,
): Promise<{ workspace: WorkspaceData }> {
    return postFetcher<{ workspace: WorkspaceData }>(WorkspacesURL.toString(), data);
}
