export interface Quiz {
    question: string;
    options: string[];
    answer: number;
}

export interface Course {
    id: number;
    title: string;
    description: string;
    videoId: string;
    duration: string;
    quiz?: Quiz;
}

export const courses: Course[] = [
    {
        id: 1,
        title: "1강. 캔바(Canva)에서 동영상 편집하기",
        description: "디자인 툴 캔바를 활용해 누구나 쉽게 고퀄리티 영상을 만드는 방법을 배웁니다.",
        videoId: "1110798778",
        duration: "12:00",
        quiz: {
            question: "캔바 동영상 편집의 장점이 아닌 것은?",
            options: ["1. 직관적인 드래그 앤 드롭", "2. 다양한 무료 템플릿", "3. 복잡한 코딩 필요", "4. 저작권 걱정 없는 소스제공"],
            answer: 2
        }
    },
    {
        id: 2,
        title: "2강. 하일루오(Hailuo) AI 활용법",
        description: "최신 비디오 생성 AI인 하일루오를 사용하여 상상하던 영상을 현실로 구현합니다.",
        videoId: "1110798228",
        duration: "15:00",
        quiz: {
            question: "하일루오 AI를 사용할 때 가장 중요한 것은?",
            options: ["1. 고사양 그래픽카드", "2. 구체적인 프롬프트 작성", "3. 복잡한 설치 과정", "4. 유료 결제 필수"],
            answer: 1
        }
    },
    {
        id: 3,
        title: "3강. AI로 나만의 스토리북 만들기",
        description: "생성형 AI로 동화책 삽화와 스토리를 만들고 전자책으로 완성하는 프로젝트입니다.",
        videoId: "1110797449",
        duration: "20:00",
        quiz: {
            question: "스토리북 제작의 마지막 단계는?",
            options: ["1. 주제 선정", "2. 이미지 생성", "3. 스토리 구성", "4. 출판사 공유"],
            answer: 3
        }
    }
];
