import { motion } from "motion/react";
import { Container, Section, SectionHead } from "@/components/section";
import { Reveal, Stagger, staggerChild } from "@/components/motion/reveal";
import { useLang } from "@/hooks/use-lang";
import { content, t } from "@/content/i18n";
import { cn } from "@/lib/utils";

const calloutAccent = ["text-brand", "text-sky-brand", "text-amber-brand"];

export function HowItWorks() {
  const { lang } = useLang();
  const h = content.how;

  return (
    <Section id="how-it-works" alt>
      <Container>
        <Reveal>
          <SectionHead
            kicker={t(h.kicker, lang)}
            title={t(h.heading, lang)}
            intro={t(h.intro, lang)}
          />
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 md:gap-14 items-start">
          <Reveal>
          <figure className="flex flex-col gap-4">
            <div className="rounded-2xl bg-white border border-ink/10 p-6 md:p-8 flex items-center justify-center">
              <img
                src={lang === "ja" ? "assets/hardware/device-labeled-ja.png" : "assets/hardware/device-labeled-en.png"}
                alt="The Thermal Guardian hardware: an orange upper-arm wearable and two white IoT sensor nodes for the bathroom and changing room, with labels."
                className="max-w-full"
                loading="lazy"
              />
            </div>
            <figcaption className="text-sm text-ink/60 text-center">
              {t(h.hardwareCaption, lang)}
            </figcaption>
          </figure>
          </Reveal>

          <Stagger stagger={0.1}>
          <ul className="flex flex-col gap-4">
            {h.callouts.map((c, i) => (
              <motion.li
                key={i}
                variants={staggerChild}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="rounded-xl bg-white border border-ink/10 border-l-2 p-5"
                style={{ borderLeftColor: ["#ff751f", "#7b886b", "#f3993e"][i] }}
              >
                <span className={cn("kicker-uppercase block mb-2", calloutAccent[i])}>
                  {t(c.tag, lang)}
                </span>
                <h4 className="font-display text-base font-bold mb-1.5">
                  {t(c.title, lang)}
                </h4>
                <p className="text-sm text-ink/70 leading-relaxed">
                  {t(c.body, lang)}
                </p>
              </motion.li>
            ))}
          </ul>
          </Stagger>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 md:mt-20 rounded-2xl bg-white border border-ink/10 p-4 md:p-8 overflow-x-auto">
            <FlowDiagram />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 md:mt-10 rounded-2xl bg-white border border-ink/10 p-6 md:p-8">
            <div className="flex items-baseline gap-3 flex-wrap mb-3">
              <span className="kicker-uppercase text-brand">
                {t(h.measurementsLabel, lang)}
              </span>
              <p className="text-sm text-ink/70 leading-relaxed">
                {t(h.measurementsIntro, lang)}
              </p>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
              {h.measurements.map((m, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-base text-ink"
                >
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full bg-brand"
                  />
                  <span>{t(m, lang)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Stagger stagger={0.12}>
        <ol className="mt-12 max-w-3xl flex flex-col gap-5 list-none">
          {h.steps.map((step, i) => (
            <motion.li
              key={i}
              variants={staggerChild}
              className="grid grid-cols-[auto_1fr] gap-5 items-start"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream font-display font-bold text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-ink text-base md:text-lg leading-relaxed">
                  <strong className="font-semibold">{t(step.lead, lang)}</strong>{" "}
                  <span className="text-ink/70">{t(step.body, lang)}</span>
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
        </Stagger>
      </Container>
    </Section>
  );
}

function FlowDiagram() {
  const { lang } = useLang();
  const n = content.how.diagramNodes;
  const txt = (b: { en: string; ja: string }) => b[lang];

  return (
    <svg
      viewBox="0 0 820 500"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className="w-full min-w-[620px] h-auto"
      aria-label="System flow diagram"
    >
      <defs>
        <marker id="tg-arrow-ink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#304251" />
        </marker>
        <marker id="tg-arrow-brand" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#ff751f" />
        </marker>
      </defs>

      {/* Monitoring devices — wearable + 2 IoT group */}
      <g transform="translate(20, 30)">
        <rect width="230" height="100" rx="12" fill="#ff751f" />
        <text x="18" y="34" fontFamily="DM Sans" fontSize="17" fontWeight="800" fill="#fff">{txt(n.monitoring)}</text>
        <text x="18" y="58" fontFamily="Inter" fontSize="11.5" fill="#fff" fillOpacity="0.95">{txt(n.monitoringSub1)}</text>
        <text x="18" y="84" fontFamily="Inter" fontSize="11" fill="#fff" fillOpacity="0.9">{txt(n.monitoringSub2)}</text>
      </g>

      {/* WiFi CSI node */}
      <g transform="translate(20, 160)">
        <rect width="230" height="96" rx="12" fill="#e9f3f5" stroke="#11192b" strokeOpacity="0.12" strokeWidth="1.5" />
        <text x="18" y="32" fontFamily="DM Sans" fontSize="16" fontWeight="800" fill="#11192b">{txt(n.csi)}</text>
        <text x="18" y="58" fontFamily="Inter" fontSize="11.5" fill="#11192b" fillOpacity="0.7">{txt(n.csiSub1)}</text>
        <text x="18" y="76" fontFamily="Inter" fontSize="11.5" fill="#11192b" fillOpacity="0.7">{txt(n.csiSub2)}</text>
      </g>

      {/* mmWave radar */}
      <g transform="translate(20, 286)">
        <rect width="230" height="96" rx="12" fill="#7b886b" />
        <text x="18" y="32" fontFamily="DM Sans" fontSize="16" fontWeight="800" fill="#fff">{txt(n.radar)}</text>
        <text x="18" y="58" fontFamily="Inter" fontSize="11.5" fill="#fff" fillOpacity="0.9">{txt(n.radarSub1)}</text>
        <text x="18" y="76" fontFamily="Inter" fontSize="11.5" fill="#fff" fillOpacity="0.9">{txt(n.radarSub2)}</text>
      </g>

      {/* Data Processing — Pi Hub (centre) */}
      <g transform="translate(330, 150)">
        <rect width="220" height="150" rx="12" fill="#11192b" />
        <text x="20" y="34" fontFamily="DM Sans" fontSize="18" fontWeight="800" fill="#fff">{txt(n.hub)}</text>
        <text x="20" y="62" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.75">{txt(n.hubSub1)}</text>
        <text x="20" y="86" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.75">{txt(n.hubSub2)}</text>
        <text x="20" y="110" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.75">{txt(n.hubSub3)}</text>
      </g>

      {/* Cloud */}
      <g transform="translate(620, 166)">
        <rect width="180" height="118" rx="12" fill="#304251" />
        <text x="18" y="34" fontFamily="DM Sans" fontSize="17" fontWeight="800" fill="#fff">{txt(n.cloud)}</text>
        <text x="18" y="62" fontFamily="Inter" fontSize="11.5" fill="#fff" fillOpacity="0.85">{txt(n.cloudSub1)}</text>
        <text x="18" y="82" fontFamily="Inter" fontSize="11.5" fill="#fff" fillOpacity="0.85">{txt(n.cloudSub2)}</text>
      </g>

      {/* Web + Mobile App */}
      <g transform="translate(330, 360)">
        <rect width="220" height="96" rx="12" fill="#f3993e" />
        <text x="18" y="34" fontFamily="DM Sans" fontSize="16" fontWeight="800" fill="#fff">{txt(n.app)}</text>
        <text x="18" y="60" fontFamily="Inter" fontSize="11.5" fill="#fff" fillOpacity="0.95">{txt(n.appSub1)}</text>
        <text x="18" y="78" fontFamily="Inter" fontSize="11.5" fill="#fff" fillOpacity="0.95">{txt(n.appSub2)}</text>
      </g>

      {/* Caregivers & Family */}
      <g transform="translate(620, 360)">
        <rect width="180" height="96" rx="12" fill="#dc2626" />
        <text x="18" y="34" fontFamily="DM Sans" fontSize="15" fontWeight="800" fill="#fff">{txt(n.caregivers)}</text>
        <text x="18" y="60" fontFamily="Inter" fontSize="11.5" fill="#fff" fillOpacity="0.95">{txt(n.caregiversSub1)}</text>
      </g>

      {/* Top-left label + pulsing radio-wave glyph */}
      <g transform="translate(20, 10)">
        <text x="22" y="13" fontFamily="Inter" fontSize="11" fontWeight="700" fill="#304251" letterSpacing="0.08em">
          {txt(n.wirelessLabel)}
        </text>
        {/* Three concentric wifi-style arcs that pulse outward */}
        {[0, 0.5, 1].map((delay, i) => (
          <motion.path
            key={i}
            d="M 2 14 Q 8 8 14 14"
            fill="none"
            stroke="#ff751f"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1.15, 1.4] }}
            transition={{ duration: 1.6, repeat: Infinity, delay, ease: "easeOut" }}
            style={{ transformOrigin: "8px 14px" }}
          />
        ))}
        <circle cx="8" cy="14" r="1.6" fill="#ff751f" />
      </g>

      {/* Flows: sensors → hub — flowing dashes to show data in motion */}
      {[
        { x1: 250, y1: 80,  x2: 330, y2: 195 },
        { x1: 250, y1: 208, x2: 330, y2: 225 },
        { x1: 250, y1: 334, x2: 330, y2: 255 },
      ].map((a, i) => (
        <motion.line
          key={i}
          x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}
          stroke="#304251" strokeWidth={2}
          strokeDasharray="6 4"
          markerEnd="url(#tg-arrow-ink)"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: i * 0.15 }}
        />
      ))}

      {/* Flow: hub → cloud */}
      <line x1="550" y1="225" x2="620" y2="225" stroke="#304251" strokeWidth="2" markerEnd="url(#tg-arrow-ink)" />

      {/* Flow: cloud → app (vertical down then left to app) */}
      <line x1="710" y1="284" x2="550" y2="400" stroke="#304251" strokeWidth="2" markerEnd="url(#tg-arrow-ink)" />

      {/* Flow: app → caregivers (alert path, brand orange) */}
      <line x1="550" y1="408" x2="620" y2="408" stroke="#ff751f" strokeWidth="2.5" markerEnd="url(#tg-arrow-brand)" />
    </svg>
  );
}
