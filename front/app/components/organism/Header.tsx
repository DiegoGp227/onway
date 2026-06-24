"use client";

import { SquarePlus } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Modal from "../molecules/Modal";
import WorkspaceForm from "./WorkspaceForm";
import { useGetWorkspaces } from "@/src/home/hooks/useGetWorkspaces";
import { useWorkspaceStore } from "@/store/workspaceStore";

export default function Header() {
    const [newWorkSpace, setNewWorkSpace] = useState<boolean>(false);
    const { workspaces, loading, error, refetch } = useGetWorkspaces();
    const { workspaceId, setWorkspaceId, setWorkspaceName } = useWorkspaceStore();

    useEffect(() => {
        if (workspaces.length > 0 && !workspaceId) {
            setWorkspaceId(workspaces[0].id);
            setWorkspaceName(workspaces[0].name);
        }
    }, [workspaces, workspaceId, setWorkspaceId, setWorkspaceName]);

    return (
        <>
            <header className="flex bg-black/25 w-full">
                <div className="flex justify-center items-center gap-5 px-5">
                    <div>
                        <Image
                            src="/main-logo.png"
                            width={100}
                            height={100}
                            alt="Onway logo"
                            style={{ width: "auto", height: "auto" }}
                            loading="eager"
                            className="drop-shadow-lg shadow-accent/20"
                        />
                    </div>
                    <div className="flex gap-3">
                        {loading ? (
                            <div className="flex gap-2">
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className="w-20 h-8 rounded-lg bg-[#0c2936] animate-pulse"
                                    />
                                ))}
                            </div>
                        ) : error ? (
                            <span className="text-red-400 text-sm">{error}</span>
                        ) : (
                            workspaces.map((workspace) => (
                                <button
                                    key={workspace.id}
                                    onClick={() => {
                                        setWorkspaceId(workspace.id);
                                        setWorkspaceName(workspace.name);
                                    }}
                                    className={
                                        workspaceId === workspace.id
                                            ? "bg-[#0c2936] px-2 py-1 border-2 rounded-lg border-[#094a4e] text-accent flex gap-2"
                                            : "text-text-muted px-2 py-1 border-2 rounded-lg border-transparent cursor-pointer hover:border-[#094a4e] hover:bg-[#0c2936] transition-all duration-300 hover:text-accent"
                                    }
                                >
                                    {workspace.name}
                                </button>
                            ))
                        )}
                        <button onClick={() => setNewWorkSpace(true)}>
                            <SquarePlus className="text-text-muted hover:text-accent transition-all duration-300" />
                        </button>
                    </div>
                </div>
            </header>

            {newWorkSpace && (
                <Modal onClose={() => setNewWorkSpace(false)}>
                    <WorkspaceForm onSuccess={() => { setNewWorkSpace(false); refetch(); }} />
                </Modal>
            )}
        </>
    );
}
