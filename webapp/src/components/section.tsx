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

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  alt?: boolean;
}

export function Section({ alt = false, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 md:py-28",
        alt ? "bg-cream-2/60" : "bg-cream",
        className
      )}
      {...props}
    />
  );
}

interface SectionHeadProps {
  kicker?: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
}

export function SectionHead({ kicker, title, intro, className }: SectionHeadProps) {
  return (
    <div className={cn("max-w-2xl mb-12 md:mb-16", className)}>
      {kicker ? (
        <span className="kicker-uppercase text-brand block mb-3">{kicker}</span>
      ) : null}
      <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight text-ink">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-ink/70 text-base md:text-lg leading-relaxed">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
