import type { ReactNode } from "react";
import { DoorOpen, TriangleAlert, ShieldCheck, ExternalLink, Play } from "lucide-react";
import { Container, Section } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";
import { VideoFrame } from "@/components/video-frame";
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

export function Aegis() {
  const { lang } = useLang();
  const ae = content.aegis;

  return (
    <Section id="aegis" className="bg-ae-wash">
      <Container>
        <div className="space-y-16 md:space-y-24">
          {/* 0. Header */}
          <Reveal>
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

          {/* 2. Insight */}
          <Reveal>
            <div className="min-w-0">
              <BlockHeading>{t(ae.insight.heading, lang)}</BlockHeading>
              <p className="mt-3 max-w-[42rem] text-[15.5px] leading-relaxed text-ae-text/80">
                {t(ae.insight.body, lang)}
              </p>

              <div className="mt-8 min-w-0 rounded-xl bg-white border border-ae-text/10 p-5 md:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="text-[13px] text-ae-slate">{t(ae.insight.chartLabel, lang)}</span>
                  <div className="flex items-center gap-4 text-[12.5px] text-ae-text/80">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="inline-block h-3 w-3 rounded-sm bg-ae-chart" aria-hidden="true" />
                      {t(ae.insight.occupied, lang)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="inline-block h-3 w-3 rounded-sm bg-white border border-dashed border-ae-slate/60"
                        aria-hidden="true"
                      />
                      {t(ae.insight.empty, lang)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  {/* Exit bar */}
                  <div className="min-w-0 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="shrink-0 sm:w-20 text-[13px] font-semibold text-ae-text">
                      {t(ae.insight.exitLabel, lang)}
                    </span>
                    <div className="relative min-w-0 flex-1 h-8 md:h-9 rounded-md overflow-hidden border border-ae-text/10 flex">
                      <div className="w-[30%] bg-ae-chart" />
                      <div
                        className="relative flex-1 min-w-0 bg-white flex items-center justify-center px-2"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg, color-mix(in srgb, var(--color-ae-slate) 18%, transparent) 0, color-mix(in srgb, var(--color-ae-slate) 18%, transparent) 2px, transparent 2px, transparent 8px)",
                        }}
                      >
                        <span className="text-[12px] md:text-[13px] font-bold text-ae-blue text-center leading-snug">
                          {t(ae.insight.exitNote, lang)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Collapse bar */}
                  <div className="min-w-0 flex flex-col gap-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="shrink-0 sm:w-20 text-[13px] font-semibold text-ae-text">
                        {t(ae.insight.collapseLabel, lang)}
                      </span>
                      <span className="min-w-0 flex-1 text-right text-[12px] md:text-[13px] font-bold text-ae-verm-text leading-snug">
                        {t(ae.insight.collapseNote, lang)}
                      </span>
                    </div>
                    <div className="sm:pl-[calc(5rem+1rem)] min-w-0">
                      <div className="h-8 md:h-9 rounded-md bg-ae-chart border border-ae-text/10" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 max-w-[42rem] text-[13.5px] leading-relaxed text-ae-slate">
                {t(ae.insight.credit, lang)}
              </p>
            </div>
          </Reveal>

          {/* 3. How it works */}
          <Reveal>
            <div className="min-w-0">
              <BlockHeading>{t(ae.how.heading, lang)}</BlockHeading>

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

          {/* 4. Results */}
          <Reveal>
            <div className="min-w-0">
              <BlockHeading>{t(ae.results.heading, lang)}</BlockHeading>
              <p className="mt-3 max-w-[42rem] text-[15.5px] leading-relaxed text-ae-text/80">
                {t(ae.results.context, lang)}
              </p>

              <p className="mt-6 text-[13.5px] text-ae-slate">{t(ae.results.statsLabel, lang)}</p>
              <div className="mt-3 grid sm:grid-cols-3 gap-4">
                {ae.results.stats.map((s, i) => (
                  <div key={i} className="min-w-0 rounded-lg bg-white border-t-2 border-ae-blue px-5 py-5">
                    <div className="font-display font-extrabold text-[40px] md:text-[48px] leading-none tabular-nums text-ae-text">
                      {s.value}
                    </div>
                    <div className="mt-2 text-[14px] text-ae-slate">{t(s.label, lang)}</div>
                  </div>
                ))}
              </div>

              <h4 className="mt-10 font-display font-bold text-lg text-ae-text [overflow-wrap:anywhere]">
                {t(ae.results.compareHeading, lang)}
              </h4>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-[14px]">
                  <thead>
                    <tr>
                      <th className="text-left font-bold pb-2 border-b-2 border-ae-text px-2.5">
                        {t(ae.results.columns.method, lang)}
                      </th>
                      <th className="text-center font-bold pb-2 border-b-2 border-ae-text px-2.5">
                        {t(ae.results.columns.falseEsc, lang)}
                      </th>
                      <th className="text-center font-bold pb-2 border-b-2 border-ae-text px-2.5">
                        {t(ae.results.columns.missed, lang)}
                      </th>
                      <th className="text-left font-bold pb-2 border-b-2 border-ae-text px-2.5">
                        {t(ae.results.columns.note, lang)}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ae.results.rows.map((row, i) => (
                      <tr key={i} className={cn(row.highlight && "bg-ae-hl font-bold")}>
                        <td className="px-2.5 py-2.5 border-b border-ae-text/10">{t(row.method, lang)}</td>
                        <td
                          className={cn(
                            "px-2.5 py-2.5 border-b border-ae-text/10 text-center tabular-nums",
                            row.falseEsc !== "0/4" && "text-ae-verm-text"
                          )}
                        >
                          {row.falseEsc}
                        </td>
                        <td
                          className={cn(
                            "px-2.5 py-2.5 border-b border-ae-text/10 text-center tabular-nums",
                            row.missed !== "0/13" && "text-ae-verm-text"
                          )}
                        >
                          {row.missed}
                        </td>
                        <td className="px-2.5 py-2.5 border-b border-ae-text/10">{t(row.note, lang)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 max-w-[42rem] text-[14px] text-ae-slate">{t(ae.results.caveat, lang)}</p>
            </div>
          </Reveal>

          {/* 5. Video, citation and authors */}
          <Reveal>
            <div className="min-w-0">
              <BlockHeading>{t(ae.video.heading, lang)}</BlockHeading>

              <div className="mt-6 max-w-3xl mx-auto min-w-0">
                <VideoFrame
                  videoId={null}
                  src={ae.video.src}
                  poster={ae.video.poster}
                  title="Aegis"
                  className="rounded-md bg-ae-navy border-0 border-b-[4px] md:border-b-[5px] border-ae-blue"
                  placeholder={<AegisVideoPlaceholder label={t(ae.video.soon, lang)} />}
                />
              </div>

              <div className="mt-6 max-w-3xl mx-auto min-w-0 flex flex-wrap items-center gap-4">
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
