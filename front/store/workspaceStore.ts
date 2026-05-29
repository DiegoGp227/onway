import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WorkspaceStore {
  workspaceId: string;
  workspaceName: string;

  setWorkspaceId: (id: string) => void;
  setWorkspaceName: (name: string) => void;

  reset: () => void;
}

const initialState = {
  workspaceId: "",
  workspaceName: "",
};

export const useWorkspaceStore = create<WorkspaceStore>()(
  persist(
    (set) => ({
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
    }),
    { name: "workspace-store" },
  ),
);