import * as React from "react";
import { cn } from "@/lib/utils";
import { useLang } from "@/hooks/use-lang";

interface VideoFrameProps {
  /** YouTube id, used by the international version. */
  videoId?: string | null;
  /** Bilibili BV id, used by the China version. */
  bilibiliId?: string | null;
  /** Self-hosted MP4, used by either version when its platform id is missing. */
  src?: string | null;
  poster?: string | null;
  title: string;
  placeholder?: React.ReactNode;
  className?: string;
}

const iframeClass = "absolute inset-0 w-full h-full border-0";

// International: YouTube → MP4 → placeholder.
// China: Bilibili → MP4 → placeholder. Never YouTube, which is blocked in mainland China.
export function VideoFrame({ videoId, bilibiliId, src, poster, title, placeholder, className }: VideoFrameProps) {
  const { edition } = useLang();
  const platformId = edition === "cn" ? bilibiliId : videoId;

  let player: React.ReactNode;
  if (platformId && edition === "cn") {
    player = (
      <iframe
        src={`https://player.bilibili.com/player.html?bvid=${platformId}&autoplay=0&high_quality=1&danmaku=0`}
        title={title}
        allow="fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className={iframeClass}
      />
    );
  } else if (platformId) {
    player = (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${platformId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
        className={iframeClass}
      />
    );
  } else if (src) {
    player = (
      <video
        controls
        playsInline
        preload="metadata"
        poster={poster ?? undefined}
        className="absolute inset-0 h-full w-full bg-black object-contain"
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  } else {
    player = <div className="absolute inset-0 flex items-center justify-center">{placeholder}</div>;
  }

  return (
    <div
      className={cn(
        "relative w-full aspect-video rounded-2xl overflow-hidden bg-ink border border-ink/10 shadow-sm",
        className
      )}
    >
      {player}
    </div>
  );
}
