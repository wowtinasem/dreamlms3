export interface Lecture {
    id: string;
    title: string;
    duration: string;
    videoId: number;
}

export interface Section {
    id: string;
    title: string;
    lectures: Lecture[];
}

export const courseCurriculum: Section[] = [
    {
        id: "section-1",
        title: "섹션 1: GenAI의 이해",
        lectures: [
            { id: "1-1", title: "강의 소개 및 오리엔테이션", duration: "05:20", videoId: 76979871 },
            { id: "1-2", title: "LLM의 작동 원리", duration: "12:45", videoId: 76979871 },
            { id: "1-3", title: "주요 AI 모델 비교", duration: "15:10", videoId: 76979871 },
        ],
    },
    {
        id: "section-2",
        title: "섹션 2: 프롬프트 엔지니어링 기초",
        lectures: [
            { id: "2-1", title: "효과적인 프롬프트 작성 3원칙", duration: "18:30", videoId: 76979871 },
            { id: "2-2", title: "Zero-shot vs Few-shot Learning", duration: "14:20", videoId: 76979871 },
            { id: "2-3", title: "실습: 마케팅 카피 작성하기", duration: "20:00", videoId: 76979871 },
        ],
    },
];
