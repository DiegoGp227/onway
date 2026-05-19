import AuthSistem from "./components/organism/AuthSistem";

export default function AuthPage() {
    return (
        <div className="flex items-center justify-center h-full w-full min-h-0 relative">
            <div className="absolute inset-0 bg-linear-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
            <AuthSistem />
        </div>
    )
}