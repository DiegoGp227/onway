interface ISelectAuthSystemProps {
  setIsLogin: (state: boolean) => void;
  isLogin: boolean;
}

export default function SelectAuthSystem({
  setIsLogin,
  isLogin,
}: ISelectAuthSystemProps) {
  return (
    <div className="bg-bg border border-border p-1 rounded-xl w-full flex">
      <button
        onClick={() => setIsLogin(true)}
        className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
          isLogin
            ? "bg-surface text-accent shadow-lg shadow-accent/5"
            : "text-text-muted hover:text-text"
        }`}
      >
        Sign in
      </button>
      <button
        onClick={() => setIsLogin(false)}
        className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer ${
          !isLogin
            ? "bg-surface text-accent shadow-lg shadow-accent/5"
            : "text-text-muted hover:text-text"
        }`}
      >
        Register
      </button>
    </div>
  );
}
