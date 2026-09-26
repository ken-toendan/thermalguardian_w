import * as React from "react";
import { cn } from "@/lib/utils";

interface VideoFrameProps {
  videoId?: string | null;
  src?: string | null;
  poster?: string | null;
  title: string;
  placeholder?: React.ReactNode;
  className?: string;
}

export function VideoFrame({ videoId, src, poster, title, placeholder, className }: VideoFrameProps) {
  return (
    <div
      className={cn(
        "relative w-full aspect-video rounded-2xl overflow-hidden bg-ink border border-ink/10 shadow-sm",
        className
      )}
    >
      {src ? (
        <video
          controls
          playsInline
          preload="metadata"
          poster={poster ?? undefined}
          className="absolute inset-0 h-full w-full bg-black object-contain"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : videoId ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">{placeholder}</div>
      )}
    </div>
  );
}
