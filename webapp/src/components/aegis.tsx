import type { ReactNode } from "react";
import {
  DoorOpen,
  TriangleAlert,
  ShieldCheck,
  ExternalLink,
  Play,
  Equal,
  Hourglass,
  Bot,
  Target,
  Database,
  Layers,
  Scale,
  ShieldAlert,
} from "lucide-react";
import { Container, Section } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";
import { VideoFrame } from "@/components/video-frame";
import { AegisMascot } from "@/components/aegis-mascot";
import { ArchitectureFigure } from "@/components/aegis-architecture";
import { OccupancyFigure } from "@/components/aegis-charts";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";
import { cn } from "@/lib/utils";

function BlockHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display font-bold text-[22px] md:text-[26px] leading-snug text-ae-text [overflow-wrap:anywhere]">
      {children}
    </h3>
  );
}

function AegisVideoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 px-4 text-center">
      <span className="grid place-items-center h-14 w-14 rounded-full border-[1.5px] border-ae-sky" aria-hidden="true">
        <Play className="h-4 w-4 translate-x-0.5 text-ae-sky" fill="currentColor" />
      </span>
      <b className="font-display text-[17px] text-white">{label}</b>
    </div>
  );
}

const CHALLENGE_ICONS = [Equal, Hourglass, Bot];
const DESIGN_ICONS = [Database, Layers, Scale, ShieldAlert];
// The ideal value of each results column; anything else is coloured.
const IDEAL = { exits: "4/4", falseEsc: "0/4", missed: "0/13" } as const;

