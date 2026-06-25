import { useWorkspaceStore } from "@/store/workspaceStore";
import TaskHeader from "./TaskHeader";
import TasksList from "./TasksList";
import useGetTask from "@/src/home/hooks/useGetTask";

export default function TasksSitem() {
    const { workspaceId } = useWorkspaceStore();

    return (
        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
            <TaskHeader workspaceId={workspaceId} />
            <TasksList workspaceId={workspaceId}/>
        </div>
    );
}
