"use client";

import { SquareTerminal } from "lucide-react";
import { useState, useCallback } from "react";
import NotesSistem from "./NotesSistem";
import TasksSitem from "./TasksSitem";
import Resizer from "../molecules/Resizer";

export default function HomeSistem() {
    const [notesWidth, setNotesWidth] = useState(52);

    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        e.preventDefault();
        const target = e.currentTarget;
        target.setPointerCapture(e.pointerId);

        const container = target.parentElement;
        if (!container) return;

        const onMove = (e: PointerEvent) => {
            const rect = container.getBoundingClientRect();
            const pct = Math.min(Math.max(((e.clientX - rect.left) / rect.width) * 100, 20), 80);
            setNotesWidth(pct);
        };

        const onUp = () => {
            target.removeEventListener("pointermove", onMove as EventListener);
            target.removeEventListener("pointerup", onUp as EventListener);
        };

        target.addEventListener("pointermove", onMove as EventListener);
        target.addEventListener("pointerup", onUp as EventListener);
    }, []);

    return (
        <>
            <div className="flex w-full border-t border-b border-border py-4">
                <div>
                    <SquareTerminal />
                </div>
                <div>
                    <p>Develoment</p>
                </div>
            </div>
            <main className="flex flex-1 min-h-0 overflow-hidden">
                <NotesSistem style={{ width: `${notesWidth}%`, flexShrink: 0 }} />
                <Resizer onPointerDown={handlePointerDown} />
                <TasksSitem />
            </main>
        </>
    )
}
