import * as React from "react";
import { Play } from "lucide-react";
import { Container, Section } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";
import { VideoFrame } from "@/components/video-frame";
import { useLang } from "@/hooks/use-lang";
import { content, t, type BiText, type Lang } from "@/content/i18n";
import { cn } from "@/lib/utils";

// "Label / State" and "Title / Sub" pairs are encoded as a single string in
// i18n so translators only handle one field per node; split on the first
// occurrence of the separator to get the two display parts.
function splitPair(s: string, sep = " / "): [string, string | null] {
  const i = s.indexOf(sep);
  return i === -1 ? [s, null] : [s.slice(0, i), s.slice(i + sep.length)];
}

function AeHeading({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <h3 className="flex items-baseline gap-2.5 font-display font-bold text-lg md:text-xl pb-2 mb-3 border-b-2 border-ae-blue text-ae-text">
      <span className="text-ae-blue font-extrabold">{num}</span>
      {children}
    </h3>
  );
}

function SenseNode({ text }: { text: string }) {
  const [label, state] = splitPair(text);
  return (
    <div className="rounded-md bg-ae-grey border border-[#cfd5de] px-3 py-2 grid content-center gap-0.5 min-h-[52px]">
      <span className="text-[11px] uppercase tracking-wide text-ae-slate">{label}</span>
      <b className="text-[13.5px] text-ae-text">{state}</b>
    </div>
  );
}

function Arrow() {
  return (
    <div className="grid place-items-center text-ae-slate text-lg px-0.5 rotate-90 md:rotate-0 shrink-0" aria-hidden="true">
      →
    </div>
  );
}

function AlarmPath({ original, never }: { original: string; never: string }) {
  return (
    <div className="flex-none md:flex-1 md:min-w-[120px] min-h-[44px] md:min-h-0 grid content-center gap-1 px-1 py-1">
      <em className="not-italic text-[12px] font-bold text-ae-verm-text text-center">{original}</em>
      <div
        className={cn(
          "relative h-[3px] bg-ae-verm my-1",
          "after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2",
          "after:border-y-[6.5px] after:border-y-transparent after:border-l-[9px] after:border-l-ae-verm"
        )}
      />
      <small className="text-[11.5px] text-ae-verm-text text-center">{never}</small>
    </div>
  );
}

function CareNode({ text }: { text: string }) {
  return (
    <div className="rounded-md bg-white border-[1.5px] border-ae-text px-3 py-2 grid place-items-center min-h-[52px]">
      <b className="text-[13.5px] text-ae-text">{text}</b>
    </div>
  );
}

function RuleNode({ text }: { text: string }) {
  return (
    <div className="rounded-md bg-ae-peach border-[1.5px] border-ae-verm px-3 py-2 grid place-items-center min-h-[52px] text-center">
      <b className="text-[13.5px] text-ae-text">{text}</b>
    </div>
  );
}

function SidecarNode({
  tone,
  border,
  title,
  sub,
}: {
  tone: "tint" | "mint" | "peach";
  border: "grey" | "green" | "verm" | "blue";
  title: string;
  sub: string | null;
}) {
  const bg = tone === "tint" ? "bg-ae-tint" : tone === "mint" ? "bg-ae-mint" : "bg-ae-peach";
  const borderClass =
    border === "green"
      ? "border border-ae-green"
      : border === "verm"
      ? "border-[1.5px] border-ae-verm"
      : border === "blue"
      ? "border-[1.5px] border-ae-blue"
      : "border border-[#9cc2de]";
  return (
    <div className={cn("rounded-md px-3 py-2 grid content-center gap-0.5 min-h-[52px] flex-1 min-w-[140px]", bg, borderClass)}>
      <b className="text-[13.5px] text-ae-text">{title}</b>
      {sub ? <span className="text-[11.5px] text-ae-text/75">{sub}</span> : null}
    </div>
  );
}

