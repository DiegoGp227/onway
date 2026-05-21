interface ResizerProps {
    onPointerDown: (e: React.PointerEvent) => void;
}

export default function Resizer({ onPointerDown }: ResizerProps) {
    return (
        <div
            className="w-2 shrink-0 cursor-ew-resize bg-transparent hover:bg-white/4 active:bg-accent/10 transition-colors duration-150 relative flex items-center justify-center"
            onPointerDown={onPointerDown}
        >
            <div className="flex flex-col gap-1">
                <div className="w-0.75 h-0.75 rounded-full bg-white/18 hover:bg-accent/50 transition-colors duration-150" />
                <div className="w-0.75 h-0.75 rounded-full bg-white/18 hover:bg-accent/50 transition-colors duration-150" />
                <div className="w-0.75 h-0.75 rounded-full bg-white/18 hover:bg-accent/50 transition-colors duration-150" />
            </div>
        </div>
    );
}
