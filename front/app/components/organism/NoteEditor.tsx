interface NoteEditorProps {
    topicActive: any
}

export default function NoteEditor({ topicActive }: NoteEditorProps) {

    return <div>{topicActive}</div>;
}
