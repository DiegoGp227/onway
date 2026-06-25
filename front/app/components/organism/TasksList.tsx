import { useState } from "react";
import { mutate } from "swr";
import useGetTask from "@/src/home/hooks/useGetTask";
import { useUpdateTask } from "@/src/home/hooks/useUpdateTask";
import { TaskItem } from "../molecules/TaksItem";
import Modal from "../molecules/Modal";
import TaskForm from "./TaskForm";

interface TasksListProps {
    workspaceId: string
}

export default function TasksList({ workspaceId }: TasksListProps) {
    const { error, loading, tasks, refetch } = useGetTask(workspaceId);
    const { toggle } = useUpdateTask(workspaceId);
    const [showModal, setShowModal] = useState(false);

    const handleToggle = async (taskId: string, completed: boolean) => {
        await toggle(taskId, { completed });
        mutate(["task-count", workspaceId]);
        refetch();
    };

    if (loading) {
        return (
            <div className="px-2 flex flex-col gap-2 mt-2">
                <p className="text-text-muted">Loading tasks...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="px-2 flex flex-col gap-2 mt-2">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    if (tasks.length === 0) {
        return (
            <div className="px-2 flex flex-col gap-2 mt-2">
                <p className="text-text-muted">No tasks yet. Create one below.</p>
                <button
                    className="self-start bg-[#0c2936] px-2 border-2 rounded-lg border-[#094a4e] text-accent cursor-pointer"
                    onClick={() => setShowModal(true)}
                >
                    New Task
                </button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <TaskForm onSuccess={() => { setShowModal(false); mutate(["task-count", workspaceId]); refetch(); }} />
                    </Modal>
                )}
            </div>
        );
    }

    const pendingCount = tasks.filter((t) => !t.completed).length;

    return (
        <div className="px-2 flex flex-col gap-2 mt-2">
            <p className="text-text-muted">
                {pendingCount > 0 ? `${pendingCount} pending` : "All done"}
            </p>
            <ul className="flex flex-col gap-1">
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onToggle={handleToggle} />
                ))}
            </ul>
            <button
                className="self-start bg-[#0c2936] px-2 border-2 rounded-lg border-[#094a4e] text-accent cursor-pointer"
                onClick={() => setShowModal(true)}
            >
                New Task
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <TaskForm onSuccess={() => { setShowModal(false); mutate(["task-count", workspaceId]); refetch(); }} />
                </Modal>
            )}
        </div>
    );
}
