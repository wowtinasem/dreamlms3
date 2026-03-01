"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { courses } from "@/lib/mockData";
import VimeoPlayer from "@/components/VimeoPlayer";
import QuizModal from "@/components/QuizModal";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function CoursePage() {
    const params = useParams();
    const router = useRouter();

    // URL에서 ID 가져오기 (문자열 -> 숫자 변환)
    const courseId = Number(params.id);
    const course = courses.find((c) => c.id === courseId);

    // 다음 강의 ID 계산
    const nextCourseId = courseId + 1;
    const isLastCourse = nextCourseId > courses.length;

    // 상태 관리
    const [showQuiz, setShowQuiz] = useState(false);

    // ⭐ 중요: 강의 ID가 바뀔 때마다 퀴즈 상태를 초기화(리셋)합니다.
    useEffect(() => {
        setShowQuiz(false);
    }, [courseId]);

    // 강의 데이터가 없을 경우 처리
    if (!course) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">강의를 찾을 수 없습니다.</h1>
                <Link href="/" className="mt-4 text-blue-500 underline">메인으로 돌아가기</Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* 상단 헤더 */}
            <header className="h-16 bg-white border-b flex items-center px-6 justify-between flex-shrink-0">
                <div className="flex items-center gap-4">
                    <Link href="/" className="p-2 hover:bg-gray-100 rounded-full">
                        <ChevronLeft size={24} />
                    </Link>
                    <h1 className="font-bold text-lg truncate">{course.title}</h1>
                </div>
                <div className="text-sm text-gray-500">
                    {showQuiz ? "✅ 학습 완료" : "▶️ 학습 중..."}
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
                {/* 왼쪽: 플레이어 및 강의 설명 영역 (스크롤 가능) */}
                <div className="flex-1 overflow-y-auto bg-gray-50 flex flex-col">
                    {/* 비디오 배경 (검정) */}
                    <div className="bg-black w-full flex items-center justify-center p-4 md:p-8">
                        <div className="w-full max-w-5xl aspect-video relative">

                            <VimeoPlayer
                                videoId={course.videoId}
                                onComplete={() => {
                                    console.log("✅ 강의 완료! 퀴즈 오픈!");
                                    setShowQuiz(true);
                                }}
                            />

                            {/* 퀴즈 모달 (조건부 렌더링) */}
                            {showQuiz && course.quiz && (
                                <QuizModal
                                    quiz={course.quiz}
                                    onNext={() => {
                                        if (isLastCourse) {
                                            alert("🏆 축하합니다! 모든 코스를 완주하셨습니다!");
                                            router.push("/");
                                        } else {
                                            router.push(`/course/${nextCourseId}`);
                                        }
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    {/* 강의 설명 영역 */}
                    <div className="max-w-5xl w-full mx-auto p-6 md:p-10 space-y-6">
                        <div className="border-b border-gray-200 pb-6">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {course.description}
                            </p>
                        </div>

                        {/* 추가 콘텐츠 영역 예시 */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">📝 강의 노트</h3>
                            <div className="prose prose-slate max-w-none text-gray-600">
                                <p>이 강의에서 다루는 주요 핵심 내용은 다음과 같습니다.</p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li>강의의 핵심 개념 이해하기</li>
                                    <li>실무 적용 사례 분석</li>
                                    <li>따라하기 실습 진행</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 오른쪽: 커리큘럼 사이드바 */}
                <div className="w-full md:w-80 bg-white border-l flex flex-col overflow-y-auto">
                    <div className="p-4 font-bold text-lg border-b">커리큘럼</div>
                    <ul className="flex-1 p-4 space-y-2">
                        {courses.map((c) => {
                            const isActive = c.id === courseId;
                            const isCompleted = c.id < courseId;

                            return (
                                <Link key={c.id} href={`/course/${c.id}`}>
                                    <li className={`p-3 rounded-xl transition-all cursor-pointer border ${isActive
                                        ? "bg-indigo-50 border-indigo-500 shadow-sm"
                                        : "bg-white border-gray-100 hover:bg-gray-50"
                                        }`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isActive || isCompleted
                                                ? "bg-indigo-600 text-white"
                                                : "bg-gray-200 text-gray-500"
                                                }`}>
                                                {isCompleted ? "✓" : c.id}
                                            </div>
                                            <div className="flex-1">
                                                <p className={`text-sm font-medium ${isActive ? "text-indigo-900" : "text-gray-700"}`}>
                                                    {c.title}
                                                </p>
                                                <p className="text-xs text-gray-400 mt-1">{c.duration}</p>
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
