"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Github, Mail } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock Login Delay
        setTimeout(() => {
            setIsLoading(false);
            alert("로그인되었습니다! (테스트용)");
            router.push("/");
        }, 1000);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4 py-12 dark:from-zinc-900 dark:via-black dark:to-zinc-900 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <Link href="/" className="inline-block">
                        <h2 className="text-3xl font-extrabold tracking-tight text-[#5B21B6]">
                            FutureCampus
                        </h2>
                    </Link>
                    <h2 className="mt-6 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                        계정에 로그인하세요
                    </h2>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        아직 계정이 없으신가요?{" "}
                        <Link
                            href="#"
                            className="font-medium text-[#5B21B6] hover:text-[#4c1d95]"
                        >
                            회원가입하기
                        </Link>
                    </p>
                </div>

                <div className="mt-8 rounded-2xl bg-white/70 px-8 py-10 shadow-2xl backdrop-blur-xl ring-1 ring-black/5 dark:bg-zinc-800/70 dark:ring-white/10">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                            >
                                이메일 주소
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-lg border border-zinc-300/50 bg-white/50 px-3 py-2 placeholder-zinc-400 shadow-sm transition-colors focus:border-[#5B21B6] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5B21B6] dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-white dark:focus:bg-zinc-900 sm:text-sm"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                            >
                                비밀번호
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-lg border border-zinc-300/50 bg-white/50 px-3 py-2 placeholder-zinc-400 shadow-sm transition-colors focus:border-[#5B21B6] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#5B21B6] dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-white dark:focus:bg-zinc-900 sm:text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex w-full justify-center rounded-lg bg-[#5B21B6] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-[#4c1d95] hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-[#5B21B6] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? "로그인 중..." : "로그인"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-zinc-300 dark:border-zinc-700" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-transparent px-2 text-zinc-500">
                                    또는
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-lg border border-zinc-300/50 bg-white/50 px-4 py-2 text-sm font-medium text-zinc-500 shadow-sm transition-colors hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:bg-zinc-900"
                            >
                                <span className="sr-only">GitHub로 로그인</span>
                                <Github className="h-5 w-5" />
                            </button>
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-lg border border-zinc-300/50 bg-white/50 px-4 py-2 text-sm font-medium text-zinc-500 shadow-sm transition-colors hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:bg-zinc-900"
                            >
                                <span className="sr-only">Google로 로그인</span>
                                <Mail className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
