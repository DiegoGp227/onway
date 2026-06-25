import { Task } from "@/src/home/types/tasks.types";

interface TaskItemProps {
    task: Task;
    onToggle: (taskId: string, completed: boolean) => void;
}

export function TaskItem({ task, onToggle }: TaskItemProps) {
    return (
        <li className="flex justify-between px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors">
            <label className="flex items-center gap-2 cursor-pointer flex-1 min-w-0">
                <input type="checkbox" className="peer sr-only" checked={task.completed} onChange={() => onToggle(task.id, !task.completed)} />
                <span
                    className="size-4 rounded-full border border-white/20 shrink-0 relative transition-all duration-140 cursor-pointer
                    after:content-[''] after:absolute after:inset-1/2 after:-translate-x-1/2 after:-translate-y-1/2
                    after:size-1.5 after:rounded-full after:bg-[#34d399] after:opacity-0
                    peer-checked:after:opacity-100
                    peer-checked:border-[#34d399] peer-checked:bg-[#34d399]/16 peer-checked:shadow-[0_0_7px_rgba(52,211,153,.22)]
                    hover:border-[#34d399] hover:shadow-[0_0_8px_rgba(52,211,153,.3)]"
                />
                <span className={`truncate ${task.completed ? "line-through text-text-muted" : ""}`}>
                    {task.title}
                </span>
            </label>
            <span className={`py-0.5 px-2 rounded text-xs font-medium ${
                task.completed
                    ? "bg-green-950 border border-green-700 text-green-400"
                    : "bg-red-950 border border-red-700 text-[#ff7575]"
            }`}>
                {task.completed ? "Done" : "Pending"}
            </span>
        </li>
    );
}