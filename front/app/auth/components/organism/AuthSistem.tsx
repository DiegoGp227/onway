"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import { AnimatePresence, motion } from "framer-motion";
import SelectAuthSystem from "../molecules/SelectSystem";
import Image from "next/image";
import SignUpForm from "./SignUpForm";

export default function AuthSistem() {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const variants = {
        enter: (toLogin: boolean) => ({
            x: toLogin ? -50 : 50,
            opacity: 0,
            filter: "blur(10px)",
        }),
        center: {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
        },
        exit: (toLogin: boolean) => ({
            x: toLogin ? 50 : -50,
            opacity: 0,
            filter: "blur(10px)",
        }),
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col gap-8 w-105 p-10 bg-surface/40 backdrop-blur-2xl border border-border/60 rounded-3xl shadow-2xl shadow-black/20 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-linear-to-b from-accent/5 to-transparent pointer-events-none" />

            <div className="flex justify-center relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <Image
                        src="/main-logo.png"
                        width={200}
                        height={200}
                        alt="Onway logo"
                        style={{ width: "auto", height: "auto" }}
                        loading="eager"
                        className="drop-shadow-lg shadow-accent/20"
                    />
                </motion.div>
            </div>

            <div className="flex flex-col gap-6 relative">
                <SelectAuthSystem isLogin={isLogin} setIsLogin={setIsLogin} />

                <AnimatePresence mode="wait" custom={isLogin}>
                    <motion.div
                        key={isLogin ? "login" : "signup"}
                        custom={isLogin}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-col gap-5"
                    >
                        <div className="flex flex-col items-center text-center space-y-1">
                            {isLogin ? (
                                <>
                                    <h2 className="font-bold text-3xl text-text tracking-tight">
                                        Welcome back
                                    </h2>
                                    <p className="text-text-muted text-sm">
                                        Sign in to continue to your workspace
                                    </p>
                                </>
                            ) : (
                                <>
                                    <h2 className="font-bold text-3xl text-text tracking-tight">
                                        Create account
                                    </h2>
                                    <p className="text-text-muted text-sm">
                                        Start building your workflow today
                                    </p>
                                </>
                            )}
                        </div>
                        {isLogin ? <LoginForm /> : <SignUpForm />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
