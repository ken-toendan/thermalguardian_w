import * as React from "react";
import { Container, Section, SectionHead } from "@/components/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";
import { cn } from "@/lib/utils";

type StageKey = "pre" | "imm" | "exit";
type RiskKey = "safe" | "monitor" | "alert";

interface StageDef {
  key: StageKey;
  hr: number;
  skin: number;
  bath: number;
  risk: RiskKey;
}

const STAGES: StageDef[] = [
  { key: "pre", hr: 72, skin: 34.0, bath: 41.0, risk: "safe" },
  { key: "imm", hr: 95, skin: 38.2, bath: 41.0, risk: "monitor" },
  { key: "exit", hr: 78, skin: 36.1, bath: 30.0, risk: "safe" },
];

const STAGE_DURATION_MS = 5000;

function gauss(t: number, mu: number, sigma: number, amp: number): number {
  return amp * Math.exp(-((t - mu) ** 2) / (2 * sigma * sigma));
}

function ecgShape(t: number): number {
  const x = Math.max(0, Math.min(1, t));
  return (
    gauss(x, 0.13, 0.02, 0.12) +
    gauss(x, 0.22, 0.006, -0.18) +
    gauss(x, 0.24, 0.007, 1.0) +
    gauss(x, 0.27, 0.008, -0.28) +
    gauss(x, 0.42, 0.035, 0.24)
  );
}

function useECG(bpm: number) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const bpmRef = React.useRef(bpm);
  React.useEffect(() => {
    bpmRef.current = bpm;
  }, [bpm]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let cssW = 0;
    let cssH = 0;
    let buf = new Float32Array(800);
    let bufIdx = 0;
    let sampleCount = 0;
    let lastBeatAt = 0;
    const sampleRate = 200;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      cssW = rect.width;
      cssH = rect.height;
      if (cssW === 0 || cssH === 0) return;
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buf = new Float32Array(Math.max(800, Math.ceil(cssW * 1.2)));
      bufIdx = 0;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let raf = 0;
    let lastFrame = performance.now();

    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - lastFrame) / 1000);
      lastFrame = now;
      const samplesThisFrame = Math.round(dt * sampleRate);
      const curBpm = bpmRef.current || 70;
      const spb = (60 / curBpm) * sampleRate;

      for (let i = 0; i < samplesThisFrame; i++) {
        sampleCount++;
        const phase = (sampleCount - lastBeatAt) / spb;
        if (phase >= 1) {
          lastBeatAt = sampleCount;
        }
        buf[bufIdx] = ecgShape((sampleCount - lastBeatAt) / spb);
        bufIdx = (bufIdx + 1) % buf.length;
      }

      if (cssW === 0) {
        raf = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, cssW, cssH);

      ctx.strokeStyle = "rgba(255,117,31,0.07)";
      ctx.lineWidth = 1;
      for (let x = 0; x < cssW; x += 24) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, cssH);
        ctx.stroke();
      }
      for (let y = 0; y < cssH; y += 24) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(cssW, y);
        ctx.stroke();
      }

      const grad = ctx.createLinearGradient(0, 0, cssW, 0);
      grad.addColorStop(0, "rgba(255,117,31,0)");
      grad.addColorStop(0.08, "rgba(255,117,31,0.95)");
      grad.addColorStop(1, "rgba(255,117,31,0.95)");

      ctx.strokeStyle = grad;
      ctx.lineWidth = 2.2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();

      const midY = cssH * 0.55;
      const amp = cssH * 0.32;
      const samplesToDraw = Math.min(buf.length, Math.ceil(cssW));
      const start = (bufIdx - samplesToDraw + buf.length) % buf.length;
      for (let i = 0; i < samplesToDraw; i++) {
        const idx = (start + i) % buf.length;
        const x = (i / samplesToDraw) * cssW;
        const y = midY - buf[idx] * amp;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return canvasRef;
}

function useStageCycler(): number {
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % STAGES.length);
    }, STAGE_DURATION_MS);
    return () => window.clearInterval(id);
  }, []);
  return idx;
}

