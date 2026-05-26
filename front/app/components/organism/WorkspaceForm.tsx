"use client";

import { useCreateWorkspace } from "@/src/home/hooks/useCreateWorkspace";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface WorkspaceDto {
    title: string;
    color: string;
    icon: string;
}

interface Props {
    onSuccess?: () => void;
}

export default function WorkspaceForm({ onSuccess }: Props) {
    const colorInputRef = useRef<HTMLInputElement>(null);
    const [color, setColor] = useState("#00d4b0");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<WorkspaceDto>();

    const { create, error, loading } = useCreateWorkspace();

    const onSubmit = async (data: WorkspaceDto) => {
        const success = await create({ name: data.title, color, icon: data.icon });
        if (success) onSuccess?.();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <p className="text-center font-semibold text-lg text-text">New workspace</p>

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

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-text-muted">Color</label>
                <input
                    ref={colorInputRef}
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="sr-only"
                />
                <button
                    type="button"
                    onClick={() => colorInputRef.current?.click()}
                    className="flex items-center gap-3 w-full px-4 py-3 bg-bg/80 border border-border rounded-xl cursor-pointer hover:border-accent/50 transition-all duration-200"
                >
                    <span
                        className="size-6 rounded-full border border-white/10 shrink-0"
                        style={{ background: color }}
                    />
                    <span className="text-sm text-text font-mono uppercase">{color}</span>
                </button>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-text-muted">Icon</label>
                <input
                    type="text"
                    placeholder="Icono"
                    className="w-full px-4 py-3 bg-bg/80 border border-border rounded-xl text-text placeholder:text-text-dim focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200"
                    {...register("icon")}
                />
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-accent hover:bg-accent-bright disabled:opacity-50 disabled:cursor-not-allowed text-bg font-semibold rounded-xl transition-all duration-200 mt-1"
            >
                {loading ? "Creating..." : "Create workspace"}
            </button>
        </form>
    );
}
