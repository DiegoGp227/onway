import { useGetTopics } from "@/src/home/hooks/useGetTopics";
import { useWorkspaceStore } from "@/store/workspaceStore";

interface SelectNotesSistemProps {
    topicActive: string;
    setTopicActive: React.Dispatch<React.SetStateAction<string>>;
}

export default function SelectNotesSistem({ topicActive, setTopicActive }: SelectNotesSistemProps) {
    const { workspaceId } = useWorkspaceStore();

    const { loading, error, refetch, topics } = useGetTopics(workspaceId)

    if (loading) return <div className="flex gap-4 py-2 px-5 bg-black/25"><span className="text-text-muted">Loading...</span></div>
    if (error) return <div className="flex gap-4 py-2 px-5 bg-black/25"><span className="text-text-muted">{error}</span></div>

    return (
        <>
            <div className="flex gap-4 py-2 px-5 bg-black/25">
                {topics && topics.length > 0 ? topics.map((topic) => (
                    <button
                        key={topic.id}
                        onClick={() => setTopicActive(topic.id)}
                        className={
                            topicActive === topic.id
                                ? "bg-[#0c2936] px-2 py-1 border-2 rounded-lg border-[#094a4e] text-accent flex gap-2"
                                : "text-text-muted px-2 py-1 border-2 rounded-lg border-transparent cursor-pointer hover:border-[#094a4e] hover:bg-[#0c2936] transition-all duration-300 hover:text-accent"
                        }
                    >
                        {topic.title}
                    </button>
                )) : <div className="text-text-muted px-2 py-1">There are no topics</div>}

            </div >
        </>
    );
}