export function Aegis() {
  const { lang } = useLang();
  const ae = content.aegis;
  const res = ae.results;

  return (
    <Section id="aegis" className="bg-ae-wash">
      <Container>
        <div className="space-y-16 md:space-y-24">
          {/* 0. Header */}
          <Reveal>
            <div className="min-w-0 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10">
              <div className="min-w-0">
                <span className="kicker-uppercase block mb-3 text-ae-blue">
                  02 · {t(ae.kicker, lang)}
                </span>
                <h2 className="max-w-3xl font-display text-[1.75rem] md:text-[2.5rem] leading-[1.12] font-extrabold text-ae-text [overflow-wrap:anywhere]">
                  {t(ae.heading, lang)}
                </h2>
                <p className="mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-ae-text/80">
                  {t(ae.intro, lang)}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {ae.badges.map((b, i) => {
                    const isLast = i === ae.badges.length - 1;
                    return (
                      <span
                        key={i}
                        className={cn(
                          "rounded-full bg-white border px-3.5 py-1.5 text-[12.5px]",
                          isLast ? "text-ae-slate border-ae-slate/30" : "text-ae-blue border-ae-blue/25"
                        )}
                      >
                        {t(b, lang)}
                      </span>
                    );
                  })}
                </div>
              </div>
              <AegisMascot clip="appear" then="idle" className="mx-auto h-36 w-36 md:h-44 md:w-44 lg:h-60 lg:w-60" />
            </div>
          </Reveal>

          {/* 1. Problem */}
          <Reveal>
            <div className="min-w-0">
              <BlockHeading>{t(ae.problem.heading, lang)}</BlockHeading>
              <p className="mt-3 max-w-[42rem] text-[15.5px] leading-relaxed text-ae-text/80">
                {t(ae.problem.body, lang)}
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <div className="min-w-0 rounded-xl bg-white border border-ae-text/10 border-t-[3px] border-t-ae-blue p-5 md:p-6">
                  <DoorOpen className="h-5 w-5 text-ae-blue" aria-hidden="true" />
                  <h4 className="mt-3 font-display font-bold text-ae-text">{t(ae.problem.exit.title, lang)}</h4>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ae-text/80">{t(ae.problem.exit.body, lang)}</p>
                </div>
                <div className="min-w-0 rounded-xl bg-white border border-ae-text/10 border-t-[3px] border-t-ae-verm p-5 md:p-6">
                  <TriangleAlert className="h-5 w-5 text-ae-verm-text" aria-hidden="true" />
                  <h4 className="mt-3 font-display font-bold text-ae-text">{t(ae.problem.collapse.title, lang)}</h4>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ae-text/80">{t(ae.problem.collapse.body, lang)}</p>
                </div>
              </div>

              <div className="mt-5 min-w-0 rounded-xl bg-white border border-dashed border-ae-slate/40 p-5">
                <p className="text-[13px] text-ae-slate">{t(ae.problem.sameLabel, lang)}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {ae.problem.sameStates.map((s, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-ae-grey border border-ae-text/10 px-3 py-1 text-[13px] text-ae-text"
                    >
                      {t(s, lang)}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-5 max-w-[42rem] font-semibold leading-relaxed text-ae-text">
                {t(ae.problem.consequence, lang)}
              </p>
            </div>
          </Reveal>

          {/* 2. Why it is hard */}
          <Reveal>
            <div className="min-w-0">
              <BlockHeading>{t(ae.challenge.heading, lang)}</BlockHeading>
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                {ae.challenge.items.map((item, i) => {
                  const Icon = CHALLENGE_ICONS[i];
                  return (
                    <div key={i} className="min-w-0 rounded-xl bg-white border border-ae-text/10 p-5">
                      <Icon className="h-5 w-5 text-ae-blue" aria-hidden="true" />
                      <h4 className="mt-3 font-display font-bold text-ae-text">{t(item.title, lang)}</h4>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-ae-text/80">{t(item.body, lang)}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 min-w-0 rounded-xl bg-ae-tint border-l-[5px] border-ae-blue px-5 py-5 md:px-6 flex gap-4">
                <Target className="h-6 w-6 shrink-0 text-ae-blue" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="font-bold text-ae-blue">{t(ae.challenge.requirementTitle, lang)}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ae-text">{t(ae.challenge.requirementBody, lang)}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 3. Insight */}
          <Reveal>
            <div className="min-w-0">
              <BlockHeading>{t(ae.insight.heading, lang)}</BlockHeading>
              <p className="mt-3 max-w-[42rem] text-[15.5px] leading-relaxed text-ae-text/80">
                {t(ae.insight.body, lang)}
              </p>
              <div className="mt-6 flex min-w-0 items-center gap-4 rounded-xl bg-ae-tint border-l-[5px] border-ae-blue px-5 py-4 md:px-6">
                <p className="min-w-0 flex-1 font-bold leading-relaxed text-ae-text">{t(ae.insight.keyObservation, lang)}</p>
                <AegisMascot clip="investigate" loop className="h-20 w-20 shrink-0 md:h-24 md:w-24" />
              </div>

              <div className="mt-6 min-w-0 rounded-xl bg-white border border-ae-text/10 p-5 md:p-7">
                <OccupancyFigure />
              </div>

              <p className="mt-4 max-w-[42rem] text-[13.5px] leading-relaxed text-ae-slate">
                {t(ae.insight.credit, lang)}
              </p>
            </div>
          </Reveal>

          {/* 4. How it works */}
          <Reveal>
            <div className="min-w-0">
              <BlockHeading>{t(ae.how.heading, lang)}</BlockHeading>

              <div className="mt-8">
                <ArchitectureFigure />
              </div>

              <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {ae.how.steps.map((step, i) => (
                  <div key={i} className="min-w-0 rounded-xl bg-white border border-ae-text/10 p-5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ae-blue text-white font-display font-bold text-sm">
                      {i + 1}
                    </span>
                    <h4 className="mt-3 font-display font-bold text-ae-text">{t(step.title, lang)}</h4>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ae-text/80">{t(step.body, lang)}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 min-w-0 rounded-xl bg-ae-mint border-l-[5px] border-ae-green px-5 py-5 md:px-6 flex gap-4">
                <ShieldCheck className="h-6 w-6 shrink-0 text-ae-green-text" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="font-bold text-ae-green-text">{t(ae.how.guaranteeTitle, lang)}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ae-text">{t(ae.how.guaranteeBody, lang)}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 5. How it was tested */}
          <Reveal>
            <div className="min-w-0">
              <BlockHeading>{t(ae.design.heading, lang)}</BlockHeading>
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                {ae.design.items.map((item, i) => {
                  const Icon = DESIGN_ICONS[i];
                  return (
                    <div key={i} className="min-w-0 rounded-xl bg-white border border-ae-text/10 p-5 flex gap-4">
                      <Icon className="h-5 w-5 shrink-0 text-ae-blue mt-0.5" aria-hidden="true" />
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-ae-text">{t(item.title, lang)}</h4>
                        <p className="mt-1.5 text-[15px] leading-relaxed text-ae-text/80">{t(item.body, lang)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* 6. Results */}
          <Reveal>
            <div className="min-w-0">
              <BlockHeading>{t(res.heading, lang)}</BlockHeading>

              <p className="mt-6 text-[13.5px] text-ae-slate">{t(res.statsLabel, lang)}</p>
              <div className="mt-3 grid sm:grid-cols-3 gap-4">
                {res.stats.map((s, i) => (
                  <div key={i} className="min-w-0 rounded-lg bg-white border-t-2 border-ae-blue px-5 py-5">
                    <div className="font-display font-extrabold text-[40px] md:text-[48px] leading-none tabular-nums text-ae-text">
                      {s.value}
                    </div>
                    <div className="mt-2 text-[14px] text-ae-slate">{t(s.label, lang)}</div>
                  </div>
                ))}
              </div>

              <h4 className="mt-10 font-display font-bold text-lg text-ae-text [overflow-wrap:anywhere]">
                {t(res.tableHeading, lang)}
              </h4>
              {/* phones: one card per row, so every number is visible without sideways scrolling */}
              <div className="mt-4 space-y-2 sm:hidden">
                {res.rows.map((row, i) => (
                  <div
                    key={i}
                    className={cn(
                      "min-w-0 rounded-lg border px-3.5 py-3",
                      row.highlight ? "bg-ae-hl border-ae-blue/40" : "bg-white border-ae-text/10"
                    )}
                  >
                    <p className="flex flex-wrap items-baseline justify-between gap-x-3 text-[14px]">
                      <b className="text-ae-text">{t(row.method, lang)}</b>
                      <span className="text-ae-slate">{t(res.evidence[row.evidence], lang)}</span>
                    </p>
                    <dl className="mt-2 grid grid-cols-3 gap-2">
                      {(["exits", "falseEsc", "missed"] as const).map((k) => (
                        <div key={k} className="flex min-w-0 flex-col">
                          <dt className="flex-1 text-[11px] leading-tight text-ae-slate">{t(res.columns[k], lang)}</dt>
                          <dd
                            className={cn(
                              "mt-0.5 text-[15px] font-bold tabular-nums",
                              row[k] !== IDEAL[k] ? "text-ae-verm-text" : "text-ae-text"
                            )}
                          >
                            {row[k]}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
              <div className="mt-4 hidden overflow-x-auto sm:block">
                <table className="w-full min-w-[640px] border-collapse text-[14px]">
                  <thead>
                    <tr>
                      <th className="text-left font-bold pb-2 border-b-2 border-ae-text px-2.5 align-bottom">
                        {t(res.columns.method, lang)}
                      </th>
                      <th className="text-left font-bold pb-2 border-b-2 border-ae-text px-2.5 align-bottom">
                        {t(res.columns.evidence, lang)}
                      </th>
                      {(["exits", "falseEsc", "missed"] as const).map((k) => (
                        <th key={k} className="text-center font-bold pb-2 border-b-2 border-ae-text px-2.5 align-bottom">
                          {t(res.columns[k], lang)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {res.rows.map((row, i) => (
                      <tr
                        key={i}
                        className={cn(row.highlight && "bg-ae-hl font-bold", i === 4 && "border-t-[3px] border-ae-text/15")}
                      >
                        <td className="px-2.5 py-2.5 border-b border-ae-text/10">{t(row.method, lang)}</td>
                        <td className={cn("px-2.5 py-2.5 border-b border-ae-text/10", !row.highlight && "text-ae-slate")}>
                          {t(res.evidence[row.evidence], lang)}
                        </td>
                        {(["exits", "falseEsc", "missed"] as const).map((k) => (
                          <td
                            key={k}
                            className={cn(
                              "px-2.5 py-2.5 border-b border-ae-text/10 text-center tabular-nums",
                              row[k] !== IDEAL[k] && "text-ae-verm-text"
                            )}
                          >
                            {row[k]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 max-w-[46rem] text-[13px] text-ae-slate">{t(res.tableNote, lang)}</p>

              <h4 className="mt-10 font-display font-bold text-lg text-ae-text">{t(res.findingsHeading, lang)}</h4>
              <ol className="mt-4 max-w-[46rem] space-y-3">
                {res.findings.map((f, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ae-text/85">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ae-tint text-[12.5px] font-bold text-ae-blue">
                      {i + 1}
                    </span>
                    <span className="min-w-0">{t(f, lang)}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {/* 7. Edge deployment */}
          <Reveal>
            <div className="min-w-0">
              <BlockHeading>{t(ae.edge.heading, lang)}</BlockHeading>
              <p className="mt-3 max-w-[42rem] text-[15.5px] leading-relaxed text-ae-text/80">{t(ae.edge.body, lang)}</p>
              <div className="mt-6 space-y-2 sm:hidden">
                {ae.edge.rows.map((row, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex min-w-0 items-center justify-between gap-3 rounded-lg border px-3.5 py-3 text-[14px]",
                      row.pending ? "bg-ae-peach border-ae-verm/30" : "bg-white border-ae-text/10"
                    )}
                  >
                    <div className="min-w-0">
                      <p className="font-bold text-ae-text">{t(row.platform, lang)}</p>
                      <p className="text-[13px] text-ae-slate">{row.model}</p>
                    </div>
                    <p
                      className={cn(
                        "shrink-0 text-right tabular-nums",
                        row.pending ? "font-bold text-ae-verm-text" : "font-semibold text-ae-text"
                      )}
                    >
                      {t(row.latency, lang)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 hidden overflow-x-auto sm:block">
                <table className="w-full min-w-[520px] max-w-3xl border-collapse text-[14px]">
                  <thead>
                    <tr>
                      {(["platform", "model", "latency"] as const).map((k) => (
                        <th key={k} className="text-left font-bold pb-2 border-b-2 border-ae-text px-2.5">
                          {t(ae.edge.columns[k], lang)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ae.edge.rows.map((row, i) => (
                      <tr key={i} className={cn(row.pending && "bg-ae-peach")}>
                        <td className="px-2.5 py-2.5 border-b border-ae-text/10">{t(row.platform, lang)}</td>
                        <td className="px-2.5 py-2.5 border-b border-ae-text/10">{row.model}</td>
                        <td
                          className={cn(
                            "px-2.5 py-2.5 border-b border-ae-text/10 tabular-nums",
                            row.pending && "font-bold text-ae-verm-text"
                          )}
                        >
                          {t(row.latency, lang)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* 8. Limitations and next steps */}
          <Reveal>
            <div className="min-w-0">
              <BlockHeading>{t(ae.limits.heading, lang)}</BlockHeading>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                {[
                  { label: ae.limits.limitsLabel, items: ae.limits.limits },
                  { label: ae.limits.nextLabel, items: ae.limits.next },
                ].map((group, g) => (
                  <div key={g} className="min-w-0 rounded-xl bg-white border border-ae-text/10 p-5 md:p-6">
                    <p className="kicker-uppercase text-ae-blue">{t(group.label, lang)}</p>
                    <ul className="mt-3 space-y-2.5">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-ae-text/85">
                          <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-ae-blue" aria-hidden="true" />
                          <span className="min-w-0">{t(item, lang)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 9. Video, citation and authors */}
          <Reveal>
            <div className="min-w-0">
              <BlockHeading>{t(ae.video.heading, lang)}</BlockHeading>

              <div className="mt-6 max-w-3xl mx-auto min-w-0">
                <VideoFrame
                  videoId={null}
                  bilibiliId={ae.video.bilibiliId}
                  src={ae.video.src}
                  poster={ae.video.poster}
                  title="Aegis"
                  className="rounded-md bg-ae-navy border-0 border-b-[4px] md:border-b-[5px] border-ae-blue"
                  placeholder={<AegisVideoPlaceholder label={t(ae.video.soon, lang)} />}
                />
              </div>

              <div className="mt-6 max-w-3xl mx-auto min-w-0">
                <p className="font-display font-bold text-[15.5px] leading-snug text-ae-text [overflow-wrap:anywhere]">
                  {ae.paperTitle}
                </p>
              </div>
              <div className="mt-2 max-w-3xl mx-auto min-w-0 flex flex-wrap items-center gap-4">
                <span className="text-[14px] text-ae-slate">{t(ae.citation, lang)}</span>
                {ae.paperUrl ? (
                  <a
                    href={ae.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-10 px-5 rounded-md bg-ae-blue text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    {t(ae.readPaper, lang)}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>

              <div className="mt-6 max-w-3xl mx-auto min-w-0">
                <p className="text-[14px] text-ae-text">
                  <span className="text-ae-slate">{t(ae.authorsLabel, lang)}: </span>
                  {ae.authors}
                </p>
                <p className="mt-1 text-[13px] text-ae-slate">{t(ae.authorsNote, lang)}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
