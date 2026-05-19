import { useLogin } from "@/src/auth/hooks/useLogin";
import { ICredentials } from "@/src/auth/types/auth.types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICredentials>();
    const { user, error, loading, login } = useLogin();

    const router = useRouter();

    useEffect(() => {
        if (user) router.push("/");
    }, [user]);

    return (
        <form onSubmit={handleSubmit(login)} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="login-email" className="text-sm font-medium text-text-muted">Email</label>
                <input
                    id="login-email"
                    type="email"
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-bg/80 border border-border rounded-xl text-text placeholder:text-text-dim focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200"
                    {...register("email", { required: "Email is required" })}
                />
            </div>
            {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}


            <div className="flex flex-col gap-2">
                <label htmlFor="login-password" className="text-sm font-medium text-text-muted">Password</label>
                <input
                    id="login-password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 bg-bg/80 border border-border rounded-xl text-text placeholder:text-text-dim focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200"
                    {...register("password", { required: "Password is required" })}
                />
            </div>
            {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <div className="flex justify-end">
                <button type="button" className="text-sm text-accent hover:text-accent-bright transition-colors">
                    Forgot password?
                </button>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
                type="submit"
                className="w-full py-3 bg-accent hover:bg-accent-bright text-bg font-semibold rounded-lg transition-all duration-200 mt-2"
            >
                Sign in
            </button>
        </form>
    )
}