const riskStyle: Record<RiskKey, string> = {
  safe: "bg-emerald-brand/15 text-emerald-brand ring-1 ring-emerald-brand/30",
  monitor: "bg-amber-brand/15 text-amber-brand ring-1 ring-amber-brand/30",
  alert: "bg-red-brand/15 text-red-brand ring-1 ring-red-brand/30",
};

export function LiveMonitor() {
  const { lang } = useLang();
  const lm = content.liveMonitor;
  const stageIdx = useStageCycler();
  const stage = STAGES[stageIdx];
  const canvasRef = useECG(stage.hr);
  const stageLabel = lm.stages[stageIdx];

  return (
    <Section id="live-monitor">
      <Container>
        <SectionHead
          kicker={t(lm.kicker, lang)}
          title={t(lm.heading, lang)}
          intro={t(lm.intro, lang)}
        />

        <Card className="overflow-hidden bg-[#0b1220] text-cream border-white/5 p-6 md:p-8 shadow-xl">
          <div className="grid md:grid-cols-5 gap-6 md:gap-8">
            <div className="md:col-span-3 flex flex-col gap-3">
              <div className="flex items-center gap-2 kicker-uppercase text-white/50">
                <span className="relative inline-flex size-2 rounded-full bg-brand">
                  <span className="absolute inset-0 rounded-full bg-brand opacity-60 animate-ping" />
                </span>
                <span>{t(lm.ecgLabel, lang)}</span>
              </div>
              <div className="relative h-44 md:h-56 rounded-xl bg-black/40 ring-1 ring-white/5 overflow-hidden">
                <canvas ref={canvasRef} className="block w-full h-full" aria-hidden="true" />
              </div>
              <div className="mt-1 flex items-center gap-3">
                {STAGES.map((s, i) => (
                  <div
                    key={s.key}
                    className={cn(
                      "flex-1 h-1 rounded-full overflow-hidden bg-white/10 relative",
                      i === stageIdx ? "opacity-100" : "opacity-40"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute inset-y-0 left-0 bg-brand",
                        i === stageIdx ? "animate-[stage-fill_5s_linear_forwards]" : i < stageIdx ? "w-full" : "w-0"
                      )}
                      style={i === stageIdx ? { animationDuration: `${STAGE_DURATION_MS}ms` } : undefined}
                    />
                  </div>
                ))}
              </div>
              <style>{`
                @keyframes stage-fill {
                  from { width: 0%; }
                  to { width: 100%; }
                }
              `}</style>
            </div>

            <div className="md:col-span-2 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-white/[0.04] ring-1 ring-white/5">
                <span className="kicker-uppercase text-white/50">{t(lm.stageLabel, lang)}</span>
                <span className="font-display text-brand font-bold text-sm">
                  {stageLabel[lang]}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <MetricTile label={t(lm.metrics.hr, lang)} value={stage.hr} unit="bpm" />
                <MetricTile label={t(lm.metrics.skin, lang)} value={stage.skin.toFixed(1)} unit="°C" />
                <MetricTile label={t(lm.metrics.bath, lang)} value={stage.bath.toFixed(1)} unit="°C" />
              </div>

              <div className={cn("flex items-center justify-between gap-3 px-4 py-3 rounded-lg", riskStyle[stage.risk])}>
                <span className="kicker-uppercase">{t(lm.statusLabel, lang)}</span>
                <Badge variant="outline" className="border-current text-current bg-transparent">
                  {t(lm.risk[stage.risk], lang)}
                </Badge>
              </div>

              <p className="mt-auto text-xs text-white/50 leading-relaxed pt-2">
                {t(lm.caption, lang)}
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}

function MetricTile({
  label,
  value,
  unit,
}: {
  label: string;
  value: string | number;
  unit: string;
}) {
  return (
    <div className="px-3 py-3 rounded-lg bg-white/[0.04] ring-1 ring-white/5">
      <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/40">
        {label}
      </div>
      <div className="mt-1 font-display font-extrabold text-2xl tabular-nums text-white">
        {value}
        <span className="text-xs text-white/50 ml-0.5 font-normal">{unit}</span>
      </div>
    </div>
  );
}
