import TaskHeader from "./TaskHeader";
import TasksList from "./TasksList";

export default function TasksSitem() {
    return (
        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
            <TaskHeader />
            <TasksList />
        </div>
    )
}
