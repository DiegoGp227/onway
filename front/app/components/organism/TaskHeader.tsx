import useGetTaskCount from "@/src/home/hooks/useGetTaskCount";

interface TaskHeaderProps {
    workspaceId: string
}

export default function TaskHeader({ workspaceId }: TaskHeaderProps) {
    const { count, loading } = useGetTaskCount(workspaceId);

    return (
        <div className="flex justify-between items-center h-11 px-2 border-b-2 border-border">
            <div>
                <p className="text-text-muted">Tasks</p>
            </div>
            <div className="flex gap-4 items-center">
                <div>
                    {count.pending > 0 && (
                        <span className="bg-[#0c2936] px-2 border-2 rounded-lg border-[#094a4e] text-accent cursor-pointer">
                            {loading ? "..." : count.pending} Pending
                        </span>
                    )}
                </div>
                <button className="bg-[#0c2936] px-2 border-2 rounded-lg border-[#094a4e] text-accent cursor-pointer">
                    New Task
                </button>
            </div>
        </div>
    );
}
