import { useWorkspaceStore } from "@/store/workspaceStore";

interface SelectNotesSistemProps {
    setTopicActive: React.Dispatch<React.SetStateAction<string>>;
}

export default function SelectNotesSistem({ setTopicActive }: SelectNotesSistemProps) {
    const { workspaceId } = useWorkspaceStore();


    // usar el state de zustand para hacer un push al back con el workpace para obtener los topicos y ponerlos aqui para que seleccionen id para el editor 
    return (
        <>
            <div className="flex gap-4 py-2 px-5 bg-black/25">
                <button className="bg-[#0c2936] px-2 border-2 rounded-lg border-[#094a4e] text-accent flex gap-2">
                    Spring 01
                </button>
                <button className="text-text-muted px-2 border-2 rounded-lg border-transparent cursor-pointer hover:border-[#094a4e] hover:bg-[#0c2936] transition-all duration-300 hover:text-accent">
                    Bugs
                </button>
                <button className="text-text-muted px-2 border-2 rounded-lg border-transparent cursor-pointer hover:border-[#094a4e] hover:bg-[#0c2936] transition-all duration-300 hover:text-accent">
                    Arquitectura
                </button>
                <button className="text-text-muted px-2 border-2 rounded-lg border-dashed cursor-pointer hover:border-[#094a4e] hover:bg-[#0c2936] transition-all duration-300 hover:text-accent">
                    New Note
                </button>
            </div>
        </>
    );
}
