import { SquarePlus } from "lucide-react";
import Image from "next/image";

export default function Header() {
    return (
        <header className="flex bg-black/25 w-full">
            <div className="flex justify-center items-center gap-5 px-5">
                <div>
                    <Image
                        src="/main-logo.png"
                        width={100}
                        height={100}
                        alt="Onway logo"
                        style={{ width: "auto", height: "auto" }}
                        loading="eager"
                        className="drop-shadow-lg shadow-accent/20"
                    />

                </div>
                <div className="flex gap-10">
                    <button className="bg-[#0c2936] px-2 py-1 border-2 rounded-lg border-[#094a4e] text-accent flex gap-2">Develoment <span className="px-2 rounded-full bg-[#0a4147]">3</span></button>
                    <button className="text-text-muted px-2 py-1 border-2 rounded-lg border-transparent cursor-pointer hover:border-[#094a4e] hover:bg-[#0c2936] transition-all duration-300 hover:text-accent">Develoment</button>
                    <button className="text-text-muted px-2 py-1 border-2 rounded-lg border-transparent cursor-pointer hover:border-[#094a4e] hover:bg-[#0c2936] transition-all duration-300 hover:text-accent">Develoment</button>
                    <button><SquarePlus className="text-text-muted" /></button>
                </div>
            </div>
            <div></div>
        </header>
    )
}