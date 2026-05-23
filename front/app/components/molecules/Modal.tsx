import { X } from "lucide-react";

interface IModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

export default function Modal({ children, onClose }: IModalProps) {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-[rgba(20,20,20,0.7)] backdrop-blur-sm z-40`}
        >
            <div className="relative flex flex-col p-4 max-w-[85vw] max-h-[85vh] overflow-auto rounded bg-white">
                <div className={`flex justify-end h-15 `}>
                    <button onClick={onClose}>
                        <X
                            className={`text-main-black text-2xl border border-main-black rounded`}
                        />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}
