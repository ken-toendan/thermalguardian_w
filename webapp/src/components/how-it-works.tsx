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
                alt="The Thermal Guardian hardware: an orange wrist-worn wearable and two white IoT sensor nodes for the bathroom and changing room, with labels."
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
      viewBox="0 0 860 420"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className="w-full min-w-[560px] h-auto"
      aria-label="System flow diagram"
    >
      <defs>
        <marker id="tg-arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#304251" />
        </marker>
        <marker id="tg-arrow-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="#ff751f" />
        </marker>
      </defs>

      <g transform="translate(30, 20)">
        <rect width="210" height="100" rx="10" fill="#ff751f" />
        <text x="20" y="36" fontFamily="DM Sans" fontSize="18" fontWeight="800" fill="#fff">{txt(n.wearable)}</text>
        <text x="20" y="62" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.92">{txt(n.wearableSub1)}</text>
        <text x="20" y="80" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.92">{txt(n.wearableSub2)}</text>
      </g>
      <g transform="translate(30, 150)">
        <rect width="210" height="100" rx="10" fill="#ff751f" />
        <text x="20" y="36" fontFamily="DM Sans" fontSize="18" fontWeight="800" fill="#fff">{txt(n.bathroom)}</text>
        <text x="20" y="62" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.92">{txt(n.bathroomSub1)}</text>
        <text x="20" y="80" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.92">{txt(n.bathroomSub2)}</text>
      </g>
      <g transform="translate(30, 280)">
        <rect width="210" height="100" rx="10" fill="#ff751f" />
        <text x="20" y="36" fontFamily="DM Sans" fontSize="18" fontWeight="800" fill="#fff">{txt(n.changing)}</text>
        <text x="20" y="62" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.92">{txt(n.changingSub1)}</text>
        <text x="20" y="80" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.92">{txt(n.changingSub2)}</text>
      </g>

      <g transform="translate(325, 150)">
        <rect width="210" height="120" rx="10" fill="#11192b" />
        <text x="20" y="36" fontFamily="DM Sans" fontSize="18" fontWeight="800" fill="#fff">{txt(n.hub)}</text>
        <text x="20" y="62" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.75">{txt(n.hubSub1)}</text>
        <text x="20" y="82" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.75">{txt(n.hubSub2)}</text>
        <text x="20" y="102" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.75">{txt(n.hubSub3)}</text>
      </g>

      <g transform="translate(620, 20)">
        <rect width="210" height="100" rx="10" fill="#304251" />
        <text x="20" y="36" fontFamily="DM Sans" fontSize="18" fontWeight="800" fill="#fff">{txt(n.cloud)}</text>
        <text x="20" y="62" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.92">{txt(n.cloudSub1)}</text>
        <text x="20" y="80" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.92">{txt(n.cloudSub2)}</text>
      </g>
      <g transform="translate(620, 150)">
        <rect width="210" height="100" rx="10" fill="#7b886b" />
        <text x="20" y="36" fontFamily="DM Sans" fontSize="18" fontWeight="800" fill="#fff">{txt(n.app)}</text>
        <text x="20" y="62" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.92">{txt(n.appSub1)}</text>
        <text x="20" y="80" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.92">{txt(n.appSub2)}</text>
      </g>
      <g transform="translate(620, 280)">
        <rect width="210" height="100" rx="10" fill="#f3993e" />
        <text x="20" y="36" fontFamily="DM Sans" fontSize="18" fontWeight="800" fill="#fff">{txt(n.push)}</text>
        <text x="20" y="62" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.92">{txt(n.pushSub1)}</text>
        <text x="20" y="80" fontFamily="Inter" fontSize="12" fill="#fff" fillOpacity="0.92">{txt(n.pushSub2)}</text>
      </g>

      <line x1="240" y1="70" x2="325" y2="190" stroke="#304251" strokeWidth="2" markerEnd="url(#tg-arrow-blue)" />
      <line x1="240" y1="200" x2="325" y2="210" stroke="#304251" strokeWidth="2" markerEnd="url(#tg-arrow-blue)" />
      <line x1="240" y1="330" x2="325" y2="240" stroke="#304251" strokeWidth="2" markerEnd="url(#tg-arrow-blue)" />

      <line x1="535" y1="180" x2="620" y2="80" stroke="#304251" strokeWidth="2" markerEnd="url(#tg-arrow-blue)" />
      <line x1="535" y1="210" x2="620" y2="200" stroke="#304251" strokeWidth="2" markerEnd="url(#tg-arrow-blue)" />
      <line x1="535" y1="240" x2="620" y2="330" stroke="#ff751f" strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#tg-arrow-red)" />
    </svg>
  );
}
