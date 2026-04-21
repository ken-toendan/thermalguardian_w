import * as React from "react";

interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
  format?: (n: number) => string;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function CountUp({
  to,
  suffix = "",
  duration,
  className,
  format = (n) => n.toLocaleString("en-US"),
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = React.useState(() => format(0) + suffix);
  const hasRun = React.useRef(false);

  const dur = duration ?? (to < 10 ? 700 : to < 1000 ? 900 : 1500);

  React.useEffect(() => {
    if (hasRun.current) return;
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setDisplay(format(to) + suffix);
      hasRun.current = true;
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasRun.current) return;
          hasRun.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            const v = Math.round(to * eased);
            setDisplay(format(v) + suffix);
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(format(to) + suffix);
          };
          requestAnimationFrame(tick);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to, suffix, dur, format]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
