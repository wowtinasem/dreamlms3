import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-md sm:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-[#5B21B6]">
            FutureCampus
          </div>
          <nav>
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#5B21B6]"
            >
              로그인
            </Link>
          </nav>
        </div>
      </header>

      {/* Main / Hero Section */}
      <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-20 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            나만의 AI 강의실, <span className="text-[#5B21B6]">퓨처캠퍼스</span>
          </h1>
          <p className="mb-10 max-w-2xl text-balance text-lg font-medium text-slate-600 sm:text-xl">
            생성형 AI부터 실무 코딩까지,
            <br className="sm:hidden" /> 하루 10분으로 성장하세요.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/course/1"
              className="rounded-full bg-[#5B21B6] px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#4c1d95] active:scale-95"
            >
              강의실로 이동
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
