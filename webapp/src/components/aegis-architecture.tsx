import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import { AegisMascot } from "@/components/aegis-mascot";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";
import { cn } from "@/lib/utils";

// Figure 1 of the poster as a responsive diagram: a top-to-bottom flow on phones, the poster's layout from lg up.

function Flow({ className }: { className?: string }) {
  return (
    <span className={cn("flex shrink-0 items-center justify-center text-ae-slate", className)} aria-hidden="true">
      <ArrowDown className="h-4 w-4 lg:hidden" />
      <ArrowRight className="hidden h-4 w-4 lg:block" />
    </span>
  );
}

function Box({ title, body, className, children }: { title: string; body: string; className?: string; children?: ReactNode }) {
  return (
    <div className={cn("min-w-0 rounded-lg border px-3 py-2.5", className)}>
      <p className="font-display font-bold text-[14px] text-ae-text">{title}</p>
      <p className="mt-1 text-[12.5px] leading-snug text-ae-text/75">{body}</p>
      {children}
    </div>
  );
}

export function ArchitectureFigure() {
  const { lang } = useLang();
  const d = content.aegis.how.diagram;

  return (
    <figure className="min-w-0">
      <div className="rounded-xl bg-white border border-ae-text/10 p-4 md:p-6">
        {/* sensing */}
        <p className="text-[12px] text-ae-slate">{t(d.sensingLabel, lang)}</p>
        <div className="mt-2 grid grid-cols-3 gap-2 lg:max-w-[38rem]">
          {d.sensors.map((s, i) => (
            <div key={i} className="min-w-0 rounded-lg border border-ae-text/25 px-2 py-2 text-center">
              <p className="text-[12.5px] font-bold text-ae-text [overflow-wrap:anywhere]">{t(s.name, lang)}</p>
              <p className="mt-0.5 text-[10.5px] uppercase tracking-wider text-ae-slate">{t(s.state, lang)}</p>
            </div>
          ))}
        </div>
        <Flow className="my-2 lg:hidden" />
        <span className="hidden lg:flex my-2 w-[38rem] max-w-full justify-center text-ae-slate" aria-hidden="true">
          <ArrowDown className="h-4 w-4" />
        </span>

        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_11rem]">
          {/* M-011 and the alarm's own path */}
          <div className="flex min-w-0 flex-col gap-2 lg:flex-row lg:items-stretch lg:col-start-1 lg:row-start-1">
            <Box
              title={t(d.rule.title, lang)}
              body={t(d.rule.body, lang)}
              className="bg-ae-peach border-ae-verm lg:w-[38%]"
            />
            <Flow />
            <Box title={t(d.alarm.title, lang)} body={t(d.alarm.body, lang)} className="flex-1 border-ae-verm/40 border-dashed">
              <span className="mt-2 block h-[3px] rounded-full bg-ae-verm" aria-hidden="true" />
            </Box>
            <Flow className="hidden lg:flex" />
          </div>

          {/* the Aegis sidecar */}
          <div className="flex min-w-0 items-center gap-2 lg:col-start-1 lg:row-start-2">
            <div className="min-w-0 flex-1 rounded-xl border-2 border-dashed border-ae-blue/50 p-3 md:p-4">
              <p className="flex flex-wrap items-baseline gap-x-2">
                <b className="font-display text-[14px] text-ae-blue">{t(d.sidecar.title, lang)}</b>
                <span className="text-[12px] text-ae-slate">{t(d.sidecar.tag, lang)}</span>
              </p>
              <div className="mt-3 flex min-w-0 flex-col gap-2 lg:flex-row lg:items-stretch">
                {d.boxes.map((b, i) => (
                  <div key={i} className="contents">
                    <Box
                      title={t(b.title, lang)}
                      body={t(b.body, lang)}
                      className={cn("lg:flex-1", i === 2 ? "bg-ae-mint border-ae-green" : "bg-ae-tint border-ae-blue/40")}
                    >
                      {i === 1 ? (
                        <p className="mt-2 rounded-md bg-white px-2 py-1 text-[11.5px] text-ae-slate">{t(d.tools, lang)}</p>
                      ) : null}
                    </Box>
                    <Flow />
                  </div>
                ))}
                <div className="flex min-w-0 flex-col gap-2 lg:w-[13.5rem]">
                  <p className="text-[11.5px] text-ae-slate">{t(d.actionsLabel, lang)}</p>
                  <div className="flex min-w-0 items-center gap-2 rounded-lg border border-ae-verm bg-ae-peach px-2.5 py-2">
                    <AegisMascot clip="elevate" className="h-14 w-14 shrink-0" />
                    <div className="min-w-0">
                      <p className="font-display font-bold text-[13.5px] uppercase tracking-wide text-ae-verm-text">{t(d.elevate.title, lang)}</p>
                      <p className="text-[12px] leading-snug text-ae-text/75">{t(d.elevate.body, lang)}</p>
                    </div>
                  </div>
                  <div className="flex min-w-0 items-center gap-2 rounded-lg border border-ae-blue bg-ae-tint px-2.5 py-2">
                    <AegisMascot clip="maintain" className="h-14 w-14 shrink-0" />
                    <div className="min-w-0">
                      <p className="font-display font-bold text-[13.5px] uppercase tracking-wide text-ae-blue">{t(d.maintain.title, lang)}</p>
                      <p className="text-[12px] leading-snug text-ae-text/75">{t(d.maintain.body, lang)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Flow className="hidden lg:flex" />
          </div>

          {/* the caregiver: last on phones, a column beside both paths from lg up */}
          <div className="order-last flex min-w-0 flex-col gap-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <Flow className="lg:hidden" />
            <div className="min-w-0 flex-1 rounded-lg border-2 border-ae-text px-3 py-3 lg:flex lg:flex-col lg:justify-center">
              <p className="font-display font-bold text-[15px] text-ae-text">{t(d.caregiver.title, lang)}</p>
              <p className="mt-1 text-[12.5px] leading-snug text-ae-text/75">{t(d.caregiver.body, lang)}</p>
            </div>
          </div>
        </div>

        {/* the safety rule */}
        <div className="mt-4 flex gap-3 rounded-lg bg-ae-mint border border-ae-green/50 px-3.5 py-3">
          <ShieldCheck className="h-5 w-5 shrink-0 text-ae-green-text" aria-hidden="true" />
          <div className="min-w-0">
            <p className="font-bold text-[14px] text-ae-green-text">{t(d.invariant.title, lang)}</p>
            <p className="mt-0.5 text-[13px] leading-snug text-ae-text">{t(d.invariant.body, lang)}</p>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 max-w-[46rem] text-[13px] leading-relaxed text-ae-slate">{t(d.caption, lang)}</figcaption>
    </figure>
  );
}
