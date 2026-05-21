import NoteEditor from "./NoteEditor";
import SelectNotesSistem from "./NoteSelector";

interface NotesSistemProps {
    style?: React.CSSProperties;
}

export default function NotesSistem({ style }: NotesSistemProps) {
    return (
        <div className="flex flex-col overflow-hidden border-r border-white/5" style={style}>
            <SelectNotesSistem />
            <NoteEditor />
        </div>
    )
}
