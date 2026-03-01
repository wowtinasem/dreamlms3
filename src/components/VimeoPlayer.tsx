"use client";
import { useEffect, useRef } from "react";
import Player from "@vimeo/player";

interface VimeoPlayerProps {
    videoId: string;
    onComplete?: () => void;
}

export default function VimeoPlayer({ videoId, onComplete }: VimeoPlayerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<Player | null>(null);
    const isCompletedRef = useRef(false); // 중복 실행 방지용 플래그
    const latestOnComplete = useRef(onComplete);

    // onComplete 최신값 유지 (useEffect 의존성 제거를 위해)
    useEffect(() => {
        latestOnComplete.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        if (!containerRef.current) return;

        // 비디오 ID가 변경되면 완료 상태 초기화
        isCompletedRef.current = false;

        // 기존 플레이어가 있다면 제거
        if (playerRef.current) {
            playerRef.current.destroy();
        }

        const player = new Player(containerRef.current, {
            id: Number(videoId),
            width: 640,
            responsive: true,
            autoplay: true,
            controls: true,
            title: false,       // 영상 제목 숨김
            byline: false,      // 하단 정보 숨김
            portrait: false,    // 프로필 이미지(N 아이콘) 숨김
            speed: true,
            transparent: false
        });

        playerRef.current = player;

        // 1️⃣ [확실] 영상 종료 시 무조건 실행
        player.on("ended", () => {
            console.log("🎬 이벤트 감지: ended (영상 종료)");
            if (latestOnComplete.current) latestOnComplete.current();
        });

        // 2️⃣ [보조] 진행률 90% 이상 시 한 번만 실행
        player.on("timeupdate", (data: { percent: number }) => {
            if (!isCompletedRef.current && data.percent >= 0.90) {
                console.log("🎬 이벤트 감지: 90% 도달 (미리 완료 처리)");
                isCompletedRef.current = true;
                if (latestOnComplete.current) latestOnComplete.current();
            }
        });

        return () => {
            player.destroy();
            playerRef.current = null;
        };
    }, [videoId]); // videoId가 바뀌면 플레이어 재설정

    return (
        <div className="w-full h-full bg-black rounded-lg overflow-hidden shadow-lg relative group">
            {/* 비디오 컨테이너 */}
            <div ref={containerRef} className="w-full h-full" />

            {/* (참고) 테스트 버튼은 제거되었습니다. 이제 영상이 끝나면 자동으로 넘어갑니다. */}
        </div>
    );
}
