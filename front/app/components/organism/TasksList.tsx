export default function TasksList() {
    return (
        <div className="px-2 flex flex-col gap-2 mt-2">
            <p className="text-text-muted">Earring</p>
            <ul className="flex flex-col gap-2">
                <li
                    className="flex justify-between"
                    onClick={() => {
                        alert("Escribe bien Mono stupido");
                    }}
                >
                    <div className="flex gap-2">
                        <label className="flex items-center cursor-pointer">
                            <input type="checkbox" className="peer sr-only" />
                            <span
                                className="w-4 h-4 rounded-full border border-white/20 shrink-0 relative transition-all duration-140 cursor-pointer
                                after:content-[''] after:absolute after:w-1.25 after:h-1.25 after:rounded-full after:bg-[#34d399]
                                after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0
                                peer-checked:after:opacity-100
                                peer-checked:border-[#34d399] peer-checked:bg-[#34d399]/16 peer-checked:shadow-[0_0_7px_rgba(52,211,153,.22)]
                                hover:border-[#34d399] hover:shadow-[0_0_8px_rgba(52,211,153,.3)]"
                            />
                        </label>
                        <p>Task Name</p>
                    </div>
                    <div></div>
                    <div>
                        <span className="py-1 px-2 bg-red-950 border border-red-700 text-[#ff7575] rounded text-xs">
                            Medium
                        </span>
                    </div>
                </li>
                <li
                    className="flex justify-between"
                    onClick={() => {
                        alert("Escribe bien Mono stupido");
                    }}
                >
                    <div className="flex gap-2">
                        <label className="flex items-center cursor-pointer">
                            <input type="checkbox" className="peer sr-only" />
                            <span
                                className="w-4 h-4 rounded-full border border-white/20 shrink-0 relative transition-all duration-140 cursor-pointer
                                after:content-[''] after:absolute after:w-1.25 after:h-1.25 after:rounded-full after:bg-[#34d399]
                                after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0
                                peer-checked:after:opacity-100
                                peer-checked:border-[#34d399] peer-checked:bg-[#34d399]/16 peer-checked:shadow-[0_0_7px_rgba(52,211,153,.22)]
                                hover:border-[#34d399] hover:shadow-[0_0_8px_rgba(52,211,153,.3)]"
                            />
                        </label>
                        <p>Task Name</p>
                    </div>
                    <div></div>
                    <div>
                        <span className="py-1 px-2 bg-red-950 border border-red-700 text-[#ff7575] rounded text-xs">
                            Medium
                        </span>
                    </div>
                </li>
                <div>
                    <button
                        className="bg-[#0c2936] px-2 border-2 rounded-lg border-[#094a4e] text-accent cursor-pointer"
                        onClick={() => {
                            alert("New Tasks");
                        }}
                    >
                        New Tasks
                    </button>
                </div>
            </ul>
        </div>
    );
}
