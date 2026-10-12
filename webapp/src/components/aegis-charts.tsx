import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";
import { collapseWindow, exitWindow, vacancyByClass } from "@/content/aegis-data";
import { cn } from "@/lib/utils";

// Real recordings (paper Figure 5, poster Figure 2). Lines and fills are SVG stretched to the box; every label is
// HTML, positioned in percent, so text stays legible at phone widths.
const SPAN = 120; // seconds shown on the time axis
const OCC_TOP = 32; // occupied level, in percent of plot height from the top
const pct = (s: number, span = SPAN) => `${(s / span) * 100}%`;

function occupancyPath(presence: number[]) {
  let d = "";
  for (let i = 0; i < presence.length; i++) {
    if (!presence[i] || presence[i - 1]) continue;
    let j = i;
    while (presence[j + 1]) j++;
    d += `M${i} 100V${OCC_TOP}H${j + 1}V100Z`;
  }
  return d;
}

function WindowPlot({ title, presence, motion, vacancy, note }: {
  title: string;
  presence: number[];
  motion: number[];
  vacancy?: { start: number; length: number };
  note: string;
}) {
  const { lang } = useLang();
  const ins = content.aegis.insight;
  return (
    <div className="min-w-0">
      <p className="font-display font-bold text-[15px] text-ae-text">{title}</p>
      {vacancy ? null : <p className="mt-1 text-[12.5px] font-bold text-ae-text">{note}</p>}
      <div className={cn(vacancy ? "mt-6" : "mt-4", "grid grid-cols-[auto_minmax(0,1fr)_auto] gap-x-2")}>
        <div className="relative w-[3.25rem] sm:w-16 text-right text-[11px] sm:text-[12px] text-ae-slate">
          <span className="absolute right-0 -translate-y-1/2" style={{ top: `${OCC_TOP}%` }}>{t(ins.occupied, lang)}</span>
          <span className="absolute right-0 bottom-0 translate-y-1/2">{t(ins.empty, lang)}</span>
        </div>

        <div className="relative h-28 sm:h-32 border-l border-b border-ae-text/40">
          <svg viewBox={`0 0 ${SPAN} 100`} preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
            <path d={occupancyPath(presence)} className="fill-ae-chart" />
            <polyline
              points={motion.map((m, i) => `${i},${100 - m}`).join(" ")}
              fill="none"
              className="stroke-ae-verm"
              strokeOpacity={0.6}
              strokeWidth={1.1}
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {vacancy && (
            <>
              <div
                className="absolute bottom-0 border-x border-ae-verm"
                style={{
                  left: pct(vacancy.start),
                  width: pct(vacancy.length),
                  top: `${OCC_TOP}%`,
                  backgroundImage:
                    "repeating-linear-gradient(-45deg, color-mix(in srgb, var(--color-ae-verm) 55%, transparent) 0 1.5px, transparent 1.5px 6px)",
                }}
              />
              <div className="absolute" style={{ left: pct(vacancy.start), width: pct(vacancy.length), top: "8%" }}>
                <div className="relative h-px bg-ae-text">
                  <span className="absolute -left-px -top-[3px] h-[7px] w-px bg-ae-text" />
                  <span className="absolute -right-px -top-[3px] h-[7px] w-px bg-ae-text" />
                </div>
                <span className="absolute left-1/2 bottom-full mb-1 -translate-x-1/2 whitespace-nowrap text-[11.5px] sm:text-[12.5px] font-bold text-ae-text">
                  {note}
                </span>
              </div>
            </>
          )}
        </div>

        <div className="relative w-6 text-[10.5px] sm:text-[11px] text-ae-verm-text tabular-nums">
          <span className="absolute left-0 top-0 -translate-y-1/2">100</span>
          <span className="absolute left-0 bottom-0 translate-y-1/2">0</span>
        </div>

        <div />
        <div className="relative h-5 text-[11px] text-ae-slate tabular-nums">
          {[0, 20, 40, 60, 80, 100, 120].map((s) => (
            <span key={s} className="absolute top-1 -translate-x-1/2" style={{ left: pct(s) }}>
              {s}
            </span>
          ))}
        </div>
        <div />
      </div>
    </div>
  );
}

