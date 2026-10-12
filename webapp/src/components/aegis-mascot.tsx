import * as React from "react";
import { useReducedMotion } from "motion/react";
import type { AnimationItem } from "lottie-web";
import { cn } from "@/lib/utils";

// The Aegis mascot, played from Lottie files baked from its SVG rig (public/assets/mascot/, orange theme).
type Clip = "appear" | "idle" | "investigate" | "maintain" | "elevate";

// Frame shown when the visitor prefers reduced motion: the pose each clip settles on.
const STILL: Record<Clip, number> = { appear: 36, idle: 0, investigate: 0, maintain: 48, elevate: 65 };

const clips = new Map<Clip, Promise<unknown>>();
function loadClip(clip: Clip) {
  if (!clips.has(clip)) clips.set(clip, fetch(`assets/mascot/aegis-${clip}.json`).then((r) => r.json()));
  return clips.get(clip)!;
}
const loadPlayer = () => import("lottie-web/build/player/lottie_light").then((m) => m.default);

interface AegisMascotProps {
  clip: Clip;
  /** A clip to loop once `clip` has finished, e.g. appear, then idle. */
  then?: Clip;
  /** Loop `clip` itself. One-shot clips play once, the first time they are seen, and hold their last frame. */
  loop?: boolean;
  className?: string;
}

/** Decorative. Loads as it nears the viewport, plays once half visible, and pauses loops off screen. */
export function AegisMascot({ clip, then, loop = false, className }: AegisMascotProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let anim: AnimationItem | null = null;
    let looping = false;
    let played = false;
    let visible = false;
    let cancelled = false;

    const playIfDue = () => {
      if (!anim || !visible) return;
      if (looping) anim.play();
      else if (!played) {
        played = true;
        anim.play();
      }
    };

    async function mount(c: Clip, opts: { loop: boolean; still: boolean }) {
      const [lottie, data] = await Promise.all([loadPlayer(), loadClip(c)]);
      if (cancelled || !el) return;
      anim?.destroy();
      anim = lottie.loadAnimation({ container: el, renderer: "svg", loop: opts.loop, autoplay: false, animationData: data });
      looping = opts.loop;
      if (opts.still) {
        anim.goToAndStop(STILL[c], true);
        return;
      }
      if (!opts.loop && then) anim.addEventListener("complete", () => mount(then, { loop: true, still: false }));
      playIfDue();
    }

    const near = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        near.disconnect();
        if (reduce) mount(then ?? clip, { loop: false, still: true });
        else mount(clip, { loop, still: false });
      },
      { rootMargin: "300px 0px" }
    );
    const seen = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (reduce || !anim) return;
        if (visible) playIfDue();
        else if (looping) anim.pause();
      },
      { threshold: 0.5 }
    );
    near.observe(el);
    seen.observe(el);
    return () => {
      cancelled = true;
      near.disconnect();
      seen.disconnect();
      anim?.destroy();
    };
  }, [clip, then, loop, reduce]);

  return <div ref={ref} aria-hidden="true" className={cn("pointer-events-none select-none", className)} />;
}
