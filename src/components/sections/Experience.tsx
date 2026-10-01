import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { experiences, type Experience as ExperienceItem } from "@/data/resume";
import { Reveal, easeSmooth } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const TRUNCATE_AT = 180;

function truncate(text: string) {
  if (text.length <= TRUNCATE_AT + 40) return null;
  const cut = text.slice(0, TRUNCATE_AT);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,.;:]+$/, "")}…`;
}

function formatMonth(value: string, language: string) {
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(language, { month: "short", year: "numeric" }).format(new Date(year, month - 1, 1));
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const language = i18n.resolvedLanguage ?? "pt-BR";
  const description = t(`resume.experience.${item.id}.description`);
  const short = truncate(description);
  const showFull = expanded || !short;
  const period = `${formatMonth(item.start, language)} — ${
    item.end ? formatMonth(item.end, language) : t("resume.experience.present")
  }`;

  return (
    <article className="glass-panel rounded-3xl p-5 md:p-6">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">{period}</p>
      <h3 className="mt-2 font-display text-xl text-foreground md:text-2xl">
        {t(`resume.experience.${item.id}.role`)}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {item.company} · {t(`resume.experience.${item.id}.location`)}
      </p>

      <AnimatePresence initial={false} mode="wait">
        {showFull ? (
          <motion.div
            key="full"
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeSmooth }}
          >
            <p className="mt-4 text-sm leading-relaxed text-foreground/85">{description}</p>
          </motion.div>
        ) : (
          <motion.p
            key="short"
            className="mt-4 text-sm leading-relaxed text-foreground/85"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {short}
          </motion.p>
        )}
      </AnimatePresence>

      {short && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="mt-4 text-sm font-medium text-primary transition-colors hover:text-primary-glow"
        >
          {expanded ? t("resume.experience.collapse") : t("resume.experience.expand")}
        </button>
      )}
    </article>
  );
}

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="section-anchor px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={t("sections.experience.eyebrow")}
          title={t("sections.experience.title")}
          subtitle={t("sections.experience.subtitle")}
        />
        <div className="relative space-y-6 border-l border-white/10 pl-8 md:pl-12">
          {experiences.map((item) => (
            <Reveal key={item.id}>
              <div className="relative">
                <span className="glow-ring absolute -left-[1.85rem] top-2 h-3.5 w-3.5 rounded-full bg-[image:var(--gradient-primary)] md:-left-[2.85rem]" />
                <ExperienceCard item={item} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
