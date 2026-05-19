export default function SignUpForm() {
    return (
        <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="signup-email" className="text-sm font-medium text-text-muted">Email</label>
                <input 
                    id="signup-email"
                    type="email" 
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-text placeholder:text-text-dim focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="signup-password" className="text-sm font-medium text-text-muted">Password</label>
                <input 
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-bg border border-border rounded-lg text-text placeholder:text-text-dim focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                />
            </div>

            <button 
                type="submit"
                className="w-full py-3 bg-accent hover:bg-accent-bright text-bg font-semibold rounded-lg transition-all duration-200 mt-2"
            >
                Create account
            </button>

            <p className="text-xs text-text-muted text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
        </form>
    )
}