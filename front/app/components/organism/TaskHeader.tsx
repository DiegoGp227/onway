export default function TaskHeader() {
    return (
        <div className="flex justify-between items-center h-11 px-2">
            <div>
                <p className="text-text-muted">Tasks</p>
            </div>
            <div className="flex gap-4 items-center">
                <div><span className="bg-[#0c2936] px-2 border-2 rounded-lg border-[#094a4e] text-accent cursor-pointer">3 earring</span></div>
                <button className="bg-[#0c2936] px-2 border-2 rounded-lg border-[#094a4e] text-accent cursor-pointer">New Task</button>
            </div>
        </div>
    )
}