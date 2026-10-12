import * as React from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang } from "@/hooks/use-lang";
import { Button } from "@/components/ui/button";
import { content, t } from "@/content/i18n";

// On phones Bilibili's embed swaps itself for an older mobile player (the same user-agent test as its
// player.html), and Bilibili's anti-bot check refuses that player's video lookup. Phones get a link instead.
const isPhone = typeof navigator !== "undefined" && /AppleWebKit.*Mobile/.test(navigator.userAgent);

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
// China: Bilibili (a "Watch on Bilibili" link on phones) → MP4 → placeholder. Never YouTube, which is blocked in mainland China.
export function VideoFrame({ videoId, bilibiliId, src, poster, title, placeholder, className }: VideoFrameProps) {
  const { edition, lang } = useLang();
  const platformId = edition === "cn" ? bilibiliId : videoId;

  let player: React.ReactNode;
  if (platformId && edition === "cn" && isPhone) {
    player = (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">
        {poster ? (
          <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        ) : (
          <b className="relative font-display text-[17px] text-cream">{title}</b>
        )}
        <Button asChild variant="brand" size="md" className="relative">
          <a href={`https://www.bilibili.com/video/${platformId}/`} target="_blank" rel="noopener noreferrer">
            {t(content.video.watchOnBilibili, lang)}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      </div>
    );
  } else if (platformId && edition === "cn") {
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
