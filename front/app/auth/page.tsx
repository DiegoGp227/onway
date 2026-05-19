import Image from "next/image";
import LoginForm from "./components/organism/LoginForm";

export default function AuthPage() {
    return (
        <div className="flex items-center justify-center h-full flex-col">
            <div className="flex flex-col items-center justify-center">
                <Image
                    src="/main-logo.png"
                    width={300}
                    height={300}
                    alt="Onway logo"
                    style={{ width: "auto", height: "auto" }}
                    loading="eager"
                />
                <h1>OnWay</h1>
                <p>Your workspace, <span className="text-accent-teal">without noise.</span></p>
            </div>
            <div>
                <LoginForm />
            </div>
        </div>
    )
}