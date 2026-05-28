import { create } from "zustand";

interface WorkspaceStore {
  workspaceId: string;
  workspaceName: string;

  setWorkspaceId: (id: string) => void;
  setWorkspaceName: (name: string) => void;

  reset: () => void;
}

const initialState = {
  workspaceId: "0",
  workspaceName: "",
};

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  ...initialState,

  setWorkspaceId: (id) =>
    set({
      workspaceId: id,
    }),

  setWorkspaceName: (name) =>
    set({
      workspaceName: name,
    }),

  reset: () => set(initialState),
}));