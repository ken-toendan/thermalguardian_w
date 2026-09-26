import * as React from "react";
import { cn } from "@/lib/utils";

interface VideoFrameProps {
  videoId?: string | null;
  title: string;
  placeholder?: React.ReactNode;
  className?: string;
}

export function VideoFrame({ videoId, title, placeholder, className }: VideoFrameProps) {
  return (
    <div
      className={cn(
        "relative w-full aspect-video rounded-2xl overflow-hidden bg-ink border border-ink/10 shadow-sm",
        className
      )}
    >
      {videoId ? (
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
