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
            <div className="shrink-0 px-7 py-4 flex items-center gap-4 border-b border-border bg-linear-to-br from-accent/12 to-transparent relative overflow-hidden">
                <div className="absolute w-70 h-70 rounded-full bg-accent/20 blur-[80px] -top-45 right-20 pointer-events-none" />
                <div className="w-11 h-11 rounded-xl shrink-0 bg-accent/13 border border-accent/22 flex items-center justify-center shadow-[0_0_18px_rgba(0,212,176,0.14)] relative z-1">
                    <SquareTerminal className="text-accent size-5" />
                </div>
                <div className="flex-1 min-w-0 relative z-1">
                    <p className="text-xl font-bold tracking-[-.4px] text-text">Development</p>
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