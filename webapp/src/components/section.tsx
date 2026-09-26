import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)}
      {...props}
    />
  );
}

type SectionTone = "cream" | "white" | "navy";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
}

export function Section({ tone = "cream", className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 md:py-28",
        tone === "navy" ? "bg-ink text-cream" : tone === "white" ? "bg-white" : "bg-cream",
        className
      )}
      {...props}
    />
  );
}

interface SectionHeadProps {
  kicker?: React.ReactNode;
  chapter?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: SectionTone;
  className?: string;
}

export function SectionHead({ kicker, chapter, title, intro, tone = "cream", className }: SectionHeadProps) {
  const navy = tone === "navy";
  return (
    <div className={cn("max-w-2xl mb-12 md:mb-16", className)}>
      {kicker ? (
        <span className={cn("kicker-uppercase block mb-3", navy ? "text-brand" : "text-brand-700")}>
          {chapter ? `${chapter} · ` : null}
          {kicker}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-display text-[1.75rem] md:text-[2.5rem] leading-[1.12] font-extrabold",
          navy ? "text-cream" : "text-ink"
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p className={cn("mt-5 text-base md:text-lg leading-relaxed", navy ? "text-cream/75" : "text-ink/70")}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
