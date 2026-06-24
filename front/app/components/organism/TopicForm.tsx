import { useCreateTopic } from "@/src/home/hooks/useCreateTopic";
import { useWorkspaceStore } from "@/store/workspaceStore";
import { useForm } from "react-hook-form"

interface topicDto {
    title: string;
}

interface TopicFormProps {
    onSuccess?: () => void;
}


export default function TopicForm({ onSuccess }: TopicFormProps) {
    const { register, handleSubmit, formState: { errors }, } = useForm<topicDto>()
    const { workspaceId } = useWorkspaceStore();
    const { create, error, loading } = useCreateTopic(workspaceId);


    const onSubmit = async (data: topicDto) => {
        const success = await create({ title: data.title });
        if (success) onSuccess?.();
    };

    if (error) {
        return <div className="flex gap-4 py-2 px-5 bg-black/25"><span className="text-text-muted">{error}</span></div>;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <p className="text-center font-semibold text-lg text-text">New topic</p>
            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-text-muted">Title</label>
                <input
                    type="text"
                    placeholder="My workspace"
                    className="w-full px-4 py-3 bg-bg/80 border border-border rounded-xl text-text placeholder:text-text-dim focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200"
                    {...register("title", { required: "Title is required" })}
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>

            <button
                disabled={loading}
                className="w-full py-3 bg-accent hover:bg-accent-bright disabled:opacity-50 disabled:cursor-not-allowed text-bg font-semibold rounded-xl transition-all duration-200 mt-1"
            >
                {loading ? "Creating..." : "Create Topic"}
                Send
            </button>
        </form>
    )
}