const VAC_SPAN = 25;

function AllWindows() {
  const { lang } = useLang();
  const ins = content.aegis.insight;
  const dots = [
    { values: vacancyByClass.exit, dot: "bg-ae-blue" },
    { values: [0], dot: "bg-ae-verm" },
    { values: [0], dot: "bg-ae-slate" },
  ];
  return (
    <div className="min-w-0">
      <p className="font-display font-bold text-[15px] text-ae-text">(c) {t(ins.allTitle, lang)}</p>
      <div className="mt-8 grid grid-cols-[8.75rem_minmax(0,1fr)] sm:grid-cols-[12rem_minmax(0,1fr)] grid-rows-[repeat(3,2.25rem)] gap-x-3">
        {/* the range every exit fell in, behind all three rows */}
        <div className="relative col-start-2 row-start-1 row-end-4 border-l border-b border-ae-text/40">
          <div className="absolute inset-y-0 bg-ae-peach" style={{ left: pct(10, VAC_SPAN), width: pct(13, VAC_SPAN) }}>
            <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[12px] font-bold text-ae-verm-text">
              {t(ins.allRows[0].note, lang)}
            </span>
          </div>
        </div>
        {ins.allRows.map((row, r) => (
          <div key={r} className="contents">
            <span
              className="col-start-1 self-center text-right text-[11.5px] sm:text-[13px] leading-tight text-ae-text"
              style={{ gridRowStart: r + 1 }}
            >
              {t(row.label, lang)}
            </span>
            <div className="relative col-start-2 self-center h-3" style={{ gridRowStart: r + 1 }}>
              {dots[r].values.map((v, k) => (
                <span
                  key={k}
                  className={cn("absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full", dots[r].dot)}
                  style={{ left: pct(v, VAC_SPAN) }}
                />
              ))}
              {r > 0 ? (
                <span
                  className={cn(
                    "absolute left-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11.5px] sm:text-[12.5px]",
                    r === 1 ? "text-ae-verm-text" : "text-ae-slate"
                  )}
                >
                  {t(row.note, lang)}
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[8.75rem_minmax(0,1fr)] sm:grid-cols-[12rem_minmax(0,1fr)] gap-x-3">
        <div className="relative col-start-2 h-5 text-[11px] text-ae-slate tabular-nums">
          {[0, 5, 10, 15, 20, 25].map((s) => (
            <span key={s} className="absolute top-1 -translate-x-1/2" style={{ left: pct(s, VAC_SPAN) }}>
              {s}
            </span>
          ))}
        </div>
        <p className="col-start-2 mt-1 text-[12px] text-ae-slate">{t(ins.allAxis, lang)}</p>
      </div>
    </div>
  );
}

/** The three panels of the occupancy figure: one exit, one simulated collapse, and all 17 windows. */
export function OccupancyFigure() {
  const { lang } = useLang();
  const ins = content.aegis.insight;
  return (
    <figure className="min-w-0">
      <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-[12.5px] text-ae-text/80">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-sm bg-ae-chart" aria-hidden="true" />
          {t(ins.occupancyLegend, lang)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-[2px] w-4 bg-ae-verm/60" aria-hidden="true" />
          {t(ins.motionLegend, lang)}
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-8">
        <WindowPlot
          title={`(a) ${t(ins.exitTitle, lang)}`}
          presence={exitWindow.presence}
          motion={exitWindow.motion}
          vacancy={exitWindow.vacancy}
          note={t(ins.exitNote, lang)}
        />
        <WindowPlot
          title={`(b) ${t(ins.collapseTitle, lang)}`}
          presence={collapseWindow.presence}
          motion={collapseWindow.motion}
          note={t(ins.collapseNote, lang)}
        />
        <p className="-mt-6 pl-[calc(3.25rem+0.5rem)] sm:pl-[calc(4rem+0.5rem)] text-[12px] text-ae-slate">{t(ins.timeAxis, lang)}</p>
        <AllWindows />
      </div>
      <figcaption className="mt-6 max-w-[46rem] text-[13px] leading-relaxed text-ae-slate">{t(ins.caption, lang)}</figcaption>
    </figure>
  );
}