function Invariant({ text }: { text: string }) {
  const parts = text.split(/(P\(Aegis\)|P\(M-011\))/g);
  return (
    <p className="mt-3 bg-ae-mint border-[1.5px] border-ae-green rounded-md px-3.5 py-3 text-[13.5px] font-bold leading-relaxed text-ae-green-text">
      {parts.map((part, i) => {
        if (part === "P(Aegis)") {
          return (
            <React.Fragment key={i}>
              P<sub>Aegis</sub>
            </React.Fragment>
          );
        }
        if (part === "P(M-011)") {
          return (
            <React.Fragment key={i}>
              P<sub>M-011</sub>
            </React.Fragment>
          );
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </p>
  );
}

function FlowDiagram({ ae, lang }: { ae: typeof content.aegis; lang: Lang }) {
  const d = ae.diagram;
  const [sidecarTitle, sidecarMeta] = splitPair(t(d.sidecar, lang), " · ");
  const [ebTitle, ebSub] = splitPair(t(d.evidenceBundle, lang));
  const [alTitle, alSub] = splitPair(t(d.agentLoop, lang));
  const [sgTitle, sgSub] = splitPair(t(d.safetyGate, lang));
  const [elTitle, elSub] = splitPair(t(d.elevate, lang));
  const [mnTitle, mnSub] = splitPair(t(d.maintain, lang));

  return (
    <div className="grid gap-3">
      <div className="flex flex-col md:flex-row md:flex-wrap items-stretch gap-2">
        <SenseNode text={t(d.wearable, lang)} />
        <SenseNode text={t(d.wifiCsi, lang)} />
        <SenseNode text={t(d.mmwave, lang)} />
        <Arrow />
        <RuleNode text={t(d.ruleFires, lang)} />
        <AlarmPath original={t(d.originalPath, lang)} never={t(d.neverBlocked, lang)} />
        <CareNode text={t(d.caregiver, lang)} />
      </div>

      <div className="border-[1.5px] border-dashed border-ae-blue rounded-lg p-3 grid gap-2.5">
        <div className="text-[12.5px] font-bold text-ae-blue">
          {sidecarTitle} <span className="font-normal text-ae-slate">{sidecarMeta}</span>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap items-stretch gap-2">
          <SidecarNode tone="tint" border="grey" title={ebTitle} sub={ebSub} />
          <Arrow />
          <SidecarNode tone="tint" border="grey" title={alTitle} sub={alSub} />
          <Arrow />
          <SidecarNode tone="mint" border="green" title={sgTitle} sub={sgSub} />
          <Arrow />
          <div className="grid gap-2 flex-1 min-w-[140px]">
            <SidecarNode tone="peach" border="verm" title={elTitle} sub={elSub} />
            <SidecarNode tone="tint" border="blue" title={mnTitle} sub={mnSub} />
          </div>
        </div>
      </div>

      <Invariant text={t(ae.invariant, lang)} />
    </div>
  );
}

function ResultsTable({ ae, lang }: { ae: typeof content.aegis; lang: Lang }) {
  const r = ae.results;
  const thClass = "text-[12.5px] font-bold pb-2 border-b-2 border-ae-text px-2.5";
  const tdClass = "px-2.5 py-2.5 border-b border-[#e3e8ee] tabular-nums";
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-[14.5px]">
        <thead>
          <tr>
            <th className={cn(thClass, "text-left")}>{t(r.headers.method, lang)}</th>
            <th className={cn(thClass, "text-left")}>{t(r.headers.evidence, lang)}</th>
            <th className={cn(thClass, "text-center")}>{t(r.headers.exitsFound, lang)} ↑</th>
            <th className={cn(thClass, "text-center")}>{t(r.headers.falseEscalations, lang)} ↓</th>
            <th className={cn(thClass, "text-center")}>{t(r.headers.missedEscalations, lang)} ↓</th>
          </tr>
        </thead>
        <tbody>
          {r.rows.map((row, i) => (
            <tr key={i} className={row.highlight ? "bg-ae-hl font-bold" : undefined}>
              <td className={tdClass}>{t(row.method, lang)}</td>
              <td className={tdClass}>{t(row.evidence, lang)}</td>
              <td className={cn(tdClass, "text-center", row.exitsShort && "text-ae-verm-text")}>{row.exits}</td>
              <td className={cn(tdClass, "text-center", row.falseEscShort && "text-ae-verm-text")}>{row.falseEsc}</td>
              <td className={cn(tdClass, "text-center", row.missedEscShort && "text-ae-verm-text")}>{row.missedEsc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AegisVideoPlaceholder({ videoSoon }: { videoSoon: BiText }) {
  return (
    <div className="flex flex-col items-center gap-2.5 px-4 text-center">
      <span className="grid place-items-center h-14 w-14 rounded-full border-[1.5px] border-ae-sky" aria-hidden="true">
        <Play className="h-4 w-4 translate-x-0.5 text-ae-sky" fill="currentColor" />
      </span>
      <b className="font-display text-[17px] text-white">{videoSoon.en}</b>
      <span className="font-jp text-[13px] text-ae-sky/90">{videoSoon.ja}</span>
    </div>
  );
}

export function Aegis() {
  const { lang } = useLang();
  const ae = content.aegis;

  return (
    <Section id="aegis" className="bg-ae-wash">
      <Container>
        <Reveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <span className="kicker-uppercase block mb-3 text-ae-blue">
              02 · {t(content.nav.aegis, lang)}
            </span>
            <h2 className="font-display text-[1.75rem] md:text-[2.5rem] leading-[1.12] font-extrabold text-ae-text">
              {t(ae.pitch, lang)}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-sm text-ae-text">
            <header className="bg-ae-navy border-b-[6px] border-ae-blue rounded-t-xl px-6 py-8 md:px-10 md:py-10 grid gap-3">
              <span className="text-[13px] font-semibold text-ae-sky">{t(ae.venue, lang)}</span>
              <h3 className="font-display text-[1.4rem] md:text-[2rem] font-extrabold leading-snug text-white">
                {t(ae.title, lang)}
              </h3>
              <p className="text-[14px] text-white/70">{ae.authors}</p>
              <p className="text-[14px] text-white/70">{t(ae.lab, lang)}</p>
            </header>

            <div className="bg-white border border-t-0 border-[#d9e2ec] rounded-b-xl px-6 py-8 md:px-10 md:py-10 grid gap-7">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div>
                  <AeHeading num="1">{t(ae.problemHeading, lang)}</AeHeading>
                  <p className="text-[15.5px] leading-relaxed">{t(ae.problem, lang)}</p>
                </div>
                <div>
                  <AeHeading num="2">{t(ae.observationHeading, lang)}</AeHeading>
                  <div className="bg-ae-tint border-l-[5px] border-ae-blue px-4 py-3.5">
                    <p className="font-bold leading-snug">{t(ae.observation, lang)}</p>
                    <p className="mt-1.5 text-sm font-normal text-ae-slate">{t(ae.observationNote, lang)}</p>
                  </div>
                </div>
              </div>

              <div className="min-w-0">
                <AeHeading num="3">{t(ae.architectureHeading, lang)}</AeHeading>
                <FlowDiagram ae={ae} lang={lang} />
              </div>

              <div className="min-w-0">
                <AeHeading num="4">{t(ae.resultsHeading, lang)}</AeHeading>
                <ResultsTable ae={ae} lang={lang} />
                <p className="mt-2 text-[13px] text-ae-slate">{t(ae.tableCaption, lang)}</p>
              </div>

              <p className="bg-ae-hl border-l-[5px] border-ae-blue px-4 py-3.5 font-bold leading-snug">
                {t(ae.summary, lang)}
              </p>

              <p className="text-sm leading-relaxed text-ae-slate">{t(ae.limitations, lang)}</p>

              <VideoFrame
                videoId={ae.videoId}
                title="Aegis"
                className="max-w-[720px] mx-auto rounded-md bg-ae-navy border-0 border-b-[5px] border-ae-blue"
                placeholder={<AegisVideoPlaceholder videoSoon={ae.videoSoon} />}
              />

              <div className="flex flex-wrap items-center gap-4">
                <span className="text-sm text-ae-slate">{t(ae.citation, lang)}</span>
                {ae.paperUrl ? (
                  <a
                    href={ae.paperUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center h-10 px-5 rounded-md bg-ae-blue text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    {t(ae.paperButton, lang)}
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </Section>
  );
}
