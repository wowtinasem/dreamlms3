"use client";
import { useState } from "react";
import confetti from "canvas-confetti";

interface QuizModalProps {
    quiz: { question: string; options: string[]; answer: number };
    onNext: () => void;
}

export default function QuizModal({ quiz, onNext }: QuizModalProps) {
    const [selected, setSelected] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleAnswer = (index: number) => {
        setSelected(index);
        // 정답 체크 (인덱스 비교)
        if (index === quiz.answer) {
            setIsCorrect(true);
            // 🎉 꽃가루 발사!
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else {
            setIsCorrect(false);
            alert("틀렸습니다. 다시 시도해보세요!");
            setSelected(null);
        }
    };

    return (
        <div className="absolute inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-2xl max-w-lg w-full shadow-2xl text-center transform transition-all">
                <h2 className="text-2xl font-bold mb-2 text-indigo-900">🎓 퀴즈 타임!</h2>
                <p className="mb-6 text-gray-600 text-lg font-medium">{quiz.question}</p>

                <div className="space-y-3">
                    {quiz.options.map((option, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleAnswer(idx)}
                            disabled={isCorrect}
                            className={`w-full p-4 rounded-xl border-2 text-left font-semibold transition-all duration-200
                ${selected === idx
                                    ? isCorrect
                                        ? "bg-green-100 border-green-500 text-green-700 shadow-md scale-105"
                                        : "bg-red-100 border-red-500 text-red-700"
                                    : "bg-white border-gray-100 hover:border-indigo-500 hover:bg-indigo-50 text-gray-700"
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                {isCorrect ? (
                    <div className="mt-8 animate-bounce">
                        <p className="text-green-600 font-bold mb-3 text-lg">정답입니다! 훌륭해요! 🎉</p>
                        <button
                            onClick={onNext}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            다음 강의로 이동 ➡️
                        </button>
                    </div>
                ) : (
                    <div className="mt-6">
                        <button
                            onClick={onNext}
                            className="text-gray-400 hover:text-gray-600 underline text-sm"
                        >
                            퀴즈 건너뛰고 다음으로 가기
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
