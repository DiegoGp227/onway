import { X } from "lucide-react";

interface IModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

export default function Modal({ children, onClose }: IModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-bg/70 backdrop-blur-sm z-40">
            <div className="relative flex flex-col w-full max-w-lg border-2 border-[#094a4e] rounded-xl bg-[#0c2936] shadow-2xl shadow-accent/10">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 size-8 flex items-center justify-center rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all duration-200"
                >
                    <X className="size-5" />
                </button>
                <div className="p-5">{children}</div>
            </div>
        </div>
    );
}
